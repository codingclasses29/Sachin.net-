"use client";

import { useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/data";

export default function CourseModal({ isOpen, onClose, course = null }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "Live Online",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: `Interested in Course: ${course?.title || "IT Training"} | Mode: ${formData.mode}`,
          service: course?.title || "Course Enquiry",
          source: "Course Modal",
        }),
      });
    } catch {
      // Continue even if network error
    }

    setLoading(false);
    setSubmitted(true);

    // Also trigger WhatsApp redirect with prepopulated message
    const waText = encodeURIComponent(
      `Hello Sachin Kushwaha Sir! I want to enquire about "${course?.title || "IT Course"}" at sachin.Net.\nName: ${formData.name}\nPhone: ${formData.phone}\nMode: ${formData.mode}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${waText}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0c182b] border border-blue-500/30 p-6 sm:p-8 shadow-2xl shadow-blue-500/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
              <Icon name="checkCircle" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Enquiry Submitted!</h3>
            <p className="text-slate-300 text-sm mb-6">
              Thank you {formData.name}. Sachin Kushwaha and our senior admissions team will contact you shortly on WhatsApp (+91 {formData.phone}).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-2.5 px-5 text-sm"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
              <button
                onClick={onClose}
                className="btn-outline py-2.5 px-5 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Icon name="bookOpen" className="w-3.5 h-3.5" />
              Course Enquiry &amp; Demo Class
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              {course ? course.title : "Get Course Syllabus & Free Demo"}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-5">
              100% Placement Support • 1-on-1 Mentorship by Sachin Kushwaha • Live Projects
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  WhatsApp Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9931306292"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Preferred Learning Mode
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Live Online Interactive">Live Online Interactive (Pan-India)</option>
                  <option value="Classroom Lab (Siwan, Bihar)">Classroom Lab (Siwan, Bihar)</option>
                  <option value="Classroom Lab (Noida NCR)">Classroom Lab (Noida NCR)</option>
                  <option value="Weekend Special Batch">Weekend Special Batch</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Icon name="rocket" className="w-4 h-4" />
                  {loading ? "Submitting..." : "Get Syllabus & Book Free Demo"}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                🔒 Your details are 100% confidential. No spam guaranteed. Direct WhatsApp support: +91 9931306292.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
