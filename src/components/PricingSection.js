"use client";

import { Check, ArrowUpRight } from "lucide-react";

export default function PricingSection({ onOpenCampaign }) {
  const packages = [
    {
      name: "The Spark Package",
      badge: "Flagship Starter Wave",
      price: "₦451,500",
      description: "Complete starter wave to put your product in front of real communities at once.",
      creators: "10 Graded Creators",
      deliverables: "10 High-Engagement Videos",
      features: [
        "Deliberate G1 & G2 grade balance",
        "Synchronized wave distribution",
        "One centralized brief, tailored to each voice",
        "Full live telemetry dashboard & analytics",
        "Includes Nano's 7.5% platform fee",
        "Content rights cleared for 30 days",
      ],
      isPopular: true,
    },
    {
      name: "Traffic CPC Pool",
      badge: "Pure Conversion",
      price: "₦20 - ₦30",
      priceSuffix: "/ valid click",
      description: "Direct traffic campaign sending verified users straight to your site, app, or drop.",
      creators: "On-demand link shares",
      deliverables: "Authenticated visitor clicks",
      features: [
        "Zero video approvals or creative oversight",
        "Proprietary anti-fraud bot detection",
        "Live click attribution per creator",
        "Unspent click budget returned to wallet",
        "Attaches seamlessly to content waves",
      ],
      isPopular: false,
    },
    {
      name: "Custom Funnel & BYOC",
      badge: "Scale & Funnel",
      price: "Custom",
      priceSuffix: "based on creator mix",
      description: "Deploy 20 to 80+ creators across multi-stage funnels, or bring your own existing roster.",
      creators: "Custom mix (G1 to G5)",
      deliverables: "Multi-channel saturation",
      features: [
        "Stage funnels (Awareness → Click)",
        "Bring your own creators via private link",
        "7.5% fee strictly capped at ₦500,000",
        "Extended paid advertising whitelist rights",
        "Dedicated Nano campaign strategist",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#111111] tracking-tighter uppercase leading-[0.98]">
            CLEAR PRICING. NO <span className="pill-orange">SURPRISES.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-medium">
            You see the number of creators, the videos, and the exact cost before you spend anything.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${
                pkg.isPopular
                  ? "bg-[#111111] text-white shadow-2xl relative"
                  : "bg-neutral-50 border border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      pkg.isPopular
                        ? "bg-[#ff5722] text-white"
                        : "bg-white border border-neutral-200 text-neutral-600"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-black mb-2 ${
                    pkg.isPopular ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    pkg.isPopular ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`p-5 rounded-2xl mb-6 ${
                    pkg.isPopular
                      ? "bg-neutral-900 border border-neutral-800"
                      : "bg-white border border-neutral-200"
                  }`}
                >
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-3xl sm:text-4xl font-black font-sans ${
                        pkg.isPopular ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    {pkg.priceSuffix && (
                      <span className="text-xs text-neutral-400">{pkg.priceSuffix}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-bold mt-1 block ${
                      pkg.isPopular ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {pkg.creators} • {pkg.deliverables}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block ${
                      pkg.isPopular ? "text-neutral-400" : "text-neutral-400"
                    }`}
                  >
                    Included in scope:
                  </span>
                  {pkg.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className={`flex items-start gap-2.5 text-xs ${
                        pkg.isPopular ? "text-neutral-300" : "text-neutral-600"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.isPopular ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenCampaign}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  pkg.isPopular
                    ? "bg-white text-[#111111] hover:bg-neutral-100 shadow-md"
                    : "bg-[#111111] text-white hover:bg-neutral-800"
                }`}
              >
                <span>Select Package</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bring Your Own Creators Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-black text-[#111111] uppercase tracking-tight">
              Already have creators you trust? Bring them along.
            </h4>
            <p className="text-xs text-neutral-600 mt-1">
              Invite your trusted roster via a private link. Manage briefs in one place and track live attribution on Nano.
            </p>
          </div>
          <button
            onClick={onOpenCampaign}
            className="px-6 py-3 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            Invite via Private Link
          </button>
        </div>
      </div>
    </section>
  );
}
