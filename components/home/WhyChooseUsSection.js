import Icon from "../Icon";
import PageSection from "@/components/PageSection";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUsSection() {
  return (
    <PageSection alt>
      <SectionHeading
        badge="Why Choose Us"
        title="We Build Solutions That"
        highlight="Build Your Business"
        desc="We combine creativity, technology and strategy to deliver digital solutions that drive real results."
      />

      <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {whyChooseUs.map((w, i) => (
          <Reveal key={w.title} delay={(i % 4) * 60}>
            <div className="card card-p text-center h-full">
              <span className="icon-box icon-box-lg mx-auto bg-primary/12 text-primary-light">
                <Icon name={w.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 heading-sm text-sm">{w.title}</h3>
              <p className="mt-2 text-body text-xs">{w.desc}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={280}>
          <div className="card card-p text-center h-full bg-gradient-to-br from-primary/20 to-accent/10 flex flex-col items-center justify-center">
            <p className="text-2xl font-extrabold">On-Time</p>
            <p className="mt-1 text-body text-sm">Project Delivery, Guaranteed</p>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
