import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import TimelineSection from "@/components/home/TimelineSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us — Sachin.net | Premium Software Development Company",
  description:
    "Sachin.net is a premium software development company — modern websites, school ERP, e-commerce, AI & ML solutions.",
};

const values = [
  { title: "Our Mission", desc: "Har business, school aur startup tak premium quality technology affordable price mein pahunchana." },
  { title: "Our Vision", desc: "India ki sabse trusted website aur software development company banana." },
  { title: "Our Promise", desc: "On-time delivery, transparent pricing, aur delivery ke baad bhi poora support." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="The Story Behind"
        highlight="Sachin.net"
        desc="A premium software development company helping businesses grow with modern websites, software and AI solutions."
      />

      <PageSection first>
        <AboutSection embedded />
      </PageSection>
      <TeamSection />
      <TimelineSection />

      <PageSection>
        <div className="grid-cards-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card card-p h-full text-center">
                <h3 className="heading-sm gradient-text">{v.title}</h3>
                <p className="mt-3 text-body text-sm">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <WhyChooseUsSection />
      <TechStackSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
