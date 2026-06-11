import { NextResponse } from "next/server";
import { sendContactEmail, sendAutoReplyEmail, isEmailConfigured } from "@/lib/email";
import { sendAdminAlert } from "@/lib/whatsapp";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, phone and message are required." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      service: service?.trim() || "General Enquiry",
      message: message.trim(),
    };

    const [emailResult, alertResult, autoReply] = await Promise.allSettled([
      sendContactEmail(payload),
      sendAdminAlert(payload),
      sendAutoReplyEmail({ name: payload.name, email: payload.email }),
    ]);

    const emailOk =
      emailResult.status === "fulfilled" && emailResult.value?.ok;
    const alertOk =
      alertResult.status === "fulfilled" && alertResult.value?.ok;

    if (!emailOk && !alertOk) {
      const emailErr =
        emailResult.status === "fulfilled"
          ? emailResult.value?.error
          : emailResult.reason?.message;
      const hint = !isEmailConfigured()
        ? "Email not configured in .env.local (NODEMAILER_EMAIL + NODEMAILER_PASSWORD)."
        : emailErr || "Email send failed. Check Gmail App Password.";

      return NextResponse.json(
        {
          ok: false,
          error:
            "Notification send nahi ho paya. WhatsApp par direct message karein: +91 9931306292",
          details: {
            email: hint,
            alert:
              alertResult.status === "fulfilled"
                ? alertResult.value
                : alertResult.reason?.message,
          },
        },
        { status: 502 }
      );
    }

    const autoReplyOk =
      autoReply.status === "fulfilled" && autoReply.value?.ok;

    let successMsg = "Enquiry sent successfully! Hum jald contact karenge.";
    if (emailOk && alertOk) {
      successMsg =
        "Enquiry sent! Admin ko email + WhatsApp alert bhej diya gaya.";
    } else if (emailOk) {
      successMsg = "Enquiry sent! Admin ko email alert bhej diya gaya.";
    } else if (alertOk) {
      successMsg = "Enquiry sent! Admin ko WhatsApp alert bhej diya gaya.";
    }
    if (autoReplyOk) {
      successMsg += " Aapko confirmation email bhi mil gaya.";
    }

    return NextResponse.json({
      ok: true,
      message: successMsg,
      channels: {
        email: emailOk,
        whatsappOrSms: alertOk,
        autoReply: autoReplyOk,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
