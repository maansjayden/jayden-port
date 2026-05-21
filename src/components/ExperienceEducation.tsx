import React, { useState } from "react";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../data";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

interface ExperienceEducationProps {
  highContrast: boolean;
}

export default function ExperienceEducation({ highContrast }: ExperienceEducationProps) {
  const [timelineTab, setTimelineTab] = useState<"all" | "experience" | "education">("all");

  return (
    <section
      id="experience"
      className={`py-20 border-t ${
        highContrast ? "bg-black border-cyan-400" : "bg-[#050505] border-white/10"
      }`}
      aria-labelledby="history-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#888] mb-2">My Background and Journey</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2
              id="history-heading"
              className={`text-3xl sm:text-4xl font-serif font-light leading-tight tracking-tight italic ${
                highContrast ? "text-white" : "text-white"
              }`}
            >
              Professional <span className="font-sans not-italic font-bold uppercase tracking-tighter text-[#666]">Record.</span>
            </h2>

            {/* Timelines Filtering Selector buttons */}
            <div className="flex bg-white/[0.02] p-1 border border-white/10 rounded-none self-start">
              {(["all", "experience", "education"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimelineTab(filter)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded-none transition-all cursor-pointer ${
                    timelineTab === filter
                      ? highContrast
                        ? "bg-cyan-400 text-black font-bold"
                        : "bg-white text-black font-semibold"
                      : "text-[#aaa] hover:text-white"
                  }`}
                  aria-label={`Filter history by ${filter}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Experience Section (Left column if all or experience) */}
          {(timelineTab === "all" || timelineTab === "experience") && (
            <div className={`${timelineTab === "all" ? "lg:col-span-1" : "lg:col-span-12"} space-y-8 lg:col-span-7`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-none ${
                  highContrast ? "bg-black border border-white text-white" : "bg-white/5 text-white"
                }`}>
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className={`text-md font-display font-medium ${
                  highContrast ? "text-white" : "text-white"
                }`}>
                  Professional Experience
                </h3>
              </div>

              {/* Experience Thread */}
              <div className="space-y-8 relative pl-4 border-l border-white/10">
                {EXPERIENCE_DATA.map((job) => (
                  <article
                    key={job.id}
                    className={`relative p-6 sm:p-8 rounded-none border transition-all hover:scale-[1.01] ${
                      highContrast
                        ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                        : "bg-white/[0.01] border-white/5 hover:bg-[#0a0a0a] hover:border-white/10"
                    }`}
                  >
                    {/* Visual Connector Dot */}
                    <span className="absolute -left-[21px] top-8 h-2 w-2 rounded-full bg-white border border-black ring-4 ring-white/5" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                      <div>
                        {job.isFounding && (
                          <span className={`text-[9px] font-mono tracking-wider uppercase bg-white/10 px-2 py-0.5 rounded-none mb-2 inline-block ${
                            highContrast ? "bg-cyan-950 text-cyan-405 border border-cyan-400" : "text-[#aaa] border border-white/5"
                          }`}>
                            Founding Venture
                          </span>
                        )}
                        <h4 className={`text-lg font-display font-medium ${
                          highContrast ? "text-white" : "text-white"
                        }`}>
                          {job.role}
                        </h4>
                        <p className={`text-xs font-mono uppercase tracking-widest ${
                          highContrast ? "text-cyan-400" : "text-[#aaa]"
                        }`}>
                          {job.organization}
                        </p>
                      </div>

                      <div className="text-left sm:text-right font-mono text-[10px] tracking-wide text-[#888] space-y-1">
                        <span className="flex items-center sm:justify-end gap-1.5 uppercase font-medium">
                          <Calendar className="h-3 w-3 text-[#555]" />
                          {job.period}
                        </span>
                        {job.location && (
                          <span className="flex items-center sm:justify-end gap-1.5 text-[9px] uppercase tracking-wider text-[#666]">
                            <MapPin className="h-2.5 w-2.5" />
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6" role="list">
                      {job.description.map((sentence, i) => (
                        <li key={i} className="text-xs text-[#aaa] leading-relaxed font-sans font-light">
                          {sentence}
                        </li>
                      ))}
                    </ul>

                    {/* Achievements Section if available */}
                    {job.achievements && job.achievements.length > 0 && (
                      <div className="pt-4 border-t border-white/5">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#555] font-bold mb-2 block">Key Accomplishments</span>
                        <ul className="space-y-2" role="list">
                          {job.achievements.map((achievement, ai) => (
                            <li key={ai} className="flex gap-2.5 text-xs text-[#888] leading-relaxed">
                              <CheckCircle2 className="h-3.5 w-3.5 text-white/20 flex-none self-start mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Education Section (Right column if all or education) */}
          {(timelineTab === "all" || timelineTab === "education") && (
            <div className={`${timelineTab === "all" ? "lg:col-span-5" : "lg:col-span-12"} space-y-8`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-none ${
                  highContrast ? "bg-black border border-white text-white" : "bg-white/5 text-white"
                }`}>
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className={`text-md font-display font-medium ${
                  highContrast ? "text-white" : "text-white"
                }`}>
                  Academic Credentials
                </h3>
              </div>

              {/* Education Thread */}
              <div className="space-y-8 relative pl-4 border-l border-white/10">
                {EDUCATION_DATA.map((edu) => (
                  <article
                    key={edu.id}
                    className={`relative p-6 rounded-none border transition-all hover:scale-[1.01] ${
                      highContrast
                        ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                        : "bg-white/[0.01] border-white/5 hover:bg-[#0a0a0a] hover:border-white/10"
                    }`}
                  >
                    {/* Dot connector */}
                    <span className="absolute -left-[21px] top-8 h-2 w-2 rounded-full bg-white border border-black ring-4 ring-white/5" />

                    <div className="mb-4">
                      <span className="text-[9px] font-mono tracking-wider uppercase bg-white/10 text-[#aaa] border border-white/5 px-2 py-0.5 rounded-none mb-2 inline-block">
                        Higher Diploma
                      </span>
                      <h4 className={`text-lg font-display font-medium ${
                        highContrast ? "text-white" : "text-white"
                      }`}>
                        {edu.diploma}
                      </h4>
                      <div className="flex justify-between items-center text-[10px] font-mono text-[#888] mt-1.5 uppercase tracking-wide">
                        <span className="text-white font-medium">{edu.institution}</span>
                        <span className="flex items-center gap-1 font-bold">
                          <Calendar className="h-3 w-3 text-[#555]" />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-sans font-light leading-relaxed text-[#aaa] mb-6">
                      {edu.description}
                    </p>

                    {/* Skills acquired block */}
                    {edu.skillsAcquired && edu.skillsAcquired.length > 0 && (
                      <div className="pt-4 border-t border-white/5">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#555] font-bold mb-3 block">Specialized Syllabus Mastery</span>
                        <div className="flex flex-col gap-2">
                          {edu.skillsAcquired.map((skill, index) => (
                            <div key={index} className="flex gap-2 text-xs font-sans text-[#888]">
                              <Award className="h-3.5 w-3.5 text-white/20 flex-none mt-0.5" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* Professional Memberships Section */}
              <div className="pt-4 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-none ${
                    highContrast ? "bg-black border border-white text-white" : "bg-white/5 text-white"
                  }`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <h3 className={`text-sm font-display font-medium uppercase tracking-wider ${
                    highContrast ? "text-white" : "text-white"
                  }`}>
                    Professional Memberships
                  </h3>
                </div>

                <div className={`p-6 rounded-none border text-left ${
                  highContrast
                    ? "bg-neutral-900 border-2 border-cyan-400 text-white"
                    : "bg-white/[0.01] border-white/5 hover:bg-[#0a0a0a] hover:border-white/10"
                }`}>
                  <ul className="space-y-4" role="list">
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white mt-2 flex-none" />
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                          IITPSA (Institute of IT Professionals South Africa)
                        </h4>
                        <p className="text-[10px] text-[#888] font-sans mt-0.5">
                          Student Member • Active Industry Integration
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 flex-none" />
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                          ISC2 Cape Town Chapter
                        </h4>
                        <p className="text-[10px] text-[#888] font-sans mt-0.5">
                          Student Member • Cybersecurity Network & Best Practices
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
