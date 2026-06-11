import Link from "next/link";
import Icon from "../Icon";
import { site, stats } from "@/lib/data";

const heroBadges = [
  { icon: "rocket", label: "Fast Delivery" },
  { icon: "design", label: "Modern Design" },
  { icon: "shield", label: "Secure & Reliable" },
  { icon: "support", label: "24/7 Support" },
];

const codeLines = [
  { c: "text-purple-400", t: "const business = await sachin.net({" },
  { c: "text-slate-300", t: '  website: "Premium & Fast",' },
  { c: "text-slate-300", t: '  software: ["School ERP", "CRM"],' },
  { c: "text-slate-300", t: '  ecommerce: "Payment Ready",' },
  { c: "text-slate-300", t: "  seo: true," },
  { c: "text-slate-300", t: '  support: "24x7",' },
  { c: "text-purple-400", t: "});" },
  { c: "text-emerald-400", t: "// Result: Your Business Grows" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-24">
      <div className="pointer-events-none absolute -top-32 -left-32 w-48 sm:w-72 lg:w-[28rem] h-48 sm:h-72 lg:h-[28rem] rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-32 w-48 sm:w-72 lg:w-[26rem] h-48 sm:h-72 lg:h-[26rem] rounded-full bg-accent/15 blur-[80px] sm:blur-[120px]" />

      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="min-w-0">
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="leading-tight">Premium Software Development Services</span>
          </span>

          <h1 className="mt-5 sm:mt-6 heading-xl font-extrabold text-white">
            Professional <span className="gradient-text">Website &amp; Software</span>{" "}
            Development Services
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            Business Website, School Management System, E-Commerce, ERP, Mobile
            App &amp; Custom Software Development — everything your business
            needs to grow online.
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
            <Link href="/contact" className="btn-primary">
              Get Free Quote
              <Icon name="arrow" className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="btn-outline">
              <Icon name="play" className="w-4 h-4" />
              View Portfolio
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              WhatsApp Now
            </a>
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

        {/* Code mockup — tablet & desktop */}
        <div className="relative hidden md:block min-w-0">
          <div className="absolute -top-6 lg:-top-8 -left-4 lg:-left-6 animate-float-slow hidden lg:block">
            <span className="glass-card !rounded-xl px-3 py-2 text-sm font-bold text-sky-400 inline-block">React</span>
          </div>
          <div className="absolute -top-3 right-4 lg:right-8 animate-float">
            <span className="glass-card !rounded-xl px-3 py-2 text-sm font-bold text-white inline-block">Next.js</span>
          </div>
          <div className="absolute -bottom-4 left-6 lg:left-10 animate-float hidden lg:block">
            <span className="glass-card !rounded-xl px-3 py-2 text-sm font-bold text-emerald-400 inline-block">Node.js</span>
          </div>

          <div className="glass-card !rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <div className="flex items-center gap-2 px-4 lg:px-5 py-3 border-b border-slate-700/50 bg-white/[0.03]">
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] lg:text-xs text-slate-500 font-mono truncate">
                sachin.net — grow-business.js
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

      {/* Stats */}
      <div className="container-x relative mt-10 sm:mt-14 md:mt-20">
        <div className="glass-card !rounded-xl sm:!rounded-2xl stats-grid">
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
