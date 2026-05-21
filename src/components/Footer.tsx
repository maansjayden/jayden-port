import React from "react";
import { ArrowUp, Heart, Cpu } from "lucide-react";

interface FooterProps {
  highContrast: boolean;
}

export default function Footer({ highContrast }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const content = document.getElementById("acc-floating-btn");
    if (content) content.focus();
  };

  return (
    <footer
      className={`border-t py-12 ${
        highContrast ? "bg-black border-cyan-400 text-white" : "bg-[#050505] border-white/10 text-[#888]"
      }`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 mb-4 md:mb-0">
            <span className={`text-sm font-display font-medium tracking-tight flex items-center gap-1.5 ${
              highContrast ? "text-cyan-400" : "text-white"
            }`}>
              <Cpu className="h-4 w-4" />
              Jayden Byron Maans Portfolio &copy; {currentYear}
            </span>
            <p className="text-[10px] text-[#555] font-sans">
              Designed with strict adherence to WCAG 2.2 AAA &bullet; Built in React with Vite.
            </p>
          </div>

          {/* Core metadata text & heart */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span>Powering assistive solutions at</span>
            <a
              href="https://github.com/lumesystems"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline font-bold transition-colors ${
                highContrast ? "text-cyan-400" : "text-white hover:text-white"
              }`}
            >
              Lume Systems
            </a>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> for Accessibility
            </span>
          </div>

          {/* Trigger to Scroll to Top */}
          <button
            onClick={handleScrollTop}
            className={`p-3 rounded-none border hover:scale-105 transition-all focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
              highContrast
                ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                : "border-white/10 text-[#aaa] hover:text-white hover:border-white bg-white/5"
            }`}
            aria-label="Scroll back to Top of the Portfolio view"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
