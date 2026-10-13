"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon";
import { useLanguage } from "../Providers";
import { site } from "@/lib/data";

const heroSlides = [
  {
    id: "ai-led",
    tagEn: "AI • SOFTWARE • DIGITAL SERVICES",
    tagHi: "AI • सॉफ्टवेयर • डिजिटल सर्विसेज",
    titleEn: "We will be Bharat’s leading\nAI-led tech\nservices company",
    titleHi: "हम बनेंगे भारत की अग्रणी\nAI और सॉफ्टवेयर\nटेक्नोलॉजी कंपनी",
    subEn:
      "AI-powered solutions, modern corporate websites, and intelligent digital platforms engineered for businesses, institutions, and communities.",
    subHi:
      "व्यवसायों, स्कूलों, अस्पतालों और संस्थाओं के लिए आधुनिक AI समाधान, हाई-स्पीड वेबसाइट और इंटेलिजेंट डिजिटल प्लेटफॉर्म।",
    ctaEn: "Learn more",
    ctaHi: "और जानें",
    ctaHref: "/services",
    secondaryEn: "Explore AI Solutions ↗",
    secondaryHi: "AI समाधान देखें ↗",
    secondaryHref: "/ai-services",
  },
  {
    id: "smarter-future",
    tagEn: "TECHNOLOGY • AI • DIGITAL SOLUTIONS",
    tagHi: "टेक्नोलॉजी • AI • डिजिटल समाधान",
    titleEn: "Building a Smarter\nDigital Future\nfor Every Enterprise",
    titleHi: "आधुनिक वेब और क्लाउड के साथ\nस्मार्ट डिजिटल भविष्य\nका निर्माण",
    subEn:
      "From Siwan & Patna to Pan-India — delivering custom Next.js web applications, e-commerce stores, and cloud infrastructure.",
    subHi:
      "सीवान और पटना से पूरे भारत में — कस्टम वेब एप्लीकेशन, ई-कॉमर्स स्टोर और सुरक्षित क्लाउड सॉफ्टवेयर का विकास।",
    ctaEn: "Explore Solutions",
    ctaHi: "समाधान देखें",
    ctaHref: "/website-development",
    secondaryEn: "Book Service Online ↗",
    secondaryHi: "ऑनलाइन सर्विस बुक करें ↗",
    secondaryHref: "/book-service",
  },
  {
    id: "erp-platforms",
    tagEn: "SCHOOL ERP • HOSPITAL ERP • NGO PORTALS",
    tagHi: "स्कूल ERP • हॉस्पिटल ERP • NGO पोर्टल्स",
    titleEn: "Transforming Institutions\nwith Paperless\nCloud ERP Systems",
    titleHi: "स्कूल, हॉस्पिटल और NGO का\nसम्पूर्ण पेपरलेस\nडिजिटल ऑटोमेशन",
    subEn:
      "Live verified systems for hospitals (OPD/IPD), schools (fees, exams & parent app), and NGOs (80G receipts & digital ID cards).",
    subHi:
      "हॉस्पिटल (OPD/IPD), स्कूल (फीस, रिजल्ट व ऐप) और NGO (80G रसीद व डिजिटल आईडी कार्ड) के लिए लाइव प्रमाणित सॉफ्टवेयर।",
    ctaEn: "View Live Demos",
    ctaHi: "लाइव डेमो देखें",
    ctaHref: "/portfolio",
    secondaryEn: "School ERP Portal ↗",
    secondaryHi: "स्कूल ERP पोर्टल ↗",
    secondaryHref: "/school-erp-bihar",
  },
  {
    id: "custom-quote",
    tagEn: "TAILORED SCOPE • CUSTOM QUOTATION",
    tagHi: "टेलर्ड स्कोप • कस्टम कोटेशन",
    titleEn: "Engineering Excellence\nTailored to Your\nSoftware Scope",
    titleHi: "आपकी आवश्यकता और सॉफ्टवेयर\nस्कोप के अनुसार\nकस्टम कोटेशन",
    subEn:
      "Direct 1-on-1 architecture consultation with Founder Sachin Kushwaha. Personalized quotation according to your exact business requirements.",
    subHi:
      "संस्थापक सचिन कुशवाहा से सीधा परामर्श — आपके प्रोजेक्ट और सॉफ्टवेयर फीचर्स के अनुसार पारदर्शी कोटेशन।",
    ctaEn: "Request Quotation",
    ctaHi: "कोटेशन प्राप्त करें",
    ctaHref: "/contact",
    secondaryEn: "Client Portal ↗",
    secondaryHi: "क्लाइंट डैशबोर्ड ↗",
    secondaryHref: "/customer/dashboard",
  },
];

