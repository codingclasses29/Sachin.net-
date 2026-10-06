"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import CourseModal from "@/components/CourseModal";
import { itCourses, itCourseCategories, site } from "@/lib/data";

// Custom SVG graphic banners matching the reference image cards
function CourseBanner({ courseId, title, subtitle }) {
  switch (courseId) {
    case "autocad":
      return (
        <div className="relative w-full h-44 bg-[#0a1424] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase bg-red-950/40 px-2 py-0.5 rounded border border-red-800/40">
              AUTODESK AUTOCAD
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          {/* Blueprint 3D wireframe house vector */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <svg className="w-56 h-36 text-cyan-500/70" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1">
              {/* Ground & grid */}
              <line x1="10" y1="95" x2="190" y2="95" strokeDasharray="3 3" />
              {/* House walls */}
              <polygon points="40,95 40,55 90,30 140,55 140,95" strokeWidth="1.5" />
              {/* Roof slope */}
              <polygon points="90,30 155,45 140,55" />
              <polygon points="140,55 155,45 155,85 140,95" />
              {/* Windows & Doors */}
              <rect x="55" y="65" width="22" height="20" strokeDasharray="2 2" />
              <line x1="66" y1="65" x2="66" y2="85" />
              <rect x="100" y="60" width="24" height="35" />
              {/* Dimension lines */}
              <line x1="30" y1="95" x2="30" y2="55" stroke="#38bdf8" />
              <line x1="26" y1="55" x2="34" y2="55" stroke="#38bdf8" />
              <line x1="26" y1="95" x2="34" y2="95" stroke="#38bdf8" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-mono text-cyan-300 tracking-wider">DESIGN. DRAFT. BUILD.</div>
            <div className="text-[9px] text-slate-400">Architectural &amp; Mechanical CAD</div>
          </div>
        </div>
      );

    case "cyber-security-genai":
      return (
        <div className="relative w-full h-44 bg-[#050f1e] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
              CYBER DEFENSE + AI
            </span>
            <span className="text-[9px] font-mono text-emerald-400">SOC LIVE</span>
          </div>
          {/* Glowing Shield & AI Brain */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-cyan-500/15 blur-xl" />
            <svg className="w-44 h-32 text-cyan-400" viewBox="0 0 160 120" fill="none">
              {/* Circuit lines */}
              <path d="M20 60 H50 L65 40 H95 L110 60 H140" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              {/* Shield */}
              <path d="M80 20 L115 35 V70 C115 90 98 102 80 108 C62 102 45 90 45 70 V35 Z" stroke="#38bdf8" strokeWidth="2" fill="#0369a1" fillOpacity="0.2" />
              {/* Lock */}
              <rect x="71" y="60" width="18" height="15" rx="2" fill="#38bdf8" />
              <path d="M75 60 V53 C75 50.2 77.2 48 80 48 C82.8 48 85 50.2 85 53 V60" stroke="#38bdf8" strokeWidth="2.5" />
              {/* AI Network Nodes */}
              <circle cx="50" cy="40" r="3" fill="#38bdf8" />
              <circle cx="110" cy="40" r="3" fill="#38bdf8" />
              <circle cx="80" cy="30" r="2.5" fill="#38bdf8" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-cyan-300">ETHICAL HACKING &amp; CEH</div>
            <div className="text-[9px] text-slate-400">Threat Defense &amp; Cloud Security</div>
          </div>
        </div>
      );

    case "java-full-stack":
      return (
        <div className="relative w-full h-44 bg-[#081224] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              JAVA + REACT + GEN AI
            </span>
            <span className="text-[9px] font-mono text-blue-400">SPRING BOOT</span>
          </div>
          {/* Workstation Monitors & AI Code */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-blue-500/15 rounded-full blur-xl" />
            <svg className="w-48 h-32 text-blue-400" viewBox="0 0 180 120" fill="none">
              {/* Main Monitor */}
              <rect x="45" y="25" width="90" height="58" rx="4" stroke="#60a5fa" strokeWidth="1.5" fill="#0f172a" />
              <line x1="90" y1="83" x2="90" y2="95" stroke="#60a5fa" strokeWidth="2" />
              <line x1="75" y1="95" x2="105" y2="95" stroke="#60a5fa" strokeWidth="2" />
              {/* Code lines inside monitor */}
              <line x1="55" y1="37" x2="95" y2="37" stroke="#38bdf8" strokeWidth="2" />
              <line x1="55" y1="45" x2="115" y2="45" stroke="#f59e0b" strokeWidth="2" />
              <line x1="55" y1="53" x2="85" y2="53" stroke="#10b981" strokeWidth="2" />
              <line x1="55" y1="61" x2="105" y2="61" stroke="#cbd5e1" strokeWidth="2" />
              {/* Floating AI badge */}
              <circle cx="140" cy="35" r="14" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="1.5" />
              <text x="133" y="39" fill="#ffffff" fontSize="9" fontWeight="bold">AI</text>
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-blue-300">ENTERPRISE FULL STACK</div>
            <div className="text-[9px] text-slate-400">Microservices, Cloud &amp; Next.js</div>
          </div>
        </div>
      );

    case "digital-marketing":
      return (
        <div className="relative w-full h-44 bg-[#100826] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">
              GROWTH &amp; PERFORMANCE
            </span>
            <span className="text-[9px] font-mono text-pink-400">SEO &amp; ADS</span>
          </div>
          {/* Laptop with Growth Charts & Rocket */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-purple-500/15 rounded-full blur-xl" />
            <svg className="w-48 h-32 text-purple-400" viewBox="0 0 180 120" fill="none">
              {/* Laptop Screen */}
              <rect x="50" y="30" width="80" height="50" rx="3" stroke="#a855f7" strokeWidth="1.5" fill="#1e1035" />
              <line x1="40" y1="80" x2="140" y2="80" stroke="#a855f7" strokeWidth="2" />
              {/* Bar graph on screen */}
              <rect x="62" y="60" width="7" height="15" fill="#c084fc" />
              <rect x="74" y="52" width="7" height="23" fill="#ec4899" />
              <rect x="86" y="44" width="7" height="31" fill="#f43f5e" />
              <rect x="98" y="38" width="7" height="37" fill="#fbbf24" />
              <path d="M60 62 L77 53 L89 45 L102 39" stroke="#38bdf8" strokeWidth="2" />
              {/* Rocket icon right */}
              <g transform="translate(130, 20)">
                <path d="M0 25 C0 10 15 0 20 0 C20 5 10 20 25 20 C20 25 15 25 0 25 Z" fill="#f43f5e" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
              </g>
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-purple-300">DIGITAL MARKETING PRO</div>
            <div className="text-[9px] text-slate-400">Google Ads, Meta &amp; AI Funnels</div>
          </div>
        </div>
      );

    case "power-bi":
      return (
        <div className="relative w-full h-44 bg-[#141005] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              MICROSOFT POWER BI
            </span>
            <span className="text-[9px] font-mono text-yellow-400">DAX &amp; ETL</span>
          </div>
          {/* Golden Dashboard Charts */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-amber-500/15 rounded-full blur-xl" />
            <svg className="w-48 h-32 text-amber-400" viewBox="0 0 180 120" fill="none">
              <rect x="40" y="25" width="100" height="62" rx="4" stroke="#f59e0b" strokeWidth="1.5" fill="#1c1305" />
              {/* Chart columns inside */}
              <rect x="52" y="60" width="10" height="20" fill="#d97706" />
              <rect x="68" y="48" width="10" height="32" fill="#f59e0b" />
              <rect x="84" y="38" width="10" height="42" fill="#fbbf24" />
              <rect x="100" y="52" width="10" height="28" fill="#fcd34d" />
              <rect x="116" y="34" width="10" height="46" fill="#fef08a" />
              {/* Trendline */}
              <path d="M57 58 L73 46 L89 36 L105 50 L121 32" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-amber-300">BUSINESS INTELLIGENCE</div>
            <div className="text-[9px] text-slate-400">Executive Dashboards &amp; SQL</div>
          </div>
        </div>
      );

    case "data-analytics-pro":
      return (
        <div className="relative w-full h-44 bg-[#041624] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
              DATA ANALYTICS PRO
            </span>
            <span className="text-[9px] font-mono text-emerald-400">PYTHON + SQL</span>
          </div>
          {/* Data Science Dashboard */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-cyan-500/15 rounded-full blur-xl" />
            <svg className="w-48 h-32 text-cyan-400" viewBox="0 0 180 120" fill="none">
              <rect x="35" y="25" width="110" height="65" rx="4" stroke="#06b6d4" strokeWidth="1.5" fill="#082f49" />
              {/* Scatter plots & pie */}
              <circle cx="65" cy="55" r="15" stroke="#38bdf8" strokeWidth="2" strokeDasharray="60 30" />
              <circle cx="100" cy="45" r="3" fill="#38bdf8" />
              <circle cx="110" cy="58" r="4" fill="#06b6d4" />
              <circle cx="125" cy="40" r="3.5" fill="#22d3ee" />
              <circle cx="130" cy="65" r="4" fill="#38bdf8" />
              {/* Trend */}
              <path d="M95 72 L110 55 L125 45 L138 35" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-cyan-300">FLAGSHIP CAREER TRACK</div>
            <div className="text-[9px] text-slate-400">Pandas, NumPy, Tableau &amp; GenAI</div>
          </div>
        </div>
      );

    case "python-full-stack":
      return (
        <div className="relative w-full h-44 bg-[#0a1228] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">
              PYTHON FULL STACK + AI
            </span>
            <span className="text-[9px] font-mono text-amber-400">DJANGO / FASTAPI</span>
          </div>
          {/* Python Snake Graphic */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-blue-500/15 rounded-full blur-xl" />
            <svg className="w-36 h-28" viewBox="0 0 120 120" fill="none">
              {/* Python Blue Top */}
              <path d="M58 20 C40 20 40 28 40 28 L40 38 H60 V42 H30 C20 42 15 50 15 62 C15 74 25 74 25 74 H32 V66 C32 58 40 58 40 58 H60 C70 58 75 52 75 42 C75 30 70 20 58 20 Z" fill="#3B82F6" />
              <circle cx="48" cy="27" r="2.5" fill="#FFFFFF" />
              {/* Python Yellow Bottom */}
              <path d="M62 100 C80 100 80 92 80 92 L80 82 H60 V78 H90 C100 78 105 70 105 58 C105 46 95 46 95 46 H88 V54 C88 62 80 62 80 62 H60 C50 62 45 68 45 78 C45 90 50 100 62 100 Z" fill="#F59E0B" />
              <circle cx="72" cy="93" r="2.5" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-amber-300">PYTHON &amp; AI BACKEND</div>
            <div className="text-[9px] text-slate-400">APIs, Machine Learning &amp; React</div>
          </div>
        </div>
      );

    case "ui-ux-design":
      return (
        <div className="relative w-full h-44 bg-[#1e0a1c] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40">
              UI/UX DESIGNING
            </span>
            <span className="text-[9px] font-mono text-purple-400">FIGMA PRO</span>
          </div>
          {/* Mobile phone mockups & color swatches */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-20 bg-rose-500/15 rounded-full blur-xl" />
            <svg className="w-48 h-32 text-rose-400" viewBox="0 0 180 120" fill="none">
              {/* Mobile Phone Mockup */}
              <rect x="75" y="18" width="40" height="75" rx="6" stroke="#f43f5e" strokeWidth="2" fill="#2a1224" />
              <rect x="83" y="24" width="24" height="6" rx="2" fill="#f43f5e" opacity="0.6" />
              <rect x="80" y="36" width="30" height="20" rx="3" fill="#e11d48" opacity="0.4" />
              <circle cx="95" cy="72" r="5" fill="#f43f5e" />
              {/* Color Swatches */}
              <circle cx="45" cy="45" r="8" fill="#ec4899" />
              <circle cx="45" cy="65" r="8" fill="#8b5cf6" />
              <circle cx="140" cy="50" r="8" fill="#3b82f6" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-rose-300">USER EXPERIENCE &amp; FIGMA</div>
            <div className="text-[9px] text-slate-400">Wireframes, Design Systems &amp; UX Research</div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-44 bg-[#0a1628] overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">
              INDUSTRY TRACK
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <svg className="w-32 h-24 text-blue-500" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="15" y="15" width="70" height="50" rx="4" />
              <line x1="25" y1="30" x2="55" y2="30" />
              <line x1="25" y1="42" x2="75" y2="42" />
              <line x1="25" y1="54" x2="45" y2="54" />
            </svg>
          </div>
          <div className="z-10">
            <div className="text-[11px] font-bold text-blue-300">{title}</div>
            <div className="text-[9px] text-slate-400">{subtitle || "Practical IT Program"}</div>
          </div>
        </div>
      );
  }
}

export default function CoursesCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredCourses =
    activeCategory === "All Courses"
      ? itCourses
      : itCourses.filter((course) => course.category === activeCategory);

  const handleApply = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] text-slate-800 border-b border-slate-200">
        <div className="container-x">
          {/* Section Header matching Ducat screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Industry-ready <span className="text-[#2563eb]">IT courses</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Master in-demand tech skills with real-world projects and land your dream job
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
            {itCourseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/30"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4-Column Responsive Grid matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Tech Graphic Banner */}
                <CourseBanner
                  courseId={course.id}
                  title={course.title}
                  subtitle={course.subtitle}
                />

                {/* Course Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Course Title in bold uppercase */}
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug tracking-tight">
                      {course.title}
                    </h3>

                    {/* Duration */}
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      Duration : {course.duration}
                    </p>
                  </div>

                  {/* Dual Action Buttons matching reference screenshot */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleApply(course)}
                      className="flex-1 py-2 px-3 rounded-lg border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 text-xs font-bold text-center transition-colors"
                    >
                      Learn More
                    </button>

                    <button
                      type="button"
                      onClick={() => handleApply(course)}
                      className="flex-1 py-2 px-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold text-center shadow-xs transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={selectedCourse}
      />
    </>
  );
}
