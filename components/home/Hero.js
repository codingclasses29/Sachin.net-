import Link from "next/link";
import Icon from "../Icon";
import { site, stats, trustedCompanies } from "@/lib/data";

const heroBadges = [
  { icon: "rocket", label: "Fast Delivery" },
  { icon: "design", label: "Modern Design" },
  { icon: "shield", label: "Secure & Reliable" },
  { icon: "code", label: "AI Powered" },
];

const codeLines = [
  { c: "text-purple-400", t: "const solution = await sachin.net({" },
  { c: "text-slate-300", t: '  website: "Premium & Fast",' },
  { c: "text-slate-300", t: '  software: ["School ERP", "CRM", "AI"],' },
  { c: "text-slate-300", t: '  ml: ["Prediction", "Vision", "NLP"],' },
  { c: "text-slate-300", t: "  seo: true," },
  { c: "text-slate-300", t: '  support: "24x7",' },
  { c: "text-purple-400", t: "});" },
  { c: "text-emerald-400", t: "// Result: Your Business Grows 🚀" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-24">
      <div className="pointer-events-none absolute -top-32 -left-32 w-48 sm:w-72 lg:w-[28rem] h-48 sm:h-72 lg:h-[28rem] rounded-full bg-primary/25 blur-[80px] sm:blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-40 -right-32 w-48 sm:w-72 lg:w-[26rem] h-48 sm:h-72 lg:h-[26rem] rounded-full bg-accent/20 blur-[80px] sm:blur-[120px] animate-pulse-glow" />

      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="min-w-0">
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="leading-tight">{site.tagline}</span>
          </span>

          <h1 className="mt-5 sm:mt-6 heading-xl font-extrabold text-white">
            We Build <span className="gradient-text-animated">Websites, Software</span>
            {" "}&amp; Digital Solutions
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            Professional Website Development, ERP Software, School Management System,
            Mobile Apps, E-commerce &amp; AI Solutions.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            {heroBadges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-300 border border-slate-700/70 bg-white/[0.03] rounded-full px-2.5 sm:px-3.5 py-1.5"
              >
                <span className="text-amber-400">
                  <Icon name={b.icon} className="w-3.5 h-3.5" />
                </span>
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-7 sm:mt-9 btn-stack">
            <Link href="/contact" className="btn-primary btn-shimmer">
              Get Free Quote
              <Icon name="arrow" className="w-4 h-4" />
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
            <Link href="/ai-tools" className="btn-accent">
              <Icon name="code" className="w-4 h-4" />
              Try AI Tools
            </Link>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex -space-x-3">
              {["RK", "PV", "AV", "NS"].map((initials, i) => (
                <span
                  key={initials}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-dark flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white"
                  style={{
                    background: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"][i],
                  }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-white">100+ Happy Clients</p>
              <p className="text-amber-400 text-xs sm:text-sm">
                ★★★★★ <span className="text-slate-400">4.9 (120+ Reviews)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block min-w-0">
          <div className="absolute -top-6 lg:-top-8 -left-4 lg:-left-6 animate-float-slow hidden lg:block">
            <span className="glass-card-premium !rounded-xl px-3 py-2 text-sm font-bold text-sky-400 inline-block">React</span>
          </div>
          <div className="absolute -top-3 right-4 lg:right-8 animate-float">
            <span className="glass-card-premium !rounded-xl px-3 py-2 text-sm font-bold text-white inline-block">Next.js</span>
          </div>
          <div className="absolute top-1/2 -right-6 animate-float-slow hidden lg:block">
            <span className="glass-card-premium !rounded-xl px-3 py-2 text-sm font-bold text-cyan-400 inline-block">AI/ML</span>
          </div>
          <div className="absolute -bottom-4 left-6 lg:left-10 animate-float hidden lg:block">
            <span className="glass-card-premium !rounded-xl px-3 py-2 text-sm font-bold text-emerald-400 inline-block">Node.js</span>
          </div>

          <div className="glass-card-premium glow-ring !rounded-2xl overflow-hidden shadow-2xl shadow-primary/25">
            <div className="flex items-center gap-2 px-4 lg:px-5 py-3 border-b border-slate-700/50 bg-white/[0.03]">
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] lg:text-xs text-slate-500 font-mono truncate">
                sachin.net — ai-powered.js
              </span>
            </div>
            <div className="p-4 lg:p-6 font-mono text-xs lg:text-[13.5px] leading-6 lg:leading-7 overflow-x-auto">
              {codeLines.map((line, i) => (
                <div key={i} className="flex gap-3 lg:gap-4 whitespace-nowrap">
                  <span className="text-slate-600 select-none w-4 text-right shrink-0">{i + 1}</span>
                  <span className={line.c}>{line.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted companies marquee */}
      <div className="container-x relative mt-10 overflow-hidden">
        <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-4">Trusted By</p>
        <div className="relative">
          <div className="marquee-track gap-8">
            {[...trustedCompanies, ...trustedCompanies].map((name, i) => (
              <span key={`${name}-${i}`} className="text-sm font-semibold text-slate-500 whitespace-nowrap px-4">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x relative mt-10 sm:mt-14 md:mt-16">
        <div className="glass-card-premium !rounded-xl sm:!rounded-2xl stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-slate-400 leading-snug px-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
