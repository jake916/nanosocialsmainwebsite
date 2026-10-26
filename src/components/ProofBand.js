"use client";

import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, ShieldCheck, Repeat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProofBand() {
  const [animateBars, setAnimateBars] = useState(false);
  const compareRef = useRef(null);

  useEffect(() => {
    const el = compareRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "500",
      label: "Creators, graded G1 to G5 and ready to deploy",
      icon: Users,
    },
    {
      value: "15.66%",
      label: "Average engagement on our Mainstack campaign, against an Instagram average of 1.59%",
      icon: TrendingUp,
    },
    {
      value: "100%",
      label: "Of campaigns delivered, brief to payout, every one so far",
      icon: ShieldCheck,
    },
    {
      value: "2 of 3",
      label: "First-time brands came back for another campaign",
      icon: Repeat,
    },
  ];

  return (
    <section
      id="numbers"
      className="band-pattern bg-[#fed701] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url("/nano-ankara-pattern.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "420px auto",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1184px] mx-auto flex flex-col gap-8">
        {/* 4 Cards Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal
                key={s.value}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div className="nano-lift h-full group hover:-translate-y-1 transition-transform">
                  <div className="nano-frame h-full bg-white border-4 border-white">
                    <div className="nano-frame__in bg-[#151213] p-6 flex flex-col justify-between h-full min-h-[220px]">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#1f1b1c] border border-[#2e2526] text-[#fed701] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-[#fed701]" />
                      </div>
                      <div>
                        <p className="font-['VCR_OSD_Mono',monospace] text-4xl sm:text-5xl font-normal tracking-[0.02em] text-[#fed701] m-0 mb-2 leading-none">
                          {s.value}
                        </p>
                        <p className="font-['Mona_Sans',sans-serif] text-sm sm:text-base leading-6 text-white m-0">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison Console Window with animated bars */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div ref={compareRef} className="nano-window nano-lift">
            <div className="nano-window__bar">
              <span className="nano-window__title">engagement_compare.exe</span>
              <div className="nano-window__ctrls">
                <span className="nano-window__ctrl text-xs font-mono">-</span>
                <span className="nano-window__ctrl text-xs font-mono">□</span>
                <span className="nano-window__ctrl nano-window__ctrl--close text-xs font-mono">×</span>
              </div>
            </div>
            <div className="nano-window__body p-6">
              <p className="nano-pixel text-base tracking-[0.1em] text-white mb-5">
                Average engagement rate comparison
              </p>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-4 items-center">
                <span className="font-['VCR_OSD_Mono',monospace] text-xs sm:text-sm tracking-[0.08em] uppercase text-white">
                  Nano x Mainstack
                </span>
                <div className="flex items-center gap-3">
                  <div
                    className="h-6 bg-[#fed701] border border-[#ffe763] shadow-[inset_4px_4px_0_0_#ffe763,inset_-4px_-4px_0_0_#bb5f04] transition-all duration-1000 ease-out"
                    style={{ width: animateBars ? "88%" : "0%" }}
                  />
                  <span className="font-['VCR_OSD_Mono',monospace] text-lg sm:text-xl text-[#fed701] font-bold">
                    15.66%
                  </span>
                </div>

                <span className="font-['VCR_OSD_Mono',monospace] text-xs sm:text-sm tracking-[0.08em] uppercase text-[#a9a4a0]">
                  Instagram average
                </span>
                <div className="flex items-center gap-3">
                  <div
                    className="h-6 bg-[#73887a] transition-all duration-1000 ease-out delay-200"
                    style={{ width: animateBars ? "12%" : "0%" }}
                  />
                  <span className="font-['VCR_OSD_Mono',monospace] text-lg sm:text-xl text-[#a9a4a0]">
                    1.59%
                  </span>
                </div>
              </div>

              <p className="font-['Mona_Sans',sans-serif] text-xs sm:text-sm leading-5 text-[#a9a4a0] mt-6 pt-4 border-t border-[#1f1b1c]">
                Figures from real campaigns, updated each quarter as the network grows. Instagram average from HypeAuditor, State of Influencer Marketing 2025.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
