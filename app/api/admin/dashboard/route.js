import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

export async function GET(request) {
  const admin = await requireAdmin(request);
  if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  if (!isDBConfigured()) {
    return NextResponse.json({
      ok: true,
      stats: { leads: 0, blogs: 4, services: 24, users: 1 },
      recentLeads: [],
      dbConnected: false,
    });
  }

  try {
    await connectDB();
    const [leadsCount, recentLeads] = await Promise.all([
      Lead.countDocuments(),
      Lead.find().sort({ createdAt: -1 }).limit(10).lean(),
    ]);

    return NextResponse.json({
      ok: true,
      stats: { leads: leadsCount, blogs: 4, services: 24, users: 1 },
      recentLeads,
      dbConnected: true,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Dashboard load failed." }, { status: 500 });
  }
}
