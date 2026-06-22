import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { BlogCard } from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog — Sachin.net | Web Development Tips & Guides",
  description: "Articles on website cost in India, school website guide, ERP software, SEO tips and more.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader badge="Our Blog" title="Tips, Guides &" highlight="Tech Insights" desc="Website costs, school ERP, SEO — everything to grow your business online." />
      <PageSection first>
        <div className="grid-cards-4">
          {blogPosts.map((post, i) => <BlogCard key={post.slug} post={post} delay={(i % 4) * 80} />)}
        </div>
      </PageSection>
      <CtaSection />
    </>
  );
}
