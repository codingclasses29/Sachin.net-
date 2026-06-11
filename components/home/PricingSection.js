import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { pricing } from "@/lib/data";

export default function PricingSection() {
  return (
    <section className="section-y" id="pricing">
      <div className="container-x">
        <SectionHeading
          badge="Pricing Plans"
          title="Simple &"
          highlight="Transparent Pricing"
          desc="No hidden costs. Choose the plan that fits your business — or contact us for a custom quote."
        />

        <div className="mt-10 sm:mt-14 grid-cards-4 items-stretch">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={`glass-card p-5 sm:p-7 h-full flex flex-col relative ${
                  plan.highlighted
                    ? "!border-primary/70 !bg-primary/[0.07] shadow-xl shadow-primary/20"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-semibold text-white">{plan.name}</h3>
                <p className="mt-3">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== "Contact" && (
                    <span className="text-sm text-slate-500"> / project</span>
                  )}
                </p>
                <p className="mt-2.5 text-sm text-slate-400">{plan.desc}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-accent mt-0.5"><Icon name="check" className="w-4 h-4" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 w-full ${plan.highlighted ? "btn-primary" : "btn-outline"} !px-4 text-sm`}
                >
                  {plan.price === "Contact" ? "Contact Us" : "Get Started"}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
