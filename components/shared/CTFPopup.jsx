'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CTFPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-2xl shadow-blue-900/50 pointer-events-auto"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-0 p-8">
              <div className="text-center mb-6">
                <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 mb-3 border border-blue-500/20">
                    OFFLINE CTF EXPERIENCE
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">🚨 Seasides CTF 2026 🚨</h2>
                  <p className="text-gray-300 text-sm mb-4">
                    Dive into mind-bending cybersecurity challenges! This is where the Indian cybersecurity community
                    comes together to test skills, push limits, and celebrate learning.
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-yellow-500/20 p-2 rounded-lg">
                      <Trophy size={16} className="text-yellow-400" />
                    </div>
                    <span className="font-semibold text-white text-sm">Prizes & Swag</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-[42px]">Exclusive rewards worth competing for</p>
                </div>

                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <MapPin size={16} className="text-green-400" />
                    </div>
                    <span className="font-semibold text-white text-sm">On-Ground</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-[42px]">Live at Seasides Conference</p>
                </div>

                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-red-500/20 p-2 rounded-lg">
                      <Calendar size={16} className="text-red-400" />
                    </div>
                    <span className="font-semibold text-white text-sm">Feb 19-20</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-[42px]">Two days of intense hacking</p>
                </div>

                <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Clock size={16} className="text-blue-400" />
                    </div>
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
                  ⚡ Individual participation only. Spots will fill fast. Bring your A-game.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
