import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Pricing — Sachin.net | Website & Software Packages",
  description:
    "Website and software development packages — Basic, Business, E-Commerce and Custom Software. Contact Sachin.net for a free quote.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Pricing Plans"
        title="Honest Pricing,"
        highlight="No Hidden Costs"
        desc="Choose a ready-made package or contact us for a custom quote — 100% transparent pricing."
      />
      <PricingSection first />
      <FaqSection />
      <CtaSection />
    </>
  );
}
