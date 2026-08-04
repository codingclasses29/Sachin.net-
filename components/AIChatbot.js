"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/data";
import { trackChatMessage, trackChatStart } from "@/lib/analytics";

const WELCOME =
  "Namaste! Main Sachin.net ka Gemini AI assistant hoon. Website, School ERP, e-commerce, free quote — kuch bhi poochiye!";

const PROVIDER_LABELS = {
  gemini: "Google Gemini AI",
  groq: "Groq AI",
  openrouter: "OpenRouter AI",
  openai: "ChatGPT AI",
  ollama: "AI Assistant",
  local: "Sachin.net AI",
};

const QUICK_QUESTIONS = [
  "Website banwani hai — kaise shuru karein?",
  "Sachin.net ke baare me batao",
  "School ERP kya hai?",
  "Free quote kaise milega?",
  "Kitne din me website ready hogi?",
  "Contact number kya hai?",
];

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [providerLabel, setProviderLabel] = useState("Google Gemini AI");
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
  const bottomRef = useRef(null);
  const prompted = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  useEffect(() => {
    const hintTimer = setTimeout(() => {
      if (!open && !sessionStorage.getItem("sachin-ai-hint")) {
        setHint(true);
      }
    }, 6000);

    const autoTimer = setTimeout(() => {
      if (!open && !prompted.current && !sessionStorage.getItem("sachin-ai-auto")) {
        prompted.current = true;
        sessionStorage.setItem("sachin-ai-auto", "1");
        setOpen(true);
        trackChatStart();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Website ya software chahiye? Main Sachin.net ke baare me sab bata sakta hoon — services, timeline, free quote. Ya seedha WhatsApp: ${site.phone}`,
          },
        ]);
      }
    }, 12000);

    return () => {
      clearTimeout(hintTimer);
      clearTimeout(autoTimer);
    };
  }, [open]);

  const openChat = () => {
    setOpen(true);
    setHint(false);
    sessionStorage.setItem("sachin-ai-hint", "1");
    trackChatStart();
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    trackChatMessage();
    const userMsg = { role: "user", content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: messages.filter((m) => m.role !== "system"),
        }),
      });
      const data = await res.json();

      if (data.ok && data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        setProviderLabel(PROVIDER_LABELS[data.provider] || "AI Assistant");
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || `WhatsApp karein: ${site.phone}`,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Connection error. WhatsApp: ${site.phone}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {hint && !open && (
        <button
          type="button"
          onClick={openChat}
          className="ai-proactive-hint fixed z-[59] bottom-20 left-4 sm:left-6 max-w-[240px] text-left animate-bounce-subtle"
        >
          <p className="text-xs font-semibold text-white">💬 Website banwani hai?</p>
          <p className="text-[11px] text-slate-200 mt-0.5">Gemini AI se poochho — free!</p>
        </button>
      )}

      <div
        className={`fixed z-[60] flex flex-col bg-dark-2 border border-slate-700/60 shadow-2xl overflow-hidden transition-all duration-300
          bottom-20 left-4 right-4 sm:left-auto sm:right-24 sm:w-[400px]
          ${open ? "opacity-100 scale-100 pointer-events-auto h-[min(540px,calc(100dvh-6rem))]" : "opacity-0 scale-95 pointer-events-none h-0"}`}
        style={{ borderRadius: "1rem" }}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-600 via-white/10 to-green-700 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-sm">
              🇮🇳
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-white text-sm truncate">Sachin.net AI</p>
              <p className="text-[11px] text-white/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {providerLabel}
              </p>
            </div>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="text-white/80 hover:text-white p-1.5" aria-label="Close">
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-white/[0.06] text-slate-200 border border-slate-700/50 rounded-bl-md"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/[0.06] border border-slate-700/50 rounded-2xl px-4 py-3">
                <span className="text-xs text-slate-400 mr-2">Gemini soch raha hai...</span>
                <span className="inline-flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0 max-h-24 overflow-y-auto">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => sendMessage(q)}
              disabled={loading}
              className="text-[10px] text-orange-200 border border-orange-500/30 bg-orange-500/10 rounded-full px-2.5 py-1 hover:bg-orange-500/20 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="p-3 border-t border-slate-700/50 flex gap-2 shrink-0"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Sachin.net ke baare me poochho..."
            className="flex-1 min-w-0 rounded-xl bg-white/[0.05] border border-slate-700/60 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-primary"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="shrink-0 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40"
            aria-label="Send"
          >
            <Icon name="arrow" className="w-4 h-4" />
          </button>
        </form>
      </div>

      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label="Open AI chat"
        className={`fixed z-[60] bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-transform active:scale-95 ${
          open ? "bg-slate-700 text-white" : "bg-gradient-to-br from-orange-500 to-green-600 text-white hover:scale-105"
        }`}
      >
        {open ? <Icon name="close" className="w-6 h-6" /> : <span className="text-sm font-bold">AI</span>}
      </button>
    </>
  );
}
