"use client";

import Image from "next/image";
import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function TheShift() {
  return (
    <section id="shift" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <div className="flex flex-wrap items-center gap-12">
        {/* Main Content Area */}
        <div className="flex-1 basis-[560px] min-w-0">
          <ScrollReveal animation="fade-up">
            <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
              The old way is loud and blind.
            </p>
            <h2 className="nano-pixel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[0.02em] text-white mb-8">
              You paid the influencer. <span className="text-[#fed701]">Then what?</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Without Line of Sight Card */}
            <ScrollReveal animation="fade-right" delay={100} className="h-full">
              <div className="nano-lift h-full group hover:-translate-y-1 transition-transform">
                <div className="nano-frame bg-white border-4 border-white h-full">
                  <div className="nano-frame__in bg-[#151213] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-[#a9a4a0]">
                        <X className="w-5 h-5 text-[#ff4546]" />
                        <span className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.1em]">
                          Without line of sight
                        </span>
                      </div>
                      <p className="font-['Mona_Sans',sans-serif] text-base leading-7 text-white m-0">
                        Most brands spend on creators the same way. Find a big account, send a fee, hope. The post goes up, the likes roll in, and when it is over you are left holding a screenshot and a feeling. No line of sight into who actually moved anything. No way to run it again on purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Nano Changes the Order Card */}
            <ScrollReveal animation="fade-left" delay={200} className="h-full">
              <div className="nano-lift h-full group hover:-translate-y-1 transition-transform">
                <div className="nano-frame bg-[#fed701] border-4 border-[#fed701] h-full">
                  <div className="nano-frame__in bg-[#151213] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-[#fed701]">
                        <Check className="w-5 h-5 text-[#fed701]" />
                        <span className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.1em]">
                          Nano changes the order
                        </span>
                      </div>
                      <p className="font-['Mona_Sans',sans-serif] text-base leading-7 text-white m-0">
                        A brand opens a campaign and sets the brief. Matched creators pick it up. They post, in their own voice, to their own people. Every view, comment and share lands back in one place, tied to the creator who earned it. You watch the campaign happen. Then you run the next one sharper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stat Dialogue Callout Box */}
          <ScrollReveal animation="pop" delay={300}>
            <div className="max-w-[560px] mt-8 nano-dialog border-2 border-[#2e2526] bg-[#1f1b1c] p-4 flex items-center gap-4 nano-lift">
              <div className="w-12 h-12 flex-shrink-0 bg-[#fed701] text-[#0c0a0b] flex items-center justify-center font-['VCR_OSD_Mono',monospace] text-xl font-bold">
                !
              </div>
              <ul className="nano-dialog__lines space-y-1 font-['VCR_OSD_Mono',monospace] text-sm sm:text-base text-white m-0 p-0 list-none">
                <li>On one campaign, a single creator</li>
                <li>drove 67% of total views.</li>
                <li className="text-[#fed701]">Now you can see who.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Illustration: Enlarged Animated Character with subtle shadow */}
        <div className="flex justify-center lg:grid flex-1 basis-[320px] lg:basis-[380px] place-items-center mt-8 lg:mt-0">
          <ScrollReveal animation="fade-left" delay={250}>
            <Image
              src="/1023(2).gif"
              alt="The Shift Character Animation"
              width={420}
              height={560}
              unoptimized
              className="nano-pixelated object-contain w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[550px] h-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300 select-none"
              priority
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
