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
  },
};
