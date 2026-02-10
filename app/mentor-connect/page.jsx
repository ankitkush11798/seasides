'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Handshake, Linkedin, MessageCircle, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MentorConnectPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const mentors = [
    {
      name: 'Karuna Singh',
      role: 'Mentor',
      desc: 'Expert in career guidance and professional development.',
      image: '/mentor/karuna.jpeg',
      linkedin: 'https://www.linkedin.com/in/karuna-singh-54970164/'
    },
    {
      name: 'Binit Sharma',
      role: 'Mentor',
      desc: 'Specialist in industry networking and technical mentorship.',
      image: null
    },
    {
      name: 'Deepak Rathore',
      role: 'Mentor',
      desc: 'Provides insights into emerging technologies and strategic planning.',
      image: null
    },
    {
      name: 'Satyendra Prajapati',
      role: 'Mentor',
      desc: 'Focuses on leadership skills and meaningful industry connections.',
      image: '/mentor/satyendra.jpeg'
    },
    {
      name: 'Shaik Sartaj Ahmed',
      role: 'Mentor',
      desc: 'Guides professionals on navigating complex career paths.',
      image: '/mentor/sartaj.jpeg'
    },
    {
      name: 'Arnab Roy',
      role: 'Mentor',
      desc: 'Brings deep industry experience and strategic mentorship.',
      image: null,
      linkedin: 'https://www.linkedin.com/in/arnab~roy'
    },
    {
      name: 'Praveen Kanniah',
      role: 'Mentor',
      desc: 'Provides guidance on technical excellence and career advancement.',
      image: null,
      linkedin: 'https://www.linkedin.com/in/praveen-kanniah/'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide mb-6">
              CAREER & MENTORSHIP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Seasides <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Mentor Connect
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-10 leading-relaxed">
              Connect with industry leaders, gain invaluable career insights, and expand your professional network in
              our dedicated mentorship sessions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                <Users className="w-4 h-4 text-blue-500" />
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

      {/* Mentors Grid */}
      <section className="py-20 bg-white dark:bg-white/5 border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Meet Our Mentors</h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals ready to guide you on your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-white/5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {mentor.image ? (
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md ring-2 ring-blue-400/30">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                      {mentor.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{mentor.role}</p>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{mentor.desc}</p>
                  {mentor.linkedin && (
                    <Link
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30">
              <Handshake className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Networking</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Build meaningful connections with industry veterans and peers.
              </p>
            </div>
            <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-800/30">
              <GraduationCap className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Career Growth</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Receive personalized advice to accelerate your professional journey.
              </p>
            </div>
            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
              <MessageCircle className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Open Dialogue</h3>
              <p className="text-slate-600 dark:text-gray-400">
                Engage in open discussions about challenges and opportunities in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
