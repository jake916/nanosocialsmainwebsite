"use client";

import { useState } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";
import NinjaModal from "@/components/NinjaModal";

// Pixel art 12x12 SVG icons
const ICONS = {
  "arrow-right":
    "M6 1h1v1h-1zM6 2h2v1h-2zM6 3h3v1h-3zM6 4h4v1h-4zM0 5h11v1h-11zM0 6h11v1h-11zM6 7h4v1h-4zM6 8h3v1h-3zM6 9h2v1h-2zM6 10h1v1h-1z",
  "arrow-left":
    "M5 1h1v1h-1zM4 2h2v1h-2zM3 3h3v1h-3zM2 4h4v1h-4zM1 5h11v1h-11zM1 6h11v1h-11zM2 7h4v1h-4zM3 8h3v1h-3zM4 9h2v1h-2zM5 10h1v1h-1z",
  "bolt":
    "M6 0h3v1h-3zM5 1h3v1h-3zM4 2h3v1h-3zM3 3h3v1h-3zM2 4h8v1h-8zM5 5h3v1h-3zM4 6h3v1h-3zM3 7h3v1h-3zM2 8h2v1h-2zM1 9h1v1h-1z",
  "close":
    "M1 1h2v1h-2zM9 1h2v1h-2zM1 2h3v1h-3zM8 2h3v1h-3zM2 3h3v1h-3zM7 3h3v1h-3zM3 4h6v1h-6zM4 5h4v1h-4zM4 6h4v1h-4zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM1 9h3v1h-3zM8 9h3v1h-3zM1 10h2v1h-2zM9 10h2v1h-2z",
  "plus":
    "M5 1h2v1h-2zM5 2h2v1h-2zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h10v1h-10zM1 6h10v1h-10zM5 7h2v1h-2zM5 8h2v1h-2zM5 9h2v1h-2zM5 10h2v1h-2z",
  "minus": "M1 5h10v1h-10zM1 6h10v1h-10z",
  "share":
    "M5 0h2v1h-2zM4 1h4v1h-4zM3 2h6v1h-6zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h2v1h-2zM5 5h2v1h-2zM9 5h2v1h-2zM1 6h2v1h-2zM5 6h2v1h-2zM9 6h2v1h-2zM1 7h2v1h-2zM9 7h2v1h-2zM1 8h2v1h-2zM9 8h2v1h-2zM1 9h10v1h-10zM1 10h10v1h-10z",
  "check":
    "M10 1h2v1h-2zM9 2h3v1h-3zM8 3h3v1h-3zM7 4h3v1h-3zM0 5h2v1h-2zM6 5h3v1h-3zM0 6h3v1h-3zM5 6h3v1h-3zM1 7h6v1h-6zM2 8h4v1h-4zM3 9h2v1h-2z",
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

export default function BlogPostClient({ post, relatedPosts }) {
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [ninjaModalOpen, setNinjaModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-[#ffffff] font-sans nano-page relative nano-grid">
      <Navbar
        onOpenCampaign={() => setCampaignModalOpen(true)}
        onOpenNinja={() => setNinjaModalOpen(true)}
      />

      {/* -------------------- BREADCRUMB & HEADER -------------------- */}
      <article className="max-w-[1184px] mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-pixel text-xs tracking-wider text-[#73887a]">
          <Link href="/" className="hover:text-[#fed701] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#fed701] transition-colors">
            BLOG
          </Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px] sm:max-w-md">
            {post.slug.toUpperCase()}
          </span>
        </div>

        {/* Article Meta Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="nano-tag nano-tag--accent">{post.category}</span>
            <span className="font-pixel text-xs tracking-wider text-[#a9a4a0]">
              {post.readTime}
            </span>
            <span className="font-pixel text-xs tracking-wider text-[#73887a]">
              • PUBLISHED ON {post.publishedAt.toUpperCase()}
            </span>
          </div>

          <h1 className="nano-pixel text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-2xl leading-relaxed text-[#a9a4a0] max-w-4xl font-normal mb-8">
            {post.summary}
          </p>

          {/* Author Row & Share Action */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y-2 border-[#1f1b1c]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex-none bg-[#1f1b1c] overflow-hidden border border-[#2e2526]">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover nano-pixelated"
                />
              </div>
              <div>
                <p className="m-0 font-pixel text-sm uppercase tracking-wider text-white">
                  {post.author.name}
                </p>
                <p className="m-0 text-xs text-[#a9a4a0]">{post.author.role}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="nano-btn nano-btn--outline nano-btn--sm nano-notch-sm cursor-pointer"
              >
                <span className="nano-btn__in nano-notch-sm flex items-center gap-2">
                  <PixelIcon name={copied ? "check" : "share"} size={12} />
                  <span>{copied ? "Link Copied!" : "Share Link"}</span>
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="aspect-[16/9] w-full bg-[#151213] border-4 border-[#2e2526] overflow-hidden mb-16 nano-lift">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover nano-pixelated"
          />
        </div>

        {/* -------------------- MAIN CONTENT GRID -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Sidebar: Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <NanoWindow title="contents.idx">
                <p className="font-pixel text-xs text-[#73887a] tracking-widest uppercase mb-4">
                  DOCUMENT INDEX
                </p>
                <nav className="flex flex-col gap-3 font-pixel text-xs tracking-wider">
                  {post.tableOfContents.map((toc, idx) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="flex items-start gap-2 text-[#a9a4a0] hover:text-[#fed701] transition-colors leading-relaxed group"
                    >
                      <span className="text-[#fed701] flex-none">0{idx + 1}.</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {toc.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </NanoWindow>
            )}

            {/* Quick Metadata Box */}
            <div className="bg-[#151213] p-5 border border-[#1f1b1c]">
              <p className="font-pixel text-[11px] text-[#73887a] tracking-widest uppercase mb-3">
                METADATA TAGS
              </p>
              <div className="flex flex-wrap gap-2">
                {(post.tags || []).map((tag) => (
                  <span key={tag} className="nano-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Article Body */}
          <div className="lg:col-span-8 space-y-8 text-[#d1cdc7] text-lg leading-relaxed font-sans">
            {post.body ? (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="m-0 leading-8 font-normal text-[#c7c2bc] mb-6">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="nano-pixel text-2xl sm:text-3xl font-normal text-white pt-8 mb-4 scroll-mt-28 flex items-center gap-3">
                        <span className="text-[#fed701]">#</span>
                        <span>{children}</span>
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="nano-pixel text-xl sm:text-2xl font-normal text-white pt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <div className="bg-[#1f1b1c] border-l-4 border-[#fed701] p-6 nano-lift my-6">
                        <p className="font-pixel text-base sm:text-lg leading-7 text-white m-0 tracking-wide">
                          {children}
                        </p>
                      </div>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-none m-0 p-0 space-y-3.5 my-6">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-6 space-y-3.5 my-6 text-[#c7c2bc]">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="flex items-start gap-3">
                        <span className="text-[#fed701] flex-none font-pixel mt-1">
                          *
                        </span>
                        <span className="leading-7 text-[#c7c2bc]">{children}</span>
                      </li>
                    ),
                  },
                }}
              />
            ) : post.content ? (
              post.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={idx} className="m-0 leading-8 font-normal text-[#c7c2bc]">
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={idx}
                      id={block.id}
                      className="nano-pixel text-2xl sm:text-3xl font-normal text-white pt-8 mb-4 scroll-mt-28 flex items-center gap-3"
                    >
                      <span className="text-[#fed701]">#</span>
                      <span>{block.text}</span>
                    </h2>
                  );
                }

                if (block.type === "callout") {
                  return (
                    <div
                      key={idx}
                      className="bg-[#1f1b1c] border-l-4 border-[#fed701] p-6 nano-lift"
                    >
                      <p className="font-pixel text-xs text-[#fed701] tracking-widest uppercase mb-2">
                        [ {block.speaker} ]
                      </p>
                      <p className="font-pixel text-base sm:text-lg leading-7 text-white m-0 tracking-wide">
                        &ldquo;{block.quote}&rdquo;
                      </p>
                    </div>
                  );
                }

                if (block.type === "codebox") {
                  return (
                    <div key={idx} className="my-6">
                      <NanoWindow title={block.title}>
                        <pre className="m-0 p-4 font-mono text-xs sm:text-sm text-[#fed701] bg-[#0c0a0b] overflow-x-auto leading-6">
                          <code>{block.code}</code>
                        </pre>
                      </NanoWindow>
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={idx} className="list-none m-0 p-0 space-y-3.5 my-6">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="text-[#fed701] flex-none font-pixel mt-1">
                            *
                          </span>
                          <span className="leading-7">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })
            ) : null}

            {/* End of article marker */}
            <div className="pt-12 border-t-2 border-[#1f1b1c] flex items-center justify-between">
              <Link
                href="/blog"
                className="nano-btn nano-btn--outline nano-btn--sm nano-notch-sm inline-flex items-center gap-2 text-decoration-none"
              >
                <span className="nano-btn__in nano-notch-sm flex items-center gap-2">
                  <PixelIcon name="arrow-left" size={14} />
                  <span>Back to all dispatches</span>
                </span>
              </Link>

              <button
                onClick={handleCopyLink}
                className="nano-btn nano-btn--primary nano-btn--sm nano-notch-sm cursor-pointer"
              >
                <span>{copied ? "Copied" : "Share dispatch"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* -------------------- RELATED DISPATCHES -------------------- */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-16 border-t-4 border-[#1f1b1c]">
            <p className="nano-eyebrow text-[#73887a] text-sm tracking-[0.1em] mb-4">
              NEXT TRANSMISSIONS
            </p>
            <h2 className="nano-pixel text-3xl font-normal text-white mb-8">
              RELATED DISPATCHES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <article key={rel.slug} className="nano-lift">
                  <NanoFrame>
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="nano-tag">{rel.category}</span>
                          <span className="font-pixel text-[11px] text-[#a9a4a0]">
                            {rel.readTime}
                          </span>
                        </div>
                        <Link href={`/blog/${rel.slug}`} className="group text-decoration-none">
                          <h3 className="nano-pixel text-xl text-white group-hover:text-[#fed701] transition-colors mb-3 leading-snug">
                            {rel.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-[#a9a4a0] line-clamp-2 m-0 mb-6 leading-6">
                          {rel.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#2e2526] flex items-center justify-between">
                        <span className="font-pixel text-[11px] text-[#73887a]">
                          BY {rel.author.name.toUpperCase()}
                        </span>
                        <Link
                          href={`/blog/${rel.slug}`}
                          className="nano-btn nano-btn--primary nano-btn--sm nano-notch-sm"
                        >
                          <span>Read</span>
                          <PixelIcon name="arrow-right" size={12} />
                        </Link>
                      </div>
                    </div>
                  </NanoFrame>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* -------------------- ANKARA CTA SECTION -------------------- */}
      <section className="nano-pattern band-pattern py-20 px-4 sm:px-6 lg:px-12 bg-[#fed701]">
        <div className="nano-lift max-w-[860px] mx-auto">
          <NanoFrame tone="accent">
            <div className="flex flex-wrap items-center justify-between gap-6 p-4">
              <div className="max-w-lg">
                <h2 className="nano-pixel text-2xl sm:text-3xl font-normal leading-tight text-white mb-2">
                  ONE PLATFORM. START TO FINISH.
                </h2>
                <p className="m-0 text-sm sm:text-base leading-6 text-[#a9a4a0]">
                  Join hundreds of forward-thinking brands and creators building on Nano rails.
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
                <button
                  onClick={() => setNinjaModalOpen(true)}
                  className="nano-btn nano-btn--outline nano-notch-sm cursor-pointer"
                >
                  <span className="nano-btn__in nano-notch-sm">Become a Ninja</span>
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
