'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar, Clock, Mic2, Star, UserCircle, Users } from 'lucide-react';

export default function CommunicationSkillsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const days = [
    {
      day: 'Day 1',
      title: 'Communication Foundations & Public Speaking',
      description: 'Build strong communication fundamentals with a focus on confidence, clarity, and expression.',
      topics: [
        'Structured self-introduction',
        'Articulation & Voice modulation',
        'Overcoming stage fear',
        'Public speaking activities & technical explanation'
      ],
      icon: Mic2,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      day: 'Day 2',
      title: 'Presentation Skills & Technical Communication',
      description: 'Focus on professional presentation skills required in cyber security roles.',
      topics: [
        'Structure & deliver technical presentations',
        'Explaining threats & solutions clearly',
        'Effective body language',
        'Team communication dynamics'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      day: 'Day 3',
      title: 'Interview Skills & Professional Readiness',
      description: 'Preparation for placements through focused interview communication training.',
      topics: [
        'HR & Technical interview skills',
        'Mock interviews & presentations',
        'Real-time feedback & confidence building',
        'Clear response structuring'
      ],
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide mb-6">
              SOFT SKILLS TRAINING TRACK
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Master the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Professional Communication
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-10 leading-relaxed">
              Elevate your career with confidence. Learn to articulate ideas, present technical concepts, and crack
              interviews with impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>5:00 PM – 7:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>Feb 19-21, 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20 bg-white dark:bg-white/5 border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20" />
              {/* Placeholder for Speaker Image */}
              <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <UserCircle className="w-32 h-32 text-slate-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left"
            >
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Ridhima Batra</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
                Mental Health Advocate, International Speaker & Author
              </p>

              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                Ridhima Batra is the founder of Empathy Wellness Foundation and Ridhara Mindcare. A passionate advocate
                for mental health and personal growth, she has impacted over 50,000 lives globally. She is an
                international speaker and the author of "Unexpected Hope", dedicated to empowering individuals through
                resilience, communication, and self-expression.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-md font-medium">
                  Global Speaker
                </span>
                <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-md font-medium">
                  Published Author
                </span>
                <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-md font-medium">
                  Empathy Leader
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="https://ridhimabatra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Visit Website</span>
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Training Modules</h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive 3-day program designed to transform your professional presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-white/5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${day.color}`} />

                <div
                  className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-br ${day.color} bg-opacity-10 flex items-center justify-center`}
                >
                  <day.icon className="w-6 h-6 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                    {day.day}
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white leading-snug">{day.title}</h3>
                </div>

                <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm">{day.description}</p>

                <ul className="space-y-3">
                  {day.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skills?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us for these transformative sessions and build the confidence you need to succeed in your cybersecurity
            career.
          </p>
          <a
            href="/schedule"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            View in Schedule
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
