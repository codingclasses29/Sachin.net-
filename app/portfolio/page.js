import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { ProjectCard } from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { projects, liveDemos, site } from "@/lib/data";

export const metadata = {
  title: "Portfolio & Live Demos — Sachin.net | Verified Client Projects",
  description: "Live hospital ERP, NGO websites, school ERP, e-commerce stores & CRM systems delivered by Sachin.net.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Live Client Portfolio"
        title="Real Projects Delivered for"
        highlight="Bharat Businesses"
        desc="Hospital ERP, NGO portals, e-commerce stores & corporate websites. Click any project to experience the live working demo."
      />

      {/* Featured Live Deployed Sites Showcase */}
      <PageSection first className="!pb-6">
        <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% Live Verified Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Live Client Websites You Can Test Right Now
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                क्लाइंट्स के लिए लाइव वेबसाइट्स और ERP पोर्टल्स — सीधे क्लिक करें और खुद चलाकर देखें।
              </p>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Namaste Sachin Sir! Maine aapke live portfolio websites dekhe. Mujhe bhi ek custom website/ERP banwani hai."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-emerald-500/20 shrink-0"
            >
              <span>Get Similar Project on WhatsApp</span>
            </a>
          </div>

          {/* 4 Live Project Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {liveDemos.map((demo) => (
              <div
                key={demo.id}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 p-5 flex flex-col justify-between transition-all hover:scale-[1.02] group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-emerald-400/90">#{demo.type}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
                      Live
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {demo.desc}
                  </p>

                  <div className="mt-3 space-y-1">
                    {demo.features.map((feat, fi) => (
                      <div key={fi} className="text-[11px] text-slate-400 flex items-center gap-1.5 truncate">
                        <span className="text-emerald-400">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Open Live Website</span>
                    <span className="text-sm font-bold">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* All Projects Catalog */}
      <PageSection className="!pt-6">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">All Featured Projects &amp; Software</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Explore our complete portfolio across School ERP, Hospital, NGO, E-Commerce and Enterprise.
          </p>
        </div>
        <div className="grid-cards-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={(i % 3) * 80} />
          ))}
        </div>
      </PageSection>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
