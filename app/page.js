import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import ServicesSection from "@/components/home/ServicesSection";
import AISection from "@/components/home/AISection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechStackSection from "@/components/home/TechStackSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection limit={6} />
      <AISection />
      <PortfolioSection limit={4} />
      <AboutSection />
      <TeamSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <PricingSection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
