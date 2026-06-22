"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/data";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <div className="container-x flex items-center justify-between gap-3">
        <p className="text-sm text-slate-300 hidden sm:block">
          <span className="font-semibold text-white">Free Quote</span> — Website &amp; Software
        </p>
        <div className="flex gap-2 w-full sm:w-auto">
          <Link href="/contact" className="btn-primary !py-2 !px-4 text-sm flex-1 sm:flex-none">
            Get Quote
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !py-2 !px-4 text-sm flex-1 sm:flex-none"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
