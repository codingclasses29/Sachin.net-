import Icon from "./Icon";
import { site } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hi%2C%20I%20want%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl shadow-emerald-600/40 active:scale-95 sm:hover:scale-110 transition-transform bottom-4 right-4 sm:bottom-6 sm:right-6 safe-right"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-40 animate-ping" />
      <Icon name="whatsapp" className="w-6 h-6 sm:w-7 sm:h-7 relative" />
    </a>
  );
}
