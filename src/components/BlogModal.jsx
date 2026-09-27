import React, { useState, useEffect } from 'react';
import { X, Notebook, BookOpen, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function BlogModal({ isOpen, onClose }) {
  const [render, setRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  // Manage smooth enter & exit lifecycle
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setRender(true);
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
      document.body.style.overflow = 'hidden';
      return () => cancelAnimationFrame(rafId);
    } else {
      setAnimate(false);
      timeoutId = setTimeout(() => {
        setRender(false);
        document.body.style.overflow = 'unset';
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Smoothly animated close handler
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 280);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (render) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [render]);

  if (!render) return null;

  const devlogUrl = personalInfo.devlogUrl || "https://github.com/DevvSagar/Devlog";
  const hashnodeUrl = personalInfo.hashnode || personalInfo.blog || "https://hashnode.com";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto font-poppins transition-opacity duration-300 ease-out ${
        animate ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div
        className={`relative w-full max-w-xl my-8 bg-[#0f1d33] border border-[#2a436f] rounded-2xl shadow-2xl overflow-hidden text-slate-200 transition-all duration-300 ease-out transform ${
          animate
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <h3 id="blog-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight font-poppins">
                Where would you like to read?
              </h3>
              <p className="text-xs sm:text-sm text-[#94a7c6] font-poppins leading-relaxed">
                Choose between my custom-built developer journal or my technical articles on Hashnode.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a2f52] border border-transparent hover:border-[#2a436f] transition-all cursor-pointer flex-shrink-0"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Devlog Card */}
            <a
              href={devlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="group relative p-5 rounded-xl bg-[#14243f]/90 border border-[#243a60] hover:border-[#ff4b5c] transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-[#ff4b5c]/5 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2f52] border border-[#2b4777] flex items-center justify-center text-[#ff4b5c] group-hover:scale-110 transition-transform">
                    <Notebook className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    My Devlog
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#ff4b5c] transition-colors flex items-center gap-1.5">
                    Devlog
                    <ArrowUpRight className="w-4 h-4 text-[#94a7c6] group-hover:text-[#ff4b5c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h4>
                  <p className="text-xs text-[#94a7c6] mt-1.5 leading-relaxed">
                    Personal blogging platform and developer journal built with FastAPI, PostgreSQL, and Jinja2.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1e3458] flex items-center text-xs font-semibold text-[#ff4b5c]">
                <span>Read on Devlog</span>
              </div>
            </a>

            {/* Hashnode Card */}
            <a
              href={hashnodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="group relative p-5 rounded-xl bg-[#14243f]/90 border border-[#243a60] hover:border-[#3b82f6] transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2f52] border border-[#2b4777] flex items-center justify-center text-[#3b82f6] group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Hashnode
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#3b82f6] transition-colors flex items-center gap-1.5">
                    Hashnode
                    <ArrowUpRight className="w-4 h-4 text-[#94a7c6] group-hover:text-[#3b82f6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h4>
                  <p className="text-xs text-[#94a7c6] mt-1.5 leading-relaxed">
                    Technical deep-dives, systems architecture, backend engineering guides, and tutorials.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1e3458] flex items-center text-xs font-semibold text-[#3b82f6]">
                <span>Read on Hashnode</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
