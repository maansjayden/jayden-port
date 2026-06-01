import React from "react";
import { Github, Linkedin, ArrowRight, Accessibility, Sparkles, Download, Terminal, MessageCircle } from "lucide-react";
import { SPOKEN_LANGUAGES } from "../data";

interface HeroProps {
  highContrast: boolean;
}

export default function Hero({ highContrast }: HeroProps) {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center py-20 lg:py-32 overflow-hidden"
      aria-label="About Jayden Byron Maans"
    >
      {/* Decorative Grid Overlays (Clean and subtle, no tech-larping logs) */}
      {!highContrast && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,#111111,transparent)] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-white/2 blur-3xl rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-white/1 blur-3xl rounded-full" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] mb-8 animate-fade-in border transition-all hover:scale-105 border-white/10 bg-white/5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#888]"></span>
          </span>
          <span className={highContrast ? "text-cyan-400 font-bold" : "text-[#aaa]"}>
            Founder, Lume Systems &bull; Software Developer
          </span>
        </div>

        {/* Hero Title (Combining requested full-stack accessibility headline with the Sophisticated Dark italic design) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight text-white italic mb-10">
          Building accessible <br />
          technology for a <br />
          <span className={`not-italic font-sans font-black uppercase tracking-tighter block mt-2 ${
            highContrast ? "text-cyan-400 underline" : "text-white"
          }`}>
            Connected Future.
          </span>
        </h1>

        {/* Narrative bio/subtext with bold highlights */}
        <div className="max-w-3xl mb-12">
          <p className={`text-base sm:text-lg font-sans leading-relaxed mb-6 ${
            highContrast ? "text-white" : "text-[#aaa]"
          }`}>
            I am <strong className="font-medium text-white">Jayden Byron Maans</strong>, a focused 
            Junior Software Developer and the <strong className="font-medium text-white">Founder of Lume Systems</strong>. 
            Currently studying <strong className="font-medium text-white">NQF Level 6 Software Engineering at WeThinkCode_</strong>, 
            I bridge the gap between heavy computational capability and digital accessibility standards.
          </p>
          <p className={`text-sm sm:text-base font-sans leading-relaxed ${
            highContrast ? "text-slate-200" : "text-[#888]"
          }`}>
            Specializing in full-stack web development, my daily objective is constructing sleek software 
            architecture that adheres strictly to WCAG AAA benchmarks—ensuring that the next wave of advanced AI 
            remains inclusive, responsive, and completely open to everyone.
          </p>
        </div>

        {/* Action Button Controls - Replaced intense sky blue gradients with Sophisticated subtle borders */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className={`inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-mono font-medium px-6 py-3.5 rounded-none transition-all hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
              highContrast
                ? "bg-cyan-400 text-black hover:bg-cyan-300 border border-white"
                : "bg-white text-black hover:bg-slate-200 border border-white/20"
            }`}
            aria-label="View Jayden's production projects"
          >
            Explore Projects
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <a
            href="/cv.pdf"
            download
            className={`inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-mono font-medium px-6 py-3.5 rounded-none transition-all hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer border ${
              highContrast
                ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                : "border-white/20 text-[#aaa] hover:text-white hover:border-white bg-white/5"
            }`}
            aria-label="Download Jayden's CV as PDF"
          >
            Download CV
            <Download className="h-3.5 w-3.5" />
          </a>

          {/* Social Icons with clear screen reader descriptions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/maansjayden56"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center h-11 w-11 rounded-none border transition-all hover:scale-[1.05] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
                highContrast
                  ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                  : "border-white/10 text-[#aaa] hover:text-white bg-white/3"
              }`}
              aria-label="Jayden Maans GitHub Profile (opens in external tab)"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/jayden-maans-3a81202b7"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center h-11 w-11 rounded-none border transition-all hover:scale-[1.05] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
                highContrast
                  ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                  : "border-white/10 text-[#aaa] hover:text-white bg-white/3"
              }`}
              aria-label="Jayden Maans LinkedIn Profile (opens in external tab)"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/27737220854?text=Hello%20Jayden%2C%20I%27m%20interested%20in%20Lume%20Systems."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center h-11 w-11 rounded-none border transition-all hover:scale-[1.05] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
                highContrast
                  ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                  : "border-white/10 text-[#aaa] hover:text-white bg-white/3"
              }`}
              aria-label="Connect with Jayden Maans on WhatsApp (opens in external tab)"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Tech Highlights Badge Area */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] font-bold mb-4 font-sans">Core Principles</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono tracking-wide">
                <span className="flex items-center gap-2 text-[#aaa]">
                  <Accessibility className="h-3.5 w-3.5 text-[#888]" /> Inclusive Design First
                </span>
                <span className="flex items-center gap-2 text-[#aaa]">
                  <Terminal className="h-3.5 w-3.5 text-[#888]" /> Performance Driven
                </span>
                <span className="flex items-center gap-2 text-[#aaa]">
                  <Sparkles className="h-3.5 w-3.5 text-[#888]" /> AI-Grounded Interfaces
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] font-bold mb-4 font-sans">Spoken Languages</p>
              <div className="flex flex-wrap gap-2">
                {SPOKEN_LANGUAGES.map(({ lang, level }) => (
                  <span key={lang} className={`text-[10px] font-mono px-2.5 py-1 border rounded-none ${
                    highContrast
                      ? "border-slate-600 bg-black text-white"
                      : "bg-white/5 border-white/10 text-slate-300"
                  }`}>
                    {lang} <span className="text-[#555]">· {level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
