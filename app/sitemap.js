export default function sitemap() {
  const base = "https://sachin-net.netlify.app";
  const routes = [
    "", "/services", "/ai-services", "/ai-tools", "/portfolio", "/pricing",
    "/about", "/blog", "/contact", "/careers", "/privacy", "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
