"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function PartnerDashboardPage() {
  const [partner, setPartner] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("leads"); // "leads" | "submit" | "share" | "payout" | "marketing"

  // Lead Submission Form
  const [leadForm, setLeadForm] = useState({
    clientName: "",
    clientPhone: "",
    service: "School Management ERP",
    budget: "Custom Quotation",
  });
  const [leadSubmitSuccess, setLeadSubmitSuccess] = useState(false);

  // Payout request
  const [payoutRequested, setPayoutRequested] = useState(false);

  useEffect(() => {
    fetchPartnerData();
  }, []);

  const fetchPartnerData = async () => {
    setLoading(true);
    try {
      let savedPartnerId = "";
      try {
        savedPartnerId = localStorage.getItem("sachin_net_partner_id") || "";
      } catch (err) {
        console.warn("Storage warning:", err);
      }

      const url = savedPartnerId ? `/api/partners?id=${savedPartnerId}` : "/api/partners";
      const res = await fetch(url);
      const data = await res.json();

      if (data.ok) {
        setPartner(data.partner);
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Partner dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.clientName || !leadForm.clientPhone) return;

    try {
      const res = await fetch("/api/partners", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "submit-lead",
          partnerId: partner?.partnerId || "SN-PTR-8812",
          partnerName: partner?.fullName || "Partner",
          clientName: leadForm.clientName,
          clientPhone: leadForm.clientPhone,
          service: leadForm.service,
          budget: leadForm.budget,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setLeads([data.lead, ...leads]);
        setLeadSubmitSuccess(true);
        setLeadForm({ clientName: "", clientPhone: "", service: "School Management ERP", budget: "Custom Quotation" });
        setTimeout(() => setLeadSubmitSuccess(false), 4000);
      }
    } catch (err) {
      alert("Failed to submit lead: " + err.message);
    }
  };

  const handlePayoutRequest = async () => {
    try {
      await fetch("/api/partners", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request-payout",
          partnerId: partner?.partnerId,
          amount: partner?.pendingPayout,
          upiId: partner?.upiId,
        }),
      });
      setPayoutRequested(true);
    } catch (err) {
      alert("Payout request error: " + err.message);
    }
  };

  const referralUrl = `https://www.sachin-net.xyz/?partner=${partner?.partnerId || "SN-PTR-8812"}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralUrl);
    alert("Referral link copied to clipboard: " + referralUrl);
  };

  const sharePitchText = `Namaste! Agar aapko School ERP, Hospital Management, E-Commerce ya Business Website banwani hai, toh Sachin.net (Top Web Development Agency in Bihar) se sampark karein.
