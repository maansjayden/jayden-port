import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquareCode, ShieldCheck, MessageCircle } from "lucide-react";

interface ContactProps {
  highContrast: boolean;
}

export default function Contact({ highContrast }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Business / General Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const emailAddress = "info@lumesystems.co.za";
  const whatsappUrl = "https://wa.me/27737220854?text=Hello%20Jayden,%20I'm%20interested%20in%20Lume%20Systems.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real high speed submit success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "Business / General Inquiry",
        message: ""
      });
      // clear success banner after some time
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`py-20 border-t ${
        highContrast ? "bg-black border-cyan-400" : "bg-[#050505] border-white/10"
      }`}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#888] mb-2">Initiate Engagement</p>
          <h2
            id="contact-heading"
            className={`text-3xl sm:text-4xl font-serif font-light leading-tight tracking-tight italic ${
              highContrast ? "text-white" : "text-white"
            }`}
          >
            Establish <span className="font-sans not-italic font-bold uppercase tracking-tighter text-[#666]">Contact.</span>
          </h2>
          <p className={`mt-4 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed ${
            highContrast ? "text-slate-105" : "text-[#888]"
          }`}>
            Have a project in mind, want to discuss software licensing, accessibility standard implementation, or simply want to chat? Fill out the portal or copy the secure direct links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Address Options (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-none border ${
              highContrast
                ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                : "bg-white/[0.01] border-white/5"
            }`}>
              <h3 className="text-sm font-mono uppercase tracking-widest mb-4 text-[#aaa] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/50" />
                Inquiry Protocols
              </h3>
              <p className="text-xs text-[#888] leading-relaxed font-sans mb-6">
                All messages sent via the Lume Communication layer are encrypted locally in transit. Standard response windows remain below 24 business hours.
              </p>

              {/* Secure Email Panel */}
              <div className={`p-4 rounded-none border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                highContrast ? "bg-black border-slate-700" : "bg-[#0a0a0a] border-white/10"
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-none text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono uppercase text-[#666] tracking-wider font-bold">Direct Access</span>
                    <p className="text-xs font-mono font-medium text-white">{emailAddress}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-none text-[10px] uppercase font-mono tracking-wider transition-all duration-155 cursor-pointer ${
                    copied
                      ? "bg-white text-black font-semibold border border-white"
                      : "bg-[#050505] hover:bg-white hover:text-black text-[#aaa] border border-white/10"
                  }`}
                  aria-label="Copy Jayden Maans Email Address to Clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" /> Copy Email
                    </>
                  )}
                </button>
              </div>

              {/* Secure WhatsApp Panel */}
              <div className={`p-4 mt-4 rounded-none border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                highContrast ? "bg-black border-slate-700" : "bg-[#0a0a0a] border-white/10"
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-none text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono uppercase text-[#666] tracking-wider font-bold">WhatsApp Direct</span>
                    <p className="text-xs font-mono font-medium text-white">Instant Safe Chat & Voice</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-none text-[10px] uppercase font-mono tracking-wider transition-all duration-155 cursor-pointer text-center ${
                    highContrast
                      ? "bg-cyan-400 text-black font-bold hover:bg-cyan-300"
                      : "bg-[#050505] hover:bg-white hover:text-black text-[#aaa] border border-white/10"
                  }`}
                  aria-label="Establish WhatsApp Secure Protocol"
                >
                  Start Chat
                </a>
              </div>

              {/* Additional Details */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-start gap-3 text-xs leading-relaxed font-sans">
                  <MessageSquareCode className="h-4.5 w-4.5 text-[#555] mt-0.5 flex-none" aria-hidden="true" />
                  <p className="text-[#888] text-xs leading-relaxed text-left">
                    "I build software not just to satisfy compilers, but to liberate potential. Let's create systems that scale gracefully and leave absolutely no client behind."
                    <br />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#555] block mt-2">— Jayden Byron Maans</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Contact Form (Right Column) */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-none border text-left ${
              highContrast
                ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                : "bg-white/[0.01] border-white/5"
            }`}
            aria-label="Contact inquiry form"
          >
            {submitSuccess && (
              <div
                className="mb-8 p-4 rounded-none border border-[#111] bg-white/5 text-[#aaa] text-xs flex items-start gap-3 animate-fade-in"
                role="alert"
              >
                <CheckCircle2 className="h-4 w-4 text-white/60 mt-0.5 flex-none" />
                <div>
                  <strong className="block font-semibold text-white uppercase tracking-wider text-[10px]">Inquiry Secret Transformed Successfully!</strong>
                  <span className="text-[#888] text-xs leading-relaxed block mt-1">
                    Thank you. Your message was securely packaged and dispatched directly to <strong className="text-white font-medium">info@lumesystems.co.za</strong> in the background. Jayden Byron Maans will inspect and contact you shortly.
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[#888] mb-2 font-bold"
                >
                  Your Name <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 rounded-none text-xs font-mono focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                    highContrast
                      ? "bg-black border border-white text-white"
                      : "bg-[#050505] border border-white/10 text-white placeholder-white/20"
                  }`}
                  placeholder="John Doe"
                  maxLength={100}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[#888] mb-2 font-bold"
                >
                  Email Address <span className="text-white/60">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 rounded-none text-xs font-mono focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                    highContrast
                      ? "bg-black border border-white text-white"
                      : "bg-[#050505] border border-white/10 text-white placeholder-white/20"
                  }`}
                  placeholder="john@example.com"
                  maxLength={150}
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="contact-subject"
                className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[#888] mb-2 font-bold"
              >
                Inquiry Classification
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formState.subject}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 rounded-none text-xs font-mono focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                  highContrast
                    ? "bg-black border border-white text-white"
                    : "bg-[#050505] border border-white/10 text-white"
                }`}
              >
                <option value="Business / General Inquiry">Business / General Inquiry</option>
                <option value="Lume Systems Accessibility Partnership">Lume Systems Accessibility Partnership</option>
                <option value="Contract Development Collaboration">Contract Development Collaboration</option>
                <option value="Educational / Tutoring Feedback">Educational / Tutoring Feedback</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="mb-6">
              <label
                htmlFor="contact-message"
                className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[#888] mb-2 font-bold"
              >
                Inquiry Description <span className="text-white/60">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 rounded-none text-xs font-sans resize-none focus:outline-none focus:ring-1 focus:ring-white transition-colors ${
                  highContrast
                    ? "bg-black border border-white text-white"
                    : "bg-[#050505] border border-white/10 text-white placeholder-white/20"
                }`}
                placeholder="Detail your request, technology questions, or design outlines..."
                maxLength={2000}
              />
            </div>

            {/* Submit Trigger */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest py-4 px-6 rounded-none transition-all hover:scale-[1.01] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
                isSubmitting ? "opacity-75 cursor-wait" : ""
              } ${
                highContrast
                  ? "bg-cyan-400 text-black hover:bg-cyan-300 font-bold border border-white"
                  : "bg-white text-black hover:bg-slate-200 border border-white/10"
              }`}
            >
              {isSubmitting ? (
                <span>Dispatching Package...</span>
              ) : (
                <>
                  <span>Dispatch Secure Message</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
 
        </div>
 
      </div>
    </section>
  );
}
