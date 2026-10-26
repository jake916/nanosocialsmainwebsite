"use client";

import Image from "next/image";
import { ArrowUpRight, Flame, Calendar, BatteryCharging } from "lucide-react";

export default function NinjasClan({ onOpenNinja }) {
  return (
    <section className="py-24 bg-[#f7f7f8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative aspect-[4/3] group">
              <Image
                src="/images/ninja-studio.jpg"
                alt="The Collaboratory Studio in Lagos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  The Collaboratory: Creator Studio in Lagos with 24/7 Power & Lighting
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              Ninjas Community
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-[#111111] tracking-tighter uppercase leading-[0.98]">
              YOU WERE NEVER
              <br />
              <span className="pill-orange">TOO SMALL.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
              Nano does not care how many followers you have. We care how you move people.{" "}
              <strong className="text-[#111111]">Get chosen for your craft, get real brand work, get paid.</strong>
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-[#ff5722] flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#111111] block font-bold">Tell the story your way</strong>
                  We match you to brands that fit your voice and draft an initial script. You adapt it and make it completely your own.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-[#7047eb] flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#111111] block font-bold">Ninja Night (Last Friday of Every Month)</strong>
                  A gathering for creators who build with heart. Connect with fellow creators, review campaigns, and level up together.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#111111] block font-bold">The Collaboratory Studio</strong>
                  Need a clean room with studio lighting, microphones, and uninterrupted power in Lagos? It is yours for campaign shoots.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenNinja}
                className="ugency-btn-primary shadow-md shadow-black/10"
              >
                <span>Become a Ninja</span>
                <div className="w-5 h-5 rounded-full bg-white text-[#111111] flex items-center justify-center text-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
