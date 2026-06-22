import Link from "next/link";
import PageSection from "@/components/PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { aiServices } from "@/lib/ai-data";

export default function AISection() {
  return (
    <PageSection alt>
      <SectionHeading
        badge="AI & Machine Learning"
        title="Future-Ready"
        highlight="AI Solutions"
        desc="ChatGPT chatbots, ML models, computer vision and predictive analytics — built for your business."
      />
      <div className="mt-10 sm:mt-12 grid-cards-3">
        {aiServices.slice(0, 6).map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80}>
            <div className="ai-tool-card card-p h-full">
              <span className="icon-box" style={{ background: `${s.color}18`, color: s.color }}>
                <Icon name={s.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 heading-sm">{s.title}</h3>
              <p className="mt-2 text-body text-sm">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/ai-services" className="btn-accent">
          All AI Services <Icon name="arrow" className="w-4 h-4" />
        </Link>
        <Link href="/ai-tools" className="btn-outline">Try Free AI Tools</Link>
      </Reveal>
    </PageSection>
  );
}
