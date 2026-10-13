"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../Providers";

const solutionColumns = [
  {
    id: "industries",
    titleEn: "Industries",
    titleHi: "इंडस्ट्रीज (Industries)",
    descEn: "Select your industry. Discover our impact across Healthcare, Education, NGOs & Retail.",
    descHi: "अपना क्षेत्र चुनें — हेल्थकेयर, शिक्षा, NGO और रिटेल में हमारा डिजिटल प्रभाव देखें।",
    href: "/portfolio",
    image: "/images/portfolio-health.png",
    visualType: "skyscrapers",
    tags: [
      { labelEn: "Healthcare & Hospitals", labelHi: "हॉस्पिटल ERP", href: "https://medicarehospitl.netlify.app/", external: true },
      { labelEn: "Education & Schools", labelHi: "स्कूल और कॉलेज", href: "/school-erp-bihar", external: false },
      { labelEn: "NGOs & Social Trusts", labelHi: "NGO और ट्रस्ट", href: "https://gramvikasfoundation.netlify.app/", external: true },
      { labelEn: "Retail & E-Commerce", labelHi: "ई-कॉमर्स और रिटेल", href: "/ecommerce-development-bihar", external: false },
    ],
  },
  {
    id: "services",
    titleEn: "Services",
    titleHi: "सर्विसेज (Services)",
    descEn: "Experience our services. Transform your business with AI, Web, Cloud & Mobile Engineering.",
    descHi: "हमारी सेवाओं का अनुभव लें — AI, कस्टम वेबसाइट, क्लाउड और मोबाइल ऐप से बिज़नेस बढ़ाएं।",
    href: "/services",
    image: "/banners/hosting-servers.png",
    visualType: "dome",
    tags: [
      { labelEn: "AI & Machine Learning", labelHi: "AI और मशीन लर्निंग", href: "/ai-services", external: false },
      { labelEn: "Custom Web Development", labelHi: "कस्टम वेबसाइट विकास", href: "/website-development", external: false },
      { labelEn: "Mobile App Engineering", labelHi: "मोबाइल ऐप विकास", href: "/mobile-app-development", external: false },
      { labelEn: "Bihar & Regional SEO", labelHi: "बिहार और लोकल SEO", href: "/website-development-bihar", external: false },
    ],
  },
  {
    id: "products",
    titleEn: "Products and Platforms",
    titleHi: "प्रोडक्ट्स और प्लेटफॉर्म्स",
    descEn: "Explore our products. Accelerate your performance with ready-to-deploy cloud platforms.",
    descHi: "हमारे रेडी-टू-यूज़ क्लाउड सॉफ्टवेयर और AI टूल्स के साथ अपने काम की गति बढ़ाएं।",
    href: "/ai-tools",
    image: "/images/portfolio-edu.png",
    visualType: "arches",
    tags: [
      { labelEn: "MediCare Hospital ERP 2.0", labelHi: "मेडिकेयर हॉस्पिटल ERP", href: "https://medicare-hospitl-1.netlify.app/", external: true },
      { labelEn: "Smart School ERP Suite", labelHi: "स्मार्ट स्कूल ERP", href: "/school-erp-bihar", external: false },
      { labelEn: "Rurally Smile NGO Cloud", labelHi: "रूरली स्माइल NGO क्लाउड", href: "https://rurallysmile-org.vercel.app/", external: true },
      { labelEn: "Interactive AI Tools Lab", labelHi: "AI टूल्स लैब", href: "/ai-tools", external: false },
    ],
  },
];

