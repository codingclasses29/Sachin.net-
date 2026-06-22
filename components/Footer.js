import Link from "next/link";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import { site, services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "AI & ML", href: "/ai-services" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="page-section-alt border-t-0">
      <div className="container-x py-10 sm:py-12 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 heading-sm">
            <Icon name="code" className="w-6 h-6 text-primary-light" />
            Sachin<span className="text-primary-light">.net</span>
          </Link>
          <p className="mt-3 text-body text-sm max-w-sm">
            Premium software development company — websites, ERP, AI &amp; ML solutions.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !py-2 !px-4 text-sm mt-4 w-full sm:w-auto"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp Now
          </a>
        </div>

        <div>
          <h3 className="heading-sm text-sm mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-body hover:text-primary-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-sm text-sm mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link href="/services" className="text-body hover:text-primary-light transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-sm text-sm mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-body">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors break-anywhere">
                <Icon name="phone" className="w-4 h-4 text-primary-light shrink-0" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-white transition-colors break-anywhere">
                <Icon name="mail" className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="w-4 h-4 text-primary-light shrink-0" />
              {site.address}
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-muted mb-2">Follow Us</p>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-x py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-primary-light transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <p>Made with <span className="text-red-500">♥</span> by {site.founder}</p>
        </div>
      </div>
    </footer>
  );
}
