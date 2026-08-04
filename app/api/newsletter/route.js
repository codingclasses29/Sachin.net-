import { NextResponse } from "next/server";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (isDBConfigured()) {
      try {
        await connectDB();
        await Lead.create({
          name: "Newsletter Subscriber",
          phone: "N/A",
          email: email.trim(),
          message: `Newsletter subscription: ${email.trim()}`,
          service: "Newsletter",
          source: "newsletter",
        });
      } catch {
        // still return success for UX if DB fails
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