Direct Contact: https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Namaste Sachin Sir! Mujhe website banwani hai (Referred by Partner ID: ${partner?.partnerId || "SN-PTR-8812"}).`)}
Official Website: ${referralUrl}`;

  const getWhatsAppPitchUrl = () => {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(sharePitchText)}`;
  };

  return (
    <>
      <PageHeader
        badge="Authorized Partner Central"
        title="Partner Earnings &"
        highlight="Operations Dashboard"
        desc="Track your referred client deals, monitor real-time commission earnings, submit new leads and request instant UPI payouts."
      />

      <PageSection first className="!pt-6 !pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Partner Identity Strip */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-7 mb-8 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-black text-xl shrink-0">
                🤝
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {partner?.partnerId || "SN-PTR-8812"}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {partner?.tier || "Gold Partner"}
                  </span>
                  <span className="text-xs text-slate-400">
                    📍 {partner?.city || "Siwan"}, {partner?.state || "Bihar"}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {partner?.fullName || "Sanjay Mishra"}
                </h2>
                <div className="text-xs text-slate-400">
                  {partner?.businessName || "Mishra Cyber Hub"} · Program: {partner?.programName || "Referral Partner"} ({partner?.commissionRate || "20%"})
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={copyReferralLink}
                className="btn-outline !py-2 !px-3.5 text-xs flex items-center gap-1.5"
              >
                <span>🔗 Copy Referral Link</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("submit")}
                className="btn-primary !py-2 !px-4 text-xs font-bold whitespace-nowrap"
              >
                + Submit Client Lead
              </button>
            </div>
          </div>

          {/* Partner Metrics Overview Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/15 to-transparent bg-slate-900 border border-slate-800 p-5">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {partner?.totalEarned || "₹28,500"}
              </div>
              <div className="text-xs font-bold text-white mt-1">Total Commission Earned</div>
              <div className="text-[11px] text-slate-400">Direct lifetime earnings</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 to-transparent bg-slate-900 border border-slate-800 p-5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                {partner?.pendingPayout || "₹6,000"}
              </div>
              <div className="text-xs font-bold text-white mt-1">Pending Payout Available</div>
              <div className="text-[11px] text-teal-300">Ready for instant UPI transfer</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-500/15 to-transparent bg-slate-900 border border-slate-800 p-5">
              <div className="text-2xl sm:text-3xl font-black text-blue-400">
                {partner?.totalReferrals || 14}
              </div>
              <div className="text-xs font-bold text-white mt-1">Total Client Leads Submitted</div>
              <div className="text-[11px] text-slate-400">Schools, Clinics &amp; Shops</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-500/15 to-transparent bg-slate-900 border border-slate-800 p-5">
              <div className="text-2xl sm:text-3xl font-black text-purple-400">
                {partner?.commissionRate || "20%"}
              </div>
              <div className="text-xs font-bold text-white mt-1">Your Commission Tier</div>
              <div className="text-[11px] text-slate-400">UPI: {partner?.upiId || "sanjaymishra@ybl"}</div>
            </div>
          </div>

          {/* Dashboard Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
            {[
              { id: "leads", label: "📊 My Referred Clients & Deals" },
              { id: "submit", label: "➕ Submit New Client Lead" },
              { id: "share", label: "📢 Shareable QR & WhatsApp Pitch" },
              { id: "payout", label: "💰 Commission Payout & UPI" },
              { id: "marketing", label: "📁 Marketing Assets & Rate Card" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="loader-ring mx-auto mb-3" />
              <div className="text-sm text-slate-400">Loading partner data...</div>
            </div>
          ) : (
            <>
              {/* TAB 1: LEADS & DEALS TABLE */}
              {activeTab === "leads" && (
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-white">Referred Client Status &amp; Payouts</h3>
                      <p className="text-xs text-slate-400">All leads tracked with your Partner ID ({partner?.partnerId})</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("submit")}
                      className="btn-outline !py-1.5 !px-3 text-xs"
                    >
                      + Add New
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="py-3 px-3">Lead ID</th>
                          <th className="py-3 px-3">Client Name</th>
                          <th className="py-3 px-3">Contact</th>
                          <th className="py-3 px-3">Service / Deal</th>
                          <th className="py-3 px-3">Your Commission</th>
                          <th className="py-3 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {leads.map((l) => (
                          <tr key={l.id} className="hover:bg-slate-950/40 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-amber-300">{l.id}</td>
                            <td className="py-3 px-3 font-bold text-white">{l.clientName}</td>
                            <td className="py-3 px-3 text-slate-400">{l.clientPhone}</td>
                            <td className="py-3 px-3 text-slate-200">{l.service}</td>
                            <td className="py-3 px-3 font-extrabold text-emerald-400">{l.commissionAmount}</td>
                            <td className="py-3 px-3">
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                  l.status.includes("Won")
                                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                }`}
                              >
                                {l.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: SUBMIT LEAD FORM */}
              {activeTab === "submit" && (
                <div className="max-w-xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Partner Lead Submission
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Submit Client Details</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our sales and development team will contact the client and handle technical discussions. You get credited upon project agreement!
                    </p>
                  </div>

                  {leadSubmitSuccess && (
                    <div className="p-4 mb-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs text-center font-bold">
                      ✓ Client Lead Submitted Successfully! Added to your dashboard tracker.
                    </div>
                  )}

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Client / Business Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={leadForm.clientName}
                        onChange={(e) => setLeadForm({ ...leadForm, clientName: e.target.value })}
                        placeholder="e.g. Siwan Central Hospital / Saraswati Vidya Mandir"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Client WhatsApp Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadForm.clientPhone}
                        onChange={(e) => setLeadForm({ ...leadForm, clientPhone: e.target.value })}
                        placeholder="+91 99313 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Service Needed
                        </label>
                        <select
                          value={leadForm.service}
                          onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400"
                        >
                          <option value="School Management ERP">School Management ERP</option>
                          <option value="Hospital & Clinic Software">Hospital &amp; Clinic Software</option>
                          <option value="Business Website">Business Website</option>
                          <option value="E-Commerce Online Store">E-Commerce Store</option>
                          <option value="NGO & Trust Portal">NGO &amp; Trust Portal</option>
                          <option value="Old Website Bug Fixing">Old Website Bug Fixing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Expected Budget
                        </label>
                        <select
                          value={leadForm.budget}
                          onChange={(e) => setLeadForm({ ...leadForm, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-amber-400"
                        >
                          <option value="Custom Quote (Starter Scope)">Custom Quote (Starter)</option>
                          <option value="Custom Quote (NGO Scope)">Custom Quote (NGO Package)</option>
                          <option value="Custom Quote (Business Pro Scope)">Custom Quote (Business Pro)</option>
                          <option value="Custom Quote (School ERP Scope)">Custom Quote (School ERP)</option>
                          <option value="Custom Quote (Enterprise Scope)">Custom Quote (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      💡 Your Partner ID ({partner?.partnerId}) will be automatically tagged to this lead.
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full !py-3 text-sm font-bold flex items-center justify-center gap-2"
                    >
                      <span>Submit Lead for Follow-up</span>
                      <span>→</span>
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 3: SHAREABLE QR & PITCH */}
              {activeTab === "share" && (
                <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Promote &amp; Earn
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Your Direct Partner Links</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Share with prospective clients on WhatsApp, Facebook, or your local network.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Your Unique Referral URL:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={referralUrl}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-teal-300 font-mono text-xs focus:outline-hidden"
                      />
                      <button
                        type="button"
                        onClick={copyReferralLink}
                        className="btn-teal !py-2 !px-3 text-xs shrink-0"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Ready-to-Send WhatsApp Pitch Message:
                    </label>
                    <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-300 whitespace-pre-line border border-slate-800/80 mb-3 font-mono leading-relaxed">
                      {sharePitchText}
                    </div>

                    <a
                      href={getWhatsAppPitchUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full !py-3 text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <Icon name="whatsapp" className="w-4 h-4" />
                      <span>Forward Pitch Message on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 4: PAYOUTS */}
              {activeTab === "payout" && (
                <div className="max-w-xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Partner Commission Payouts
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Instant UPI Withdrawal</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Commission disbursals are processed directly by founder Sachin Kushwaha within 24 hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-6 space-y-3 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Available Balance:</span>
                      <span className="text-xl font-black text-emerald-400">{partner?.pendingPayout || "₹6,000"}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Registered UPI ID:</span>
                      <span className="font-mono text-amber-300">{partner?.upiId || "sanjaymishra@ybl"}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Payout Frequency:</span>
                      <span className="text-white font-semibold">Instant on request</span>
                    </div>
                  </div>

                  {payoutRequested ? (
                    <div className="p-5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center text-xs text-emerald-200">
                      ✓ Payout Request for {partner?.pendingPayout} Submitted! Disbursal initiated to {partner?.upiId}.
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handlePayoutRequest}
                      className="btn-primary w-full !py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Request Payout of {partner?.pendingPayout || "₹6,000"} to UPI</span>
                      <span>→</span>
                    </button>
                  )}
                </div>
              )}

              {/* TAB 5: MARKETING KIT */}
              {activeTab === "marketing" && (
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="mb-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Client Pitch &amp; Marketing Kit
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Ready-to-Use Promotional Collateral</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Download banners, rate cards and service brochures to show local school principals, doctors, and business owners.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Smart School ERP Brochure",
                        type: "PDF Presentation",
                        desc: "Fee management, WhatsApp marksheets & parent app overview.",
                        tag: "Education",
                      },
                      {
                        title: "Hospital ERP Rate Card",
                        type: "Brochure & Demo Link",
                        desc: "OPD/IPD, doctor appointments, pharmacy & billing software.",
                        tag: "Healthcare",
                      },
                      {
                        title: "Website Starter Offer Flyer",
                        type: "Social Media Banner",
                        desc: "High-conversion poster for local shops and business owners.",
                        tag: "Promo",
                      },
                      {
                        title: "NGO Digital Package Poster",
                        type: "Print Poster (Digital Solution)",
                        desc: "80G receipts, digital ID card generator & donation QR.",
                        tag: "NGO / Trust",
                      },
                      {
                        title: "E-Commerce Store Rate Card",
                        type: "Product Brochure",
                        desc: "Payment gateway, product catalog & inventory tracking.",
                        tag: "Retail",
                      },
                      {
                        title: "Live Portfolio Demo Links",
                        type: "Interactive URLs",
                        desc: "Medicare Hospital, Gram Vikas Foundation, Rurally Smile Org live links.",
                        tag: "Proof of Work",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-bold text-amber-400 mb-2">
                            <span>#{item.tag}</span>
                            <span className="text-slate-500">{item.type}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800">
                          <a
                            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                              `Namaste Sachin Sir! Mujhe Partner Kit asset '${item.title}' ka raw file/PDF WhatsApp par chahiye.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline !py-1.5 !px-3 text-xs w-full text-center block"
                          >
                            Request High-Res File →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </PageSection>
    </>
  );
}

