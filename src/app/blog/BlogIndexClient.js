"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";
import NinjaModal from "@/components/NinjaModal";
import { BLOG_POSTS } from "@/data/blogPosts";

// Pixel art 12x12 SVG icons
const ICONS = {
  "arrow-right":
    "M6 1h1v1h-1zM6 2h2v1h-2zM6 3h3v1h-3zM6 4h4v1h-4zM0 5h11v1h-11zM0 6h11v1h-11zM6 7h4v1h-4zM6 8h3v1h-3zM6 9h2v1h-2zM6 10h1v1h-1z",
  "search":
    "M2 1h5v1h-5zM1 2h2v1h-2zM6 2h2v1h-2zM0 3h2v1h-2zM7 3h2v1h-2zM0 4h2v1h-2zM7 4h2v1h-2zM0 5h2v1h-2zM7 5h2v1h-2zM1 6h2v1h-2zM6 6h2v1h-2zM2 7h6v1h-6zM7 8h3v1h-3zM8 9h3v1h-3zM9 10h2v1h-2z",
  "sparkle":
    "M5 1h2v1h-2zM5 2h2v1h-2zM4 3h4v1h-4zM3 4h6v1h-6zM1 5h10v1h-10zM1 6h10v1h-10zM3 7h6v1h-6zM4 8h4v1h-4zM5 9h2v1h-2zM5 10h2v1h-2z",
  "bolt":
    "M6 0h3v1h-3zM5 1h3v1h-3zM4 2h3v1h-3zM3 3h3v1h-3zM2 4h8v1h-8zM5 5h3v1h-3zM4 6h3v1h-3zM3 7h3v1h-3zM2 8h2v1h-2zM1 9h1v1h-1z",
  "close":
    "M1 1h2v1h-2zM9 1h2v1h-2zM1 2h3v1h-3zM8 2h3v1h-3zM2 3h3v1h-3zM7 3h3v1h-3zM3 4h6v1h-6zM4 5h4v1h-4zM4 6h4v1h-4zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM1 9h3v1h-3zM8 9h3v1h-3zM1 10h2v1h-2zM9 10h2v1h-2z",
  "plus":
    "M5 1h2v1h-2zM5 2h2v1h-2zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h10v1h-10zM1 6h10v1h-10zM5 7h2v1h-2zM5 8h2v1h-2zM5 9h2v1h-2zM5 10h2v1h-2z",
  "minus": "M1 5h10v1h-10zM1 6h10v1h-10z",
};

