import twilio from "twilio";

function normalizePhone(phone) {
  const digits = String(phone).replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.startsWith("91") && digits.length === 12) return `+${digits}`;
  if (phone.startsWith("+")) return phone;
  return `+${digits}`;
}

export async function sendAdminAlert({ name, phone, email, service, message }) {
  const text =
    `🔔 New Enquiry — Sachin.net\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email || "N/A"}\n` +
    `Service: ${service}\n` +
    `Message: ${message}`;

  const adminPhone = normalizePhone(
    process.env.ADMIN_ALERT_PHONE_NUMBER || "+919931306292"
  );

  // Meta WhatsApp Business API (if configured)
  const metaToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const metaPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (metaToken && metaPhoneId) {
    try {
      const res = await fetch(
        `https://graph.facebook.com/v19.0/${metaPhoneId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${metaToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: adminPhone.replace("+", ""),
            type: "text",
            text: { body: text },
          }),
        }
      );
      if (res.ok) return { ok: true, channel: "meta-whatsapp" };
    } catch {
      /* fall through */
    }
  }

  // Twilio
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  if (!sid || !token || !from) {
    return { ok: false, error: "Twilio not configured" };
  }

  const client = twilio(sid, token);
  const fromNorm = normalizePhone(from);

  // Try WhatsApp first (Twilio sandbox / approved sender)
  try {
    await client.messages.create({
      body: text,
      from: `whatsapp:${fromNorm}`,
      to: `whatsapp:${adminPhone}`,
    });
    return { ok: true, channel: "twilio-whatsapp" };
  } catch {
    /* SMS fallback */
  }

  try {
    await client.messages.create({
      body: text,
      from: fromNorm,
      to: adminPhone,
    });
    return { ok: true, channel: "twilio-sms" };
  } catch (err) {
    return { ok: false, error: err.message || "Twilio send failed" };
  }
}
