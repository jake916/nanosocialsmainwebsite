"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function NinjaModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialHandle: "",
    platform: "TikTok",
    niche: "Lifestyle & Culture",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-neutral-200 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
              Application Received, Ninja!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
              Welcome to the clan, <strong>{formData.name}</strong>. Our creator team is evaluating your engagement metrics for your G1–G5 tier placement. Check <strong>{formData.email}</strong> for your onboarding status.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
              Creator Recruitment
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-tight">
              Become a Graded Ninja
            </h3>
            <p className="text-xs text-neutral-500">
              Get matched with real brand briefs, get chosen for your craft, get paid.
            </p>

            <div>
              <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                Full Name / Creator Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Tunde Adeyemi"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                  Primary Handle *
                </label>
                <input
                  required
                  type="text"
                  placeholder="@yourhandle"
                  value={formData.socialHandle}
                  onChange={(e) =>
                    setFormData({ ...formData, socialHandle: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                  Primary Platform
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({ ...formData, platform: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none cursor-pointer"
                >
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X">X (Twitter)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                  Primary Niche
                </label>
                <select
                  value={formData.niche}
                  onChange={(e) =>
                    setFormData({ ...formData, niche: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none cursor-pointer"
                >
                  <option value="Lifestyle & Culture">Lifestyle & Culture</option>
                  <option value="Tech & Gadgets">Tech & Apps</option>
                  <option value="Comedy & Skits">Comedy & Skits</option>
                  <option value="Food & Spots">Food & Spots</option>
                  <option value="Fashion & Beauty">Fashion & Beauty</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                  Email for Brief Alerts *
                </label>
                <input
                  required
                  type="email"
                  placeholder="creator@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-100 text-xs text-orange-950 font-medium">
              ⚡ <strong>Ninja Payout Rates:</strong> G1 ₦30,000 • G2 ₦45,000 • G3 ₦60,000 • G4 ₦90,000 • G5 ₦120,000. Access to The Collaboratory studio in Lagos included.
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Submit Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
