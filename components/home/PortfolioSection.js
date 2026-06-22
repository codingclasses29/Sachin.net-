import Link from "next/link";
import PageSection from "@/components/PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { projects } from "@/lib/data";

export function ProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card overflow-hidden h-full group no-hover">
        <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
          <div className="absolute inset-x-6 top-6 bottom-0 bg-dark-2/90 rounded-t-xl border border-white/10 group-hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-400/80" />
              <span className="w-2 h-2 rounded-full bg-amber-300/80" />
              <span className="w-2 h-2 rounded-full bg-green-400/80" />
            </div>
            <div className="p-3 space-y-2">
              <div className="h-2.5 w-2/3 rounded bg-white/20" />
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[1, 2, 3].map((n) => <div key={n} className="h-8 rounded bg-white/10" />)}
              </div>
            </div>
          </div>
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-full text-white">
            {p.category}
          </span>
        </div>
        <div className="card-p">
          <h3 className="heading-sm text-base">{p.title}</h3>
          <p className="mt-2 text-body text-sm">{p.desc}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-1 text-xs text-body">
                <Icon name="check" className="w-3 h-3 text-accent-green" />{f}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] text-primary-light bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">{t}</span>
            ))}
          </div>
          <a href={p.demo} className="mt-4 inline-flex items-center gap-2 text-sm font-medium btn-outline !py-2 !px-3">
            <Icon name="external" className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function PortfolioSection({ limit = 4, first = false }) {
  return (
    <PageSection alt id="portfolio" first={first}>
      <SectionHeading badge="Our Portfolio" title="Our Recent" highlight="Projects" desc="Latest projects successfully delivered to our clients." />
      <div className="mt-10 grid-cards-4">
        {projects.slice(0, limit).map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={(i % 4) * 80} />
        ))}
      </div>
      {limit && (
        <Reveal className="mt-10 text-center">
          <Link href="/portfolio" className="btn-primary">View All Projects <Icon name="arrow" className="w-4 h-4" /></Link>
        </Reveal>
      )}
    </PageSection>
  );
}
