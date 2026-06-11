import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sachin.net — Professional Website & Software Development Services",
  description:
    "We build modern websites, web applications, school management systems, e-commerce stores, ERP and custom software solutions that grow your business.",
  keywords: [
    "website development",
    "school management system",
    "e-commerce website",
    "ERP software",
    "mobile app development",
    "software company india",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col safe-bottom">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AIChatbot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
