"use client";

import { useState } from "react";
import PageSection from "../PageSection";
import Icon from "../Icon";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageSection alt>
      <div className="container-x">
        <div className="glass-card-premium card-p-lg !rounded-2xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="section-badge">Stay Updated</span>
            <h2 className="mt-4 heading-md">Get Tech Tips &amp; Offers</h2>
            <p className="mt-3 text-body">
              Subscribe for website tips, AI updates, and exclusive discounts on software development.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="field flex-1"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                className="btn-primary shrink-0"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "..." : "Subscribe"}
                <Icon name="arrow" className="w-4 h-4" />
              </button>
            </div>
            {status === "success" && (
              <p className="text-sm text-emerald-400">Subscribed! Check your inbox soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Try again.</p>
            )}
            <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </PageSection>
  );
}
