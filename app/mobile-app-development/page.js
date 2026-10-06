import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site } from "@/lib/data";

export const metadata = {
  title: "Mobile App Development Company in Bihar & India | Sachin.net",
  description:
    "Custom Android & iOS mobile app development by Sachin.net. React Native, Flutter, school parent apps, delivery apps & business apps. Free Quote: +91 9931306292",
  keywords: [
    "mobile app development bihar",
    "android app developer bihar",
    "ios app development india",
    "react native developer siwan bihar",
    "flutter app developer patna",
    "custom mobile apps india",
    "sachin.net mobile apps",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Company in Bihar & India — Sachin.net",
    description: "Custom Android & iOS apps with React Native & Flutter. Google Play Store publishing included.",
    url: "https://www.sachin-net.xyz/mobile-app-development",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const appServices = [
  {
    icon: "smartphone",
    title: "Android Apps (Google Play Store)",
    desc: "Fast, responsive Android apps tailored for Indian smartphones. Offline support, push notifications aur smooth UX.",
  },
  {
    icon: "tablet",
    title: "Cross-Platform (React Native & Flutter)",
    desc: "Single codebase se Android aur iOS dono par chalne wali apps. 50% cost saving aur double speed delivery.",
  },
  {
    icon: "bell",
    title: "Push Notifications & Real-Time Sync",
    desc: "Firebase Cloud Messaging ke saath instant promotional aur transactional notifications send karein.",
  },
  {
    icon: "database",
    title: "Cloud Backend & RESTful APIs",
    desc: "Fast Node.js / Python FastAPI backends, MongoDB / PostgreSQL databases aur secure user authentication.",
  },
];

export default function MobileAppDevelopmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development Services",
    provider: {
      "@type": "Organization",
      name: "Sachin.net",
      url: "https://www.sachin-net.xyz",
    },
    description: "Custom Android & iOS mobile app development in Bihar and India.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader
        badge="📱 Android &amp; iOS Engineering"
        title="Mobile App Development Company in"
        highlight="Bihar &amp; India"
        desc="React Native aur Flutter powered cross-platform mobile apps. Schools, e-commerce, delivery aur business workflows ke liye."
      />

      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Native Experience · Ultra Fast
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apne Business Ko Customers Ki Jeb (Mobile) Tak Pahuchayein
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Ek mobile app aapke brand ki trustworthiness aur customer loyalty ko 10x badha deti hai. <strong className="text-slate-900 font-semibold">Sachin.net</strong> Play Store publishing se lekar server hosting tak complete end-to-end development provide karta hai.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appServices.map((s) => (
            <div key={s.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={s.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin.net!%20Mujhe%20Mobile%20App%20banwani%20hai.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            <span>Consult for Mobile App</span>
          </a>
          <Link href="/contact" className="btn-secondary">
            Request Custom Quote
          </Link>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}

