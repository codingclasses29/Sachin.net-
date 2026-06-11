import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechStackSection from "@/components/home/TechStackSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Services — Sachin.net | Website, Software & App Development",
  description:
    "Website development, school management system, e-commerce, ERP software, mobile apps, API development, UI/UX design, SEO and hosting services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Services That"
        highlight="Grow Your Business"
        desc="From a simple business website to a complete ERP system — we build everything your business needs to succeed online."
      />
      <div className="-mt-10">
        <ServicesSection />
      </div>
      <TechStackSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
