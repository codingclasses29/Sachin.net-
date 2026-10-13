"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import SiteSearch from "./SiteSearch";
import { useLanguage } from "./Providers";
import { navMainLinks, navMoreLinks, site } from "@/lib/data";

const corporateMenus = [
  {
    id: "what-we-do",
    labelEn: "What we do",
    labelHi: "हम क्या करते हैं",
    items: [
      { labelEn: "All Technology Services", labelHi: "सभी टेक्नोलॉजी सेवाएं", href: "/services", desc: "End-to-end web, software & cloud engineering" },
      { labelEn: "Website Development", labelHi: "वेबसाइट डेवलपमेंट", href: "/website-development", desc: "Next.js & React corporate business websites" },
      { labelEn: "School Management ERP", labelHi: "स्कूल मैनेजमेंट ERP", href: "/school-erp-bihar", desc: "Admissions, fee automation, exams & parent app" },
      { labelEn: "E-Commerce Platforms", labelHi: "ई-कॉमर्स ऑनलाइन स्टोर", href: "/ecommerce-development-bihar", desc: "Online stores with UPI, Razorpay & inventory" },
      { labelEn: "Mobile App Development", labelHi: "मोबाइल ऐप डेवलपमेंट", href: "/mobile-app-development", desc: "Android & iOS apps built for scale" },
      { labelEn: "AI & Machine Learning", labelHi: "AI और मशीन लर्निंग", href: "/ai-services", desc: "Custom chatbots, OCR & workflow automation" },
      { labelEn: "Instant Service Booking", labelHi: "ऑनलाइन सर्विस बुकिंग", href: "/book-service", desc: "Book your project scope directly online" },
    ],
  },
  {
    id: "who-we-are",
    labelEn: "Who we are",
    labelHi: "हमारे बारे में",
    items: [
      { labelEn: "Company Profile & Vision", labelHi: "कंपनी प्रोफाइल और विज़न", href: "/about", desc: "Founded by Sachin Kushwaha · Serving 15+ States" },
      { labelEn: "Bihar Digital Initiative", labelHi: "बिहार डिजिटल सेवाएं", href: "/website-development-bihar", desc: "Empowering businesses across Bihar & Purvanchal" },
      { labelEn: "Siwan Headquarters", labelHi: "सीवान हेडक्वार्टर", href: "/website-development-siwan", desc: "Core engineering & founder consultation center" },
      { labelEn: "Patna Technology Hub", labelHi: "पटना टेक्नोलॉजी हब", href: "/website-development-patna", desc: "Capital hub for enterprises, hospitals & startups" },
      { labelEn: "Regional Service Hubs", labelHi: "हमारे सर्विस सेंटर्स", href: "/admin/locations", desc: "Explore all active service hubs across Bharat" },
    ],
  },
  {
    id: "solutions",
    labelEn: "Solutions",
    labelHi: "समाधान व प्रोडक्ट्स",
    items: [
      { labelEn: "Portfolio & Case Studies", labelHi: "पोर्टफोलियो और लाइव प्रोजेक्ट्स", href: "/portfolio", desc: "100+ delivered enterprise & community projects" },
      { labelEn: "AI Tools & Products", labelHi: "फ्री AI टूल्स और प्रोडक्ट्स", href: "/ai-tools", desc: "Try our in-house AI generators & utilities" },
      { labelEn: "Custom Quotation Plans", labelHi: "कस्टम कोटेशन प्लान्स", href: "/pricing", desc: "Tailored scope & quotation based on requirements" },
      { labelEn: "Live: MedCare Hospital ERP ↗", labelHi: "लाइव: मेडकेयर हॉस्पिटल ERP ↗", href: "https://medicarehospitl.netlify.app/", external: true, desc: "Production hospital OPD/IPD & doctor portal" },
      { labelEn: "Live: Gram Vikas NGO Portal ↗", labelHi: "लाइव: ग्राम विकास NGO पोर्टल ↗", href: "https://gramvikasfoundation.netlify.app/", external: true, desc: "80G tax receipts, member ID cards & donations" },
      { labelEn: "Live: Rurally Smile Org ↗", labelHi: "लाइव: रूरली स्माइल फाउंडेशन ↗", href: "https://rurallysmile-org.vercel.app/", external: true, desc: "Rural welfare foundation digital platform" },
    ],
  },
  {
    id: "insights",
    labelEn: "Insights",
    labelHi: "इनसाइट्स और न्यूज़",
    items: [
      { labelEn: "Newsroom & Tech Blog", labelHi: "टेक्नोलॉजी ब्लॉग और अपडेट्स", href: "/blog", desc: "Latest insights on AI, web engineering & SEO" },
      { labelEn: "Website Scope Guide", labelHi: "वेबसाइट गाइड (India)", href: "/blog/website-cost-in-india", desc: "How to plan your business website architecture" },
      { labelEn: "School Digital Transformation", labelHi: "स्कूल डिजिटलाइजेशन गाइड", href: "/blog/school-website-kaise-banaye", desc: "Complete guide to modernizing school operations" },
    ],
  },
  {
    id: "portals",
    labelEn: "Portals",
    labelHi: "क्लाइंट और पार्टनर पोर्टल",
    items: [
      { labelEn: "Client Project Dashboard", labelHi: "क्लाइंट प्रोजेक्ट डैशबोर्ड", href: "/customer/dashboard", desc: "Track live project milestones & deliverables" },
      { labelEn: "Partner Registration", labelHi: "पार्टनर प्रोग्राम रजिस्ट्रेशन", href: "/partner/register", desc: "Join as an official referral or agency partner" },
      { labelEn: "Partner Earnings Portal", labelHi: "पार्टनर डैशबोर्ड", href: "/partner/dashboard", desc: "Submit leads & request instant UPI payouts" },
      { labelEn: "Admin Security Console", labelHi: "एडमिन कंट्रोल पैनल", href: "/admin/login", desc: "2FA OTP protected administrator gateway" },
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

  return (
    <header
      ref={navRef}
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
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : menu.id)}
                  className={`px-3 py-2 rounded-md inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isOpen ? "text-white bg-white/10" : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{lang === "hi" ? menu.labelHi : menu.labelEn}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown Panel */}
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2 w-80 sm:w-96 z-50">
                    <div className="rounded-xl bg-[#0b0f17] border border-white/15 shadow-2xl p-3 backdrop-blur-xl">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 px-3 py-1.5 border-b border-white/10 mb-1.5">
                        {lang === "hi" ? menu.labelHi : menu.labelEn}
                      </div>
                      <div className="space-y-1 max-h-[70vh] overflow-y-auto">
                        {menu.items.map((item) =>
                          item.external ? (
                            <a
                              key={item.href}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3 py-2.5 rounded-lg hover:bg-blue-600/20 border border-transparent hover:border-blue-500/30 transition-all group"
                            >
                              <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 flex items-center justify-between">
                                <span>{lang === "hi" ? item.labelHi : item.labelEn}</span>
                              </div>
                              {item.desc && (
                                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{item.desc}</p>
                              )}
                            </a>
                          ) : (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-3 py-2.5 rounded-lg transition-all group ${
                                pathname === item.href
                                  ? "bg-blue-600/25 border border-blue-500/40"
                                  : "hover:bg-white/[0.06] border border-transparent"
                              }`}
                            >
                              <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300">
                                {lang === "hi" ? item.labelHi : item.labelEn}
                              </div>
                              {item.desc && (
                                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{item.desc}</p>
                              )}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}

          <li>
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-md inline-flex items-center transition-colors ${
                pathname === "/careers"
                  ? "text-white font-semibold bg-white/10"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {lang === "hi" ? "करियर" : "Careers"}
            </Link>
          </li>
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

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer */}
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
                      className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180 text-blue-400" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="mt-1 pl-3 border-l-2 border-blue-500/40 space-y-1">
                      {menu.items.map((item) =>
                        item.external ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 px-2 text-sm text-slate-300 hover:text-white"
                          >
                            {lang === "hi" ? item.labelHi : item.labelEn}
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 px-2 text-sm text-slate-300 hover:text-white"
                          >
                            {lang === "hi" ? item.labelHi : item.labelEn}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="border-b border-white/10 pb-2">
              <Link href="/careers" className="block py-2.5 px-2 font-semibold text-base text-white">
                {lang === "hi" ? "करियर (Careers)" : "Careers"}
              </Link>
              <Link href="/contact" className="block py-2.5 px-2 font-semibold text-base text-white">
                {lang === "hi" ? "संपर्क करें (Contact Us)" : "Contact us"}
              </Link>
            </div>

            {/* Quick Links from navMainLinks / navMoreLinks for fast access */}
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
