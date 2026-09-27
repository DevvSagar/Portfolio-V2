import { Github, ExternalLink, FolderGit2, Notebook, AudioLines } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-poppins">
            Projects
          </h2>
          <div className="w-full h-[1px] bg-[#243a60]"></div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative rounded-xl bg-[#12233f]/90 border border-[#243a60] p-5 sm:p-7 shadow-xl hover:border-[#38598c] transition-all duration-300 backdrop-blur-sm group overflow-hidden flex flex-col justify-between space-y-5 font-poppins"
            >
              {/* Subtle hover accent bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-transparent group-hover:bg-[#ff4b5c] transition-colors rounded-l-xl"></div>

              {/* Top Section: Header + Highlights */}
              <div className="space-y-4">
                {/* Card Header: Icon + Title + Action Buttons */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <div className="w-9 h-9 rounded-lg bg-[#172b4d] border border-[#253f6c] flex items-center justify-center text-[#ff4b5c] group-hover:scale-105 transition-transform flex-shrink-0">
                      {project.id === 'devlog' || project.icon === 'notebook' ? (
                        <Notebook className="w-4 h-4" />
                      ) : project.id === 'scribo-ai' || project.icon === 'audio-lines' ? (
                        <AudioLines className="w-4 h-4" />
                      ) : (
                        <FolderGit2 className="w-4 h-4" />
                      )}
                    </div>
                    <h3 className="text-base min-[400px]:text-lg sm:text-xl font-bold font-poppins leading-snug">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#ff4b5c] transition-colors flex items-center gap-1 group/title"
                        >
                          <span>{project.title}</span>
                        </a>
                      ) : (
                        <span className="text-white group-hover:text-[#ff4b5c] transition-colors">
                          {project.title}
                        </span>
                      )}
                    </h3>

                    {/* Round Capsule Status Badge */}
                    {project.status && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-poppins transition-colors ${
                          project.status.toLowerCase() === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status.toLowerCase() === 'completed'
                              ? 'bg-emerald-400'
                              : 'bg-amber-400 animate-pulse'
                          }`}
                        />
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#172b4d] hover:bg-[#1d3761] border border-[#253f6c] text-[#cbd5e1] hover:text-[#ff4b5c] transition-all text-xs"
                        title="View Source on GitHub"
                        aria-label="View Source Code"
                      >
                        <Github className="w-4 h-4 text-[#94a7c6] hover:text-[#ff4b5c] transition-colors" />
                      </a>
                    )}
                    {project.liveDemo && project.liveDemo !== project.github && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#172b4d] hover:bg-[#1d3761] border border-[#253f6c] text-[#cbd5e1] hover:text-[#ff4b5c] transition-all text-xs"
                        title="Live Demo / Preview"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-[#ff4b5c]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[#94a7c6] leading-relaxed font-poppins">
                  {project.tagline}
                </p>

                {/* Problem Solved / Project Intent Highlights */}
                <div className="space-y-2.5 pt-1 font-poppins">
                  <h4 className="text-[11px] font-bold text-[#94a7c6] uppercase tracking-wider font-poppins">
                    {project.sectionTitle || 'What I Solved With This'}
                  </h4>
                  {Array.isArray(project.summary) ? (
                    <ul className="space-y-2 text-sm text-slate-200 leading-relaxed font-poppins">
                      {project.summary.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-[#ff4b5c] mt-1 font-bold select-none text-xs flex-shrink-0">▹</span>
                          <span className="font-poppins text-slate-200">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-200 leading-relaxed font-poppins">
                      {project.summary}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Section: Technologies Badges */}
              <div className="pt-2 border-t border-[#1e3458]/70">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-xs font-semibold bg-[#172b4d] text-slate-200 border border-[#253f6c] font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
