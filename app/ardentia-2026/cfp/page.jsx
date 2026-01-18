'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CallForPapers = () => {
  const { isDark } = useTheme();

  const topics = [
    'Automating and operationalising manual privacy processes for DPDP compliance',
    'Data Bill of Material (DBoM) and discovery of personal data to make privacy rules actionable',
    'Practical use cases of AI for DPDP automation',
    'Navigating consent management for applications and platforms',
    'Protecting organisations from AI-driven threats and emerging risks',
    'Playbooks for regulatory notifications, breach communication, and board-level reporting'
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500" />
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
              Call for Papers
            </h1>

            <p className="text-xl md:text-2xl font-bold text-white/90 mb-4">Share Your Expertise at Ardentia 2026</p>

            <div className="flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm md:text-base font-bold text-slate-700">Deadline: Jan 21, 2026</span>
              <span className="text-slate-400">|</span>
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base font-bold text-slate-700">ICG GOA</span>
            </div>
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
            <Link
              href="/ardentia-2026/certification"
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              ACPT Certification
            </Link>
            <span className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              Call for Papers
            </span>
          </div>
        </div>
      </section>

      {/* About CFP */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={`p-8 rounded-3xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold">Submit Your Proposal</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Ardentia 2026 invites privacy practitioners, researchers, legal experts, and technology leaders to
                submit papers and presentations on practical implementations of privacy and AI governance.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We are looking for real-world case studies, implementation experiences, and hands-on insights that can
                help organizations move from policy to practice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className={`py-16 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Topics & <span className="text-green-500">Use Cases</span>
              </h2>
            </div>
            <p className="text-center text-green-500 font-semibold mb-8">We are looking for submissions on:</p>
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-xl ${isDark ? 'bg-gradient-to-r from-slate-700 to-slate-600' : 'bg-gradient-to-r from-white to-slate-50'} border-l-4 border-green-500 shadow-md`}
                >
                  <span className="text-base md:text-lg">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Important <span className="text-green-500">Dates</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-slate-800' : 'bg-slate-50'} shadow-lg`}>
                <Calendar className="w-10 h-10 mx-auto mb-3 text-red-500" />
                <p className="text-2xl font-bold mb-2">Jan 21, 2026</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Submission Deadline</p>
              </div>
              <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-slate-800' : 'bg-slate-50'} shadow-lg`}>
                <Calendar className="w-10 h-10 mx-auto mb-3 text-yellow-500" />
                <p className="text-2xl font-bold mb-2">Feb 1, 2026</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Notification of Acceptance</p>
              </div>
              <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-slate-800' : 'bg-slate-50'} shadow-lg`}>
                <Calendar className="w-10 h-10 mx-auto mb-3 text-green-500" />
                <p className="text-2xl font-bold mb-2">Feb 22, 2026</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Presentation Day</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Submit?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Share your expertise with the privacy community.</p>
            <a
              href="https://www.ardentprivacy.ai/call-for-paper-ardentia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-bold rounded-xl bg-white text-green-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
            >
              Submit Your Paper
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForPapers;
