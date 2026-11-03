"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";
import NinjaModal from "@/components/NinjaModal";

// Pixel art 12x12 SVG icon paths
const ICONS = {
  "arrow-right": "M6 1h1v1h-1zM6 2h2v1h-2zM6 3h3v1h-3zM6 4h4v1h-4zM0 5h11v1h-11zM0 6h11v1h-11zM6 7h4v1h-4zM6 8h3v1h-3zM6 9h2v1h-2zM6 10h1v1h-1z",
  "arrow-left": "M5 1h1v1h-1zM4 2h2v1h-2zM3 3h3v1h-3zM2 4h4v1h-4zM1 5h11v1h-11zM1 6h11v1h-11zM2 7h4v1h-4zM3 8h3v1h-3zM4 9h2v1h-2zM5 10h1v1h-1z",
  "close": "M1 1h2v1h-2zM9 1h2v1h-2zM1 2h3v1h-3zM8 2h3v1h-3zM2 3h3v1h-3zM7 3h3v1h-3zM3 4h6v1h-6zM4 5h4v1h-4zM4 6h4v1h-4zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM1 9h3v1h-3zM8 9h3v1h-3zM1 10h2v1h-2zM9 10h2v1h-2z",
  "plus": "M5 1h2v1h-2zM5 2h2v1h-2zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h10v1h-10zM1 6h10v1h-10zM5 7h2v1h-2zM5 8h2v1h-2zM5 9h2v1h-2zM5 10h2v1h-2z",
  "minus": "M1 5h10v1h-10zM1 6h10v1h-10z",
  "check": "M10 1h2v1h-2zM9 2h3v1h-3zM8 3h3v1h-3zM7 4h3v1h-3zM0 5h2v1h-2zM6 5h3v1h-3zM0 6h3v1h-3zM5 6h3v1h-3zM1 7h6v1h-6zM2 8h4v1h-4zM3 9h2v1h-2z",
  "chat": "M1 1h10v1h-10zM0 2h1v1h-1zM11 2h1v1h-1zM0 3h1v1h-1zM11 3h1v1h-1zM0 4h1v1h-1zM2 4h2v1h-2zM5 4h2v1h-2zM8 4h2v1h-2zM11 4h1v1h-1zM0 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM11 6h1v1h-1zM1 7h10v1h-10zM2 8h2v1h-2zM2 9h1v1h-1z",
  "play": "M2 1h2v1h-2zM2 2h4v1h-4zM2 3h6v1h-6zM2 4h8v1h-8zM2 5h9v1h-9zM2 6h9v1h-9zM2 7h8v1h-8zM2 8h6v1h-6zM2 9h4v1h-4zM2 10h2v1h-2z",
  "share": "M5 0h2v1h-2zM4 1h4v1h-4zM3 2h6v1h-6zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h2v1h-2zM5 5h2v1h-2zM9 5h2v1h-2zM1 6h2v1h-2zM5 6h2v1h-2zM9 6h2v1h-2zM1 7h2v1h-2zM9 7h2v1h-2zM1 8h2v1h-2zM9 8h2v1h-2zM1 9h10v1h-10zM1 10h10v1h-10z",
  "calendar": "M3 0h1v1h-1zM8 0h1v1h-1zM1 1h10v1h-10zM1 2h10v1h-10zM1 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM3 4h2v1h-2zM6 4h2v1h-2zM10 4h1v1h-1zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM3 6h2v1h-2zM6 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM1 8h10v1h-10z",
  "lock": "M4 0h4v1h-4zM3 1h1v1h-1zM8 1h1v1h-1zM3 2h1v1h-1zM8 2h1v1h-1zM3 3h1v1h-1zM8 3h1v1h-1zM1 4h10v1h-10zM1 5h10v1h-10zM1 6h4v1h-4zM7 6h4v1h-4zM1 7h4v1h-4zM7 7h4v1h-4zM1 8h4v1h-4zM7 8h4v1h-4zM1 9h10v1h-10zM1 10h10v1h-10z",
  "eye": "M4 2h4v1h-4zM2 3h2v1h-2zM8 3h2v1h-2zM1 4h1v1h-1zM5 4h2v1h-2zM10 4h1v1h-1zM0 5h1v1h-1zM4 5h4v1h-4zM11 5h1v1h-1zM0 6h1v1h-1zM4 6h4v1h-4zM11 6h1v1h-1zM1 7h1v1h-1zM5 7h2v1h-2zM10 7h1v1h-1zM2 8h2v1h-2zM8 8h2v1h-2zM4 9h4v1h-4z",
  "star": "M5 0h2v1h-2zM5 1h2v1h-2zM4 2h4v1h-4zM0 3h12v1h-12zM1 4h10v1h-10zM2 5h8v1h-8zM3 6h6v1h-6zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM2 9h2v1h-2zM8 9h2v1h-2zM1 10h2v1h-2zM9 10h2v1h-2z",
  "bolt": "M6 0h3v1h-3zM5 1h3v1h-3zM4 2h3v1h-3zM3 3h3v1h-3zM2 4h8v1h-8zM5 5h3v1h-3zM4 6h3v1h-3zM3 7h3v1h-3zM2 8h2v1h-2zM1 9h1v1h-1z",
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

function GradeBadge({ grade = 1, showLabel = true, className = "" }) {
  const g = Math.max(1, Math.min(5, grade));
  return (
    <span
      className={`nano-grade nano-notch-sm ${className}`}
      role="img"
      aria-label={`Grade ${g} of 5`}
    >
      {showLabel && <span className="nano-grade__label">G{g}</span>}
      <span className="nano-grade__pips">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`nano-grade__pip ${i <= g ? "nano-grade__pip--on" : ""}`}
          />
        ))}
      </span>
    </span>
  );
}

