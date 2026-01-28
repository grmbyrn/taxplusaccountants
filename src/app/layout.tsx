import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tax Plus Accountants",
  description: "Professional accounting services for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
