"use client";

import Link from "next/link";

export default function AdminAIAnalytics() {
  return (
    <div className="min-h-screen bg-dark p-6 lg:p-8">
      <Link href="/admin/dashboard" className="text-sm text-primary-light">← Dashboard</Link>
      <h1 className="text-xl font-bold text-white mt-4 mb-6">AI Usage Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="font-semibold text-white mb-4">Traffic by Tool</h2>
          {["Chatbot", "Blog Writer", "Code Gen", "ML Demo", "Resume Builder"].map((t, i) => (
            <div key={t} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">{t}</span>
                <span className="text-slate-500">{[1240, 680, 420, 310, 290][i]}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${[85, 62, 45, 35, 30][i]}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card p-6">
          <h2 className="font-semibold text-white mb-4">Revenue Prediction (ML)</h2>
          <p className="text-3xl font-bold gradient-text">₹2.4L</p>
          <p className="text-sm text-slate-400 mt-1">Predicted next month based on lead pipeline</p>
        </div>
      </div>
    </div>
  );
}
