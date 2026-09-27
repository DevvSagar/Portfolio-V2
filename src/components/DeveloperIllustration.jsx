import React, { useState, useEffect, useRef } from 'react';
import TechIcon from './TechIcon';

export default function DeveloperIllustration() {
  const [activeBadge, setActiveBadge] = useState(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isSleeping, setIsSleeping] = useState(false);
  const eyeCenterRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    let animId;

    const resetIdleTimer = () => {
      setIsSleeping(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setIsSleeping(true);
      }, 2500);
    };

    // Initially start idle timer (falls asleep after 2.5s if untouched)
    idleTimerRef.current = setTimeout(() => {
      setIsSleeping(true);
    }, 2500);

    const handleMouseMove = (e) => {
      resetIdleTimer();

      if (!eyeCenterRef.current) return;
      const rect = eyeCenterRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.hypot(deltaX, deltaY);

      // Max eye travel distance in SVG coordinate space
      const maxDistance = 2.6;
      // Smooth movement scaling with distance
      const moveDistance = Math.min(maxDistance, (distance / 200) * maxDistance);

      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        setPupilOffset({
          x: Math.cos(angle) * moveDistance,
          y: Math.sin(angle) * moveDistance
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', resetIdleTimer, { passive: true });
    window.addEventListener('mousedown', resetIdleTimer, { passive: true });
    window.addEventListener('touchstart', resetIdleTimer, { passive: true });
    window.addEventListener('keydown', resetIdleTimer, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('touchstart', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      cancelAnimationFrame(animId);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] min-[420px]:max-w-[400px] sm:max-w-[460px] lg:max-w-[520px] aspect-square flex items-center justify-center select-none mx-auto">
      {/* Organic Blob Backdrop from Image 2 */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full text-[#253961] fill-current opacity-80 filter drop-shadow-2xl transition-all duration-700"
      >
        <path
          d="M441.5,334Q421,418,345,456Q269,494,183.5,453Q98,412,85,321Q72,230,147,159Q222,88,328.5,88Q435,88,448.5,174Q462,260,441.5,334Z"
          transform="translate(40, 20) scale(0.95)"
        />
      </svg>

      {/* Decorative ambient leaf/particle shapes from Image 2 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" aria-hidden="true">
        {/* Subtle floating leaves/dots matching the screenshot */}
        <g className="opacity-25 fill-[#6b82a8] animate-float-slow">
          <path d="M 420 130 C 425 115 440 110 445 125 C 440 140 425 140 420 130 Z" />
          <path d="M 490 150 C 495 140 510 135 515 148 C 505 160 495 158 490 150 Z" />
          <path d="M 120 380 C 130 370 145 375 140 390 C 130 400 120 395 120 380 Z" />
          <circle cx="160" cy="180" r="3" />
          <circle cx="480" cy="380" r="4" />
          <circle cx="110" cy="270" r="2.5" />
          <circle cx="510" cy="240" r="3" />
        </g>
      </svg>

      {/* Main Developer Vector Illustration matching Image 2 */}
      <svg
        viewBox="0 0 500 500"
        role="img"
        aria-label="Illustration of Sagar working on backend code"
        className="relative z-10 w-full h-full filter drop-shadow-xl"
      >
        <defs>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5364" />
            <stop offset="100%" stopColor="#e53e50" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff4b5c" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="lightAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4b5c" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff4b5c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Gentle background glow aura */}
        <circle cx="250" cy="250" r="200" fill="url(#lightAura)" />

        {/* Developer Shadow on floor */}
        <ellipse cx="250" cy="425" rx="140" ry="22" fill="#0f172a" opacity="0.45" />

        {/* Developer Body Group */}
        <g id="developer" className={isSleeping ? "developer-sleeping-breath" : ""}>
          {/* Crossed Legs (Dark Navy / Charcoal pants matching screenshot) */}
          {/* Left folded leg */}
          <path
            d="M 160 380 C 140 405 180 430 250 430 C 275 430 300 425 315 415 C 330 405 320 390 280 390 C 240 390 180 375 160 380 Z"
            fill="#1e273a"
          />
          {/* Right folded leg */}
          <path
            d="M 340 380 C 360 405 320 430 250 430 C 220 430 195 425 180 415 C 170 405 180 390 220 390 C 260 390 320 375 340 380 Z"
            fill="#1a2233"
          />

          {/* Feet / Shoes */}
          <ellipse cx="160" cy="415" rx="20" ry="10" fill="#f87171" opacity="0.9" />
          <ellipse cx="340" cy="415" rx="20" ry="10" fill="#f87171" opacity="0.9" />

          {/* Torso - Red T-shirt from Image 2 */}
          <path
            d="M 200 240 C 200 220 225 210 250 210 C 275 210 300 220 300 240 L 315 360 C 290 375 210 375 185 360 Z"
            fill="url(#shirtGrad)"
          />

          {/* Shirt Collar detail */}
          <path
            d="M 230 212 C 240 225 260 225 270 212 C 260 218 240 218 230 212 Z"
            fill="#1e273a"
            opacity="0.3"
          />

          {/* Neck */}
          <path
            d="M 238 190 L 262 190 L 262 215 C 255 220 245 220 238 215 Z"
            fill="#fecaca"
          />

          {/* Head / Face (Minimalist faceless design matching Image 2) */}
          <ellipse cx="250" cy="165" rx="30" ry="36" fill="#fed7aa" />

          {/* Hair (Voluminous messy dark hair matching Image 2) */}
          <path
            d="M 220 160 C 215 130 235 115 250 115 C 275 115 285 135 285 155 C 285 170 280 180 278 180 C 275 170 270 165 265 170 C 258 150 245 152 240 165 C 235 155 225 155 220 160 Z"
            fill="#1e2230"
          />

          {/* Interactive Mouse-Tracking Eyes & Sleeping Face with Smooth Eyelid Transition */}
          <g id="interactive-eyes" className="pointer-events-none">
            {/* Invisible anchor for precise bounding client rect */}
            <circle ref={eyeCenterRef} cx="250" cy="172" r="1" opacity="0" />

            {/* 1. Awake Face (Eyes open, pupils smoothly tracking mouse) */}
            <g
              id="awake-face"
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: isSleeping ? 0 : 1,
                transform: isSleeping ? 'scaleY(0.05)' : 'scaleY(1)',
                transformOrigin: '250px 172px'
              }}
            >
              {/* Subtle Eyebrows (Awake) */}
              <path d="M 235 163 Q 241 161 247 163" fill="none" stroke="#1e2230" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M 253 163 Q 259 161 265 163" fill="none" stroke="#1e2230" strokeWidth="1.6" strokeLinecap="round" />

              {/* Left Eye Sclera (White) */}
              <ellipse cx="241" cy="172" rx="4.8" ry="5.8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.6" />
              {/* Left Eye Pupil (Tracks mouse with smooth glide) */}
              <circle
                cx={241 + (isSleeping ? 0 : pupilOffset.x)}
                cy={172 + (isSleeping ? 0 : pupilOffset.y)}
                r="2.7"
                fill="#0f172a"
                className="transition-transform duration-200 ease-out"
              />
              {/* Left Eye Highlight */}
              <circle
                cx={241 + (isSleeping ? 0 : pupilOffset.x) - 0.9}
                cy={172 + (isSleeping ? 0 : pupilOffset.y) - 0.9}
                r="0.8"
                fill="#ffffff"
                className="transition-transform duration-200 ease-out"
              />

              {/* Right Eye Sclera (White) */}
              <ellipse cx="259" cy="172" rx="4.8" ry="5.8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.6" />
              {/* Right Eye Pupil (Tracks mouse with smooth glide) */}
              <circle
                cx={259 + (isSleeping ? 0 : pupilOffset.x)}
                cy={172 + (isSleeping ? 0 : pupilOffset.y)}
                r="2.7"
                fill="#0f172a"
                className="transition-transform duration-200 ease-out"
              />
              {/* Right Eye Highlight */}
              <circle
                cx={259 + (isSleeping ? 0 : pupilOffset.x) - 0.9}
                cy={172 + (isSleeping ? 0 : pupilOffset.y) - 0.9}
                r="0.8"
                fill="#ffffff"
                className="transition-transform duration-200 ease-out"
              />
            </g>

            {/* 2. Sleeping Face (Peacefully closed curved eyes, smile, breathing bubble) */}
            <g
              id="sleeping-face"
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: isSleeping ? 1 : 0,
                transform: isSleeping ? 'scaleY(1)' : 'scaleY(0.05)',
                transformOrigin: '250px 172px'
              }}
            >
              {/* Eyebrows (Relaxed Sleeping) */}
              <path d="M 235 165 Q 241 164 247 165" fill="none" stroke="#1e2230" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 253 165 Q 259 164 265 165" fill="none" stroke="#1e2230" strokeWidth="1.5" strokeLinecap="round" />

              {/* Closed Sleeping Eyes (Curved downward peaceful arcs) */}
              <path
                d="M 236 172 Q 241 177 246 172"
                fill="none"
                stroke="#1e2230"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 254 172 Q 259 177 264 172"
                fill="none"
                stroke="#1e2230"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Peaceful sleeping relaxed mouth */}
              <path
                d="M 247 182 Q 250 185 253 182"
                fill="none"
                stroke="#c2410c"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Cute sleepy breathing bubble near nose */}
              <circle
                cx="255"
                cy="181"
                r="3.2"
                fill="#38bdf8"
                className="sleep-bubble"
              />
            </g>

            {/* Cheeks Blush (gentle smooth transition) */}
            <ellipse
              cx="233"
              cy="181"
              rx={isSleeping ? 4.2 : 3.5}
              ry="2.2"
              fill="#f87171"
              opacity={isSleeping ? 0.55 : 0.3}
              className="transition-all duration-700 ease-in-out"
            />
            <ellipse
              cx="267"
              cy="181"
              rx={isSleeping ? 4.2 : 3.5}
              ry="2.2"
              fill="#f87171"
              opacity={isSleeping ? 0.55 : 0.3}
              className="transition-all duration-700 ease-in-out"
            />
          </g>

          {/* Snoring "zzzzzz" animation floating up - Smooth persistent fade */}
          <g
            id="snoring-zs"
            className="pointer-events-none select-none transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isSleeping ? 1 : 0
            }}
          >
            <text x="264" y="165" className="snore-z snore-z-1 font-poppins font-black" fill="#38bdf8">
              z
            </text>
            <text x="264" y="165" className="snore-z snore-z-2 font-poppins font-black" fill="#7dd3fc">
              z
            </text>
            <text x="264" y="165" className="snore-z snore-z-3 font-poppins font-black" fill="#bae6fd">
              Z
            </text>
            <text x="264" y="165" className="snore-z snore-z-4 font-poppins font-black" fill="#ffffff">
              Z
            </text>
          </g>

          {/* Arms holding laptop */}
          {/* Left arm */}
          <path
            d="M 205 245 L 180 320 L 220 340 L 230 320 L 215 270 Z"
            fill="#dc2626"
          />
          {/* Right arm */}
          <path
            d="M 295 245 L 320 320 L 280 340 L 270 320 L 285 270 Z"
            fill="#b91c1c"
          />

          {/* Hands */}
          <circle cx="218" cy="335" r="9" fill="#fed7aa" />
          <circle cx="282" cy="335" r="9" fill="#fed7aa" />

          {/* Laptop Lid (Facing forward, with "acer" logo from Image 2!) */}
          <g id="laptop">
            {/* Laptop Base */}
            <rect x="200" y="342" width="100" height="8" rx="2" fill="#334155" />
            {/* Screen Back */}
            <rect
              x="208"
              y="275"
              width="84"
              height="65"
              rx="4"
              fill="url(#laptopGrad)"
              stroke="#475569"
              strokeWidth="1.5"
            />
            {/* Apple MacBook Logo - Clean & White */}
            <svg
              x="238"
              y="294"
              width="24"
              height="27"
              viewBox="0 0 24 24"
              className="pointer-events-none transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.35))'
              }}
            >
              <path
                fill="#ffffff"
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.03-.51 2.68-1.26z"
              />
            </svg>
            {/* Subtle glow coming from laptop screen onto user */}
            <polygon
              points="208,275 292,275 315,220 185,220"
              fill="url(#screenGlow)"
              pointerEvents="none"
            />
          </g>
        </g>
      </svg>

      {/* Floating Interactive Backend Badges around developer */}
      {/* 1. FastAPI Badge (Top-Right) */}
      <div
        className="absolute top-6 sm:top-8 right-2 sm:right-6 z-20 bg-[#1d355c]/95 border border-[#059669]/60 hover:border-[#059669] px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer transform hover:scale-110 transition-all duration-300 animate-float-slow"
        onMouseEnter={() => setActiveBadge('fastapi')}
        onMouseLeave={() => setActiveBadge(null)}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-ping opacity-75"></span>
        <TechIcon name="fastapi" className="w-4 h-4 text-[#059669]" />
        <span className="text-xs font-poppins font-bold text-emerald-300 tracking-wide">FastAPI</span>
      </div>

      {/* 2. Golang Concurrency Badge (Left-Center) */}
      <div
        className="absolute top-1/3 left-1 sm:-left-3 z-20 bg-[#1d355c]/95 border border-[#00add8]/60 hover:border-[#00add8] px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer transform hover:scale-110 transition-all duration-300 animation-delay-2000 animate-float-slow"
        onMouseEnter={() => setActiveBadge('golang')}
        onMouseLeave={() => setActiveBadge(null)}
      >
        <TechIcon name="golang" className="w-4 h-4 text-[#00add8]" />
        <span className="text-xs font-poppins font-bold text-cyan-300 tracking-wide">Golang</span>
      </div>

      {/* 3. PostgreSQL Badge (Bottom-Right) */}
      <div
        className="absolute bottom-10 sm:bottom-12 right-2 sm:right-4 z-20 bg-[#1d355c]/95 border border-[#2563eb]/60 hover:border-[#2563eb] px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer transform hover:scale-110 transition-all duration-300 animation-delay-4000 animate-float-slow"
        onMouseEnter={() => setActiveBadge('postgres')}
        onMouseLeave={() => setActiveBadge(null)}
      >
        <TechIcon name="postgresql" className="w-4 h-4 text-[#38bdf8]" />
        <span className="text-xs font-poppins font-bold text-sky-300 tracking-wide">PostgreSQL</span>
      </div>

      {/* 4. Docker Badge (Bottom-Left) */}
      <div
        className="absolute bottom-14 sm:bottom-16 left-2 sm:left-6 z-20 bg-[#1d355c]/95 border border-[#0284c7]/60 hover:border-[#0284c7] px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer transform hover:scale-110 transition-all duration-300 animate-float-slow"
        onMouseEnter={() => setActiveBadge('docker')}
        onMouseLeave={() => setActiveBadge(null)}
      >
        <TechIcon name="docker" className="w-4 h-4 text-[#38bdf8]" />
        <span className="text-xs font-poppins font-bold text-cyan-300 tracking-wide">Docker</span>
      </div>

      {/* Live Tooltip when badge hovered */}
      {activeBadge && (
        <div
          className={`absolute -bottom-14 sm:-bottom-8 left-1/2 -translate-x-1/2 z-30 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#1d355c]/95 border shadow-xl shadow-black/25 backdrop-blur-md max-w-[90vw] sm:max-w-none text-center sm:text-left whitespace-normal sm:whitespace-nowrap animate-in fade-in zoom-in duration-150 flex items-center justify-center gap-2 text-xs sm:text-sm font-poppins font-medium text-white ${
            activeBadge === 'fastapi'
              ? 'border-[#059669]/60'
              : activeBadge === 'golang'
              ? 'border-[#00add8]/60'
              : activeBadge === 'postgres'
              ? 'border-[#2563eb]/60'
              : 'border-[#0284c7]/60'
          }`}
        >
          {activeBadge === 'fastapi' && (
            <>
              <span className="text-emerald-400">⚡</span>
              <span>High-throughput asynchronous REST & WebSocket APIs</span>
            </>
          )}
          {activeBadge === 'golang' && (
            <>
              <span>🐹</span>
              <span>High-concurrency compiled microservices & goroutines</span>
            </>
          )}
          {activeBadge === 'postgres' && (
            <>
              <span>🗄️</span>
              <span>Scalable relational ACID storage & connection pooling</span>
            </>
          )}
          {activeBadge === 'docker' && (
            <>
              <span>🐳</span>
              <span>Multi-stage container runtimes & isolated microservices</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
