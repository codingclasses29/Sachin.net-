"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/data";

const WELCOME =
  "Namaste! Main Sachin.net ka AI assistant hoon. Website, software, pricing, School ERP — kuch bhi poochiye!";

const PROVIDER_LABELS = {
  gemini: "Gemini AI",
  groq: "Groq AI",
  openrouter: "OpenRouter AI",
  openai: "ChatGPT AI",
  ollama: "AI Assistant",
  local: "Sachin.net AI",
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [providerLabel, setProviderLabel] = useState(
    PROVIDER_LABELS[process.env.NEXT_PUBLIC_AI_PROVIDER] || "Gemini AI"
  );
  const [messages, setMessages] = useState([
    { role: "assistant", content: WELCOME },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

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
            content:
              data.error ||
              `Sorry, AI abhi available nahi hai. WhatsApp karein: ${site.phone}`,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Connection error. WhatsApp par message karein: ${site.phone}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "Website kitne ki banegi?",
    "School ERP kya hai?",
    "Free quote kaise milega?",
  ];

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed z-[60] flex flex-col bg-dark-2 border border-slate-700/60 shadow-2xl shadow-black/40 overflow-hidden transition-all duration-300
          bottom-20 left-4 right-4 sm:left-auto sm:right-24 sm:w-[380px]
          ${open ? "opacity-100 scale-100 pointer-events-auto h-[min(520px,calc(100dvh-6rem))]" : "opacity-0 scale-95 pointer-events-none h-0"}`}
        style={{ borderRadius: "1rem" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Icon name="code" className="w-5 h-5 text-white" />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-white text-sm truncate">Sachin.net AI</p>
              <p className="text-[11px] text-blue-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online — {providerLabel}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-white p-1.5"
            aria-label="Close chat"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
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
              <div className="bg-white/[0.06] border border-slate-700/50 rounded-2xl rounded-bl-md px-4 py-3">
                <span className="flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-2 h-2 rounded-full bg-primary-light animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
            {quickQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="text-[11px] text-primary-light border border-primary/30 bg-primary/10 rounded-full px-3 py-1 hover:bg-primary/20 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
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
            placeholder="Apna sawaal likhein..."
            className="flex-1 min-w-0 rounded-xl bg-white/[0.05] border border-slate-700/60 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-primary"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="shrink-0 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary-dark transition-colors"
            aria-label="Send"
          >
            <Icon name="arrow" className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Toggle button — left side (WhatsApp is right) */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open AI chat"
        className={`fixed z-[60] bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-transform active:scale-95 ${
          open
            ? "bg-slate-700 text-white"
            : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-primary/40 hover:scale-105"
        }`}
      >
        {open ? (
          <Icon name="close" className="w-6 h-6" />
        ) : (
          <span className="text-xl font-bold">AI</span>
        )}
      </button>
    </>
  );
}
