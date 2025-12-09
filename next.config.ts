import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable middleware/proxy and API routes
  // Vercel supports full Next.js features (unlike Firebase static hosting)
  images: {
    // Can now use Next.js image optimization on Vercel
    // unoptimized: true, // Removed - Vercel optimizes images automatically
  },
};

export default nextConfig;
