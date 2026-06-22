import PageSection from "@/components/PageSection";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { timeline } from "@/lib/data";

export default function TimelineSection() {
  return (
    <PageSection alt>
      <div className="container-narrow">
        <SectionHeading badge="Our Journey" title="Company" highlight="Timeline" desc="From startup to full-stack AI & software company." center />
        <div className="relative mt-12 pl-10">
          <div className="timeline-line" />
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 80}>
              <div className="relative mb-8">
                <span className="absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-[var(--surface)]" />
                <div className="card card-p">
                  <span className="text-xs font-bold text-cyan-400">{item.year}</span>
                  <h3 className="mt-1 heading-sm text-base">{item.title}</h3>
                  <p className="mt-2 text-body text-sm">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
