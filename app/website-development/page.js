import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata = {
  title: "Website Banwane Wala — Best Website Development Company India | Sachin.net",
  description:
    "Website banwani hai? Sachin.net — India ka trusted website development company. Business website, school ERP, e-commerce, mobile app Bihar se poore India me. Free quote: +91 9931306292",
  keywords: [
    "website banwane wala",
    "website banwani hai",
    "website development company india",
    "website developer bihar",
    "website banane wala near me",
    "cheap website development india",
    "school website banwane wala",
    "ecommerce website developer",
    "sachin.net",
  ],
  openGraph: {
    title: "Website Banwane Wala — Sachin.net India",
    description: "Professional website, ERP, e-commerce & AI solutions. 100+ clients. Free quote.",
    url: "https://sachin-net.netlify.app/website-development",
  },
  alternates: { canonical: "https://sachin-net.netlify.app/website-development" },
};

const highlights = [
  { icon: "globe", title: "Business Website", desc: "Professional, fast, SEO-ready websites" },
  { icon: "school", title: "School ERP", desc: "Fees, attendance, results — complete system" },
  { icon: "cart", title: "E-Commerce", desc: "Online store with UPI & Razorpay" },
  { icon: "code", title: "AI Solutions", desc: "Chatbots & machine learning" },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHeader
        badge="🇮🇳 Made in India"
        title="Website Banwane Wala —"
        highlight="Sachin.net"
        desc="Google par 'website banwani hai' search karte hi — Sachin.net choose karein. 100+ clients, Bihar se poore India me delivery."
      />

      <PageSection className="section-india-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-pravisht india-heading mx-auto">
            Kyun choose karein <span className="text-india-saffron">Sachin.net</span>?
          </h2>
          <p className="mt-4 text-body-light">
            Hum websites, school management software, e-commerce stores aur AI solutions banate hain.
            Affordable pricing, fast delivery, aur 24x7 WhatsApp support — sab kuch ek jagah.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="card-light card-p text-center">
              <span className="icon-box mx-auto india-icon-box">
                <Icon name={h.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{h.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="btn-primary">
            Free Quote Lein <Icon name="arrow" className="w-4 h-4" />
          </Link>
          <Link href="/ai-tools" className="btn-accent">
            AI se baat karein
          </Link>
        </div>
      </PageSection>

      <FaqSection />
      <CtaSection />
    </>
  );
}
