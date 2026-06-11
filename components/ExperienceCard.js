import Icon from "./Icon";

export default function ExperienceCard({
  icon = "rocket",
  title,
  desc,
  className = "",
  compact = false,
}) {
  if (compact) {
    return (
      <div
        className={`flex items-start gap-2.5 glass-card !transform-none !rounded-xl p-3 h-full ${className}`}
      >
        <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/15 text-primary-light flex items-center justify-center">
          <Icon name={icon} className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-white text-xs leading-snug">{title}</p>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3.5 glass-card !transform-none p-4 h-full ${className}`}>
      <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 text-primary-light flex items-center justify-center">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-white text-sm">{title}</p>
        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
