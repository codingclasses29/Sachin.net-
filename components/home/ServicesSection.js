import PageSection from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services } from "@/lib/data";

export default function ServicesSection({ limit, first = false }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <PageSection id="services" first={first} className="section-india-saffron">
      <SectionHeading
        badge="SACHIN-NET IT SOFTWARE SUITE"
        title="Sachin-Net Enterprise"
        highlight="Software & Digital Solutions"
        desc="End-to-end IT software, custom web engineering, cloud ERP, and AI platforms built by Sachin-Net Technologies."
      />

      <div className="mt-10 sm:mt-12 grid-cards-3">
        {list.map((s, i) => {
          const isExternal = s.href && s.href.startsWith("http");
          const CardLink = isExternal ? "a" : Link;
          const linkProps = isExternal
            ? { href: s.href, target: "_blank", rel: "noopener noreferrer" }
            : { href: s.href || "/contact" };

          return (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="card h-full group card-light overflow-hidden flex flex-col justify-between p-0">
                <div>
                  {/* Top IT Software Image Box */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={s.image || "/banners/website-development.png"}
                      alt={s.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600/95 text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                      {s.badge || "Sachin-Net IT Suite"}
                    </span>
                    <span
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center shadow-lg border border-white/20"
                      style={{ background: s.color || "#2563eb", color: "#fff" }}
                    >
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Software Text Box */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                      {s.company || "Sachin-Net Technologies"}
                    </div>
                    <h3 className="heading-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-body text-sm leading-relaxed">{s.desc}</p>

                    <ul className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <Icon name="check" className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <CardLink
                    {...linkProps}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 group-hover:gap-2.5 transition-all"
                  >
                    <span>Explore Software</span>
                    <Icon name="arrow" className="w-4 h-4" />
                  </CardLink>
                  <Link
                    href="/book-service"
                    className="text-[11px] font-semibold px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                  >
                    Custom Quote
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {limit && (
        <Reveal className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View All Sachin-Net Software Services <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </Reveal>
      )}
    </PageSection>
  );
}
