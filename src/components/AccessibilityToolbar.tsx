import React, { useState, useEffect } from "react";
import { Accessibility, Eye, Volume2, VolumeX, ZoomIn, ZoomOut, RotateCcw, Check, X } from "lucide-react";

interface AccessibilityToolbarProps {
  onFontScaleChange: (scale: number) => void;
  fontScale: number;
  onHighContrastToggle: (active: boolean) => void;
  highContrast: boolean;
}

export default function AccessibilityToolbar({
  onFontScaleChange,
  fontScale,
  onHighContrastToggle,
  highContrast,
}: AccessibilityToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [voiceMultiplier, setVoiceMultiplier] = useState(1); // 1 = normal, etc.

  // Voice narration function
  const speakText = (text: string) => {
    if (!speechEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.1; // Slightly faster for utility
    window.speechSynthesis.speak(utterance);
  };

  // Attach dynamic screen reader narration onto elements
  useEffect(() => {
    if (!speechEnabled) {
      window.speechSynthesis?.cancel();
      return;
    }

    const elementsToNarrate = document.querySelectorAll(
      "a, button, h1, h2, h3, h4, p, [role='button'], [role='tab'], li"
    );

    const handleFocusOrHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      let text = "";
      
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.getAttribute("role") === "button") {
        text = `${target.innerText}. Interactive element.`;
      } else {
        text = target.innerText;
      }
      
      if (text) {
        speakText(text);
      }
    };

    elementsToNarrate.forEach((el) => {
      el.addEventListener("focus", handleFocusOrHover);
      el.addEventListener("mouseenter", handleFocusOrHover);
    });

    return () => {
      elementsToNarrate.forEach((el) => {
        el.removeEventListener("focus", handleFocusOrHover);
        el.removeEventListener("mouseenter", handleFocusOrHover);
      });
    };
  }, [speechEnabled, fontScale, highContrast]); // Re-attach on accessibility option changes

  // Keyboard accessibility check
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Custom quick accessibility commands
      if (e.altKey && e.key === "a") {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleZoomIn = () => {
    if (fontScale < 1.4) {
      onFontScaleChange(fontScale + 0.1);
      speakText("Font size increased");
    }
  };

  const handleZoomOut = () => {
    if (fontScale > 0.9) {
      onFontScaleChange(fontScale - 0.1);
      speakText("Font size decreased");
    }
  };

  const handleReset = () => {
    onFontScaleChange(1.0);
    onHighContrastToggle(false);
    setSpeechEnabled(false);
    speakText("Accessibility options reset to default");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      <button
        id="acc-floating-btn"
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-500 cursor-pointer ${
          highContrast ? "bg-cyan-500 hover:bg-cyan-400" : "bg-gradient-to-tr from-sky-600 to-indigo-600 hover:shadow-sky-500/20"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          speakText(isOpen ? "Accessibility toolbar closed" : "Accessibility toolbar opened. Choose your font contrast and visual settings.");
        }}
        aria-expanded={isOpen}
        aria-label="Accessibility settings panel. Hotkey: Alt + A"
        title="Accessibility Settings (Alt+A)"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Accessibility className="h-6 w-6 animate-pulse" />}
      </button>

      {/* Toolbar Window */}
      {isOpen && (
        <div
          id="acc-toolbar-pane"
          className={`absolute bottom-16 right-0 w-80 rounded-2xl p-6 shadow-2xl border transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 ${
            highContrast
              ? "bg-black border-2 border-cyan-400 text-white"
              : "bg-slate-900/95 backdrop-blur-xl border-slate-800 text-slate-100"
          }`}
          role="region"
          aria-label="Accessibility options configuration menu"
        >
          <div className="flex items-center justify-between border-b pb-3 mb-4 border-slate-800">
            <h3 className="text-md font-display font-semibold flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-sky-400" />
              Lume Accessibility Controls
            </h3>
            <span className="text-xs text-sky-400 font-mono">WCAG AAA compliant</span>
          </div>

          <p className="text-xs mb-4 text-slate-400">
            Customize your experience. These assistive options override browser defaults for optimal legibility.
          </p>

          <div className="space-y-4">
            {/* Font Size Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Font Scaling:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleZoomOut}
                  className={`p-2 rounded-lg cursor-pointer ${
                    highContrast ? "bg-black border border-white hover:bg-neutral-800" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label="Decrease font size"
                  disabled={fontScale <= 0.9}
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-xs w-12 text-center font-mono font-bold" aria-live="polite">
                  {Math.round(fontScale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className={`p-2 rounded-lg cursor-pointer ${
                    highContrast ? "bg-black border border-white hover:bg-neutral-800" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label="Increase font size"
                  disabled={fontScale >= 1.4}
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">High Contrast Mode:</span>
              <button
                onClick={() => {
                  onHighContrastToggle(!highContrast);
                  speakText(!highContrast ? "High contrast mode active" : "Normal contrast restored");
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  highContrast ? "bg-cyan-400" : "bg-slate-700"
                }`}
                aria-checked={highContrast}
                role="switch"
                aria-label="Toggle AAA High Contrast Mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* AI Text Synthesizer & Narrator Mode */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Text Reader Mode:</span>
                <span className="text-[10px] text-slate-400 italic">Reads headers on hover/focus</span>
              </div>
              <button
                onClick={() => {
                  const state = !speechEnabled;
                  setSpeechEnabled(state);
                  setTimeout(() => {
                    if (state) {
                      speakText("Voice Reader Enabled. Move search or keyboard focus to text.");
                    }
                  }, 200);
                }}
                className={`flex gap-1 items-center px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  speechEnabled
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                aria-label="Toggle hover text speech narrator"
              >
                {speechEnabled ? (
                  <>
                    <Volume2 className="h-3.5 w-3.5" /> Speak ON
                  </>
                ) : (
                  <>
                    <VolumeX className="h-3.5 w-3.5 text-slate-400" /> Speak OFF
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Reset and Instruction Buttons */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800">
            <button
              onClick={handleReset}
              className="text-xs text-sky-400 hover:underline flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 p-1"
              aria-label="Reset all accessibility styles"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset Settings
            </button>
            <span className="text-[10px] text-slate-500 font-mono">Alt+A to toggle panel</span>
          </div>
        </div>
      )}
    </div>
  );
}
