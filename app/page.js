import Hero from "@/components/home/Hero";
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

      {/* 2. Interactive Solutions Banner Slider: 5 Solutions Showcase */}
      <BannerSlider />

      {/* 3. Live Ticker: Fast Delivery · Secure Code · 24x7 Support · AI Powered */}
      <LiveTicker />

      {/* 4. Empowering Your Business for Growth: 4 Core Service Cards */}
      <EmpowerSection />

      {/* 5. Interactive Services Hub: Tabs for Websites, School ERP, AI & ML, E-Commerce */}
      <ServiceTabsSection />

      {/* 6. Featured Projects / Portfolio: Live Client Portals & Case Studies */}
      <PortfolioSection limit={3} />

      {/* 7. Special Promotional Deals (Custom Quotation Model) */}
      <SpecialOffersSection />

      {/* 8. Comprehensive Digital Solutions: 6 Full Service Cards */}
      <ServicesSection limit={6} />

      {/* 9. Future-Ready AI Solutions: Chatbots, Machine Learning, Computer Vision */}
      <AISection />

      {/* 10. Proudly Made in India: States Served, Live IST Clock & Impact Stats */}
      <IndiaProudSection />

      {/* 11. About Sachin Kushwaha: Founder, Full Stack Developer, IITM Pravartak */}
      <AboutSection />

      {/* 12. Meet the Developers: Sachin Kumar, Sanjeev Kumar & Engineering Team */}
      <TeamSection />

      {/* 13. Why Choose Sachin.net: Fast Delivery, Clean Code, Custom Quotation */}
      <WhyChooseUsSection />

      {/* 14. Technologies We Master: Next.js, React, Node.js, Python, MongoDB */}
      <TechStackSection />

      {/* 15. Tailored Scope & Quotation Plans */}
      <PricingSection />

      {/* 16. Interactive Project Scope & Quotation Tool */}
      <QuoteCalculatorSection />

      {/* 17. Client Testimonials: Real Client Reviews Across India */}
      <TestimonialsSection />

      {/* 18. How We Work: 6-Step Structured Project Delivery Process */}
      <ProcessSection />

      {/* 19. Latest Insights & Tech Guides: Blog Articles */}
      <BlogSection />

      {/* 20. Frequently Asked Questions */}
      <FaqSection />

      {/* 21. Newsletter Subscription */}
      <NewsletterSection />

      {/* 22. Final Conversion CTA Banner: Talk to Sachin Kushwaha */}
      <CtaSection />
    </>
  );
}
