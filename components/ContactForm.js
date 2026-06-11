"use client";

import { useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/data";

const serviceOptions = [
  "Website Development",
  "School Management System",
  "E-Commerce Website",
  "ERP Software",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceOptions[0],
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Project Enquiry — Sachin.net*\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Service: ${form.service}\n` +
        `Message: ${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus({
          type: "success",
          text: `✓ ${data.message || "Enquiry sent! Hum jald contact karenge."}`,
        });
        setForm({ name: "", phone: "", email: "", service: serviceOptions[0], message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.error || "Send failed. WhatsApp se bhi try karein.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error. Neeche WhatsApp button se direct message karein.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/[0.04] border border-slate-700/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="glass-card !transform-none p-5 sm:p-7 md:p-9 space-y-4 sm:space-y-5">
      <h3 className="text-xl font-bold text-white">Get Your Free Quote</h3>
      <p className="text-sm text-slate-400 -mt-3">
        Form submit karein — Email + WhatsApp alert turant admin ko jayega.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <input
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
          disabled={loading}
        />
        <input
          required
          type="tel"
          placeholder="Phone / WhatsApp Number *"
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
          disabled={loading}
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={update("email")}
        className={inputClass}
        disabled={loading}
      />

      <select
        value={form.service}
        onChange={update("service")}
        className={inputClass}
        disabled={loading}
      >
        {serviceOptions.map((s) => (
          <option key={s} value={s} className="bg-dark-2">
            {s}
          </option>
        ))}
      </select>

      <textarea
        required
        rows={4}
        placeholder="Tell us about your project... *"
        value={form.message}
        onChange={update("message")}
        className={inputClass}
        disabled={loading}
      />

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
        {!loading && <Icon name="arrow" className="w-4 h-4" />}
      </button>

      <button
        type="button"
        onClick={openWhatsApp}
        className="btn-whatsapp w-full"
        disabled={loading}
      >
        <Icon name="whatsapp" className="w-4 h-4" />
        WhatsApp Direct
      </button>

      {status.text && (
        <p
          className={`text-sm text-center ${
            status.type === "success" ? "text-accent" : "text-amber-400"
          }`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
