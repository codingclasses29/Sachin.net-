"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const adminSidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "erp" },
  { label: "Leads", href: "/admin/leads", icon: "mail" },
  { label: "Locations", href: "/admin/locations", icon: "pin" },
  { label: "AI Analytics", href: "/admin/ai-analytics", icon: "code" },
  { label: "Settings", href: "/admin/settings", icon: "shield" },
];

export default function AdminLocationsPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRegion, setFilterRegion] = useState("all"); // "all" | "bihar" | "up" | "pan-india"
  const [showAddModal, setShowAddModal] = useState(false);

  // New location form
  const [newLocation, setNewLocation] = useState({
    name: "",
    district: "",
    state: "Bihar",
    type: "Regional Service Hub",
    address: "",
    deliverySpeed: "48 Hours Delivery",
    phone: "+91 9931306292",
    description: "",
  });

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/locations");
      const data = await res.json();
      if (data.ok) {
        setLocations(data.locations || []);
      }
    } catch (err) {
      console.error("Location fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddLocation = async (e) => {
    e.preventDefault();
    if (!newLocation.name || !newLocation.district) return;

    try {
      const res = await fetch("/api/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLocation),
      });
      const data = await res.json();
      if (data.ok) {
        setLocations([...locations, data.location]);
        setShowAddModal(false);
        setNewLocation({
          name: "",
          district: "",
          state: "Bihar",
          type: "Regional Service Hub",
          address: "",
          deliverySpeed: "48 Hours Delivery",
          phone: "+91 9931306292",
          description: "",
        });
      }
    } catch (err) {
      alert("Error adding location: " + err.message);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === "Active" ? "Expanding" : "Active";
    try {
      const res = await fetch("/api/locations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const data = await res.json();
      if (data.ok) {
        setLocations(locations.map((loc) => (loc.id === id ? { ...loc, status: nextStatus } : loc)));
      }
    } catch (err) {
      alert("Update status error: " + err.message);
    }
  };

  const filtered = locations.filter((loc) => {
    if (filterRegion === "bihar") return loc.state === "Bihar";
    if (filterRegion === "up") return loc.state.includes("Pradesh") || loc.state.includes("Delhi");
    if (filterRegion === "pan-india") return loc.state === "Pan-India";
    return true;
  });

  const totalClients = locations.reduce((sum, l) => sum + (l.activeClients || 0), 0);
  const totalPartners = locations.reduce((sum, l) => sum + (l.partnersCount || 0), 0);

  return (
    <div className="min-h-screen flex bg-dark">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar w-64 shrink-0 hidden md:flex flex-col p-5">
        <Link href="/" className="font-bold text-lg text-white mb-8">
          Sachin<span className="text-primary-light">.net</span>
          <span className="block text-[10px] text-slate-400 font-normal">Admin Panel</span>
        </Link>
        <nav className="space-y-1 flex-1">
          {adminSidebarLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                l.href === "/admin/locations"
                  ? "bg-primary/15 text-primary-light font-bold"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon name={l.icon} className="w-4 h-4" />
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="text-sm text-slate-400 hover:text-white px-3 py-2">
          ← Back to Site
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Location Hubs &amp; Service Coverage</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                Live Network
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Manage district hubs across Bihar, UP, NCR and pan-India with assigned partners &amp; clients.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="btn-teal !py-2 !px-4 text-xs font-bold flex items-center gap-1.5"
            >
              <span>+ Add Service Location</span>
            </button>
            <Link href="/admin/dashboard" className="btn-outline !py-2 !px-3 text-xs">
              Dashboard
            </Link>
          </div>
        </div>

        {/* Location Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">{locations.length}</p>
            <p className="text-xs text-slate-400 mt-1">Total Service Hubs</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{totalClients}+</p>
            <p className="text-xs text-slate-400 mt-1">Local Business Clients</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">{totalPartners}</p>
            <p className="text-xs text-slate-400 mt-1">District Partners Assigned</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Siwan (HQ)</p>
            <p className="text-xs text-slate-400 mt-1">Primary Development Base</p>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: "all", label: `All Regions (${locations.length})` },
            { id: "bihar", label: "Bihar Districts" },
            { id: "up", label: "UP & Delhi NCR" },
            { id: "pan-india", label: "Pan-India Cloud" },
          ].map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setFilterRegion(r.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterRegion === r.id
                  ? "bg-teal-500 text-slate-950 shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Location Hubs Cards Grid */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="loader-ring mx-auto mb-2" />
            <div className="text-xs text-slate-400">Loading location hubs...</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((loc) => (
              <div
                key={loc.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                      {loc.badge || loc.district}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleStatus(loc.id, loc.status)}
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                        loc.status === "Active"
                          ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                      }`}
                      title="Click to toggle status"
                    >
                      ● {loc.status}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {loc.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">
                    {loc.type} · {loc.state}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{loc.description}</p>

                  {/* Hub Stats */}
                  <div className="grid grid-cols-2 gap-2 my-4 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Active Clients:</span>
                      <span className="font-bold text-emerald-400 text-sm">{loc.activeClients}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">District Partners:</span>
                      <span className="font-bold text-amber-400 text-sm">{loc.partnersCount}</span>
                    </div>
                  </div>

                  {/* Popular services in location */}
                  {loc.popularServices && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {loc.popularServices.map((ps, pi) => (
                        <span
                          key={pi}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {ps}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate">⏱️ {loc.deliverySpeed}</span>
                  <a
                    href={`https://wa.me/919931306292?text=${encodeURIComponent(
                      `Namaste Sachin Sir! Location Hub '${loc.name}' ke status aur leads ke baare me discuss karna hai.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline font-semibold"
                  >
                    Hub Connect →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ADD LOCATION MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <div className="rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold text-white mb-1">Add New Service Location Hub</h2>
              <p className="text-xs text-slate-400 mb-6">
                Add a new district, city or division to expand Sachin.net&apos;s active coverage network.
              </p>

              <form onSubmit={handleAddLocation} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">City / Location</label>
                    <input
                      type="text"
                      required
                      value={newLocation.name}
                      onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                      placeholder="e.g. Bhagalpur"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">District</label>
                    <input
                      type="text"
                      required
                      value={newLocation.district}
                      onChange={(e) => setNewLocation({ ...newLocation, district: e.target.value })}
                      placeholder="e.g. Bhagalpur"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">State</label>
                    <select
                      value={newLocation.state}
                      onChange={(e) => setNewLocation({ ...newLocation, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                    >
                      <option value="Bihar">Bihar</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Pan-India">Pan-India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Hub Type</label>
                    <select
                      value={newLocation.type}
                      onChange={(e) => setNewLocation({ ...newLocation, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                    >
                      <option value="Regional Service Hub">Regional Service Hub</option>
                      <option value="Commercial Tech Hub">Commercial Tech Hub</option>
                      <option value="Franchise Center">Franchise Center</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Office / Support Address</label>
                  <input
                    type="text"
                    value={newLocation.address}
                    onChange={(e) => setNewLocation({ ...newLocation, address: e.target.value })}
                    placeholder="e.g. Station Road, Bhagalpur, Bihar"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Description / Market Focus</label>
                  <textarea
                    rows={2}
                    value={newLocation.description}
                    onChange={(e) => setNewLocation({ ...newLocation, description: e.target.value })}
                    placeholder="Focus services e.g. Silk industry websites, local schools, clinic software..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-teal-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="btn-secondary !py-2 !px-4 text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-teal !py-2 !px-4 text-xs font-bold"
                  >
                    Add Location Hub
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

