'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Radio, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const TrainingTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [heroDay, setHeroDay] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Get speaker by ID
  const getSpeakerById = useCallback(id => {
    return speakers.find(s => s.id === id) || null;
  }, []);

  // Get events for a specific day
  const getEventsByDay = useCallback(day => {
    return events[`day${day}`] || [];
  }, []);

  // Day data with dates
  const dayData = [
    {
      day: 1,
      date: 'Feb 19',
      fullDate: 'February 19, 2026',
      label: 'Day One',
      theme: 'from-orange-500 via-amber-500 to-yellow-500',
      accent: 'orange'
    },
    {
      day: 2,
      date: 'Feb 20',
      fullDate: 'February 20, 2026',
      label: 'Day Two',
      theme: 'from-cyan-500 via-blue-500 to-indigo-500',
      accent: 'cyan'
    },
    {
      day: 3,
      date: 'Feb 21',
      fullDate: 'February 21, 2026',
      label: 'Day Three',
      theme: 'from-purple-500 via-pink-500 to-rose-500',
      accent: 'purple'
    }
  ];

  // Auto-rotate hero days
  useEffect(() => {
    if (!isAutoPlaying) return;
    const slideTimer = setInterval(() => {
      setHeroDay(prev => (prev % 3) + 1);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [isAutoPlaying]);

  const getFilteredEvents = () => {
    let filtered = getEventsByDay(selectedDay);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(e => {
        const titleMatch = e.title?.toLowerCase().includes(q);
        const descMatch = e.description?.toLowerCase().includes(q);
        const speakerMatch = e.speakerIds?.some(sid => {
          const s = getSpeakerById(sid);
          return s?.name.toLowerCase().includes(q);
        });
        return titleMatch || descMatch || speakerMatch;
      });
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(e => e.type === selectedType);
    }

    return filtered;
  };

  const navigateDay = direction => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      setHeroDay(prev => (prev % 3) + 1);
    } else {
      setHeroDay(prev => (prev === 1 ? 3 : prev - 1));
    }
  };

  // Check if event is currently running
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    // Optional: update 'now' every minute to keep "Live" badges accurate
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isEventRunning = event => {
    if (!now) return false; // Avoid hydration mismatch

    const eventDates = {
      1: new Date('2026-02-19T00:00:00'),
      2: new Date('2026-02-20T00:00:00'),
      3: new Date('2026-02-21T00:00:00')
    };

    const eventDate = eventDates[selectedDay];
    if (!eventDate) return false;

    const isSameDay =
      now.getFullYear() === eventDate.getFullYear() &&
      now.getMonth() === eventDate.getMonth() &&
      now.getDate() === eventDate.getDate();

    if (!isSameDay) return false;

    try {
      const [timeStr, period] = event.time.split(' ');
      let [hours, minutes] = timeStr.split(':').map(Number);
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      const eventStart = new Date(now);
      eventStart.setHours(hours, minutes, 0, 0);

      const eventEnd = new Date(eventStart);
      eventEnd.setHours(eventStart.getHours() + 1);

      return now >= eventStart && now < eventEnd;
    } catch {
      return false;
    }
  };

  const currentDayData = dayData[heroDay - 1];
  const selectedDayData = dayData[selectedDay - 1];
  const currentDayEvents = getEventsByDay(heroDay);

  const getTypeGradient = type => {
    const gradients = {
      workshop: 'from-emerald-500 to-teal-600',
      keynote: 'from-red-500 to-rose-600',
      village: 'from-orange-500 to-amber-600',
      session: 'from-blue-500 to-indigo-600',
      arsenal: 'from-purple-500 to-violet-600',
      training: 'from-cyan-500 to-blue-600'
    };
    return gradients[type] || 'from-slate-500 to-slate-600';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Innovative Hero Section - Journey Trek Style */}

      {/* Innovative Timeline Section */}
      <section className={`pt-48 pb-12 md:pt-56 md:pb-20 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              {selectedDayData.label}{' '}
              <span className={`bg-gradient-to-r ${selectedDayData.theme} bg-clip-text text-transparent`}>
                Sessions
              </span>
            </motion.h2>
            <p className={`text-base md:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {selectedDayData.fullDate} • {getFilteredEvents().length} Sessions
            </p>
          </div>

          {/* Day Selector Pills */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div
              className={`inline-flex p-1 md:p-1.5 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'} shadow-inner`}
            >
              {dayData.map(day => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`relative px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-bold transition-all duration-300 ${
                    selectedDay === day.day
                      ? 'text-white'
                      : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {selectedDay === day.day && (
                    <motion.div
                      layoutId="activeDay"
                      className={`absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r ${day.theme} shadow-lg`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">Day {day.day}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className={`relative mb-6 p-1 rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sessions, speakers, or topics..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`w-full py-3 pl-12 pr-4 rounded-xl outline-none transition-all ${
                    isDark
                      ? 'bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500/50'
                      : 'bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-orange-500/20'
                  }`}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className={`w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid - Bento Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {getFilteredEvents().map((event, index) => {
              const isRunning = isEventRunning(event);
              const eventSpeakers = event.speakerIds?.map(id => getSpeakerById(id)).filter(Boolean) || [];
              const isHovered = hoveredEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  <Link href={`/schedule/${event.id}`} className="group block h-full">
                    <div
                      className={`relative h-full overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      } border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:shadow-2xl ${
                        isDark ? 'hover:shadow-orange-500/10' : 'hover:shadow-orange-500/20'
                      } hover:-translate-y-2`}
                    >
                      {/* Gradient Top Bar */}
                      <div className={`h-1.5 md:h-2 bg-gradient-to-r ${getTypeGradient(event.type)}`} />

                      {/* Content */}
                      <div className="p-4 sm:p-6 md:p-8">
                        {/* Header Row */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3">
                            {/* Time Badge */}
                            <div
                              className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}
                            >
                              <Clock
                                className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                              />
                              <span
                                className={`font-mono font-bold text-sm md:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}
                              >
                                {event.time}
                              </span>
                            </div>
                            {isRunning && (
                              <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl bg-red-500/10 border border-red-500/20">
                                <Radio className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 animate-pulse" />
                                <span className="text-[10px] md:text-xs font-bold text-red-500 uppercase">Live</span>
                              </div>
                            )}
                          </div>

                          {/* Type Badge */}
                          <span
                            className={`px-2 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${getTypeGradient(event.type)}`}
                          >
                            {event.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                        >
                          {event.description}
                        </p>

                        {/* Speakers Section */}
                        {eventSpeakers.length > 0 && (
                          <div className={`pt-4 md:pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                                {/* Stacked Avatars */}
                                {eventSpeakers.some(s => s.image) && (
                                  <div className="flex -space-x-2 md:-space-x-3 flex-shrink-0">
                                    {eventSpeakers
                                      .filter(s => s.image && s.image.trim() !== '')
                                      .slice(0, 3)
                                      .map((speaker, idx) => {
                                        const isPlaceholder = speaker.image?.includes('placeholder');
                                        return (
                                          <motion.div
                                            key={speaker.id}
                                            className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 ${isDark ? 'border-slate-800' : 'border-white'} shadow-md flex items-center justify-center ${isPlaceholder ? (isDark ? 'bg-slate-700' : 'bg-slate-200') : ''}`}
                                            style={{ zIndex: 3 - idx }}
                                            animate={{
                                              scale: isHovered ? 1.1 : 1,
                                              x: isHovered ? idx * 4 : 0
                                            }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                          >
                                            {isPlaceholder ? (
                                              <Users
                                                className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                              />
                                            ) : (
                                              <Image
                                                src={speaker.image}
                                                alt={speaker.name}
                                                fill
                                                className="object-cover"
                                              />
                                            )}
                                          </motion.div>
                                        );
                                      })}
                                  </div>
                                )}

                                {/* Speaker Names */}
                                <div className="min-w-0 flex-1">
                                  <p
                                    className={`text-xs sm:text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}
                                  >
                                    {eventSpeakers.map(s => s.name).join(', ')}
                                  </p>
                                  <p
                                    className={`text-[10px] md:text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                                  >
                                    {eventSpeakers.length === 1 ? 'Trainer' : 'Trainers'}
                                  </p>
                                </div>
                              </div>

                              {/* Arrow */}
                              <motion.div
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`p-1.5 md:p-2 rounded-lg md:rounded-xl flex-shrink-0 ${isDark ? 'bg-slate-700 group-hover:bg-orange-500' : 'bg-slate-100 group-hover:bg-orange-500'} transition-colors`}
                              >
                                <ArrowRight
                                  className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-white transition-colors`}
                                />
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover Gradient Overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-orange-500/5' : 'from-orange-500/5'} to-transparent pointer-events-none`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-20">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} mb-6`}
              >
                <Calendar className={`w-10 h-10 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              </div>
              <p className={`text-xl font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                No sessions scheduled for Day {selectedDay}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingTimeline;
