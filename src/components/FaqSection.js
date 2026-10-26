"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is Nanosocials?",
      a: "A platform brands use to run marketing campaigns with many creators at once, manage the work in one place, and track how it performs. Every creator is measured by real audience engagement, never by follower count alone.",
    },
    {
      q: "Is Nano an influencer marketing agency?",
      a: "No. An agency hands you one or two names and runs it for you on high markups. Nano is a technology platform: you run a coordinated campaign across many creators simultaneously, each posting to people who trust them, with real-time performance telemetry laid out for you in a unified dashboard.",
    },
    {
      q: "How does Nano help brands?",
      a: "It organizes a creator campaign around one brief, gets many creators posting around the same time window to build a wall of social proof, and attributes exact performance per creator so your next campaign is smarter and more cost-effective.",
    },
    {
      q: "Can creators earn through Nano?",
      a: "Yes. Creators (whom we call Ninjas) get matched with brand campaigns that fit their niche, deliver agreed work, and get paid directly to their wallet upon verification. Earnings depend on the campaign scope and the creator's grade (G1 to G5), not vanity follower numbers.",
    },
    {
      q: "Do I need a big following to join as a creator?",
      a: "No. Your grade is based on how much your audience actually responds to your work (views, comments, likes, shares, retention), not how many followers you have. A tight, loyal community can earn you more than a huge, disengaged account.",
    },
    {
      q: "What does a campaign cost?",
      a: "It depends on the package and number of creators. Awareness packages start at ₦451,500 for the Spark Package (10 creators and 10 videos, including Nano's 7.5% platform fee). Traffic campaigns run ₦20 to ₦30 per verified click. You always see the full scope and exact price in your quote before committing.",
    },
    {
      q: "Can I use the content in my own paid ads?",
      a: "Yes, within the rights agreed for your campaign. Paid advertising whitelisting, channel usage, and licensing duration are clearly specified in your quote.",
    },
    {
      q: "Does a campaign guarantee sales?",
      a: "No. Nano gets you genuine, coordinated attention and transparently shows you how it performed. We avoid making fake conversion promises that software cannot guarantee, but we deliver the verified engagement and traffic that drives conversions.",
    },
    {
      q: "How do I get started?",
      a: "Brands can open a campaign brief online or talk to our strategy team. Creators can apply to join the Ninjas network and start receiving campaign invitations.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">
            FAQs
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#111111] tracking-tighter uppercase leading-[0.98]">
            QUESTIONS PEOPLE <span className="pill-purple">ASK.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-medium">
            Everything you need to know about how Nano operates.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 overflow-hidden bg-neutral-50 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span className="text-base font-bold text-[#111111]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-200 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-neutral-700" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
