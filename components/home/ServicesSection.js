import PageSection from "@/components/PageSection";
import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services } from "@/lib/data";

export default function ServicesSection({ limit, first = false }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <PageSection id="services" first={first}>
      <SectionHeading
        badge="Our Services"
        title="Complete"
        highlight="Digital Solutions"
        desc="We provide end-to-end digital solutions to help your business grow and succeed online."
      />

      <div className="mt-10 sm:mt-12 grid-cards-3">
        {list.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80}>
            <div className="card card-p h-full group">
              <span className="icon-box" style={{ background: `${s.color}18`, color: s.color }}>
                <Icon name={s.icon} className="w-7 h-7" />
              </span>
              <h3 className="mt-5 heading-sm">{s.title}</h3>
              <p className="mt-2 text-body text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-body">
                    <Icon name="check" className="w-3.5 h-3.5 text-accent-green shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light group-hover:gap-2.5 transition-all"
              >
                Learn More <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {limit && (
        <Reveal className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View All Services <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </Reveal>
      )}
    </PageSection>
  );
}
