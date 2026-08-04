import PageSection from "@/components/PageSection";
import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { services } from "@/lib/data";

const featured = services.slice(0, 4);

export default function EmpowerSection() {
  return (
    <PageSection className="section-india-white">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <Reveal>
          <h2 className="heading-pravisht">
            Empowering Your Business for <span className="text-india-saffron">Growth</span>
          </h2>
          <p className="mt-5 text-body-light max-w-lg leading-relaxed">
            We combine strategy, design and engineering to deliver software that scales.
            From school ERP to AI chatbots — every solution is built for real business impact.
          </p>
          <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
            Explore All Services
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {featured.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card-light h-full">
                <span
                  className="icon-box !w-11 !h-11 !rounded-lg"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  <Icon name={s.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
