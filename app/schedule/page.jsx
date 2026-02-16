'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MapPin, Radio, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

const TrainingTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [heroDay, setHeroDay] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedHall, setSelectedHall] = useState('all');

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

  // Get unique halls for selected day
  const hallsForDay = useMemo(() => {
    const dayEvents = getEventsByDay(selectedDay);
    const halls = [...new Set(dayEvents.map(e => e.hall).filter(Boolean))];
    return halls.sort();
  }, [selectedDay, getEventsByDay]);

  const getFilteredEvents = () => {
    let filtered = getEventsByDay(selectedDay);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(e => {
        const titleMatch = e.title?.toLowerCase().includes(q);
        const descMatch = e.description?.toLowerCase().includes(q);
        const hallMatch = e.hall?.toLowerCase().includes(q);
        const speakerMatch = e.speakerIds?.some(sid => {
          const s = getSpeakerById(sid);
          return s?.name.toLowerCase().includes(q);
        });
        return titleMatch || descMatch || speakerMatch || hallMatch;
      });
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(e => e.type === selectedType);
    }

    if (selectedHall !== 'all') {
      filtered = filtered.filter(e => e.hall === selectedHall);
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
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const parseTime = timeStr => {
    try {
      const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!match) return null;
      let [, hours, minutes, period] = match;
      hours = parseInt(hours);
      minutes = parseInt(minutes);
      if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
      if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
      return { hours, minutes };
    } catch {
      return null;
    }
  };

  const isEventRunning = (event, dayNum) => {
    if (!now) return false;
    const day = dayNum || selectedDay;

    const eventDates = {
      1: new Date('2026-02-19T00:00:00'),
      2: new Date('2026-02-20T00:00:00'),
      3: new Date('2026-02-21T00:00:00')
    };

    const eventDate = eventDates[day];
    if (!eventDate) return false;

    const isSameDay =
      now.getFullYear() === eventDate.getFullYear() &&
      now.getMonth() === eventDate.getMonth() &&
      now.getDate() === eventDate.getDate();

    if (!isSameDay) return false;

    const start = parseTime(event.time);
    const end = event.endTime ? parseTime(event.endTime) : null;

    if (!start) return false;

    const eventStart = new Date(now);
    eventStart.setHours(start.hours, start.minutes, 0, 0);

    const eventEnd = new Date(now);
    if (end) {
      eventEnd.setHours(end.hours, end.minutes, 0, 0);
    } else {
      eventEnd.setHours(start.hours + 1, start.minutes, 0, 0);
    }

    return now >= eventStart && now < eventEnd;
  };

  // Get currently running events across all days
  const getCurrentlyRunningEvents = useCallback(() => {
    if (!now) return [];
    const running = [];
    for (let day = 1; day <= 3; day++) {
      const dayEvents = getEventsByDay(day);
      dayEvents.forEach(event => {
        if (isEventRunning(event, day)) {
          running.push({ ...event, day });
        }
      });
    }
    return running;
  }, [now, getEventsByDay]);

  // Check if we're on a conference day
  const isConferenceDay = useMemo(() => {
    if (!now) return false;
    const dates = [new Date('2026-02-19'), new Date('2026-02-20'), new Date('2026-02-21')];
    return dates.some(
      d => now.getFullYear() === d.getFullYear() && now.getMonth() === d.getMonth() && now.getDate() === d.getDate()
    );
  }, [now]);

  const runningEvents = getCurrentlyRunningEvents();

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
      training: 'from-cyan-500 to-blue-600',
      panel: 'from-amber-500 to-orange-600',
      track: 'from-pink-500 to-rose-600'
    };
    return gradients[type] || 'from-slate-500 to-slate-600';
  };

  const getHallColor = hall => {
    const colors = {
      'Main Stage': {
        bg: 'bg-fuchsia-500/10',
        text: 'text-fuchsia-400',
        border: 'border-fuchsia-500/20',
        darkBg: 'bg-fuchsia-500/15'
      },
      Zuari: {
        bg: 'bg-violet-500/10',
        text: 'text-violet-400',
        border: 'border-violet-500/20',
        darkBg: 'bg-violet-500/15'
      },
      Abolim: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        border: 'border-emerald-500/20',
        darkBg: 'bg-emerald-500/15'
      },
      Mandovi: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', darkBg: 'bg-blue-500/15' },
      SAL: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', darkBg: 'bg-amber-500/15' },
      'Pool Side Ground Floor': {
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        border: 'border-rose-500/20',
        darkBg: 'bg-rose-500/15'
      },
      'Pool Side 1st Floor': {
        bg: 'bg-teal-500/10',
        text: 'text-teal-400',
        border: 'border-teal-500/20',
        darkBg: 'bg-teal-500/15'
      }
    };
    return (
      colors[hall] || {
        bg: 'bg-slate-500/10',
        text: 'text-slate-400',
        border: 'border-slate-500/20',
        darkBg: 'bg-slate-500/15'
      }
    );
  };

  // Format time range display
  const getTimeRange = event => {
    if (event.endTime) {
      return `${event.time} – ${event.endTime}`;
    }
    return event.time;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Happening Now Section - Only on conference days */}
      {isConferenceDay && runningEvents.length > 0 && (
        <section className="pt-48 pb-4 md:pt-56 md:pb-6">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-red-500 relative" />
                </div>
                <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Happening <span className="text-red-500">Now</span>
                </h2>
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>

              {/* Running Events Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {runningEvents.map(event => {
                  const hallColor = getHallColor(event.hall);
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="group"
                    >
                      <Link href={`/schedule/${event.id}`}>
                        <div
                          className={`relative overflow-hidden rounded-2xl border-2 border-red-500/30 ${isDark ? 'bg-slate-800/80' : 'bg-white'} p-5 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10`}
                        >
                          {/* Live indicator bar */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse" />

                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-red-500/10 border border-red-500/20">
                              <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                              <span className="text-[10px] font-bold text-red-500 uppercase">Live</span>
                            </div>
                            {false && event.hall && (
                              <div
                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${isDark ? hallColor.darkBg : hallColor.bg} border ${hallColor.border}`}
                              >
                                <MapPin className={`w-3 h-3 ${hallColor.text}`} />
                                <span className={`text-xs font-bold ${hallColor.text}`}>{event.hall}</span>
                              </div>
                            )}
                          </div>

                          <h3
                            className={`text-base font-bold mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                          >
                            {event.title}
                          </h3>

                          <div className="flex items-center gap-2">
                            <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                            <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {getTimeRange(event)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Timeline Section */}
      <section
        className={`${isConferenceDay && runningEvents.length > 0 ? 'pt-8 pb-12 md:pt-12 md:pb-20' : 'pt-48 pb-12 md:pt-56 md:pb-20'} ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}
      >
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
                  onClick={() => {
                    setSelectedDay(day.day);
                    setSelectedHall('all');
                  }}
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
          <div className="max-w-4xl mx-auto mb-10">
            {/* Search Bar */}
            <div className={`relative mb-4 p-1 rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sessions, speakers, halls, or topics..."
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

            {/* Hall Filter Pills */}
            <div className="hidden flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <MapPin className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                >
                  Hall:
                </span>
              </div>
              <button
                onClick={() => setSelectedHall('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedHall === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                    : isDark
                      ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                All Halls
              </button>
              {hallsForDay.map(hall => {
                const hallColor = getHallColor(hall);
                return (
                  <button
                    key={hall}
                    onClick={() => setSelectedHall(hall)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      selectedHall === hall
                        ? `${isDark ? hallColor.darkBg : hallColor.bg} ${hallColor.text} border ${hallColor.border} shadow-sm`
                        : isDark
                          ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    {hall}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events Grid - Bento Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {getFilteredEvents().map((event, index) => {
              const isRunning = isEventRunning(event);
              const eventSpeakers = event.speakerIds?.map(id => getSpeakerById(id)).filter(Boolean) || [];
              const isHovered = hoveredEvent === event.id;
              const hallColor = getHallColor(event.hall);

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
                      } border ${isRunning ? 'border-red-500/40 shadow-red-500/10 shadow-lg' : isDark ? 'border-slate-700' : 'border-slate-200'} hover:shadow-2xl ${
                        isDark ? 'hover:shadow-orange-500/10' : 'hover:shadow-orange-500/20'
                      } hover:-translate-y-2`}
                    >
                      {/* Gradient Top Bar */}
                      <div
                        className={`h-1.5 md:h-2 bg-gradient-to-r ${isRunning ? 'from-red-500 via-orange-500 to-red-500 animate-pulse' : getTypeGradient(event.type)}`}
                      />

                      {/* Content */}
                      <div className="p-4 sm:p-6 md:p-8">
                        {/* Header Row - Time, Hall, Live, Type */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4 md:mb-6">
                          <div className="flex flex-wrap items-center gap-2 md:gap-3">
                            {/* Time Badge */}
                            <div
                              className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}
                            >
                              <Clock
                                className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                              />
                              <span
                                className={`font-mono font-bold text-xs md:text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}
                              >
                                {getTimeRange(event)}
                              </span>
                            </div>

                            {/* Hall Badge */}
                            {false && event.hall && (
                              <div
                                className={`flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl ${isDark ? hallColor.darkBg : hallColor.bg} border ${hallColor.border}`}
                              >
                                <MapPin className={`w-3.5 h-3.5 md:w-4 md:h-4 ${hallColor.text}`} />
                                <span className={`font-semibold text-xs md:text-sm ${hallColor.text}`}>
                                  {event.hall}
                                </span>
                              </div>
                            )}

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
                No sessions found{selectedHall !== 'all' ? ` in ${selectedHall}` : ''} for Day {selectedDay}
              </p>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Try adjusting your search or filters
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
