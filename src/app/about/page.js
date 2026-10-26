"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";
import Link from "next/link";
import {
  Users,
  Radio,
  Sliders,
  BarChart4,
  Plus,
  Minus,
  ArrowRight,
  Shield,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      title: "Creator Collaboration",
      icon: Users,
      body: "We help brands activate relevant creators around a shared campaign brief, objective and message. Instead of managing disconnected collaborations, brands can coordinate creator participation around one goal.",
    },
    {
      title: "Synchronized Distribution",
      icon: Radio,
      body: "We coordinate how campaign content is distributed across participating creators and their social channels, helping a brand's message travel beyond a single account.",
    },
    {
      title: "Attention Orchestration",
      icon: Sliders,
      body: "We bring structure to how creator participation and campaign distribution work together, helping brands make more deliberate use of audience attention.",
    },
    {
      title: "Campaign Performance",
      icon: BarChart4,
      body: "We help brands evaluate campaign activity and performance so they can understand what happened, learn from the results and make better decisions about future campaigns.",
    },
  ];

  const teamMembers = [
    {
      name: "[FULL NAME]",
      role: "[ROLE]",
      bio: "[One line on what they do or care about]",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE]",
      bio: "[One line on what they do or care about]",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE]",
      bio: "[One line on what they do or care about]",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE]",
      bio: "[One line on what they do or care about]",
      linkedin: "https://www.linkedin.com",
    },
  ];

  const faqs = [
    {
      q: "What is Nanosocials?",
      a: "A platform brands use to run campaigns with many creators at once, manage the work in one place, and track how it performs. Creators are measured by real engagement, not follower count.",
    },
    {
      q: "Is Nano an influencer marketing agency?",
      a: "No. An agency hands you one name and runs it for you. Nano is a platform: you run a campaign across many creators, each posting to the people who trust them, with the results laid out for you.",
    },
    {
      q: "How does Nano help brands?",
      a: "It organises a creator campaign around one brief, gets many creators posting around the same time, and shows you how each one performed so your next campaign is smarter.",
    },
    {
      q: "Can creators earn through Nano?",
      a: "Yes. Creators get matched with brand campaigns, deliver the agreed work, and get paid for it. Earnings depend on the campaign and the creator's grade, not on follower count.",
    },
    {
      q: "Do I need a big following to join as a creator?",
      a: "No. Your grade is based on how much your audience responds to your work, not how many followers you have. A smaller, engaged audience can take you a long way.",
    },
    {
      q: "What does a campaign cost?",
      a: "It depends on the campaign type and the number of creators. You always see the full scope and price in your quote before you commit.",
    },
    {
      q: "Can I use the content in my own ads?",
      a: "Only within the rights you agree for the campaign. Confirm paid use, the channels and how long you can run it before you use a creator's content as an ad.",
    },
    {
      q: "Does a campaign guarantee sales?",
      a: "No. Nano gets you attention and shows you how it performed. Any specific target is written into your agreement, along with how it will be measured.",
    },
    {
      q: "How do I get started?",
      a: "Brands can start a campaign or book a demo. Creators can register to join the network. Pick your path above.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-white flex flex-col selection:bg-[#fed701] selection:text-[#0c0a0b]">
      {/* Navigation */}
      <Navbar onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Hero Header */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="max-w-[840px]">
          <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
            About Nanosocials
          </p>
          <h1 className="nano-pixel text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-[0.02em] text-white mb-6">
            Collaboration rails for <span className="text-[#fed701]">audience attention.</span>
          </h1>
          <p className="font-['Mona_Sans',sans-serif] text-lg sm:text-xl leading-8 text-[#a9a4a0] m-0">
            Nanosocials was built to replace the chaotic spreadsheet-and-DM approach to creator marketing. We connect brands with verified, performance-graded creators through synchronized waves that build durable social proof.
          </p>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="bg-[#151213] border-t-4 border-b-4 border-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1184px] mx-auto">
          <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
            Our Foundation
          </p>
          <h2 className="nano-pixel text-3xl sm:text-4xl font-normal leading-[1.05] tracking-[0.02em] text-white mb-12">
            More than finding creators. <span className="text-[#fed701]">We help campaigns move.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <ScrollReveal
                  key={p.title}
                  animation="fade-up"
                  delay={idx * 120}
                  className="h-full"
                >
                  <div className="nano-lift h-full group hover:-translate-y-1 transition-transform">
                    <div className="nano-frame bg-white border-4 border-white h-full">
                      <div className="nano-frame__in bg-[#151213] p-6 sm:p-8 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-['VCR_OSD_Mono',monospace] text-2xl text-[#fed701] font-bold">
                              0{idx + 1}
                            </span>
                            <div className="w-10 h-10 bg-[#1f1b1c] text-[#fed701] flex items-center justify-center border border-[#2e2526] group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 text-[#fed701]" />
                            </div>
                          </div>
                          <h3 className="nano-pixel text-xl tracking-[0.04em] text-white mb-3">
                            {p.title}
                          </h3>
                          <p className="font-['Mona_Sans',sans-serif] text-base leading-7 text-[#a9a4a0] m-0">
                            {p.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team Section (Directly before FAQ) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 nano-grid">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-['VCR_OSD_Mono',monospace] text-[#73887a] text-sm sm:text-base uppercase tracking-[0.12em] mb-3">
            MEET THE TEAM
          </p>
          <h2 className="font-['VCR_OSD_Mono',monospace] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.02] tracking-[0.02em] text-white uppercase mb-4">
            THE PEOPLE <span className="text-[#fed701]">BEHIND NANO.</span>
          </h2>
          <p className="font-['Mona_Sans',sans-serif] text-base sm:text-lg text-[#a9a4a0] max-w-[620px] mb-12 sm:mb-16 leading-relaxed">
            A team in Lagos building a fairer way for brands and creators to work together. Say hello.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="nano-lift group h-full">
                <div className="nano-team-card">
                  <div className="nano-team-card__in">
                    {/* Photo Needed Box */}
                    <div className="aspect-square bg-[#1f1b1c] border-b-4 border-white flex flex-col items-center justify-center p-6 text-center select-none">
                      <p className="font-['VCR_OSD_Mono',monospace] text-sm uppercase tracking-[0.1em] text-[#fed701] font-bold mb-1.5">
                        [PHOTO NEEDED]
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] text-xs sm:text-sm text-[#a9a4a0] m-0">
                        Square headshot
                      </p>
                    </div>

                    {/* Team Member Info */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                      <div>
                        <h3 className="font-['VCR_OSD_Mono',monospace] text-lg sm:text-xl font-normal uppercase tracking-[0.06em] text-white m-0 mb-1.5">
                          {member.name}
                        </h3>
                        <p className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.08em] text-[#73887a] m-0 mb-3">
                          {member.role}
                        </p>
                        <p className="font-['Mona_Sans',sans-serif] text-sm leading-relaxed text-[#a9a4a0] m-0">
                          {member.bio}
                        </p>
                      </div>

                      <div>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.08em] text-[#fed701] underline underline-offset-4 hover:text-[#ffe763] transition-colors inline-block"
                        >
                          LINKEDIN
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete 9-Item FAQ Section */}
      <section id="faq" className="bg-[#151213] border-t-4 border-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto">
          <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4 text-center">
            Frequently Asked Questions
          </p>
          <h2 className="nano-pixel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[0.02em] text-white text-center mb-12">
            Questions <span className="text-[#fed701]">people ask.</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="nano-window border-4 border-white transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-[#1f1b1c] hover:bg-[#252021] transition-colors cursor-pointer"
                  >
                    <span className="font-['VCR_OSD_Mono',monospace] text-base sm:text-lg text-white tracking-[0.04em] uppercase">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 flex-shrink-0 bg-[#0c0a0b] text-[#fed701] flex items-center justify-center font-bold font-mono">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-[#151213] border-t-2 border-[#2e2526]">
                      <p className="font-['Mona_Sans',sans-serif] text-base sm:text-lg leading-7 text-[#ffffff] m-0">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 p-6 bg-[#0c0a0b] border-2 border-[#fed701] text-center nano-lift">
            <p className="nano-pixel text-lg text-white mb-2">
              Have another question?
            </p>
            <p className="font-['Mona_Sans',sans-serif] text-sm text-[#a9a4a0] mb-4">
              Our team responds within 24 hours with exact campaign specifications and quotes.
            </p>
            <Link
              href="/contact"
              className="nano-btn nano-btn--primary nano-btn--sm"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Campaign Launcher Modal */}
      <CampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
      />
    </main>
  );
}
