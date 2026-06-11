import PageHeader from "@/components/PageHeader";
import { ProjectCard } from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio — Sachin.net | Our Best Projects",
  description:
    "School websites, e-commerce stores, hospital websites, CRM software, admin dashboards and more — see our best work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Our Portfolio"
        title="Projects We Are"
        highlight="Proud Of"
        desc="School management systems, e-commerce stores, hospital websites, CRM software and more — delivered with quality and on time."
      />
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={(i % 3) * 100} />
          ))}
        </div>
      </section>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
