"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/home/CtaSection";
import { aiServices, mlCapabilities, mlDemoTools } from "@/lib/ai-data";

export default function AIServicesClient() {
  const [mlTool, setMlTool] = useState(mlDemoTools[0].id);
  const [mlInput, setMlInput] = useState("");
  const [mlResult, setMlResult] = useState(null);
  const [mlLoading, setMlLoading] = useState(false);

  const runML = async () => {
    if (!mlInput.trim()) return;
    setMlLoading(true);
    setMlResult(null);
    try {
      const res = await fetch("/api/ml", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: mlTool, data: { text: mlInput, budget: 15000, hasPhone: true } }),
      });
      setMlResult(await res.json());
    } catch {
      setMlResult({ error: "ML demo failed" });
    } finally {
      setMlLoading(false);
    }
  };

  const activeTool = mlDemoTools.find((t) => t.id === mlTool);

  return (
    <>
      <PageHeader badge="AI & Machine Learning" title="Future-Ready" highlight="AI & ML Solutions" desc="From ChatGPT chatbots to TensorFlow models — complete AI platforms for your business." />

      <PageSection first>
        <SectionHeading badge="AI Services" title="Artificial" highlight="Intelligence" desc="Enterprise-grade AI solutions for your products and workflows." />
        <div className="mt-10 grid-cards-3">
          {aiServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="ai-tool-card card-p h-full group">
                <span className="icon-box" style={{ background: `${s.color}18`, color: s.color }}>
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <h3 className="mt-4 heading-sm">{s.title}</h3>
                <p className="mt-2 text-body text-sm">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-body">
                      <Icon name="check" className="w-3.5 h-3.5 text-cyan-400" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
                  Get Started <Icon name="arrow" className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection alt>
        <SectionHeading badge="Machine Learning" title="ML" highlight="Capabilities" desc="Python + FastAPI + TensorFlow + PyTorch — production ML models." />
        <div className="mt-10 grid-cards-4">
          {mlCapabilities.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 60}>
              <div className="card card-p h-full text-center no-hover">
                <Icon name={m.icon} className="w-8 h-8 mx-auto text-primary-light" />
                <h3 className="mt-3 heading-sm text-sm">{m.title}</h3>
                <p className="mt-1.5 text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="container-narrow">
          <SectionHeading badge="Live Demo" title="Try ML" highlight="Demo" desc="Sentiment analysis, spam detection, lead prediction and more." center />
          <Reveal>
            <div className="card card-p mt-8 no-hover">
              <div className="flex flex-wrap gap-2 mb-4">
                {mlDemoTools.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => { setMlTool(t.id); setMlResult(null); }}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${mlTool === t.id ? "bg-primary/15 border-primary text-primary-light" : "border-[var(--border)] text-body hover:border-primary/40"}`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
              <textarea value={mlInput} onChange={(e) => setMlInput(e.target.value)} placeholder={activeTool?.placeholder} rows={4} className="field resize-none" />
              <button type="button" onClick={runML} disabled={mlLoading || !mlInput.trim()} className="btn-accent mt-4 disabled:opacity-50">
                {mlLoading ? "Analyzing..." : "Run ML Model"}
              </button>
              {mlResult && (
                <pre className="mt-4 p-4 rounded-xl bg-black/30 border border-[var(--border)] text-xs text-cyan-300 overflow-x-auto">
                  {JSON.stringify(mlResult, null, 2)}
                </pre>
              )}
            </div>
          </Reveal>
          <div className="mt-8 text-center">
            <Link href="/ai-tools" className="btn-primary">Explore All AI Tools <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
