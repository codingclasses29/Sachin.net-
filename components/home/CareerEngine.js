import Icon from "@/components/Icon";
import { careerEngineFeatures } from "@/lib/data";

export default function CareerEngine() {
  return (
    <section className="py-16 sm:py-20 bg-[#071120] text-white border-y border-slate-800">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Why Choose sachin.Net
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            More than a course,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              A career engine.
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            We don&apos;t just teach code — we architect your entire journey from learning to landing high-paying job offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {careerEngineFeatures.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0f1f38] to-[#0a1527] border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                <Icon name={item.icon} className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
