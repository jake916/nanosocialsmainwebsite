"use client";

import { useState } from "react";
import { MessageSquare, MousePointerClick, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function GoalPicker({ onOpenCampaign }) {
  const [activeGoal, setActiveGoal] = useState("talk");

  const goals = [
    {
      id: "talk",
      kind: "Content campaigns",
      title: "Get people talking",
      tileBg: "#3f612d",
      icon: MessageSquare,
      soon: false,
      body: "Creators post about your brand and make it a thing worth talking about. You pay a set rate per creator, by grade.",
      best: "Best for launches, moments, and getting a name into the culture.",
    },
    {
      id: "click",
      kind: "Traffic campaigns",
      title: "Drive the click",
      tileBg: "#bb5f04",
      icon: MousePointerClick,
      soon: false,
      body: "Creators send qualified people to your link. You pay per verified click, roughly ₦25 to ₦50 each, with no content to manage.",
      best: "Best for sign-ups, downloads and sales.",
    },
    {
      id: "missions",
      kind: "Nano Missions",
      title: "Send them out",
      tileBg: "#73887a",
      icon: MapPin,
      soon: true,
      body: "Creators go where the work is: a shoot on location, a visit to your store, a real task with logistics on you.",
      best: "Best for brands that need presence, not just posts.",
    },
  ];

  return (
    <section id="goals" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <ScrollReveal animation="fade-up">
        <h2 className="nano-pixel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[0.02em] text-white text-center mb-3">
          What are you here to do?
        </h2>
        <p className="font-['VCR_OSD_Mono',monospace] text-xs sm:text-sm tracking-[0.1em] uppercase text-[#a9a4a0] text-center mb-12">
          Pick one to see it
        </p>
      </ScrollReveal>

      {/* Goal Cards Grid */}
      <div
        role="radiogroup"
        aria-label="Campaign goal selector"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {goals.map((g, idx) => {
          const Icon = g.icon;
          const isSelected = activeGoal === g.id;

          return (
            <ScrollReveal
              key={g.id}
              animation="fade-up"
              delay={idx * 120}
              className="h-full"
            >
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setActiveGoal(g.id)}
                className="goal-card nano-lift text-left transition-transform hover:-translate-y-1 h-full"
              >
                <div
                  className={`nano-frame border-4 h-full ${
                    isSelected ? "bg-[#fed701] border-[#fed701]" : "bg-white border-white"
                  }`}
                >
                  <div className="nano-frame__in bg-[#151213] p-0 h-full flex flex-col">
                    {/* Top Header Tile */}
                    <div
                      style={{ backgroundColor: g.tileBg }}
                      className="p-6 flex items-center justify-between gap-3 text-white"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-black/20 text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      {g.soon ? (
                        <span className="font-['VCR_OSD_Mono',monospace] text-xs tracking-[0.08em] uppercase bg-[#0c0a0b] text-[#fed701] px-2 py-1">
                          Coming soon
                        </span>
                      ) : (
                        <span className="font-['VCR_OSD_Mono',monospace] text-xs tracking-[0.08em] uppercase text-white/80">
                          {isSelected ? "● Active" : "○ Select"}
                        </span>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                      <div>
                        <p className="font-['VCR_OSD_Mono',monospace] text-xs tracking-[0.1em] uppercase text-[#a9a4a0] mb-1">
                          {g.kind}
                        </p>
                        <h3 className="nano-pixel font-normal text-2xl leading-7 tracking-[0.04em] text-white mb-3">
                          {g.title}
                        </h3>
                        <p className="font-['Mona_Sans',sans-serif] text-base leading-6 text-white m-0">
                          {g.body}
                        </p>
                      </div>
                      <p className="font-['Mona_Sans',sans-serif] text-sm leading-5 font-semibold text-[#fed701] m-0 pt-2 border-t border-[#1f1b1c]">
                        {g.best}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Tip Callout Box */}
      <ScrollReveal animation="pop" delay={350}>
        <div className="max-w-[560px] mx-auto mt-12 nano-dialog border-2 border-[#2e2526] bg-[#1f1b1c] p-4 flex items-center gap-4 nano-lift">
          <div className="w-10 h-10 flex-shrink-0 bg-[#3f612d] text-white flex items-center justify-center font-['VCR_OSD_Mono',monospace] text-lg font-bold">
            ✓
          </div>
          <ul className="nano-dialog__lines space-y-1 font-['VCR_OSD_Mono',monospace] text-sm text-white m-0 p-0 list-none">
            <li>A click pool can ride on top</li>
            <li>of a content campaign.</li>
            <li className="text-[#fed701]">One wave can do both.</li>
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}
