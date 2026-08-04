"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import SiteSearch from "./SiteSearch";
import { navMainLinks, navMoreLinks, site } from "@/lib/data";

function NavLink({ href, label, pathname, className = "" }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`nav-link transition-colors whitespace-nowrap ${
        active ? "text-teal-400 font-semibold" : "hover:text-white"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const moreRef = useRef(null);
  const pathname = usePathname();

  const moreActive = navMoreLinks.some((l) => l.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setMoreOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [moreOpen]);

  return (
    <header
      className={`site-header fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "is-scrolled" : ""
      }`}
    >
      <nav className="container-x flex items-center justify-between h-14 sm:h-16 lg:h-[4.5rem] gap-4">
        <Link
          href="/"
          className="nav-brand flex items-center gap-1.5 sm:gap-2 font-bold text-lg sm:text-xl text-white shrink-0 transition-colors"
        >
          <span className="text-primary-light">
            <Icon name="code" className="w-6 h-6 sm:w-7 sm:h-7" />
          </span>
          Sachin<span className="text-primary-light">.net</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navMainLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} pathname={pathname} />
            </li>
          ))}

          <li className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className={`nav-link inline-flex items-center gap-1.5 transition-colors ${
                moreActive || moreOpen ? "text-teal-400 font-semibold" : "hover:text-white"
              }`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <Icon
                name="arrow"
                className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "-rotate-90" : "rotate-90"}`}
              />
            </button>

            {moreOpen && (
              <div className="nav-dropdown">
                {navMoreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className={`nav-dropdown-item ${
                      pathname === link.href ? "nav-dropdown-item-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="nav-icon-btn"
            aria-label="Search site"
          >
            <Icon name="search" className="w-4 h-4" />
          </button>
          <ThemeToggle />
          <Link href="/contact" className="btn-primary !py-2 !px-4 xl:!px-5 text-sm">
            Get Free Quote
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-0.5 shrink-0">
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Icon name="search" className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="nav-mobile-btn -mr-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {open && (
        <div className="lg:hidden mobile-nav">
          <ul className="container-x py-4 space-y-1 pb-8">
            {navMainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 px-3 rounded-lg font-medium text-base min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? "bg-teal-500/15 text-teal-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                className={`w-full flex items-center justify-between py-3 px-3 rounded-lg font-medium text-base min-h-[44px] ${
                  moreActive ? "bg-teal-500/15 text-teal-400" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                More
                <Icon
                  name="arrow"
                  className={`w-4 h-4 transition-transform ${mobileMoreOpen ? "-rotate-90" : "rotate-90"}`}
                />
              </button>
              {mobileMoreOpen && (
                <ul className="mt-1 ml-3 pl-3 border-l border-slate-700/50 space-y-0.5">
                  {navMoreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2.5 px-3 rounded-lg text-sm ${
                          pathname === link.href
                            ? "text-teal-400 font-medium"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="pt-3 space-y-2 border-t border-slate-700/40 mt-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-3 py-3 px-3 text-slate-300 hover:text-white"
              >
                <Icon name="phone" className="w-5 h-5 text-teal-400" />
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
