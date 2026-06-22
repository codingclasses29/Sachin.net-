import PageSection from "@/components/PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { testimonials } from "@/lib/data";

const avatarColors = ["#3b82f6", "#ec4899", "#10b981", "#f59e0b"];

export default function TestimonialsSection() {
  return (
    <PageSection alt>
      <SectionHeading badge="Client Testimonials" title="What Our" highlight="Clients Say" desc="Trusted by 100+ businesses, schools and startups across India." />
      <div className="mt-10 grid-cards-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 4) * 80}>
            <figure className="card card-p h-full flex flex-col no-hover">
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Icon key={s} name="star" className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-body text-sm flex-1">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="icon-box icon-box-lg text-sm font-bold text-white" style={{ background: avatarColors[i % avatarColors.length] }}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
