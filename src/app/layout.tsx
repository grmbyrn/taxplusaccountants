import type { Metadata } from "next";
import "../app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsFloatingButton from "@/components/ContactUsFloatingButton";

export const metadata: Metadata = {
  title: "Taxplus Accountants",
  description: "Your trusted partner for accounting solutions in Drogheda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-gray-800">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4">{children}</div>
        </main>
        <ContactUsFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
