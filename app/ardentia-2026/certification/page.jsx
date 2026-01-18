'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ACPTCertification = () => {
  const { isDark } = useTheme();

  const agendaTrack2 = [
    { time: '09:00 – 09:30', session: 'Registration' },
    { time: '09:30 – 10:00', session: 'Breakfast & Networking' },
    { time: '10:00 – 10:30', session: 'Privacy Regulations (DPDPA) & Technology Operations Overview' },
    { time: '10:30 – 11:20', session: 'Assessment Manager – to conduct DPIA' },
    {
      time: '11:20 – 13:00',
      session: 'Data Discovery and Intelligence - to have visibility over sensitive data'
    },
    { time: '13:00 – 14:00', session: 'Lunch & Networking' },
    { time: '14:00 – 14:30', session: 'Data Principal Request Management - to enable Data Principal rights' },
    { time: '14:30 – 15:30', session: 'Universal Consent Management - to have a centralized system' },
    { time: '15:30 – 16:00', session: 'Data Breach Management - to create audit ready reports' },
    { time: '16:00 – 16:30', session: 'Tea Break & Peer Networking' },
    { time: '16:30 – 17:00', session: 'Use Cases & Practical Scenarios' },
    { time: '17:00 – 17:10', session: 'Thank You Note & Closing' }
  ];

  const csrImpact = [
    'One paid certification seat sponsors training for students and early-career professionals',
    'Enables practical, real-world learning in privacy and AI governance',
    'Supports workforce readiness for DPDP and Responsible AI implementation',
    'Contributes to a stronger, sustainable privacy ecosystem in India'
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-cyan-400 to-teal-500" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative mb-6 w-24 h-24 md:w-36 md:h-36"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Image
                src="/ardentia-2026/acpt.jpg"
                alt="ACPT Logo"
                fill
                className="object-contain drop-shadow-2xl rounded-full"
                priority
              />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
              ACPT Certification
            </h1>

            <p className="text-xl md:text-2xl font-bold text-white/90 mb-4">Ardent Certified Privacy Technologist</p>

            <div className="flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="text-sm md:text-base font-bold text-slate-700">FEB 22, 2026</span>
              <span className="text-slate-400">|</span>
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base font-bold text-slate-700">ICG GOA</span>
            </div>

            <p className="text-lg text-white/80">Full Day Training & Certification Program</p>
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
            <Link
              href="/ardentia-2026/privacy-ai-governance"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Privacy & AI Governance
            </Link>
            <span className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
              ACPT Certification
            </span>
            <Link
              href="/ardentia-2026/cfp"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Call for Papers
            </Link>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-700' : 'bg-slate-50'} shadow-lg mb-8`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Day 2 (22nd Feb)</h3>
                  <p className="text-sm text-cyan-500">Full Day Training & Certification (ACPT)</p>
                </div>
              </div>
              <p className="text-sm md:text-base mb-3">A paid, hands-on program covering:</p>
              <ul className="space-y-1 text-sm md:text-base">
                <li>→ Privacy Regulations (DPDPA) & Technology Operations Overview</li>
                <li>→ Assessment Manager – Data Protection Impact Assessment (DPIA)</li>
                <li>→ Data Discovery and Intelligence</li>
                <li>→ Data Principal Request Management (DPRM)</li>
                <li>→ Universal Consent Management (UCM)</li>
                <li>→ Data Breach Management (DBM)</li>
              </ul>
              <p className="mt-3 text-sm text-orange-500 font-medium">
                *Each participant receives official ACPT certification from Ardent Privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feb 22nd Agenda */}
      <section className={`py-16 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Feb 22nd | <span className="text-cyan-500">ACPT Training Schedule</span>
              </h2>
            </div>

            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-white'} shadow-xl`}>
              <div className="grid grid-cols-1">
                {agendaTrack2.map((item, index) => (
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
                    } ${index !== agendaTrack2.length - 1 ? 'border-b border-slate-200 dark:border-slate-600' : ''}`}
                  >
                    <div className="mb-1">
                      <span className={`font-mono font-bold text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
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
          </motion.div>
        </div>
      </section>

      {/* CSR Impact Section */}
      <section
        className={`py-16 ${isDark ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' : 'bg-gradient-to-br from-orange-50 via-white to-cyan-50'}`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/ardentia-2026/acpt.jpg" alt="ACPT Logo" fill className="object-contain rounded-full" />
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-center ${isDark ? 'text-white' : 'text-charcoal-gray'}`}
              >
                Certification with <span className="text-cyan-500">Purpose</span>
              </h2>
            </div>
            <h3
              className={`text-xl md:text-2xl font-semibold text-center mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
              CSR Impact
            </h3>

            <div
              className={`p-8 rounded-3xl ${isDark ? 'bg-slate-700/50 border border-slate-600' : 'bg-white border border-slate-200'} shadow-xl`}
            >
              <h4 className={`text-lg md:text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                How Your Participation Makes an Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {csrImpact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl ${isDark ? 'bg-slate-600/50' : 'bg-slate-50'} flex items-start gap-3`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm md:text-base ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get Certified</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Become an Ardent Certified Privacy Technologist.</p>
            <a
              href="https://www.ardentprivacy.ai/blog/ardentia-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-bold rounded-xl bg-white text-cyan-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
            >
              Register for Certification
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ACPTCertification;
