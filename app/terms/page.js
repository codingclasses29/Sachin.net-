import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Terms of Service",
  description: "Sachin.net terms of service for website development, software and AI services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader badge="Legal" title="Terms of" highlight="Service" desc="Last updated: June 2026" />
      <PageSection first>
        <div className="container-narrow">
          <div className="card card-static card-p-lg prose-content">
            <div><h2>1. Services</h2><p>Sachin.net provides website development, software, mobile apps, hosting, SEO, AI chatbots and machine learning solutions.</p></div>
            <div><h2>2. Payment Terms</h2><p>Standard payment: 50% advance, 50% on delivery. Large projects may use milestone-based payments.</p></div>
            <div><h2>3. Project Delivery</h2><p>Timelines are estimates. Client-side delays or scope changes may extend delivery time.</p></div>
            <div><h2>4. Intellectual Property</h2><p>Upon full payment, client receives ownership of custom deliverables.</p></div>
            <div><h2>5. Support</h2><p>Free support period included per package. Extended maintenance available separately.</p></div>
            <div><h2>6. AI Tools Disclaimer</h2><p>Free AI tools are provided as-is. Review AI outputs before professional use.</p></div>
            <div><h2>7. Contact</h2><p>codingclasses29@gmail.com | +91 9931306292 | Bihar, India</p></div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
