import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ExperienceEducation from "./components/ExperienceEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccessibilityToolbar from "./components/AccessibilityToolbar";

export default function App() {
  const [fontScale, setFontScale] = useState<number>(1.0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  return (
    <div
      style={{ fontSize: `${fontScale * 100}%` }}
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 transition-all ${
        highContrast
          ? "bg-black text-white selection:bg-cyan-400 selection:text-black"
          : "bg-[#050505] text-[#e5e5e5] selection:bg-white selection:text-black"
      }`}
    >
      {/* Visual Overlay Header (Decorative only, hidden for high contrast) */}
      {!highContrast && (
        <div className="absolute inset-x-0 top-0 h-[600px] z-0 bg-gradient-to-b from-neutral-900/40 via-neutral-950/20 to-transparent pointer-events-none" />
      )}

      {/* Accessible Header Navigation */}
      <Header highContrast={highContrast} />

      {/* Main Structural Flow */}
      <main
        id="main-content"
        className="flex-grow relative z-10"
        role="main"
        tabIndex={-1} // Allow keyboard focus on skip
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Bio Banner Section */}
          <Hero highContrast={highContrast} />

          {/* Interactive Projects Card Matrix */}
          <Projects highContrast={highContrast} />

          {/* Technical Skills Categorization Layer */}
          <Skills highContrast={highContrast} />

          {/* Chronological Career & Academic Milestones */}
          <ExperienceEducation highContrast={highContrast} />

          {/* Compliant Local Communication Portal */}
          <Contact highContrast={highContrast} />
        </div>
      </main>

      {/* Global Accessible Panel Toolbar Controls */}
      <AccessibilityToolbar
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        highContrast={highContrast}
        onHighContrastToggle={setHighContrast}
      />

      {/* Accessible Footer Credits & Copyrights */}
      <Footer highContrast={highContrast} />
    </div>
  );
}
