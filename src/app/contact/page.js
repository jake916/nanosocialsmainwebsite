"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignModal from "@/components/CampaignModal";
import { Mail, MapPin, Clock, ArrowRight, Check, Send } from "lucide-react";

export default function ContactPage() {
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    userType: "brand",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "₦500k - ₦1.5M",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0c0a0b] text-white flex flex-col selection:bg-[#fed701] selection:text-[#0c0a0b]">
      {/* Navigation */}
      <Navbar onOpenCampaign={() => setCampaignModalOpen(true)} />

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Header */}
        <div className="max-w-[840px] mb-14">
          <p className="nano-eyebrow text-[#73887a] text-base tracking-[0.1em] mb-4">
            Connect with Nanosocials
          </p>
          <h1 className="nano-pixel text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-[0.02em] text-white mb-6">
            Get in touch. <span className="text-[#fed701]">Good campaigns deserve to travel.</span>
          </h1>
          <p className="font-['Mona_Sans',sans-serif] text-lg sm:text-xl leading-8 text-[#a9a4a0] m-0">
            Whether you are launching a product drop, looking to activate 20 creators simultaneously, or wanting to join our 500 graded Ninjas — our campaign directors are ready.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="nano-window nano-lift">
              <div className="nano-window__bar">
                <span className="nano-window__title">direct_channels.txt</span>
                <div className="nano-window__ctrls">
                  <span className="nano-window__ctrl text-xs font-mono">-</span>
                  <span className="nano-window__ctrl text-xs font-mono">□</span>
                </div>
              </div>
              <div className="nano-window__body p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1f1b1c] border border-[#2e2526] text-[#fed701] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.1em] text-[#a9a4a0] m-0 mb-1">
                      General & Inquiries
                    </p>
                    <a
                      href="mailto:info@nanosocials.com"
                      className="font-mono text-base text-white hover:text-[#fed701] transition-colors"
                    >
                      info@nanosocials.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1f1b1c] border border-[#2e2526] text-[#fed701] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.1em] text-[#a9a4a0] m-0 mb-1">
                      HQ & Creator Studio
                    </p>
                    <p className="font-['Mona_Sans',sans-serif] text-sm text-white m-0">
                      Lagos, Nigeria
                    </p>
                    <p className="font-['Mona_Sans',sans-serif] text-xs text-[#a9a4a0] m-0 mt-0.5">
                      The Collaboratory Creator Studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1f1b1c] border border-[#2e2526] text-[#fed701] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-['VCR_OSD_Mono',monospace] text-xs uppercase tracking-[0.1em] text-[#a9a4a0] m-0 mb-1">
                      Response SLA
                    </p>
                    <p className="font-['Mona_Sans',sans-serif] text-sm text-white m-0">
                      Within 24 Hours
                    </p>
                    <p className="font-['Mona_Sans',sans-serif] text-xs text-[#73887a] m-0 mt-0.5">
                      Mon–Fri: 9am – 6pm WAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 bg-[#151213] border-4 border-[#fed701] nano-lift">
              <p className="nano-pixel text-base text-white mb-2">
                Need an immediate quote?
              </p>
              <p className="font-['Mona_Sans',sans-serif] text-sm text-[#a9a4a0] mb-4">
                Launch the campaign brief generator to simulate budget, creator grades, and delivery timeline.
              </p>
              <button
                onClick={() => setCampaignModalOpen(true)}
                className="nano-btn nano-btn--primary nano-btn--sm w-full"
              >
                <span>Open Campaign Launcher</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Window Form */}
          <div className="lg:col-span-7">
            <div className="nano-window nano-lift">
              <div className="nano-window__bar">
                <span className="nano-window__title">send_message.sh</span>
                <div className="nano-window__ctrls">
                  <span className="nano-window__ctrl text-xs font-mono">-</span>
                  <span className="nano-window__ctrl text-xs font-mono">□</span>
                  <span className="nano-window__ctrl nano-window__ctrl--close text-xs font-mono">×</span>
                </div>
              </div>

              <div className="nano-window__body p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 font-['Mona_Sans',sans-serif]">
                    <div className="w-14 h-14 bg-[#3f612d] text-white flex items-center justify-center mx-auto border-2 border-white">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="nano-pixel text-2xl text-white tracking-[0.04em]">
                      Message Received!
                    </h3>
                    <p className="text-base text-[#a9a4a0] max-w-md mx-auto leading-6">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our campaign team has logged your inquiry. We will reach out to <strong className="text-[#fed701]">{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="nano-btn nano-btn--primary nano-btn--sm mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Role Selector */}
                    <div>
                      <label className="nano-field__label block mb-2">
                        I am representing:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: "brand", label: "A Brand" },
                          { id: "agency", label: "An Agency" },
                          { id: "creator", label: "A Creator" },
                          { id: "other", label: "Other" },
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, userType: type.id })}
                            className={`p-2 text-xs font-['VCR_OSD_Mono',monospace] uppercase tracking-[0.08em] border-2 transition-colors ${
                              formData.userType === type.id
                                ? "bg-[#fed701] text-[#0c0a0b] border-[#fed701] font-bold"
                                : "bg-[#1f1b1c] text-[#a9a4a0] border-[#2e2526] hover:text-white"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="nano-field">
                        <label className="nano-field__label">Full Name</label>
                        <div className="nano-field__box">
                          <input
                            required
                            type="text"
                            placeholder="e.g. Tunde Adeyemi"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="nano-field__input"
                          />
                        </div>
                      </div>

                      <div className="nano-field">
                        <label className="nano-field__label">Email Address</label>
                        <div className="nano-field__box">
                          <input
                            required
                            type="email"
                            placeholder="tunde@brand.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="nano-field__input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="nano-field">
                        <label className="nano-field__label">Brand / Organization</label>
                        <div className="nano-field__box">
                          <input
                            type="text"
                            placeholder="Company or Handle"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="nano-field__input"
                          />
                        </div>
                      </div>

                      <div className="nano-field">
                        <label className="nano-field__label">Target Budget</label>
                        <div className="nano-field__box">
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="nano-field__input cursor-pointer"
                          >
                            <option value="₦250k - ₦500k">₦250k – ₦500k</option>
                            <option value="₦500k - ₦1.5M">₦500k – ₦1.5M</option>
                            <option value="₦1.5M - ₦5M">₦1.5M – ₦5M</option>
                            <option value="₦5M+">₦5M+ (Multi-Wave)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="nano-field">
                      <label className="nano-field__label">Message / Campaign Scope</label>
                      <div className="nano-field__box">
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us what you want to achieve or what kind of creator wave you need..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="nano-field__input resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="nano-btn nano-btn--primary nano-btn--lg w-full"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </div>
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
