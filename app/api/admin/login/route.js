import { NextResponse } from "next/server";
import { connectDB, isDBConfigured } from "@/lib/mongodb";
import User from "@/lib/models/User";
import { signToken } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email?.trim() || !password) {
      return NextResponse.json({ ok: false, error: "Email and password required." }, { status: 400 });
    }

    if (!isDBConfigured()) {
      const adminEmail = process.env.ADMIN_EMAIL || "admin@sachin.net";
      const adminPass = process.env.ADMIN_PASSWORD || "admin123";
      if (email.trim().toLowerCase() === adminEmail.toLowerCase() && password === adminPass) {
        const token = signToken({ id: "local-admin", email: adminEmail, role: "admin" });
        const res = NextResponse.json({ ok: true, user: { email: adminEmail, role: "admin", name: "Admin" } });
        res.cookies.set("admin_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 60 * 60 * 24 * 7, path: "/" });
        return res;
      }
      return NextResponse.json({ ok: false, error: "Invalid credentials." }, { status: 401 });
    }

    await connectDB();
    const user = await User.findOne({ email: email.trim().toLowerCase() }).select("+password");
    if (!user || !user.active) {
      return NextResponse.json({ ok: false, error: "Invalid credentials." }, { status: 401 });
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      return NextResponse.json({ ok: false, error: "Invalid credentials." }, { status: 401 });
    }

    const token = signToken({ id: user._id.toString(), email: user.email, role: user.role });
    const res = NextResponse.json({ ok: true, user: { email: user.email, role: user.role, name: user.name } });
    res.cookies.set("admin_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 60 * 60 * 24 * 7, path: "/" });
    return res;
  } catch {
    return NextResponse.json({ ok: false, error: "Login failed." }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", "", { httpOnly: true, maxAge: 0, path: "/" });
  return res;
}
