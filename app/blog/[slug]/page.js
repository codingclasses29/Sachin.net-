import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sachin.net Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="relative overflow-hidden bg-grid pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-64 sm:w-[34rem] h-48 sm:h-[24rem] rounded-full bg-primary/15 blur-[80px] sm:blur-[120px]" />
        <div className="container-x relative max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Icon name="arrow" className="w-4 h-4 rotate-180" />
            Back to Blog
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="section-badge !text-[11px]">{post.category}</span>
            <span className="text-slate-500">{post.date} · {post.readTime}</span>
          </div>

          <h1 className="mt-4 sm:mt-5 heading-md font-extrabold text-white">
            {post.title}
          </h1>

          <div className={`mt-6 sm:mt-8 h-40 sm:h-52 md:h-64 rounded-xl sm:rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
            <Icon name="code" className="w-16 h-16 text-white/40" />
          </div>

          <div className="mt-9 space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-10 glass-card !transform-none p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              इस topic पर project बनवाना चाहते हैं? Free consultation लें।
            </p>
            <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm shrink-0">
              Get Free Quote
            </Link>
          </div>
        </div>
      </article>
      <CtaSection />
    </>
  );
}
