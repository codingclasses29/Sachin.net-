import Icon from "./Icon";

export default function ExperienceCard({ icon = "rocket", title, desc, className = "", compact = false }) {
  if (compact) {
    return (
      <div className={`flex items-start gap-2.5 card card-static card-p !py-3 h-full ${className}`}>
        <span className="icon-box !w-9 !h-9 bg-primary/12 text-primary-light">
          <Icon name={icon} className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-xs leading-snug">{title}</p>
          <p className="text-muted text-[11px] mt-0.5">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 card card-static card-p h-full ${className}`}>
      <span className="icon-box bg-primary/12 text-primary-light">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-muted text-xs mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
