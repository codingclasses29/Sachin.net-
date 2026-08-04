"use client";

import { useState } from "react";
import Link from "next/link";
import PageSection from "../PageSection";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { quoteOptions } from "@/lib/data";

export default function QuoteCalculatorSection() {
  const [type, setType] = useState(quoteOptions[0].id);
  const [pages, setPages] = useState(5);

  const selected = quoteOptions.find((q) => q.id === type) || quoteOptions[0];
  const estimate = Math.round(selected.base + pages * selected.perPage);

  return (
    <PageSection className="section-india-saffron" alt>
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="section-badge india-badge">Interactive Tool</span>
        <h2 className="mt-4 heading-pravisht india-heading mx-auto">
          Instant <span className="text-india-saffron">Price Estimate</span>
        </h2>
        <p className="mt-3 text-body-light">Apne project ka rough budget turant dekhein — free &amp; no signup.</p>
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
            <p className="text-sm text-slate-600">Estimated starting price</p>
            <p className="mt-1 text-3xl sm:text-4xl font-extrabold india-gradient-text">
              ₹{estimate.toLocaleString("en-IN")}+
            </p>
            <p className="text-xs text-slate-500 mt-2">Final quote depends on exact requirements</p>
          </div>

          <Link href="/contact" className="btn-primary w-full mt-6 justify-center">
            Get Exact Quote <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </PageSection>
  );
}
