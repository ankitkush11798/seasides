'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Tag, User } from 'lucide-react';
import Image from 'next/image';

const BlockchainVillage = () => {
  const { isDark } = useTheme();

  const focusAreas = [
    'Smart Contract Vulnerabilities',
    'Blockchain Protocol Security',
    'DeFi & NFT Attack Surfaces',
    'Cryptography Misuse',
    'Wallet Forensics',
    'Threat Modeling',
    'Cross-chain Exploits',
    'AI in Blockchain Security'
  ];

  const schedule = [
    {
      date: '19 Feb 2026',
      time: '10:00 AM - 11:00 AM',
      title: 'Bridging Legal Gaps in Blockchain: Compliance Requirements in Smart Contract Auditing',
      category: 'Talk',
      presenter: 'Satyendra Prajapati'
    },
    {
      date: '19 Feb 2026',
      time: '11:00 AM - 12:00 PM',
      title: 'When AI Starts Moving Money: Securing Agentic Fintech on the Blockchain',
      category: 'Talk',
      presenter: 'Deepak Rathore'
    },
    {
      date: '19 Feb 2026',
      time: '12:00 PM - 1:00 PM',
      title: 'When "Audited" Means Nothing: How Real-World Smart Contract Attacks Bypass Clean Audit Reports',
      category: 'Talk',
      presenter: 'Bhavesh Thakur'
    },
    {
      date: '19 Feb 2026',
      time: '2:30 PM - 5:30 PM',
      title: 'Securing the Chain: Smart Contracts, Compliance & the AI Frontier',
      category: 'Workshop',
      presenter: 'Harsh Tandel'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-indigo-900 animate-[gradientMove_15s_ease-in-out_infinite] w-full" />
        <div className="absolute inset-0 bg-black/30 w-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md border border-white/20"
          >
            Seasides 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl shadow-black/50"
          >
            Blockchain Security Village
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/10"
          >
            Explore the security landscape of decentralized systems, from smart contract vulnerabilities to DeFi
            exploits and forensic analysis.
          </motion.p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className={`py-16 w-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-4">
              Village Schedule
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Join us for cutting-edge talks and workshops
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-purple-500/50'
                    : 'bg-white border-gray-200 hover:border-purple-500/50'
                }`}
              >
                {/* Accent Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${
                    slot.category === 'Workshop' ? 'from-pink-500 to-rose-500' : 'from-purple-500 to-indigo-600'
                  }`}
                />

                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Time & Meta */}
                    <div className="md:w-1/4 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-purple-500 font-bold">
                        <Calendar className="w-4 h-4" />
                        <span>{slot.date}</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 font-mono text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
                      >
                        <Clock className="w-5 h-5" />
                        <span>{slot.time}</span>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit ${
                          slot.category === 'Workshop'
                            ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
                            : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {slot.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/4">
                      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {slot.title}
                      </h3>

                      <div className="flex items-center gap-3 mt-4">
                        <div className={`p-2 rounded-full ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                          <User className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                            {slot.presenter}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Lead Section */}
      <section className={`py-16 w-full ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-4">
              Village Lead
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Meet the expert behind the Blockchain Security Village
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border shadow-lg ${
              isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-white border-gray-200'
            }`}
          >
            {/* Photo */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 blur-lg opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30">
                <Image src="/speakers/Vinod Tiwari.jpg" alt="Vinod Tiwari" fill className="object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Vinod Tiwari</h3>
              <p className="text-purple-500 font-medium mb-4">Staff Security Engineer @ PIP Labs</p>

              <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Vinod is a Staff Security Engineer at PIP Labs with over a decade of cybersecurity experience at
                companies including Amazon, Zapier, and HackerOne. He specializes in penetration testing and cloud
                security, writes about security on Medium, and actively researches emerging threats in both traditional
                and Web3 environments.
              </p>

              <a
                href="https://www.linkedin.com/in/securient/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0077b5] text-white font-medium hover:bg-[#006396] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section
        className={`${isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'} py-16 w-full overflow-x-hidden`}
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">Topics Covered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium transition-colors ${
                  isDark
                    ? 'bg-slate-700/50 border border-slate-600 hover:bg-slate-700'
                    : 'bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div
          className={`p-8 rounded-3xl shadow-lg text-center ${
            isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-gray-200'
          }`}
        >
          <MapPin className="w-10 h-10 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Seasides 2026 @ The Grand Venue
          </p>
          <div className="inline-flex gap-4">
            <a href="mailto:admin@seasides.net" className="text-purple-500 hover:underline">
              Contact Organizers
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(45deg, #9333ea, #a855f7, #6366f1, #4f46e5);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(45deg, #6366f1, #4f46e5, #9333ea, #a855f7);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(45deg, #9333ea, #a855f7, #6366f1, #4f46e5);
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 200% 200%;
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlockchainVillage;
