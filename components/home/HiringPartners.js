import { hiringPartners } from "@/lib/data";

const featuredPartners = [
  {
    name: "BAJAJ",
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8 text-[#0055A5]" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 4L34 20L20 36L6 20L20 4Z" fillOpacity="0.15" />
          <path d="M12 20L20 12L28 20L20 28L12 20Z" />
        </svg>
        <span className="font-black text-xl tracking-wider text-[#0055A5]">BAJAJ</span>
      </div>
    ),
  },
  {
    name: "Birlasoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#A32020] flex items-center justify-center text-white text-xs font-bold">
          ❖
        </div>
        <span className="font-bold text-lg text-slate-800 tracking-tight">birlasoft</span>
      </div>
    ),
  },
  {
    name: "CSC",
    logo: (
      <div className="text-center leading-none">
        <span className="font-black text-2xl tracking-widest text-[#006699]">CSC</span>
        <div className="text-[7px] text-slate-500 uppercase tracking-widest mt-0.5">Computer Sciences</div>
      </div>
    ),
  },
  {
    name: "cognizant",
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-[#1F70B8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1F70B8" strokeWidth="2" fill="none" />
        </svg>
        <span className="font-bold text-lg text-[#1F70B8] lowercase">cognizant</span>
      </div>
    ),
  },
  {
    name: "Hewitt",
    logo: (
      <span className="font-serif font-bold text-2xl text-[#00205B] tracking-wide">
        Hewitt
      </span>
    ),
  },
  {
    name: "IBM",
    logo: (
      <div className="flex items-center gap-1 font-black text-2xl text-[#054ADA] tracking-widest">
        <span>IBM</span>
      </div>
    ),
  },
];

export default function HiringPartners() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
      <div className="container-x">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Companies <span className="text-[#2563eb]">Hiring</span> Our Students
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
            Trusted by India&apos;s leading organizations
          </p>
        </div>

        {/* 6 White Bordered Enterprise Company Cards matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {featuredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="h-20 sm:h-22 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-200 flex items-center justify-center p-3 text-center"
            >
              {partner.logo}
            </div>
          ))}
        </div>

        {/* Carousel Navigation Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
        </div>

        {/* Additional Infinite Marquee for All 500+ Hiring Partners */}
        <div className="mt-10 pt-8 border-t border-slate-100 relative overflow-hidden">
          <div className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            And 500+ More Global Tech Recruiters
          </div>
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...hiringPartners, ...hiringPartners].map((partner, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-700 text-xs font-semibold shrink-0"
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: partner.color || "#2563eb" }}
                >
                  {partner.initials}
                </span>
                <span>{partner.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({partner.domain})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
