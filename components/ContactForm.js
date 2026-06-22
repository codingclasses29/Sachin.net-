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
  "AI & Machine Learning",
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

  return (
    <form onSubmit={handleSubmit} className="card card-static card-p-lg space-y-4 sm:space-y-5">
      <div>
        <h3 className="heading-sm">Get Your Free Quote</h3>
        <p className="text-muted mt-1">
          Form submit karein — Email + WhatsApp alert turant admin ko jayega.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={update("name")}
          className="field"
          disabled={loading}
        />
        <input
          required
          type="tel"
          placeholder="Phone / WhatsApp *"
          value={form.phone}
          onChange={update("phone")}
          className="field"
          disabled={loading}
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={update("email")}
        className="field"
        disabled={loading}
      />

      <select value={form.service} onChange={update("service")} className="field" disabled={loading}>
        {serviceOptions.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <textarea
        required
        rows={4}
        placeholder="Tell us about your project... *"
        value={form.message}
        onChange={update("message")}
        className="field resize-none"
        disabled={loading}
      />

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
        {!loading && <Icon name="arrow" className="w-4 h-4" />}
      </button>

      <button type="button" onClick={openWhatsApp} className="btn-whatsapp w-full" disabled={loading}>
        <Icon name="whatsapp" className="w-4 h-4" />
        WhatsApp Direct
      </button>

      {status.text && (
        <p className={`text-sm text-center ${status.type === "success" ? "text-accent-green" : "text-amber-400"}`}>
          {status.text}
        </p>
      )}
    </form>
  );
}