export default function CuttingEdgeSolutionsSection() {
  const { lang } = useLanguage();
  const [selectedId, setSelectedId] = useState("industries");

  const activeCol = solutionColumns.find((c) => c.id === selectedId) || solutionColumns[0];

  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TCS Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-10 sm:mb-12">
          {lang === "hi"
            ? "आपके बिज़नेस को रफ़्तार देने वाले अत्याधुनिक डिजिटल समाधान"
            : "Cutting edge solutions to power up your business"}
        </h2>

        {/* 3 Large TCS-Style Visual Cards: Industries | Services | Products and Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutionColumns.map((col) => (
            <div
              key={col.id}
              onMouseEnter={() => setSelectedId(col.id)}
              onClick={() => setSelectedId(col.id)}
              className={`group flex flex-col bg-[#20232a] border transition-all cursor-pointer ${
                selectedId === col.id
                  ? "border-blue-500/60 shadow-[0_12px_40px_rgba(29,99,220,0.22)]"
                  : "border-white/5 hover:border-white/20"
              }`}
            >
              {/* Top Architectural Visual (Matching TCS Skyscrapers, Sky Dome & Arches) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c1424]">
                <Image
                  src={col.image}
                  alt={lang === "hi" ? col.titleHi : col.titleEn}
                  fill
                  className="object-cover object-center opacity-55 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Architectural Graphic Overlay to match TCS Screenshot */}
                {col.visualType === "skyscrapers" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/90 via-[#102a52]/40 to-transparent flex items-end justify-center">
                    <svg className="w-full h-full opacity-55" viewBox="0 0 400 250" fill="none">
                      <polygon points="30,250 155,40 190,250" fill="#1e3a5f" fillOpacity="0.55" stroke="#7cc2ff" strokeWidth="1" />
                      <polygon points="370,250 245,35 210,250" fill="#0f294a" fillOpacity="0.6" stroke="#9cd0ff" strokeWidth="1" />
                      <polygon points="120,250 200,15 280,250" fill="#1d4ed8" fillOpacity="0.25" stroke="#bfe3ff" strokeWidth="1.2" />
                      <line x1="200" y1="15" x2="200" y2="250" stroke="#e0f2fe" strokeOpacity="0.5" />
                    </svg>
                  </div>
                )}

                {col.visualType === "dome" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-[#0c2244]/50 to-[#111827]/90 flex items-center justify-center">
                    <svg className="w-full h-full opacity-65" viewBox="0 0 400 250" fill="none">
                      <circle cx="200" cy="125" r="95" stroke="#93c5fd" strokeWidth="1.5" fill="#38bdf8" fillOpacity="0.15" />
                      <circle cx="200" cy="125" r="70" stroke="#bae6fd" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="200" cy="125" r="45" stroke="#e0f2fe" strokeWidth="1" />
                    </svg>
                  </div>
                )}

                {col.visualType === "arches" && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/90 via-slate-800/40 to-amber-100/20 flex items-end justify-center">
                    <svg className="w-full h-full opacity-65" viewBox="0 0 400 250" fill="none">
                      <path d="M40,250 Q200,10 360,250" stroke="#e2e8f0" strokeWidth="2" fill="none" />
                      <path d="M80,250 Q200,45 320,250" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
                      <path d="M120,250 Q200,80 280,250" stroke="#94a3b8" strokeWidth="1.2" fill="none" />
                      <path d="M160,250 Q200,115 240,250" stroke="#64748b" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Bottom Charcoal Card Body (Exact TCS Layout: Title, Subtitle, Bottom-Right Blue Circle Arrow) */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#20232a]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                    {lang === "hi" ? col.titleHi : col.titleEn}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lang === "hi" ? col.descHi : col.descEn}
                  </p>

                  {/* Quick Clickable Sub-Items */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {col.tags.map((t) =>
                      t.external ? (
                        <a
                          key={t.labelEn}
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-blue-600/30 border border-white/10 hover:border-blue-400/50 text-slate-300 hover:text-white transition-colors"
                        >
                          {lang === "hi" ? t.labelHi : t.labelEn} ↗
                        </a>
                      ) : (
                        <Link
                          key={t.labelEn}
                          href={t.href}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-blue-600/30 border border-white/10 hover:border-blue-400/50 text-slate-300 hover:text-white transition-colors"
                        >
                          {lang === "hi" ? t.labelHi : t.labelEn}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* Bottom Row with TCS Circular Blue Button */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <span className="text-xs font-medium text-slate-400 group-hover:text-blue-300 transition-colors">
                    {lang === "hi" ? "अन्वेषण करें (Explore)" : "Explore capability"}
                  </span>

                  <Link
                    href={col.href}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-[#1d63dc] group-hover:bg-[#2a73f0] text-white flex items-center justify-center shadow-lg transition-transform group-hover:translate-x-1"
                    aria-label={col.titleEn}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Enterprise Action Strip inside the Black Section */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              {lang === "hi" ? "सक्रिय श्रेणी:" : "ACTIVE FOCUS:"}
            </span>
            <span className="text-sm font-semibold text-white">
              {lang === "hi" ? activeCol.titleHi : activeCol.titleEn}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="flex flex-wrap gap-2">
              {activeCol.tags.map((t) =>
                t.external ? (
                  <a
                    key={t.labelEn}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-blue-400 underline underline-offset-4 transition-colors"
                  >
                    {lang === "hi" ? t.labelHi : t.labelEn} ↗
                  </a>
                ) : (
                  <Link
                    key={t.labelEn}
                    href={t.href}
                    className="text-xs text-slate-300 hover:text-blue-400 underline underline-offset-4 transition-colors"
                  >
                    {lang === "hi" ? t.labelHi : t.labelEn}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book-service"
              className="px-5 py-2.5 rounded-full bg-[#1d63dc] hover:bg-[#2a73f0] text-white text-xs sm:text-sm font-semibold transition-all"
            >
              {lang === "hi" ? "प्रोजेक्ट कोटेशन प्राप्त करें →" : "Request Custom Quotation →"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

