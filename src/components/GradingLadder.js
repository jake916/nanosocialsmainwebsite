"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function GradingLadder({ onOpenCampaign, onOpenNinja }) {
  const [viewMode, setViewMode] = useState("brand");

  const grades = [
    {
      tier: "G1",
      badge: "Emerging",
      fee: "₦30,000",
      brandText: "Starting out. High creative hunger, fresh niche reach, building a verified track record.",
      creatorText: "Beginning your journey. Prove your craft with engaged viewers and start earning immediately.",
      engagement: "18% - 25% ER",
    },
    {
      tier: "G2",
      badge: "Steady",
      fee: "₦45,000",
      brandText: "Consistent performer. Delivers predictable community conversation and comments.",
      creatorText: "Finding your stride. A loyal community that consistently responds to your recommendations.",
      engagement: "14% - 20% ER",
    },
    {
      tier: "G3",
      badge: "Proven",
      fee: "₦60,000",
      brandText: "Proven track record. Reliably moves audiences to action and sparks organic sharing.",
      creatorText: "Established voice. High trust factor with followers who value your honest opinion.",
      engagement: "12% - 18% ER",
    },
    {
      tier: "G4",
      badge: "Strong Pull",
      fee: "₦90,000",
      brandText: "Deep cultural pull. High velocity reach and commanding presence in their category.",
      creatorText: "Category authority. Commands attention and drives massive wave discussions.",
      engagement: "15% - 22% ER",
    },
    {
      tier: "G5",
      badge: "Top Tier",
      fee: "₦120,000",
      brandText: "Apex mover. Moves people at the highest tier with immense retention and virality.",
      creatorText: "Master craftsperson. Top of the ladder, commanding the highest brand fees.",
      engagement: "20%+ Peak ER",
    },
  ];

  return (
    <section id="grading" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">
            G1 to G5 Metric System
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#111111] tracking-tighter uppercase leading-[0.98]">
            ONE GRADE. TWO WAYS TO <span className="pill-orange">READ IT.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-medium">
            Every creator earns a grade based on real audience engagement, never on follower count alone.
          </p>

          {/* Toggle Button Pill */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-neutral-100 border border-neutral-200 shadow-inner">
            <button
              onClick={() => setViewMode("brand")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === "brand"
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              For Brands: The Proof
            </button>
            <button
              onClick={() => setViewMode("creator")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === "creator"
                  ? "bg-[#ff5722] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              For Creators: The Ladder
            </button>
          </div>
        </div>

        {/* 5-Grade Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {grades.map((grade) => (
            <div
              key={grade.tier}
              className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#111111] font-mono">
                    {grade.tier}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-700">
                    {grade.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">
                    Campaign Fee
                  </span>
                  <span className="text-2xl font-black text-emerald-600 font-mono">
                    {grade.fee}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {viewMode === "brand" ? grade.brandText : grade.creatorText}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex justify-between items-center text-[11px]">
                <span className="text-neutral-400 font-medium">Benchmark:</span>
                <span className="font-bold text-[#7047eb]">{grade.engagement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-black uppercase tracking-tight">
              Same grade, read two ways.
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              The brand reads it as proof. The creator reads it as a ladder. Nobody here pays for follower counts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenNinja}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
            >
              Join as a Ninja
            </button>
            <button
              onClick={onOpenCampaign}
              className="px-5 py-2.5 rounded-full bg-white text-[#111111] font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
            >
              Build Creator Mix
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
