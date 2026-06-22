import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "Pricing — Sachin.net | Website & Software Packages",
  description:
    "Transparent website and software development pricing — Basic Website ₹5,999, Business Website ₹10,999, E-Commerce ₹24,999.",
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
