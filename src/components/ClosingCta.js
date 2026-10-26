"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClosingCta({ onOpenCampaign }) {
  return (
    <section id="start" className="band-pattern bg-[#fed701] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ScrollReveal animation="pop" duration={600} className="max-w-[960px] mx-auto">
        <div className="nano-lift max-w-[960px] mx-auto group">
          <div className="nano-frame bg-white border-4 border-white">
            <div className="nano-frame__in bg-[#151213] p-6 sm:p-10 flex flex-wrap items-center gap-8">
              {/* Pixel Art Illustration */}
              <div className="hidden sm:block flex-shrink-0">
                <Image
                  src="/images/art-discoverability.png"
                  alt="Campaign Results Illustration"
                  width={200}
                  height={200}
                  className="nano-pixelated object-contain w-[180px] sm:w-[220px] h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CTA Copy & Actions */}
              <div className="flex-1 basis-[360px] min-w-0">
                <h2 className="nano-pixel text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.1] tracking-[0.02em] text-white mb-4">
                  Run your next campaign <span className="text-[#fed701]">where the results show up.</span>
                </h2>

                <p className="font-['Mona_Sans',sans-serif] text-base sm:text-lg leading-7 text-[#a9a4a0] mb-8">
                  Stop buying posts you cannot measure. Open a campaign, pick your creators, and watch the numbers land in real time.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      if (onOpenCampaign) onOpenCampaign();
                    }}
                    className="nano-btn nano-btn--primary nano-btn--lg"
                  >
                    <span>Open your first campaign</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </button>
                  <Link
                    href="/contact"
                    className="nano-btn nano-btn--outline nano-btn--lg"
                  >
                    <span className="nano-btn__in">Talk to the team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
