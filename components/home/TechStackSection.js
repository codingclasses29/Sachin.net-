import PageSection from "@/components/PageSection";
import SectionHeading from "../SectionHeading";
import { techStack } from "@/lib/data";

const techColors = {
  HTML: "#e34f26", CSS: "#1572b6", JavaScript: "#f7df1e", React: "#61dafb",
  "Next.js": "#ffffff", "Node.js": "#3c873a", "Express.js": "#9ca3af",
  MongoDB: "#47a248", MySQL: "#00758f", Firebase: "#ffca28", AWS: "#ff9900", Docker: "#2496ed",
};

function TechBadge({ name }) {
  const color = techColors[name] || "#3b82f6";
  return (
    <span className="card card-static !rounded-full inline-flex items-center gap-2 px-5 py-2.5 mx-2 shrink-0">
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
      <span className="font-semibold text-sm whitespace-nowrap">{name}</span>
    </span>
  );
}

export default function TechStackSection() {
  return (
    <PageSection alt className="overflow-hidden">
      <SectionHeading
        badge="Technology Stack"
        title="Technologies"
        highlight="We Master"
        desc="Latest and most reliable technologies for fast, secure and scalable solutions."
      />
      <div className="mt-10 space-y-5">
        <div className="flex w-max animate-marquee">
          {[...techStack, ...techStack].map((t, i) => <TechBadge key={`a-${t}-${i}`} name={t} />)}
        </div>
        <div className="flex w-max animate-marquee" style={{ animationDirection: "reverse" }}>
          {[...techStack, ...techStack].reverse().map((t, i) => <TechBadge key={`b-${t}-${i}`} name={t} />)}
        </div>
      </div>
    </PageSection>
  );
}
