"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageSection from "../PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { serviceTabs } from "@/lib/data";

export default function ServiceTabsSection() {
  const [active, setActive] = useState(0);
  const tab = serviceTabs[active];
  const isExternal = tab.href && tab.href.startsWith("http");
  const ActionLink = isExternal ? "a" : Link;
  const actionProps = isExternal
    ? { href: tab.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: tab.href || "/services" };

  return (
    <PageSection className="section-india-white">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="section-badge india-badge">SACHIN-NET SOFTWARE HUB</span>
        <h2 className="mt-4 heading-pravisht india-heading mx-auto">
          Sachin-Net Interactive <span className="text-india-navy">IT Software</span> Suite
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {serviceTabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={`service-tab-btn cursor-pointer ${active === i ? "service-tab-btn-active" : ""}`}
          >
            <Icon name={t.icon} className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      <Reveal key={tab.id} className="mt-8 max-w-5xl mx-auto">
        <div className="service-tab-panel card-light !p-0 overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-slate-200 shadow-xl">
          {/* Left Column: IT Software Image Box */}
          <div className="md:col-span-5 relative min-h-[240px] bg-slate-950 overflow-hidden">
            <Image
              src={tab.image || "/banners/website-development.png"}
              alt={tab.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600 text-[10px] font-extrabold uppercase tracking-wider text-white">
              {tab.badge || "SACHIN-NET SOFTWARE"}
            </span>
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 border border-white/15 backdrop-blur-md text-white">
              <div className="text-[11px] font-bold text-blue-300">Sachin-Net Technologies</div>
              <div className="text-xs font-semibold truncate">{tab.title}</div>
            </div>
          </div>

          {/* Right Column: Software Architecture Text Box */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.badge || "SACHIN-NET ENTERPRISE MODULE"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{tab.title}</h3>
              <p className="mt-2.5 text-body-light text-sm sm:text-base leading-relaxed">
                {tab.desc}
              </p>

              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {tab.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/80"
                  >
                    <Icon name="check" className="w-4 h-4 text-emerald-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <ActionLink
                {...actionProps}
                className="px-5 py-2.5 rounded-full bg-[#1d63dc] hover:bg-[#2974f2] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-all"
              >
                <span>Explore {tab.label}</span>
                <span>→</span>
              </ActionLink>
              <Link
                href="/book-service"
                className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                Request Custom Quotation →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
