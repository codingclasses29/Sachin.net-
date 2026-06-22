"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PageSection from "@/components/PageSection";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageSection>
      <div className="container-narrow">
        <SectionHeading badge="FAQ" title="Frequently Asked" highlight="Questions" />

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className={`card card-static overflow-hidden ${isOpen ? "border-primary/40" : ""}`}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 min-h-[52px]"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="font-medium text-sm sm:text-base">{f.q}</span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full bg-primary/12 text-primary-light flex items-center justify-center text-lg transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-body text-sm">{f.a}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
