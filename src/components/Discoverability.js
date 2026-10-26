"use client";

import { Search, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Discoverability() {
  const mainstackStats = [
    { value: "16,773", label: "Views" },
    { value: "15.66%", label: "Average engagement" },
    { value: "37.58%", label: "Engagement on the top post" },
    { value: "67%", label: "Total views driven by top creator" },
  ];

  return (
    <section id="found" className="bg-[#151213] border-t-4 border-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1184px] mx-auto flex flex-col gap-14">
        {/* Top Text & Search Console Window Grid */}
        <div className="flex flex-wrap gap-12 items-center">
          {/* Left Text */}
          <div className="flex-1 basis-[480px] min-w-0">
            <ScrollReveal animation="fade-right">
              <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
                Beyond the feed.
              </p>
              <h2 className="nano-pixel text-3xl sm:text-4xl font-normal leading-[1.1] tracking-[0.02em] text-white mb-6">
                A campaign that keeps working <span className="text-[#fed701]">after the posts go quiet.</span>
              </h2>
              <p className="font-['Mona_Sans',sans-serif] text-base sm:text-lg leading-7 text-[#a9a4a0] mb-6">
                When ten creators talk about you in the same window, they leave more than views behind. They leave a trail. Search your brand on Instagram or Google after a Nano wave and the creator content is there, waiting for the next person who looks you up. As more of the web learns to answer questions with real voices, that trail is what gets you found.
              </p>
              <div className="nano-frame bg-[#fed701] border-4 border-[#fed701] nano-lift">
                <div className="nano-frame__in bg-[#151213] p-5">
                  <p className="font-['Mona_Sans',sans-serif] text-base leading-6 text-white m-0">
                    After the Mainstack V4 campaign, searching &quot;mainstack v4&quot; surfaced our creators&apos; posts across Instagram and Google.{" "}
                    <strong className="text-[#fed701] font-semibold">
                      The campaign ran once. The discoverability stayed.
                    </strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Console Simulation */}
          <div className="flex-1 basis-[420px] min-w-0">
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="nano-window nano-lift">
                <div className="nano-window__bar">
                  <span className="nano-window__title flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#0c0a0b]" />
                    search: mainstack v4
                  </span>
                  <div className="nano-window__ctrls">
                    <span className="nano-window__ctrl text-xs font-mono">-</span>
                    <span className="nano-window__ctrl text-xs font-mono">□</span>
                    <span className="nano-window__ctrl nano-window__ctrl--close text-xs font-mono">×</span>
                  </div>
                </div>
                <div className="nano-window__body p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1f1b1c]">
                    <span className="font-['VCR_OSD_Mono',monospace] text-xs text-[#a9a4a0] uppercase">
                      google & instagram index
                    </span>
                    <span className="font-['VCR_OSD_Mono',monospace] text-xs text-[#fed701] bg-[#1f1b1c] px-2 py-0.5">
                      ● live index
                    </span>
                  </div>

                  <div className="space-y-3 font-['Mona_Sans',sans-serif]">
                    <div className="p-3 bg-[#1f1b1c] border border-[#2e2526]">
                      <p className="text-xs text-[#73887a] font-mono m-0 mb-1">
                        instagram.com/reel/mainstack-v4
                      </p>
                      <p className="text-sm font-semibold text-white m-0">
                        &quot;How Mainstack V4 changed the way Lagos freelancers invoice...&quot;
                      </p>
                      <p className="text-xs text-[#a9a4a0] mt-1 m-0">
                        By @creator_g4 • 16.7K views • 37.6% engagement
                      </p>
                    </div>

                    <div className="p-3 bg-[#1f1b1c] border border-[#2e2526]">
                      <p className="text-xs text-[#73887a] font-mono m-0 mb-1">
                        tiktok.com/@lagos_creative/video
                      </p>
                      <p className="text-sm font-semibold text-white m-0">
                        &quot;Full walkthrough of the new Mainstack app update&quot;
                      </p>
                      <p className="text-xs text-[#a9a4a0] mt-1 m-0">
                        By @creator_g3 • 8.2K views • 18.2% engagement
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#0c0a0b] border border-[#73887a]/40 text-center">
                    <p className="font-['VCR_OSD_Mono',monospace] text-xs text-[#fed701] m-0">
                      Organic creator authority established permanently
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Numbers Grid */}
        <div>
          <ScrollReveal animation="fade-up">
            <p className="nano-pixel text-base tracking-[0.1em] text-white mb-6">
              Mainstack campaign, in numbers
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainstackStats.map((m, idx) => (
              <ScrollReveal
                key={m.label}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div className="nano-frame bg-white border-4 border-white h-full nano-lift group hover:-translate-y-1 transition-transform">
                  <div className="nano-frame__in bg-[#151213] p-5 h-full flex flex-col justify-between">
                    <div>
                      <p className="font-['VCR_OSD_Mono',monospace] text-3xl sm:text-4xl text-[#fed701] font-bold leading-none mb-2 m-0">
                        {m.value}
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] text-sm text-[#a9a4a0] leading-snug m-0">
                        {m.label}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
