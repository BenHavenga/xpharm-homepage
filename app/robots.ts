import { MetadataRoute } from 'next'

// ============================================================
// ROBOTS.TXT GENERATOR
// ============================================================
// This file tells search engines (like Google) which pages they're allowed
// to crawl and index on your website.
//
// In Next.js 13+, create this file at: app/robots.ts
// It will automatically be available at: https://xpharm.ie/robots.txt
// ============================================================

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Applies to all search engines
        allow: '/', // Allow crawling of all pages
        disallow: ['/api/', '/private/'], // Block these paths (if you had any)
      },
    ],
    sitemap: 'https://xpharm.ie/sitemap.xml', // Tell Google where your sitemap is
  }
}
