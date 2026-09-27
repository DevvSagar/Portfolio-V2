import React, { useState, useEffect } from 'react';
import { FileText, Clock } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [render, setRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  // Manage smooth enter & exit animation lifecycle
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

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 280);
  };

  // Close on Escape key
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
      aria-labelledby="resume-modal-title"
    >
      <div
        className={`relative w-full max-w-md my-8 bg-[#0f1d33] border border-[#2a436f] rounded-2xl shadow-2xl overflow-hidden text-slate-200 transition-all duration-300 ease-out transform ${
          animate
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Content Body */}
        <div className="px-6 py-8 text-center space-y-5">
          {/* Icon Badge */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#172b4d] border border-[#253f6c] flex items-center justify-center text-[#ff4b5c] shadow-lg shadow-[#ff4b5c]/10">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 font-poppins">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              Yet to be updated
            </span>

            <h3 id="resume-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight font-poppins pt-1">
              Resume
            </h3>

            <p className="text-sm text-[#94a7c6] font-poppins leading-relaxed max-w-xs mx-auto">
              My resume is currently being updated with recent projects and experience. Please check back soon!
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-8 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#1a2f52] hover:bg-[#233f6d] border border-[#2a436f] transition-all font-poppins cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
