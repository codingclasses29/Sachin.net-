"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${hidden ? "hidden" : ""}`} aria-hidden={hidden}>
      <div className="text-center">
        <div className="loader-ring mx-auto" />
        <p className="mt-4 text-sm font-semibold gradient-text-animated">Sachin.net</p>
        <p className="mt-1 text-xs text-slate-500">Loading premium experience...</p>
      </div>
    </div>
  );
}
