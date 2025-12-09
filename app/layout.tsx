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
    default: "XPharm | Cross-Functional Pharma Consultancy",
    template: "%s | XPharm",
  },
  description:
    "XPharm is a cross-functional pharma operations consultancy solving complex CMC, Quality, Supply Chain, Serialization, and Compliance challenges for growing biopharma teams.",
  keywords: [
    "pharmaceutical consultancy",
    "pharma operations",
    "CMC consultancy",
    "quality assurance pharma",
    "supply chain pharma",
    "serialization compliance",
    "GMP compliance",
    "biotech consultancy",
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
    title: "XPharm | Cross-Functional Pharma Consultancy",
    description:
      "Solving complex CMC, Quality, Supply Chain, Serialization, and Compliance challenges for growing biopharma teams.",
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
    title: "XPharm | Cross-Functional Pharma Consultancy",
    description:
      "Solving complex CMC, Quality, Supply Chain, Serialization, and Compliance challenges for growing biopharma teams.",
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
