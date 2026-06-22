import PageSection from "@/components/PageSection";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <PageSection>
      <SectionHeading
        badge="Our Process"
        title="How We"
        highlight="Work"
        desc="A clear, transparent 6-step process — from first discussion to long-term support."
      />

      <div className="mt-10 sm:mt-12 grid-cards-3">
        {processSteps.map((p, i) => (
          <Reveal key={p.step} delay={(i % 3) * 80}>
            <div className="card card-p h-full relative overflow-hidden">
              <span className="absolute -top-3 -right-1 text-7xl font-extrabold text-white/[0.04] select-none">{p.step}</span>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-white font-bold text-sm">{p.step}</span>
              <h3 className="mt-4 heading-sm text-base">{p.title}</h3>
              <p className="mt-2 text-body text-sm">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
