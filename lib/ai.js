import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "./ai-prompt";
import { getLocalFallbackReply } from "./ai-fallback";

const GEMINI_MODELS = [
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-2.5-flash",
];

function getAIConfig() {
  return {
    maxTokens: Number(process.env.AI_MAX_TOKENS) || 1024,
    temperature: Number(process.env.AI_TEMPERATURE) || 0.7,
  };
}

function buildChatMessages(message, history) {
  return [
    { role: "system", content: getSystemPrompt() },
    ...history.slice(-12).map((h) => ({
      role: h.role === "user" ? "user" : "assistant",
      content: h.content,
    })),
    { role: "user", content: message },
  ];
}

function isQuotaError(err) {
  const msg = String(err?.message || err || "").toLowerCase();
  return (
    msg.includes("429") ||
    msg.includes("quota") ||
    msg.includes("billing") ||
    msg.includes("insufficient") ||
    msg.includes("resource_exhausted")
  );
}

async function openAICompatibleChat({
  apiKey,
  baseURL,
  model,
  message,
  history,
  provider,
}) {
  if (!apiKey) return null;

  const { maxTokens, temperature } = getAIConfig();
  const client = new OpenAI({ apiKey, baseURL });

  const completion = await client.chat.completions.create({
    model,
    messages: buildChatMessages(message, history),
    max_tokens: maxTokens,
    temperature,
  });

  const reply = completion.choices?.[0]?.message?.content?.trim();
  if (!reply) return null;
  return { ok: true, reply, provider };
}

async function askGeminiWithModel(message, history, modelName, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: getSystemPrompt(),
    generationConfig: {
      maxOutputTokens: getAIConfig().maxTokens,
      temperature: getAIConfig().temperature,
    },
  });

  const chat = model.startChat({
    history: history.slice(-10).map((h) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.content }],
    })),
  });

  const result = await chat.sendMessage(message);
  const reply = result.response.text()?.trim();
  if (reply) return { ok: true, reply, provider: "gemini" };
  return null;
}

async function askGeminiRest(message, history, modelName, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const { maxTokens, temperature } = getAIConfig();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: getSystemPrompt() }] },
      contents: [
        ...history.slice(-10).map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        })),
        { role: "user", parts: [{ text: message }] },
      ],
      generationConfig: {
        maxOutputTokens: maxTokens,
        temperature,
      },
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const status = data?.error?.status || res.status;
    if (status === "RESOURCE_EXHAUSTED" || res.status === 429) {
      return { quotaExceeded: true };
    }
    return null;
  }

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (reply) return { ok: true, reply, provider: "gemini" };
  return null;
}

async function askGemini(message, history) {
  const apiKey =
    process.env.GEMINI_API_KEY ||
    (process.env.AI_PROVIDER === "gemini" ? process.env.AI_API_KEY : null);
  if (!apiKey) return null;

  const preferred =
    process.env.AI_MODEL || process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const models = preferred
    ? [preferred, ...GEMINI_MODELS.filter((m) => m !== preferred)]
    : GEMINI_MODELS;

  for (const modelName of models) {
    try {
      const result = await askGeminiWithModel(message, history, modelName, apiKey);
      if (result?.ok) return result;
    } catch (err) {
      if (isQuotaError(err)) break;
      try {
        const result = await askGeminiRest(message, history, modelName, apiKey);
        if (result?.quotaExceeded) break;
        if (result?.ok) return result;
      } catch (restErr) {
        if (isQuotaError(restErr)) break;
      }
    }
  }

  return null;
}

async function askGroq(message, history) {
  const apiKey = process.env.GROQ_API_KEY;
  const model =
    process.env.AI_PROVIDER === "groq" && process.env.AI_MODEL
      ? process.env.AI_MODEL
      : process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  return openAICompatibleChat({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1",
    model,
    message,
    history,
    provider: "groq",
  });
}

async function askOpenRouter(message, history) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model =
    process.env.AI_PROVIDER === "openrouter" && process.env.AI_MODEL
      ? process.env.AI_MODEL
      : process.env.OPENROUTER_MODEL || "google/gemini-2.0-flash-exp:free";

  if (!apiKey) return null;

  const { maxTokens, temperature } = getAIConfig();
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://sachin-net.netlify.app",
      "X-Title": "Sachin.net AI",
    },
    body: JSON.stringify({
      model,
      messages: buildChatMessages(message, history),
      max_tokens: maxTokens,
      temperature,
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) return null;
  return { ok: true, reply, provider: "openrouter" };
}

async function askOpenAI(message, history) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || process.env.OPENAI_ENABLED === "false") return null;

  const model =
    process.env.AI_PROVIDER === "openai" && process.env.AI_MODEL
      ? process.env.AI_MODEL
      : process.env.OPENAI_MODEL || "gpt-4o-mini";

  return openAICompatibleChat({
    apiKey,
    model,
    message,
    history,
    provider: "openai",
  });
}

async function askOllama(message, history) {
  if (process.env.OLLAMA_ENABLED !== "true") return null;

  const base = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
  const model = process.env.OLLAMA_MODEL || "llama3";
  const { maxTokens, temperature } = getAIConfig();

  const messages = buildChatMessages(message, history);
  const headers = { "Content-Type": "application/json" };
  if (process.env.OLLAMA_API_KEY) {
    headers.Authorization = `Bearer ${process.env.OLLAMA_API_KEY}`;
  }

  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages,
      stream: false,
      options: { num_predict: maxTokens, temperature },
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  const reply = data.message?.content?.trim();
  if (!reply) return null;
  return { ok: true, reply, provider: "ollama" };
}

function getProviderOrder() {
  const primary = (process.env.AI_PROVIDER || "gemini").trim().toLowerCase();
  const fallbacks = (process.env.AI_PROVIDER_ORDER || "groq,openrouter,openai,ollama")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((name) => name && name !== primary);

  return [primary, ...fallbacks];
}

export async function generateAIReply(message, history = []) {
  const providers = {
    gemini: askGemini,
    groq: askGroq,
    openrouter: askOpenRouter,
    openai: askOpenAI,
    ollama: askOllama,
  };

  let quotaHit = false;

  for (const name of getProviderOrder()) {
    const fn = providers[name];
    if (!fn) continue;

    try {
      const result = await fn(message, history);
      if (result?.ok) return result;
    } catch (err) {
      if (isQuotaError(err)) {
        quotaHit = true;
        continue;
      }
    }
  }

  const fallback = getLocalFallbackReply(message);
  if (fallback) {
    return { ok: true, reply: fallback, provider: "local" };
  }

  return {
    ok: false,
    error: quotaHit
      ? "AI thodi der ke liye busy hai. WhatsApp par message karein: +91 9931306292 — hum turant reply karenge!"
      : "AI abhi available nahi hai. WhatsApp karein: +91 9931306292",
  };
}
