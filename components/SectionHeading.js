import Reveal from "./Reveal";

export default function SectionHeading({ badge, title, highlight, desc, center = true }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="mt-3 sm:mt-4 heading-md">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {desc && (
        <p className={`mt-3 sm:mt-4 text-body max-w-2xl ${center ? "mx-auto" : ""}`}>
          {desc}
        </p>
      )}
    </Reveal>
  );
}
