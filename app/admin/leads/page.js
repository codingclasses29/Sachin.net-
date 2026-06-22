"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLeads() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((r) => r.json())
      .then((d) => {
        if (!d.ok) router.push("/admin/login");
        else setLeads(d.leads || []);
      });
  }, [router]);

  const updateStatus = async (id, status) => {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
  };

  return (
    <div className="min-h-screen bg-dark p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/dashboard" className="text-sm text-primary-light">← Dashboard</Link>
        <h1 className="text-xl font-bold text-white">Manage Leads</h1>
      </div>
      <div className="glass-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">No leads in database yet.</td></tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead._id} className="border-b border-slate-800/50">
                  <td className="p-4 text-white">{lead.name}</td>
                  <td className="p-4 text-slate-400">{lead.phone}</td>
                  <td className="p-4 text-slate-400">{lead.service}</td>
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                      className="bg-dark-2 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="p-4 text-slate-500 text-xs">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
