"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function Hero({ onOpenCampaign }) {
  const lines = [
    "I need 10 TikTok creators for Friday's drop.",
    "I need 5 Instagram creators who actually fit my brand.",
    "I need to see which creator moved the numbers.",
    "I need the report, not the guesswork.",
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [holdCount, setHoldCount] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("content");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        setCharIndex((prev) => prev + 1);
      } else if (holdCount < 36) {
        setHoldCount((prev) => prev + 1);
      } else {
        setLineIndex((prev) => (prev + 1) % lines.length);
        setCharIndex(0);
        setHoldCount(0);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [lineIndex, charIndex, holdCount, lines]);

  const typedText = lines[lineIndex].slice(0, charIndex);

  const menuItems = [
    { id: "content", label: "Content", meta: "Talk" },
    { id: "traffic", label: "Traffic", meta: "Click" },
    { id: "missions", label: "Missions", meta: "Soon", disabled: true },
  ];

  const arcItems = [
    { label: "Brief", value: "You set it" },
    { label: "Match", value: "Graded G1 to G5" },
    { label: "Track", value: "Per creator, live" },
    { label: "Payout", value: "Split automatically" },
  ];

  const brands = [
    "Mainstack",
    "Open Book",
    "Achievers Summit 2026",
    "Redchips Games",
    "Zap",
  ];

  return (
    <section id="top" className="nano-grid relative border-b-4 border-[#1f1b1c] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Hero Headline & Subhead */}
        <div className="text-center max-w-[960px] mx-auto">
          <p className="nano-eyebrow mb-4 text-[#73887a] text-base tracking-[0.1em]">
            Collaboration infrastructure for attention.
          </p>

          <div className="mb-6">
            <AnimatedHeadline />
          </div>

          <p className="max-w-[720px] mx-auto text-lg sm:text-xl leading-[30px] font-medium text-[#a9a4a0] mb-8 font-['Mona_Sans',sans-serif]">
            Nanosocials is where brands put a real brief in front of real creators, see exactly what each one drives, and pay for what moves. You run the campaign. We built the engine.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onOpenCampaign) onOpenCampaign();
              }}
              className="nano-btn nano-btn--primary nano-btn--lg"
            >
              <span>Open a campaign</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a
              href="#how"
              className="nano-btn nano-btn--outline nano-btn--lg"
            >
              <span className="nano-btn__in">See how it works</span>
            </a>
          </div>
        </div>

        {/* 3-Column Interactive Section: Brief & Types on Left | Mascot in Middle | Execution Arc on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center mt-14 max-w-[1200px] mx-auto">
          {/* Left Column: new_campaign.brief with campaign types underneath */}
          <div className="md:col-span-4 flex flex-col gap-4 w-full max-w-[380px] mx-auto md:mx-0">
            {/* new_campaign.brief Window */}
            <div className="nano-window nano-lift w-full">
              <div className="nano-window__bar">
                <span className="nano-window__title">new_campaign.brief</span>
                <div className="nano-window__ctrls">
                  <span className="nano-window__ctrl text-xs font-mono">-</span>
                  <span className="nano-window__ctrl text-xs font-mono">□</span>
                  <span className="nano-window__ctrl nano-window__ctrl--close text-xs font-mono">×</span>
                </div>
              </div>
              <div className="nano-window__body p-5">
                <p className="nano-pixel text-xs tracking-[0.1em] text-[#a9a4a0] mb-2">
                  Your brief
                </p>
                <p
                  aria-live="polite"
                  className="font-['VCR_OSD_Mono',monospace] text-base sm:text-lg leading-6 tracking-[0.04em] text-white min-h-[72px] m-0"
                >
                  {typedText}
                  <span className="caret" aria-hidden="true" />
                </p>
              </div>
            </div>

            {/* Campaign Types Menu Box directly under the brief */}
            <div className="bg-[#151213] border-4 border-white p-4 w-full nano-lift">
              <p className="nano-pixel text-xs text-[#a9a4a0] tracking-[0.1em] uppercase mb-2">
                Campaign types
              </p>
              <ul className="m-0 p-0 list-none space-y-1">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => !item.disabled && setSelectedGoal(item.id)}
                    className={`flex items-center justify-between p-2 font-['VCR_OSD_Mono',monospace] text-sm uppercase tracking-[0.08em] transition-colors ${
                      selectedGoal === item.id
                        ? "text-[#fed701] bg-[#1f1b1c]"
                        : item.disabled
                        ? "text-[#555052] cursor-not-allowed"
                        : "text-white hover:bg-[#1f1b1c] cursor-pointer"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={selectedGoal === item.id ? "text-[#fed701]" : "invisible"}>
                        ▶
                      </span>
                      {item.label}
                    </span>
                    <span className="text-xs text-[#a9a4a0]">{item.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Column: The Mascot in the Center (Larger Transparent Animated Ninja) */}
          <div className="md:col-span-4 flex justify-center items-center py-2 relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] flex justify-center items-center transform transition-transform hover:scale-105 duration-300">
              <Image
                src="/1023(1).gif"
                alt="The Animated Nano Ninja"
                width={360}
                height={480}
                unoptimized
                className="nano-pixelated object-contain w-full h-auto max-h-[460px] sm:max-h-[500px] md:max-h-[540px] drop-shadow-[0_15px_40px_rgba(254,215,1,0.3)] select-none"
                priority
              />
            </div>
          </div>

          {/* Right Column: The Execution Arc */}
          <div className="md:col-span-4 w-full max-w-[360px] mx-auto md:ml-auto md:mr-0">
            <div className="bg-[#151213] border-4 border-white p-5 space-y-4 nano-lift w-full">
              <p className="nano-pixel text-xs text-[#a9a4a0] tracking-[0.1em] uppercase mb-3">
                The execution arc
              </p>
              <div className="space-y-4">
                {arcItems.map((item, idx) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#fed701] text-[#0c0a0b] flex items-center justify-center font-['VCR_OSD_Mono',monospace] text-xs font-bold flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="font-['VCR_OSD_Mono',monospace] text-sm uppercase text-white tracking-[0.08em] m-0">
                        {item.label}
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] text-xs text-[#a9a4a0] m-0">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TrustBar Strip inside Stepped-Notch Border Frame */}
        <div className="mt-16 w-full max-w-[1200px] mx-auto">
          <div className="nano-trust-frame w-full">
            <div className="nano-trust-frame__in">
              <div className="nano-trust">
                <ul className="nano-trust__lines">
                  <li>Trusted by brands</li>
                  <li>that came back.</li>
                </ul>
                <div className="nano-trust__marquee-wrapper">
                  <div className="nano-trust__track">
                    {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
                      <span key={`${brand}-${idx}`} className="nano-trust__item">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
