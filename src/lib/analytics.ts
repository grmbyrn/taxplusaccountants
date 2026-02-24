// utils/analytics.ts

/**
 * Dynamically loads the Google Analytics script after user consent.
 * @param measurementId Your Google Analytics Measurement ID (e.g., 'G-XXXXXXXXXX')
 */
// Extend the Window interface to include gaLoaded
declare global {
  interface Window {
    gaLoaded?: boolean;
    dataLayer?: Array<unknown>;
  }
}

export function loadGoogleAnalytics(measurementId: string) {
  if (!measurementId || typeof window === "undefined") return;
  if (window.gaLoaded) return; // Prevent double loading

  // Insert the Google Analytics script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  window["gaLoaded"] = true;
}
