import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { site, pricing } from "@/lib/data";

export const metadata = {
  title: "Website Development Company in Bihar | Sachin.net — Best Web Designers",
  description:
    "Looking for the best website development company in Bihar? Sachin.net provides professional business websites, school ERP, e-commerce, and mobile apps. 100+ clients across Patna, Siwan, Muzaffarpur, Gaya, and Bhagalpur. Free Quote: +91 9931306292",
  keywords: [
    "website development company in bihar",
    "web development company bihar",
    "website designer bihar",
    "best website maker bihar",
    "software company bihar",
    "website development patna bihar",
    "website development siwan bihar",
    "sachin.net bihar",
    "website banwane wala bihar",
  ],
  alternates: {
    canonical: "https://www.sachin-net.xyz/website-development-bihar",
  },
  openGraph: {
    title: "Website Development Company in Bihar — Sachin.net",
    description: "Bihar ka trusted web development partner. 100+ projects delivered. Free quote + 24/7 IST support.",
    url: "https://www.sachin-net.xyz/website-development-bihar",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
};

const biharServices = [
  {
    icon: "globe",
    title: "Business & Company Websites",
    desc: "Professional corporate websites for Bihar companies, factories, clinics, and service providers. High Google ranking and mobile fast.",
  },
  {
    icon: "school",
    title: "School & College ERP Software",
    desc: "Complete school management system for Bihar schools — online fee collection, WhatsApp alerts, digital report card & attendance.",
  },
  {
    icon: "cart",
    title: "E-Commerce & Online Dukaan",
    desc: "Apni dukaan ko online le jayein. UPI (PhonePe, GPay, Paytm) integration, cash-on-delivery management aur inventory tracking.",
  },
  {
    icon: "code",
    title: "Custom Software & AI Solutions",
    desc: "Custom hospital management, NGO member portals, billing systems aur ChatGPT/Gemini powered AI chatbots.",
  },
];

const biharDistricts = [
  { name: "Siwan", tag: "Headquarters", projects: "45+ Delivered" },
  { name: "Patna", tag: "Capital Hub", projects: "30+ Delivered" },
  { name: "Muzaffarpur", tag: "North Bihar", projects: "12+ Delivered" },
  { name: "Gopalganj", tag: "West Bihar", projects: "15+ Delivered" },
  { name: "Chhapra (Saran)", tag: "Central", projects: "10+ Delivered" },
  { name: "Gaya & Bhagalpur", tag: "South Bihar", projects: "8+ Delivered" },
];

export default function WebsiteDevelopmentBiharPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sachin.net — Website Development Company in Bihar",
    image: "https://www.sachin-net.xyz/logo.png",
    "@id": "https://www.sachin-net.xyz/website-development-bihar",
    url: "https://www.sachin-net.xyz/website-development-bihar",
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
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Siwan" },
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Muzaffarpur" },
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
        badge="🇮🇳 Bihar's #1 Web & Software Company"
        title="Website Development Company in"
        highlight="Bihar"
        desc="Patna, Siwan, Muzaffarpur se lekar poore Bihar me 100+ businesses ka digital partner. Fast delivery, Google SEO ready code, aur 24x7 direct WhatsApp support."
      />

      {/* Overview Section */}
      <PageSection className="section-india-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-india-saffron">
            Local Presence · World Class Engineering
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bihar ke Businesses ke liye Modern &amp; Affordable Websites
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Aaj ke digital yug me, chahe aapka Siwan me school ho, Patna me coaching institute ho, ya Bihar ke kisi bhi shahar me business — ek fast, professional aur Google-friendly website hona sabse zaroori hai. <strong className="text-slate-900 font-semibold">Sachin.net</strong> aapko bina kisi hidden charge ke high-quality Next.js aur React based websites provide karta hai.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
            <span className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700">⚡ 24-48 Hours Fast Delivery</span>
            <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">🔒 100% Secure &amp; Free SSL</span>
            <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">📱 Mobile &amp; Tablet Responsive</span>
            <span className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700">🚀 Free Google SEO Setup</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {biharServices.map((srv) => (
            <div key={srv.title} className="card-light card-p hover:shadow-xl transition-all border border-slate-200">
              <span className="icon-box india-icon-box mb-4">
                <Icon name={srv.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{srv.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Bihar Cities Coverage Strip */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Bihar ke Prominent Shaharon me Live Projects Delivered
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hamare software aur websites Bihar ke har jile me live kaam kar rahe hain.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {biharDistricts.map((d) => (
              <div key={d.name} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center">
                <p className="text-base font-bold text-white">{d.name}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-primary-light">{d.tag}</span>
                <p className="text-xs text-slate-400 mt-1">{d.projects}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/website-development-siwan" className="text-xs text-slate-300 hover:text-white underline">
              View Siwan Web Development →
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/website-development-patna" className="text-xs text-slate-300 hover:text-white underline">
              View Patna Web Development →
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/school-erp-bihar" className="text-xs text-slate-300 hover:text-white underline">
              View School ERP Bihar →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Strip */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">Transparent Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Bihar Businesses ke liye Budget Plans</h2>
            <p className="text-sm text-slate-400 mt-2">Bina kisi chhupaaye kharche ke genuine pricing.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.slice(0, 3).map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border flex flex-col justify-between ${
                  plan.highlighted
                    ? "bg-slate-900 border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/40"
                    : "bg-slate-900/50 border-slate-800"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg text-white">{plan.name}</h3>
                    {plan.badgeText && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-primary/20 text-primary-light border border-primary/40">
                        {plan.badgeText}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mb-6">{plan.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                        <Icon name="check" className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${site.whatsapp}?text=Namaste%20Sachin.net!%20Mujhe%20Bihar%20me%20${encodeURIComponent(plan.name)}%20package%20order%20karna%20hai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.highlighted ? "btn-whatsapp w-full justify-center" : "btn-primary w-full justify-center"}
                >
                  Book Package Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

