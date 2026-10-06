import Hero from "@/components/home/Hero";
import BannerSlider from "@/components/home/BannerSlider";
import LiveTicker from "@/components/home/LiveTicker";
import EmpowerSection from "@/components/home/EmpowerSection";
import ServiceTabsSection from "@/components/home/ServiceTabsSection";
import IndiaProudSection from "@/components/home/IndiaProudSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import AISection from "@/components/home/AISection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechStackSection from "@/components/home/TechStackSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Sachin.net | Best Website Banwane Wala, School ERP & Custom Software Developer in India",
  description:
    "Professional website development, School ERP software, E-commerce, mobile apps and AI solutions by Sachin Kushwaha. Fast delivery, affordable pricing, 24x7 IST support.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section: We Build Websites for Bharat with Typing Effect & Stats */}
      <Hero />

      {/* 2. Interactive Solutions Banner Slider: 5 Solutions Showcase */}
      <BannerSlider />

      {/* 3. Live Ticker: Fast Delivery · Secure Code · 24x7 Support · AI Powered */}
      <LiveTicker />

      {/* 3. Empowering Your Business for Growth: 4 Core Service Cards */}
      <EmpowerSection />

      {/* 4. Interactive Services Hub: Tabs for Websites, School ERP, AI & ML, E-Commerce */}
      <ServiceTabsSection />

      {/* 5. Proudly Made in India: States Served, Live IST Clock & Impact Stats */}
      <IndiaProudSection />

      {/* 6. Featured Projects / Portfolio: EduSmart School, ShopKart, MedCare */}
      <PortfolioSection limit={3} />

      {/* 7. Comprehensive Digital Solutions: 6 Full Service Cards */}
      <ServicesSection limit={6} />

      {/* 8. Future-Ready AI Solutions: Chatbots, Machine Learning, Computer Vision */}
      <AISection />

      {/* 9. About Sachin Kushwaha: Founder, Full Stack Developer, IITM Pravartak */}
      <AboutSection />

      {/* 10. Meet the Developers: Sachin Kumar, Sanjeev Kumar & Engineering Team */}
      <TeamSection />

      {/* 11. Why Choose Sachin.net: Fast Delivery, Clean Code, Affordable Pricing */}
      <WhyChooseUsSection />

      {/* 12. Technologies We Master: Next.js, React, Node.js, Python, MongoDB */}
      <TechStackSection />

      {/* 13. Transparent Pricing Plans: Starter, Business Pro, School ERP, Enterprise */}
      <PricingSection />

      {/* 14. Client Testimonials: Real Client Reviews Across India */}
      <TestimonialsSection />

      {/* 15. How We Work: 6-Step Structured Project Delivery Process */}
      <ProcessSection />

      {/* 16. Latest Insights & Tech Guides: Blog Articles */}
      <BlogSection />

      {/* 17. Frequently Asked Questions: Delivery Time, Costs, Mobile Responsive, Support */}
      <FaqSection />

      {/* 18. Newsletter Subscription */}
      <NewsletterSection />

      {/* 19. Final Conversion CTA Banner: Talk to Sachin Kushwaha */}
      <CtaSection />
    </>
  );
}

