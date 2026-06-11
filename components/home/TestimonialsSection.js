import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { testimonials } from "@/lib/data";

const avatarColors = ["#3b82f6", "#ec4899", "#10b981", "#f59e0b"];

export default function TestimonialsSection() {
  return (
    <section className="section-y bg-dark-2/60">
      <div className="container-x">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our"
          highlight="Clients Say"
          desc="Trusted by 100+ businesses, schools and startups across India."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 100}>
              <figure className="glass-card p-5 sm:p-6 h-full flex flex-col">
                <div className="flex text-amber-400 gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Icon key={s} name="star" className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-slate-300 leading-relaxed flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
