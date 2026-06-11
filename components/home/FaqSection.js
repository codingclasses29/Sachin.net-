"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`glass-card !transform-none ${isOpen ? "!border-primary/50" : ""}`}>
                  <button
                    className="w-full flex items-center justify-between gap-3 text-left px-4 sm:px-6 py-4 sm:py-5 min-h-[52px]"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="font-medium text-white">{f.q}</span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary-light flex items-center justify-center text-lg transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">{f.a}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
