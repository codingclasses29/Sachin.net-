import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import FaqSection from "@/components/home/FaqSection";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact — Sachin.net | Get Free Quote",
  description:
    "Contact Sachin.net for website, software and app development. WhatsApp, call, email or fill the contact form for a free quote.",
};

const contactCards = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}`,
    color: "#22c55e",
    note: "Fastest reply — usually within minutes",
  },
  {
    icon: "phone",
    title: "Call Now",
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
    color: "#3b82f6",
    note: "Mon–Sat, 9 AM – 9 PM",
  },
  {
    icon: "mail",
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    color: "#f59e0b",
    note: "Reply within 24 hours",
  },
  {
    icon: "pin",
    title: "Location",
    value: site.address,
    href: "#map",
    color: "#ec4899",
    note: "Serving clients all over India",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's Build Something"
        highlight="Great Together"
        desc="Free consultation, free quote — बस एक message दूर। WhatsApp, call या form, जो आसान लगे।"
      />

      <section className="py-10 sm:py-12 md:py-14">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass-card p-5 sm:p-6 block h-full text-center"
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ background: `${c.color}1f`, color: c.color }}
                  >
                    <Icon name={c.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-primary-light font-medium break-anywhere">{c.value}</p>
                  <p className="mt-2 text-xs text-slate-500">{c.note}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col items-center text-center">
            <p className="text-sm text-slate-400 mb-3">Follow us on social media</p>
            <SocialLinks size="lg" />
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={120}>
              <div className="glass-card !transform-none overflow-hidden" id="map">
                <iframe
                  title="Sachin.net Location"
                  src="https://www.google.com/maps?q=Bihar,+India&output=embed"
                  className="w-full h-56 sm:h-72 md:h-96 lg:h-[480px] grayscale-[40%] contrast-[1.05] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
