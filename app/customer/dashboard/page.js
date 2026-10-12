"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function CustomerDashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchPhone, setSearchPhone] = useState("");
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const [ticketSent, setTicketSent] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "tracker" | "invoices" | "support"

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async (phoneQuery = "") => {
    setLoading(true);
    try {
      // 1. Fetch from API
      const url = phoneQuery
        ? `/api/bookings?phone=${encodeURIComponent(phoneQuery)}`
        : "/api/bookings";
      const res = await fetch(url);
      const data = await res.json();

      let combined = data.bookings || [];

      // 2. Merge with localStorage bookings
      try {
        const local = JSON.parse(localStorage.getItem("sachin_net_user_bookings") || "[]");
        if (local.length > 0) {
          const map = new Map();
          local.forEach((b) => map.set(b.bookingId, b));
          combined.forEach((b) => {
            if (!map.has(b.bookingId)) map.set(b.bookingId, b);
          });
          combined = Array.from(map.values());
        }
      } catch (err) {
        console.warn("Local storage parse warning:", err);
      }

      setBookings(combined);
      if (combined.length > 0 && !selectedBooking) {
        setSelectedBooking(combined[0]);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBookings(searchPhone);
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;

    setTicketSent(true);
    setTimeout(() => {
      setTicketSubject("");
      setTicketMessage("");
    }, 1000);
  };

  const milestoneSteps = [
    { step: 1, title: "Requirement Discussion", desc: "Feature list, scope & timeline confirmed" },
    { step: 2, title: "UI/UX & Architecture Approval", desc: "Modern visual layout and database schema approved" },
    { step: 3, title: "Full-Stack Development", desc: "Next.js frontend, APIs & database code in progress" },
    { step: 4, title: "Testing & Core Web Vitals", desc: "Mobile responsiveness, SEO tags, forms & speed tests" },
    { step: 5, title: "Domain & SSL Live Handover", desc: "Production launch on your domain with 24/7 support" },
  ];

  return (
    <>
      <PageHeader
        badge="Client Self-Service Portal"
        title="Customer Dashboard &"
        highlight="Live Project Tracker"
        desc="Track your website and ERP development progress in real-time, view invoices, download deliverables and get 1-on-1 priority support."
      />

      <PageSection first className="!pt-6 !pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Control Bar: Search & Quick Actions */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 mb-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center font-bold text-lg shrink-0">
                SN
              </div>
              <div>
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Client Account
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {selectedBooking ? selectedBooking.customerName : "Welcome, Customer"}
                </h2>
                <div className="text-xs text-slate-400">
                  {selectedBooking ? selectedBooking.businessName : "Manage all your web & software orders"}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <form onSubmit={handleSearch} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  placeholder="Search by Mobile or ID..."
                  className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden focus:border-teal-400 w-full sm:w-56"
                />
                <button
                  type="submit"
                  className="btn-outline !py-2 !px-3 text-xs shrink-0"
                >
                  Lookup
                </button>
              </form>

              <Link
                href="/book-service"
                className="btn-teal !py-2 !px-4 text-xs sm:text-sm font-bold whitespace-nowrap w-full sm:w-auto text-center"
              >
                + Book New Service
              </Link>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Total Projects",
                value: bookings.length,
                sub: "Active & completed",
                color: "text-blue-400",
                bg: "from-blue-500/10 to-transparent",
              },
              {
                label: "Live Deployed",
                value: bookings.filter((b) => (b.currentStep || 1) >= 4).length,
                sub: "100% functional",
                color: "text-emerald-400",
                bg: "from-emerald-500/10 to-transparent",
              },
              {
                label: "In Active Development",
                value: bookings.filter((b) => (b.currentStep || 1) < 4).length,
                sub: "Coding & testing",
                color: "text-amber-400",
                bg: "from-amber-500/10 to-transparent",
              },
              {
                label: "Direct Support",
                value: "24/7 IST",
                sub: "Sachin Kushwaha",
                color: "text-teal-300",
                bg: "from-teal-500/10 to-transparent",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-gradient-to-br ${stat.bg} bg-slate-900/90 border border-slate-800 p-4 sm:p-5`}
              >
                <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
            {[
              { id: "overview", label: "📋 My Projects & Orders" },
              { id: "tracker", label: "🚀 Live Milestone Tracker" },
              { id: "invoices", label: "🧾 Invoices & Receipts" },
              { id: "support", label: "💬 Helpdesk & Revisions" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-teal-500 text-slate-950 shadow-md"
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
              <div className="text-sm text-slate-400">Loading your project portfolio...</div>
            </div>
          ) : bookings.length === 0 ? (
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-10 text-center max-w-xl mx-auto">
              <div className="text-4xl mb-3">📁</div>
              <h3 className="text-lg font-bold text-white">No Bookings Found</h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                You haven&apos;t booked a service with this number yet. Start your website or ERP today!
              </p>
              <Link href="/book-service" className="btn-teal">
                Book Your First Project
              </Link>
            </div>
          ) : (
            <>
              {/* TAB 1: OVERVIEW & BOOKINGS LIST */}
              {activeTab === "overview" && (
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Left List */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Select Project to View Details:
                    </div>
                    {bookings.map((b) => {
                      const isSelected = selectedBooking?.bookingId === b.bookingId;
                      return (
                        <div
                          key={b.bookingId}
                          onClick={() => setSelectedBooking(b)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-slate-900 border-teal-400 shadow-lg shadow-teal-950/40"
                              : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-mono text-xs font-bold text-teal-300">
                              {b.bookingId}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                b.status.includes("Live")
                                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              }`}
                            >
                              {b.status}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-white leading-tight mt-1">
                            {b.serviceTitle}
                          </h4>
                          <div className="text-xs text-slate-400 mt-0.5">{b.businessName}</div>

                          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/60 text-xs">
                            <span className="text-slate-400">📍 {b.location}</span>
                            <span className="font-extrabold text-emerald-400">{b.packagePrice}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Details Panel */}
                  {selectedBooking && (
                    <div className="lg:col-span-7 rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-extrabold text-teal-300">
                              {selectedBooking.bookingId}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-bold">
                              Verified Order
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-white mt-1">
                            {selectedBooking.serviceTitle}
                          </h3>
                          <div className="text-xs text-slate-400">
                            Client: {selectedBooking.customerName} ({selectedBooking.businessName})
                          </div>
                        </div>

                        <div className="text-left sm:text-right">
                          <div className="text-xl font-black text-emerald-400">
                            {selectedBooking.packagePrice}
                          </div>
                          <div className="text-[11px] text-slate-400">{selectedBooking.packageName}</div>
                        </div>
                      </div>

                      {/* Info Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 my-6 text-xs">
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Customer Contact:</span>
                          <span className="font-bold text-white">{selectedBooking.customerPhone}</span>
                          <span className="text-slate-400 block truncate">{selectedBooking.customerEmail || "N/A"}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Deployment Hub:</span>
                          <span className="font-bold text-white">{selectedBooking.location}</span>
                          <span className="text-teal-300 block">{selectedBooking.deliveryTime || "48-72h"}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Payment Status:</span>
                          <span className="font-bold text-emerald-400">
                            Advance: {selectedBooking.advancePaid || "Received"}
                          </span>
                          <span className="text-slate-400 block">Total: {selectedBooking.totalAmount || selectedBooking.packagePrice}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Milestone Progression:</span>
                          <span className="font-bold text-teal-300">{selectedBooking.milestone || "Step 3: Development"}</span>
                          <span className="text-slate-400 block">Step {selectedBooking.currentStep || 3} of 5</span>
                        </div>
                      </div>

                      {/* Notes / Special Instructions */}
                      {selectedBooking.notes && (
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs mb-6">
                          <div className="font-bold text-slate-300 mb-1">Project Notes &amp; Updates:</div>
                          <p className="text-slate-400 leading-relaxed">{selectedBooking.notes}</p>
                        </div>
                      )}

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                        {selectedBooking.demoUrl && selectedBooking.demoUrl !== "#" ? (
                          <a
                            href={selectedBooking.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-teal !py-2.5 !px-4 text-xs font-bold flex items-center gap-1.5 shadow-md"
                          >
                            <span>🌐 Open Live Deployed Site</span>
                            <span>↗</span>
                          </a>
                        ) : null}

                        <a
                          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                            `Namaste Sachin Sir! Mujhe Booking ID ${selectedBooking.bookingId} (${selectedBooking.serviceTitle}) ke status aur update ke baare me baat karni hai.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp !py-2.5 !px-4 text-xs font-bold flex items-center gap-1.5"
                        >
                          <Icon name="whatsapp" className="w-4 h-4" />
                          <span>Talk with Founder</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setActiveTab("tracker")}
                          className="btn-secondary !py-2.5 !px-4 text-xs"
                        >
                          View Step Tracker
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: LIVE MILESTONE TRACKER */}
              {activeTab === "tracker" && selectedBooking && (
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md max-w-4xl mx-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <div>
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                        Real-Time Project Roadmap
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                        {selectedBooking.serviceTitle} ({selectedBooking.bookingId})
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">
                      Step {selectedBooking.currentStep || 3} / 5 Active
                    </span>
                  </div>

                  <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-800">
                    {milestoneSteps.map((m) => {
                      const current = selectedBooking.currentStep || 3;
                      const isDone = m.step < current;
                      const isCurrent = m.step === current;
                      const isUpcoming = m.step > current;

                      return (
                        <div key={m.step} className="flex items-start gap-4 relative z-10">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                              isDone
                                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30"
                                : isCurrent
                                ? "bg-teal-400 text-slate-950 ring-4 ring-teal-400/20 animate-pulse font-black"
                                : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {isDone ? "✓" : m.step}
                          </div>

                          <div
                            className={`flex-1 p-4 rounded-2xl border transition-all ${
                              isCurrent
                                ? "bg-slate-950 border-teal-400/80 shadow-lg"
                                : isDone
                                ? "bg-slate-950/40 border-slate-800"
                                : "bg-slate-950/20 border-slate-800/40 opacity-60"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-white">{m.title}</h4>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isDone
                                    ? "bg-emerald-500/20 text-emerald-300"
                                    : isCurrent
                                    ? "bg-teal-500/20 text-teal-300"
                                    : "bg-slate-800 text-slate-500"
                                }`}
                              >
                                {isDone ? "Completed" : isCurrent ? "In Progress Now" : "Upcoming"}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: INVOICES & BILLING */}
              {activeTab === "invoices" && selectedBooking && (
                <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                        Official Digital Invoice
                      </div>
                      <h3 className="text-xl font-bold text-white mt-1">
                        Invoice #INV-{selectedBooking.bookingId.replace("SN-BK-", "")}
                      </h3>
                      <div className="text-xs text-slate-400">Date: {new Date(selectedBooking.createdAt || Date.now()).toLocaleDateString()}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="btn-outline !py-2 !px-3 text-xs"
                    >
                      🖨️ Print / Download
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 py-6 border-b border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-1">Billed To (Client):</span>
                      <div className="font-bold text-white text-sm">{selectedBooking.customerName}</div>
                      <div className="text-slate-300">{selectedBooking.businessName}</div>
                      <div className="text-slate-400">{selectedBooking.customerPhone}</div>
                      <div className="text-slate-400">{selectedBooking.location}</div>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-slate-400 block mb-1">Service Provider:</span>
                      <div className="font-bold text-white text-sm">{site.name}</div>
                      <div className="text-slate-300">Founder: {site.founder}</div>
                      <div className="text-slate-400">{site.address}</div>
                      <div className="text-slate-400">WhatsApp: +91 9931306292</div>
                    </div>
                  </div>

                  <div className="py-6 space-y-3">
                    <div className="flex justify-between font-bold text-slate-300 text-xs border-b border-slate-800 pb-2">
                      <span>Service Item</span>
                      <span>Amount (INR)</span>
                    </div>
                    <div className="flex justify-between text-sm text-white">
                      <div>
                        <div className="font-bold">{selectedBooking.serviceTitle}</div>
                        <div className="text-xs text-slate-400">{selectedBooking.packageName} · Next.js Full Stack Architecture</div>
                      </div>
                      <div className="font-bold">{selectedBooking.packagePrice}</div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal:</span>
                      <span>{selectedBooking.packagePrice}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>GST / Taxes:</span>
                      <span>₹0 (Promotional Waiver)</span>
                    </div>
                    <div className="flex justify-between text-sm font-extrabold text-emerald-400 pt-2 border-t border-slate-800">
                      <span>Total Invoice Amount:</span>
                      <span>{selectedBooking.packagePrice}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: HELPDESK & SUPPORT TICKETS */}
              {activeTab === "support" && (
                <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                      Priority Client Helpdesk
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Submit Revision or Inquiry</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our founder Sachin Kushwaha responds to client tickets within 2 hours.
                    </p>
                  </div>

                  {ticketSent ? (
                    <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center">
                      <div className="text-3xl mb-2">✓</div>
                      <h4 className="text-base font-bold text-white">Ticket Submitted Successfully!</h4>
                      <p className="text-xs text-slate-300 mt-1 mb-4">
                        We have logged your ticket. You can also chat directly on WhatsApp for immediate resolution.
                      </p>
                      <a
                        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                          `Namaste Sachin Sir! Maine Client Portal se support ticket submit kiya hai.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp !py-2 !px-4 text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <Icon name="whatsapp" className="w-4 h-4" />
                        <span>Open WhatsApp Chat</span>
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Subject / Request Type
                        </label>
                        <input
                          type="text"
                          required
                          value={ticketSubject}
                          onChange={(e) => setTicketSubject(e.target.value)}
                          placeholder="e.g. Change banner image / Add payment gateway / Domain query"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-teal-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Detailed Description
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={ticketMessage}
                          onChange={(e) => setTicketMessage(e.target.value)}
                          placeholder="Describe the change, feature request, or issue in detail..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-teal-400"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-teal w-full !py-3 text-sm font-bold flex items-center justify-center gap-2"
                      >
                        <span>Submit Ticket</span>
                        <span>→</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </PageSection>
    </>
  );
}

