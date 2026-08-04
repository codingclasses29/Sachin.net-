import Icon from "../Icon";
import { featuresStrip } from "@/lib/data";

export default function FeaturesStrip() {
  return (
    <section className="features-strip page-section !py-6 sm:!py-8">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {featuresStrip.map((item) => (
            <div key={item.title} className="feature-pill">
              <span
                className="icon-box !w-9 !h-9 shrink-0"
                style={{ background: `${item.color}22`, color: item.color }}
              >
                <Icon name={item.icon} className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-white truncate">{item.title}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
