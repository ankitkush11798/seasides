'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Brain, Calendar, Clock, MapPin, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PrivacyAIGovernance = () => {
  const { isDark } = useTheme();

  const agendaTrack1 = [
    { time: '09:00 – 09:30', session: 'Registration' },
    { time: '09:30 – 10:00', session: 'Breakfast & Networking' },
    { time: '10:00 – 11:30', session: 'Automation & Operationalisation of manual privacy processes for DPDPA' },
    {
      time: '11:30 – 13:00',
      session: 'Data Bill of Material (DBoM) & Discovery of Personal Data to make privacy rules actionable'
    },
    { time: '13:00 – 14:00', session: 'Lunch & Networking' },
    { time: '14:00 – 15:00', session: 'Use Cases of AI for DPDPA Automation' },
    { time: '15:00 – 16:00', session: 'Navigating Consent Management for Applications' },
    { time: '16:00 – 16:30', session: 'Tea Break & Peer Networking' },
    { time: '16:30 – 17:30', session: 'Protecting Organisation with AI Threats & Risks' },
    {
      time: '17:30 – 18:30',
      session: 'Playbooks for legal/regulatory notifications and communication with affected users and board'
    },
    { time: '18:30 – 18:45', session: 'Thank You Note & Closing' }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-cyan-500" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative mb-6 w-32 h-32 md:w-48 md:h-48"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Image
                src="/ardentia-2026/ardentia-2026-1.png"
                alt="Ardentia 2026 Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
              Privacy & AI Governance
            </h1>

            <div className="flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="text-sm md:text-base font-bold text-slate-700">FEB 21, 2026</span>
              <span className="text-slate-400">|</span>
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base font-bold text-slate-700">ICG GOA</span>
            </div>

            <p className="text-xl md:text-2xl font-bold text-white/90 tracking-wide">
              Day 1 Conference Track @ Seasides 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section
        className={`py-4 ${isDark ? 'bg-slate-800' : 'bg-white'} border-b ${isDark ? 'border-slate-700' : 'border-gray-200'}`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ardentia-2026"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Overview
            </Link>
            <span className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              Privacy & AI Governance
            </span>
            <Link
              href="/ardentia-2026/certification"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              ACPT Certification
            </Link>
            <Link
              href="/ardentia-2026/cfp"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Call for Papers
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Day 1 <span className="text-cyan-500">Program</span>
              </h2>
            </div>

            <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-700' : 'bg-white'} shadow-lg mb-8`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Day 1 (21st Feb)</h3>
                  <p className="text-sm text-orange-500">Conference Track (Seasides 2026)</p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3">A dedicated Privacy & AI Governance Track featuring:</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span>Keynote on DPDP Act & Responsible AI: Enterprise Expectations for 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span>Ardent thought leadership session with practical, experience-driven insights</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feb 21st Agenda */}
      <section className={`py-16 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Feb 21st | <span className="text-cyan-500">Full Day Agenda</span>
              </h2>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                Track 1: Privacy & AI Governance Sessions
              </h3>
              <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-white'} shadow-xl`}>
                <div className="grid grid-cols-1">
                  {agendaTrack1.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col p-4 ${
                        index % 2 === 0
                          ? isDark
                            ? 'bg-slate-700'
                            : 'bg-white'
                          : isDark
                            ? 'bg-slate-600/50'
                            : 'bg-slate-100'
                      } ${index !== agendaTrack1.length - 1 ? 'border-b border-slate-200 dark:border-slate-600' : ''}`}
                    >
                      <div className="mb-1">
                        <span
                          className={`font-mono font-bold text-sm ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                        >
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm">{item.session}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-cyan-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join the Conference</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Be part of India&apos;s premier Privacy & AI Governance summit.
            </p>
            <a
              href="https://www.ardentprivacy.ai/blog/ardentia-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-bold rounded-xl bg-white text-orange-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyAIGovernance;
