import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "./ai-prompt";
import { getLocalFallbackReply } from "./ai-fallback";

const GEMINI_MODELS = [
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-2.5-flash",
];

function isOpenAIQuotaError(err) {
  const msg = String(err?.message || err || "").toLowerCase();
  return (
    msg.includes("429") ||
    msg.includes("quota") ||
    msg.includes("billing") ||
    msg.includes("insufficient")
  );
}

async function askOpenAI(message, history) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || process.env.OPENAI_ENABLED === "false") return null;

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const openai = new OpenAI({ apiKey });

  const messages = [
    { role: "system", content: getSystemPrompt() },
    ...history.slice(-12).map((h) => ({
      role: h.role === "user" ? "user" : "assistant",
      content: h.content,
    })),
    { role: "user", content: message },
  ];

  const completion = await openai.chat.completions.create({
    model,
    messages,
    max_tokens: 900,
    temperature: 0.7,
  });

  const reply = completion.choices?.[0]?.message?.content?.trim();
  if (!reply) return null;
  return { ok: true, reply, provider: "openai" };
}

async function askGeminiWithModel(message, history, modelName, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: getSystemPrompt(),
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
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
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

function isGeminiQuotaError(err) {
  const msg = String(err?.message || err || "").toLowerCase();
  return msg.includes("429") || msg.includes("quota") || msg.includes("resource_exhausted");
}

async function askGemini(message, history) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const preferred = process.env.GEMINI_MODEL;
  const models = preferred
    ? [preferred, ...GEMINI_MODELS.filter((m) => m !== preferred)]
    : GEMINI_MODELS;

  for (const modelName of models) {
    try {
      const result = await askGeminiWithModel(message, history, modelName, apiKey);
      if (result?.ok) return result;
    } catch (err) {
      if (isGeminiQuotaError(err)) break;
      try {
        const result = await askGeminiRest(message, history, modelName, apiKey);
        if (result?.quotaExceeded) break;
        if (result?.ok) return result;
      } catch (restErr) {
        if (isGeminiQuotaError(restErr)) break;
      }
    }
  }

  return null;
}

async function askOllama(message, history) {
  if (process.env.OLLAMA_ENABLED !== "true") return null;

  const base = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
  const model = process.env.OLLAMA_MODEL || "llama3";

  const messages = [
    { role: "system", content: getSystemPrompt() },
    ...history.map((h) => ({
      role: h.role === "user" ? "user" : "assistant",
      content: h.content,
    })),
    { role: "user", content: message },
  ];

  const headers = { "Content-Type": "application/json" };
  if (process.env.OLLAMA_API_KEY) {
    headers.Authorization = `Bearer ${process.env.OLLAMA_API_KEY}`;
  }

  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers,
    body: JSON.stringify({ model, messages, stream: false }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  const reply = data.message?.content?.trim();
  if (!reply) return null;
  return { ok: true, reply, provider: "ollama" };
}

export async function generateAIReply(message, history = []) {
  // Gemini first — OpenAI quota often limited on free/new accounts
  const order = (process.env.AI_PROVIDER_ORDER || "gemini,openai,ollama")
    .split(",")
    .map((s) => s.trim().toLowerCase());

  const providers = {
    gemini: askGemini,
    openai: askOpenAI,
    ollama: askOllama,
  };

  let openaiQuotaHit = false;

  for (const name of order) {
    const fn = providers[name];
    if (!fn) continue;

    try {
      const result = await fn(message, history);
      if (result?.ok) return result;
    } catch (err) {
      if (name === "openai" && isOpenAIQuotaError(err)) {
        openaiQuotaHit = true;
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
    error: openaiQuotaHit
      ? "AI thodi der ke liye busy hai. WhatsApp par message karein: +91 9931306292 — hum turant reply karenge!"
      : "AI abhi available nahi hai. WhatsApp karein: +91 9931306292",
  };
}
