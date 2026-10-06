import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function DucatBottomCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#071120] text-white">
      <div className="container-x">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
              🚀 Fast-Track Your Dream Tech Career
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Start Your <br />
              <span className="text-amber-300">Career Transformation?</span>
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
              Join 4,50,000+ students who unlocked high-paying IT jobs with our practical courses, real-world capstone projects, and 100% placement support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="phone" className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-xs text-blue-200">Call Admissions</div>
                <div className="font-bold text-sm">{site.phone}</div>
              </a>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  "Hello Sachin Kushwaha Sir! I want to join IT training at sachin.Net."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="whatsapp" className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="text-xs text-blue-200">WhatsApp Chat</div>
                <div className="font-bold text-sm">+91 {site.whatsapp}</div>
              </a>

              <a
                href="https://www.youtube.com/@BR_Siwan29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="youtube" className="w-5 h-5 text-rose-300" />
                </div>
                <div className="text-xs text-blue-200">YouTube Channel</div>
                <div className="font-bold text-sm">@BR_Siwan29</div>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <a
                href="#roadmap"
                className="px-8 py-4 rounded-xl bg-white text-blue-900 font-extrabold text-sm sm:text-base hover:bg-blue-50 shadow-xl transition-all flex items-center gap-2"
              >
                <Icon name="rocket" className="w-4 h-4 text-blue-700" />
                Book Free Demo &amp; Counseling
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
