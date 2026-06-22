import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

export async function GET(request) {
  const admin = await requireAdmin(request);
  if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  if (!isDBConfigured()) {
    return NextResponse.json({ ok: true, leads: [], dbConnected: false });
  }

  try {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(100).lean();
    return NextResponse.json({ ok: true, leads, dbConnected: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to load leads." }, { status: 500 });
  }
}

export async function PATCH(request) {
  const admin = await requireAdmin(request);
  if (!admin) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const { id, status } = await request.json();
  if (!id || !status) {
    return NextResponse.json({ ok: false, error: "ID and status required." }, { status: 400 });
  }

  if (!isDBConfigured()) {
    return NextResponse.json({ ok: true, message: "Updated (demo mode)." });
  }

  try {
    await connectDB();
    await Lead.findByIdAndUpdate(id, { status });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Update failed." }, { status: 500 });
  }
}
