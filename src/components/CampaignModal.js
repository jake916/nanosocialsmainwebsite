"use client";

import { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";

export default function CampaignModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    campaignGoal: "content",
    creatorCount: 10,
    platform: "TikTok & Instagram",
    briefNotes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const estimatedBudget =
    formData.campaignGoal === "traffic"
      ? "₦100,000 (Click Pool)"
      : `₦${(formData.creatorCount * 45000 * 1.075).toLocaleString("en-NG", {
          maximumFractionDigits: 0,
        })}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="nano-window nano-lift w-full max-w-xl relative">
        {/* Window Title Bar */}
        <div className="nano-window__bar">
          <span className="nano-window__title">
            new_campaign_launcher.exe
          </span>
          <div className="nano-window__ctrls">
            <span className="nano-window__ctrl text-xs font-mono">-</span>
            <span className="nano-window__ctrl text-xs font-mono">□</span>
            <button
              onClick={onClose}
              className="nano-window__ctrl nano-window__ctrl--close text-xs font-mono cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className="nano-window__body p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 font-['Mona_Sans',sans-serif]">
              <div className="w-14 h-14 bg-[#3f612d] text-white flex items-center justify-center mx-auto border-2 border-white">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="nano-pixel text-2xl text-white tracking-[0.04em]">
                Campaign Brief Received!
              </h3>
              <p className="text-sm text-[#a9a4a0] max-w-md mx-auto leading-6">
                Workspace initialized for <strong className="text-white">{formData.brandName}</strong>. Our engine is matching your requirements against our 500 graded creators. A formal scope has been dispatched to <strong className="text-[#fed701]">{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="nano-btn nano-btn--primary nano-btn--sm mt-4"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#1f1b1c] pb-3 mb-4">
                <h3 className="nano-pixel text-xl sm:text-2xl text-white tracking-[0.04em] m-0">
                  Open a campaign
                </h3>
                <p className="font-['Mona_Sans',sans-serif] text-xs sm:text-sm text-[#a9a4a0] mt-1 m-0">
                  Specify your parameters. We match graded creators and initialize your tracking rails.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="nano-field">
                  <label className="nano-field__label">Brand / Company Name</label>
                  <div className="nano-field__box">
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mainstack"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="nano-field__input"
                    />
                  </div>
                </div>

                <div className="nano-field">
                  <label className="nano-field__label">Work Email</label>
                  <div className="nano-field__box">
                    <input
                      required
                      type="email"
                      placeholder="marketing@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="nano-field__input"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="nano-field">
                  <label className="nano-field__label">Campaign Type</label>
                  <div className="nano-field__box">
                    <select
                      value={formData.campaignGoal}
                      onChange={(e) => setFormData({ ...formData, campaignGoal: e.target.value })}
                      className="nano-field__input cursor-pointer"
                    >
                      <option value="content">Content Campaign (Conversation)</option>
                      <option value="traffic">Traffic Campaign (Pay-Per-Click)</option>
                      <option value="hybrid">Hybrid (Content + Click Pool)</option>
                    </select>
                  </div>
                </div>

                <div className="nano-field">
                  <label className="nano-field__label">Target Creator Count</label>
                  <div className="nano-field__box">
                    <select
                      value={formData.creatorCount}
                      onChange={(e) => setFormData({ ...formData, creatorCount: Number(e.target.value) })}
                      className="nano-field__input cursor-pointer"
                    >
                      <option value={5}>5 Creators (Starter)</option>
                      <option value={10}>10 Creators (Recommended Wave)</option>
                      <option value={20}>20 Creators (Coordinated Drop)</option>
                      <option value={50}>50+ Creators (Full Domination)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="nano-field">
                <label className="nano-field__label">Brief / Campaign Objective</label>
                <div className="nano-field__box">
                  <textarea
                    rows={3}
                    placeholder="Describe your product launch, key talking points, or desired action..."
                    value={formData.briefNotes}
                    onChange={(e) => setFormData({ ...formData, briefNotes: e.target.value })}
                    className="nano-field__input resize-none"
                  />
                </div>
              </div>

              {/* Estimate Pill Box */}
              <div className="p-3 bg-[#1f1b1c] border border-[#2e2526] flex items-center justify-between text-xs">
                <span className="font-['VCR_OSD_Mono',monospace] text-[#a9a4a0] uppercase">
                  Estimated Deployment:
                </span>
                <span className="font-['VCR_OSD_Mono',monospace] text-[#fed701] font-bold text-sm">
                  {estimatedBudget}
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="nano-btn nano-btn--ghost nano-btn--sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="nano-btn nano-btn--primary nano-btn--sm"
                >
                  <span>Launch Campaign</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
