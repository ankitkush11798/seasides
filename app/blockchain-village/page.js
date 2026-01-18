'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Code, Database, Globe, Lock, Shield, User, Zap } from 'lucide-react';

const BlockchainVillage = () => {
  const { isDark } = useTheme();

  // Helper for icons since we can't dynamically import easily without a map in this setup
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  }

  function BrainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    );
  }

  const focusAreas = [
    { name: 'Smart Contract Vulnerabilities', icon: Code },
    { name: 'Blockchain Protocol Security', icon: Database },
    { name: 'DeFi & NFT Attack Surfaces', icon: Zap },
    { name: 'Cryptography Misuse', icon: Lock },
    { name: 'Wallet Forensics', icon: SearchIcon },
    { name: 'Threat Modeling', icon: Shield },
    { name: 'Cross-chain Exploits', icon: Globe },
    { name: 'AI in Blockchain Security', icon: BrainIcon }
  ];

  const schedule = [
    {
      date: '19 Feb 2026',
      time: '10:00 AM - 11:00 AM',
      title: 'Bridging Legal Gaps in Blockchain: Compliance Requirements in Smart Contract Auditing',
      category: 'Talk',
      presenter: 'Satyendra Prajapati',
      type: 'Compliance'
    },
    {
      date: '19 Feb 2026',
      time: '11:00 AM - 12:00 PM',
      title: 'When AI Starts Moving Money: Securing Agentic Fintech on the Blockchain',
      category: 'Talk',
      presenter: 'Deepak Rathore',
      type: 'AI & Security'
    },
    {
      date: '19 Feb 2026',
      time: '12:00 PM - 1:00 PM',
      title: 'When "Audited" Means Nothing: How Real-World Smart Contract Attacks Bypass Clean Audit Reports',
      category: 'Talk',
      presenter: 'Bhavesh Thakur',
      type: 'Exploitation'
    },
    {
      date: '19 Feb 2026',
      time: '2:30 PM - 5:30 PM',
      title: 'Securing the Chain: Smart Contracts, Compliance & the AI Frontier',
      category: 'Workshop',
      presenter: 'Harsh Tandel',
      type: 'Hands-on'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
      <Navbar />

      {/* Modern Gradient Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0B1120] z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #4F46E5 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Seasides 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Blockchain{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Security
              </span>{' '}
              Village
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Unchaining the future of security. Dive deep into smart contract vulnerabilities, DeFi protocols, and the
              intersection of AI and blockchain forensics.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Focus Areas Grid */}
      <section className={`py-20 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Target Vectors</h2>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl`}>
                Key security domains we explore in our sessions and workshops.
              </p>
            </div>
            <div className="hidden md:block h-px w-32 bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#1E293B] border-slate-700 hover:border-purple-500/50 hover:bg-[#1E293B]/80'
                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-lg'
                }`}
              >
                <area.icon className={`w-8 h-8 mb-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <h3 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{area.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Leads Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Village Leads</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vinod Tiwari */}
            <a
              href="https://www.linkedin.com/in/securient/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:border-purple-500/50'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? 'bg-slate-700 text-purple-400' : 'bg-purple-50 text-purple-600'
                }`}
              >
                <User size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Vinod Tiwari</h3>
              <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:underline">
                <span>View LinkedIn Profile</span>
                <ArrowRight size={16} />
              </div>
            </a>

            {/* Deepak Rathore */}
            <a
              href="https://www.linkedin.com/in/deepakrathore2k10/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:border-purple-500/50'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? 'bg-slate-700 text-purple-400' : 'bg-purple-50 text-purple-600'
                }`}
              >
                <User size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Deepak Rathore</h3>
              <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:underline">
                <span>View LinkedIn Profile</span>
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className={`py-20 ${isDark ? 'bg-[#1E293B]' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Agenda Breakdown
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/50 to-transparent" />

            {schedule.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-4 top-8 flex flex-col items-center h-full">
                  <div
                    className={`w-8 h-8 md:-ml-4 rounded-full border-4 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)] ${
                      isDark ? 'border-[#0B1120] bg-purple-600' : 'border-white bg-purple-600'
                    }`}
                  >
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  </div>
                  {index !== schedule.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent my-2" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl ${
                    isDark
                      ? 'bg-[#1E293B]/50 border-slate-700/50 hover:border-purple-500/50 hover:bg-[#1E293B]'
                      : 'bg-white border-gray-100 hover:border-purple-200 hover:shadow-purple-500/10'
                  }`}
                >
                  {isDark && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between md:items-start">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <div
                          className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${
                            isDark
                              ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                              : 'bg-purple-50 border-purple-100 text-purple-700'
                          }`}
                        >
                          <Clock size={12} />
                          {slot.time}
                        </div>

                        <span
                          className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${
                            slot.category === 'Workshop'
                              ? 'bg-pink-500/10 border-pink-500/20 text-pink-500'
                              : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                          }`}
                        >
                          {slot.category}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl md:text-3xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {slot.title}
                      </h3>

                      <div className="flex items-center gap-4 pt-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                            isDark
                              ? 'bg-slate-800 border-slate-700 text-purple-400'
                              : 'bg-purple-50 border-purple-100 text-purple-600'
                          }`}
                        >
                          <User size={18} />
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                            {slot.presenter}
                          </p>
                          <p className="text-xs text-purple-500 font-medium">Presenter</p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center h-full">
                      <div
                        className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 ${
                          isDark ? 'bg-white/5 group-hover:bg-purple-500/20' : 'bg-gray-50 group-hover:bg-purple-50'
                        }`}
                      >
                        <ArrowRight
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isDark
                              ? 'text-gray-500 group-hover:text-purple-400'
                              : 'text-gray-400 group-hover:text-purple-600'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainVillage;
