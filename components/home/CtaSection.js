import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { site } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="page-section">
      <div className="container-x">
        <Reveal>
          <div className="cta-banner">
            <div className="cta-banner-glow" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="min-w-0">
                <h2 className="heading-md text-white">Ready to start your project?</h2>
                <p className="mt-2 text-body text-blue-100 max-w-xl">
                  Let&apos;s discuss your project and turn your ideas into reality.
                  Get a free quote today — no obligation.
                </p>
              </div>
              <div className="btn-stack w-full md:w-auto shrink-0">
                <Link href="/contact" className="btn-white">
                  Get Free Quote <Icon name="arrow" className="w-4 h-4" />
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
