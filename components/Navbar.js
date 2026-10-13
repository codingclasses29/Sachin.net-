"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import SiteSearch from "./SiteSearch";
import { useLanguage } from "./Providers";
import { site } from "@/lib/data";

const corporateMenus = [
  {
    id: "what-we-do",
    labelEn: "What we do",
    labelHi: "हम क्या करते हैं",
    taglineEn: "SACHIN-NET IT SOFTWARE & CLOUD ENGINEERING",
    taglineHi: "SACHIN-NET आईटी सॉफ्टवेयर और क्लाउड इंजीनियरिंग",
    overviewEn:
      "End-to-end custom software, AI automation, enterprise web platforms, and cloud ERP engineered by Sachin-Net Technologies.",
    overviewHi:
      "Sachin-Net Technologies द्वारा आधुनिक AI, कस्टम वेब प्लेटफॉर्म, मोबाइल ऐप और क्लाउड ERP सॉफ्टवेयर का निर्माण।",
    spotlight: {
      image: "/banners/website-development.png",
      badge: "SACHIN-NET FLAGSHIP SUITE",
      titleEn: "Sachin-Net Enterprise Web & Cloud Architecture",
      titleHi: "Sachin-Net एंटरप्राइज वेब और क्लाउड आर्किटेक्चर",
      descEn:
        "Full-stack Next.js 16, React, Node.js, and Python AI software tailored to your exact business requirements.",
      descHi:
        "आपके बिज़नेस के अनुसार कस्टम कोटेशन और आधुनिक फुल-स्टैक सॉफ्टवेयर समाधान।",
      modules: ["Next.js 16 Cloud", "Custom Admin CMS", "24×7 SLA Support"],
      ctaEn: "Explore All IT Services →",
      ctaHi: "सभी आईटी सेवाएं देखें →",
      href: "/services",
    },
    items: [
      {
        labelEn: "Sachin-Net Enterprise Web Suite",
        labelHi: "Sachin-Net वेबसाइट डेवलपमेंट",
        href: "/website-development",
        image: "/banners/website-development.png",
        desc: "Next.js & React corporate websites with custom CMS & SEO",
      },
      {
        labelEn: "Sachin-Net Smart School ERP",
        labelHi: "Sachin-Net स्कूल मैनेजमेंट ERP",
        href: "/school-erp-bihar",
        image: "/banners/school-management.png",
        desc: "Admissions, automated fee receipts, exams & parent mobile app",
      },
      {
        labelEn: "Sachin-Net E-Commerce Cloud",
        labelHi: "Sachin-Net ई-कॉमर्स प्लेटफॉर्म",
        href: "/ecommerce-development-bihar",
        image: "/images/portfolio-shop.png",
        desc: "Multi-category online stores with UPI, Razorpay & GST billing",
      },
      {
        labelEn: "Sachin-Net Mobile App Studio",
        labelHi: "Sachin-Net मोबाइल ऐप स्टूडियो",
        href: "/mobile-app-development",
        image: "/banners/digital-services.png",
        desc: "Android & iOS apps with real-time cloud sync & Play Store launch",
      },
      {
        labelEn: "Sachin-Net AI & ML Solutions",
        labelHi: "Sachin-Net AI और मशीन लर्निंग",
        href: "/ai-services",
        image: "/banners/hosting-servers.png",
        desc: "Custom Gemini/GPT chatbots, OCR & predictive business analytics",
      },
      {
        labelEn: "Sachin-Net Online Service Booking",
        labelHi: "Sachin-Net ऑनलाइन सर्विस बुकिंग",
        href: "/book-service",
        image: "/images/portfolio-health.png",
        desc: "Submit your software scope & receive a tailored custom quotation",
      },
    ],
  },
  {
    id: "who-we-are",
    labelEn: "Who we are",
    labelHi: "हमारे बारे में",
    taglineEn: "ABOUT SACHIN-NET TECHNOLOGIES & SERVICES",
    taglineHi: "SACHIN-NET TECHNOLOGIES का परिचय",
    overviewEn:
      "Headquartered in Siwan (Bihar) and serving 15+ Indian states with 100+ delivered enterprise, healthcare, education, and NGO platforms.",
    overviewHi:
      "सीवान (बिहार) से पूरे भारत के 15+ राज्यों में 100+ सफल सॉफ्टवेयर और वेबसाइट प्रोजेक्ट्स की डिलीवरी।",
    spotlight: {
      image: "/team/sachin-kumar.png",
      badge: "LEADERSHIP & VISION",
      titleEn: "Founded by Sachin Kushwaha · IITM Pravartak",
      titleHi: "संस्थापक: सचिन कुशवाहा · फुल-स्टैक आर्किटेक्ट",
      descEn:
        "Building Bharat's most trusted AI-led software engineering & digital transformation partner.",
      descHi:
        "हर व्यवसाय, स्कूल, अस्पताल और संस्था को विश्वस्तरीय आईटी सॉफ्टवेयर से जोड़ने का संकल्प।",
      modules: ["100+ Live Clients", "15+ States Served", "99% Satisfaction"],
      ctaEn: "Read Company Profile →",
      ctaHi: "कंपनी प्रोफाइल पढ़ें →",
      href: "/about",
    },
    items: [
      {
        labelEn: "Sachin-Net Corporate Profile",
        labelHi: "Sachin-Net कंपनी प्रोफाइल",
        href: "/about",
        image: "/banners/website-development.png",
        desc: "Vision, mission, leadership & engineering excellence",
      },
      {
        labelEn: "Sachin-Net Bihar Digital Hub",
        labelHi: "Sachin-Net बिहार डिजिटल हब",
        href: "/website-development-bihar",
        image: "/banners/digital-services.png",
        desc: "Statewide IT software & web engineering across Bihar",
      },
      {
        labelEn: "Sachin-Net Siwan Headquarters",
        labelHi: "Sachin-Net सीवान हेडक्वार्टर",
        href: "/website-development-siwan",
        image: "/banners/hosting-servers.png",
        desc: "Core software R&D center & direct founder consultation",
      },
      {
        labelEn: "Sachin-Net Patna Enterprise Hub",
        labelHi: "Sachin-Net पटना टेक्नोलॉजी हब",
        href: "/website-development-patna",
        image: "/banners/hospital-management.png",
        desc: "Dedicated IT delivery for Patna hospitals, colleges & startups",
      },
      {
        labelEn: "Sachin-Net Regional Service Centers",
        labelHi: "Sachin-Net सर्विस लोकेशन्स",
        href: "/admin/locations",
        image: "/banners/school-management.png",
        desc: "Explore all active delivery hubs across Bihar, UP & NCR",
      },
    ],
  },
  {
    id: "solutions",
    labelEn: "Solutions",
    labelHi: "समाधान व प्रोडक्ट्स",
    taglineEn: "SACHIN-NET LIVE ERP PRODUCTS & PLATFORMS",
    taglineHi: "SACHIN-NET लाइव ERP प्रोडक्ट्स और प्लेटफॉर्म्स",
    overviewEn:
      "Production-verified cloud ERP systems for multi-specialty hospitals, schools, NGOs, and e-commerce enterprises.",
    overviewHi:
      "अस्पतालों, स्कूलों, NGO संस्थाओं और ई-कॉमर्स के लिए लाइव प्रमाणित क्लाउड सॉफ्टवेयर।",
    spotlight: {
      image: "/banners/hospital-management.png",
      badge: "LIVE PRODUCTION ERP",
      titleEn: "Sachin-Net MediCare Hospital ERP 2.0",
      titleHi: "Sachin-Net मेडिकेयर हॉस्पिटल ERP 2.0",
      descEn:
        "Complete OPD/IPD registration, doctor scheduling, pharmacy billing, and pathology lab management running live.",
      descHi:
        "OPD/IPD रजिस्ट्रेशन, डॉक्टर अपॉइंटमेंट, फार्मेसी और पैथोलॉजी बिलिंग का लाइव सॉफ्टवेयर।",
      modules: ["OPD / IPD Cloud", "Pharmacy Billing", "Doctor Portal"],
      ctaEn: "View Live Portfolio →",
      ctaHi: "लाइव पोर्टफोलियो देखें →",
      href: "/portfolio",
    },
    items: [
      {
        labelEn: "Sachin-Net Live Portfolio & Case Studies",
        labelHi: "Sachin-Net पोर्टफोलियो और केस स्टडी",
        href: "/portfolio",
        image: "/images/portfolio-health.png",
        desc: "Explore 100+ delivered enterprise & institutional software projects",
      },
      {
        labelEn: "Sachin-Net MediCare Hospital ERP ↗",
        labelHi: "लाइव: Sachin-Net हॉस्पिटल ERP ↗",
        href: "https://medicarehospitl.netlify.app/",
        external: true,
        image: "/banners/hospital-management.png",
        desc: "Live hospital OPD/IPD, pharmacy & doctor appointment system",
      },
      {
        labelEn: "Sachin-Net Gram Vikas NGO Cloud ↗",
        labelHi: "लाइव: ग्राम विकास NGO पोर्टल ↗",
        href: "https://gramvikasfoundation.netlify.app/",
        external: true,
        image: "/banners/digital-services.png",
        desc: "Live NGO portal with 80G receipts & instant member ID cards",
      },
      {
        labelEn: "Sachin-Net Health Portal 2.0 ↗",
        labelHi: "लाइव: मेडिकेयर हेल्थ पोर्टल 2.0 ↗",
        href: "https://medicare-hospitl-1.netlify.app/",
        external: true,
        image: "/images/portfolio-health.png",
        desc: "Multi-specialty clinic & diagnostic lab booking platform",
      },
      {
        labelEn: "Sachin-Net Rurally Smile NGO Suite ↗",
        labelHi: "लाइव: रूरली स्माइल फाउंडेशन ↗",
        href: "https://rurallysmile-org.vercel.app/",
        external: true,
        image: "/banners/website-development.png",
        desc: "Rural impact foundation portal with online donation gateway",
      },
      {
        labelEn: "Sachin-Net Interactive AI Tools Lab",
        labelHi: "Sachin-Net इंटरैक्टिव AI लैब",
        href: "/ai-tools",
        image: "/banners/hosting-servers.png",
        desc: "Test our live AI content, code & business automation tools",
      },
    ],
  },
  {
    id: "insights",
    labelEn: "Insights",
    labelHi: "इनसाइट्स और कोटेशन",
    taglineEn: "SACHIN-NET TECH RESEARCH & QUOTATION ENGINE",
    taglineHi: "SACHIN-NET टेक्नोलॉजी रिसर्च और कोटेशन",
    overviewEn:
      "Strategic technology guides, digital transformation blueprints, and tailored software scope quotation plans.",
    overviewHi:
      "डिजिटल ट्रांसफॉर्मेशन गाइड्स, टेक्नोलॉजी लेख और कस्टम सॉफ्टवेयर कोटेशन प्लान्स।",
    spotlight: {
      image: "/banners/school-management.png",
      badge: "CUSTOM QUOTATION MODEL",
      titleEn: "Sachin-Net Tailored Software Quotation",
      titleHi: "Sachin-Net कस्टम सॉफ्टवेयर कोटेशन",
      descEn:
        "Zero fixed server pricing — receive an official Sachin-Net quotation engineered to your exact software scope.",
      descHi:
        "क्लाइंट की आवश्यकता और सॉफ्टवेयर फीचर्स के अनुसार सीधा कस्टम कोटेशन प्राप्त करें।",
      modules: ["Scope Analysis", "Custom Architecture", "Direct Consultation"],
      ctaEn: "Get Custom Quotation →",
      ctaHi: "कस्टम कोटेशन लें →",
      href: "/pricing",
    },
    items: [
      {
        labelEn: "Sachin-Net Tech Newsroom & Blog",
        labelHi: "Sachin-Net टेक ब्लॉग और न्यूज़",
        href: "/blog",
        image: "/banners/website-development.png",
        desc: "Executive articles on Next.js, ERP architecture & AI growth",
      },
      {
        labelEn: "Sachin-Net Custom Quotation Plans",
        labelHi: "Sachin-Net कस्टम कोटेशन प्लान्स",
        href: "/pricing",
        image: "/banners/digital-services.png",
        desc: "Compare Starter, Corporate, NGO & Enterprise ERP scopes",
      },
      {
        labelEn: "Enterprise Website Architecture Guide",
        labelHi: "वेबसाइट आर्किटेक्चर गाइड 2026",
        href: "/blog/website-cost-in-india",
        image: "/banners/hosting-servers.png",
        desc: "How to plan scalable web & cloud systems for your business",
      },
      {
        labelEn: "School Digital Transformation Blueprint",
        labelHi: "स्कूल ERP डिजिटलाइजेशन गाइड",
        href: "/blog/school-website-kaise-banaye",
        image: "/banners/school-management.png",
        desc: "Step-by-step roadmap to paperless school administration",
      },
    ],
  },
  {
    id: "portals",
    labelEn: "Portals",
    labelHi: "क्लाइंट व पार्टनर पोर्टल",
    taglineEn: "SACHIN-NET DIGITAL ECOSYSTEM PORTALS",
    taglineHi: "SACHIN-NET क्लाइंट, पार्टनर और एडमिन पोर्टल्स",
    overviewEn:
      "Dedicated cloud dashboards for clients to book services and track milestones, partners to earn commissions, and 2FA admin control.",
    overviewHi:
      "क्लाइंट बुकिंग, लाइव प्रोजेक्ट ट्रैकिंग, पार्टनर कमीशन और 2FA एडमिन सुरक्षा के लिए समर्पित पोर्टल।",
    spotlight: {
      image: "/banners/hosting-servers.png",
      badge: "SACHIN-NET CLOUD ECOSYSTEM",
      titleEn: "Sachin-Net Multi-Portal Control Center",
      titleHi: "Sachin-Net मल्टी-पोर्टल कंट्रोल सेंटर",
      descEn:
        "Real-time project tracking, partner lead payouts, and 2FA OTP encrypted administrator security.",
      descHi:
        "रियल-टाइम प्रोजेक्ट ट्रैकिंग, पार्टनर पेआउट और 2FA ईमेल OTP सुरक्षा।",
      modules: ["Client Dashboard", "Partner 25% Hub", "2FA Admin OTP"],
      ctaEn: "Open Client Portal →",
      ctaHi: "क्लाइंट पोर्टल खोलें →",
      href: "/customer/dashboard",
    },
    items: [
      {
        labelEn: "Sachin-Net Online Service Booking",
        labelHi: "Sachin-Net ऑनलाइन सर्विस बुकिंग",
        href: "/book-service",
        image: "/banners/website-development.png",
        desc: "Book website, ERP, NGO portal or AI software online",
      },
      {
        labelEn: "Sachin-Net Client Project Dashboard",
        labelHi: "Sachin-Net क्लाइंट प्रोजेक्ट डैशबोर्ड",
        href: "/customer/dashboard",
        image: "/banners/digital-services.png",
        desc: "Track live booking status, milestones & engineer updates",
      },
      {
        labelEn: "Sachin-Net Partner Registration",
        labelHi: "Sachin-Net पार्टनर रजिस्ट्रेशन",
        href: "/partner/register",
        image: "/images/portfolio-shop.png",
        desc: "Join Sachin-Net Partner Program & earn up to 25% commission",
      },
      {
        labelEn: "Sachin-Net Partner Earnings Portal",
        labelHi: "Sachin-Net पार्टनर डैशबोर्ड",
        href: "/partner/dashboard",
        image: "/images/portfolio-edu.png",
        desc: "Submit client referrals, track deals & request UPI payouts",
      },
      {
        labelEn: "Sachin-Net Admin Console (2FA OTP)",
        labelHi: "Sachin-Net एडमिन पैनल (2FA OTP)",
        href: "/admin/login",
        image: "/banners/hosting-servers.png",
        desc: "Locked single-user administrator console with Email OTP",
      },
    ],
  },
  {
    id: "careers",
    labelEn: "Careers",
    labelHi: "करियर (Careers)",
    taglineEn: "CAREERS & ENGINEERING AT SACHIN-NET",
    taglineHi: "SACHIN-NET में सॉफ्टवेयर करियर और अवसर",
    overviewEn:
      "Join Sachin-Net Technologies as a Full Stack Developer, Python AI Engineer, UI/UX Designer, or Growth Partner.",
    overviewHi:
      "Sachin-Net Technologies की इंजीनियरिंग टीम से जुड़ें — फुल-स्टैक, AI/ML और UI/UX में अवसर।",
    spotlight: {
      image: "/images/portfolio-edu.png",
      badge: "JOIN SACHIN-NET TEAM",
      titleEn: "Build the Future of AI & Enterprise Software",
      titleHi: "AI और सॉफ्टवेयर के भविष्य का निर्माण करें",
      descEn:
        "Work on live Healthcare ERP, School Cloud, and Next.js platforms with direct mentorship from Founder Sachin Kushwaha.",
      descHi:
        "लाइव हॉस्पिटल ERP, स्कूल क्लाउड और Next.js प्रोजेक्ट्स पर काम करने का सुनहरा अवसर।",
      modules: ["Full Stack Next.js", "Python & GenAI", "Remote & Siwan HQ"],
      ctaEn: "View Open Positions →",
      ctaHi: "सभी जॉब्स देखें →",
      href: "/careers",
    },
    items: [
      {
        labelEn: "Sachin-Net Engineering Careers",
        labelHi: "Sachin-Net इंजीनियरिंग करियर",
        href: "/careers",
        image: "/banners/website-development.png",
        desc: "Apply for Full Stack, Python AI/ML & UI/UX positions",
      },
      {
        labelEn: "Sachin-Net Partner & Agency Program",
        labelHi: "Sachin-Net डिजिटल पार्टनर प्रोग्राम",
        href: "/partner/register",
        image: "/banners/digital-services.png",
        desc: "Become an official Sachin-Net software partner in your city",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!activeDropdown) return;
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [activeDropdown]);

  const activeMenuData = corporateMenus.find((m) => m.id === activeDropdown);

  return (
    <header
      ref={navRef}
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-black text-white border-b ${
        scrolled ? "border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.85)]" : "border-white/10"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px] gap-4">
        {/* Left: TCS-Style Brand Logo + Corporate Wordmark */}
        <Link
          href="/"
          className="nav-brand flex items-center gap-3 shrink-0 py-1 transition-opacity hover:opacity-90 group"
        >
          <Image
            src="/logo.png"
            alt="Sachin.net Online Services"
            width={120}
            height={42}
            priority
            className="h-9 sm:h-10 w-auto max-h-[42px] object-contain shrink-0"
            style={{ maxHeight: "42px", width: "auto", height: "auto" }}
          />
          <div className="hidden sm:flex flex-col border-l border-white/25 pl-3 leading-none">
            <span className="text-[13px] md:text-sm font-extrabold tracking-[0.14em] text-white uppercase">
              SACHIN-NET
            </span>
            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.12em] text-slate-300 uppercase mt-1">
              {lang === "hi" ? "टेक्नोलॉजी और डिजिटल सर्विसेज" : "TECHNOLOGIES & SERVICES"}
            </span>
          </div>
        </Link>

        {/* Center: TCS-Style Dropdown Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-normal text-slate-200">
          {corporateMenus.map((menu) => {
            const isOpen = activeDropdown === menu.id;
            return (
              <li
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : menu.id)}
                  className={`px-3 py-2 rounded-md inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isOpen
                      ? "text-white bg-white/15 border-b-2 border-blue-500"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{lang === "hi" ? menu.labelHi : menu.labelEn}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: TCS-Style Search, Global Language Switcher, Contact Us & Corporate Emblem */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          {/* Search Icon */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-slate-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Search site"
            title="Search (Ctrl+K)"
          >
            <Icon name="search" className="w-5 h-5" />
          </button>

          {/* Global (EN | HI) Switcher matching TCS */}
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-white py-1.5 px-2.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            title="Switch Language (English / Hindi)"
          >
            <Icon name="globe" className="w-4 h-4 text-blue-400" />
            <span>{lang === "hi" ? "India (हिंदी)" : "Global (En)"}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600/30 border border-blue-400/40 text-blue-200 font-bold">
              {lang === "hi" ? "EN" : "हिं"}
            </span>
          </button>

          {/* Contact Us text link matching TCS */}
          <Link
            href="/contact"
            className="text-xs xl:text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
          >
            {lang === "hi" ? "संपर्क करें" : "Contact us"}
          </Link>

          {/* Far-Right Corporate Emblem Badge (like TATA mark in TCS header) */}
          <Link
            href="/book-service"
            className="flex flex-col items-center justify-center pl-3 border-l border-white/20 group"
            title="Book Service / Request Quotation"
          >
            <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black tracking-tighter text-white group-hover:bg-blue-600 group-hover:border-blue-400 transition-colors">
              SN
            </div>
            <span className="text-[8px] font-extrabold tracking-[0.18em] text-white mt-0.5 uppercase">
              BHARAT
            </span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            className="px-2 py-1 rounded bg-white/10 border border-white/20 text-[11px] font-bold text-white"
            aria-label="Toggle Language"
          >
            {lang === "hi" ? "EN" : "हिंदी"}
          </button>
          <button
            type="button"
            className="p-2 text-slate-200 hover:text-white"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Icon name="search" className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 text-slate-200 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* FULL-WIDTH TCS CORPORATE IT SOFTWARE MEGA-MENU WITH IMAGES & TEXT BOXES */}
      {activeMenuData && (
        <div className="hidden lg:block w-full bg-[#070b14] border-t border-b border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8 grid grid-cols-12 gap-8 items-start">
            {/* Left Column (3 Cols): Category Overview Box */}
            <div className="col-span-3 pr-6 border-r border-white/10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400 mb-2">
                  {lang === "hi" ? activeMenuData.taglineHi : activeMenuData.taglineEn}
                </span>
                <h3 className="text-2xl font-normal text-white tracking-tight">
                  {lang === "hi" ? activeMenuData.labelHi : activeMenuData.labelEn}
                </h3>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {lang === "hi" ? activeMenuData.overviewHi : activeMenuData.overviewEn}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                <Link
                  href="/book-service"
                  onClick={() => setActiveDropdown(null)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#1d63dc] hover:bg-[#2a73f0] text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>{lang === "hi" ? "कस्टम कोटेशन प्राप्त करें" : "Request Custom Quotation"}</span>
                  <span>→</span>
                </Link>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-medium inline-flex items-center justify-center gap-2 transition-all"
                >
                  <Icon name="whatsapp" className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* Center Column (5 Cols): Grid of Sachin-Net IT Software Image + Text Boxes */}
            <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeMenuData.items.map((item) => {
                const ItemWrapper = item.external ? "a" : Link;
                const wrapperProps = item.external
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : { href: item.href };

                return (
                  <ItemWrapper
                    key={item.href + item.labelEn}
                    {...wrapperProps}
                    onClick={() => setActiveDropdown(null)}
                    className="group p-2.5 rounded-xl bg-[#0e1526] hover:bg-[#15203a] border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-3"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/15 bg-slate-900">
                      <Image
                        src={item.image || "/banners/website-development.png"}
                        alt={item.labelEn}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white group-hover:text-blue-300 leading-snug line-clamp-1">
                        {lang === "hi" ? item.labelHi : item.labelEn}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </ItemWrapper>
                );
              })}
            </div>

            {/* Right Column (4 Cols): Featured Sachin-Net IT Software Spotlight Image & Text Box */}
            {activeMenuData.spotlight && (
              <div className="col-span-4 rounded-2xl bg-[#101829] border border-blue-500/30 overflow-hidden shadow-xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={activeMenuData.spotlight.image}
                    alt={activeMenuData.spotlight.titleEn}
                    fill
                    className="object-cover object-center opacity-90"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101829] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600/90 text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                    {activeMenuData.spotlight.badge}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-white leading-snug">
                    {lang === "hi"
                      ? activeMenuData.spotlight.titleHi
                      : activeMenuData.spotlight.titleEn}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {lang === "hi"
                      ? activeMenuData.spotlight.descHi
                      : activeMenuData.spotlight.descEn}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {activeMenuData.spotlight.modules.map((mod) => (
                      <span
                        key={mod}
                        className="text-[10px] px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-blue-200 font-semibold"
                      >
                        ✓ {mod}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={activeMenuData.spotlight.href}
                    onClick={() => setActiveDropdown(null)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>
                      {lang === "hi"
                        ? activeMenuData.spotlight.ctaHi
                        : activeMenuData.spotlight.ctaEn}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer with Sachin-Net IT Software Image & Text Boxes */}
      {open && (
        <div className="lg:hidden bg-[#05070c] border-t border-white/15 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2 pb-10">
            {corporateMenus.map((menu) => {
              const isExpanded = mobileExpanded === menu.id;
              return (
                <div key={menu.id} className="border-b border-white/10 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isExpanded ? null : menu.id)}
                    className="w-full flex items-center justify-between py-2.5 px-2 text-left font-semibold text-base text-white"
                  >
                    <span>{lang === "hi" ? menu.labelHi : menu.labelEn}</span>
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isExpanded ? "rotate-180 text-blue-400" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-2 px-1 pb-2">
                      {menu.items.map((item) => {
                        const MobileWrapper = item.external ? "a" : Link;
                        const mobileProps = item.external
                          ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                          : { href: item.href };
                        return (
                          <MobileWrapper
                            key={item.href + item.labelEn}
                            {...mobileProps}
                            className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.04] border border-white/10"
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={item.image || "/banners/website-development.png"}
                                alt={item.labelEn}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-white truncate">
                                {lang === "hi" ? item.labelHi : item.labelEn}
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-1">{item.desc}</p>
                            </div>
                          </MobileWrapper>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="border-b border-white/10 pb-2">
              <Link href="/contact" className="block py-2.5 px-2 font-semibold text-base text-white">
                {lang === "hi" ? "संपर्क करें (Contact Us)" : "Contact us"}
              </Link>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-2">
              <Link
                href="/book-service"
                className="py-3 px-4 rounded-full bg-[#1d63c8] hover:bg-[#2573e0] text-white font-bold text-xs text-center shadow-lg"
              >
                {lang === "hi" ? "सर्विस बुक करें" : "Book Service"}
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
