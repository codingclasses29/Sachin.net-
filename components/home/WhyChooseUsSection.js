import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUsSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          badge="Why Choose Us"
          title="We Build Solutions That"
          highlight="Build Your Business"
          desc="We combine creativity, technology and strategy to deliver digital solutions that drive real results."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 80}>
              <div className="glass-card p-4 sm:p-6 text-center h-full">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary-light">
                  <Icon name={w.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-semibold text-white text-sm md:text-base">{w.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-slate-400">{w.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={320}>
            <div className="glass-card p-6 text-center h-full !bg-gradient-to-br !from-primary/25 !to-accent/15 flex flex-col items-center justify-center">
              <p className="text-2xl font-extrabold text-white">On-Time</p>
              <p className="mt-1 text-sm text-slate-300">Project Delivery, Guaranteed</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
