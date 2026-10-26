"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function WaitlistModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    location: "Lagos, Nigeria",
    missionType: "Restaurant / Spot Review",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-neutral-200 rounded-3xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight">Added to Early Access!</h3>
            <p className="text-xs text-neutral-600">
              Thank you, <strong>{formData.businessName}</strong>. As soon as field creators are cleared for <strong>{formData.location}</strong>, our operations team will reach out.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-6 py-2 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider">
              Nano Missions • Coming Soon
            </div>
            <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
              Join Field Missions Waitlist
            </h3>
            <p className="text-xs text-neutral-500">
              Send creators into the real world: location shoots, store visits, and genuine on-the-ground reviews.
            </p>

            <div>
              <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                Business / Venue Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Terra Kulture, The View Hotel"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                Work Email *
              </label>
              <input
                required
                type="email"
                placeholder="manager@venue.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                Mission Type
              </label>
              <select
                value={formData.missionType}
                onChange={(e) =>
                  setFormData({ ...formData, missionType: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:border-[#111111] outline-none cursor-pointer"
              >
                <option value="Restaurant / Spot Review">Store / Restaurant Tasting & Review</option>
                <option value="On-Location Product Shoot">On-Location Product Photography</option>
                <option value="Hotel & Travel Experience">Hotel / Hospitality Walkthrough</option>
                <option value="Event Activation">Live Event Creator Attendance</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#2563eb] hover:bg-[#1d4ed8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Priority Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
