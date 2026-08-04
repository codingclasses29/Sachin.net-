import { site, faqs, services } from "@/lib/data";

const BASE = "https://sachin-net.netlify.app";

export default function SeoSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#business`,
    name: "Sachin.net",
    alternateName: ["Sachin net", "Sachin.net Website Development", "Website Banwane Wala Bihar"],
    url: BASE,
    logo: `${BASE}/team/sachin-kumar.png`,
    image: `${BASE}/images/hero-bg.png`,
    description:
      "Sachin.net — India ka trusted website development company. Business website, school ERP, e-commerce, mobile app aur AI solutions. Bihar, India.",
    telephone: site.phoneRaw,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.0961, longitude: 85.3131 },
    areaServed: { "@type": "Country", name: "India" },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://github.com/codingclasses29/Sachin.net-.git",
      "https://whatsapp.com/channel/0029VbBhyVHKAwEohciKUo1R",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website & Software Services",
      itemListElement: services.slice(0, 8).map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "Sachin.net",
    description: site.tagline,
    publisher: { "@id": `${BASE}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 10).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const professional = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sachin.net — Website Development Company India",
    url: `${BASE}/website-development`,
    serviceType: [
      "Website Development",
      "School Management System",
      "E-Commerce Development",
      "AI Chatbot Development",
      "Mobile App Development",
    ],
    provider: { "@id": `${BASE}/#business` },
  };

  return (
    <>
      {[localBusiness, website, faqPage, professional].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
