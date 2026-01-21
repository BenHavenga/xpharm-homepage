/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://xpharm.ie",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/_next/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // This removes the extra comments and Host directive
    additionalSitemaps: [],
    // Transform function to clean up the output
    transformRobotsTxt: async (_, robotsTxt) => {
      // Remove the Host: line and extra comments
      return robotsTxt
        .replace(/# \*\n/g, '')
        .replace(/# Host\nHost: .*\n\n/g, '')
        .replace(/# Sitemaps\n/g, '');
    },
  },
};
