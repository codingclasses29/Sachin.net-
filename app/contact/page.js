import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
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
  { icon: "whatsapp", title: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}`, color: "#22c55e", note: "Fastest reply" },
  { icon: "phone", title: "Call Now", value: site.phone, href: `tel:${site.phoneRaw}`, color: "#3b82f6", note: "Mon–Sat, 9 AM – 9 PM" },
  { icon: "mail", title: "Email", value: site.email, href: `mailto:${site.email}`, color: "#f59e0b", note: "Reply within 24 hours" },
  { icon: "pin", title: "Location", value: site.address, href: "#map", color: "#ec4899", note: "Serving all India" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's Build Something"
        highlight="Great Together"
        desc="Free consultation, free quote — WhatsApp, call ya form, jo aasan lage."
      />

      <PageSection first>
        <div className="grid-cards-4">
          {contactCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card card-p block h-full text-center no-hover"
              >
                <span className="icon-box icon-box-lg mx-auto" style={{ background: `${c.color}18`, color: c.color }}>
                  <Icon name={c.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 heading-sm text-base">{c.title}</h3>
                <p className="mt-1 text-sm text-primary-light font-medium break-anywhere">{c.value}</p>
                <p className="mt-2 text-muted">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-body text-sm mb-3">Follow us on social media</p>
          <SocialLinks size="lg" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={100}>
            <div className="card card-static overflow-hidden" id="map">
              <iframe
                title="Sachin.net Location"
                src="https://www.google.com/maps?q=Bihar,+India&output=embed"
                className="w-full h-72 lg:h-[520px] grayscale-[35%] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </PageSection>

      <FaqSection />
    </>
  );
}
