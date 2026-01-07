'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events } from '@/lib/data';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Radio } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const EventTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Conference Schedule',
      subtitle: 'Three days of cutting-edge security talks, hands-on workshops, and immersive villages.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Expert Speakers',
      subtitle: 'Learn from industry leaders and security researchers sharing their latest discoveries.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Hands-On Experience',
      subtitle: 'Participate in interactive workshops, CTF challenges, and security villages.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate hero slides
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

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

  // Check if event is currently running
  const isEventRunning = event => {
    const eventDates = {
      1: new Date('2026-02-19T00:00:00'),
      2: new Date('2026-02-20T00:00:00'),
      3: new Date('2026-02-21T00:00:00')
    };

    const eventDate = eventDates[selectedDay];
    if (!eventDate) return false;

    const now = new Date();
    // Check if same day
    const isSameDay =
      now.getFullYear() === eventDate.getFullYear() &&
      now.getMonth() === eventDate.getMonth() &&
      now.getDate() === eventDate.getDate();

    if (!isSameDay) return false;

    // Check time logic (assuming 1 hour duration for simplicity if no end time)
    // Parse event time "09:00 AM"
    try {
      const [timeStr, period] = event.time.split(' ');
      let [hours, minutes] = timeStr.split(':').map(Number);
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      const eventStart = new Date(now);
      eventStart.setHours(hours, minutes, 0, 0);

      const eventEnd = new Date(eventStart);
      eventEnd.setHours(eventStart.getHours() + 1); // Mock 1 hour duration

      return now >= eventStart && now < eventEnd;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      {/* Hero Section with Animated Slides */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Animated Slide Content */}
          <div className="relative h-64 md:h-48 flex items-center justify-center">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                  zIndex: currentSlide === index ? 10 : 0
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h1
                  className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {i === slide.title.split(' ').length - 1 ? (
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient}`}>
                          {word}
                        </span>
                      ) : (
                        <>{word} </>
                      )}
                    </span>
                  ))}
                </h1>

                <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {slide.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-orange-500'
                    : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-orange-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-20 z-40 bg-inherit/95 backdrop-blur-md border-y border-orange-500/10 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Days */}
          <div className={`flex p-1 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedDay === day
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
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
          {getFilteredEvents().map((event, index) => {
            const isRunning = isEventRunning(event);

            const getBorderColor = type => {
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
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/event-timeline/${event.id}`}
                  className={`group block relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 backdrop-blur-sm'
                      : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Colored Left Border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getBorderColor(event.type)}`} />

                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    {/* Time Section */}
                    <div className="flex md:flex-col items-center md:items-start md:w-32 shrink-0 gap-3">
                      <div
                        className={`text-lg md:text-xl font-bold font-mono tracking-tight ${
                          isRunning ? 'text-orange-500' : isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {event.time}
                      </div>

                      {isRunning && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider border border-orange-500/20">
                          <Radio className="w-3 h-3 animate-pulse" />
                          Live
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0 pl-4 md:pl-0 border-l md:border-l-0 border-slate-100 dark:border-slate-700">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white text-black border border-gray-200">
                          {event.type}
                        </span>
                        {event.track !== 'all' && (
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                              isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'
                            }`}
                          >
                            {event.track}
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {event.title}
                      </h3>

                      <p
                        className={`text-base leading-relaxed mb-4 line-clamp-2 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {event.description}
                      </p>
                    </div>

                    {/* Arrow Action */}
                    <div className="hidden md:flex flex-col justify-center pl-4 border-l border-slate-100 dark:border-slate-700">
                      <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 transition-colors">
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No events found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventTimeline;
