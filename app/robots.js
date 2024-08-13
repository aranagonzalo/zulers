export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: "https://zulers.com/sitemap.xml",
  };
}
