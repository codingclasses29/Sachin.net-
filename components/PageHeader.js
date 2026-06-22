import Reveal from "./Reveal";

export default function PageHeader({ badge, title, highlight, desc }) {
  return (
    <section className="page-header relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[min(100%,34rem)] h-56 rounded-full bg-primary/12 blur-[100px]" />
      <div className="container-x relative text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16">
        <Reveal>
          {badge && <span className="section-badge">{badge}</span>}
          <h1 className="mt-4 heading-lg font-extrabold">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
          {desc && <p className="mt-4 text-body max-w-2xl mx-auto px-1">{desc}</p>}
        </Reveal>
      </div>
    </section>
  );
}
