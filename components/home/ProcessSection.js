import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          badge="Our Process"
          title="How We"
          highlight="Work"
          desc="A clear, transparent 6-step process — from first discussion to long-term support."
        />

        <div className="mt-10 sm:mt-14 grid-cards-3">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={(i % 3) * 100}>
              <div className="glass-card p-7 h-full relative overflow-hidden">
                <span className="absolute -top-3 -right-1 text-7xl font-extrabold text-white/[0.05] select-none">
                  {p.step}
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-sm">
                  {p.step}
                </span>
                <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
