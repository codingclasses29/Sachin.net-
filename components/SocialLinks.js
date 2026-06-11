import Icon from "./Icon";
import { socialLinks } from "@/lib/data";

const brandHover = {
  whatsapp: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
  github: "hover:bg-slate-600 hover:text-white hover:border-slate-500",
  facebook: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  instagram: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
  x: "hover:bg-black hover:text-white hover:border-slate-600",
};

function hasLink(href) {
  return Boolean(href?.trim());
}

export default function SocialLinks({ className = "", size = "md" }) {
  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  const btnSize = size === "lg" ? "w-11 h-11" : "w-9 h-9";

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socialLinks.map((item) => {
        const linked = hasLink(item.href);
        const baseClass = `inline-flex items-center justify-center ${btnSize} rounded-full border border-slate-700/70 bg-white/[0.04] text-slate-400 transition-all duration-200 ${brandHover[item.icon] || "hover:text-white"}`;

        if (linked) {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className={baseClass}
            >
              <Icon name={item.icon} className={iconSize} />
            </a>
          );
        }

        return (
          <span
            key={item.name}
            aria-label={`${item.name} — link add karein data.js me`}
            title={`${item.name} — link add karein lib/data.js me`}
            className={`${baseClass} opacity-50 cursor-default`}
          >
            <Icon name={item.icon} className={iconSize} />
          </span>
        );
      })}
    </div>
  );
}
