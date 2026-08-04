"use client";

import { useState } from "react";
import PageSection from "../PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { serviceTabs } from "@/lib/data";

export default function ServiceTabsSection() {
  const [active, setActive] = useState(0);
  const tab = serviceTabs[active];

  return (
    <PageSection className="section-india-white">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="section-badge india-badge">What We Build</span>
        <h2 className="mt-4 heading-pravisht india-heading mx-auto">
          Interactive <span className="text-india-navy">Services</span> Hub
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {serviceTabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={`service-tab-btn ${active === i ? "service-tab-btn-active" : ""}`}
          >
            <Icon name={t.icon} className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      <Reveal key={tab.id} className="mt-8 max-w-3xl mx-auto">
        <div className="service-tab-panel card-light card-p-lg">
          <div className="flex items-start gap-4">
            <span className="icon-box !w-14 !h-14 !rounded-xl india-icon-box">
              <Icon name={tab.icon} className="w-7 h-7" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{tab.title}</h3>
              <p className="mt-2 text-body-light">{tab.desc}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {tab.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="check" className="w-4 h-4 text-india-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-india-saffron">
                Contact us for a free custom quote
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
