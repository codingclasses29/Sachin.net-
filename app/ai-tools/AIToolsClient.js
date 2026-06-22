"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { aiTools } from "@/lib/ai-data";

export default function AIToolsClient() {
  const [activeTool, setActiveTool] = useState(aiTools[0]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runTool = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("/api/ai/tools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: activeTool.id, input: input.trim() }),
      });
      const data = await res.json();
      setOutput(data.ok ? data.output : data.error || "Failed");
    } catch {
      setOutput("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader badge="AI Platform" title="Free AI" highlight="Tools" desc="Blog writer, code generator, resume builder, translator — powered by Gemini & GPT." />

      <PageSection first>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-2">
            {aiTools.map((tool) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => { setActiveTool(tool); setOutput(""); }}
                className={`w-full text-left card card-p transition-all no-hover ${activeTool.id === tool.id ? "ai-tool-card border-cyan-500/40" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: tool.color }}><Icon name={tool.icon} className="w-5 h-5" /></span>
                  <div>
                    <p className="text-sm font-semibold">{tool.name}</p>
                    <p className="text-muted">{tool.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Reveal className="lg:col-span-2">
            <div className="card card-p h-full no-hover">
              <h2 className="heading-sm flex items-center gap-2">
                <Icon name={activeTool.icon} className="w-6 h-6 text-cyan-400" />
                {activeTool.name}
              </h2>
              <p className="mt-1 text-body text-sm">{activeTool.desc}</p>
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Apna input yahan likhein..." rows={6} className="field mt-5 resize-none" />
              <button type="button" onClick={runTool} disabled={loading || !input.trim()} className="btn-primary mt-4 disabled:opacity-50">
                {loading ? "Generating..." : "Generate with AI"}
              </button>
              {output && (
                <div className="mt-5 p-4 rounded-xl bg-black/25 border border-[var(--border)]">
                  <p className="text-label mb-2">AI Output</p>
                  <div className="text-body text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">{output}</div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 text-center">
          <p className="text-body text-sm mb-4">Need custom AI for your business?</p>
          <Link href="/ai-services" className="btn-accent">View AI Services <Icon name="arrow" className="w-4 h-4" /></Link>
        </div>
      </PageSection>
    </>
  );
}
