import { MetadataRoute } from 'next'

// ============================================================
// SITEMAP GENERATOR
// ============================================================
// This file creates an XML sitemap that tells Google about all the pages
// on your website and how often they change.
//
// In Next.js 13+, you create this file at: app/sitemap.ts
// It will automatically be available at: https://xpharm.ie/sitemap.xml
// ============================================================

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your website
  const baseUrl = 'https://xpharm.ie'
  
  // Get the current date for lastModified
  const currentDate = new Date()

  return [
    {
      // Homepage
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly', // How often this page changes
      priority: 1.0, // Importance (1.0 is highest, 0.0 is lowest)
    },
    {
      // What We Do section (as a separate indexable URL)
      url: `${baseUrl}#what-we-do`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // When to Engage section
      url: `${baseUrl}#when-to-engage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // How We Engage section
      url: `${baseUrl}#how-we-engage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // Areas of Accountability section
      url: `${baseUrl}#areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      // Who We Work With section
      url: `${baseUrl}#who-we-work-with`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      // When Not Right Fit section
      url: `${baseUrl}#not-right-fit`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      // About section
      url: `${baseUrl}#about`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      // Contact section
      url: `${baseUrl}#contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.9, // High priority - you want people to find this!
    },
  ]
}