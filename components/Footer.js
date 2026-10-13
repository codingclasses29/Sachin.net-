import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import { site } from "@/lib/data";

const industryLinks = [
  { label: "Healthcare & Hospital ERP", href: "https://medicarehospitl.netlify.app/", external: true },
  { label: "Hospital Portal 2.0 (Live)", href: "https://medicare-hospitl-1.netlify.app/", external: true },
  { label: "Education & Smart School ERP", href: "/school-erp-bihar", external: false },
  { label: "NGO & Social Impact Cloud", href: "https://gramvikasfoundation.netlify.app/", external: true },
  { label: "Rurally Smile NGO Platform", href: "https://rurallysmile-org.vercel.app/", external: true },
  { label: "Retail & E-Commerce Systems", href: "/ecommerce-development-bihar", external: false },
];

const quickLinks = [
  { label: "What We Do (Services)", href: "/services" },
  { label: "AI & ML Solutions", href: "/ai-services" },
  { label: "Interactive AI Tools Lab", href: "/ai-tools" },
  { label: "Custom Website Development", href: "/website-development" },
  { label: "Portfolio & Case Studies", href: "/portfolio" },
  { label: "Custom Quotation & Scope", href: "/pricing" },
  { label: "Book Service Online", href: "/book-service" },
  { label: "Client Tracking Dashboard", href: "/customer/dashboard" },
  { label: "Partner Program & Portal", href: "/partner/register" },
  { label: "Partner Login Dashboard", href: "/partner/dashboard" },
  { label: "Careers at Sachin-Net", href: "/careers" },
];

const biharLocations = [
  { label: "Website Development Bihar", href: "/website-development-bihar" },
  { label: "Website Development Siwan", href: "/website-development-siwan" },
  { label: "Website Development Patna", href: "/website-development-patna" },
  { label: "Smart School ERP Bihar", href: "/school-erp-bihar" },
  { label: "E-Commerce Development Bihar", href: "/ecommerce-development-bihar" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Admin Locations Hub", href: "/admin/locations" },
  { label: "About Sachin Kushwaha", href: "/about" },
  { label: "Insights & Tech News", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Admin Console (2FA)", href: "/admin/login" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/15">
      {/* Top Corporate Enterprise Strip */}
      <div className="border-b border-white/10 bg-[#080b11]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
              SACHIN-NET TECHNOLOGIES &amp; SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl font-normal text-white mt-1">
              Building a Smarter Digital Future Across Bharat
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#1d63dc] hover:bg-[#2a73f0] text-white text-sm font-medium transition-all"
            >
              Request Custom Quotation
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-medium inline-flex items-center gap-2 transition-all"
            >
              <Icon name="whatsapp" className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 5-Column TCS-Style Corporate Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* Column 1: Brand Identity */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-3">
            <Image
              src="/logo.png"
              alt="Sachin.net Online Services"
              width={140}
              height={44}
              className="h-10 w-auto object-contain rounded bg-white p-0.5"
              style={{ maxHeight: "40px", width: "auto" }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-wider text-white">SACHIN-NET</span>
              <span className="text-[9px] font-semibold tracking-[0.16em] text-blue-400 uppercase mt-0.5">
                TECHNOLOGIES
              </span>
            </div>
          </Link>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
            Enterprise AI Solutions, Custom Web Development, Cloud &amp; ERP Platforms engineered for businesses, hospitals, schools, and NGOs.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            HQ: Siwan (Bihar), India · Serving 15+ States
          </p>
          <div className="mt-5">
            <p className="text-slate-400 mb-2.5 text-xs uppercase tracking-wider font-semibold">
              Connect With Us
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Column 2: Industries & Live Platforms */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">
            Industries &amp; Live ERP
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {industryLinks.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-blue-400">↗</span>
                  </a>
                ) : (
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services & Portals */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">
            Services &amp; Portals
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Regional & SEO Hubs */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">
            Bihar &amp; Service Hubs
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {biharLocations.map((loc) => (
              <li key={loc.href}>
                <Link href={loc.href} className="text-slate-400 hover:text-white transition-colors">
                  {loc.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Direct Executive Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">
            Corporate Contact
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
            <li>
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-3 hover:text-white transition-colors break-anywhere"
              >
                <Icon name="phone" className="w-4 h-4 text-blue-400 shrink-0" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors break-anywhere"
              >
                <Icon name="mail" className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="w-4 h-4 text-blue-400 shrink-0" />
              {site.address}
            </li>
          </ul>

          <div className="mt-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
            <p className="text-[11px] font-semibold text-blue-300">Custom Software Quotation</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Every project is quoted based on client architecture &amp; feature scope.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-[#05070b]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-center sm:text-left text-xs">
          <p>© {new Date().getFullYear()} {site.name} (Sachin-Net Technologies). All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <p>Founder &amp; Lead Architect: {site.founder}</p>
        </div>
      </div>
    </footer>
  );
}
