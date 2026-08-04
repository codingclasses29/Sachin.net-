/** Client-side conversion tracking — Google Ads, Meta, Firebase Analytics */

import { logFirebaseEvent } from "@/lib/firebase/analytics";

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  try {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
    if (window.fbq) {
      const metaMap = {
        lead: "Lead",
        contact: "Contact",
        whatsapp_click: "Contact",
        chat_message: "Contact",
        generate_lead: "Lead",
      };
      window.fbq("track", metaMap[eventName] || "CustomEvent", {
        ...params,
        content_name: "Sachin.net",
      });
    }
    logFirebaseEvent(eventName, params);
  } catch {
    // non-blocking
  }
}

export function trackLead(source = "website") {
  trackEvent("generate_lead", { event_category: "engagement", source });
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION;
  if (typeof window !== "undefined" && window.gtag && conversionId) {
    window.gtag("event", "conversion", { send_to: conversionId });
  }
}

export function trackWhatsAppClick(location = "button") {
  trackEvent("whatsapp_click", { event_category: "engagement", location });
}

export function trackChatStart() {
  trackEvent("chat_message", { event_category: "engagement", action: "chat_open" });
}

export function trackChatMessage() {
  trackEvent("chat_message", { event_category: "engagement", action: "message_sent" });
}
