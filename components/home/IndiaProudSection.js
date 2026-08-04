"use client";

import { useEffect, useState } from "react";
import PageSection from "../PageSection";
import Reveal from "../Reveal";
import TricolorStrip from "../TricolorStrip";
import { indiaStates, indiaHighlights } from "@/lib/data";

function IndiaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="india-clock">
      <span className="india-clock-dot" />
      <span className="text-xs font-semibold text-slate-600">IST · {time}</span>
    </div>
  );
}

export default function IndiaProudSection() {
  const [activeState, setActiveState] = useState(indiaStates[0]);

  return (
    <PageSection className="section-india-green">
      <TricolorStrip className="mb-8 sm:mb-10" />
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <span className="section-badge india-badge">🇮🇳 Proudly Made in India</span>
          <h2 className="mt-4 heading-pravisht india-heading">
            Serving Businesses Across <span className="text-india-green">Bharat</span>
          </h2>
          <p className="mt-4 text-body-light max-w-lg">
            Bihar se shuru, poore India me projects deliver karte hain — schools, hospitals,
            shops, startups aur enterprises ke liye digital solutions.
          </p>
          <IndiaClock />

          <div className="mt-8 grid grid-cols-2 gap-4">
            {indiaHighlights.map((item) => (
              <div key={item.label} className="india-stat-card">
                <p className="text-2xl font-extrabold india-gradient-text">{item.value}</p>
                <p className="text-xs text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="india-map-panel card-light card-p-lg">
            <p className="text-sm font-semibold text-slate-800 mb-4">States We Serve — tap to explore</p>
            <div className="flex flex-wrap gap-2">
              {indiaStates.map((state) => (
                <button
                  key={state.name}
                  type="button"
                  onClick={() => setActiveState(state)}
                  className={`india-state-chip ${activeState.name === state.name ? "india-state-chip-active" : ""}`}
                >
                  {state.name}
                </button>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-orange-50 via-white to-green-50 border border-slate-200/80">
              <p className="font-bold text-slate-900">{activeState.name}</p>
              <p className="text-sm text-slate-600 mt-1">{activeState.projects} projects delivered</p>
              <p className="text-xs text-slate-500 mt-2">{activeState.focus}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
