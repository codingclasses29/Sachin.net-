import Icon from "@/components/Icon";
import { howItWorksSteps } from "@/lib/data";

export default function CareerRoadmap() {
  return (
    <section className="py-16 sm:py-20 bg-[#071120] text-white border-y border-slate-800">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Step-by-Step Pathway
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Works</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            A structured, outcome-driven roadmap designed to turn ambitious learners into top software engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#0f1f38] to-[#0a1527] border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              {/* Step Number Badge */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white font-extrabold text-lg flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform`}
              >
                {step.step}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Progress arrow indicator on desktop */}
              {idx < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-blue-400/40">
                  <Icon name="arrow" className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
