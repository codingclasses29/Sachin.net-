"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AIChatbot from "./AIChatbot";
import BackToTop from "./BackToTop";
import StickyCta from "./StickyCta";

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
      <AIChatbot />
      <WhatsAppButton />
      <BackToTop />
      <StickyCta />
    </>
  );
}
