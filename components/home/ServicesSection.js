import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services } from "@/lib/data";

export default function ServicesSection({ limit }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="section-y" id="services">
      <div className="container-x">
        <SectionHeading
          badge="Our Services"
          title="Complete"
          highlight="Digital Solutions"
          desc="We provide end-to-end digital solutions to help your business grow and succeed online."
        />

        <div className="mt-10 sm:mt-14 grid-cards-3">
          {list.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="glass-card p-5 sm:p-7 h-full group">
                <span
                  className="inline-flex items-center justify-center w-13 h-13 p-3 rounded-xl"
                  style={{ background: `${s.color}1f`, color: s.color }}
                >
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[13px] text-slate-400">
                      <span className="text-accent"><Icon name="check" className="w-3.5 h-3.5" /></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light group-hover:gap-3 transition-all"
                >
                  Learn More <Icon name="arrow" className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {limit && (
          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn-outline">
              View All Services <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
