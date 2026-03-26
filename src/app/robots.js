export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/cart/", "/logout/", "/api/"],
      },
    ],
    sitemap: "https://uomo.com/sitemap.xml",
  };
}
