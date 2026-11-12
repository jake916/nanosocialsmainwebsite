"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NinjaModal from "@/components/NinjaModal";
import CampaignModal from "@/components/CampaignModal";

// Pixel art 12x12 SVG icon paths matching retro tech aesthetic
const ICONS = {
  "arrow-right":
    "M6 1h1v1h-1zM6 2h2v1h-2zM6 3h3v1h-3zM6 4h4v1h-4zM0 5h11v1h-11zM0 6h11v1h-11zM6 7h4v1h-4zM6 8h3v1h-3zM6 9h2v1h-2zM6 10h1v1h-1z",
  "caret-right":
    "M2 1h2v1h-2zM2 2h3v1h-3zM3 3h3v1h-3zM4 4h3v1h-3zM5 5h3v1h-3zM5 6h3v1h-3zM4 7h3v1h-3zM3 8h3v1h-3zM2 9h3v1h-3zM2 10h2v1h-2z",
  "caret-left":
    "M8 1h2v1h-2zM7 2h3v1h-3zM6 3h3v1h-3zM5 4h3v1h-3zM4 5h3v1h-3zM4 6h3v1h-3zM5 7h3v1h-3zM6 8h3v1h-3zM7 9h3v1h-3zM8 10h2v1h-2z",
  "close":
    "M1 1h2v1h-2zM9 1h2v1h-2zM1 2h3v1h-3zM8 2h3v1h-3zM2 3h3v1h-3zM7 3h3v1h-3zM3 4h6v1h-6zM4 5h4v1h-4zM4 6h4v1h-4zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM1 9h3v1h-3zM8 9h3v1h-3zM1 10h2v1h-2zM9 10h2v1h-2z",
  "plus":
    "M5 1h2v1h-2zM5 2h2v1h-2zM5 3h2v1h-2zM5 4h2v1h-2zM1 5h10v1h-10zM1 6h10v1h-10zM5 7h2v1h-2zM5 8h2v1h-2zM5 9h2v1h-2zM5 10h2v1h-2z",
  "minus": "M1 5h10v1h-10zM1 6h10v1h-10z",
  "check":
    "M10 1h2v1h-2zM9 2h3v1h-3zM8 3h3v1h-3zM7 4h3v1h-3zM0 5h2v1h-2zM6 5h3v1h-3zM0 6h3v1h-3zM5 6h3v1h-3zM1 7h6v1h-6zM2 8h4v1h-4zM3 9h2v1h-2z",
  "bolt":
    "M6 0h3v1h-3zM5 1h3v1h-3zM4 2h3v1h-3zM3 3h3v1h-3zM2 4h8v1h-8zM5 5h3v1h-3zM4 6h3v1h-3zM3 7h3v1h-3zM2 8h2v1h-2zM1 9h1v1h-1z",
  "bounty":
    "M1 0h10v1h-10zM0 1h1v1h-1zM2 1h8v1h-8zM11 1h1v1h-1zM0 2h1v1h-1zM2 2h8v1h-8zM11 2h1v1h-1zM1 3h1v1h-1zM3 3h6v1h-6zM10 3h1v1h-1zM3 4h6v1h-6zM4 5h4v1h-4zM5 6h2v1h-2zM5 7h2v1h-2zM3 8h6v1h-6zM2 9h8v1h-8z",
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

// Crisp Pixel Art Rank Emblems for G1 to G5
function GradeRankTile({ grade, size = 96 }) {
  if (grade === 1) {
    return (
      <svg
        className="flex-none image-rendering-pixelated"
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
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
      <svg
        className="flex-none image-rendering-pixelated"
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
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
      <svg
        className="flex-none image-rendering-pixelated"
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
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
      <svg
        className="flex-none image-rendering-pixelated"
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
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
    <svg
      className="flex-none image-rendering-pixelated"
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
    >
      <rect width="16" height="16" fill="#bb5f04" />
      <rect x="1" y="1" width="14" height="14" fill="#fed701" />
      <path d="M3 3h10v10H3z" fill="#151213" />
      <path d="M4 5h1v3H4zM6 4h1v4H6zM8 3h1v5H8zM10 4h1v4h-1zM12 5h1v3h-1zM4 9h9v2H4z" fill="#fed701" />
      <rect x="4" y="9" width="9" height="1" fill="#ffe763" />
      <rect x="7" y="5" width="2" height="2" fill="#ffffff" />
    </svg>
  );
}

const LANDSCAPE_FILES = new Set([
  "0B5A4111.jpg",
  "0B5A4119.jpg",
  "0B5A4261.jpg",
  "0B5A4353.jpg",
  "0B5A4415.jpg",
]);

const NINJA_NIGHT_IMAGES = [
  "0B5A4111.jpg",
  "0B5A4119.jpg",
  "0B5A4133.jpg",
  "0B5A4147.jpg",
  "0B5A4182.jpg",
  "0B5A4232.jpg",
  "0B5A4251.jpg",
  "0B5A4261.jpg",
  "0B5A4270.jpg",
  "0B5A4272.jpg",
  "0B5A4279.jpg",
  "0B5A4280.jpg",
  "0B5A4321.jpg",
  "0B5A4353.jpg",
  "0B5A4415.jpg",
  "0B5A4430.jpg",
  "0B5A4436.jpg",
].map((file, idx) => ({
  src: `/ninja%20night/${file}`,
  alt: `Ninja Night community gathering photo ${idx + 1}`,
  isLandscape: LANDSCAPE_FILES.has(file),
}));

const COLLABORATORY_IMAGES = [
  "SAJ_6209.jpg",
  "SAJ_6212.jpg",
  "SAJ_6217.jpg",
  "SAJ_6225.jpg",
  "SAJ_6227.jpg",
  "SAJ_6240.jpg",
  "SAJ_6244.jpg",
  "SAJ_6248.jpg",
  "SAJ_6256.jpg",
  "SAJ_6260.jpg",
  "SAJ_6268.jpg",
  "SAJ_6280.jpg",
  "SAJ_6287.jpg",
  "SAJ_6318.jpg",
  "SAJ_6338.jpg",
  "SAJ_6390.jpg",
  "SAJ_6410.jpg",
  "SAJ_6440.jpg",
  "SAJ_6450.jpg",
  "SAJ_6526.jpg",
  "SAJ_6573.JPG",
].map((file, idx) => ({
  src: `/collaboratory/${file}`,
  alt: `The Collaboratory space photo ${idx + 1}`,
  isLandscape: false,
}));

function WindowImageSlider({ images, label = "photo", intervalMs = 3500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, images.length, intervalMs]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative aspect-[4/5] h-[420px] sm:h-[500px] lg:h-[540px] w-full border-4 border-[#ffffff] overflow-hidden mb-5 bg-[#0c0a0b] group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
            idx === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Ambient blurred backdrop so any aspect ratio looks full and framed */}
          <img
            src={img.src}
            alt=""
            aria-hidden="true"
            loading={idx === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover object-center blur-xl scale-110 opacity-40 pointer-events-none"
          />

          {/* Main Centered Image */}
          <img
            src={img.src}
            alt={img.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`relative z-10 w-full h-full ${
              img.isLandscape
                ? "object-contain object-center"
                : "object-cover object-center"
            }`}
          />
        </div>
      ))}

      {/* Top-right frame counter badge */}
      <div className="absolute top-3 right-3 z-20 bg-[#0c0a0b]/90 border-2 border-[#ffffff] px-2.5 py-1 font-pixel text-xs tracking-[0.1em] text-[#fed701]">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </div>

      {/* Previous & Next Pixel Controls */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label={`Previous ${label}`}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#0c0a0b]/85 hover:bg-[#fed701] text-[#ffffff] hover:text-[#0c0a0b] border-2 border-[#ffffff] grid place-items-center cursor-pointer transition-colors opacity-90 group-hover:opacity-100"
      >
        <PixelIcon name="caret-left" size={14} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label={`Next ${label}`}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#0c0a0b]/85 hover:bg-[#fed701] text-[#ffffff] hover:text-[#0c0a0b] border-2 border-[#ffffff] grid place-items-center cursor-pointer transition-colors opacity-90 group-hover:opacity-100"
      >
        <PixelIcon name="caret-right" size={14} />
      </button>

      {/* Bottom Pixel Pip Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-[#0c0a0b]/85 px-2.5 py-1.5 border-2 border-[#2e2526] max-w-[92%] overflow-x-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Show ${label} ${idx + 1}`}
            className={`h-2 flex-none transition-all cursor-pointer border-0 p-0 ${
              idx === currentIndex
                ? "w-3.5 bg-[#fed701]"
                : "w-1.5 bg-[#73887a] hover:bg-[#ffffff]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CreatorsPage() {
  const [ninjaModalOpen, setNinjaModalOpen] = useState(false);
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);

  // The Ninja Path progression
  const arc = [
    { label: "Dismissed", icon: "close", bg: "#1f1b1c", fg: "#a9a4a0", more: true },
    { label: "Chosen", icon: "check", bg: "#3f612d", fg: "#ffffff", more: true },
    { label: "Deployed", icon: "bolt", bg: "#ffffff", fg: "#0c0a0b", more: true },
    { label: "Bounty", icon: "bounty", bg: "#fed701", fg: "#0c0a0b", more: false },
  ];

  const fees = [
    { g: 1, fee: "₦30,000", image: "/ninja-grade-g1.png", tone: "default" },
    { g: 2, fee: "₦45,000", image: "/ninja-grade-g2.png", tone: "default" },
    { g: 3, fee: "₦60,000", image: "/ninja-grade-g3.png", tone: "default" },
    { g: 4, fee: "₦90,000", image: "/ninja-grade-g4.png", tone: "default" },
    { g: 5, fee: "₦120,000", image: "/ninja-grade-g5.png", tone: "accent" },
  ];

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-[#ffffff] font-sans nano-page relative nano-grid">
      {/* Navbar with active page 'For creators' */}
      <Navbar
        onOpenCampaign={() => setCampaignModalOpen(true)}
        onOpenNinja={() => setNinjaModalOpen(true)}
      />

      {/* -------------------- SECTION 1: HERO -------------------- */}
      <section className="max-w-[1280px] mx-auto pt-36 pb-20 px-4 sm:px-6 lg:px-12 flex flex-wrap items-center gap-12">
        <div className="flex-[999_1_560px] min-w-0">
          <p className="nano-eyebrow mb-5 text-[#73887a] text-base tracking-[0.1em]">
            For creators
          </p>
          <h1 className="nano-pixel mb-6 font-normal text-4xl sm:text-6xl lg:text-[80px] leading-[0.96] tracking-[0.02em] text-[#ffffff]">
            YOU ARE NOT <span className="nano-hl text-[#fed701]">TOO SMALL.</span>
          </h1>
          <p className="mb-8 max-w-[600px] text-lg sm:text-xl leading-[30px] font-medium text-[#a9a4a0]">
            Nano does not care how many followers you have. We care how you move people.
            Get chosen for your craft, get real brand work, get paid.
          </p>
          <div>
            <button
              onClick={() => setNinjaModalOpen(true)}
              className="nano-btn nano-btn--primary nano-btn--lg nano-notch-sm inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Become a Ninja</span>
              <PixelIcon name="arrow-right" size={16} />
            </button>
          </div>

          {/* The Ninja Path Progress Bar */}
          <ol
            aria-label="The Ninja path"
            className="list-none m-0 mt-12 p-0 flex flex-wrap items-center gap-3"
          >
            {arc.map((a) => (
              <li key={a.label} className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 px-3 py-2 font-pixel text-sm tracking-[0.1em] uppercase"
                  style={{ backgroundColor: a.bg, color: a.fg }}
                >
                  <PixelIcon name={a.icon} size={16} />
                  {a.label}
                </span>
                {a.more && (
                  <span aria-hidden="true" className="text-[#73887a]">
                    <PixelIcon name="caret-right" size={16} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Right Column: Happy Gold Ninja Mascot */}
        <div className="flex-[1_1_340px] flex justify-center items-center">
          <img
            src="/images/7dd0e6e6-e376-4ce3-a7cf-28b5d1a584d2.png"
            alt="A happy Nano Ninja"
            className="nano-pixelated w-[340px] max-w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* -------------------- SECTION 2: GRADED ON WHAT YOU DO -------------------- */}
      <section className="bg-[#151213] border-t-4 border-b-4 border-[#ffffff] py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1184px] mx-auto flex flex-wrap gap-14 items-center">
          <div className="flex-[1_1_460px] min-w-0">
            <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
              G1 to G5
            </p>
            <h2 className="nano-pixel mb-6 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
              Graded on what you do,{" "}
              <span className="nano-hl text-[#fed701]">not what you have.</span>
            </h2>
            <p className="m-0 text-[#a9a4a0] text-lg leading-[28px]">
              G1 to G5. You climb by making people watch, comment, share and care.
              Follower count is the smallest part of the maths. Do the work, move up,
              earn more.
            </p>
          </div>

          {/* Right Column: 4 Avatars in a Row */}
          <div className="flex-[1_1_420px] min-w-0 grid grid-cols-4 gap-4">
            <div className="nano-avatar aspect-square overflow-hidden bg-[#1f1b1c]">
              <img
                src="/images/avatar_creator1.jpg"
                alt="Creator avatar"
                className="w-full h-full object-cover nano-pixelated"
              />
            </div>
            <div className="nano-avatar nano-avatar--ring aspect-square overflow-hidden bg-[#1f1b1c]">
              <img
                src="/images/avatar_tech.jpg"
                alt="Top rated creator"
                className="w-full h-full object-cover nano-pixelated"
              />
            </div>
            <div className="nano-avatar aspect-square overflow-hidden bg-[#1f1b1c]">
              <img
                src="/images/avatar_beauty.jpg"
                alt="Creator avatar"
                className="w-full h-full object-cover nano-pixelated"
              />
            </div>
            <div className="nano-avatar aspect-square overflow-hidden bg-[#1f1b1c]">
              <img
                src="/images/avatar_lifestyle.jpg"
                alt="Creator avatar"
                className="w-full h-full object-cover nano-pixelated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 3: REAL BRIEFS. REAL MONEY. -------------------- */}
      <section className="max-w-[1280px] mx-auto py-24 px-4 sm:px-6 lg:px-12">
        <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
          Per campaign, by grade
        </p>
        <h2 className="nano-pixel mb-12 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
          Real briefs. Real brands.{" "}
          <span className="nano-hl text-[#fed701]">Real money.</span>
        </h2>
        <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fees.map((f) => (
            <li key={f.g} className="nano-lift h-full">
              <NanoFrame tone={f.tone} className="h-full">
                <div className="flex flex-col items-start gap-3.5">
                  <div className="w-24 h-24 flex-none bg-[#1f1b1c] overflow-hidden flex items-center justify-center">
                    <img
                      src={f.image}
                      alt={`Grade G${f.g}`}
                      className="w-full h-full object-contain nano-pixelated"
                    />
                  </div>
                  <GradeBadge grade={f.g} />
                  <p className="m-0 font-pixel text-[32px] leading-none text-[#fed701]">
                    {f.fee}
                  </p>
                </div>
              </NanoFrame>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------- SECTION 4: YOU TELL THE STORY YOUR WAY -------------------- */}
      <section className="nano-pattern band-pattern py-24 px-4 sm:px-6 lg:px-12 bg-[#fed701]">
        <div className="max-w-[1060px] mx-auto flex flex-wrap gap-8 items-stretch">
          {/* Left Frame */}
          <div className="nano-lift flex-[1_1_440px] min-w-0">
            <NanoFrame className="h-full">
              <h2 className="nano-pixel mb-4 font-normal text-2xl sm:text-3xl lg:text-[36px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
                You tell the story{" "}
                <span className="nano-hl text-[#fed701]">your way.</span>
              </h2>
              <p className="m-0 text-lg leading-[28px] text-[#a9a4a0]">
                We match you to brands that fit your voice and draft a first script in it.
                You make it yours.
              </p>
            </NanoFrame>
          </div>

          {/* Right Window: first_script.txt */}
          <div className="nano-lift flex-[1_1_380px] min-w-0">
            <NanoWindow title="first_script.txt" className="h-full">
              <div className="nano-dialog">
                <div className="w-16 h-16 flex-none bg-[#1f1b1c] overflow-hidden">
                  <img
                    src="/images/avatar_tech.jpg"
                    alt=""
                    className="w-full h-full object-cover nano-pixelated"
                  />
                </div>
                <div>
                  <p className="nano-dialog__speaker font-pixel text-xs tracking-[0.1em] text-[#a9a4a0] uppercase mb-2">
                    Draft, in your voice
                  </p>
                  <ul className="nano-dialog__lines list-none m-0 p-0 font-pixel text-[15px] leading-6 tracking-[0.06em] text-white">
                    <li>[Brand] matched you.</li>
                    <li>Here is a first script,</li>
                    <li>
                      written the way you talk.
                      <span className="caret"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </NanoWindow>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 5: THIS IS A CLAN, NOT A QUEUE. -------------------- */}
      <section className="max-w-[1280px] mx-auto py-24 px-4 sm:px-6 lg:px-12">
        <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
          The clan
        </p>
        <h2 className="nano-pixel mb-4 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
          This is a clan,{" "}
          <span className="nano-hl text-[#fed701]">not a queue.</span>
        </h2>
        <p className="mb-12 max-w-[640px] text-lg leading-[28px] text-[#a9a4a0]">
          People who build like you do. You are in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Window 1: ninja_night.jpg */}
          <NanoWindow title="ninja_night.jpg">
            <WindowImageSlider
              images={NINJA_NIGHT_IMAGES}
              label="Ninja Night photo"
              intervalMs={3500}
            />
            <h3 className="nano-pixel mb-2 font-normal text-[22px] tracking-[0.04em] text-[#ffffff]">
              Ninja Night
            </h3>
            <p className="m-0 text-base leading-6 text-[#a9a4a0]">
              The last Friday of every month.
            </p>
          </NanoWindow>

          {/* Window 2: the_collaboratory.jpg */}
          <NanoWindow title="the_collaboratory.jpg">
            <WindowImageSlider
              images={COLLABORATORY_IMAGES}
              label="Collaboratory photo"
              intervalMs={3800}
            />
            <h3 className="nano-pixel mb-2 font-normal text-[22px] tracking-[0.04em] text-[#ffffff]">
              The Collaboratory
            </h3>
            <p className="m-0 text-base leading-6 text-[#a9a4a0]">
              When you need a room with light and power that actually works.
            </p>
          </NanoWindow>
        </div>
      </section>

      {/* -------------------- SECTION 6: CTA -------------------- */}
      <section
        id="apply"
        className="nano-pattern band-pattern py-24 px-4 sm:px-6 lg:px-12 bg-[#fed701]"
      >
        <div className="nano-lift max-w-[860px] mx-auto">
          <NanoFrame tone="accent">
            <div className="flex flex-wrap items-center gap-8 p-4">
              <img
                src="/images/e2f2e8c8-91e9-4488-bb72-a14a61a6b2fe.png"
                alt="Ninja in motion"
                className="nano-pixelated hidden sm:block flex-none w-[200px] lg:w-[220px] h-auto object-contain"
              />
              <div className="flex-[1_1_320px] min-w-0">
                <h2 className="nano-pixel mb-3 font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
                  Chosen for your craft.{" "}
                  <span className="nano-hl text-[#fed701]">Ready?</span>
                </h2>
                <p className="mb-7 text-lg leading-[28px] text-[#a9a4a0]">
                  Get chosen for your craft, get real brand work, get paid.
                </p>
                <button
                  onClick={() => setNinjaModalOpen(true)}
                  className="nano-btn nano-btn--primary nano-btn--lg nano-notch-sm inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>Become a Ninja</span>
                  <PixelIcon name="arrow-right" size={16} />
                </button>
              </div>
            </div>
          </NanoFrame>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <NinjaModal
        isOpen={ninjaModalOpen}
        onClose={() => setNinjaModalOpen(false)}
      />
      <CampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
      />
    </main>
  );
}
