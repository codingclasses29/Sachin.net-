import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site } from "@/lib/data";

export const metadata = {
  title: "E-Commerce Website Development in Bihar | Sachin.net",
  description:
    "Launch your online dukaan in Bihar with Sachin.net. Custom e-commerce store with UPI, Razorpay, COD, automated order tracking & admin panel. Call: +91 9931306292",
  keywords: [
    "ecommerce website development in bihar",
    "online store builder bihar",
    "dukaan website developer bihar",
    "ecommerce payment gateway india",
    "online shopping website patna bihar",
    "best ecommerce developer bihar",
    "sachin.net ecommerce",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/ecommerce-development-bihar",
  },
  openGraph: {
    title: "E-Commerce Website Development in Bihar — Sachin.net",
    description: "Bihar ke dukandaron aur brands ke liye UPI-enabled online store. 100% automated order tracking.",
    url: "https://www.sachin-net.xyz/ecommerce-development-bihar",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const ecommerceFeatures = [
  {
    icon: "creditCard",
    title: "Instant UPI & Razorpay Integration",
    desc: "PhonePe, Google Pay, Paytm, UPI QR code aur debit/credit card payments bina kisi jhanjhat ke aapke bank account me.",
  },
  {
    icon: "truck",
    title: "Cash on Delivery & Shipping Tracking",
    desc: "Bihar ke local customers ke liye COD option, automated invoice generation aur courier tracking.",
  },
  {
    icon: "smartphone",
    title: "Mobile First Shopping UI",
    desc: "90% Indian customers mobile se shopping karte hain. Instant fast speed, smooth product cards aur 1-click checkout.",
  },
  {
    icon: "layers",
    title: "Powerful Admin Inventory Panel",
    desc: "Naye products add karein, stock check karein, offers & coupons lagayein aur daily sales report mobile se dekhein.",
  },
];

export default function EcommerceDevelopmentBiharPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Website Development Services Bihar",
    provider: {
      "@type": "Organization",
      name: "Sachin.net",
      url: "https://www.sachin-net.xyz",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Bihar",
    },
    description: "Custom e-commerce website development with UPI, Razorpay, and COD integration in Bihar.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader
        badge="🛒 Sell Online Across India"
        title="E-Commerce Website Development in"
        highlight="Bihar"
        desc="Apni dukaan, kapda store, electronics ya grocery business ko online le jayein. Fast checkout, UPI integration aur zero commission."
      />

      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Bihar Ki Apni Digital Dukaan
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apna Online Store Start Karein Aur All-India Customers Ko Bechen
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Ab Amazon ya Flipkart par 25-30% commission dene ki zaroorat nahi hai. <strong className="text-slate-900 font-semibold">Sachin.net</strong> ke saath aapka apna independent e-commerce brand banayein jahan 100% munafa sidhe aapka hoga.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecommerceFeatures.map((f) => (
            <div key={f.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={f.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin.net!%20Mujhe%20E-Commerce%20website%20banwani%20hai.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            <span>Order E-Commerce Website</span>
          </a>
          <Link href="/pricing" className="btn-secondary">
            View All Pricing Plans
          </Link>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}
