import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import PageLoader from "@/components/PageLoader";
import AnimatedBackground from "@/components/AnimatedBackground";
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
  title: {
    default: "Sachin.net — Premium Website, Software & AI/ML Development",
    template: "%s | Sachin.net",
  },
  description:
    "Transforming Ideas Into Powerful Digital Solutions. Websites, ERP, School Management, E-Commerce, Mobile Apps, AI Chatbots & Machine Learning — Sachin.net Bihar, India.",
  keywords: [
    "website development",
    "school management system",
    "e-commerce website",
    "ERP software",
    "AI chatbot development",
    "machine learning solutions",
    "software company india",
    "sachin.net",
  ],
  verification: {
    google: "DFle5qV2FDhcajUMAZcQ270aljqh1lRPGYuMiH8mFWI",
  },
  openGraph: {
    title: "Sachin.net — Premium Software & AI Company",
    description: "Transforming Ideas Into Powerful Digital Solutions",
    url: "https://sachin-net.netlify.app",
    siteName: "Sachin.net",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin.net",
    description: "Premium Website, Software & AI/ML Development",
  },
  robots: { index: true, follow: true },
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
        <Providers>
          <AnimatedBackground />
          <PageLoader />
          <FirebaseInit />
          <ClientShell>{children}</ClientShell>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sachin.net",
              url: "https://sachin-net.netlify.app",
              logo: "https://sachin-net.netlify.app/team/sachin-kumar.png",
              description: "Premium Website, Software & AI/ML Development Company",
              address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9931306292",
                contactType: "customer service",
                email: "codingclasses29@gmail.com",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
