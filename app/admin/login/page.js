"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/data";

export default function AdminLoginPage() {
  const router = useRouter();

  // Step state: "credentials" | "otp"
  const [step, setStep] = useState("credentials");

  // Form fields
  const [email, setEmail] = useState("codingclasses29@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");

  // Status & Feedback
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Timer countdown (300 seconds = 5 minutes)
  const [timeLeft, setTimeLeft] = useState(300);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer;
    if (step === "otp" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // STEP 1: Verify Credentials and Trigger Email OTP
  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.ok && data.step === "otp_required") {
        setStep("otp");
        setTimeLeft(data.expiresInSeconds || 300);
        setCanResend(false);
        setSuccessMsg(data.message || "Security OTP sent to your registered Gmail.");
      } else {
        setError(data.error || "Invalid credentials. Access restricted to administrator.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Verify 6-digit OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify_otp",
          email,
          otp: otp.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setSuccessMsg(data.message || "Authentication verified! Redirecting...");
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 800);
      } else {
        setError(data.error || "Invalid or expired OTP. Please check and try again.");
      }
    } catch {
      setError("Network error while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (!canResend && timeLeft > 0) return;
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setTimeLeft(300);
        setCanResend(false);
        setOtp("");
        setSuccessMsg("A new 6-digit OTP has been dispatched to your Gmail.");
      } else {
        setError(data.error || "Failed to resend code.");
      }
    } catch {
      setError("Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark bg-grid px-4 py-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="glass-card-premium w-full max-w-md p-6 sm:p-8 relative z-10 border border-slate-700/80 shadow-2xl backdrop-blur-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-teal-950/50">
            <Icon name="shield" className="w-7 h-7" />
          </div>
          <span className="px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-[11px] font-bold uppercase tracking-wider border border-teal-500/30">
            {step === "otp" ? "🔐 2-Factor Authentication" : "🛡️ Authorized Admin Gateway"}
          </span>
          <h1 className="mt-2 text-2xl font-black text-white">Sachin.net Console</h1>
          <p className="text-xs text-slate-400 mt-1">
            {step === "otp"
              ? "Enter the 6-digit code sent to your Gmail"
              : "Single-administrator secure dashboard access"}
          </p>
        </div>

        {/* Feedback Alert Messages */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-start gap-2">
            <span className="text-red-400 font-bold">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs flex items-start gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* STEP 1: CREDENTIALS FORM */}
        {step === "credentials" && (
          <form onSubmit={handleCredentialsSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="codingclasses29@gmail.com"
                  className="w-full rounded-xl bg-slate-950/80 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-teal-400 transition-colors"
                />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Only the authorized founder account can access this portal.
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">Admin Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] text-teal-400 hover:text-teal-300 font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full rounded-xl bg-slate-950/80 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-teal-400 transition-colors"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <span className="text-teal-400 font-bold">🔒</span>
              <span>2FA Security: A 6-digit OTP will be dispatched to your Gmail.</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full !py-3.5 text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              {loading ? (
                <>
                  <span className="loader-ring !w-4 !h-4" />
                  <span>Verifying Credentials &amp; Sending OTP...</span>
                </>
              ) : (
                <>
                  <span>Sign In &amp; Request OTP Code</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* STEP 2: 2-FACTOR OTP FORM */}
        {step === "otp" && (
          <form onSubmit={handleOtpSubmit} className="space-y-5 animate-fade-in">
            <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-center">
              <div className="text-xs text-slate-300">
                Security code sent via verified Gmail SMTP to:
              </div>
              <div className="text-xs font-mono font-bold text-teal-300 mt-0.5">
                {email}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 text-center">
                Enter 6-Digit One-Time Password (OTP)
              </label>
              <input
                type="text"
                autoFocus
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                required
                placeholder="• • • • • •"
                className="w-full text-center tracking-[12px] font-mono text-2xl font-black rounded-2xl bg-slate-950 border-2 border-teal-400/80 px-4 py-3.5 text-teal-300 placeholder-slate-600 outline-none focus:border-teal-300 focus:ring-4 focus:ring-teal-400/20 shadow-inner"
              />
            </div>

            {/* Timer and Resend Action */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-slate-400">
                Expires in:{" "}
                <span className="font-mono font-bold text-amber-300">
                  {formatTimer(timeLeft)}
                </span>
              </span>

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={!canResend && timeLeft > 0}
                className={`font-semibold transition-colors ${
                  canResend || timeLeft === 0
                    ? "text-teal-400 hover:underline cursor-pointer"
                    : "text-slate-600 cursor-not-allowed"
                }`}
              >
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || otp.length < 6}
              className="btn-teal w-full !py-3.5 text-sm font-black flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-teal-950/60"
            >
              {loading ? (
                <>
                  <span className="loader-ring !w-4 !h-4" />
                  <span>Verifying Code...</span>
                </>
              ) : (
                <>
                  <span>Verify OTP &amp; Enter Dashboard</span>
                  <span>✓</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-between pt-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setStep("credentials");
                  setOtp("");
                  setError("");
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ← Change Credentials
              </button>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  "Namaste Sachin Sir! Admin Login 2FA issue help."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Emergency WhatsApp Help
              </a>
            </div>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          <Link href="/" className="text-xs text-slate-400 hover:text-teal-300 transition-colors">
            ← Back to Sachin.net Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
