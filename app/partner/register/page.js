"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import { partnerPrograms, serviceLocations, site } from "@/lib/data";

export default function PartnerRegisterPage() {
  const [selectedProgram, setSelectedProgram] = useState(partnerPrograms[0].id);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Siwan",
    state: "Bihar",
    businessName: "",
    experience: "1-2 Years",
    upiId: "",
    expectedMonthlyClients: "2-4 Clients",
  });

  const [loading, setLoading] = useState(false);
  const [partnerResult, setPartnerResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your Full Name and WhatsApp Mobile number.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        programId: selectedProgram,
      };

      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to register partner.");
      }

      // Save partner credentials locally
      try {
        localStorage.setItem("sachin_net_partner_info", JSON.stringify(data.partner));
        localStorage.setItem("sachin_net_partner_id", data.partner.partnerId);
      } catch (err) {
        console.warn("LocalStorage partner save error:", err);
      }

      setPartnerResult(data.partner);
    } catch (err) {
      setErrorMsg(err.message || "Failed to complete partner registration.");
    } finally {
      setLoading(false);
    }
  };

  const getPartnerWhatsAppUrl = (p) => {
    const text = `Namaste Sachin Kushwaha Sir! Maine Sachin.net Partner Program me register kiya hai.
🤝 Partner ID: ${p.partnerId}
👤 Name: ${p.fullName}
📱 Phone: ${p.phone}
📍 Location: ${p.city}, ${p.state}
🏢 Business: ${p.businessName || "Independent Partner"}
💼 Program: ${p.programName} (${p.commissionRate})
💰 Payout UPI: ${p.upiId || "Pending"}
Mujhe Partner Kit aur onboarding details provide karein.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHeader
        badge="Sachin.net Partner Program 2026"
        title="Become an Official Partner &"
        highlight="Earn Up to 25% on Every Project"
        desc="Join Bharat's fastest growing tech agency. Refer schools, hospitals, local businesses or work as an authorized tech partner. Zero investment needed."
      />

      <PageSection first className="!pt-6 !pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Partner Benefits Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { icon: "wallet", title: "15% - 25% Commission", desc: "Earn ₹1,500 to ₹10,000 per deal" },
              { icon: "shield", title: "Direct Founder Backing", desc: "Technical calls handled by Sachin Sir" },
              { icon: "rocket", title: "Instant UPI Payouts", desc: "Fast disbursement upon client milestone" },
              { icon: "support", title: "Free Marketing Kit", desc: "Flyers, pitch deck & sample demos" },
            ].map((b, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon name={b.icon} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">{b.title}</div>
                  <div className="text-[11px] text-slate-400">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {partnerResult ? (
            /* REGISTRATION SUCCESS RECEIPT */
            <div className="rounded-3xl bg-slate-900/95 border border-amber-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl animate-fade-in text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/40 flex items-center justify-center mx-auto mb-4 text-3xl">
                🤝
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                Official Partner Onboarding Complete
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                Welcome to the Team, {partnerResult.fullName}!
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Your Official Sachin.net Partner ID has been generated:
              </p>
              <div className="my-3 py-2 px-6 rounded-2xl bg-slate-950 border border-amber-500/50 inline-block font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                {partnerResult.partnerId}
              </div>

              {/* Summary Details */}
              <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5 my-6 text-xs text-left space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Partner Program:</span>
                  <span className="font-bold text-white">{partnerResult.programName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Commission Rate:</span>
                  <span className="font-extrabold text-emerald-400">{partnerResult.commissionRate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Service Area / Hub:</span>
                  <span className="font-semibold text-white">{partnerResult.city}, {partnerResult.state}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                  <span>Payout UPI ID:</span>
                  <span className="font-mono text-amber-300">{partnerResult.upiId}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getPartnerWhatsAppUrl(partnerResult)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto !py-3 !px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  <span>Connect With Sachin Sir on WhatsApp</span>
                </a>

                <Link
                  href="/partner/dashboard"
                  className="btn-teal w-full sm:w-auto !py-3 !px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>Open Partner Dashboard →</span>
                </Link>
              </div>
            </div>
          ) : (
            /* REGISTRATION FORM */
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Partner Program Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Choose Your Partner Role:
                </div>

                {partnerPrograms.map((prog) => {
                  const active = selectedProgram === prog.id;
                  return (
                    <div
                      key={prog.id}
                      onClick={() => setSelectedProgram(prog.id)}
                      className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                        active
                          ? "bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-900 border-amber-400 shadow-xl shadow-amber-950/40"
                          : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                          {prog.badge}
                        </span>
                        <span className="text-sm font-extrabold text-emerald-400">{prog.commission}</span>
                      </div>

                      <h3 className="text-base font-bold text-white">{prog.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{prog.who}</p>

                      <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                        {prog.perks.map((perk, pi) => (
                          <div key={pi} className="flex items-center gap-2">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Registration Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="pb-4 border-b border-slate-800 mb-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Partner Application Form
                    </span>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      Register as Sachin.net Associate
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill your details to get your verified Partner ID &amp; marketing access.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sanjay Mishra"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          WhatsApp Mobile <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 99313 XXXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="partner@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Business / Shop / Institute Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Mishra Cyber Cafe / Freelancer"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Your District / City
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        >
                          {serviceLocations.map((loc) => (
                            <option key={loc.id} value={loc.name}>
                              {loc.name} ({loc.state})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          UPI ID for Direct Payouts
                        </label>
                        <input
                          type="text"
                          value={formData.upiId}
                          onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                          placeholder="yourname@okhdfcbank"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Experience / Background
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        >
                          <option value="New / Starting out">New / Starting out</option>
                          <option value="1-2 Years in Tech/Sales">1-2 Years in Tech/Sales</option>
                          <option value="3+ Years Established Institute/Agency">3+ Years Established Institute/Agency</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Expected Monthly Referrals
                        </label>
                        <select
                          value={formData.expectedMonthlyClients}
                          onChange={(e) => setFormData({ ...formData, expectedMonthlyClients: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                        >
                          <option value="1-2 Clients (₹3,000 - ₹6,000 / mo)">1-2 Clients (₹3,000 - ₹6,000 / mo)</option>
                          <option value="3-5 Clients (₹10,000 - ₹25,000 / mo)">3-5 Clients (₹10,000 - ₹25,000 / mo)</option>
                          <option value="5+ Clients (₹30,000+ / mo)">5+ Clients (₹30,000+ / mo)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      🔒 Zero Security Deposit. Zero Hidden Clauses. 100% Genuine Direct Commission from Sachin Kushwaha.
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full !py-3.5 text-sm font-black flex items-center justify-center gap-2 shadow-xl"
                    >
                      {loading ? (
                        <>
                          <span className="loader-ring !w-4 !h-4" />
                          <span>Generating Partner ID...</span>
                        </>
                      ) : (
                        <>
                          <span>Register &amp; Activate Partner Account</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <Link href="/partner/dashboard" className="text-amber-400 hover:underline">
                      Already Registered? Go to Partner Dashboard →
                    </Link>
                    <span>Direct Call: {site.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageSection>
    </>
  );
}

