import type { Metadata } from "next";
import "../app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsFloatingButton from "@/components/ContactUsFloatingButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import VercelIntegrations from "@/components/VercelIntegrations";

export const metadata: Metadata = {
  title: "Tax Plus Accountants | Drogheda Accountants & Business Advisors",
  description: "Tax Plus Accountants offers expert accounting, tax, payroll, and business advisory services in Drogheda and nationwide. Trusted by hundreds of businesses.",
  openGraph: {
    title: "Tax Plus Accountants | Drogheda Accountants & Business Advisors",
    description: "Tax Plus Accountants offers expert accounting, tax, payroll, and business advisory services in Drogheda and nationwide. Trusted by hundreds of businesses.",
    url: "https://taxplusaccountants.ie",
    siteName: "Tax Plus Accountants",
    images: [
      {
        url: "/images/taxplus-accountants-logo.png",
        width: 1200,
        height: 630,
        alt: "Tax Plus Accountants Logo",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Plus Accountants | Drogheda Accountants & Business Advisors",
    description: "Tax Plus Accountants offers expert accounting, tax, payroll, and business advisory services in Drogheda and nationwide. Trusted by hundreds of businesses.",
    images: [
      "/images/taxplus-accountants-logo.png"
    ],
    // site: "@taxplusaccountants"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-new.ico" />
        <link rel="canonical" href="https://taxplusaccountants.ie" />
      </head>
      <body className="font-sans bg-background text-gray-800">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4">{children}</div>
        </main>
        <ContactUsFloatingButton />
        <Footer />
        <CookieConsentBanner />
        <VercelIntegrations />
      </body>
    </html>
  );
}
