import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site, pricing } from "@/lib/data";

export const metadata = {
  title: "Website Development Company in Siwan Bihar | Sachin.net",
  description:
    "Top website development company in Siwan, Bihar. Sachin.net offers custom websites, school ERP, and billing software with local office in Siwan. Fast delivery & 24x7 support. Call Sachin Kushwaha: +91 9931306292",
  keywords: [
    "website development company in siwan",
    "website designer siwan bihar",
    "website banane wala siwan",
    "software company siwan",
    "software developer siwan",
    "school software siwan bihar",
    "sachin kushwaha siwan",
    "sachin.net siwan",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/website-development-siwan",
  },
  openGraph: {
    title: "Website Development Company in Siwan Bihar — Sachin.net",
    description: "Siwan ka apna local website & software development hub. Fast delivery, in-person meetings & 24/7 support.",
    url: "https://www.sachin-net.xyz/website-development-siwan",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const siwanFeatures = [
  {
    icon: "mapPin",
    title: "Local Siwan Office & Support",
    desc: "Siwan (Bihar) me local office. Direct founder Sachin Kushwaha se phone, WhatsApp ya in-person requirement discussion.",
  },
  {
    icon: "zap",
    title: "Fast 24-48 Hours Delivery",
    desc: "Aapka business jaldi online aaye iske liye hum 24 se 48 ghante me ready-to-launch website deliver karte hain.",
  },
  {
    icon: "shield",
    title: "100% Secure & Free Domain/SSL",
    desc: "Har package ke saath free SSL certificate, Google Search Console indexing aur secure cloud hosting.",
  },
  {
    icon: "whatsapp",
    title: "Direct WhatsApp & Call Help",
    desc: "Kisi bhi update, email issue ya banner change ke liye direct call karein +91 9931306292 par.",
  },
];

export default function WebsiteDevelopmentSiwanPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sachin.net — Website Development Company Siwan",
    image: "https://www.sachin-net.xyz/logo.png",
    "@id": "https://www.sachin-net.xyz/website-development-siwan",
    url: "https://www.sachin-net.xyz/website-development-siwan",
    telephone: site.phoneRaw,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Siwan",
      addressLocality: "Siwan",
      addressRegion: "Bihar",
      postalCode: "841226",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.2205,
      longitude: 84.3567,
    },
    areaServed: [
      { "@type": "City", name: "Siwan" },
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Gopalganj" },
      { "@type": "City", name: "Chhapra" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader
        badge="📍 Siwan (Bihar) Headquarters"
        title="Website Development Company in"
        highlight="Siwan"
        desc="Siwan ke local vyapariyon, schools, coaching institutes aur clinics ke liye high-speed Next.js websites &amp; software. Direct call/WhatsApp: +91 9931306292"
      />

      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Siwan's Trusted Tech Partner
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Siwan Me Website Banwane Ke Liye Sachin.net Kyun Chunein?
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Siwan shahar aur aaspas ke ilaakon me 45+ se adhik schools, retail shops, hospitals aur NGO sansthaon ne Sachin.net par bharosa jataya hai. Hum Delhi ya Bangalore ke agency charges ke bina, international quality ka code aur UI design provide karte hain.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siwanFeatures.map((f) => (
            <div key={f.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={f.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Kya Aap Siwan Me Hain Aur Milkar Baat Karna Chahte Hain?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Sachin Kushwaha (Founder &amp; Full Stack Developer) se direct call ya WhatsApp par connect karein.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin%20ji!%20Mai%20Siwan%20se%20hu%20aur%20website%20banwani%20hai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              <span>WhatsApp Direct Message</span>
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary justify-center">
              <Icon name="phone" className="w-4 h-4 text-primary-light" />
              <span>Call: +91 9931306292</span>
            </a>
          </div>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}

