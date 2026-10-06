"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/Icon";
import CourseModal from "@/components/CourseModal";
import { heroSlides, site } from "@/lib/data";

export default function DucatHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = heroSlides.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const slide = heroSlides[currentSlide] || heroSlides[0];

  return (
    <>
      <section
        className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#071325] text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Carousel Arrow Navigation: Left */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-800 border border-slate-700/80 text-white items-center justify-center transition-all backdrop-blur-md shadow-lg hover:scale-105"
        >
          <svg className="w-5 h-5 -rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Carousel Arrow Navigation: Right */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-800 border border-slate-700/80 text-white items-center justify-center transition-all backdrop-blur-md shadow-lg hover:scale-105"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Slide Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag Capsule */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                <Icon name="laptop" className="w-4 h-4 text-blue-400" />
                <span>{slide.tag}</span>
              </div>

              {/* Main Headline with Orange Highlight */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
                <span className="text-white block font-bold">
                  {slide.titlePrefix || "Master In"}
                </span>
                <span className="text-[#FF6B00] font-black tracking-tight uppercase block mt-1">
                  {slide.highlightTitle}
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 sm:px-7 py-3.5 rounded-xl bg-[#1d63ed] hover:bg-[#1554cf] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center gap-2"
                >
                  <span>Enroll Now</span>
                  <span className="text-lg">→</span>
                </button>

                <a
                  href="#courses"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <span className="text-blue-400 text-xs">▶</span>
                  <span>Explore Course</span>
                </a>

                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hello Sachin Kushwaha Sir! I want to enroll in the ${slide.highlightTitle} program at sachin.Net.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Ratings and Stats Row */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white">{slide.rating}</span>
                <span className="text-slate-500">•</span>
                <span>{slide.reviewsCount}</span>
                <span className="text-slate-500">•</span>
                <span>{slide.alumniCount}</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-medium">{slide.partnersCount}</span>
              </div>
            </div>

            {/* Right Card / Visual Diagram matching Ducat reference */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* White Rounded Container matching reference image */}
                <div className="rounded-3xl bg-white text-slate-800 p-6 sm:p-7 shadow-2xl relative border border-slate-100 overflow-hidden">
                  {/* Decorative illustrated cloud/network diagram */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-orange-50 border border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                    {/* Background Cloud illustration */}
                    <div className="absolute top-2 right-4 w-32 h-20 bg-orange-400/20 rounded-full blur-xl pointer-events-none" />
                    <div className="absolute top-6 left-6 w-28 h-20 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

                    {/* SVG Cloud & Infrastructure Architecture */}
                    <svg className="w-full h-full max-h-56" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Cloud shape */}
                      <path
                        d="M260 110C260 85 240 65 215 65C195 65 178 78 172 96C166 92 159 90 151 90C132 90 117 105 117 124C104 126 94 137 94 150C94 165 106 177 121 177H255C270 177 282 165 282 150C282 136 272 125 260 110Z"
                        fill="#FF8A00"
                        fillOpacity="0.85"
                      />
                      {/* Grid connections */}
                      <path d="M200 130 V185 M160 160 H240 M160 160 V185 M240 160 V185" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" />
                      {/* Server Node 1 */}
                      <rect x="145" y="185" width="30" height="20" rx="4" fill="#1d63ed" />
                      <circle cx="152" cy="195" r="2" fill="#FFFFFF" />
                      <rect x="157" y="193" width="12" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
                      {/* Server Node 2 */}
                      <rect x="185" y="185" width="30" height="20" rx="4" fill="#1d63ed" />
                      <circle cx="192" cy="195" r="2" fill="#FFFFFF" />
                      <rect x="197" y="193" width="12" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
                      {/* Server Node 3 */}
                      <rect x="225" y="185" width="30" height="20" rx="4" fill="#1d63ed" />
                      <circle cx="232" cy="195" r="2" fill="#FFFFFF" />
                      <rect x="237" y="193" width="12" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />

                      {/* Database Cylinder Left */}
                      <g transform="translate(100, 195)">
                        <ellipse cx="16" cy="6" rx="16" ry="6" fill="#3B82F6" />
                        <path d="M0 6 V22 C0 25.3 7.2 28 16 28 C24.8 28 32 25.3 32 22 V6 Z" fill="#2563EB" />
                        <ellipse cx="16" cy="14" rx="16" ry="5" fill="#60A5FA" opacity="0.5" />
                        <ellipse cx="16" cy="22" rx="16" ry="5" fill="#60A5FA" opacity="0.5" />
                      </g>

                      {/* Security Shield Right */}
                      <g transform="translate(265, 185)">
                        <path d="M18 4 L32 10 V20 C32 28 26 34 18 38 C10 34 4 28 4 20 V10 Z" fill="#0284C7" />
                        <path d="M18 8 L28 13 V20 C28 25 24 30 18 33 C12 30 8 25 8 20 V13 Z" fill="#38BDF8" />
                        {/* Lock */}
                        <rect x="14" y="20" width="8" height="7" rx="1.5" fill="#FFFFFF" />
                        <path d="M16 20 V17 C16 15.9 16.9 15 18 15 C19.1 15 20 15.9 20 17 V20" stroke="#FFFFFF" strokeWidth="1.5" />
                      </g>

                      {/* Analytics Bar Chart Bottom Right */}
                      <g transform="translate(305, 205)">
                        <rect x="0" y="20" width="6" height="15" rx="1.5" fill="#60A5FA" />
                        <rect x="8" y="12" width="6" height="23" rx="1.5" fill="#3B82F6" />
                        <rect x="16" y="5" width="6" height="30" rx="1.5" fill="#1D4ED8" />
                        <rect x="24" y="0" width="6" height="35" rx="1.5" fill="#0284C7" />
                      </g>

                      {/* Male Developer Working on Laptop */}
                      <g transform="translate(145, 90)">
                        {/* Body / Blue Hoodie */}
                        <path d="M25 65 C15 65 5 75 0 95 H110 C105 75 95 65 85 65 L65 72 L45 72 Z" fill="#1E3A8A" />
                        {/* Head & Neck */}
                        <circle cx="55" cy="40" r="16" fill="#D97706" />
                        <path d="M42 35 C42 24 50 18 60 18 C70 18 73 25 73 35 Z" fill="#1F2937" />
                        {/* Laptop Base */}
                        <path d="M30 115 H80 L88 126 H22 Z" fill="#64748B" />
                        <path d="M32 92 H78 V115 H32 Z" fill="#0F172A" />
                        <rect x="36" y="96" width="38" height="15" rx="1" fill="#38BDF8" opacity="0.9" />
                      </g>
                    </svg>

                    {/* Floating Pill Badge: </> Live Mentoring | Expert-led sessions */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-mono text-xs font-bold flex items-center justify-center">
                        &lt;/&gt;
                      </div>
                      <div className="text-left leading-tight">
                        <div className="text-[11px] font-bold text-slate-800">Live Mentoring</div>
                        <div className="text-[9px] text-slate-500 font-medium">Expert-led sessions</div>
                      </div>
                    </div>
                  </div>

                  {/* Course Quick Highlights inside Card */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Track Lead Mentor</div>
                      <div className="text-sm font-bold text-slate-900">{site.founder}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-medium">Centers</div>
                      <div className="text-xs font-bold text-blue-600">Siwan &amp; Noida (NCR)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Carousel Pill Dots matching reference image */}
          <div className="flex items-center justify-center gap-2 pt-10 sm:pt-12">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-8 h-2 rounded-full bg-[#FF7A00]"
                    : "w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={{ title: slide.highlightTitle }}
      />
    </>
  );
}
