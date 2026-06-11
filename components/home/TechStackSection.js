import SectionHeading from "../SectionHeading";
import { techStack } from "@/lib/data";

const techColors = {
  HTML: "#e34f26",
  CSS: "#1572b6",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  "Next.js": "#ffffff",
  "Node.js": "#3c873a",
  "Express.js": "#9ca3af",
  MongoDB: "#47a248",
  MySQL: "#00758f",
  Firebase: "#ffca28",
  AWS: "#ff9900",
  Docker: "#2496ed",
};

function TechBadge({ name }) {
  return (
    <span className="glass-card !rounded-full inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-3 mx-2 sm:mx-3 shrink-0">
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{ background: techColors[name] || "#3b82f6", boxShadow: `0 0 12px ${techColors[name] || "#3b82f6"}` }}
      />
      <span className="font-semibold text-slate-200 whitespace-nowrap">{name}</span>
    </span>
  );
}

export default function TechStackSection() {
  return (
    <section className="section-y bg-dark-2/60 overflow-hidden">
      <div className="container-x">
        <SectionHeading
          badge="Technology Stack"
          title="Technologies"
          highlight="We Master"
          desc="We use the latest and most reliable technologies to build fast, secure and scalable solutions."
        />
      </div>

      <div className="mt-10 sm:mt-14 space-y-4 sm:space-y-6">
        <div className="flex w-max animate-marquee">
          {[...techStack, ...techStack].map((t, i) => (
            <TechBadge key={`a-${t}-${i}`} name={t} />
          ))}
        </div>
        <div className="flex w-max animate-marquee" style={{ animationDirection: "reverse" }}>
          {[...techStack, ...techStack].reverse().map((t, i) => (
            <TechBadge key={`b-${t}-${i}`} name={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
