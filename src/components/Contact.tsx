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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwpJUfg0VskbJktWf5cBu51jeMYlgxMVgWhdOpEVaS5zSSpOqoGeHZ4Mm6PJn7PE-TuAw/exec';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);

      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "Business / General Inquiry",
        message: ""
      });
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error('Error!', error);
      alert("Message failed to dispatch. Please use the direct email link instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 border-t ${highContrast ? "bg-black border-cyan-400" : "bg-[#050505] border-white/10"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#888] mb-2">Initiate Engagement</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light leading-tight tracking-tight italic text-white">
            Establish <span className="font-sans not-italic font-bold uppercase tracking-tighter text-[#666]">Contact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-none border ${highContrast ? "bg-neutral-900 border-2 border-cyan-400" : "bg-white/[0.01] border-white/5"}`}>
              <h3 className="text-sm font-mono uppercase tracking-widest mb-4 text-[#aaa] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Inquiry Protocols
              </h3>
              <p className="text-xs text-[#888] leading-relaxed font-sans mb-6">
                All messages sent via the Lume Communication layer are encrypted locally in transit.
              </p>

              <div className={`p-4 rounded-none border flex justify-between items-center ${highContrast ? "bg-black" : "bg-[#0a0a0a]"}`}>
                <span className="text-xs text-white">{emailAddress}</span>
                <button onClick={handleCopyEmail} className="px-3 py-1.5 text-[10px] uppercase border border-white/10 hover:bg-white hover:text-black transition-colors">
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`lg:col-span-7 p-6 sm:p-8 rounded-none border text-left ${highContrast ? "bg-neutral-900 border-2 border-cyan-400" : "bg-white/[0.01] border-white/5"}`}>
            {submitSuccess && (
              <div className="mb-8 p-4 bg-white/5 text-[#aaa] text-xs flex gap-3">
                <CheckCircle2 className="h-4 w-4" />
                <p>Inquiry dispatched successfully to info@lumesystems.co.za.</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input type="text" name="name" required value={formState.name} onChange={handleFormChange} placeholder="Your Name" className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white" />
              <input type="email" name="email" required value={formState.email} onChange={handleFormChange} placeholder="Email" className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white" />
            </div>
            
            <select name="subject" value={formState.subject} onChange={handleFormChange} className="w-full mb-6 px-4 py-3 bg-[#050505] border border-white/10 text-white">
              <option>Business / General Inquiry</option>
              <option>Lume Systems Accessibility Partnership</option>
            </select>

            <textarea name="message" required rows={5} value={formState.message} onChange={handleFormChange} placeholder="Detail your request..." className="w-full mb-6 px-4 py-3 bg-[#050505] border border-white/10 text-white" />
            
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white text-black font-mono uppercase text-[11px] tracking-widest hover:bg-slate-200">
              {isSubmitting ? "Dispatching..." : "Dispatch Secure Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
