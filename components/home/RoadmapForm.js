"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function RoadmapForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Data Analytics Pro & AI",
    goal: "Switching to IT / First Job",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          service: `Roadmap: ${formData.course}`,
          message: `Personalized Roadmap Request for course "${formData.course}" | Career Goal: ${formData.goal}`,
          source: "Roadmap Section Form",
        }),
      });
    } catch {
      // Continue even on network issue
    }

    setLoading(false);
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello Sachin Kushwaha Sir! I requested a Personalized Learning Roadmap on sachin.Net.\nName: ${formData.name}\nWhatsApp: ${formData.phone}\nCourse: ${formData.course}\nGoal: ${formData.goal}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${waText}`, "_blank");
  };

  return (
    <section id="roadmap" className="py-16 sm:py-20 bg-gradient-to-b from-[#071120] to-[#0a1628] text-white">
      <div className="container-x">
        <div className="rounded-3xl bg-gradient-to-br from-[#0f2142] via-[#0d1a33] to-[#091325] border border-blue-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                Free 1-on-1 Career Consultation
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Get a Personalized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Learning Roadmap
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Confused about which tech stack matches your background? Speak directly with Sachin Kushwaha and senior industry mentors.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-white text-sm">Free Profile Evaluation:</span>
                    <span className="text-slate-300 text-xs sm:text-sm"> Detailed assessment of your tech skills &amp; resume.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-white text-sm">Customized Course Track:</span>
                    <span className="text-slate-300 text-xs sm:text-sm"> Learn only what tech companies actually hire for in 2026.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-white text-sm">Up to 50% Scholarship:</span>
                    <span className="text-slate-300 text-xs sm:text-sm"> Merit &amp; early bird admission concessions available.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3 text-sm text-slate-300">
                <span className="text-xs text-slate-400">Direct Helpline:</span>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="phone" className="w-4 h-4 text-emerald-400" />
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#09152b] border border-slate-700/80 p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                      <Icon name="checkCircle" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Roadmap Requested!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm mb-6">
                      Thank you {formData.name}. Sachin Kushwaha&apos;s team will call you at +91 {formData.phone} shortly.
                    </p>
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp py-2.5 px-5 text-sm inline-flex items-center gap-2"
                    >
                      <Icon name="whatsapp" className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      Request a Call Back
                    </h3>
                    <p className="text-xs text-slate-400 mb-5">
                      Fill out your details to receive the complete syllabus and counseling call.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            WhatsApp Number <span className="text-rose-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9931306292"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Email (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="you@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Select Interested Course
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option value="Data Analytics Pro & AI">Master Data Analytics Pro &amp; AI</option>
                          <option value="Python Full Stack Developer">Python Full Stack Developer</option>
                          <option value="MERN Stack Web Development">MERN Stack Web Development (Next.js)</option>
                          <option value="Java Full Stack Masterclass">Java Full Stack &amp; Spring Boot</option>
                          <option value="Cloud Computing & AWS DevOps">Cloud Computing &amp; AWS DevOps</option>
                          <option value="Artificial Intelligence & ML">Artificial Intelligence &amp; ML (GenAI)</option>
                          <option value="Mobile App Development">Mobile App Development (Flutter/React Native)</option>
                          <option value="Cyber Security & Pentesting">Cyber Security &amp; Ethical Hacking</option>
                          <option value="Website Development Service">Custom Website / Software Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Your Current Goal
                        </label>
                        <select
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option value="College Student Seeking First Job">College Student Seeking First Job</option>
                          <option value="Non-IT to IT Career Switch">Non-IT to IT Career Switch</option>
                          <option value="Working Professional Seeking Salary Hike">Working Professional Seeking Salary Hike</option>
                          <option value="Freelancing & Software Projects">Freelancing &amp; Building Software</option>
                        </select>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 font-bold text-white shadow-lg shadow-blue-600/30 transition-all text-sm flex items-center justify-center gap-2"
                        >
                          <Icon name="rocket" className="w-4 h-4" />
                          {loading ? "Submitting..." : "Get Free Counseling & Demo"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