const capabilities = [
  {
    titleEn: "AI Solutions",
    titleHi: "AI और ऑटोमेशन",
    descEn: "AI tools, custom chatbots & workflow automation",
    descHi: "AI टूल्स, कस्टम चैटबॉट और स्मार्ट ऑटोमेशन",
    href: "/ai-services",
    icon: "code",
  },
  {
    titleEn: "Web Development",
    titleHi: "वेब और सॉफ्टवेयर",
    descEn: "Modern Next.js & React business websites",
    descHi: "आधुनिक कॉर्पोरेट और बिज़नेस वेबसाइट",
    href: "/website-development",
    icon: "globe",
  },
  {
    titleEn: "Cloud & ERP Systems",
    titleHi: "क्लाउड और ERP सिस्टम",
    descEn: "School ERP, Hospital ERP & cloud hosting",
    descHi: "स्कूल ERP, हॉस्पिटल ERP और क्लाउड होस्टिंग",
    href: "/school-erp-bihar",
    icon: "server",
  },
  {
    titleEn: "Digital Platforms",
    titleHi: "डिजिटल प्लेटफॉर्म्स",
    descEn: "Custom E-Commerce, NGO portals & mobile apps",
    descHi: "ई-कॉमर्स, NGO पोर्टल और मोबाइल ऐप्स",
    href: "/portfolio",
    icon: "mobile",
  },
];

