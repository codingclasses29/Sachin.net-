"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { searchIndex } from "@/lib/data";

export default function SiteSearch({ open, onClose }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-label="Site search">
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-700/50">
          <Icon name="search" className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, services, AI tools..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-500 text-sm"
          />
          <kbd className="hidden sm:inline text-[10px] text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-slate-500 text-center">No results found</li>
          ) : (
            results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="icon-box !w-8 !h-8 !rounded-lg bg-primary/15 text-primary-light shrink-0">
                    <Icon name={item.icon || "arrow"} className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-white">{item.title}</span>
                    {item.desc && (
                      <span className="block text-xs text-slate-500 mt-0.5 line-clamp-1">{item.desc}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
