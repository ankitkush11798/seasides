'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 animate-[gradientMove_15s_ease-in-out_infinite]" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 -mb-8"
      >
        <div className="w-80 h-80 relative mx-auto">
          <img src="/dark-logo.png" alt="Seasides Logo" className="object-contain w-full h-full" />
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="z-10 mt-2 text-lg md:text-xl text-gray-800 font-medium"
      >
        February 19–21, 2026 • International Centre Goa
      </motion.p>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-10 mt-2 text-md md:text-lg italic text-gray-700 max-w-2xl"
      >
        Join the event for free talks and training sessions
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="z-10 mt-8 flex gap-4 flex-col sm:flex-row"
      >
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
      </motion.div>

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
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 200% 200%;
        }

        @keyframes waveBounce {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-waveBounce {
          animation: waveBounce 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
