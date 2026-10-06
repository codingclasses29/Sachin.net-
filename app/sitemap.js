import { blogPosts } from "@/lib/data";

export default function sitemap() {
  const base = "https://www.sachin-net.xyz";
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/website-development-bihar", priority: 0.95, changeFrequency: "weekly" },
    { path: "/website-development-siwan", priority: 0.95, changeFrequency: "weekly" },
    { path: "/website-development-patna", priority: 0.90, changeFrequency: "weekly" },
    { path: "/school-erp-bihar", priority: 0.95, changeFrequency: "weekly" },
    { path: "/ecommerce-development-bihar", priority: 0.90, changeFrequency: "weekly" },
    { path: "/mobile-app-development", priority: 0.90, changeFrequency: "weekly" },
    { path: "/website-development", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services", priority: 0.90, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.90, changeFrequency: "monthly" },
    { path: "/ai-services", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ai-tools", priority: 0.85, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.80, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.60, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.30, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.30, changeFrequency: "yearly" },
  ];

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...blogRoutes,
  ];
}
