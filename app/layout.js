import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import PageLoader from "@/components/PageLoader";
import AnimatedBackground from "@/components/AnimatedBackground";
import AuroraLayer from "@/components/AuroraLayer";
import MarketingPixels from "@/components/MarketingPixels";
import SeoSchema from "@/components/SeoSchema";
import ClientShell from "@/components/ClientShell";
import FirebaseInit from "@/components/FirebaseInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://sachin-net.netlify.app"),
  title: {
    default: "Sachin.net — Website Banwane Wala | Software & AI Company India",
    template: "%s | Sachin.net",
  },
  description:
    "Website banwani hai? Sachin.net — India ka best website development company. Business website, School ERP, E-Commerce, Mobile App, AI Chatbot. Bihar se poore India. Free quote: +91 9931306292",
  keywords: [
    "website banwane wala",
    "website banwani hai",
    "website development company india",
    "website developer bihar",
    "school management system",
    "e-commerce website developer",
    "ERP software india",
    "AI chatbot development",
    "software company india",
    "sachin.net",
    "website banane wala near me",
    "cheap website development",
    "professional website design india",
  ],
  verification: {
    google: "DFle5qV2FDhcajUMAZcQ270aljqh1lRPGYuMiH8mFWI",
  },
  alternates: {
    canonical: "https://sachin-net.netlify.app",
  },
  openGraph: {
    title: "Sachin.net — Website Banwane Wala India",
    description: "Professional Website, School ERP, E-Commerce & AI Solutions. 100+ Clients. Free Quote.",
    url: "https://sachin-net.netlify.app",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero-bg.png", width: 1200, height: 630, alt: "Sachin.net Website Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin.net — Website Development India",
    description: "Website banwani hai? Sachin.net se free quote lein.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col safe-bottom bg-mesh relative">
        <MarketingPixels />
        <SeoSchema />
        <Providers>
          <AuroraLayer />
          <AnimatedBackground />
          <PageLoader />
          <FirebaseInit />
          <ClientShell>{children}</ClientShell>
        </Providers>
      </body>
    </html>
  );
}
