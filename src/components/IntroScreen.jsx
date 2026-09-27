import React, { useState, useEffect, useRef } from 'react';

export default function IntroScreen({ onFinish, onExiting }) {
  const [displayText, setDisplayText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const fullText = "seems like you are interested in my profile. haha whatever, welcome to my space.";
  const timerRef = useRef(null);
  const isFinishedRef = useRef(false);

  // Trigger ultra-smooth, coordinated cinematic exit
  const triggerExit = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsExiting(true);
    if (onExiting) onExiting();
    
    // Complete unmount after full 1250ms quintic glide
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 1250);
  };

  useEffect(() => {
    // Lock body scroll and reset position while intro is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    let index = 0;

    const typeNextChar = () => {
      if (isFinishedRef.current) return;

      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        const currentChar = fullText[index - 1];
        index++;

        // Natural, smooth human typing cadence
        let delay = 38;
        if (currentChar === '.') {
          delay = 280;
        } else if (currentChar === ',') {
          delay = 200;
        }

        if (index <= fullText.length) {
          timerRef.current = setTimeout(typeNextChar, delay);
        } else {
          // Finished typing: full sentence has been displayed!
          setIsCompleted(true);
          // Hold for 2.6 seconds so the user can comfortably read and absorb the full sentence
          timerRef.current = setTimeout(() => {
            triggerExit();
          }, 2600);
        }
      }
    };

    // Initial gentle pause before typing starts
    timerRef.current = setTimeout(typeNextChar, 350);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // If user clicks after the sentence is finished during the hold, proceed immediately
  const handleInteraction = () => {
    if (isCompleted) {
      triggerExit();
    }
  };

  return (
    <div
      onClick={handleInteraction}
      className={`fixed inset-0 min-h-screen w-screen z-[99999] flex items-center justify-center bg-[#172b4d] px-6 sm:px-12 select-none overflow-hidden font-poppins transform-gpu will-change-transform transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isExiting
          ? '-translate-y-28 opacity-0 scale-[1.03] pointer-events-none'
          : 'translate-y-0 opacity-100 scale-100'
      } ${isCompleted ? 'cursor-pointer' : 'cursor-default'}`}
      aria-label="Welcome Intro Screen"
    >
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1e3a6a]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#ff4b5c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Terminal Card with graceful float-fade */}
      <div
        className={`relative w-full max-w-2xl bg-[#12233f]/95 border border-[#243a60] rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-6 font-poppins transform-gpu will-change-transform transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExiting ? '-translate-y-10 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
        }`}
      >
        {/* Terminal Header - 3 clean colored dots */}
        <div className="flex items-center border-b border-[#243a60]/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff4b5c]/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/90 inline-block shadow-sm" />
          </div>
        </div>

        {/* Dynamic Typewritten Text Area in Poppins font */}
        <div className="min-h-[110px] min-[420px]:min-h-[90px] sm:min-h-[80px] flex items-center">
          <p className="font-poppins text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl text-white font-medium sm:font-semibold leading-relaxed tracking-tight">
            <span className="text-[#ff4b5c] font-bold mr-2.5 select-none font-poppins">&gt;</span>
            <span>{displayText}</span>
            <span
              className={`inline-block w-[2.5px] sm:w-[3px] h-[1.15em] bg-[#ff4b5c] ml-1.5 align-[-0.15em] rounded-sm ${
                isCompleted ? 'animate-cursor-blink' : 'opacity-100'
              }`}
              aria-hidden="true"
            />
          </p>
        </div>

        {/* Terminal Footer with Centered Status and Animated Dots */}
        <div className="flex items-center justify-center pt-2 text-xs sm:text-sm text-[#94a7c6] font-poppins text-center tracking-wide min-h-[28px]">
          <span
            className={`inline-flex items-center gap-2 transition-all duration-700 ${
              isCompleted
                ? 'opacity-100 translate-y-0 text-slate-300 font-medium'
                : 'opacity-0 translate-y-1'
            }`}
          >
            <span>Entering workspace</span>
            <span className="inline-flex gap-1 items-center pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b5c] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b5c] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b5c] animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
