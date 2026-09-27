import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import FloatingSidebar from './components/FloatingSidebar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ResumeModal from './components/ResumeModal';
import BlogModal from './components/BlogModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroExiting, setIsIntroExiting] = useState(false);
  const [introKey, setIntroKey] = useState(1);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Always start at top on page refresh/load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleReplayIntro = () => {
    setIntroKey((prev) => prev + 1);
    setIsIntroExiting(false);
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleFinishIntro = () => {
    setShowIntro(false);
    setIsIntroExiting(false);
  };

  return (
    <div className="min-h-screen bg-[#172b4d] text-white font-poppins selection:bg-[#ff4b5c]/30 selection:text-white relative overflow-x-hidden">
      {/* Intro Typewriter Screen - triggers on every reload/visit */}
      {showIntro && (
        <IntroScreen
          key={introKey}
          onExiting={() => setIsIntroExiting(true)}
          onFinish={handleFinishIntro}
        />
      )}

      {/* Background Subtle Grid Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top Navigation */}
      <Navbar
        onOpenBlog={() => setIsBlogModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Floating Sidebars from Image 2 */}
      <FloatingSidebar onOpenBlog={() => setIsBlogModalOpen(true)} />

      {/* Main Content Area - choreographs smoothly into view with the intro exit */}
      <main
        className={`relative z-10 transform-gpu will-change-transform transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showIntro && !isIntroExiting
            ? 'scale-[0.985] opacity-70 translate-y-3'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Hero Section matching Image 2 */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* About Section matching Image 1 */}
        <AboutSection />

        {/* Tech Stack & Arsenal Table */}
        <TechStackSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />
      </main>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
