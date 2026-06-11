import Link from "next/link";
import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { blogPosts } from "@/lib/data";

export function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/blog/${post.slug}`} className="glass-card overflow-hidden h-full flex flex-col group">
        <div className={`relative h-36 bg-gradient-to-br ${post.gradient}`}>
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-full text-white">
            {post.category}
          </span>
          <span className="absolute bottom-3 right-3 text-white/30">
            <Icon name="code" className="w-10 h-10" />
          </span>
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <p className="text-xs text-slate-500">{post.date} · {post.readTime}</p>
          <h3 className="mt-2 font-semibold text-white leading-snug group-hover:text-primary-light transition-colors">
            {post.title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-400 leading-relaxed flex-1">{post.excerpt}</p>
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
    <section className="section-y bg-dark-2/60" id="blog">
      <div className="container-x">
        <SectionHeading
          badge="Our Blog"
          title="Latest"
          highlight="Articles"
          desc="Read our latest articles on web development, technology and business growth."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 4) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
