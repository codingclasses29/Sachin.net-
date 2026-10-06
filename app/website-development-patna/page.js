import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site, pricing } from "@/lib/data";

export const metadata = {
  title: "Website Development Company in Patna Bihar | Sachin.net",
  description:
    "Professional website development company in Patna, Bihar. Corporate websites, coaching institute portals, hospital software & e-commerce by Sachin.net. Free Consultation: +91 9931306292",
  keywords: [
    "website development company in patna",
    "web development company patna bihar",
    "website designer patna",
    "coaching website developer patna",
    "software company in patna",
    "best web designer patna bihar",
    "sachin.net patna",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/website-development-patna",
  },
  openGraph: {
    title: "Website Development Company in Patna Bihar — Sachin.net",
    description: "Patna businesses, coaching institutes & hospitals ke liye modern websites & ERP solutions.",
    url: "https://www.sachin-net.xyz/website-development-patna",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const patnaIndustries = [
  {
    icon: "book",
    title: "Coaching Institutes & Colleges",
    desc: "Boring Road, Kankarbagh aur Ashok Rajpath ke coaching institutes ke liye student admission portal, mock test systems aur fee payment.",
  },
  {
    icon: "hospital",
    title: "Hospitals & Diagnostics Clinics",
    desc: "Doctor appointment booking, OPD/IPD patient registration, digital pathology lab reports aur medical billing systems.",
  },
  {
    icon: "briefcase",
    title: "Corporate & Real Estate",
    desc: "Patna corporate offices, builders, traders aur CA firms ke liye premium responsive branding websites.",
  },
  {
    icon: "cart",
    title: "Retail Stores & Restaurants",
    desc: "Online menu, food ordering, retail e-commerce with UPI payment aur instant WhatsApp order alerts.",
  },
];

export default function WebsiteDevelopmentPatnaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sachin.net — Website Development Patna",
    image: "https://www.sachin-net.xyz/logo.png",
    "@id": "https://www.sachin-net.xyz/website-development-patna",
    url: "https://www.sachin-net.xyz/website-development-patna",
    telephone: site.phoneRaw,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Patna" },
      { "@type": "AdministrativeArea", name: "Bihar" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader
        badge="🏛️ Serving Patna & Bihar Capital Region"
        title="Website Development Company in"
        highlight="Patna"
        desc="Patna ke coaching institutes, hospitals, real estate aur businesses ke liye high-performance websites. Free quote: +91 9931306292"
      />

      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Patna's Digital Growth Partner
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patna Ke Business Ke Liye High-Speed, Modern Websites
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Patna me badhti digital competition me aapki company ko sabse alag dikhane ke liye hum Next.js aur Tailwind CSS par engineered websites banate hain jo Google Search me top par rank karti hain aur mobile par instant load hoti hain.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {patnaIndustries.map((ind) => (
            <div key={ind.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={ind.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{ind.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="btn-primary">
            Get Patna Website Quote <Icon name="arrow" className="w-4 h-4" />
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin.net!%20Mai%20Patna%20se%20hu%20aur%20website%20consultation%20chahiye.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </PageSection>

      <CtaSection />
    </>
  );
}

