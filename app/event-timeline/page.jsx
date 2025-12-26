'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { events } from '@/lib/data';
import SessionDetailModal from '@/components/schedule/SessionDetailModal';

const EventTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedSession, setSelectedSession] = useState(null);

  const getEventsByDay = day => {
    return events[`day${day}`] || [];
  };

  const getFilteredEvents = () => {
    const dailyEvents = getEventsByDay(selectedDay);
    if (selectedTrack === 'all') return dailyEvents;
    return dailyEvents.filter(event => event.track === selectedTrack || event.track === 'all');
  };

  const getTypeColor = type => {
    const colors = {
      registration: 'bg-indigo-500',
      keynote: 'bg-red-500',
      session: 'bg-blue-600',
      workshop: 'bg-emerald-600',
      village: 'bg-orange-500',
      arsenal: 'bg-purple-600',
      lunch: 'bg-amber-500',
      break: 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-6 font-semibold tracking-wide uppercase text-sm"
          >
            <Clock className="w-4 h-4" />
            Agenda 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Conference{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Schedule
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Three days of cutting-edge security talks, hands-on workshops, and immersive villages.
          </motion.p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-20 z-40 bg-inherit/95 backdrop-blur-md border-y border-orange-500/10 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Days */}
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedDay === day
                    ? 'bg-white dark:bg-slate-800 shadow-sm text-orange-600 dark:text-orange-400'
                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>

          {/* Tracks */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 touch-pan-x scrollbar-hide pr-4">
            {[
              { id: 'all', label: 'All Tracks' },
              { id: 'technical', label: 'Technical' },
              { id: 'enterprise', label: 'Enterprise' },
              { id: 'village', label: 'Villages' }
            ].map(track => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  selectedTrack === track.id
                    ? isDark
                      ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                      : 'bg-orange-50 border-orange-200 text-orange-700'
                    : isDark
                      ? 'border-slate-800 text-slate-400 hover:border-slate-700'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-12 max-w-5xl mx-auto px-4 md:px-6">
        <div className="space-y-6">
          {getFilteredEvents().map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedSession(event)}
              className={`group cursor-pointer rounded-2xl p-1 overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                isDark
                  ? 'hover:shadow-orange-500/10 hover:bg-slate-800/50'
                  : 'hover:shadow-xl hover:shadow-orange-500/5'
              }`}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-6 p-6 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 group-hover:border-slate-700'
                    : 'bg-white border-slate-100 group-hover:border-orange-200'
                }`}
              >
                {/* Time + Line */}
                <div className="flex md:flex-col md:w-32 md:text-right shrink-0 items-center md:items-end gap-2 text-slate-500 dark:text-slate-400 font-mono">
                  <span className="text-lg font-bold">{event.time}</span>
                  <div className="h-px w-full bg-slate-200 dark:bg-slate-800 md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${getTypeColor(event.type)}`}
                    >
                      {event.type}
                    </span>
                    {event.track !== 'all' && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                        {event.track}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {event.title}
                  </h3>

                  <p className={`mb-4 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>

                    <span className="hidden group-hover:flex items-center gap-1 text-sm font-bold text-orange-500">
                      Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No events found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <SessionDetailModal
        session={selectedSession}
        isOpen={!!selectedSession}
        onClose={() => setSelectedSession(null)}
      />
    </div>
  );
};

export default EventTimeline;
