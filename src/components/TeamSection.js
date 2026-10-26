"use client";

import { Mail } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Ikenna O.",
      role: "Co-Founder & CEO",
      bio: "Building the rails for attention orchestration and creator compensation across emerging markets.",
      email: "ikenna@nanosocials.com",
      avatarInitials: "IO",
      bgClass: "bg-purple-100 text-[#7047eb]",
    },
    {
      name: "Damilola A.",
      role: "Head of Creator Operations",
      bio: "Overseeing the Ninjas network, creator grading algorithms, and The Collaboratory studio in Lagos.",
      email: "dami@nanosocials.com",
      avatarInitials: "DA",
      bgClass: "bg-orange-100 text-[#ff5722]",
    },
    {
      name: "Tariq E.",
      role: "Head of Product & Engineering",
      bio: "Architecting the real-time telemetry engine, automated escrow payouts, and fraud detection.",
      email: "tariq@nanosocials.com",
      avatarInitials: "TE",
      bgClass: "bg-emerald-100 text-emerald-600",
    },
    {
      name: "Chidinma N.",
      role: "Brand Campaign Lead",
      bio: "Helping consumer brands, fintechs, and venture-backed startups plan multi-wave creator launches.",
      email: "chidinma@nanosocials.com",
      avatarInitials: "CN",
      bgClass: "bg-blue-100 text-[#2563eb]",
    },
  ];

  return (
    <section className="py-24 bg-[#f7f7f8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Lagos, Nigeria
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#111111] tracking-tighter uppercase leading-[0.98]">
            THE PEOPLE BEHIND <span className="pill-orange">NANO.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-medium">
            A team in Lagos building a fairer way for brands and creators to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl font-mono ${member.bgClass}`}
                  >
                    {member.avatarInitials}
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-black text-[#111111]">{member.name}</h3>
                <span className="text-xs font-bold text-[#ff5722] uppercase tracking-wider block mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
                {member.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
