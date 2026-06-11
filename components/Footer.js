import Link from "next/link";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import { site, services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-slate-800">
      <div className="container-x py-10 sm:py-12 lg:py-14 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white">
            <span className="text-primary-light">
              <Icon name="code" className="w-6 h-6 sm:w-7 sm:h-7" />
            </span>
            Sachin<span className="text-primary-light">.net</span>
          </Link>
          <p className="mt-3 sm:mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
            We are a premium software development company helping businesses grow
            with modern websites, software and digital solutions.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !py-2 !px-4 text-sm mt-4 sm:mt-5 w-full sm:w-auto"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp Now
          </a>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-primary-light transition-colors block py-0.5">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
          <ul className="space-y-2 sm:space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link href="/services" className="text-slate-400 hover:text-primary-light transition-colors block py-0.5">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h3>
          <ul className="space-y-3 sm:space-y-3.5 text-sm text-slate-400">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors break-anywhere">
                <span className="text-primary-light shrink-0"><Icon name="phone" className="w-4 h-4" /></span>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-white transition-colors break-anywhere">
                <span className="text-primary-light shrink-0 mt-0.5"><Icon name="mail" className="w-4 h-4" /></span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-light shrink-0"><Icon name="pin" className="w-4 h-4" /></span>
              {site.address}
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-xs text-slate-500 mb-2.5">Follow Us</p>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-x py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p>
            Made with <span className="text-red-500">♥</span> by {site.founder}
          </p>
        </div>
      </div>
    </footer>
  );
}
