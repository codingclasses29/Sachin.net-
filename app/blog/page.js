import PageHeader from "@/components/PageHeader";
import { BlogCard } from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog — Sachin.net | Web Development Tips & Guides",
  description:
    "Articles on website cost in India, school website guide, best ERP software, SEO tips and more.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Our Blog"
        title="Tips, Guides &"
        highlight="Tech Insights"
        desc="Learn about website costs, school ERP, SEO and everything you need to grow your business online."
      />
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 4) * 100} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
