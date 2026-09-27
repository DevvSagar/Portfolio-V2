import React, { useState } from 'react';
import { Github, Linkedin, Twitter, BookOpen, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingSidebar({ onOpenBlog }) {
  const [copied, setCopied] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(personalInfo.discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  return (
    <>
      {/* Floating Left Social Bar - matching Image 2 */}
      <aside
        aria-label="Social links"
        className="fixed left-4 lg:left-8 bottom-0 z-40 hidden sm:flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center gap-5">
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a7c6] hover:text-[#ff4b5c] hover:-translate-y-1 transition-all duration-200"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a7c6] hover:text-[#ff4b5c] hover:-translate-y-1 transition-all duration-200"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Blog / Hashnode / Dev */}
          <button
            onClick={onOpenBlog}
            className="text-[#94a7c6] hover:text-[#ff4b5c] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center p-0.5 cursor-pointer"
            title="Read Articles & Devlog"
            aria-label="Technical Articles & Devlog"
          >
            <BookOpen className="w-5 h-5" />
          </button>

          {/* Twitter / X */}
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a7c6] hover:text-[#ff4b5c] hover:-translate-y-1 transition-all duration-200"
            title="Twitter Profile"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>

          {/* Discord */}
          <div className="relative group">
            <button
              onClick={handleCopyDiscord}
              className="text-[#94a7c6] hover:text-[#ff4b5c] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center p-0.5"
              title={`Discord: ${personalInfo.discordUsername} (Click to copy)`}
              aria-label="Discord"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </button>
            {/* Tooltip */}
            <span
              className={`absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1 rounded bg-[#101e38] text-white text-xs font-poppins border border-[#2a436f] shadow-lg transition-all duration-200 flex items-center gap-1.5 ${
                copiedDiscord
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {copiedDiscord ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  Copied {personalInfo.discordUsername}!
                </>
              ) : (
                `Discord: ${personalInfo.discordUsername}`
              )}
            </span>
          </div>
        </div>

        {/* Vertical Line Anchor matching Image 2 */}
        <div className="w-[1.5px] h-24 bg-[#334b73]/80 rounded-full"></div>
      </aside>

      {/* Floating Right Email Bar - matching Image 2 */}
      <aside
        aria-label="Email contact"
        className="fixed right-4 lg:right-8 bottom-0 z-40 hidden sm:flex flex-col items-center gap-6"
      >
        <button
          onClick={handleCopyEmail}
          className="group relative flex items-center text-xs tracking-widest text-[#94a7c6] hover:text-[#ff4b5c] transition-colors py-2"
          title="Click to copy email address"
        >
          {/* Tooltip for Copy Feedback */}
          <span
            className={`absolute right-10 whitespace-nowrap px-2.5 py-1 rounded bg-[#101e38] text-white text-xs border border-[#2a436f] shadow-lg transition-all duration-200 flex items-center gap-1.5 ${
              copied
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                Copied to clipboard!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#ff4b5c]" />
                Click to copy
              </>
            )}
          </span>

          {/* Rotated text */}
          <span className="writing-vertical-rl font-poppins text-xs text-[#94a7c6] group-hover:text-white transition-colors duration-200 tracking-wider">
            {personalInfo.email}
          </span>
        </button>

        {/* Vertical Line Anchor matching Image 2 */}
        <div className="w-[1.5px] h-24 bg-[#334b73]/80 rounded-full"></div>
      </aside>
    </>
  );
}
