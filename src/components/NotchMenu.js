"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotchMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key and prevent background scrolling when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "FOR BRANDS", href: "/brands" },
    { label: "FOR CREATORS", href: "/creators" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Closed State Trigger: Hanging Notch Tab Button (Image 1) */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`notch-button px-6 py-2.5 text-white hover:text-[#fed701] flex items-center gap-2.5 cursor-pointer select-none group transition-all duration-200 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open navigation menu"
      >
        {/* 4-dot pattern icon matching reference :: Menu */}
        <span className="flex items-center gap-[3px] text-white group-hover:text-[#fed701] transition-colors pointer-events-none">
          <span className="flex flex-col gap-[3px]">
            <span className="w-[3px] h-[3px] rounded-full bg-current" />
            <span className="w-[3px] h-[3px] rounded-full bg-current" />
          </span>
          <span className="flex flex-col gap-[3px]">
            <span className="w-[3px] h-[3px] rounded-full bg-current" />
            <span className="w-[3px] h-[3px] rounded-full bg-current" />
          </span>
        </span>
        <span className="font-['VCR_OSD_Mono',ui-monospace,monospace] text-sm uppercase tracking-[0.1em] pointer-events-none">
          Menu
        </span>
      </button>

      {/* Open State: Fullscreen Viewport Overlay rendered via React Portal directly into document.body (Image 2) */}
      {isOpen &&
        mounted &&
        createPortal(
          <div
            id="notch-fullscreen-overlay"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex flex-col items-center pt-0 px-4 overflow-y-auto select-none"
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* Top Notch Tab morphed into "✣ Close" */}
            <div className="w-full flex justify-center sticky top-0 z-10 pt-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="notch-button px-6 py-2.5 text-[#fed701] hover:text-white flex items-center gap-2.5 cursor-pointer group shadow-2xl transition-all duration-200"
                aria-label="Close navigation menu"
              >
                {/* Star-cross / 5-dot icon matching reference ✣ Close */}
                <span className="relative w-3.5 h-3.5 flex items-center justify-center text-[#fed701] group-hover:text-white transition-colors pointer-events-none">
                  <span className="absolute w-[3px] h-[3px] rounded-full bg-current top-0 left-1/2 -translate-x-1/2" />
                  <span className="absolute w-[3px] h-[3px] rounded-full bg-current bottom-0 left-1/2 -translate-x-1/2" />
                  <span className="absolute w-[3px] h-[3px] rounded-full bg-current left-0 top-1/2 -translate-y-1/2" />
                  <span className="absolute w-[3px] h-[3px] rounded-full bg-current right-0 top-1/2 -translate-y-1/2" />
                  <span className="absolute w-[3.5px] h-[3.5px] rounded-full bg-current left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-['VCR_OSD_Mono',ui-monospace,monospace] text-sm uppercase tracking-[0.1em] pointer-events-none">
                  Close
                </span>
              </button>
            </div>

            {/* Floating Dark Card directly beneath the tab */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[360px] sm:max-w-[420px] bg-[#141414] border border-[#262626] rounded-[32px] px-8 py-9 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center text-center mt-3 mb-10 transition-all notch-card-enter"
            >
              {/* Navigation Links using VCR OSD Mono pixel font */}
              <nav className="flex flex-col items-center gap-4 sm:gap-5 w-full">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href) &&
                        !item.href.includes("#");

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        color: isActive ? "#fed701" : "#ffffff",
                      }}
                      className={`notch-nav-link ${
                        isActive ? "active" : ""
                      } font-['VCR_OSD_Mono',ui-monospace,monospace] text-2xl sm:text-3xl uppercase tracking-[0.08em] transition-all duration-150 block py-1`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Subtle Horizontal Divider Line */}
              <div className="w-full border-t border-[#242424] my-6" />

              {/* Follow Us Section */}
              <div className="flex flex-col items-center gap-3">
                <p className="font-['VCR_OSD_Mono',ui-monospace,monospace] text-xs uppercase tracking-[0.1em] text-[#a9a4a0] m-0">
                  Follow us on:
                </p>
                <div className="flex items-center gap-3">
                  {/* 1. Instagram */}
                  <a
                    href="https://instagram.com/nanosocials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#fed701] text-white hover:text-[#0c0a0b] flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* 2. X (Twitter) */}
                  <a
                    href="https://x.com/nanosocials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#fed701] text-white hover:text-[#0c0a0b] flex items-center justify-center transition-all duration-200"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* 3. YouTube / Video */}
                  <a
                    href="https://youtube.com/@nanosocials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#fed701] text-white hover:text-[#0c0a0b] flex items-center justify-center transition-all duration-200"
                    aria-label="YouTube"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* 4. Facebook */}
                  <a
                    href="https://facebook.com/nanosocials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#fed701] text-white hover:text-[#0c0a0b] flex items-center justify-center transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
