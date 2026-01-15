import { OrganizationSchema } from "./organization-schema";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://xpharm.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
    template: "%s | XPharm",
  },
  description:
    "Fractional and interim operations leadership for life sciences companies. We provide executive operations leadership to boards, investors, and biotech companies when operational delivery is critical to enterprise value. Focused on execution, not advisory.",
  keywords: [
    "fractional COO",
    "interim COO",
    "operations leadership",
    "life sciences operations",
    "biotech operations",
    "pharmaceutical operations",
    "fractional operations leader",
    "interim operations leader",
    "operations executive",
    "supply chain operations",
    "global operations",
    "M&A integration",
    "operational due diligence",
    "venture capital operations",
    "private equity operations",
    "biotech consulting",
    "pharma consulting",
    "executive operations",
    "operations management",
    "operational risk management",
  ],
  authors: [{ name: "XPharm" }],
  creator: "XPharm",
  publisher: "XPharm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    title: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
    description:
      "Driving operational and value-creation milestones at critical inflection points. Fractional and interim operations leadership for life sciences companies navigating complex transitions and execution risk.",
    siteName: "XPharm",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "XPharm Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
    description:
      "Driving operational and value-creation milestones at critical inflection points. Fractional and interim operations leadership for life sciences companies.",
    images: ["/favicon/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
