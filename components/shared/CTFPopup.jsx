'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CTFPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Show popup after loading screen disappears
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Trigger fade-in on next frame
      requestAnimationFrame(() => setVisible(true));
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className={`ctf-popup-overlay ${visible ? 'ctf-popup-visible' : ''}`} onClick={() => setIsOpen(false)}>
      <div onClick={e => e.stopPropagation()} className={`ctf-popup-card ${visible ? 'ctf-popup-card-visible' : ''}`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="relative z-[1] p-8">
          <div className="text-center mb-6">
            <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 mb-3 border border-blue-500/20">
              OFFLINE CTF EXPERIENCE
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Seasides CTF 2026</h2>
            <p className="text-gray-300 text-sm mb-4">
              Dive into mind-bending cybersecurity challenges! This is where the Indian cybersecurity community comes
              together to test skills, push limits, and celebrate learning.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-white text-sm">Prizes & Swag</span>
              </div>
              <p className="text-xs text-gray-400 pl-[42px]">Exclusive rewards worth competing for</p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-white text-sm">On-Ground</span>
              </div>
              <p className="text-xs text-gray-400 pl-[42px]">Live at Seasides Conference</p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-white text-sm">Feb 19-20</span>
              </div>
              <p className="text-xs text-gray-400 pl-[42px]">Two days of intense hacking</p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-white text-sm">9:00 AM</span>
              </div>
              <p className="text-xs text-gray-400 pl-[42px]">Start time for both days</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <a
              href="https://offline-ctf.seasides.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.02] hover:shadow-blue-900/40 active:scale-[0.98]"
            >
              Register Now
            </a>

            <p className="text-center text-xs text-gray-500">
              Individual participation only. Spots will fill fast. Bring your A-game.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ctf-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          opacity: 0;
          transition: opacity 0.3s ease;
          /* Override global 3D rules */
          transform-style: flat !important;
          backface-visibility: visible !important;
          transform: none !important;
        }
        .ctf-popup-overlay *,
        .ctf-popup-overlay *::before,
        .ctf-popup-overlay *::after {
          transform-style: flat !important;
          backface-visibility: visible !important;
        }
        .ctf-popup-visible {
          opacity: 1;
        }
        .ctf-popup-card {
          position: relative;
          width: 100%;
          max-width: 36rem;
          overflow: hidden;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: #0f0f0f;
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
          pointer-events: auto;
          transform: scale(0.95) translateY(10px);
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
          opacity: 0;
        }
        .ctf-popup-card-visible {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
      `}</style>
    </div>,
    document.body
  );
}
