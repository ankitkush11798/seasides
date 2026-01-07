'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const EventDetailPage = () => {
  const { id } = useParams();
  const { isDark } = useTheme();

  // Find the event across all days
  let event = null;
  let eventDay = null;

  for (const [day, dayEvents] of Object.entries(events)) {
    const foundEvent = dayEvents.find(e => e.id === id);
    if (foundEvent) {
      event = foundEvent;
      eventDay = day.replace('day', '');
      break;
    }
  }

  if (!event) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link
            href="/event-timeline"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Schedule
          </Link>
        </div>
      </div>
    );
  }

  const eventSpeakers = event.speakerIds
    ? event.speakerIds.map(id => speakers.find(s => s.id === id)).filter(Boolean)
    : event.speakerId
      ? [speakers.find(s => s.id === event.speakerId)].filter(Boolean)
      : [];

  const getTypeColor = type => {
    const colors = {
      registration: 'from-indigo-500 to-indigo-600',
      keynote: 'from-red-500 to-red-600',
      session: 'from-blue-600 to-blue-700',
      workshop: 'from-emerald-600 to-emerald-700',
      village: 'from-orange-500 to-orange-600',
      arsenal: 'from-purple-600 to-purple-700',
      lunch: 'from-amber-500 to-amber-600',
      break: 'from-pink-500 to-pink-600'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
            <Link
              href="/event-timeline"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Schedule
            </Link>
          </motion.div>

          {/* Hero Header with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-3xl overflow-hidden mb-8 ${
              isDark ? 'bg-slate-900 shadow-2xl shadow-black/20' : 'bg-white shadow-xl shadow-gray-200/50'
            }`}
          >
            {/* Gradient Header */}
            <div className={`h-48 bg-gradient-to-r ${getTypeColor(event.type)} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 mb-3 font-semibold tracking-wide uppercase text-sm">
                    <Calendar className="w-4 h-4" />
                    Day {eventDay}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${getTypeColor(event.type)}`}
                >
                  {event.type}
                </span>
                {event.track !== 'all' && (
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isDark
                        ? 'border border-slate-700 text-slate-400 bg-slate-800/50'
                        : 'border border-slate-200 text-slate-600 bg-slate-50'
                    }`}
                  >
                    {event.track}
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-3xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {event.title}
              </motion.h1>

              {/* Meta Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Time
                    </p>
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{event.time}</p>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Location
                    </p>
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{event.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`rounded-3xl p-8 md:p-12 mb-8 ${isDark ? 'bg-slate-900 shadow-xl' : 'bg-white shadow-lg'}`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>About This Event</h2>
              {event.registrationLink && (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Register Now
                </a>
              )}
            </div>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              {event.fullDescription || event.description}
            </p>
          </motion.div>

          {/* Speaker Section */}
          {eventSpeakers.length > 0 && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Presented By</h2>
              {eventSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`rounded-3xl p-8 md:p-12 ${isDark ? 'bg-slate-900 shadow-xl' : 'bg-white shadow-lg'}`}
                >
                  <Link href={`/speakers/${speaker.id}`} className="group block">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-orange-500/50 group-hover:border-orange-500 transition-all duration-300 flex-shrink-0 group-hover:scale-105">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <h3
                          className={`text-2xl md:text-3xl font-bold mb-2 group-hover:text-orange-500 transition-colors ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {speaker.name}
                        </h3>
                        <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}>
                          {speaker.role} @ {speaker.company}
                        </p>
                        <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                          {speaker.bio}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-500">
                          View Speaker Profile
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
