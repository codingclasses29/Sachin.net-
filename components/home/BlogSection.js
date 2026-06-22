import Link from "next/link";
import PageSection from "@/components/PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { blogPosts } from "@/lib/data";

export function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/blog/${post.slug}`} className="card overflow-hidden h-full flex flex-col group no-hover">
        <div className={`relative h-36 bg-gradient-to-br ${post.gradient}`}>
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-full text-white">{post.category}</span>
          <Icon name="code" className="absolute bottom-3 right-3 w-10 h-10 text-white/30" />
        </div>
        <div className="card-p flex flex-col flex-1">
          <p className="text-muted">{post.date} · {post.readTime}</p>
          <h3 className="mt-2 heading-sm text-base group-hover:text-primary-light transition-colors">{post.title}</h3>
          <p className="mt-2 text-body text-sm flex-1">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light">
            Read Article <Icon name="arrow" className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function BlogSection() {
  return (
    <PageSection alt id="blog">
      <SectionHeading badge="Our Blog" title="Latest" highlight="Articles" desc="Web development, technology and business growth tips." />
      <div className="mt-10 grid-cards-4">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={(i % 4) * 80} />
        ))}
      </div>
    </PageSection>
  );
}