function NinjaCard({
  name,
  niche = "Sample creator",
  avatar,
  grade,
  stat,
  tilt = 0,
  selected = false,
  className = "",
}) {
  return (
    <article
      className={`nano-card nano-lift ${selected ? "nano-card--selected" : ""} ${className}`}
      style={{ "--tilt": `${tilt}deg` }}
      aria-label={name}
    >
      <div
        className={`nano-frame nano-notch-md ${selected ? "nano-frame--accent" : ""}`}
      >
        <div className="nano-frame__in nano-notch-md nano-card__in">
          <div className="nano-card__art">
            <img className="nano-pixelated" src={avatar} alt={name} />
            {grade && (
              <span className="nano-card__badge">
                <GradeBadge grade={grade} />
              </span>
            )}
            {stat && <span className="nano-card__match">{stat}</span>}
          </div>
          <div>
            <h3 className="nano-card__name">{name}</h3>
            <p className="nano-card__niche">{niche}</p>
          </div>
        </div>
      </div>
    </article>
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

function NanoWindow({ title, children, className = "", onClose }) {
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
          <button
            className="nano-window__ctrl nano-window__ctrl--close"
            aria-label="Close"
            type="button"
            onClick={onClose}
          >
            <PixelIcon name="close" size={12} />
          </button>
        </span>
      </div>
      <div className="nano-window__body">{children}</div>
    </div>
  );
}

function NanoTag({ tone = "default", icon, children, className = "" }) {
  return (
    <span
      className={`nano-tag nano-notch-sm ${tone && tone !== "default" ? `nano-tag--${tone}` : ""} ${className}`}
    >
      {icon && <PixelIcon name={icon} size={12} className="mr-1" />}
      {children}
    </span>
  );
}

// Pixel Rank Emblems for G1 to G5
function GradeRankTile({ grade }) {
  // SVG Pixel Emblems matching the retro pixel rank tiles
  if (grade === 1) {
    return (
      <svg className="w-16 h-16 flex-none image-rendering-pixelated" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <rect x="2" y="2" width="12" height="12" fill="#2e2526" />
        <path d="M4 4h8v8H4z" fill="#151213" />
        <path d="M7 6h2v4H7zM6 7h4v2H6z" fill="#73887a" />
        <rect x="7" y="7" width="2" height="2" fill="#fed701" />
      </svg>
    );
  }
  if (grade === 2) {
    return (
      <svg className="w-16 h-16 flex-none image-rendering-pixelated" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <rect x="2" y="2" width="12" height="12" fill="#3f612d" />
        <path d="M4 4h8v8H4z" fill="#151213" />
        <path d="M5 6h6v1H5zM6 8h4v1H6zM7 10h2v1H7z" fill="#fed701" />
        <rect x="7" y="5" width="2" height="2" fill="#ffe763" />
      </svg>
    );
  }
  if (grade === 3) {
    return (
      <svg className="w-16 h-16 flex-none image-rendering-pixelated" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <rect x="2" y="2" width="12" height="12" fill="#bb5f04" />
        <path d="M4 4h8v8H4z" fill="#151213" />
        <path d="M5 5h6v2H5zM6 8h4v2H6zM7 11h2v1H7z" fill="#fed701" />
        <rect x="6" y="5" width="4" height="1" fill="#ffe763" />
        <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
      </svg>
    );
  }
  if (grade === 4) {
    return (
      <svg className="w-16 h-16 flex-none image-rendering-pixelated" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <rect x="2" y="2" width="12" height="12" fill="#f5ca0c" />
        <path d="M3 3h10v10H3z" fill="#0c0a0b" />
        <path d="M4 4h8v2H4zM5 7h6v2H5zM6 10h4v2H6z" fill="#fed701" />
        <rect x="6" y="4" width="4" height="2" fill="#ffffff" />
        <rect x="7" y="8" width="2" height="2" fill="#bb5f04" />
      </svg>
    );
  }
  return (
    <svg className="w-16 h-16 flex-none image-rendering-pixelated" viewBox="0 0 16 16" shapeRendering="crispEdges">
      <rect width="16" height="16" fill="#bb5f04" />
      <rect x="1" y="1" width="14" height="14" fill="#fed701" />
      <path d="M3 3h10v10H3z" fill="#151213" />
      <path d="M4 5h1v3H4zM6 4h1v4H6zM8 3h1v5H8zM10 4h1v4h-1zM12 5h1v3h-1zM4 9h9v2H4z" fill="#fed701" />
      <rect x="4" y="9" width="9" height="1" fill="#ffe763" />
      <rect x="7" y="5" width="2" height="2" fill="#ffffff" />
    </svg>
  );
}

// Pricing Custom Pixel Icons
function PricingIcon({ type }) {
  if (type === "content") {
    return (
      <svg className="w-12 h-12 flex-none" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <path d="M3 3h8v6H3z" fill="#fed701" />
        <path d="M4 4h6v4H4z" fill="#ffffff" />
        <rect x="3" y="9" width="2" height="4" fill="#fed701" />
      </svg>
    );
  }
  if (type === "traffic") {
    return (
      <svg className="w-12 h-12 flex-none" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <path d="M7 2h2v3H7zM7 11h2v3H7zM2 7h3v2H2zM11 7h3v2h-3z" fill="#ff4546" />
        <rect x="5" y="5" width="6" height="6" fill="#fed701" />
        <rect x="7" y="7" width="2" height="2" fill="#0c0a0b" />
      </svg>
    );
  }
  if (type === "fee") {
    return (
      <svg className="w-12 h-12 flex-none" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#1f1b1c" />
        <circle cx="8" cy="8" r="6" fill="#fed701" />
        <path d="M6 6h1v1H6zM9 9h1v1H9zM9 6h1v1H9zM6 9h1v1H6zM8 7h1v2H8z" fill="#0c0a0b" />
      </svg>
    );
  }
  return (
    <svg className="w-12 h-12 flex-none" viewBox="0 0 16 16" shapeRendering="crispEdges">
      <rect width="16" height="16" fill="#1f1b1c" />
      <path d="M5 3h6v4H5z" fill="#fed701" />
      <rect x="6" y="4" width="4" height="2" fill="#151213" />
      <path d="M4 7h8v6H4z" fill="#fed701" />
      <rect x="7" y="9" width="2" height="2" fill="#151213" />
    </svg>
  );
}

export default function BrandsPage() {
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [ninjaModalOpen, setNinjaModalOpen] = useState(false);

  // Section 4 interactive rule options state
  const [selectedPrep, setSelectedPrep] = useState("5 days");
  const [selectedCycles, setSelectedCycles] = useState("One cycle");
  const [selectedWho, setSelectedWho] = useState("Public");
  const [selectedPosting, setSelectedPosting] = useState("Rolling");

  const ladder = [
    { g: 1, image: "/ninja-grade-g1.png", note: "Fresh reach" },
    { g: 2, image: "/ninja-grade-g2.png", note: "A steady response" },
    { g: 3, image: "/ninja-grade-g3.png", note: "Reliably moves people" },
    { g: 4, image: "/ninja-grade-g4.png", note: "Real pull with a community" },
    { g: 5, image: "/ninja-grade-g5.png", note: "Top tier" },
  ];

  const rules = [
    {
      id: "prep",
      label: "Prep window",
      icon: "calendar",
      options: ["3 days", "5 days", "7 days", "14 days"],
      current: selectedPrep,
      setter: setSelectedPrep,
      note: "Time creators get to prepare.",
    },
    {
      id: "cycles",
      label: "Cycles",
      icon: "bolt",
      options: ["One cycle", "Many"],
      current: selectedCycles,
      setter: setSelectedCycles,
      note: "Run it once, or keep it going.",
    },
    {
      id: "who",
      label: "Who joins",
      icon: "lock",
      options: ["Public", "Private"],
      current: selectedWho,
      setter: setSelectedWho,
      note: "Public auto-invites matched creators. Private is by invite only.",
    },
    {
      id: "posting",
      label: "Posting",
      icon: "play",
      options: ["Rolling", "Launch day"],
      current: selectedPosting,
      setter: setSelectedPosting,
      note: "Rolling posting, or a locked launch day.",
    },
  ];

  const prices = [
    {
      label: "Content campaigns",
      value: "≈₦45,000",
      note: "Per creator, set by grade.",
      icon: "/speech-bubble.png",
      tone: "default",
    },
    {
      label: "Traffic campaigns",
      value: "₦25 to ₦50",
      note: "Per verified click.",
      icon: "/target.png",
      tone: "default",
    },
    {
      label: "Platform fee",
      value: "7.5%",
      note: "Capped at ₦500,000.",
      icon: "/naira.png",
      tone: "default",
    },
    {
      label: "Commitment",
      value: "None",
      note: "No retainers, no lock-in.",
      icon: "/wallet.png",
      tone: "accent",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-[#ffffff] font-sans nano-page relative nano-grid">
      {/* Navbar with active page 'For brands' */}
      <Navbar
        onOpenCampaign={() => setCampaignModalOpen(true)}
        onOpenNinja={() => setNinjaModalOpen(true)}
      />

      {/* -------------------- SECTION 1: HERO -------------------- */}
      <section className="max-w-[1280px] mx-auto pt-36 pb-24 px-4 sm:px-6 lg:px-12 flex flex-wrap items-center gap-14">
        <div className="flex-[999_1_520px] min-w-0">
          <p className="nano-eyebrow mb-5 text-[#73887a] text-base tracking-[0.1em]">
            For brands
          </p>
          <h1 className="nano-pixel mb-6 font-normal text-4xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[0.02em] text-[#ffffff]">
            YOUR CAMPAIGN. <span className="nano-hl text-[#fed701]">OUR ENGINE.</span>
          </h1>
          <p className="mb-8 max-w-[600px] text-lg sm:text-xl leading-[30px] font-medium text-[#a9a4a0]">
            Everything you need to run creator campaigns on purpose: graded creators,
            briefs in their own voice, live numbers, automatic payouts. One platform,
            start to finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://app.nanosocials.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nano-btn nano-btn--primary nano-btn--lg nano-notch-sm inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Open a campaign</span>
              <PixelIcon name="arrow-right" size={16} />
            </a>
            <a
              href="#pricing"
              className="nano-btn nano-btn--outline nano-btn--lg nano-notch-sm inline-flex cursor-pointer text-decoration-none"
            >
              <span className="nano-btn__in nano-notch-sm">See pricing</span>
            </a>
          </div>
        </div>

        {/* Right Hero: 3 Tilted Ninja Cards */}
        <div className="flex-[1_1_420px] min-w-0 flex flex-col items-center gap-5">
          <div className="flex justify-center items-start pt-4">
            {/* Left Card: Lifestyle (tilt -6deg) */}
            <div className="-mr-10 mt-6 relative z-10">
              <NinjaCard
                name="Lifestyle"
                niche="Sample creator"
                avatar="/images/avatar_lifestyle.jpg"
                grade={2}
                tilt={-6}
              />
            </div>
            {/* Center Card: Tech (selected, tilt 0deg) */}
            <div className="relative z-30">
              <NinjaCard
                name="Tech"
                niche="Sample creator"
                avatar="/images/avatar_tech.jpg"
                grade={4}
                tilt={0}
                selected={true}
              />
            </div>
            {/* Right Card: Beauty (tilt +6deg) */}
            <div className="hidden sm:block -ml-10 mt-6 relative z-20">
              <NinjaCard
                name="Beauty"
                niche="Sample creator"
                avatar="/images/avatar_beauty.jpg"
                grade={3}
                tilt={6}
              />
            </div>
          </div>
          <p className="m-0 font-pixel text-[13px] tracking-[0.08em] uppercase text-[#a9a4a0]">
            Sample wave. Illustrative creators.
          </p>
        </div>
      </section>

      {/* -------------------- SECTION 2: GRADES, NOT GUESSES -------------------- */}
      <section className="bg-[#151213] border-t-4 border-b-4 border-[#ffffff] py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1184px] mx-auto flex flex-wrap gap-14 items-center">
          <div className="flex-[1_1_480px] min-w-0">
            <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
              Grades, not guesses
            </p>
            <h2 className="nano-pixel mb-6 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
              Pick creators by what they move,{" "}
              <span className="nano-hl text-[#fed701]">not who they are.</span>
            </h2>
            <p className="mb-6 text-[#a9a4a0] text-lg leading-[28px]">
              Every creator on Nano is graded G1 to G5 on the things that matter:
              views, comments, likes, shares, reach. Follower count counts for the least.
              You are buying performance, not a vanity number.
            </p>
            <div className="flex flex-wrap gap-2">
              <NanoTag tone="accent" icon="eye">
                Views
              </NanoTag>
              <NanoTag tone="accent" icon="chat">
                Comments
              </NanoTag>
              <NanoTag tone="accent" icon="star">
                Likes
              </NanoTag>
              <NanoTag tone="accent" icon="share">
                Shares
              </NanoTag>
              <NanoTag tone="accent" icon="bolt">
                Reach
              </NanoTag>
              <NanoTag icon="minus">Followers, weighted least</NanoTag>
            </div>
          </div>

          {/* Right: Ladder in stepped white frame */}
          <div className="flex-[1_1_420px] min-w-0">
            <NanoFrame className="nano-lift">
              <ul className="list-none m-0 p-0 flex flex-col gap-4">
                {ladder.map((item) => (
                  <li key={item.g} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={`Grade G${item.g}`}
                      className="w-16 h-16 flex-none object-contain nano-pixelated"
                    />
                    <GradeBadge grade={item.g} />
                    <span className="text-[#a9a4a0] text-[15px] leading-[22px] font-sans">
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </NanoFrame>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 3: TWO WAYS TO RUN IT -------------------- */}
      <section className="max-w-[1280px] mx-auto py-24 px-4 sm:px-6 lg:px-12">
        <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
          Two ways to run it
        </p>
        <h2 className="nano-pixel mb-12 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
          Content for conversation.{" "}
          <span className="nano-hl text-[#fed701]">Traffic for clicks.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Content campaigns */}
          <div className="nano-lift h-full">
            <NanoFrame className="h-full">
              <img
                src="/images/d862cadd-a149-4b7d-b6db-84f54072d9c5.png"
                alt=""
                className="nano-pixelated w-16 h-16 object-contain mb-4"
              />
              <h3 className="nano-pixel mb-3 text-2xl font-normal tracking-[0.04em] text-[#ffffff]">
                Content campaigns
              </h3>
              <p className="m-0 text-[#a9a4a0] text-base leading-6">
                Creators post about your brand in their own voice. Built for conversation.
              </p>
            </NanoFrame>
          </div>

          {/* Card 2: Traffic campaigns */}
          <div className="nano-lift h-full">
            <NanoFrame className="h-full">
              <img
                src="/images/72070ed4-064f-4e67-83d7-8e2695f7f76e.png"
                alt=""
                className="nano-pixelated w-16 h-16 object-contain mb-4"
              />
              <h3 className="nano-pixel mb-3 text-2xl font-normal tracking-[0.04em] text-[#ffffff]">
                Traffic campaigns
              </h3>
              <p className="m-0 text-[#a9a4a0] text-base leading-6">
                Creators send people to your link. Built for clicks.
              </p>
            </NanoFrame>
          </div>

          {/* Card 3: Or both at once (Accent Yellow Frame) */}
          <div className="nano-lift h-full">
            <NanoFrame tone="accent" className="h-full">
              <div className="flex items-center gap-3 mb-4 text-[#fed701]">
                <PixelIcon name="plus" size={48} />
              </div>
              <h3 className="nano-pixel mb-3 text-2xl font-normal tracking-[0.04em] text-[#fed701]">
                Or both at once
              </h3>
              <p className="m-0 text-[#ffffff] text-base leading-6">
                Attach a click pool to a content wave and do both at once.
              </p>
            </NanoFrame>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 4: SET THE RULES -------------------- */}
      <section className="nano-pattern band-pattern py-24 px-4 sm:px-6 lg:px-12 bg-[#fed701]">
        <div className="max-w-[1184px] mx-auto">
          <NanoWindow title="campaign_rules.cfg">
            <div className="flex flex-col gap-8 p-2">
              <div>
                <h2 className="nano-pixel mb-3 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
                  Set the rules,{" "}
                  <span className="nano-hl text-[#fed701]">then let it run.</span>
                </h2>
                <p className="m-0 text-lg leading-[28px] text-[#a9a4a0]">
                  You decide, the engine handles the rest.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rules.map((r) => (
                  <div
                    key={r.id}
                    className="bg-[#1f1b1c] p-5 flex flex-col justify-between gap-4 border border-[#2e2526]"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-[#fed701]">
                        <PixelIcon name={r.icon} size={16} />
                        <span className="font-pixel text-sm tracking-[0.1em] uppercase text-[#ffffff]">
                          {r.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {r.options.map((opt) => {
                          const isActive = r.current === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => r.setter(opt)}
                              className={`cursor-pointer transition-colors ${
                                isActive
                                  ? "nano-tag nano-tag--accent"
                                  : "nano-tag hover:text-[#fed701]"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <p className="m-0 text-sm leading-5 font-medium text-[#a9a4a0]">
                      {r.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </NanoWindow>
        </div>
      </section>

      {/* -------------------- SECTION 5: REPORTING -------------------- */}
      <section className="max-w-[1280px] mx-auto py-24 px-4 sm:px-6 lg:px-12 flex flex-wrap gap-14 items-center">
        <div className="flex-[1_1_420px] min-w-0">
          <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
            Reporting
          </p>
          <h2 className="nano-pixel mb-6 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
            See the campaign,{" "}
            <span className="nano-hl text-[#fed701]">not a summary.</span>
          </h2>
          <p className="m-0 text-lg leading-[28px] text-[#a9a4a0]">
            Every post measured on its own, from the day it goes live, per creator,
            in real time. The report is the product, not an afterthought.
          </p>
        </div>

        <div className="flex-[1_1_520px] min-w-0">
          <NanoWindow title="live_report">
            <div
              role="img"
              aria-label="Image needed: the real Nano campaign dashboard"
              className="aspect-[16/10] border-4 border-dashed border-[#73887a] grid place-items-center text-center p-6 box-border bg-[#151213]"
            >
              <div>
                <p className="m-0 mb-2 font-pixel text-base tracking-[0.1em] uppercase text-[#fed701]">
                  [Image needed]
                </p>
                <p className="m-0 max-w-md text-sm leading-5 text-[#a9a4a0]">
                  Screenshot of the live brand dashboard: per-creator views, reach,
                  engagement and clicks
                </p>
              </div>
            </div>
          </NanoWindow>
        </div>
      </section>

      {/* -------------------- SECTION 6: PRICING -------------------- */}
      <section
        id="pricing"
        className="bg-[#151213] border-t-4 border-b-4 border-[#ffffff] py-24 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-[1184px] mx-auto">
          <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
            Pricing
          </p>
          <h2 className="nano-pixel mb-12 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
            Pricing, <span className="nano-hl text-[#fed701]">plainly.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prices.map((p) => (
              <div key={p.label} className="nano-lift h-full">
                <NanoFrame tone={p.tone} className="h-full">
                  <div className="flex flex-col justify-between gap-3 min-h-[220px]">
                    <div>
                      <div className="mb-3">
                        <img
                          src={p.icon}
                          alt=""
                          className="w-12 h-12 flex-none object-contain nano-pixelated"
                        />
                      </div>
                      <p className="m-0 font-pixel text-[13px] tracking-[0.1em] uppercase text-[#a9a4a0]">
                        {p.label}
                      </p>
                      <p className="m-0 mt-2 font-pixel text-4xl leading-[1.05] text-[#fed701]">
                        {p.value}
                      </p>
                    </div>
                    <p className="m-0 text-[15px] leading-[22px] text-[#ffffff]">
                      {p.note}
                    </p>
                  </div>
                </NanoFrame>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 7: CTA -------------------- */}
      <section
        id="open"
        className="nano-pattern band-pattern py-24 px-4 sm:px-6 lg:px-12 bg-[#fed701]"
      >
        <div className="nano-lift max-w-[860px] mx-auto">
          <NanoFrame>
            <div className="flex flex-wrap items-center gap-8 p-4">
              <img
                src="/images/94e4d81e-793e-42bb-951a-f759b127d6df.png"
                alt="Nano Ninja"
                className="nano-pixelated hidden sm:block flex-none w-[180px] lg:w-[200px] h-auto"
              />
              <div className="flex-[1_1_320px] min-w-0">
                <h2 className="nano-pixel mb-6 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
                  One platform,{" "}
                  <span className="nano-hl text-[#fed701]">start to finish.</span>
                </h2>
                <a
                  href="https://app.nanosocials.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nano-btn nano-btn--primary nano-btn--lg nano-notch-sm inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>Open a campaign</span>
                  <PixelIcon name="arrow-right" size={16} />
                </a>
              </div>
            </div>
          </NanoFrame>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
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
