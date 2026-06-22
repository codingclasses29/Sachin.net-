import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Privacy Policy",
  description: "Sachin.net privacy policy — how we collect, use and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader badge="Legal" title="Privacy" highlight="Policy" desc="Last updated: June 2026" />
      <PageSection first>
        <div className="container-narrow">
          <div className="card card-static card-p-lg prose-content">
            <div><h2>1. Information We Collect</h2><p>When you contact us via form, WhatsApp, email or AI chatbot, we may collect your name, phone, email and project requirements.</p></div>
            <div><h2>2. How We Use Information</h2><p>We use your information to respond to enquiries, provide services, and improve our website and AI tools.</p></div>
            <div><h2>3. AI Tools & Data</h2><p>Inputs to AI tools may be processed by third-party providers (Gemini, OpenAI, Groq). We do not sell your data.</p></div>
            <div><h2>4. Cookies & Analytics</h2><p>We may use cookies and Google Analytics to understand website usage.</p></div>
            <div><h2>5. Data Security</h2><p>We implement HTTPS, secure hosting, and encrypted database connections.</p></div>
            <div><h2>6. Contact</h2><p>codingclasses29@gmail.com | +91 9931306292 | Bihar, India</p></div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
