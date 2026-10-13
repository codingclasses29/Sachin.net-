import Hero from "@/components/home/Hero";
import WhatsNewSection from "@/components/home/WhatsNewSection";
import CuttingEdgeSolutionsSection from "@/components/home/CuttingEdgeSolutionsSection";
import BannerSlider from "@/components/home/BannerSlider";
import LiveTicker from "@/components/home/LiveTicker";
import EmpowerSection from "@/components/home/EmpowerSection";
import ServiceTabsSection from "@/components/home/ServiceTabsSection";
import SpecialOffersSection from "@/components/home/SpecialOffersSection";
import IndiaProudSection from "@/components/home/IndiaProudSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import AISection from "@/components/home/AISection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechStackSection from "@/components/home/TechStackSection";
import PricingSection from "@/components/home/PricingSection";
import QuoteCalculatorSection from "@/components/home/QuoteCalculatorSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Website Development Company in Bihar | Sachin.net — Siwan, Patna & Bharat",
  description:
    "Top Website Development Company in Bihar & Siwan. Sachin.net offers custom business websites, School ERP, E-Commerce stores, Mobile Apps & AI solutions. Free quote: +91 9931306292",
};

export default function Home() {
  return (
    <>
      {/* 1. TCS-Style Corporate AI & Digital Hero + 4 Technology Capabilities */}
      <Hero />

      {/* 2. TCS-Style "What's new" Editorial News & Milestones Carousel */}
      <WhatsNewSection />

      {/* 3. TCS-Style "Cutting edge solutions to power up your business" (Industries, Services, Products & Platforms) */}
      <CuttingEdgeSolutionsSection />

      {/* 4. Interactive Solutions Banner Slider: 5 Solutions Showcase */}
      <BannerSlider />

      {/* 5. Live Ticker: Fast Delivery · Secure Code · 24x7 Support · AI Powered */}
      <LiveTicker />

      {/* 6. Empowering Your Business for Growth: 4 Core Service Cards */}
      <EmpowerSection />

      {/* 7. Interactive Services Hub: Tabs for Websites, School ERP, AI & ML, E-Commerce */}
      <ServiceTabsSection />

      {/* 8. Featured Projects / Portfolio: Live Client Portals & Case Studies */}
      <PortfolioSection limit={3} />

      {/* 9. Special Promotional Deals (Custom Quotation Model) */}
      <SpecialOffersSection />

      {/* 10. Comprehensive Digital Solutions: 6 Full Service Cards */}
      <ServicesSection limit={6} />

      {/* 11. Future-Ready AI Solutions: Chatbots, Machine Learning, Computer Vision */}
      <AISection />

      {/* 12. Proudly Made in India: States Served, Live IST Clock & Impact Stats */}
      <IndiaProudSection />

      {/* 13. About Sachin Kushwaha: Founder, Full Stack Developer, IITM Pravartak */}
      <AboutSection />

      {/* 14. Meet the Developers: Sachin Kumar, Sanjeev Kumar & Engineering Team */}
      <TeamSection />

      {/* 15. Why Choose Sachin.net: Fast Delivery, Clean Code, Custom Quotation */}
      <WhyChooseUsSection />

      {/* 16. Technologies We Master: Next.js, React, Node.js, Python, MongoDB */}
      <TechStackSection />

      {/* 17. Tailored Scope & Quotation Plans */}
      <PricingSection />

      {/* 18. Interactive Project Scope & Quotation Tool */}
      <QuoteCalculatorSection />

      {/* 19. Client Testimonials: Real Client Reviews Across India */}
      <TestimonialsSection />

      {/* 20. How We Work: 6-Step Structured Project Delivery Process */}
      <ProcessSection />

      {/* 21. Latest Insights & Tech Guides: Blog Articles */}
      <BlogSection />

      {/* 22. Frequently Asked Questions */}
      <FaqSection />

      {/* 23. Newsletter Subscription */}
      <NewsletterSection />

      {/* 24. Final Conversion CTA Banner: Talk to Sachin Kushwaha */}
      <CtaSection />
    </>
  );
}
