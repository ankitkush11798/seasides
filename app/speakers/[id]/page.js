'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers, trainingSessions } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  ExternalLink,
  Linkedin,
  MapPin,
  Twitter,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const SpeakerDetailPage = () => {
  const { id } = useParams();
  const { isDark } = useTheme();

  const speaker = speakers.find(s => s.id === id);

  // Get speaker's sessions
  const speakerSessions = trainingSessions?.filter(session => session.speakerIds?.includes(id)) || [];

  // Get event details for sessions
  const getEventForSession = sessionId => {
    for (const [day, dayEvents] of Object.entries(events)) {
      const event = dayEvents.find(e => e.id === sessionId);
      if (event) {
        return { ...event, day: day.replace('day', '') };
      }
    }
    return null;
  };

  if (!speaker) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-gray-900'}`}
      >
        <div className="text-center">
          <div
            className={`w-24 h-24 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} flex items-center justify-center mx-auto mb-6`}
          >
            <Users className={`w-12 h-12 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Speaker Not Found</h1>
          <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            The speaker you are looking for does not exist.
          </p>
          <Link
            href="/speakers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 blur-[150px] opacity-15 -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link
              href="/speakers"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                isDark
                  ? 'text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white'
              } backdrop-blur-sm`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Speakers
            </Link>
          </motion.div>

          {/* Profile Header */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-1"
            >
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'shadow-orange-500/10' : 'shadow-orange-500/20'}`}
              >
                <div className="aspect-square relative">
                  <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              {/* Role Badge */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg">
                  <Award className="w-4 h-4" />
                  Trainer
                </span>
                {speakerSessions.length > 0 && (
                  <span
                    className={`px-4 py-2 rounded-xl font-bold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-600'} shadow-lg`}
                  >
                    {speakerSessions.length} {speakerSessions.length === 1 ? 'Session' : 'Sessions'}
                  </span>
                )}
              </div>

              {/* Name */}
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                {speaker.name}
              </h1>

              {/* Role & Company */}
              <div className={`flex items-center gap-3 text-xl mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <Briefcase className="w-6 h-6 text-orange-500" />
                <span className="font-semibold">
                  {speaker.role}
                  {speaker.company && (
                    <span className={isDark ? 'text-orange-400' : 'text-orange-600'}> @ {speaker.company}</span>
                  )}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${isDark ? 'bg-slate-800/80' : 'bg-white'} shadow-lg`}
                >
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Seasides 2026</span>
                </div>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${isDark ? 'bg-slate-800/80' : 'bg-white'} shadow-lg`}
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Goa, India</span>
                </div>
              </div>

              {/* Bio Preview */}
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {speaker.bio?.substring(0, 300)}...
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-16 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Bio */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-3xl p-8 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>About</h2>
                <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                  <p
                    className={`text-lg leading-relaxed whitespace-pre-wrap ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                  >
                    {speaker.bio}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Sessions */}
            <div className="space-y-6">
              {speakerSessions.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Sessions by {speaker.name.split(' ')[0]}
                  </h3>
                  <div className="space-y-4">
                    {speakerSessions.map((session, index) => {
                      const eventDetails = getEventForSession(session.id);
                      return (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Link href={`/event-timeline/${session.id}`} className="group block">
                            <div
                              className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                            >
                              {/* Gradient Bar */}
                              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />

                              <div className="p-5">
                                {/* Meta */}
                                <div className="flex items-center gap-3 mb-3">
                                  <div
                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}
                                  >
                                    <Calendar
                                      className={`w-3.5 h-3.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                    />
                                    <span
                                      className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                                    >
                                      Day {eventDetails?.day || session.date?.split(' ')[1]?.replace(',', '')}
                                    </span>
                                  </div>
                                  {eventDetails?.time && (
                                    <div
                                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}
                                    >
                                      <Clock
                                        className={`w-3.5 h-3.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                      />
                                      <span
                                        className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                                      >
                                        {eventDetails.time}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                {/* Title */}
                                <h4
                                  className={`font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                >
                                  {session.title}
                                </h4>

                                {/* Description */}
                                <p
                                  className={`text-sm line-clamp-2 mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                >
                                  {session.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                                  <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold uppercase">
                                    Workshop
                                  </span>
                                  <div
                                    className={`flex items-center gap-1 text-sm font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                                  >
                                    View Details
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Register Card */}
              {speakerSessions.length > 0 && speakerSessions[0].registrationLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`rounded-2xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Join the Session
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Register now to secure your spot in {speaker.name.split(' ')[0]}&apos;s training session.
                  </p>
                  <a
                    href={speakerSessions[0].registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}

              {/* Connect Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`rounded-2xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h3>
                <div className="space-y-3">
                  {speaker.social?.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-[#0077b5]' : 'bg-slate-100 hover:bg-[#0077b5]'} hover:text-white group`}
                    >
                      <div
                        className={`p-2 rounded-lg ${isDark ? 'bg-slate-600 group-hover:bg-white/20' : 'bg-white group-hover:bg-white/20'} transition-colors`}
                      >
                        <Linkedin
                          className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-slate-600'} group-hover:text-white transition-colors`}
                        />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-white transition-colors`}
                        >
                          LinkedIn
                        </p>
                        <p
                          className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-white/80 transition-colors`}
                        >
                          Professional Network
                        </p>
                      </div>
                      <ExternalLink
                        className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'} group-hover:text-white transition-colors`}
                      />
                    </a>
                  )}
                  {speaker.social?.twitter && (
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-[#1DA1F2]' : 'bg-slate-100 hover:bg-[#1DA1F2]'} hover:text-white group`}
                    >
                      <div
                        className={`p-2 rounded-lg ${isDark ? 'bg-slate-600 group-hover:bg-white/20' : 'bg-white group-hover:bg-white/20'} transition-colors`}
                      >
                        <Twitter
                          className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-slate-600'} group-hover:text-white transition-colors`}
                        />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-white transition-colors`}
                        >
                          Twitter / X
                        </p>
                        <p
                          className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-white/80 transition-colors`}
                        >
                          Follow for updates
                        </p>
                      </div>
                      <ExternalLink
                        className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'} group-hover:text-white transition-colors`}
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakerDetailPage;
