import Link from "next/link";
import Image from "next/image";
import PageSection from "@/components/PageSection";
import Reveal from "../Reveal";
import { projects, liveDemos, site } from "@/lib/data";

function PravishtProjectCard({ p, delay = 0 }) {
  const isLive = Boolean(p.demo && p.demo !== "#");

  return (
    <Reveal delay={delay}>
      <article className="portfolio-pravisht-card group relative overflow-hidden rounded-2xl min-h-[440px] sm:min-h-[500px] flex flex-col justify-between border border-white/10 shadow-xl">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
        )}
        <div className="portfolio-pravisht-overlay absolute inset-0" />

        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-medium text-teal-300/90">#{p.category.replace(/\s+/g, "")}</span>
              {isLive && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 text-[11px] font-bold backdrop-blur-md hover:bg-emerald-500/40 transition-colors shadow-sm"
                  title="Open live website in new tab"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Project ↗</span>
                </a>
              )}
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-slate-200/90 max-w-xs leading-relaxed">{p.desc}</p>

            {p.features && (
              <div className="mt-3 space-y-1">
                {p.features.slice(0, 3).map((f, fi) => (
                  <div key={fi} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <span className="text-teal-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/15">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons: Live Demo & WhatsApp */}
            <div className="pt-3 border-t border-white/15 flex items-center gap-2 flex-wrap">
              {isLive ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs transition-all shadow-md hover:scale-[1.03]"
                >
                  <span>🌐 Live Website ↗</span>
                </a>
              ) : null}

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Namaste Sachin Sir! Mujhe ${p.title} (${p.category}) jaise project ka demo aur quotation chahiye.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                <span>💬 WhatsApp Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export const ProjectCard = PravishtProjectCard;

export default function PortfolioSection({ limit = 6, first = false }) {
  return (
    <PageSection className="section-india-green !py-14 sm:!py-20" id="portfolio" first={first}>
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-india-green">Our Portfolio &amp; Live Proof</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            100% Live Delivered Sites
          </span>
        </div>
        <h2 className="mt-2 heading-pravisht india-heading max-w-2xl">
          Explore Our Journey of <span className="text-india-saffron">Creative Excellence</span>
        </h2>
        <p className="mt-3 text-body-light max-w-xl">
          Real live client websites delivered across India — Hospital ERP, NGO portals, E-Commerce &amp; more. Click to test in real-time.
        </p>

        {/* Quick Clickable Live Proof Badges Bar */}
        <div className="mt-5 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md">
          <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>🔥</span>
            <span>Direct Live Demo Links (अभी चेक करें):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {liveDemos.map((demo) => (
              <a
                key={demo.id}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white text-xs font-semibold border border-slate-700 hover:border-emerald-400/60 transition-all shadow-sm group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                <span>{demo.title}</span>
                <span className="text-emerald-400 font-bold">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 sm:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.slice(0, limit).map((p, i) => (
          <PravishtProjectCard key={p.title} p={p} delay={i * 80} />
        ))}
      </div>

      {limit && (
        <Reveal className="mt-10 text-center">
          <Link href="/portfolio" className="btn-teal">
            View All Projects &amp; Live Demos →
          </Link>
        </Reveal>
      )}
    </PageSection>
  );
}
