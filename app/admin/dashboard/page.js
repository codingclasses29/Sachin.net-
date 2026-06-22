"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "erp" },
  { label: "Leads", href: "/admin/leads", icon: "mail" },
  { label: "AI Analytics", href: "/admin/ai-analytics", icon: "code" },
  { label: "Settings", href: "/admin/settings", icon: "shield" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((r) => r.json())
      .then((d) => {
        if (!d.ok) router.push("/admin/login");
        else setData(d);
      })
      .catch(() => router.push("/admin/login"))
      .finally(() => setLoading(false));
  }, [router]);

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader-ring" />
      </div>
    );
  }

  const stats = data?.stats || {};

  return (
    <div className="min-h-screen flex bg-dark">
      <aside className="admin-sidebar w-64 shrink-0 hidden md:flex flex-col p-5">
        <Link href="/" className="font-bold text-lg text-white mb-8">
          Sachin<span className="text-primary-light">.net</span>
        </Link>
        <nav className="space-y-1 flex-1">
          {sidebarLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                l.href === "/admin/dashboard"
                  ? "bg-primary/15 text-primary-light"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon name={l.icon} className="w-4 h-4" />
              {l.label}
            </Link>
          ))}
        </nav>
        <button type="button" onClick={logout} className="text-sm text-red-400 hover:text-red-300 text-left px-3 py-2">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-sm text-slate-400">
              {data?.dbConnected ? "MongoDB connected" : "Demo mode — set MONGODB_URI for live data"}
            </p>
          </div>
          <Link href="/" className="btn-outline !py-2 !px-4 text-sm">View Site</Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: stats.leads || 0, color: "#3b82f6" },
            { label: "Blog Posts", value: stats.blogs || 0, color: "#8b5cf6" },
            { label: "Services", value: stats.services || 0, color: "#10b981" },
            { label: "Users", value: stats.users || 0, color: "#f59e0b" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-5">
              <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h2 className="font-semibold text-white mb-4">Recent Leads</h2>
            {data?.recentLeads?.length ? (
              <ul className="space-y-3">
                {data.recentLeads.map((lead) => (
                  <li key={lead._id} className="flex justify-between text-sm border-b border-slate-800 pb-2">
                    <span className="text-white">{lead.name}</span>
                    <span className="text-slate-500">{lead.service}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">No leads yet. Contact form submissions appear here.</p>
            )}
          </div>

          <div className="glass-card p-6">
            <h2 className="font-semibold text-white mb-4">AI Usage Analytics</h2>
            <div className="space-y-3">
              {[
                { tool: "AI Chatbot", uses: 1240, pct: 85 },
                { tool: "Blog Writer", uses: 680, pct: 62 },
                { tool: "Code Generator", uses: 420, pct: 45 },
                { tool: "ML Sentiment", uses: 310, pct: 35 },
              ].map((a) => (
                <div key={a.tool}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{a.tool}</span>
                    <span className="text-slate-500">{a.uses}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
