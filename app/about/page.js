import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us — Sachin.net | Premium Software Development Company",
  description:
    "Sachin.net is a premium software development company founded by Sachin Kumar — building modern websites, school ERP, e-commerce and business software.",
};

const values = [
  {
    title: "Our Mission",
    desc: "हर business, school और startup तक premium quality technology को affordable price में पहुँचाना।",
  },
  {
    title: "Our Vision",
    desc: "India की सबसे trusted website और software development company बनना — जहाँ quality और honesty सबसे पहले हो।",
  },
  {
    title: "Our Promise",
    desc: "On-time delivery, transparent pricing, और delivery के बाद भी पूरा support — हर project में।",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="The Story Behind"
        highlight="Sachin.net"
        desc="A premium software development company helping businesses grow with modern websites, software and digital solutions."
      />

      <div className="-mt-6">
        <AboutSection />
      </div>

      <TeamSection />

      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="glass-card p-7 h-full text-center">
                <h3 className="text-lg font-bold gradient-text">{v.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyChooseUsSection />
      <TechStackSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
