"use client";

import { tickerItems } from "@/lib/data";

export default function LiveTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="live-ticker border-y border-slate-200/80 bg-white/90 backdrop-blur-sm overflow-hidden">
      <div className="live-ticker-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="live-ticker-item">
            <span className="live-ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
