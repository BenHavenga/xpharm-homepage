"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { useEffect } from "react";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Log analytics initialization in development
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics initialized:", {
        googleAnalytics: gaId ? "✓" : "✗",
        vercelAnalytics: "✓",
      });
    }
  }, [gaId]);

  return (
    <>
      {/* Vercel Analytics - Works out of the box */}
      <VercelAnalytics />

      {/* Google Analytics - Only if GA_MEASUREMENT_ID is set */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
