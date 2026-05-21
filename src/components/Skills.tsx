import React from "react";
import { SKILLS_DATA } from "../data";
import { Code, Layers, Hammer, Cpu, CheckCircle } from "lucide-react";

interface SkillsProps {
  highContrast: boolean;
}

export default function Skills({ highContrast }: SkillsProps) {
  // Map category icons helper
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Code className="h-4 w-4 text-[#888]" />;
      case "frameworks & runtimes":
        return <Layers className="h-4 w-4 text-[#888]" />;
      default:
        return <Hammer className="h-4 w-4 text-[#888]" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 border-t ${
        highContrast ? "bg-black border-cyan-400" : "bg-[#050505] border-white/10"
      }`}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#888] mb-2">Technical Capabilities</p>
          <h2
            id="skills-heading"
            className={`text-3xl sm:text-4xl font-serif font-light leading-tight tracking-tight italic ${
              highContrast ? "text-white" : "text-white"
            }`}
          >
            Sovereign <span className="font-sans not-italic font-bold uppercase tracking-tighter text-[#666]">Technology Stack.</span>
          </h2>
          <p className={`mt-4 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed ${
            highContrast ? "text-slate-100" : "text-[#888]"
          }`}>
            A robust set of programming languages, state-management frameworks, and modern deployment tools engineered for speed and ultimate data safety.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-none border transition-all duration-300 ${
                highContrast
                  ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                  : "bg-white/[0.01] border-white/5 hover:bg-[#0a0a0a] hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className={`p-2 rounded-none ${
                  highContrast ? "bg-black border border-white text-white" : "bg-white/5 text-white"
                }`}>
                  {getIcon(group.category)}
                </div>
                <h3 className={`text-md font-display font-medium ${
                  highContrast ? "text-white" : "text-white"
                }`}>
                  {group.category}
                </h3>
              </div>

              {/* Individual Skill Pills */}
              <div className="space-y-2" role="list">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center justify-between p-2.5 rounded-none transition-all ${
                      highContrast
                        ? "bg-black border border-slate-700 text-white"
                        : "bg-white/[0.02] border border-white/5 hover:border-white/10"
                    }`}
                    role="listitem"
                  >
                    <span className="text-xs font-mono tracking-wide text-white/80 font-medium">
                      {skill}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-mono select-none">
                      <CheckCircle className={`h-3 w-3 ${
                        highContrast ? "text-cyan-400" : "text-[#555]"
                      }`} />
                      <span className="text-[#666] uppercase tracking-widest font-bold">Active</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Tooltip / Accessibility Insight Footer */}
        <div className={`mt-12 p-6 rounded-none border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left ${
          highContrast ? "bg-black border-cyan-400 text-cyan-400" : "bg-[#0a0a0a] border-white/5 text-[#888]"
        }`}>
          <div className="flex items-center gap-3">
            <Cpu className={`h-4 w-4 flex-shrink-0 ${highContrast ? "text-white" : "text-white/40"}`} />
            <p className="text-xs font-sans leading-relaxed">
              <span className="font-semibold text-white">Continuous Delivery Focus:</span> Every project is automated with strong lint and typing parameters before deployment workflows.
            </p>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded-none border border-white/10 bg-white/5 text-[#aaa] uppercase tracking-widest">
            TypeScript 100% Type-Safe
          </span>
        </div>

      </div>
    </section>
  );
}
