import React, { useState, useEffect } from 'react';
import { FileText, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import DeveloperIllustration from './DeveloperIllustration';

export default function Hero({ onOpenResume, onOpenContact }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth, jitter-free typewriter effect
  useEffect(() => {
    const targetRole = personalInfo.roles[roleIndex];
    let timeoutId;

    if (isPaused) {
      // Pause at full word before backspacing
      timeoutId = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting) {
      if (currentText.length > 0) {
        // Fast, crisp backspacing
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 32);
      } else {
        // Gentle breath after word is cleared before typing next role
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }, 380);
      }
    } else {
      // Typing forward
      if (currentText.length < targetRole.length) {
        // Natural, smooth human typing cadence (~65ms)
        timeoutId = setTimeout(() => {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        }, 65);
      } else {
        // Complete word typed, enter pause phase
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, isPaused, roleIndex]);

  // Keep the last word and cursor bound together so the cursor never wraps alone
  const trimmed = currentText.trimEnd();
  const trailingSpaces = currentText.slice(trimmed.length);
  const lastSpace = trimmed.lastIndexOf(' ');
  const prefixText = lastSpace === -1 ? '' : trimmed.slice(0, lastSpace + 1);
  const suffixWord = lastSpace === -1 ? trimmed : trimmed.slice(lastSpace + 1);

  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-screen flex flex-col justify-start lg:justify-center pt-28 pb-16 lg:py-0 px-6 sm:px-12 lg:px-20 overflow-hidden scroll-mt-24"
    >
      {/* Background radial soft ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1e3a6a]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff4b5c]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column matching Image 2 */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          {/* "Hi There" text from Image 2 */}
          <p className="text-lg sm:text-2xl font-normal text-[#94a7c6] tracking-wide">
            Hi There
          </p>

          {/* "I'm Sagar" */}
          <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            I'm <span className="text-[#ff4b5c] transition-colors hover:text-[#ff6b7a]">{personalInfo.name}</span>
            <span className="sr-only"> - Backend Software Engineer &amp; Distributed Systems</span>
          </h1>

          {/* Clean, smooth dynamic subtitle with stable reserved height to prevent layout shifts */}
          <div className="min-h-[60px] min-[400px]:min-h-[56px] sm:min-h-[44px] flex items-center">
            <h2 className="text-base min-[390px]:text-[17px] min-[430px]:text-lg sm:text-2xl lg:text-3xl font-medium text-[#cbd5e1] leading-snug">
              <span>I am a </span>
              <span className="text-white font-bold tracking-tight">
                {prefixText}
                <span className="inline-block whitespace-nowrap">
                  {suffixWord}
                  {trailingSpaces}
                  <span
                    aria-hidden="true"
                    className={`inline-block w-[2.5px] sm:w-[3px] h-[1.15em] bg-[#ff4b5c] ml-1 align-[-0.15em] rounded-sm ${
                      isPaused ? 'animate-cursor-blink' : 'opacity-100'
                    }`}
                  />
                </span>
              </span>
            </h2>
          </div>

          {/* Tagline / Ethos */}
          <p className="text-sm sm:text-lg text-[#94a7c6] max-w-xl leading-relaxed font-normal">
            “DSA builds the mind. Backend builds the machine. Together, they’re lethal.”
          </p>

          {/* Action buttons matching Image 2 */}
          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 pt-2 w-full min-[480px]:w-auto">
            {/* Resume button (Solid Coral Red) */}
            <button
              onClick={onOpenResume}
              className="w-full min-[480px]:w-auto justify-center px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-[#ff4b5c] hover:bg-[#ff3347] active:scale-95 transition-all duration-200 shadow-lg shadow-[#ff4b5c]/25 hover:shadow-xl hover:shadow-[#ff4b5c]/35 flex items-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </button>

            {/* Contact Me button (Dark Slate Navy) */}
            <button
              onClick={onOpenContact}
              className="w-full min-[480px]:w-auto justify-center px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-[#213758] hover:bg-[#294570] border border-[#2d4875] active:scale-95 transition-all duration-200 shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110 text-[#94a7c6]" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Column: Developer Illustration matching Image 2 */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <DeveloperIllustration />
        </div>
      </div>
    </section>
  );
}
