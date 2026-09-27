import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-12 lg:px-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-poppins">
            Experience
          </h2>
          <div className="w-full h-[1px] bg-[#243a60]"></div>
        </div>

        {/* Experience Cards List */}
        <div className="space-y-6 font-poppins">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-xl bg-[#12233f]/90 border border-[#243a60] p-5 sm:p-7 shadow-xl hover:border-[#38598c] transition-all duration-300 backdrop-blur-sm group overflow-hidden font-poppins"
            >
              {/* Subtle hover accent bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-transparent group-hover:bg-[#ff4b5c] transition-colors rounded-l-xl"></div>

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Company Avatar / Logo */}
                  {exp.logoLetter === 'G' ? (
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center font-bold text-xl sm:text-2xl text-white shadow-lg shadow-amber-950/30 flex-shrink-0">
                      G
                    </div>
                  ) : (
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] flex items-center justify-center font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-white shadow-lg shadow-sky-950/30 border border-sky-400/20 flex-shrink-0">
                      Etech
                    </div>
                  )}

                  {/* Title & Company */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#ff4b5c] transition-colors leading-snug">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-[#94a7c6] flex flex-wrap items-center gap-2">
                      <span className="text-white font-medium">{exp.company}</span>
                      <span>·</span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] sm:text-xs font-poppins font-bold bg-[#172b4d] text-slate-200 border border-[#253f6c]">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-col sm:items-end text-xs text-[#94a7c6] space-y-1 pl-0 sm:pl-0 pt-1 sm:pt-0">
                  <div className="flex items-center gap-1.5 font-poppins font-semibold text-slate-100">
                    <Calendar className="w-3.5 h-3.5 text-[#ff4b5c]" />
                    <span>{exp.duration} · {exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#6b82a8]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Bullets */}
              <ul className="space-y-2.5 text-sm sm:text-base text-[#cbd5e1] leading-relaxed pt-5 pl-1">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="text-[#ff4b5c] mt-1 font-bold select-none text-xs">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
