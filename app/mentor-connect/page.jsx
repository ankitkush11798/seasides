'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Linkedin, MessageSquare, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MentorConnectPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const mentors = [
    {
      name: 'Karuna Singh',
      role: 'Career Strategist',
      desc: 'Expert in career guidance and professional development.',
      image: '/mentor/karuna.jpeg',
      linkedin: 'https://www.linkedin.com/in/karuna-singh-54970164/'
    },
    {
      name: 'Binit Sharma',
      role: 'Industry Networker',
      desc: 'Specialist in industry networking and technical mentorship.',
      image: null
    },
    {
      name: 'Deepak Rathore',
      role: 'Tech Strategist',
      desc: 'Provides insights into emerging technologies and strategic planning.',
      image: null
    },
    {
      name: 'Satyendra Prajapati',
      role: 'Leadership Coach',
      desc: 'Focuses on leadership skills and meaningful industry connections.',
      image: '/mentor/satyendra.jpeg'
    },
    {
      name: 'Shaik Sartaj Ahmed',
      role: 'Career Navigator',
      desc: 'Guides professionals on navigating complex career paths.',
      image: '/mentor/sartaj.jpeg'
    },
    {
      name: 'Arnab Roy',
      role: 'Strategic Mentor',
      desc: 'Brings deep industry experience and strategic mentorship.',
      image: null,
      linkedin: 'https://www.linkedin.com/in/arnab~roy'
    },
    {
      name: 'Praveen Kanniah',
      role: 'Technical Guide',
      desc: 'Provides guidance on technical excellence and career advancement.',
      image: null,
      linkedin: 'https://www.linkedin.com/in/praveen-kanniah/'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              CAREER & MENTORSHIP
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Full Potential
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light">
              Connect with industry leaders, gain invaluable career insights, and expand your professional network in
              our dedicated mentorship sessions at Seasides 2026.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg hover:border-white/20 transition-colors">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">5:00 PM – 7:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg hover:border-white/20 transition-colors">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">Feb 19-21, 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-900/50 skew-y-3 transform origin-top-left -z-10" />

        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Meet Our Mentors</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Experienced professionals ready to guide you on your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-1 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                <div className="bg-slate-950/50 rounded-xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {mentor.image ? (
                    <div className="w-56 h-56 mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-blue-400 transition-all duration-300">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        width={224}
                        height={224}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-56 h-56 mb-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-slate-300 text-6xl font-bold shadow-lg ring-4 ring-white group-hover:ring-blue-400 transition-all duration-300">
                      {mentor.name.charAt(0)}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-purple-400 font-medium text-sm mb-4 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {mentor.role}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{mentor.desc}</p>

                  {mentor.linkedin ? (
                    <Link
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 w-full justify-center"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </Link>
                  ) : (
                    <div className="h-10 w-full" /> /* Spacer for alignment */
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Mentor Connect?</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all hover:bg-slate-800/80 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Briefcase className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Career Clarity</h3>
              <p className="text-slate-400 leading-relaxed">
                Get distinct, actionable advice to navigate your career path in cybersecurity and technology.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all hover:bg-slate-800/80 group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Zap className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Skill Acceleration</h3>
              <p className="text-slate-400 leading-relaxed">
                Identify key skills to focus on and learn how to acquire them efficiently from experts.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-pink-500/20 transition-all hover:bg-slate-800/80 group">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <MessageSquare className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Networking</h3>
              <p className="text-slate-400 leading-relaxed">
                Expand your professional circle and open doors to new opportunities through direct mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
