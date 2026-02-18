'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Calendar, Flag, Globe, MapPin, Trophy, Users, Zap } from 'lucide-react';

export default function CTFPage() {
  const { isDark } = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Real-world inspired challenges',
      description: 'Scenarios derived from actual security incidents and modern tech stacks.'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Live leaderboards',
      description: 'Track your progress in real-time against the best hackers in the community.'
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: 'Swag worth competing for',
      description: 'Exclusive merchandise and prizes for top performers.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'In-person networking',
      description: 'Connect with fellow hackers, builders, and defenders at the venue.'
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span
            className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase border ${
              isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-600 border-red-200'
            }`}
          >
            Offline Event - Seasides 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text"
        >
          Seasides CTF <br className="hidden md:block" /> 2026 is Here! 🚨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Get ready to dive into mind-bending cybersecurity challenges at Seasides CTF 2026 — our much-awaited offline
          CTF experience designed for hackers, builders, defenders, and curious minds alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://offline-ctf.seasides.net"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Register Now
          </a>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            *Individual participation only — compete solo, test your skills.
          </p>
        </motion.div>
      </section>

      {/* Details Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl border shadow-xl ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-100'
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div
              className={`p-4 rounded-2xl mb-4 ${isDark ? 'bg-slate-900 text-orange-400' : 'bg-orange-50 text-orange-600'}`}
            >
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Dates</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>February 19 – 20, 2026</p>
          </div>

          <div className="flex flex-col items-center text-center md:border-x border-gray-200 dark:border-gray-700">
            <div
              className={`p-4 rounded-2xl mb-4 ${isDark ? 'bg-slate-900 text-blue-400' : 'bg-blue-50 text-blue-600'}`}
            >
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>International Centre Goa</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div
              className={`p-4 rounded-2xl mb-4 ${isDark ? 'bg-slate-900 text-green-400' : 'bg-green-50 text-green-600'}`}
            >
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Start Time</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>9:00 AM IST</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Compete?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-800/30 border-slate-700 hover:border-orange-500/50 hover:bg-slate-800/50'
                  : 'bg-white border-gray-200 hover:border-orange-200 hover:bg-orange-50/10'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-12">
        <div
          className={`p-8 md:p-12 rounded-3xl ${
            isDark
              ? 'bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700'
              : 'bg-gradient-to-b from-gray-50 to-white border border-gray-200'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">More than just a competition</h2>
          <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            It’s where the Indian cybersecurity community comes together to test skills, push limits, and celebrate
            learning.
            <br />
            <br />
            <strong>Spots will fill fast. Bring your A-game. Let’s make this CTF legendary. 🔥</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              '#Seasides',
              '#SeasidesCTF',
              '#CTF',
              '#CyberSecurity',
              '#InfoSec',
              '#EthicalHacking',
              '#IndiaCyberSecurity'
            ].map(tag => (
              <span
                key={tag}
                className={`text-sm px-3 py-1 rounded-full ${
                  isDark ? 'bg-slate-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
