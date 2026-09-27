import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenBlog, onReplayIntro }) {
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Check if user is at the top of the page
          if (currentScrollY <= 20) {
            setIsAtTop(true);
            setVisible(true);
          } else {
            setIsAtTop(false);

            // Smoothed threshold: avoids jitter on tiny scroll movements
            const delta = currentScrollY - lastScrollY.current;
            if (delta > 15 && currentScrollY > 120) {
              setVisible(false);
              setMobileMenuOpen(false);
            } else if (delta < -15) {
              setVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;

          // Robust scroll spy matching page layout
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            setActiveSection('projects');
          } else {
            const sections = ['projects', 'experience', 'about', 'home'];
            for (const section of sections) {
              const el = document.getElementById(section);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 220) {
                  setActiveSection(section);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop and control body scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '#blog', id: 'blog', isBlogModal: true },
  ];

  // Silky smooth scroll navigation
  const scrollToSection = (e, link) => {
    if (link.isBlogModal) {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onOpenBlog) onOpenBlog();
      return;
    }
    if (link.external) return;
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = link.href.replace('#', '');
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Full page reload or intro replay starting from the top when brand logo </Devvx> is clicked
  const handleReloadToTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (onReplayIntro) {
      onReplayIntro();
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          visible || mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          mobileMenuOpen
            ? 'bg-[#12233f] shadow-2xl'
            : isAtTop
            ? 'bg-transparent'
            : 'bg-[#172b4d]/95 backdrop-blur-md shadow-lg'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between transition-all duration-300 ${
            isAtTop && !mobileMenuOpen ? 'py-6' : 'py-4'
          }`}
        >
          {/* Brand Logo: </Devvx> */}
          <a
            href="/"
            onClick={handleReloadToTop}
            className="group flex items-center text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:opacity-95 transition-opacity cursor-pointer"
            title="Reload page from start"
          >
            <span className="text-white/80 font-mono font-bold transition-transform group-hover:-translate-x-0.5">&lt;/</span>
            <span className="text-[#ff4b5c] font-extrabold transition-colors group-hover:text-[#ff6b7a]">Devvx</span>
            <span className="text-white/80 font-mono font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`transition-colors duration-200 hover:text-[#ff4b5c] ${
                  activeSection === link.id
                    ? 'text-[#ff4b5c] font-extrabold'
                    : 'text-[#d6e0f0]'
                }`}
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-[#1d355c] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="relative z-50 md:hidden bg-[#12233f] border-b border-[#243a60] px-6 pb-6 pt-2 space-y-6 animate-in slide-in-from-top duration-200 font-poppins">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link)}
                className={`py-3 px-3 rounded-lg text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'text-[#ff4b5c] bg-[#1a2f52] font-bold border-l-4 border-[#ff4b5c]'
                    : 'text-slate-200 hover:text-white hover:bg-[#172b4d]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Quick Links Row for Mobile */}
          <div className="pt-4 border-t border-[#1e3458] flex items-center justify-around text-[#94a7c6]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#172b4d] hover:text-[#ff4b5c] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#172b4d] hover:text-[#38bdf8] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#172b4d] hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-[#172b4d] hover:text-[#ff4b5c] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>

    {/* Mobile Drawer Backdrop Overlay */}
    {mobileMenuOpen && (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    )}
  </>
  );
}
