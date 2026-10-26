"use client";

import { FileEdit, UserCheck, Send, BarChart3, Wallet } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Open a campaign",
      icon: FileEdit,
      body: "Set the brief, the platforms, how many creators, the budget. Pick content, traffic, or both.",
    },
    {
      n: "02",
      title: "Creators pick it up",
      icon: UserCheck,
      body: "Nano matches your brief to graded creators and drafts a first script in each one's voice. They accept, you approve.",
    },
    {
      n: "03",
      title: "They post",
      icon: Send,
      body: "Rolling or launch-day. Every post is tracked from the moment it goes live.",
    },
    {
      n: "04",
      title: "You watch it move",
      icon: BarChart3,
      body: "Views, reach, engagement and clicks, per creator, as they land.",
    },
    {
      n: "05",
      title: "Everyone gets paid",
      icon: Wallet,
      body: "Payouts split automatically when the work is in. No chasing, no spreadsheets.",
    },
  ];

  return (
    <section id="how" className="bg-[#151213] border-t-4 border-b-4 border-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1184px] mx-auto">
        <ScrollReveal animation="fade-up">
          <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
            How it works
          </p>

          <h2 className="nano-pixel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[0.02em] text-white mb-12">
            From brief to payout, <span className="text-[#fed701]">in one place.</span>
          </h2>
        </ScrollReveal>

        <ol className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <li key={st.n} className="flex">
                <ScrollReveal
                  animation="fade-up"
                  delay={idx * 100}
                  className="w-full flex"
                >
                  <div className="nano-lift nano-frame bg-white border-4 border-white w-full group hover:-translate-y-1 transition-transform">
                    <div className="nano-frame__in bg-[#151213] p-5 flex flex-col justify-between h-full min-h-[260px]">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-['VCR_OSD_Mono',monospace] text-4xl text-[#fed701] font-bold leading-none">
                            {st.n}
                          </span>
                          <div className="w-8 h-8 flex items-center justify-center bg-[#1f1b1c] text-[#fed701] group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-[#fed701]" />
                          </div>
                        </div>
                        <h3 className="nano-pixel font-normal text-lg leading-6 tracking-[0.06em] text-white mb-3">
                          {st.title}
                        </h3>
                        <p className="font-['Mona_Sans',sans-serif] text-sm leading-6 text-[#a9a4a0] m-0">
                          {st.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
