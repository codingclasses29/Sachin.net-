import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { site } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-primary to-indigo-700 px-5 py-8 sm:px-8 sm:py-12 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -top-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Ready to start your project?
                </h2>
                <p className="mt-2.5 text-blue-100 max-w-xl">
                  Let&apos;s discuss your project and turn your ideas into reality.
                  Get a free quote today — no obligation.
                </p>
              </div>
              <div className="btn-stack w-full md:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-semibold px-5 sm:px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Get Free Quote Now <Icon name="arrow" className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
