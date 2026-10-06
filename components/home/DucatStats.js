import Icon from "@/components/Icon";
import { ducatStats } from "@/lib/data";

export default function DucatStats() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#f8fafc]">
      <div className="container-x">
        {/* Deep Royal Blue Container Box matching Ducat screenshot */}
        <div className="rounded-3xl bg-gradient-to-b from-[#133777] via-[#10306a] to-[#0c2452] p-8 sm:p-12 lg:p-14 shadow-2xl text-center relative overflow-hidden">
          {/* Subtle ambient lighting inside */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Centered Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md mb-4 shadow-sm">
            <span>🚀</span>
            <span>Trusted by 4 Lakh+ Learners</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Numbers that speak for themselves.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            India&apos;s leading AI, Data Science &amp; Software Training Institute with thousands of successful placements.
          </p>

          {/* 4 White Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 relative z-10">
            {ducatStats.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white text-slate-800 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center"
              >
                {/* Circular Blue Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 mx-auto mb-3.5 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                  <Icon name={item.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Big Metric Number in Blue */}
                <div className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black text-[#2563eb] tracking-tight leading-none">
                  {item.value}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-700">
                  {item.label}
                </div>

                {/* Sub-label */}
                <p className="mt-0.5 text-xs text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
