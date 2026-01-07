'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { speakers, trainingSessions } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Users, Sparkles, ArrowRight, Mic2, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

const SpeakersPage = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);

  // Get speaker's sessions
  const getSpeakerSessions = speakerId => {
    return trainingSessions?.filter(session => session.speakerIds?.includes(speakerId)) || [];
  };

  // Filter speakers based on search
  const filteredSpeakers = useMemo(() => {
    if (!searchQuery.trim()) {
      return speakers;
    }
    const query = searchQuery.toLowerCase();
    return speakers.filter(
      speaker =>
        speaker.name.toLowerCase().includes(query) ||
        speaker.role?.toLowerCase().includes(query) ||
        speaker.company?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 opacity-[0.03]`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 blur-[150px] opacity-15 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm border ${isDark ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}
            >
              <Mic2 className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {speakers.length} Expert Trainers
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1
              className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Expert Trainers
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Learn from industry-leading security researchers, engineers, and thought leaders at Seasides 2026.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto"
          >
            <div
              className={`relative flex items-center rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
            >
              <Search className={`absolute left-4 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="Search speakers by name, role, or company..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-transparent outline-none ${isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'}`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className={`py-16 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {filteredSpeakers.length === 0 ? (
            <div className="text-center py-20">
              <div
                className={`w-20 h-20 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} flex items-center justify-center mx-auto mb-6`}
              >
                <Users className={`w-10 h-10 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              </div>
              <p className={`text-xl font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                No speakers found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpeakers.map((speaker, index) => {
                const sessions = getSpeakerSessions(speaker.id);
                const isHovered = hoveredSpeaker === speaker.id;

                return (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredSpeaker(speaker.id)}
                    onMouseLeave={() => setHoveredSpeaker(null)}
                  >
                    <Link href={`/speakers/${speaker.id}`} className="group block h-full">
                      <div
                        className={`h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                          isDark
                            ? 'bg-slate-800 hover:shadow-2xl hover:shadow-orange-500/10'
                            : 'bg-white hover:shadow-2xl hover:shadow-orange-500/20'
                        } border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:-translate-y-2`}
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                          {/* Session Badge */}
                          {sessions.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                              className="absolute top-4 right-4"
                            >
                              <div className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold shadow-lg">
                                {sessions.length} {sessions.length === 1 ? 'Session' : 'Sessions'}
                              </div>
                            </motion.div>
                          )}

                          {/* Social Icons */}
                          <div className="absolute bottom-4 right-4 flex gap-2">
                            {speaker.social?.linkedin && (
                              <motion.a
                                href={speaker.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                                transition={{ delay: 0.1 }}
                                className="p-2 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-[#0077b5] transition-colors"
                              >
                                <Linkedin className="w-4 h-4" />
                              </motion.a>
                            )}
                            {speaker.social?.twitter && (
                              <motion.a
                                href={speaker.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                                transition={{ delay: 0.15 }}
                                className="p-2 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-[#1DA1F2] transition-colors"
                              >
                                <Twitter className="w-4 h-4" />
                              </motion.a>
                            )}
                          </div>

                          {/* Bottom Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-orange-400 transition-colors">
                              {speaker.name}
                            </h3>
                            <p className="text-orange-400 font-semibold text-sm">{speaker.role}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {speaker.company && (
                            <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {speaker.company}
                            </p>
                          )}
                          <p className={`text-sm line-clamp-3 mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {speaker.bio}
                          </p>

                          {/* View Profile Link */}
                          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                            <span className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                              View full profile
                            </span>
                            <motion.div
                              animate={{ x: isHovered ? 5 : 0 }}
                              className={`p-2 rounded-xl ${isDark ? 'bg-slate-700 group-hover:bg-orange-500' : 'bg-slate-100 group-hover:bg-orange-500'} transition-colors`}
                            >
                              <ArrowRight
                                className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-white transition-colors`}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl p-8 md:p-12 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-2xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-500 blur-[100px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className={`text-sm font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  Call for Speakers
                </span>
              </div>

              <h2 className={`text-3xl md:text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Want to Speak at Seasides?
              </h2>
              <p className={`text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We are always looking for passionate security professionals to share their knowledge. Submit your
                proposal for our next event.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all">
                  Submit Proposal
                </button>
                <button
                  className={`px-8 py-4 rounded-xl font-bold border transition-all ${
                    isDark
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-700'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  View Guidelines
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
