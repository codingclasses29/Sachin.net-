import Reveal from "./Reveal";

export default function SectionHeading({ badge, title, highlight, desc, center = true }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="mt-3 sm:mt-4 heading-md font-bold text-white">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {desc && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}
