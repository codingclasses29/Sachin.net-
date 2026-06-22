import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { ProjectCard } from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio — Sachin.net | Our Best Projects",
  description: "School websites, e-commerce stores, hospital websites, CRM software and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader badge="Our Portfolio" title="Projects We Are" highlight="Proud Of" desc="School ERP, e-commerce, hospital websites, CRM — delivered with quality and on time." />
      <PageSection first>
        <div className="grid-cards-3">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} delay={(i % 3) * 80} />)}
        </div>
      </PageSection>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
