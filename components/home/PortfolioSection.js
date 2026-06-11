import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { projects } from "@/lib/data";

export function ProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="glass-card overflow-hidden h-full group">
        {/* screenshot mockup */}
        <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
          <div className="absolute inset-x-6 top-6 bottom-0 bg-dark-2/90 rounded-t-xl border border-white/10 group-hover:translate-y-[-4px] transition-transform duration-300">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-400/80" />
              <span className="w-2 h-2 rounded-full bg-amber-300/80" />
              <span className="w-2 h-2 rounded-full bg-green-400/80" />
            </div>
            <div className="p-3 space-y-2">
              <div className="h-2.5 w-2/3 rounded bg-white/20" />
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-5/6 rounded bg-white/10" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="h-8 rounded bg-white/10" />
                <div className="h-8 rounded bg-white/10" />
                <div className="h-8 rounded bg-white/10" />
              </div>
            </div>
          </div>
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-full text-white">
            {p.category}
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>

          <ul className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="text-accent"><Icon name="check" className="w-3 h-3" /></span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-primary-light bg-primary/10 border border-primary/25 rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={p.demo}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 border border-slate-700 hover:border-primary hover:bg-primary/10 rounded-lg px-4 py-2 transition-colors"
          >
            <Icon name="external" className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function PortfolioSection({ limit = 4 }) {
  return (
    <section className="section-y bg-dark-2/60" id="portfolio">
      <div className="container-x">
        <SectionHeading
          badge="Our Portfolio"
          title="Our Recent"
          highlight="Projects"
          desc="Here are some of our latest projects that we have successfully delivered to our clients."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.slice(0, limit).map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={(i % 4) * 100} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/portfolio" className="btn-primary">
            View All Projects <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
