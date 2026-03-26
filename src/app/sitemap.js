export default async function sitemap() {
  const baseUrl = "https://uomo.com";

  const staticRoutes = [
    "",
    "/shop",
    "/collection",
    "/lookbook",
    "/journal",
    "/about",
    "/contact",
    "/faq",
    "/store-locator",
    "/elements/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  try {
    const res = await fetch("https://dummyjson.com/products?limit=100&select=id");
    const { products } = await res.json();
    const productRoutes = products.map((p) => ({
      url: `${baseUrl}/shop/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }));
    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
