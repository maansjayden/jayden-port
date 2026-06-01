import React, { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Github, ExternalLink, HelpCircle, Check, Eye, Code, HeartHandshake } from "lucide-react";

interface ProjectsProps {
  highContrast: boolean;
}

export default function Projects({ highContrast }: ProjectsProps) {
  // Track selected project for detailed features view (keeps user highly engaged)
  const [activeProjectTab, setActiveProjectTab] = useState<string>("lume");

  return (
    <section
      id="projects"
      className={`py-20 border-t ${
        highContrast ? "bg-black border-cyan-400" : "bg-[#050505] border-white/10"
      }`}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#888] mb-2">Selected Projects</p>
          <h2
            id="projects-heading"
            className={`text-3xl sm:text-4xl font-serif font-light leading-tight tracking-tight italic ${
              highContrast ? "text-white" : "text-white"
            }`}
          >
            Engineering <span className="font-sans not-italic font-bold uppercase tracking-tighter text-[#666]">With Purpose.</span>
          </h2>
          <p className={`mt-4 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed ${
            highContrast ? "text-slate-100" : "text-[#888]"
          }`}>
            A selection of innovative digital solutions constructed to address accessibility mismatches, streamline complex learning, and deliver extreme platform responsiveness.
          </p>
        </div>

        {/* Dynamic Details Toggle Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Project List Cards (Left 7-columns) */}
          <div className="lg:col-span-7 space-y-6">
            {PROJECTS_DATA.map((project) => {
              const isActive = activeProjectTab === project.id;
              return (
                <article
                  key={project.id}
                  onClick={() => setActiveProjectTab(project.id)}
                  onFocus={() => setActiveProjectTab(project.id)}
                  tabIndex={0}
                  className={`group relative p-6 sm:p-8 rounded-none border transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-white hover:scale-[1.01] ${
                    isActive
                      ? highContrast
                        ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                        : "bg-white/[0.03] border-white/20 text-white"
                      : highContrast
                      ? "bg-black border-slate-700 hover:border-cyan-400 text-slate-300"
                      : "bg-white/[0.01] border-white/5 hover:bg-[#0a0a0a] hover:border-white/10 text-[#aaa]"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                  aria-label={`Project: ${project.title}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className={`text-[9px] font-mono tracking-wider uppercase bg-white/10 px-2 py-0.5 rounded-none mb-2 inline-block ${
                        highContrast ? "bg-cyan-950 text-cyan-400 border border-cyan-400" : "text-[#888]"
                      }`}>
                        {project.subtitle}
                      </span>
                      <h3 className={`text-xl font-display font-medium ${
                        highContrast ? "text-white" : "text-white"
                      }`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.links?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 rounded-none border transition-all hover:scale-105 ${
                          highContrast
                            ? "border-cyan-400 text-cyan-400 hover:bg-white/10"
                            : "border-white/10 text-[#aaa] hover:text-white bg-white/5"
                        }`}
                        aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm font-sans font-light leading-relaxed mb-6 ${
                    isActive ? (highContrast ? "text-white" : "text-[#aaa]") : "text-[#888]"
                  }`}>
                    {project.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2 py-1 rounded-none ${
                          highContrast
                            ? "border border-slate-600 bg-black text-white"
                            : "bg-white/5 border border-white/10 text-slate-300"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Accessibility Badge Indicator */}
                  {project.accessibilityNote && (
                    <div className={`mt-4 pt-4 border-t flex items-center gap-2 text-[10px] font-sans ${
                      highContrast ? "border-slate-800 text-cyan-400" : "border-white/5 text-slate-400"
                    }`}>
                      <HeartHandshake className="h-4 w-4 flex-none text-[#666]" />
                      <span>{project.accessibilityNote}</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Detailed Specifications Panel (Right 5-columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            {PROJECTS_DATA.map((project) => {
              if (project.id !== activeProjectTab) return null;
              return (
                <div
                  key={`spec-${project.id}`}
                  className={`p-6 sm:p-8 rounded-none border transition-all duration-300 animate-in fade-in slide-in-from-right-4 ${
                    highContrast
                      ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                      : "bg-[#0a0a0a] border-white/10 text-white"
                  }`}
                  role="tabpanel"
                  aria-label={`Detailed features of ${project.title}`}
                >
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <p className={`text-[9px] font-mono uppercase tracking-[0.3em] ${
                      highContrast ? "text-cyan-400" : "text-[#555] font-bold"
                    }`}>Technical Breakdown & Specs</p>
                    <h4 className="text-lg font-display font-medium mt-1 text-white">{project.title} Core Utilities</h4>
                  </div>

                  <p className="text-xs mb-6 text-[#888] leading-relaxed font-sans">
                    These specific sub-systems demonstrate dynamic code delivery, zero-dependency visual models, and direct compliance implementation:
                  </p>

                  <ul className="space-y-4" role="list">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-xs font-sans text-slate-300 leading-relaxed">
                        <Check className={`h-4.5 w-4.5 flex-shrink-0 mt-0.5 ${
                          highContrast ? "text-cyan-400" : "text-white/40"
                        }`} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Button */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex gap-4">
                      {project.links?.live ? (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-mono py-3 rounded-none transition-all hover:scale-[1.02] cursor-pointer ${
                            highContrast
                              ? "bg-cyan-400 text-black font-bold hover:bg-cyan-300"
                              : "bg-[#050505] border border-white/10 text-[#aaa] hover:text-white hover:border-white"
                          }`}
                          aria-label={`Visit live site for ${project.title} (opens in external tab)`}
                        >
                          View Live Site <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className={`flex-1 inline-flex items-center justify-center text-[10px] uppercase tracking-widest font-mono py-3 rounded-none border ${
                          highContrast ? "border-slate-700 text-slate-600" : "border-white/5 text-[#444]"
                        }`}>
                          Live Demo Unavailable
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
