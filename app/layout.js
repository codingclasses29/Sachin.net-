import { Poppins, Inter, Manrope } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.sachin-net.xyz"),
  title: {
    default: "Website Development Company in Bihar | Sachin.net — Siwan & Patna",
    template: "%s | Sachin.net",
  },
  description:
    "Top Website Development Company in Bihar & Siwan. Sachin.net offers custom business websites, School ERP, E-Commerce stores, Mobile Apps & AI solutions across Bihar (Siwan, Patna, Muzaffarpur) & Pan-India. Free quote: +91 9931306292",
  keywords: [
    "website development company in bihar",
    "website development company in siwan",
    "web development company bihar",
    "website designer bihar",
    "website maker bihar",
    "website banwane wala bihar",
    "school erp bihar",
    "school management system bihar",
    "ecommerce website development in bihar",
    "software company bihar",
    "sachin kushwaha siwan",
    "sachin.net",
    "sachin-net.xyz",
    "website development patna",
    "website designer siwan",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "DFle5qV2FDhcajUMAZcQ270aljqh1lRPGYuMiH8mFWI",
  },
  alternates: {
    canonical: "https://www.sachin-net.xyz",
  },
  openGraph: {
    title: "Website Development Company in Bihar | Sachin.net",
    description: "Bihar ka leading website development company. 100+ clients across Siwan, Patna & India. Custom website, School ERP & E-Commerce.",
    url: "https://www.sachin-net.xyz",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/banners/website-development.png", width: 1024, height: 389, alt: "Sachin.net Website Development Company in Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Bihar | Sachin.net",
    description: "Bihar's trusted web & software developers. Free consultation: +91 9931306292",
    images: ["/banners/website-development.png"],
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3192206378729297"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
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