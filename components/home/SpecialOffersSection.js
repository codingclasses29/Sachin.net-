"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function SpecialOffersSection() {
  const whatsappStarter = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Sachin Sir! I saw your Website Offer (Starting ₹2,999). I want to make a website for my business."
  )}`;

  const whatsappNGO = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Sachin Sir! I want to build a complete NGO Website & Mobile Portal (₹6,999 package with ID Card, 80G Receipt & Certificate generator)."
  )}`;

  const whatsappBugFix = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Sachin Sir! I need bug fixing & speed optimization for my existing website (₹999 offer)."
  )}`;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-[#0a1628] to-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🔥</span>
            <span>Special Promotional Deals 2026</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Best Website Deals in India —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">
              No Hidden Charges
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Honest Indian pricing, modern technology, and direct 1-on-1 support by Sachin Kushwaha.
          </p>
        </div>

        {/* 2 Big Feature Promotional Cards matching user's flyers */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: "WEBSITE बनवानी है KYA?" (Yellow & Black High-Conversion Poster) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 p-1 shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-full rounded-[22px] bg-[#0c0d10] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-amber-400/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow">
                    SN
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                      Sachin.net
                    </span>
                    <span className="text-[10px] text-slate-400">Your Website, Your Digital Identity</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider animate-pulse shadow">
                  LIMITED TIME OFFER
                </span>
              </div>

              {/* Main Headline in Hindi / Hinglish */}
              <div className="my-5">
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-amber-400 leading-tight">
                  WEBSITE बनवानी है KYA ?
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  मैं हूँ ना बनाने के लिये...
                </p>
                <p className="text-amber-300 text-sm font-semibold mt-1">
                  &ldquo;छोड़ दो मेरे पे, सब संभाल लूंगा!&rdquo;
                </p>

                {/* Categories */}
                <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] font-bold text-slate-300">
                  <span className="text-amber-400">E-COMMERCE</span>
                  <span>|</span>
                  <span>LANDING PAGE</span>
                  <span>|</span>
                  <span>SCHOOL WEBSITE</span>
                  <span>|</span>
                  <span>NGO</span>
                  <span>|</span>
                  <span>BUSINESS</span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="my-4 p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-extrabold text-red-400 uppercase tracking-wider">
                    SPECIAL LAUNCH PRICE
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-sm sm:text-base text-slate-400 line-through">
                      ₹19,999
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                      ₹2,999
                    </span>
                    <span className="text-xs text-amber-300 font-semibold">onwards</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-black text-xs">
                    SAVE 85%
                  </span>
                </div>
              </div>

              {/* 6 Free Gifts Included */}
              <div className="my-3 space-y-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-amber-400">🎁</span>
                  <span>FREE Perks Included With Every Website:</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE Premium Theme</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE 1 Mo. Maintenance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE SSL Certificate</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE Basic Logo</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE WhatsApp Button</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="font-semibold">FREE Google Indexing</span>
                  </div>
                </div>
              </div>

              {/* Bug Fixing Sub-Banner */}
              <div className="mt-4 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-red-300 uppercase">
                    OLD WEBSITE BUG FIXING
                  </div>
                  <div className="text-[11px] text-slate-400">Speed, error &amp; mobile responsive fixes</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-white">₹999/-</div>
                  <a
                    href={whatsappBugFix}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-amber-400 hover:underline"
                  >
                    Fix Now →
                  </a>
                </div>
              </div>

              {/* Guarantee & Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-800 space-y-3">
                <div className="text-center text-xs font-medium text-slate-400 italic">
                  &ldquo;ना कोई दिखावा, ना झूठे वादे... NO HIDDEN CHARGES&rdquo;
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappStarter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <Icon name="whatsapp" className="w-4 h-4 text-emerald-800" />
                    <span>Book Website @ ₹2,999</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Get Free Quote</span>
                    <Icon name="arrow" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: NGO Website & App Package (₹6,999) matching user's flyer */}
          <div className="relative rounded-3xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 p-1 shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-full rounded-[22px] bg-[#12080a] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-sm shadow">
                    NGO
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
                      डिजिटल समाधान
                    </span>
                    <span className="text-[10px] text-slate-300">सशक्त समाज के लिए</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow">
                  TRUST &amp; NGO SPECIAL
                </span>
              </div>

              {/* Title */}
              <div className="my-5">
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-white leading-tight">
                  आपकी <span className="text-amber-400">NGO संस्था</span> का <br />
                  वेबसाइट, मोबाइल ऐप बनाएं!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  ट्रस्ट, समिति, फाउंडेशन और सामाजिक संस्थाओं के लिए सम्पूर्ण ऑनलाइन ऑटोमेशन सिस्टम।
                </p>
              </div>

              {/* Price Banner */}
              <div className="my-3 p-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white flex items-center justify-between gap-4 shadow-lg shadow-red-950/50">
                <div>
                  <div className="text-xs uppercase tracking-wider text-rose-200 font-bold">
                    कंप्लीट डिजिटल पैकेज
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5">
                    सिर्फ ₹6,999/- <span className="text-xs font-normal">में</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md bg-white text-red-700 font-black text-xs shadow-xs">
                    ALL-IN-ONE
                  </span>
                </div>
              </div>

              {/* 5 Core NGO Features */}
              <div className="my-3 space-y-2.5">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  सॉफ्टवेयर में क्या-क्या मिलेगा:
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-red-500/20">
                    <span className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🪪
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">ID कार्ड (Digital Member ID Card)</div>
                      <div className="text-[11px] text-slate-400">सदस्यों और कार्यकर्ताओं का फोटो आईडी कार्ड जनरेटर</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-red-500/20">
                    <span className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm shrink-0">
                      📝
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">नियुक्ति पत्र (Official Appointment Letter)</div>
                      <div className="text-[11px] text-slate-400">पदभार व नियुक्ति पत्र ऑटोमैटिक पीडीएफ डाउनलोड</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-red-500/20">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🧾
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">डोनेशन रसीद (80G Donation Receipt)</div>
                      <div className="text-[11px] text-slate-400">ऑनलाइन दान व 80G टैक्स छूट रसीद प्रिंट सिस्टम</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-red-500/20">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🏆
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">सर्टिफिकेट (Appreciation &amp; Membership Certificate)</div>
                      <div className="text-[11px] text-slate-400">प्रशस्ति पत्र और आजीवन सदस्यता प्रमाण पत्र</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-red-500/20">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                      👥
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">सदस्यता शुल्क (Membership Fee Portal)</div>
                      <div className="text-[11px] text-slate-400">क्यूआर कोड / यूपीआई द्वारा डायरेक्ट बैंक खाता कलेक्शन</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-800 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappNGO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <Icon name="whatsapp" className="w-4 h-4" />
                    <span>Book NGO Portal @ ₹6,999</span>
                  </a>

                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Icon name="phone" className="w-4 h-4 text-emerald-400" />
                    <span>Call +91 9931306292</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

