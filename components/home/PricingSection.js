"use client";

import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PageSection from "@/components/PageSection";
import { pricing, bugFixService, site } from "@/lib/data";

export default function PricingSection({ first = false }) {
  return (
    <PageSection id="pricing" first={first}>
      <SectionHeading
        badge="Transparent Pricing"
        title="Simple & Honest"
        highlight="Website Plans"
        desc="No hidden charges. Choose the right package for your business or contact us for custom software requirements."
      />

      {/* 4 Main Pricing Cards */}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {pricing.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 80} className="h-full">
            <div
              className={`card card-p h-full flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                plan.highlighted ? "border-amber-400/80 bg-amber-400/[0.04] ring-2 ring-amber-400/20" : ""
              }`}
            >
              {/* Badge if present */}
              {plan.badgeText && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                  {plan.badgeText}
                </span>
              )}

              <div>
                <h3 className="heading-sm text-lg font-bold">{plan.name}</h3>

                {/* Price Display */}
                <div className="mt-3 pb-3 border-b border-[var(--border)]">
                  <div className="flex items-baseline gap-2">
                    {plan.originalPrice && (
                      <span className="text-xs text-muted line-through font-semibold">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl sm:text-3xl font-black text-primary-light">
                      {plan.price}
                    </span>
                    {plan.discount && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-body text-xs sm:text-sm leading-relaxed min-h-[2.5rem]">
                  {plan.desc}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-body">
                      <Icon name="check" className="w-3.5 h-3.5 text-accent-green shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hello Sachin Kushwaha Sir! I want to choose the "${plan.name}" plan (${plan.price}) on sachin.net.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md"
                      : "btn-primary"
                  }`}
                >
                  <Icon name="whatsapp" className="w-3.5 h-3.5" />
                  <span>{plan.ctaText || "Get Started"}</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bug Fixing Sub-Banner matching flyer */}
      <Reveal delay={200} className="mt-10 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-900 border border-red-500/30 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 font-bold text-xl border border-red-500/30">
              🛠️
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-950 px-2.5 py-0.5 rounded-full mb-1">
                Website Repair &amp; Speed
              </div>
              <h4 className="text-lg font-bold text-white">
                {bugFixService.title} — <span className="text-amber-400 font-black">{bugFixService.price}</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-lg">
                {bugFixService.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {bugFixService.features.map((item, idx) => (
                  <span key={idx} className="text-[11px] text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              "Hello Sachin Sir! I want old website bug fixing & speed optimization (₹999 offer)."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            <span>Fix Website @ ₹999</span>
          </a>
        </div>
      </Reveal>
    </PageSection>
  );
}