export default function Hero() {
  const { lang } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = heroSlides[activeSlide];

  return (
    <section className="relative bg-[#031530] text-white overflow-hidden">
      {/* Main TCS-Style Full Viewport Blue Hero */}
      <div className="relative min-h-[86vh] lg:min-h-[88vh] flex flex-col justify-between pt-20 pb-8 overflow-hidden">
        {/* Background Image + TCS Royal Blue Atmospheric Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          {/* Deep TCS Cobalt / Royal Blue Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, rgba(22, 92, 196, 0.72) 0%, rgba(7, 42, 96, 0.88) 52%, rgba(2, 16, 38, 0.97) 100%)",
            }}
          />

          {/* TCS-Style Architectural Wireframe Cityscape SVG Overlay */}
          <svg
            className="absolute inset-x-0 bottom-0 w-full h-[78%] opacity-35"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
          >
            {/* Perspective Horizon Grid Lines */}
            <line x1="0" y1="490" x2="1440" y2="490" stroke="#7cc2ff" strokeOpacity="0.35" strokeWidth="1" />
            <line x1="0" y1="530" x2="1440" y2="530" stroke="#7cc2ff" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="0" y1="570" x2="1440" y2="570" stroke="#7cc2ff" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="720" y1="440" x2="120" y2="600" stroke="#7cc2ff" strokeOpacity="0.22" strokeWidth="1" />
            <line x1="720" y1="440" x2="420" y2="600" stroke="#7cc2ff" strokeOpacity="0.22" strokeWidth="1" />
            <line x1="720" y1="440" x2="720" y2="600" stroke="#7cc2ff" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="720" y1="440" x2="1020" y2="600" stroke="#7cc2ff" strokeOpacity="0.22" strokeWidth="1" />
            <line x1="720" y1="440" x2="1320" y2="600" stroke="#7cc2ff" strokeOpacity="0.22" strokeWidth="1" />

            {/* Left Wireframe Towers */}
            <rect x="70" y="250" width="95" height="240" stroke="#a5d8ff" strokeOpacity="0.45" strokeWidth="1.2" />
            <line x1="70" y1="290" x2="165" y2="290" stroke="#a5d8ff" strokeOpacity="0.25" />
            <line x1="70" y1="330" x2="165" y2="330" stroke="#a5d8ff" strokeOpacity="0.25" />
            <line x1="70" y1="370" x2="165" y2="370" stroke="#a5d8ff" strokeOpacity="0.25" />
            <line x1="70" y1="410" x2="165" y2="410" stroke="#a5d8ff" strokeOpacity="0.25" />

            <rect x="190" y="150" width="110" height="340" stroke="#bfe3ff" strokeOpacity="0.5" strokeWidth="1.4" />
            <polygon points="190,150 245,110 300,150" stroke="#bfe3ff" strokeOpacity="0.45" strokeWidth="1.2" fill="none" />
            <line x1="245" y1="110" x2="245" y2="490" stroke="#bfe3ff" strokeOpacity="0.25" />
            <line x1="190" y1="200" x2="300" y2="200" stroke="#bfe3ff" strokeOpacity="0.25" />
            <line x1="190" y1="250" x2="300" y2="250" stroke="#bfe3ff" strokeOpacity="0.25" />
            <line x1="190" y1="300" x2="300" y2="300" stroke="#bfe3ff" strokeOpacity="0.25" />
            <line x1="190" y1="350" x2="300" y2="350" stroke="#bfe3ff" strokeOpacity="0.25" />
            <line x1="190" y1="400" x2="300" y2="400" stroke="#bfe3ff" strokeOpacity="0.25" />

            <rect x="330" y="210" width="85" height="280" stroke="#9cd0ff" strokeOpacity="0.4" strokeWidth="1.2" />
            <line x1="330" y1="260" x2="415" y2="260" stroke="#9cd0ff" strokeOpacity="0.2" />
            <line x1="330" y1="310" x2="415" y2="310" stroke="#9cd0ff" strokeOpacity="0.2" />
            <line x1="330" y1="360" x2="415" y2="360" stroke="#9cd0ff" strokeOpacity="0.2" />

            {/* Center-Right Tall Flagship Skyscraper (like TCS screenshot) */}
            <rect x="780" y="55" width="125" height="435" stroke="#d0ecff" strokeOpacity="0.65" strokeWidth="1.5" />
            <line x1="780" y1="95" x2="905" y2="95" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="135" x2="905" y2="135" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="175" x2="905" y2="175" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="215" x2="905" y2="215" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="255" x2="905" y2="255" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="295" x2="905" y2="295" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="335" x2="905" y2="335" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="375" x2="905" y2="375" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="780" y1="415" x2="905" y2="415" stroke="#d0ecff" strokeOpacity="0.35" />
            <line x1="842" y1="55" x2="842" y2="490" stroke="#d0ecff" strokeOpacity="0.25" />

            {/* Right Wireframe Towers */}
            <rect x="940" y="170" width="115" height="320" stroke="#b5dfff" strokeOpacity="0.5" strokeWidth="1.3" />
            <polygon points="940,170 997,125 1055,170" stroke="#b5dfff" strokeOpacity="0.5" strokeWidth="1.2" fill="none" />
            <line x1="997" y1="125" x2="997" y2="490" stroke="#b5dfff" strokeOpacity="0.25" />

            <rect x="1085" y="130" width="95" height="360" stroke="#a5d8ff" strokeOpacity="0.45" strokeWidth="1.2" />
            <polygon points="1085,130 1132,75 1180,130" stroke="#a5d8ff" strokeOpacity="0.45" strokeWidth="1.2" fill="none" />
            <line x1="1085" y1="190" x2="1180" y2="190" stroke="#a5d8ff" strokeOpacity="0.25" />
            <line x1="1085" y1="250" x2="1180" y2="250" stroke="#a5d8ff" strokeOpacity="0.25" />
            <line x1="1085" y1="310" x2="1180" y2="310" stroke="#a5d8ff" strokeOpacity="0.25" />

            <rect x="1215" y="220" width="130" height="270" stroke="#9cd0ff" strokeOpacity="0.4" strokeWidth="1.2" />
            <line x1="1215" y1="270" x2="1345" y2="270" stroke="#9cd0ff" strokeOpacity="0.22" />
            <line x1="1215" y1="320" x2="1345" y2="320" stroke="#9cd0ff" strokeOpacity="0.22" />
            <line x1="1215" y1="370" x2="1345" y2="370" stroke="#9cd0ff" strokeOpacity="0.22" />
          </svg>

          {/* Dark floor vignette at bottom of hero */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020b18] via-[#020b18]/75 to-transparent" />
        </div>

        {/* Center TCS-Style Statement Content */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{lang === "hi" ? current.tagHi : current.tagEn}</span>
          </div>

          <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold leading-[1.12] tracking-tight text-white whitespace-pre-line drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {lang === "hi" ? current.titleHi : current.titleEn}
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-blue-100/90 leading-relaxed font-normal">
            {lang === "hi" ? current.subHi : current.subEn}
          </p>
        </div>

        {/* Bottom Control Bar inside Hero (matching TCS Screenshot: Pause/Play bottom-left + Pill CTA + Slide Dots) */}
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-wrap items-center justify-between gap-4 pt-4">
          {/* Left: Pause/Play Button + Primary Blue Pill CTA (exact TCS layout) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-11 h-11 rounded bg-black/85 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label={isPlaying ? "Pause slider" : "Play slider"}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-0.5 h-4 bg-white rounded-full" />
                  <span className="w-0.5 h-4 bg-white rounded-full" />
                </span>
              ) : (
                <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <Link
              href={current.ctaHref}
              className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#1d63c8] hover:bg-[#2774e3] text-white font-medium text-sm sm:text-base shadow-[0_8px_25px_rgba(29,99,200,0.5)] transition-all hover:scale-[1.02]"
            >
              {lang === "hi" ? current.ctaHi : current.ctaEn}
            </Link>

            <Link
              href={current.secondaryHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-200 hover:text-white transition-colors"
            >
              <span>{lang === "hi" ? current.secondaryHi : current.secondaryEn}</span>
            </Link>
          </div>

          {/* Right: Slide Selector Indicators & Quick Contact */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeSlide === idx ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              <Icon name="whatsapp" className="w-3.5 h-3.5 text-emerald-400" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corporate 4-Capability Bar ("Technology that moves you forward") */}
      <div className="relative z-20 bg-[#050a14] border-t border-b border-white/10 py-8 sm:py-10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-400">
                {lang === "hi" ? "हमारी तकनीकी क्षमताएं" : "OUR TECHNOLOGY CAPABILITIES"}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {lang === "hi"
                  ? "ऐसी टेक्नोलॉजी जो आपके बिज़नेस को आगे बढ़ाए"
                  : "Technology that moves you forward"}
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>✓ 100+ Delivered Projects</span>
              <span>·</span>
              <span>✓ 15+ States Served</span>
              <span>·</span>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                {lang === "hi" ? "कस्टम कोटेशन प्राप्त करें →" : "Get Custom Quotation →"}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.titleEn}
                href={cap.href}
                className="group p-5 rounded-2xl bg-[#0b1324] hover:bg-[#101d36] border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-4 shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon name={cap.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                    <span>{lang === "hi" ? cap.titleHi : cap.titleEn}</span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {lang === "hi" ? cap.descHi : cap.descEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
