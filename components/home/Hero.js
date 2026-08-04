"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon";
import TypingEffect from "../TypingEffect";
import TricolorStrip from "../TricolorStrip";
import { site, typingWords } from "@/lib/data";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero-india relative min-h-[90vh] flex items-center overflow-hidden">
      <TricolorStrip className="absolute top-0 inset-x-0 z-20 h-1" />

      <div className="hero-pravisht-media absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className={`object-cover object-center scale-105 ${loaded ? "hero-ken-burns" : ""}`}
          sizes="100vw"
        />
        <div className="hero-india-overlay absolute inset-0" />
        <div className="hero-india-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      </div>

      <div className="container-x relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20 text-center">
        <span className="hero-badge india-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase">
          🇮🇳 Digital India Partner · Bihar, India
        </span>

        <h1 className="mt-6 sm:mt-8 max-w-4xl mx-auto text-[2rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.12] tracking-tight text-white">
          We Build{" "}
          <span className="india-hero-highlight">
            <TypingEffect words={typingWords} />
          </span>
          <span className="block sm:inline sm:ml-2">for Bharat</span>
        </h1>

        <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-100/90 leading-relaxed">
          {site.tagline} — websites, school ERP, e-commerce, mobile apps &amp; AI solutions
          with Indian pricing &amp; 24x7 IST support.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="btn-india-primary">
            Get Free Quote
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
          <Link href="/ai-tools" className="btn-india-outline">
            Try AI Tools Free
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {[
            { v: "100+", l: "Clients" },
            { v: "15+", l: "States" },
            { v: "4.9★", l: "Rating" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l} className="hero-stat-pill">
              <p className="text-lg sm:text-xl font-extrabold text-white">{s.v}</p>
              <p className="text-[10px] sm:text-xs text-slate-300">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
