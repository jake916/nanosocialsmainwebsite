"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NotchMenu from "@/components/NotchMenu";

export default function Navbar({ onOpenCampaign }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0c0a0b]/95 backdrop-blur-md border-b-4 border-[#1f1b1c]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center gap-3 group z-10">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/images/nano-logo.svg"
              alt="Nano Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="font-['VCR_OSD_Mono',ui-monospace,monospace] text-2xl tracking-[0.1em] uppercase text-white group-hover:text-[#fed701] transition-colors">
            NANO
          </span>
        </Link>

        {/* Center: Framer-Style Hanging Notch Tab Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-auto">
          <NotchMenu />
        </div>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-3 z-10">
          <button
            onClick={() => {
              if (onOpenCampaign) onOpenCampaign();
            }}
            className="hidden sm:block font-['VCR_OSD_Mono',ui-monospace,monospace] text-sm uppercase tracking-[0.1em] text-[#a9a4a0] hover:text-[#fed701] px-2 py-1 transition-colors cursor-pointer"
          >
            Log in
          </button>
          <button
            onClick={() => {
              if (onOpenCampaign) onOpenCampaign();
            }}
            className="nano-btn nano-btn--primary nano-btn--sm"
          >
            <span className="hidden sm:inline">Open a campaign</span>
            <span className="sm:hidden">Campaign</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </header>
  );
}
