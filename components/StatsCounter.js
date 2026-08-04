"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function Counter({ value, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const { num, suffix } = parseStatValue(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1400;

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(num * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref} className="stat-item">
      <p className="text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-slate-400 leading-snug px-1">{label}</p>
    </div>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <div className="glass-card-premium !rounded-xl sm:!rounded-2xl stats-grid">
      {stats.map((s) => (
        <Counter key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}
