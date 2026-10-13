"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PageSection from "@/components/PageSection";
import { faqs, site } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageSection>
      <SectionHeading
        badge="SACHIN-NET ENTERPRISE FAQ"
        title="Sachin-Net Software &"
        highlight="Quotation Guide"
        desc="Everything you need to know about Sachin-Net Technologies software architecture, live ERP demos, and custom project quotation."
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column (5 Cols): Sachin-Net IT Software Image & Executive Text Box */}
        <Reveal className="lg:col-span-5">
          <div className="rounded-2xl bg-[#071124] text-white border border-blue-500/30 overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              <Image
                src="/banners/hosting-servers.png"
                alt="Sachin-Net Enterprise Software & Cloud Architecture"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071124] via-transparent to-black/30" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600 text-[10px] font-extrabold uppercase tracking-wider text-white">
                SACHIN-NET TECHNOLOGIES
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Sachin-Net Custom Software &amp; Quotation Desk
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every website, School ERP, Hospital ERP, NGO Portal, and AI tool is tailored to your exact business workflow. Contact Sachin-Net for a personalized scope &amp; quotation.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-semibold text-blue-200">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  ✓ Custom Quotation Model
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  ✓ 100% Source Code &amp; Cloud
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  ✓ Live Hospital &amp; NGO ERP
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  ✓ 24×7 Dedicated Support
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/book-service"
                  className="px-5 py-2.5 rounded-full bg-[#1d63dc] hover:bg-[#2974f2] text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  Request Custom Quote →
                </Link>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  WhatsApp: {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column (7 Cols): Sachin-Net Enterprise FAQs */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div
                  className={`card card-static overflow-hidden transition-all ${
                    isOpen ? "border-blue-500/50 shadow-md" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 min-h-[54px] cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-900">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full bg-blue-600/15 text-blue-700 font-bold flex items-center justify-center text-lg transition-transform ${
                        isOpen ? "rotate-45 bg-blue-600 text-white" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-body text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
