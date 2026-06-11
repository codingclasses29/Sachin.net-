import nodemailer from "nodemailer";
import { site } from "./data";

function getBrandName() {
  return process.env.SCHOOL_NAME || site.name;
}

function getAlertEmail() {
  return process.env.CONTACT_ALERT_EMAIL || process.env.NODEMAILER_EMAIL || site.email;
}

function getTransporter() {
  const user = process.env.NODEMAILER_EMAIL;
  const pass = process.env.NODEMAILER_PASSWORD;
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function adminEmailHtml({ name, phone, email, service, message }) {
  const brand = escapeHtml(getBrandName());
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:24px 12px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#1e293b;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:20px 24px;">
            <h1 style="margin:0;color:#fff;font-size:20px;">New Project Enquiry</h1>
            <p style="margin:6px 0 0;color:#dbeafe;font-size:13px;">${brand} Contact Form</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;color:#e2e8f0;font-size:14px;line-height:1.6;">
            <p style="margin:0 0 16px;color:#94a3b8;">A new visitor submitted the contact form on your website.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:8px;padding:4px;">
              <tr><td style="padding:12px 16px;border-bottom:1px solid #334155;"><strong style="color:#93c5fd;">Name</strong><br>${escapeHtml(name)}</td></tr>
              <tr><td style="padding:12px 16px;border-bottom:1px solid #334155;"><strong style="color:#93c5fd;">Phone / WhatsApp</strong><br><a href="tel:${escapeHtml(phone)}" style="color:#10b981;">${escapeHtml(phone)}</a></td></tr>
              <tr><td style="padding:12px 16px;border-bottom:1px solid #334155;"><strong style="color:#93c5fd;">Email</strong><br>${email ? `<a href="mailto:${escapeHtml(email)}" style="color:#10b981;">${escapeHtml(email)}</a>` : "Not provided"}</td></tr>
              <tr><td style="padding:12px 16px;border-bottom:1px solid #334155;"><strong style="color:#93c5fd;">Service</strong><br>${escapeHtml(service)}</td></tr>
              <tr><td style="padding:12px 16px;"><strong style="color:#93c5fd;">Message</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
            </table>
            <p style="margin:20px 0 0;color:#64748b;font-size:12px;">Reply directly to this email${email ? " (Reply-To set to visitor)" : ""} or WhatsApp: ${site.phone}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function autoReplyHtml(name) {
  const brand = escapeHtml(getBrandName());
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:24px 12px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#1e293b;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:20px 24px;">
            <h1 style="margin:0;color:#fff;font-size:20px;">Thank You, ${escapeHtml(name)}!</h1>
            <p style="margin:6px 0 0;color:#dbeafe;font-size:13px;">We received your enquiry</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;color:#e2e8f0;font-size:14px;line-height:1.7;">
            <p style="margin:0 0 12px;">Namaste! Thank you for contacting <strong style="color:#fff;">${brand}</strong>.</p>
            <p style="margin:0 0 12px;">We received your message and our team will reply within <strong style="color:#10b981;">24 hours</strong>.</p>
            <p style="margin:0 0 16px;">For faster response, WhatsApp us anytime:</p>
            <p style="margin:0 0 4px;">📱 WhatsApp: <a href="https://wa.me/${site.whatsapp}" style="color:#10b981;">${site.phone}</a></p>
            <p style="margin:0 0 16px;">📧 Email: <a href="mailto:${site.email}" style="color:#10b981;">${site.email}</a></p>
            <p style="margin:0;color:#64748b;font-size:12px;">— Team ${brand}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function isEmailConfigured() {
  return Boolean(
    process.env.NODEMAILER_EMAIL &&
      process.env.NODEMAILER_PASSWORD &&
      getAlertEmail()
  );
}

export async function sendContactEmail({ name, phone, email, service, message }) {
  const transporter = getTransporter();
  const to = getAlertEmail();
  if (!transporter || !to) {
    return { ok: false, error: "Email not configured" };
  }

  const brand = getBrandName();

  await transporter.sendMail({
    from: `"${brand}" <${process.env.NODEMAILER_EMAIL}>`,
    to,
    replyTo: email || undefined,
    subject: `[${brand}] New Enquiry — ${name} (${service})`,
    html: adminEmailHtml({ name, phone, email, service, message }),
    text:
      `New Enquiry — ${brand}\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "Not provided"}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}`,
  });

  return { ok: true };
}

export async function sendAutoReplyEmail({ name, email }) {
  if (!email) return { ok: false, skipped: true };

  const transporter = getTransporter();
  if (!transporter) return { ok: false, error: "Email not configured" };

  const brand = getBrandName();

  await transporter.sendMail({
    from: `"${brand}" <${process.env.NODEMAILER_EMAIL}>`,
    to: email,
    subject: `Thank you — ${brand} received your enquiry`,
    html: autoReplyHtml(name),
    text:
      `Hi ${name},\n\n` +
      `Thank you for contacting ${brand}. We received your message and will reply within 24 hours.\n\n` +
      `WhatsApp: ${site.phone}\n` +
      `Email: ${site.email}\n\n` +
      `— Team ${brand}`,
  });

  return { ok: true };
}
