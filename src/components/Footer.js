"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer({ onOpenCampaign }) {
  return (
    <footer className="bg-[#0c0a0b] border-t-4 border-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1184px] mx-auto flex flex-wrap gap-12 justify-between">
        {/* Brand Information */}
        <div className="flex-1 basis-[360px] max-w-[460px]">
          <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/nano-logo.svg"
                alt="Nano Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-['VCR_OSD_Mono',monospace] text-2xl tracking-[0.1em] text-white group-hover:text-[#fed701] transition-colors">
              NANO
            </span>
          </Link>

          <p className="nano-pixel text-lg sm:text-xl leading-7 tracking-[0.06em] text-[#fed701] mb-3">
            You run it. We built the rails.
          </p>

          <p className="font-['Mona_Sans',sans-serif] text-sm sm:text-base leading-6 text-[#a9a4a0] m-0">
            Nanosocials is a collaboration infrastructure for attention. Brands open campaigns, creators run them, everyone sees what moves.
          </p>
        </div>

        {/* Navigation Columns */}
        <nav aria-label="Footer" className="flex flex-wrap gap-12 sm:gap-16">
          <ul className="list-none m-0 p-0 flex flex-col gap-3 font-['VCR_OSD_Mono',monospace] text-sm tracking-[0.1em] uppercase">
            <li>
              <Link href="/about" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/brands" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                For brands
              </Link>
            </li>
            <li>
              <Link href="/creators" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                For creators
              </Link>
            </li>
            <li>
              <Link href="/brands#pricing" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                Blog
              </Link>
            </li>
          </ul>

          <ul className="list-none m-0 p-0 flex flex-col gap-3 font-['VCR_OSD_Mono',monospace] text-sm tracking-[0.1em] uppercase">
            <li>
              <Link href="/about#faq" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#a9a4a0] hover:text-[#fed701] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onOpenCampaign) onOpenCampaign();
                }}
                className="text-[#a9a4a0] hover:text-[#fed701] uppercase tracking-[0.1em] text-left transition-colors cursor-pointer bg-transparent border-0 p-0 font-['VCR_OSD_Mono',monospace]"
              >
                Log in
              </button>
            </li>
            <li>
              <a
                href="mailto:info@nanosocials.com"
                className="text-[#a9a4a0] hover:text-[#fed701] transition-colors lowercase font-mono"
              >
                info@nanosocials.com
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-[1184px] mx-auto mt-12 pt-6 border-t-2 border-[#1f1b1c] flex flex-wrap items-center justify-between gap-4 font-['Mona_Sans',sans-serif] text-xs text-[#a9a4a0]">
        <p className="m-0">© 2026 Nanosocials Ltd. Lagos, Nigeria.</p>
      </div>
    </footer>
  );
}
