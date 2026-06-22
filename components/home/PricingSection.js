import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PageSection from "@/components/PageSection";
import { pricing } from "@/lib/data";

export default function PricingSection({ first = false }) {
  return (
    <PageSection id="pricing" first={first}>
      <SectionHeading
        badge="Pricing Plans"
        title="Simple &"
        highlight="Transparent Pricing"
        desc="No hidden costs. Choose the plan that fits your business — or contact us for a custom quote."
      />

      <div className="mt-10 sm:mt-12 grid-cards-4 items-stretch">
        {pricing.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 80} className="h-full">
            <div className={`card card-p h-full flex flex-col relative ${plan.highlighted ? "pricing-popular" : ""}`}>
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider text-white bg-primary px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="heading-sm">{plan.name}</h3>
              <p className="mt-3">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                {plan.price !== "Contact" && <span className="text-muted"> / project</span>}
              </p>
              <p className="mt-2 text-body text-sm">{plan.desc}</p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                    <Icon name="check" className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-6 w-full ${plan.highlighted ? "btn-primary" : "btn-outline"} text-sm`}
              >
                {plan.price === "Contact" ? "Contact Us" : "Get Started"}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
