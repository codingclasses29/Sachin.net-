"use client";

import { useState } from "react";
import PageSection from "../PageSection";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { quoteOptions, site } from "@/lib/data";

export default function QuoteCalculatorSection() {
  const [type, setType] = useState(quoteOptions[0].id);
  const [pages, setPages] = useState(5);

  const selected = quoteOptions.find((q) => q.id === type) || quoteOptions[0];

  return (
    <PageSection className="section-india-saffron" alt>
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="section-badge india-badge">Interactive Tool</span>
        <h2 className="mt-4 heading-pravisht india-heading mx-auto">
          Tailored <span className="text-india-saffron">Scope &amp; Quotation</span>
        </h2>
        <p className="mt-3 text-body-light">
          Apni zaroorat select karein — client aur software requirement ke hisaab se customized quote paayein.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10 max-w-2xl mx-auto">
        <div className="quote-calculator card-light card-p-lg">
          <label className="text-label text-slate-600">Project Type</label>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quoteOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setType(opt.id)}
                className={`quote-type-btn ${type === opt.id ? "quote-type-btn-active" : ""}`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <label className="text-label text-slate-600 mt-6 block">
            Pages / Features: <strong className="text-india-navy">{pages}</strong>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="quote-range mt-2 w-full"
          />

          <div className="mt-8 p-5 rounded-xl india-estimate-box text-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Custom Quotation</p>
            <p className="mt-1 text-2xl sm:text-3xl font-extrabold india-gradient-text">
              कोटेशन अनुसार (Tailored Quote)
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Scope: <strong>{selected.label}</strong> · Approx <strong>{pages} Pages/Features</strong>
            </p>
          </div>

          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              `Hello Sachin Sir! Mujhe ${selected.label} banwana hai with approx ${pages} pages/features. Kripya requirements ke hisaab se customized quotation share karein.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full mt-6 justify-center !py-3 font-bold text-sm shadow-md flex items-center gap-2"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            <span>Get Tailored Quotation on WhatsApp</span>
          </a>
        </div>
      </Reveal>
    </PageSection>
  );
}