function PixelIcon({ name, size = 16, className = "" }) {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg
      className={`inline-block flex-none align-middle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="currentColor" d={d} />
    </svg>
  );
}

function NanoFrame({ tone = "default", flush = false, children, className = "", style = {} }) {
  return (
    <div
      className={`nano-frame nano-notch-md ${tone === "accent" ? "nano-frame--accent" : ""} ${flush ? "nano-frame--flush" : ""} ${className}`}
      style={style}
    >
      <div className="nano-frame__in nano-notch-md h-full">{children}</div>
    </div>
  );
}

function NanoWindow({ title, children, className = "" }) {
  return (
    <div className={`nano-window nano-notch-sm nano-lift ${className}`}>
      <div className="nano-window__bar">
        <span className="nano-window__title">{title}</span>
        <span className="nano-window__ctrls">
          <button className="nano-window__ctrl" aria-label="Minimise" type="button">
            <PixelIcon name="minus" size={12} />
          </button>
          <button className="nano-window__ctrl" aria-label="Maximise" type="button">
            <PixelIcon name="plus" size={12} />
          </button>
          <button className="nano-window__ctrl nano-window__ctrl--close" aria-label="Close" type="button">
            <PixelIcon name="close" size={12} />
          </button>
        </span>
      </div>
      <div className="nano-window__body">{children}</div>
    </div>
  );
}

const CATEGORIES = [
  "All Dispatches",
  "Product & Algo",
  "Brand Strategy",
  "Creator Culture",
];

export default function BlogIndexClient({ initialPosts }) {
  const posts = initialPosts && initialPosts.length > 0 ? initialPosts : BLOG_POSTS;
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [ninjaModalOpen, setNinjaModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Dispatches");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const featuredPost = useMemo(
    () => posts.find((p) => p.featured) || posts[0],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Dispatches" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-[#ffffff] font-sans nano-page relative nano-grid">
      <Navbar
        onOpenCampaign={() => setCampaignModalOpen(true)}
        onOpenNinja={() => setNinjaModalOpen(true)}
      />

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="max-w-[1280px] mx-auto pt-36 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl">
          <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
            Nano Dispatches // Blog & Research
          </p>
          <h1 className="nano-pixel mb-6 font-normal text-4xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[0.02em] text-[#ffffff]">
            THOUGHTS ON ATTENTION.{" "}
            <span className="nano-hl text-[#fed701]">AND THE RAILS TO MOVE IT.</span>
          </h1>
          <p className="mb-10 text-lg sm:text-xl leading-[30px] font-medium text-[#a9a4a0]">
            Field notes, engineering teardowns, algorithmic transparency, and
            playbooks from the frontlines of verified creator commerce in Africa.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-4 border-t-2 border-[#1f1b1c]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer transition-colors ${
                    isActive
                      ? "nano-tag nano-tag--accent"
                      : "nano-tag hover:text-[#fed701]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <div className="nano-field">
              <div className="nano-field__box">
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-[#73887a] pointer-events-none">
                    <PixelIcon name="search" size={14} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH DISPATCHES..."
                    className="nano-field__input pl-9"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 text-[#a9a4a0] hover:text-[#fed701] cursor-pointer"
                    >
                      <PixelIcon name="close" size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- FEATURED ARTICLE -------------------- */}
      {selectedCategory === "All Dispatches" && !searchQuery && featuredPost && (
        <section className="max-w-[1280px] mx-auto pb-16 px-4 sm:px-6 lg:px-12">
          <div className="nano-lift">
            <NanoFrame tone="accent">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Cover Image */}
                <div className="lg:col-span-7 aspect-[16/10] bg-[#1f1b1c] overflow-hidden border-2 border-[#2e2526] relative">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover nano-pixelated"
                  />
                  <span className="absolute top-3 left-3 nano-tag nano-tag--accent">
                    FEATURED DISPATCH
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="nano-tag">{featuredPost.category}</span>
                      <span className="font-pixel text-xs tracking-wider text-[#a9a4a0]">
                        {featuredPost.readTime}
                      </span>
                      <span className="font-pixel text-xs tracking-wider text-[#73887a]">
                        • {featuredPost.publishedAt}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-decoration-none group"
                    >
                      <h2 className="nano-pixel mb-4 text-2xl sm:text-3xl font-normal leading-tight text-white group-hover:text-[#fed701] transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="mb-6 text-sm sm:text-base leading-6 text-[#a9a4a0]">
                      {featuredPost.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6 pt-4 border-t border-[#2e2526]">
                      <div className="w-10 h-10 flex-none rounded-none overflow-hidden bg-[#1f1b1c]">
                        <img
                          src={featuredPost.author?.avatar}
                          alt={featuredPost.author?.name}
                          className="w-full h-full object-cover nano-pixelated"
                        />
                      </div>
                      <div>
                        <p className="m-0 font-pixel text-xs uppercase tracking-wider text-white">
                          {featuredPost.author?.name}
                        </p>
                        <p className="m-0 text-xs text-[#a9a4a0]">
                          {featuredPost.author?.role}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="nano-btn nano-btn--primary nano-notch-sm inline-flex items-center gap-3 w-full sm:w-auto text-decoration-none"
                    >
                      <span>Read Full Dispatch</span>
                      <PixelIcon name="arrow-right" size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </NanoFrame>
          </div>
        </section>
      )}

      {/* -------------------- ARTICLES LIST GRID -------------------- */}
      <section className="max-w-[1280px] mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <p className="nano-eyebrow text-[#73887a] text-sm tracking-[0.1em]">
            {filteredPosts.length} {filteredPosts.length === 1 ? "DISPATCH" : "DISPATCHES"} RECORDED
          </p>
          {searchQuery && (
            <p className="font-pixel text-xs text-[#fed701]">
              FILTERED BY &quot;{searchQuery.toUpperCase()}&quot;
            </p>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="nano-pixel text-2xl text-[#a9a4a0] mb-4">
              NO DISPATCHES MATCH YOUR QUERY
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Dispatches");
              }}
              className="nano-btn nano-btn--primary nano-btn--sm nano-notch-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="nano-lift h-full flex flex-col">
                <NanoFrame className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Thumbnail Cover */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block aspect-[16/10] bg-[#1f1b1c] overflow-hidden mb-5 border border-[#2e2526] group"
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover nano-pixelated group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      {/* Meta Tags */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="nano-tag">{post.category}</span>
                        <span className="font-pixel text-[11px] tracking-wider text-[#a9a4a0]">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-decoration-none group"
                      >
                        <h3 className="nano-pixel text-xl leading-7 font-normal text-white group-hover:text-[#fed701] transition-colors mb-3">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Summary */}
                      <p className="m-0 text-sm leading-6 text-[#a9a4a0] line-clamp-3 mb-6">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author & Read Action */}
                    <div className="pt-4 border-t border-[#2e2526] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 flex-none bg-[#1f1b1c] overflow-hidden">
                          <img
                            src={post.author?.avatar}
                            alt={post.author?.name}
                            className="w-full h-full object-cover nano-pixelated"
                          />
                        </div>
                        <div>
                          <p className="m-0 font-pixel text-[11px] uppercase tracking-wider text-white">
                            {post.author?.name}
                          </p>
                          <p className="m-0 text-[10px] text-[#73887a]">
                            {post.publishedAt}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="w-8 h-8 grid place-items-center bg-[#1f1b1c] text-[#fed701] hover:bg-[#fed701] hover:text-[#0c0a0b] transition-colors"
                        aria-label={`Read ${post.title}`}
                      >
                        <PixelIcon name="arrow-right" size={14} />
                      </Link>
                    </div>
                  </div>
                </NanoFrame>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* -------------------- TERMINAL NEWSLETTER SECTION -------------------- */}
      <section className="max-w-[1060px] mx-auto py-16 px-4 sm:px-6 lg:px-12">
        <NanoWindow title="terminal_subscribe.sh">
          <div className="p-4 sm:p-6 flex flex-col md:flex-row gap-8 items-center justify-between bg-[#151213]">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-[#fed701] mb-2 font-pixel text-xs tracking-wider">
                <PixelIcon name="bolt" size={14} />
                <span>NANO INTELLIGENCE STREAM</span>
              </div>
              <h3 className="nano-pixel text-2xl text-white mb-2 font-normal">
                RECEIVE TELEMETRY DISPATCHES
              </h3>
              <p className="m-0 text-sm leading-6 text-[#a9a4a0]">
                Bi-weekly teardowns of campaign algorithms, creator economics,
                and performance telemetry straight to your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-md">
              {subscribed ? (
                <div className="bg-[#3f612d]/30 border border-[#3f612d] p-4 text-center">
                  <p className="nano-pixel text-sm text-[#fed701] m-0">
                    TRANSMISSION REGISTERED. WELCOME TO THE RAILS.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (emailInput.trim()) setSubscribed(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="ENTER YOUR WORK EMAIL..."
                    className="flex-1 bg-[#1f1b1c] border-2 border-[#2e2526] text-white px-4 py-3 font-pixel text-xs tracking-wider outline-none focus:border-[#fed701]"
                  />
                  <button
                    type="submit"
                    className="nano-btn nano-btn--primary nano-btn--sm nano-notch-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <PixelIcon name="arrow-right" size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </NanoWindow>
      </section>

      {/* -------------------- ANKARA CTA BANNER -------------------- */}
      <section className="nano-pattern band-pattern py-20 px-4 sm:px-6 lg:px-12 bg-[#fed701]">
        <div className="nano-lift max-w-[860px] mx-auto">
          <NanoFrame tone="accent">
            <div className="flex flex-wrap items-center justify-between gap-6 p-4">
              <div className="max-w-lg">
                <h2 className="nano-pixel text-2xl sm:text-3xl font-normal leading-tight text-white mb-2">
                  READY TO RUN YOUR OWN CAMPAIGN?
                </h2>
                <p className="m-0 text-sm sm:text-base leading-6 text-[#a9a4a0]">
                  Get graded creators, live reporting, and automatic payouts.
                  Zero agency retainer fees.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setCampaignModalOpen(true)}
                  className="nano-btn nano-btn--primary nano-notch-sm cursor-pointer"
                >
                  <span>Open a campaign</span>
                  <PixelIcon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          </NanoFrame>
        </div>
      </section>

      {/* Footer & Modals */}
      <Footer onOpenCampaign={() => setCampaignModalOpen(true)} />
      <CampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
      />
      <NinjaModal
        isOpen={ninjaModalOpen}
        onClose={() => setNinjaModalOpen(false)}
      />
    </main>
  );
}
