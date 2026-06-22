"use client";

import Link from "next/link";

export default function AdminSettings() {
  return (
    <div className="min-h-screen bg-dark p-6 lg:p-8 max-w-2xl">
      <Link href="/admin/dashboard" className="text-sm text-primary-light">← Dashboard</Link>
      <h1 className="text-xl font-bold text-white mt-4 mb-6">Settings</h1>
      <div className="glass-card p-6 space-y-4 text-sm text-slate-400">
        <p>Configure environment variables in Netlify dashboard or <code className="text-cyan-400">.env.local</code>:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>MONGODB_URI — Database connection</li>
          <li>JWT_SECRET — Admin authentication</li>
          <li>ADMIN_EMAIL / ADMIN_PASSWORD — Demo admin login</li>
          <li>GEMINI_API_KEY — AI chatbot & tools</li>
          <li>ML_SERVICE_URL — Python ML service URL</li>
        </ul>
      </div>
    </div>
  );
}
