import React, { useState, useEffect } from 'react';
import { X, Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [render, setRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
        // Reset status on close
        setStatus('idle');
        setErrorMessage('');
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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && status !== 'sending') {
        handleClose();
      }
    };
    if (render) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [render, status]);

  if (!render) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Automatically close modal after 2.5 seconds upon success
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred. Please try again.');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto font-poppins transition-opacity duration-300 ease-out ${
        animate ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget && status !== 'sending') handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className={`relative w-full max-w-lg my-8 bg-[#0f1d33] border border-[#2a436f] rounded-2xl shadow-2xl overflow-hidden text-slate-200 transition-all duration-300 ease-out transform ${
          animate
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-[#243a60] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4b5c] animate-pulse"></span>
              <span className="text-xs font-bold font-poppins uppercase tracking-wider text-[#94a7c6]">
                Get In Touch
              </span>
            </div>
            <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight font-poppins">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#94a7c6] font-poppins leading-relaxed">
              Have a question, opportunity, or project? Drop me a message and it will be delivered directly to my inbox.
            </p>
          </div>

          <button
            onClick={handleClose}
            disabled={status === 'sending'}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a2f52] border border-transparent hover:border-[#2a436f] transition-all cursor-pointer flex-shrink-0 disabled:opacity-50"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-7">
          {status === 'success' ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white font-poppins">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-[#94a7c6] font-poppins max-w-sm mx-auto">
                  Thank you for reaching out. Your email has been delivered to <span className="text-white font-medium">deevvxxx@gmail.com</span> and I will reply as soon as possible.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-poppins flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="text-[11px] text-red-300/80">
                      You can also reach me directly at{' '}
                      <a href={`mailto:${personalInfo.email}`} className="underline text-white hover:text-[#ff4b5c]">
                        {personalInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 font-poppins">
                    Your Name <span className="text-[#ff4b5c]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14243f] border border-[#243a60] focus:border-[#ff4b5c] focus:outline-none focus:ring-1 focus:ring-[#ff4b5c] text-base sm:text-sm text-white placeholder-[#6b82a8] font-poppins transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 font-poppins">
                    Your Email <span className="text-[#ff4b5c]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14243f] border border-[#243a60] focus:border-[#ff4b5c] focus:outline-none focus:ring-1 focus:ring-[#ff4b5c] text-base sm:text-sm text-white placeholder-[#6b82a8] font-poppins transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 font-poppins">
                  Subject
                </label>
                <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion / Opportunity"
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14243f] border border-[#243a60] focus:border-[#ff4b5c] focus:outline-none focus:ring-1 focus:ring-[#ff4b5c] text-base sm:text-sm text-white placeholder-[#6b82a8] font-poppins transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 font-poppins">
                  Message <span className="text-[#ff4b5c]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or questions..."
                  disabled={status === 'sending'}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14243f] border border-[#243a60] focus:border-[#ff4b5c] focus:outline-none focus:ring-1 focus:ring-[#ff4b5c] text-base sm:text-sm text-white placeholder-[#6b82a8] font-poppins transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-between pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs text-[#94a7c6] hover:text-[#ff4b5c] transition-colors flex items-center gap-1.5 font-poppins"
                  title="Open in your default mail app"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail App</span>
                </a>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#ff4b5c] hover:bg-[#ff3347] active:scale-95 transition-all shadow-md shadow-[#ff4b5c]/25 hover:shadow-lg hover:shadow-[#ff4b5c]/35 flex items-center gap-2 font-poppins cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
