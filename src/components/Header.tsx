import React, { useState } from "react";
import { Menu, X, Accessibility, Cpu, ExternalLink } from "lucide-react";

interface HeaderProps {
  highContrast: boolean;
}

export default function Header({ highContrast }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSkipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const content = document.getElementById("main-content");
    if (content) {
      content.setAttribute("tabindex", "-1");
      content.focus();
      content.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-44 w-full transition-all border-b ${
        highContrast
          ? "bg-black border-cyan-400 text-white"
          : "bg-[#050505]/90 backdrop-blur-md border-white/10 text-slate-100"
      }`}
      role="banner"
    >
      {/* Skip to Main Content Link - Essential for Accessibility */}
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="absolute left-4 top-4 z-50 -translate-y-20 bg-white text-black px-4 py-2 font-display text-sm font-semibold rounded-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Info */}
          <div className="flex-shrink-0">
            <a href="#about" className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1">
              <span className={`text-md sm:text-lg font-display font-medium tracking-tight transition-all flex items-center gap-1.5 ${
                highContrast ? "text-cyan-400" : "text-white group-hover:text-slate-300"
              }`}>
                <Cpu className="h-4 w-4 text-white" />
                Jayden Byron Maans
              </span>
              <span className={`text-[9px] uppercase tracking-[0.2em] font-sans ${
                highContrast ? "text-white" : "text-[#888] group-hover:text-[#aaa]"
              }`}>
                Founder &bull; Lume Systems
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-sans transition-all px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white hover:scale-[1.02] ${
                  highContrast
                    ? "text-slate-200 hover:text-cyan-400 hover:underline"
                    : "text-[#aaa] hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Secondary Header Link: Founder direct quote */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com/lumesystems"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] px-4 py-2 border transition-all hover:scale-105 cursor-pointer ${
                highContrast
                  ? "border-cyan-400 text-cyan-400 hover:bg-neutral-900"
                  : "border-white/10 text-[#aaa] hover:text-white hover:border-white bg-white/5"
              }`}
            >
              Lume Systems <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-white cursor-pointer ${
                highContrast ? "text-white hover:bg-neutral-900" : "text-[#aaa] hover:text-white"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t animate-in fade-in duration-150 ${
            highContrast ? "bg-black border-cyan-400" : "bg-[#0b0b0b] border-white/10"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-xs uppercase tracking-[0.15em] transition-colors ${
                  highContrast
                    ? "text-white hover:text-cyan-400 hover:bg-neutral-900"
                    : "text-[#aaa] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 px-4">
              <a
                href="https://github.com/lumesystems"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] py-2 rounded-xl text-center border ${
                  highContrast ? "border-cyan-400 text-cyan-400" : "border-white/15 text-white bg-white/5"
                }`}
              >
                Open Lume Systems <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
