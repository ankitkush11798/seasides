'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-19T00:00:00+05:30');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 animate-[gradientMove_15s_ease-in-out_infinite]" />

      {/* Grouped Hero Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center -translate-y-16 space-y-4"
      >
        {/* Logo */}
        <div className="w-72 h-72 relative mx-auto">
          <img src="/dark-logo.png" alt="Seasides Logo" className="object-contain w-full h-full" />
        </div>

        {/* Date / Location */}
        <div className="text-lg md:text-xl text-gray-800 font-medium">
          February 19–21, 2026 • International Centre Goa
        </div>

        {/* Tagline */}
        <p className="text-md md:text-lg italic text-gray-700 max-w-2xl">
          Join the event for free talks and training sessions
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-4 text-center justify-center">
          {['days', 'hours', 'minutes', 'seconds'].map(unit => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-orange-600">
                {countdown[unit].toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-gray-700">{unit}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="#register"
            className="px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-orange-700 transition"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white text-orange-600 border border-orange-400 text-lg font-semibold rounded-xl shadow-md hover:bg-orange-100 transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <div className="relative w-[150%] h-[120px] animate-waveBounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L80,26.7C160,21,320,11,480,21.3C640,32,800,64,960,80C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] { background-size: 200% 200%; }

        @keyframes waveBounce {
          0% { transform: translateX(0); }
          50% { transform: translateX(-5%); }
          100% { transform: translateX(0); }
        }
        .animate-waveBounce { animation: waveBounce 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
