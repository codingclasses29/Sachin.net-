import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { site } from "@/lib/data";

export default function PageHeader({
  badge,
  title,
  highlight,
  desc,
  image = "/banners/website-development.png",
  softwareTitle = "Sachin-Net Enterprise Software & Cloud Suite",
  softwareDesc = "Custom Next.js Web Platforms, Smart School ERP, MediCare Hospital ERP, NGO Portals & AI Automation engineered to your exact scope.",
}) {
  return (
    <section className="relative overflow-hidden bg-[#031530] text-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 border-b border-white/10">
      {/* TCS-Style Royal Blue Atmospheric Backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 28% 35%, rgba(29, 99, 220, 0.55) 0%, rgba(7, 36, 84, 0.88) 55%, rgba(2, 12, 28, 0.98) 100%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 Cols): Corporate Title & Actions */}
          <Reveal className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{badge || "SACHIN-NET TECHNOLOGIES & SERVICES"}</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              {title}{" "}
              {highlight && <span className="text-blue-300 font-bold">{highlight}</span>}
            </h1>

            {desc && (
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100/85 max-w-2xl leading-relaxed">
                {desc}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/book-service"
                className="px-6 py-3 rounded-full bg-[#1d63dc] hover:bg-[#2974f2] text-white text-xs sm:text-sm font-semibold shadow-lg transition-all"
              >
                Request Custom Quotation →
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-emerald-400" />
                <span>{site.phone}</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column (5 Cols): Sachin-Net IT Software Image + Text Box */}
          <Reveal className="lg:col-span-5">
            <div className="rounded-2xl bg-[#091326]/95 border border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <Image
                  src={image}
                  alt={softwareTitle}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091326] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600/90 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  SACHIN-NET IT SOFTWARE
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/75 border border-white/20 text-[10px] font-bold text-emerald-300">
                  ● Custom Quote
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {softwareTitle}
                </h2>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  {softwareDesc}
                </p>

                <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-blue-300 font-semibold">
                  <span>✓ Next.js · React · Cloud · AI</span>
                  <Link href="/portfolio" className="hover:text-white underline underline-offset-4">
                    View Live Demos ↗
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
