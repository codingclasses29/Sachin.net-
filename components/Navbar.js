"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header
      className={`site-header fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "is-scrolled"
          : ""
      }`}
    >
      <nav className="container-x flex items-center justify-between h-14 sm:h-16 lg:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 font-bold text-lg sm:text-xl text-white shrink-0"
        >
          <span className="text-primary-light">
            <Icon name="code" className="w-6 h-6 sm:w-7 sm:h-7" />
          </span>
          Sachin<span className="text-primary-light">.net</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-white whitespace-nowrap ${
                  pathname === link.href ? "text-primary-light" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <ThemeToggle />
          <Link href="/ai-tools" className="hidden xl:inline-flex text-sm text-cyan-400 hover:text-cyan-300 font-medium">
            AI Tools
          </Link>
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
          >
            <Icon name="phone" className="w-4 h-4" />
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary !py-2 !px-4 xl:!px-5 text-sm">
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mobile-nav">
          <ul className="container-x py-4 space-y-1 pb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 px-3 rounded-lg font-medium text-base transition-colors min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? "bg-primary/15 text-primary-light"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-3 space-y-2 border-t border-slate-700/40 mt-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-3 py-3 px-3 text-slate-300 hover:text-white"
              >
                <Icon name="phone" className="w-5 h-5 text-primary-light" />
                <span className="text-sm">{site.phone}</span>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-sm"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                WhatsApp Now
              </a>
              <Link href="/contact" className="btn-primary w-full text-sm">
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
