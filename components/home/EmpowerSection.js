import PageSection from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { services } from "@/lib/data";

const featured = services.slice(0, 4);

export default function EmpowerSection() {
  return (
    <PageSection className="section-india-white">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Corporate Title + Sachin-Net IT Software Image & Text Box */}
        <Reveal>
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            SACHIN-NET TECHNOLOGIES &amp; SERVICES
          </span>
          <h2 className="heading-pravisht">
            Empowering Enterprises with <span className="text-india-saffron">Sachin-Net IT Software</span>
          </h2>
          <p className="mt-4 text-body-light max-w-lg leading-relaxed">
            Sachin-Net combines enterprise strategy, modern UI/UX design, and cloud engineering to deliver software that scales — from Hospital &amp; School ERP to AI automation.
          </p>

          {/* Featured Sachin-Net Software Visual Box */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white shadow-xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/banners/website-development.png"
                alt="Sachin-Net Enterprise Software Architecture"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600 text-[10px] font-extrabold uppercase tracking-wider text-white">
                SACHIN-NET CLOUD PLATFORM
              </span>
            </div>
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">
                  Sachin-Net Full-Stack Digital Transformation Suite
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Next.js 16 · Cloud ERP · AI Chatbots · Custom Quotation
                </p>
              </div>
              <Link
                href="/services"
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <span>Explore Suite</span>
                <Icon name="arrow" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Right: 4 Sachin-Net IT Software Image + Text Boxes */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {featured.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link
                href={s.href || "/services"}
                className="group card-light h-full !p-0 overflow-hidden flex flex-col justify-between border border-slate-200 hover:border-blue-500 transition-all"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={s.image || "/banners/website-development.png"}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="280px"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 text-[9px] font-bold uppercase tracking-wider text-blue-300">
                      {s.badge || "Sachin-Net"}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>Sachin-Net Software</span>
                  <span>→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
