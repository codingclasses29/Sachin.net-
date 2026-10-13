"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../Providers";

const whatsNewItems = [
  {
    id: "fy26-growth",
    image: "/banners/website-development.png",
    titleEn: "Sachin-Net FY26 digital & AI milestones announced",
    titleHi: "Sachin-Net FY26 डिजिटल और AI उपलब्धियों की घोषणा",
    descEn:
      "Pan-India digital transformation and strategic enterprise software deliveries underpin Sachin-Net's rapid growth across Bihar and Bharat.",
    descHi:
      "पूरे भारत में डिजिटल ट्रांसफॉर्मेशन और रणनीतिक सॉफ्टवेयर प्रोजेक्ट्स के साथ Sachin-Net का तेज़ी से विस्तार।",
    href: "/about",
    external: false,
  },
  {
    id: "hospital-erp-leader",
    image: "/banners/hospital-management.png",
    titleEn: "Sachin-Net a leader in Healthcare & Hospital ERP",
    titleHi: "हेल्थकेयर और हॉस्पिटल ERP में Sachin-Net अग्रणी",
    descEn:
      "Deep integration of AI, structured OPD/IPD scaling, pathology lab billing, and strong proprietary cloud solutions for modern hospitals.",
    descHi:
      "आधुनिक अस्पतालों के लिए AI, OPD/IPD ऑटोमेशन, पैथोलॉजी और फार्मेसी बिलिंग का लाइव क्लाउड समाधान।",
    href: "https://medicarehospitl.netlify.app/",
    external: true,
  },
  {
    id: "ngo-cloud-transition",
    image: "/banners/digital-services.png",
    titleEn: "Gram Vikas & Rurally Smile transition to Sachin-Net",
    titleHi: "ग्राम विकास और रूरली स्माइल NGO का Sachin-Net क्लाउड से जुड़ाव",
    descEn:
      "The strategic deployment brings automated 80G tax receipts, volunteer ID cards, and transparent donor portals grounded in social impact.",
    descHi:
      "80G टैक्स रसीद, डिजिटल मेंबर आईडी कार्ड और ऑनलाइन डोनेशन पोर्टल के साथ NGO संस्थाओं का पूर्ण डिजिटलीकरण।",
    href: "https://gramvikasfoundation.netlify.app/",
    external: true,
  },
  {
    id: "school-erp-hub",
    image: "/banners/school-management.png",
    titleEn: "Sachin-Net launches Smart School ERP 3.0 innovation hub",
    titleHi: "स्मार्ट स्कूल ERP 3.0 इनोवेशन हब का शुभारंभ",
    descEn:
      "The cloud platform unifies biometric attendance, automated fee invoicing, online exam report cards, and real-time parent mobile apps.",
    descHi:
      "बायोमेट्रिक उपस्थिति, ऑनलाइन फीस रसीद, परीक्षा रिजल्ट और पेरेंट मोबाइल ऐप के साथ स्कूलों का पेपरलेस प्रबंधन।",
    href: "/school-erp-bihar",
    external: false,
  },
  {
    id: "ai-custom-quote",
    image: "/banners/hosting-servers.png",
    titleEn: "Enterprise AI Lab & Custom Quotation Engine deployed",
    titleHi: "एंटरप्राइज AI लैब और कस्टम कोटेशन इंजन लाइव",
    descEn:
      "Clients can now configure custom software scope online, test live AI tools, and receive tailored project quotations directly from our architects.",
    descHi:
      "क्लाइंट अब अपने सॉफ्टवेयर की आवश्यकता अनुसार कस्टम कोटेशन और लाइव AI टूल्स का सीधा लाभ ले सकते हैं।",
    href: "/ai-tools",
    external: false,
  },
];

export default function WhatsNewSection() {
  const { lang } = useLanguage();
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white text-slate-900 py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: "What's new" on left, Arrows on right (Exact TCS Layout) */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            {lang === "hi" ? "नया क्या है (What's new)" : "What's new"}
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-900 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous news"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-900 text-slate-800 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next news"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Cards (Matches TCS 3.25-card viewport layout) */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {whatsNewItems.map((item) => {
            const CardWrapper = item.external ? "a" : Link;
            const wrapperProps = item.external
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <CardWrapper
                key={item.id}
                {...wrapperProps}
                className="group snap-start shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] flex flex-col justify-between bg-white transition-all"
              >
                <div>
                  {/* Rectangular Top Photograph */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={lang === "hi" ? item.titleHi : item.titleEn}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 85vw, 380px"
                    />
                  </div>

                  {/* Clean Editorial Heading */}
                  <h3 className="mt-5 mb-3 text-xl sm:text-[22px] font-normal text-slate-900 group-hover:text-[#1d63dc] leading-[1.3] transition-colors">
                    {lang === "hi" ? item.titleHi : item.titleEn}
                  </h3>

                  {/* Editorial Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {lang === "hi" ? item.descHi : item.descEn}
                  </p>
                </div>

                {/* Bottom "Read more ->" bar with thin divider */}
                <div className="pt-3 pb-3 border-b border-slate-200 group-hover:border-[#1d63dc] flex items-center justify-between text-sm font-medium text-slate-900 group-hover:text-[#1d63dc] transition-colors">
                  <span>{lang === "hi" ? "विस्तार से पढ़ें (Read more)" : "Read more"}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
                  </svg>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

