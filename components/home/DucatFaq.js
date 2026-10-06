"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { ducatFaqs } from "@/lib/data";

export default function DucatFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0a1628] text-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Everything you need to know about our IT courses, placement drives, batch timings, and mentorship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {ducatFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0e1c33] border border-slate-700/70 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-blue-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white" : "text-slate-400"
                    }`}
                  >
                    <Icon name="arrow" className="w-3.5 h-3.5 rotate-90" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
