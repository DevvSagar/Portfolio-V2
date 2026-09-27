import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { techStackData } from '../data/portfolioData';
import TechIcon from './TechIcon';

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState(null);

  // Close details modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTech(null);
    };
    if (selectedTech) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTech]);

  return (
    <section id="tech-stack" className="py-20 px-6 sm:px-12 lg:px-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header: Tech Stack & Arsenal */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-poppins">
            Tech Stack &amp; Arsenal
          </h2>
          <div className="w-full h-[1px] bg-[#243a60]"></div>
        </div>

        {/* Matrix Table matching Image 1 layout */}
        <div className="rounded-xl border border-[#243a60] bg-[#0f1d33]/90 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Table Header (Hidden on small mobile where stacked headers feel cluttered) */}
          <div className="hidden sm:grid grid-cols-12 border-b border-[#243a60] bg-[#12233f] text-left text-xs uppercase tracking-wider font-semibold text-[#cbd5e1]">
            <div className="col-span-12 sm:col-span-4 lg:col-span-3 px-6 py-4 border-b sm:border-b-0 sm:border-r border-[#243a60]">
              Area
            </div>
            <div className="col-span-12 sm:col-span-8 lg:col-span-9 px-6 py-4">
              Technologies &amp; Tools
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#243a60]">
            {techStackData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 hover:bg-[#152744]/40 transition-colors duration-150"
              >
                {/* Area Column */}
                <div className="col-span-12 sm:col-span-4 lg:col-span-3 px-4 sm:px-6 py-3 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#243a60] flex items-center gap-2.5 font-semibold text-white text-sm sm:text-base bg-[#12233f]/60 sm:bg-transparent">
                  <span className="text-lg">{row.icon}</span>
                  <span>{row.category}</span>
                </div>

                {/* Technologies Badges Column */}
                <div className="col-span-12 sm:col-span-8 lg:col-span-9 p-4 sm:px-6 sm:py-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {row.technologies.map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => setSelectedTech(tech)}
                      className={`group relative inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded text-[11px] sm:text-xs font-poppins font-bold tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 cursor-pointer ${tech.bg} ${tech.textColor}`}
                      title={`Click to inspect ${tech.name}`}
                    >
                      <TechIcon name={tech.icon} className="w-3.5 h-3.5" />
                      <span>{tech.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal / Details Popup for Clicked Badge */}
        {selectedTech && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedTech(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedTech.name} details`}
          >
            <div className="relative w-full max-w-lg mx-3 sm:mx-auto rounded-xl bg-[#12233f] border border-[#2a436f] p-5 sm:p-6 shadow-2xl space-y-5 font-poppins">
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-poppins font-bold tracking-wide uppercase ${selectedTech.bg} ${selectedTech.textColor}`}>
                    <TechIcon name={selectedTech.icon} className="w-4 h-4" />
                    {selectedTech.name}
                  </span>
                  {selectedTech.version && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#172b4d] text-emerald-300 border border-emerald-500/30 text-xs font-poppins font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Latest: {selectedTech.version}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedTech(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a2f52] transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Role in Architecture */}
              <div className="space-y-2 pt-2 border-t border-[#1e3458]">
                <h4 className="text-xs font-bold text-[#94a7c6] uppercase tracking-wider font-poppins">
                  Role in Architecture
                </h4>
                <p className="text-sm text-white/95 leading-relaxed font-normal font-poppins">
                  {selectedTech.desc}
                </p>
              </div>

              {/* Action */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#213758] hover:bg-[#294570] transition-colors cursor-pointer font-poppins"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
