'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { speakers } from '@/lib/data';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

const SpeakersPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Our Visionary Speakers
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              delay={{ duration: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"
            />
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              Meet the industry experts, researchers, and thought leaders who will be sharing their knowledge at
              Seasides 2026.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/speakers/${speaker.id}`} className="group block h-full">
                  <div
                    className={`h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-slate-900 hover:shadow-2xl hover:shadow-orange-500/10 border border-slate-800'
                        : 'bg-white hover:shadow-xl border border-gray-100'
                    }`}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Social Icons Overlay */}
                      <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {speaker.social?.twitter && (
                          <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-400 transition-colors">
                            <Twitter size={18} />
                          </span>
                        )}
                        {speaker.social?.linkedin && (
                          <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-700 transition-colors">
                            <Linkedin size={18} />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className={`text-2xl font-bold mb-1 group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}
                      >
                        {speaker.name}
                      </h3>
                      <p className={`font-medium mb-3 ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}>
                        {speaker.role} @ {speaker.company}
                      </p>
                      <p className={`line-clamp-3 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cal for Papers / Join */}
          <div className="mt-20 text-center">
            <div
              className={`p-8 rounded-3xl ${isDark ? 'bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700' : 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100'}`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Want to speak at Seasides?
              </h2>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                We are always looking for new voices. Submit your proposal for our next event.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
                  Submit Proposal
                </button>
                <button
                  className={`px-6 py-3 rounded-xl font-bold border transition-colors ${
                    isDark
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  View Guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
