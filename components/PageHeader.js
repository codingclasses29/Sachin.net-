import Reveal from "./Reveal";

export default function PageHeader({ badge, title, highlight, desc }) {
  return (
    <section className="relative overflow-hidden bg-grid pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-64 sm:w-[34rem] h-48 sm:h-[24rem] rounded-full bg-primary/15 blur-[80px] sm:blur-[120px]" />
      <div className="container-x relative text-center">
        <Reveal>
          {badge && <span className="section-badge">{badge}</span>}
          <h1 className="mt-4 sm:mt-5 heading-lg font-extrabold text-white">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
          {desc && (
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed px-1">
              {desc}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
