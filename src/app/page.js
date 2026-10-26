"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBand from "@/components/ProofBand";
import TheShift from "@/components/TheShift";
import HowItWorks from "@/components/HowItWorks";
import GoalPicker from "@/components/GoalPicker";
import Discoverability from "@/components/Discoverability";
import LatestDispatches from "@/components/LatestDispatches";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";

export default function Home() {
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-white flex flex-col selection:bg-[#fed701] selection:text-[#0c0a0b]">
      {/* Navigation Header */}
      <Navbar onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* The Numbers: 4-Card Proof Band & Comparison Window */}
      <ProofBand />

      {/* The Shift: Problem Nano Solves */}
      <TheShift />

      {/* How It Works: 5 Steps from Brief to Payout */}
      <HowItWorks />

      {/* Goal Selector: Content, Traffic, Missions */}
      <GoalPicker onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Discoverability: Permanent Search Trail & Mainstack V4 Case Study */}
      <Discoverability />

      {/* Latest 3 Dispatches / Blog Posts */}
      <LatestDispatches />

      {/* Closing CTA */}
      <ClosingCta onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Interactive Campaign Launcher Modal */}
      <CampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
      />
    </main>
  );
}
