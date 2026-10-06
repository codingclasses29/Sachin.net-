import { site, faqs, services } from "@/lib/data";

const BASE = "https://www.sachin-net.xyz";

export default function SeoSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#localbusiness`,
    name: "Sachin.net",
    alternateName: [
      "Sachin.net Website Development Company in Bihar",
      "Sachin.net Siwan",
      "Website Banwane Wala Bihar",
      "Sachin Kushwaha Developer",
    ],
    url: BASE,
    logo: `${BASE}/logo.png`,
    image: [
      `${BASE}/banners/website-development.png`,
      `${BASE}/banners/hospital-management.png`,
      `${BASE}/images/hero-bg.png`,
    ],
    description:
      "Sachin.net — Top Website Development Company in Bihar & Siwan. Custom business websites, School ERP, E-commerce stores, Mobile Apps & AI solutions. Founder Sachin Kushwaha. Free Quote: +91 9931306292",
    telephone: site.phoneRaw,
    email: site.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
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
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    founder: {
      "@type": "Person",
      name: "Sachin Kushwaha",
      jobTitle: "Founder & Full Stack Developer",
      url: BASE,
      sameAs: [
        "https://www.youtube.com/@BR_Siwan29",
        "https://www.instagram.com/___sachinkushwaha",
        "https://www.facebook.com/sachinkushwaha",
      ],
    },
    sameAs: [
      "https://www.youtube.com/@BR_Siwan29",
      "https://www.instagram.com/___sachinkushwaha",
      "https://www.facebook.com/sachinkushwaha",
      "https://github.com/codingclasses29/Sachin.net-.git",
      "https://whatsapp.com/channel/0029VbBhyVHKAwEohciKUo1R",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website & Software Services in Bihar",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          itemOffered: {
            "@type": "Service",
            name: "Website Development in Bihar",
            description: "Custom responsive websites for businesses, schools, shops & startups.",
            url: `${BASE}/website-development-bihar`,
          },
        },
        {
          "@type": "Offer",
          position: 2,
          itemOffered: {
            "@type": "Service",
            name: "Website Development in Siwan",
            description: "Local website design and software development in Siwan, Bihar.",
            url: `${BASE}/website-development-siwan`,
          },
        },
        {
          "@type": "Offer",
          position: 3,
          itemOffered: {
            "@type": "Service",
            name: "School ERP & Management Software",
            description: "Complete school management system with online fees and WhatsApp marksheets.",
            url: `${BASE}/school-erp-bihar`,
          },
        },
        {
          "@type": "Offer",
          position: 4,
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce Website Development",
            description: "Online store development with UPI, Razorpay and COD in Bihar.",
            url: `${BASE}/ecommerce-development-bihar`,
          },
        },
        {
          "@type": "Offer",
          position: 5,
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "React Native and Flutter Android & iOS mobile applications.",
            url: `${BASE}/mobile-app-development`,
          },
        },
      ],
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Sachin.net",
    url: BASE,
    logo: `${BASE}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneRaw,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English", "Bhojpuri"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "Sachin.net — Website Development Company in Bihar",
    description: "Professional Website Development, School ERP & Software Company in Bihar, India.",
    publisher: { "@id": `${BASE}/#organization` },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
