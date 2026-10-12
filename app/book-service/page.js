"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Icon from "@/components/Icon";
import { bookingServices, serviceLocations, site } from "@/lib/data";

export default function BookServicePage() {
  const [selectedServiceId, setSelectedServiceId] = useState(bookingServices[0].id);
  const selectedService = bookingServices.find((s) => s.id === selectedServiceId) || bookingServices[0];
  const [selectedPackage, setSelectedPackage] = useState(selectedService.packages[0]);

  // Project Configuration
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    businessName: "",
    location: "Siwan",
    deliveryTime: "48-72 Hours",
    requirements: "",
    needPaymentGateway: true,
    needAdminPanel: true,
    needDomainSSL: true,
    needSEO: true,
  });

  const [loading, setLoading] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleServiceChange = (serviceId) => {
    setSelectedServiceId(serviceId);
    const newService = bookingServices.find((s) => s.id === serviceId);
    if (newService && newService.packages.length > 0) {
      setSelectedPackage(newService.packages[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.customerName.trim() || !formData.customerPhone.trim()) {
      setErrorMsg("Please provide your Name and WhatsApp Mobile number.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail,
        businessName: formData.businessName,
        serviceTitle: selectedService.title,
        packageName: selectedPackage.name,
        packagePrice: selectedPackage.price,
        location: formData.location,
        deliveryTime: formData.deliveryTime,
        requirements: formData.requirements,
        needPaymentGateway: formData.needPaymentGateway,
        needAdminPanel: formData.needAdminPanel,
        needDomainSSL: formData.needDomainSSL,
        needSEO: formData.needSEO,
      };

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit booking.");
      }

      // Also persist to localStorage for client dashboard
      try {
        const existing = JSON.parse(localStorage.getItem("sachin_net_user_bookings") || "[]");
        existing.unshift(data.booking);
        localStorage.setItem("sachin_net_user_bookings", JSON.stringify(existing));
        localStorage.setItem("sachin_net_current_booking_id", data.booking.bookingId);
        localStorage.setItem("sachin_net_user_phone", formData.customerPhone);
      } catch (err) {
        console.warn("LocalStorage save warning:", err);
      }

      setBookingResult(data.booking);
    } catch (err) {
      setErrorMsg(err.message || "Network error. Please try again or WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppMessage = (booking) => {
    const text = `Namaste Sachin Kushwaha Sir! Maine Sachin.net par booking ki hai.
📋 Booking ID: ${booking.bookingId}
👤 Name: ${booking.customerName}
📱 Phone: ${booking.customerPhone}
🏢 Business: ${booking.businessName || "N/A"}
🌐 Service: ${booking.serviceTitle} (${booking.packageName})
💰 Price: ${booking.packagePrice}
📍 Location: ${booking.location}
Kripya project verification aur discussion start karein.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHeader
        badge="Instant Service Booking"
        title="Book Your Custom Website or"
        highlight="Software ERP Solution"
        desc="Choose your package, customize requirements, and get assigned to founder Sachin Kushwaha directly. No hidden charges · Fast delivery across Bharat."
      />

      <PageSection first className="!pt-6 !pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: "shield", title: "100% Secure Code", desc: "Clean Next.js & React" },
              { icon: "rocket", title: "Fast Delivery", desc: "24h to 7-Day Turnaround" },
              { icon: "pin", title: "Direct Founder Touch", desc: "Sachin Kushwaha (Siwan)" },
              { icon: "support", title: "24x7 IST Support", desc: "WhatsApp & Call Access" },
            ].map((g, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                  <Icon name={g.icon} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">{g.title}</div>
                  <div className="text-[11px] text-slate-400">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {bookingResult ? (
            /* SUCCESS CONFIRMATION RECEIPT */
            <div className="rounded-3xl bg-slate-900/95 border border-emerald-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl animate-fade-in">
              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  Booking Confirmed · ID Generated
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                  Thank You, {bookingResult.customerName}!
                </h2>
                <p className="text-sm text-slate-300 mt-2">
                  Your project booking is registered successfully. Your unique Booking ID is:
                </p>
                <div className="my-3 py-2 px-6 rounded-2xl bg-slate-950 border border-teal-500/50 inline-block font-mono text-xl sm:text-2xl font-black text-teal-300 tracking-wider">
                  {bookingResult.bookingId}
                </div>
              </div>

              {/* Booking Summary Card */}
              <div className="max-w-2xl mx-auto rounded-2xl bg-slate-950/80 border border-slate-800 p-5 sm:p-6 mb-8 space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Selected Service:</span>
                  <span className="font-bold text-white">{bookingResult.serviceTitle}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Package Selected:</span>
                  <span className="font-bold text-amber-300">{bookingResult.packageName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Estimated Investment:</span>
                  <span className="font-extrabold text-emerald-400 text-base">{bookingResult.packagePrice}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Location Hub:</span>
                  <span className="font-semibold text-white">{bookingResult.location}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Current Status:</span>
                  <span className="font-bold text-teal-300">Step 1: Under Founder Review</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                <a
                  href={getWhatsAppMessage(bookingResult)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto !py-3 !px-6 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  <span>Confirm on WhatsApp With Sachin Sir</span>
                </a>

                <Link
                  href="/customer/dashboard"
                  className="btn-teal w-full sm:w-auto !py-3 !px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>Open Client Dashboard →</span>
                </Link>
              </div>

              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => setBookingResult(null)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Book another project
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM */
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Service & Package Chooser */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Category Tabs */}
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>1️⃣</span>
                      <span>Select Service Category</span>
                    </span>
                    <span className="text-xs text-slate-400">8 High-Demand Solutions</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {bookingServices.map((svc) => {
                      const active = svc.id === selectedServiceId;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => handleServiceChange(svc.id)}
                          className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                            active
                              ? "bg-teal-500/15 border-teal-400 text-white shadow-md shadow-teal-950/50"
                              : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg">
                              {svc.id === "website"
                                ? "🌐"
                                : svc.id === "school-erp"
                                ? "🏫"
                                : svc.id === "ecommerce"
                                ? "🛒"
                                : svc.id === "ngo-portal"
                                ? "🤝"
                                : svc.id === "hospital"
                                ? "🏥"
                                : svc.id === "mobile-app"
                                ? "📱"
                                : svc.id === "bug-fix"
                                ? "⚙️"
                                : "🤖"}
                            </span>
                            {active && <span className="w-2 h-2 rounded-full bg-teal-400" />}
                          </div>
                          <div className="text-xs font-bold leading-tight line-clamp-1">{svc.title}</div>
                          <div className="text-[10px] text-teal-300/80 mt-1">From {svc.priceStarting}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Package Selector for Chosen Service */}
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>2️⃣</span>
                      <span>Choose Package for {selectedService.title}</span>
                    </span>
                    <span className="text-xs text-amber-300 font-semibold">Transparent Pricing</span>
                  </div>

                  <div className="space-y-3">
                    {selectedService.packages.map((pkg, idx) => {
                      const isSelected = selectedPackage.name === pkg.name;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isSelected
                              ? "bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border-teal-400 shadow-lg"
                              : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="pt-0.5">
                              <input
                                type="radio"
                                name="packageSelection"
                                checked={isSelected}
                                onChange={() => setSelectedPackage(pkg)}
                                className="w-4 h-4 text-teal-400 accent-teal-400"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white flex items-center gap-2">
                                <span>{pkg.name}</span>
                                {pkg.time && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                    ⏱️ {pkg.time}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pkg.desc}</p>
                            </div>
                          </div>

                          <div className="sm:text-right shrink-0">
                            <div className="text-lg font-extrabold text-emerald-400">{pkg.price}</div>
                            <div className="text-[10px] text-slate-400">All Included</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Included Features Checklist */}
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 backdrop-blur-md">
                  <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span>3️⃣</span>
                    <span>Standard Included Features</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { key: "needDomainSSL", label: "Free SSL & Security" },
                      { key: "needPaymentGateway", label: "WhatsApp & Contact Connect" },
                      { key: "needAdminPanel", label: "Admin CMS Dashboard" },
                      { key: "needSEO", label: "Mobile Responsive & SEO" },
                    ].map((feat) => (
                      <label
                        key={feat.key}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-200 cursor-pointer hover:border-slate-700"
                      >
                        <input
                          type="checkbox"
                          checked={formData[feat.key]}
                          onChange={(e) => setFormData({ ...formData, [feat.key]: e.target.checked })}
                          className="w-4 h-4 text-teal-400 rounded accent-teal-400"
                        />
                        <span className="font-medium truncate">{feat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Customer Details & Submission Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-24 rounded-3xl bg-slate-900/95 border border-teal-500/30 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Step 4: Your Details
                      </span>
                      <h3 className="text-lg font-black text-white mt-0.5">Booking Information</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs border border-teal-400/30">
                      {selectedPackage.price}
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="mt-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        placeholder="e.g. Rakesh Kumar / Dr. Arvind"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          WhatsApp Mobile <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.customerPhone}
                          onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                          placeholder="+91 99313 XXXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.customerEmail}
                          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                          placeholder="client@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business / School / Hospital Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Modern Public School / ShopKart"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Location / District
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                        >
                          {serviceLocations.map((loc) => (
                            <option key={loc.id} value={`${loc.name} (${loc.state})`}>
                              {loc.name} · {loc.badge}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Urgency / Delivery
                        </label>
                        <select
                          value={formData.deliveryTime}
                          onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                        >
                          <option value="Urgent 48 Hours">Urgent 48 Hours</option>
                          <option value="Standard 4-7 Days">Standard 4-7 Days</option>
                          <option value="Flexible 2 Weeks">Flexible 2 Weeks</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Specific Requirements / Reference Website
                      </label>
                      <textarea
                        rows={2}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="Any special design ideas, reference links, or questions..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-teal-400 transition-colors"
                      />
                    </div>

                    {/* Summary Box */}
                    <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-white">
                        <span>{selectedPackage.name}</span>
                        <span className="text-emerald-400 text-sm">{selectedPackage.price}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Zero Risk · Pay advance only after design approval · 100% money back guarantee
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-teal w-full !py-3.5 text-sm font-black flex items-center justify-center gap-2 shadow-xl shadow-teal-950/60"
                    >
                      {loading ? (
                        <>
                          <span className="loader-ring !w-4 !h-4" />
                          <span>Generating Booking ID...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Now &amp; Get Booking ID</span>
                          <span className="text-base">→</span>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <Link href="/customer/dashboard" className="text-teal-400 hover:underline">
                      Already have a booking? Track Status →
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

