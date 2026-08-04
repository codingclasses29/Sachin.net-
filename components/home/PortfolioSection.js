import Link from "next/link";
import Image from "next/image";
import PageSection from "@/components/PageSection";
import Reveal from "../Reveal";
import { projects } from "@/lib/data";

function PravishtProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="portfolio-pravisht-card group relative overflow-hidden rounded-2xl min-h-[420px] sm:min-h-[480px]">
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
            <span className="text-xs font-medium text-teal-300/90">#{p.category.replace(/\s+/g, "")}</span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-slate-200/85 max-w-xs leading-relaxed">{p.desc}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export const ProjectCard = PravishtProjectCard;

export default function PortfolioSection({ limit = 3, first = false }) {
  return (
    <PageSection className="section-india-green !py-14 sm:!py-20" id="portfolio" first={first}>
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-india-green">Our Portfolio</span>
        <h2 className="mt-3 heading-pravisht india-heading max-w-2xl">
          Explore Our Journey of <span className="text-india-saffron">Creative Excellence</span>
        </h2>
        <p className="mt-4 text-body-light max-w-xl">
          Latest projects successfully delivered — school ERP, e-commerce, healthcare &amp; more.
        </p>
      </Reveal>

      <div className="mt-10 sm:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.slice(0, limit).map((p, i) => (
          <PravishtProjectCard key={p.title} p={p} delay={i * 100} />
        ))}
      </div>

      {limit && (
        <Reveal className="mt-10 text-center">
          <Link href="/portfolio" className="btn-teal">
            View All Projects
          </Link>
        </Reveal>
      )}
    </PageSection>
  );
}
