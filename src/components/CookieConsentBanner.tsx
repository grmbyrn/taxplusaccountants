"use client";
import { useState, useEffect } from "react";
import { loadGoogleAnalytics } from "@/lib/analytics";
import Link from "next/link";

const COOKIE_NAME = "cookie_consent";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" && localStorage.getItem(COOKIE_NAME);
    setVisible(!consent);
  }, []);


  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, "accepted");
    setVisible(false);
    if (GA_MEASUREMENT_ID) {
      loadGoogleAnalytics(GA_MEASUREMENT_ID);
    }
  };


  // If user already accepted, ensure GA is loaded (e.g., on page reload)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem(COOKIE_NAME) === "accepted" &&
      GA_MEASUREMENT_ID
    ) {
      loadGoogleAnalytics(GA_MEASUREMENT_ID);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white px-4 py-4 flex flex-col sm:flex-row items-center justify-between shadow-lg animate-fade-in">
      <span className="mb-2 sm:mb-0 text-sm">
        We use cookies to improve your experience and analyze site usage. See our {" "}
        <Link href="/privacy-policy" className="underline text-amber-400 hover:text-amber-500">Privacy Policy</Link>.
      </span>
      <button
        onClick={handleAccept}
        className="mt-2 sm:mt-0 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 rounded shadow"
        aria-label="Accept cookies"
      >
        Accept
      </button>
    </div>
  );
}
