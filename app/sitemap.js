import { blogPosts } from "@/lib/data";

export default function sitemap() {
  const base = "https://www.sachin-net.xyz";
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/website-development", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-services", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ai-tools", priority: 0.85, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
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
