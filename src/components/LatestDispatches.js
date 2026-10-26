"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function LatestDispatches({ initialPosts }) {
  // Show the latest 3 blog posts (from Sanity or local fallback)
  const posts = (initialPosts && initialPosts.length > 0 ? initialPosts : BLOG_POSTS).slice(0, 3);

  return (
    <section className="bg-[#0c0a0b] border-t-4 border-white py-24 px-4 sm:px-6 lg:px-8 relative nano-grid">
      <div className="max-w-[1184px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal animation="fade-right">
            <p className="nano-eyebrow text-[#73887a] text-sm sm:text-base tracking-[0.1em] mb-3">
              Nano Dispatches // Latest Intelligence
            </p>
            <h2 className="nano-pixel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[0.02em] text-white">
              RECENT TELEMETRY &amp;{" "}
              <span className="text-[#fed701]">FIELD NOTES.</span>
            </h2>
            <p className="font-['Mona_Sans',sans-serif] text-base sm:text-lg leading-7 text-[#a9a4a0] max-w-2xl mt-4 m-0">
              Teardowns of algorithmic distribution, creator performance models,
              and tactical campaign playbooks straight from our data rails.
            </p>
          </ScrollReveal>

          {/* Desktop "View More" Button */}
          <ScrollReveal animation="fade-left" className="hidden md:block flex-shrink-0">
            <Link
              href="/blog"
              className="nano-btn nano-btn--outline nano-btn--sm nano-notch-sm inline-flex items-center gap-2 text-decoration-none group"
            >
              <span className="nano-btn__in nano-notch-sm flex items-center gap-2">
                <span>View More Dispatches</span>
                <ArrowRight className="w-4 h-4 text-[#fed701] group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        {/* 3 Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.slug} animation="fade-up" delay={idx * 120} className="h-full">
              <article className="nano-lift h-full flex flex-col group">
                <div className="nano-frame bg-white p-[4px] nano-notch-md h-full">
                  <div className="nano-frame__in bg-[#151213] p-5 sm:p-6 nano-notch-md flex flex-col justify-between h-full">
                    <div>
                      {/* Thumbnail Cover */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block aspect-[16/10] bg-[#1f1b1c] overflow-hidden mb-5 border border-[#2e2526] relative"
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover nano-pixelated group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 nano-tag nano-tag--accent text-[11px]">
                          {post.category}
                        </span>
                      </Link>

                      {/* Post Read Time & Date */}
                      <div className="flex items-center justify-between text-xs font-pixel tracking-wider text-[#a9a4a0] mb-3">
                        <span>{post.readTime}</span>
                        <span className="text-[#73887a]">• {post.publishedAt}</span>
                      </div>

                      {/* Post Title */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-decoration-none"
                      >
                        <h3 className="nano-pixel text-xl sm:text-2xl font-normal leading-snug text-white group-hover:text-[#fed701] transition-colors mb-3">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Summary */}
                      <p className="font-['Mona_Sans',sans-serif] text-sm leading-6 text-[#a9a4a0] line-clamp-3 m-0 mb-6">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author & Read Action */}
                    <div className="pt-4 border-t border-[#2e2526] flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 flex-none bg-[#1f1b1c] overflow-hidden">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-full h-full object-cover nano-pixelated"
                          />
                        </div>
                        <div>
                          <p className="m-0 font-pixel text-[11px] uppercase tracking-wider text-white">
                            {post.author.name}
                          </p>
                          <p className="m-0 text-[10px] text-[#73887a]">
                            {post.author.role.split(",")[0]}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="w-8 h-8 grid place-items-center bg-[#1f1b1c] text-[#fed701] group-hover:bg-[#fed701] group-hover:text-[#0c0a0b] transition-colors"
                        aria-label={`Read ${post.title}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile "View More" Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/blog"
            className="nano-btn nano-btn--primary nano-btn--lg nano-notch-sm inline-flex items-center gap-2 text-decoration-none w-full justify-center"
          >
            <span>View More Dispatches</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
