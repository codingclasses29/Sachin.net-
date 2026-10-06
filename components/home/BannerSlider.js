"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export const bannerSlides = [
  {
    id: "hospital",
    title: "Hospital Management System",
    subtitle: "हॉस्पिटल की पूरी व्यवस्था अब एक ही सॉफ्टवेयर में",
    menuLabel: "Hospital Management",
    shortDesc: "OPD, IPD, Doctor, Lab & Pharmacy",
    tag: "🏥 Hospital ERP",
    image: "/banners/hospital-management.png",
    alt: "Sachin.net Hospital Management System — OPD, IPD, Lab, Pharmacy & Doctor Management",
    whatsappMsg: "Namaste Sachin.net! Mujhe Hospital Management System ka live demo aur quotation chahiye.",
    features: ["OPD / IPD Portal", "Doctor & Patient System", "Lab & Pharmacy", "Billing & Analytics"],
    link: "/contact?service=hospital",
    liveDemo: "https://medicarehospitl.netlify.app/",
    liveDemoLabel: "Live Hospital Demo ↗",
    badge: "Smart | Simple | Secure",
  },
  {
    id: "digital",
    title: "सरकारी और ऑनलाइन सेवाएं",
    subtitle: "बिहार की डिजिटल सेवा, अब और भी आसान! एक ही प्लेटफ़ॉर्म पर",
    menuLabel: "सरकारी व डिजिटल सेवाएं",
    shortDesc: "आधार, पैन, राशन, जाति, आय, निवास व eKYC",
    tag: "🇮🇳 Bihar Digital Services",
    image: "/banners/digital-services.png",
    alt: "Sachin.net Bihar Digital Services — Aadhaar, PAN, Ration, Domicile, eKYC, PM Kisan",
    whatsappMsg: "Namaste Sachin.net! Mujhe Bihar Digital Services aur Online Portal ke baare me janna hai.",
    features: ["आधार & पैन कार्ड", "जाति, आय व निवास प्रमाण पत्र", "राशन कार्ड & PM किसान", "घर बैठे 100% सुरक्षित समाधान"],
    link: "/contact?service=digital",
    badge: "Fast | Safe | Trusted",
  },
  {
    id: "website",
    title: "किसी भी प्रकार की वेबसाइट बनवाएँ",
    subtitle: "आपका विचार → हमारी डिज़ाइन → आपकी सफलता",
    menuLabel: "Website Development",
    shortDesc: "Business, Shop, NGO, School, Hotel & Portals",
    tag: "🌐 Custom Websites",
    image: "/banners/website-development.png",
    alt: "Sachin.net Website Development — Business, Shop, NGO, School, Hotel, Restaurant, Portfolio",
    whatsappMsg: "Namaste Sachin.net! Mujhe nayi website banwani hai. Free quote & demo consultation chahiye.",
    features: ["बिज़नेस व कॉर्पोरेट वेबसाइट", "ई-कॉमर्स स्टोर (UPI & Payment)", "NGO व ट्रस्ट पोर्टल", "होटल, रेस्टोरेंट & स्कूल वेबसाइट"],
    link: "/website-development",
    liveDemo: "https://gramvikasfoundation.netlify.app/",
    liveDemoLabel: "Live NGO Demo ↗",
    badge: "Modern | Fast | Mobile SEO Ready",
  },
  {
    id: "hosting",
    title: "Website & Server Hosting",
    subtitle: "Fast | Secure | Reliable | 24/7 Support — आपका भरोसा, हमारी पहचान",
    menuLabel: "Hosting & Servers",
    shortDesc: "Domain, Cloud VPS, SSL Security & Backup",
    tag: "☁️ Hosting & Cloud",
    image: "/banners/hosting-servers.png",
    alt: "Sachin.net Website & Server Hosting — Domain Registration, Cloud VPS, Free SSL, 24/7 Support",
    whatsappMsg: "Namaste Sachin.net! Mujhe Domain aur High-Speed Web Hosting plan chahiye.",
    features: ["डोमेन रजिस्ट्रेशन (.com, .in, .xyz)", "हाई-स्पीड क्लाउड होस्टिंग", "मुफ्त SSL सर्टिफिकेट & DDoS सुरक्षा", "99.9% अपटाइम & 24/7 IST सपोर्ट"],
    link: "/contact?service=hosting",
    badge: "High Speed | 99.9% Uptime",
  },
  {
    id: "school",
    title: "Smart School Management System",
    subtitle: "तकनीक से बेहतर शिक्षा, एक स्मार्ट कल के लिए — Complete School Solution",
    menuLabel: "School Management System",
    shortDesc: "Student, Fees, Attendance, Result & Parent App",
    tag: "🏫 Smart School ERP",
    image: "/banners/school-management.png",
    alt: "Sachin.net Smart School Management System — Students, Teachers, Fees, Exams, Attendance, Parents",
    whatsappMsg: "Namaste Sachin.net! Mujhe Smart School Management System (School ERP) ka live demo dekhna hai.",
    features: ["छात्र & शिक्षक प्रबंधन", "ऑनलाइन फीस & WhatsApp रसीद", "परीक्षा परिणाम & डिजिटल मार्कशीट", "मोबाइल ऐप & पेरेंट पोर्टल"],
    link: "/contact?service=school",
    badge: "School | Students | Teachers | Parents",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = bannerSlides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped left -> next
      nextSlide();
    } else if (diff < -50) {
      // Swiped right -> prev
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = bannerSlides[current];

  return (
    <section
      id="banner-showcase"
      className="relative py-6 sm:py-10 bg-slate-950/60 border-y border-slate-800/60 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Services Banner Showcase"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary-light border border-primary/30 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE SERVICES &amp; SOLUTIONS SHOWCASE</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Sachin.net <span className="text-gradient">Featured Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              हॉस्पिटल सॉफ्टवेयर, सरकारी डिजिटल सेवा, वेबसाइट डेवलपमेंट, हाई-स्पीड होस्टिंग और स्कूल ईआरपी — संपूर्ण समाधान एक ही जगह।
            </p>
          </div>

          {/* Slide counter & pause indicator */}
          <div className="flex items-center gap-3 text-xs text-slate-400 self-start md:self-end">
            <span className="font-mono text-slate-300 font-semibold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-400"}`} />
              {isPaused ? "Paused" : "Auto Playing"}
            </span>
          </div>
        </div>

        {/* 1. SLIDER MENU TABS (Quick Switcher Pills) */}
        <div className="slider-menu-bar mb-4 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {bannerSlides.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-slate-900 text-white border-primary shadow-lg shadow-primary/20 ring-1 ring-primary/40 font-semibold scale-102"
                      : "bg-slate-900/60 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700 hover:bg-slate-800/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.menuLabel}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-primary shadow-sm shadow-primary" : "bg-slate-600 group-hover:bg-slate-400"
                    }`}
                  />
                  <span>{slide.menuLabel}</span>
                  {isActive && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary-light font-bold">
                      ACTIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. MAIN BANNER SLIDER SCREEN */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl shadow-black/60 group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Carousel Wrapper */}
          <div className="relative w-full aspect-[1024/389] min-h-[190px] sm:min-h-[280px] md:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-slate-950">
            {bannerSlides.map((slide, index) => {
              const isActive = index === current;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto z-10"
                      : "opacity-0 scale-98 pointer-events-none z-0"
                  }`}
                >
                  <Link
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(slide.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative cursor-pointer group/slide"
                    aria-label={`Open WhatsApp demo for ${slide.title}`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                      className="object-contain sm:object-cover w-full h-full select-none"
                    />

                    {/* Subtle hover overlay with CTA icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="btn-whatsapp text-xs sm:text-sm shadow-lg">
                          <Icon name="whatsapp" className="w-4 h-4" />
                          <span>WhatsApp Par Demo Dekhein →</span>
                        </span>
                        <span className="text-xs text-white/90 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 hidden sm:inline-block">
                          Click to Connect with Sachin Kushwaha
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* Left Prev Arrow Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Banner"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-slate-900/95 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-xl opacity-80 group-hover:opacity-100"
            >
              <Icon name="arrow" className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-white" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Banner"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-slate-900/95 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-xl opacity-80 group-hover:opacity-100"
            >
              <Icon name="arrow" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Bottom Dots Indicator */}
            <div className="absolute bottom-2 sm:bottom-4 inset-x-0 z-20 flex items-center justify-center gap-1.5 sm:gap-2">
              {bannerSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-7 sm:w-9 bg-primary shadow-md shadow-primary"
                      : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Go to banner slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 3. ACTIVE SLIDE INTERACTIVE ACTION STRIP */}
          <div className="bg-slate-900/95 border-t border-slate-800 p-3 sm:p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/20 text-primary-light border border-primary/30">
                  {activeSlide.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeSlide.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                {activeSlide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0 flex-wrap">
              {activeSlide.liveDemo && (
                <a
                  href={activeSlide.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal !py-2 !px-3 sm:!px-4 text-xs sm:text-sm flex items-center gap-1.5 whitespace-nowrap shadow-md shadow-teal-500/20 font-bold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>{activeSlide.liveDemoLabel || "Live Demo ↗"}</span>
                </a>
              )}

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(activeSlide.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-2 !px-3 sm:!px-4 text-xs sm:text-sm flex-1 md:flex-none justify-center whitespace-nowrap shadow-md shadow-emerald-500/20"
              >
                <Icon name="whatsapp" className="w-4 h-4 shrink-0" />
                <span>WhatsApp Demo</span>
              </a>

              <a
                href={`tel:${site.phoneRaw}`}
                className="btn-secondary !py-2 !px-3 sm:!px-4 text-xs sm:text-sm flex-1 md:flex-none justify-center whitespace-nowrap"
              >
                <Icon name="phone" className="w-3.5 h-3.5 text-primary-light shrink-0" />
                <span>Call Now</span>
              </a>

              <Link
                href={activeSlide.link}
                className="btn-primary !py-2 !px-3 sm:!px-4 text-xs sm:text-sm hidden lg:inline-flex items-center justify-center whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <Icon name="arrow" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. KEY BULLETS STRIP UNDERNEATH */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-3 sm:mt-4">
          {activeSlide.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
