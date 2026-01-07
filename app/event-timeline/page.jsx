'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Radio,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Clock,
  ArrowRight,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

const EventTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [heroDay, setHeroDay] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState(null);

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
    return getEventsByDay(selectedDay);
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
  const isEventRunning = event => {
    const eventDates = {
      1: new Date('2026-02-19T00:00:00'),
      2: new Date('2026-02-20T00:00:00'),
      3: new Date('2026-02-21T00:00:00')
    };

    const eventDate = eventDates[selectedDay];
    if (!eventDate) return false;

    const now = new Date();
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
      arsenal: 'from-purple-500 to-violet-600'
    };
    return gradients[type] || 'from-slate-500 to-slate-600';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Innovative Hero Section - Journey Trek Style */}
      <section className="relative pt-24 pb-8 px-4 overflow-hidden min-h-[85vh]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className={`absolute inset-0 opacity-[0.03] ${isDark ? 'opacity-[0.05]' : ''}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          {/* Gradient Orbs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={heroDay}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className={`absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${currentDayData.theme} blur-[120px] opacity-20`}
            />
          </AnimatePresence>
          <div
            className={`absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'} blur-[100px] opacity-50`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm border ${isDark ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                3-Day Security Training Trek
              </span>
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Day Info */}
            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroDay}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Day Badge */}
                  <div
                    className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r ${currentDayData.theme} mb-6 shadow-lg`}
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-lg">{currentDayData.label}</span>
                    <span className="text-white/80 font-medium">•</span>
                    <span className="text-white/90 font-medium">{currentDayData.fullDate}</span>
                  </div>

                  {/* Title */}
                  <h1
                    className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Training
                    <br />
                    <span className={`bg-gradient-to-r ${currentDayData.theme} bg-clip-text text-transparent`}>
                      Sessions
                    </span>
                  </h1>

                  {/* Stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                    <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{currentDayEvents.length} Workshops</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">Goa, India</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => navigateDay('prev')}
                      className={`p-3 rounded-xl ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'} transition-all shadow-lg`}
                    >
                      <ChevronLeft className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-900'}`} />
                    </button>

                    {/* Day Indicators */}
                    <div className="flex gap-2">
                      {[1, 2, 3].map(day => (
                        <button
                          key={day}
                          onClick={() => {
                            setHeroDay(day);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            heroDay === day
                              ? `w-10 bg-gradient-to-r ${dayData[day - 1].theme}`
                              : `w-2 ${isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-300 hover:bg-slate-400'}`
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigateDay('next')}
                      className={`p-3 rounded-xl ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'} transition-all shadow-lg`}
                    >
                      <ChevronRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-900'}`} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Training Cards Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroDay}
                  initial={{ opacity: 0, y: 30, rotateY: -10 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -30, rotateY: 10 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {currentDayEvents.slice(0, 3).map((event, index) => {
                    const eventSpeakers = event.speakerIds?.map(id => getSpeakerById(id)).filter(Boolean) || [];

                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.4 }}
                        className={`group relative overflow-hidden rounded-2xl ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm border ${isDark ? 'border-slate-700' : 'border-slate-200'} p-5 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                        style={{
                          transform: `translateX(${index * 8}px)`
                        }}
                        onClick={() => setSelectedDay(heroDay)}
                      >
                        {/* Gradient accent */}
                        <div
                          className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${currentDayData.theme}`}
                        />

                        <div className="flex items-center gap-4 pl-4">
                          {/* Speaker Avatars */}
                          <div className="flex -space-x-3">
                            {eventSpeakers.slice(0, 2).map((speaker, idx) => (
                              <div
                                key={speaker.id}
                                className={`relative w-12 h-12 rounded-full overflow-hidden border-2 ${isDark ? 'border-slate-800' : 'border-white'} shadow-lg`}
                                style={{ zIndex: 2 - idx }}
                              >
                                <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                              </div>
                            ))}
                            {eventSpeakers.length > 2 && (
                              <div
                                className={`relative w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-slate-200'} border-2 ${isDark ? 'border-slate-800' : 'border-white'} shadow-lg text-sm font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}
                              >
                                +{eventSpeakers.length - 2}
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}
                              >
                                {event.type}
                              </span>
                              <span className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {event.time}
                              </span>
                            </div>
                            <h3
                              className={`font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-orange-500 transition-colors`}
                            >
                              {event.title}
                            </h3>
                            <p className={`text-sm truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {eventSpeakers.map(s => s.name).join(', ')}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ChevronRight
                            className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'} group-hover:text-orange-500 transition-colors`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* View All Button */}
                  {currentDayEvents.length > 3 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => setSelectedDay(heroDay)}
                      className={`w-full py-3 rounded-xl ${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'} border ${isDark ? 'border-slate-700' : 'border-slate-200'} transition-all text-center font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'} shadow-lg`}
                    >
                      View all {currentDayEvents.length} workshops →
                    </motion.button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Journey Path Visualization */}
          <div className="mt-16 relative">
            <div
              className={`absolute top-1/2 left-0 right-0 h-1 ${isDark ? 'bg-slate-800' : 'bg-slate-200'} rounded-full -translate-y-1/2`}
            />
            <div className="flex justify-between relative z-10">
              {dayData.map(day => (
                <motion.button
                  key={day.day}
                  onClick={() => {
                    setHeroDay(day.day);
                    setSelectedDay(day.day);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center ${heroDay === day.day ? 'scale-110' : ''} transition-transform`}
                >
                  {/* Node */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      heroDay === day.day
                        ? `bg-gradient-to-br ${day.theme} shadow-lg shadow-orange-500/25`
                        : isDark
                          ? 'bg-slate-800 border-2 border-slate-700'
                          : 'bg-white border-2 border-slate-200 shadow-md'
                    }`}
                  >
                    <span
                      className={`text-2xl md:text-3xl font-black ${heroDay === day.day ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      {day.day}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="mt-3 text-center">
                    <p
                      className={`font-bold ${heroDay === day.day ? (isDark ? 'text-white' : 'text-slate-900') : isDark ? 'text-slate-500' : 'text-slate-400'}`}
                    >
                      {day.label}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{day.date}</p>
                  </div>

                  {/* Workshop count */}
                  <div
                    className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      heroDay === day.day
                        ? `bg-gradient-to-r ${day.theme} text-white`
                        : isDark
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {getEventsByDay(day.day).length} Sessions
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Timeline Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-4"
            >
              <Zap className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                Full Schedule
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              {selectedDayData.label}{' '}
              <span className={`bg-gradient-to-r ${selectedDayData.theme} bg-clip-text text-transparent`}>
                Sessions
              </span>
            </motion.h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {selectedDayData.fullDate} • {getFilteredEvents().length} Training Sessions
            </p>
          </div>

          {/* Day Selector Pills */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex p-1.5 rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'} shadow-inner`}>
              {dayData.map(day => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`relative px-6 md:px-10 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
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
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${day.theme} shadow-lg`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">Day {day.day}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid - Bento Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <Link href={`/event-timeline/${event.id}`} className="group block h-full">
                    <div
                      className={`relative h-full overflow-hidden rounded-3xl transition-all duration-500 ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      } border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:shadow-2xl ${
                        isDark ? 'hover:shadow-orange-500/10' : 'hover:shadow-orange-500/20'
                      } hover:-translate-y-2`}
                    >
                      {/* Gradient Top Bar */}
                      <div className={`h-2 bg-gradient-to-r ${getTypeGradient(event.type)}`} />

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        {/* Header Row */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-3">
                            {/* Time Badge */}
                            <div
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}
                            >
                              <Clock className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                              <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {event.time}
                              </span>
                            </div>
                            {isRunning && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20">
                                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                                <span className="text-xs font-bold text-red-500 uppercase">Live</span>
                              </div>
                            )}
                          </div>

                          {/* Type Badge */}
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${getTypeGradient(event.type)}`}
                          >
                            {event.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed mb-6 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                        >
                          {event.description}
                        </p>

                        {/* Speakers Section */}
                        {eventSpeakers.length > 0 && (
                          <div className={`pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {/* Stacked Avatars */}
                                <div className="flex -space-x-3">
                                  {eventSpeakers.slice(0, 3).map((speaker, idx) => (
                                    <motion.div
                                      key={speaker.id}
                                      className={`relative w-10 h-10 rounded-full overflow-hidden border-2 ${isDark ? 'border-slate-800' : 'border-white'} shadow-md`}
                                      style={{ zIndex: 3 - idx }}
                                      animate={{
                                        scale: isHovered ? 1.1 : 1,
                                        x: isHovered ? idx * 4 : 0
                                      }}
                                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                      <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Speaker Names */}
                                <div className="min-w-0">
                                  <p
                                    className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}
                                  >
                                    {eventSpeakers.map(s => s.name).join(', ')}
                                  </p>
                                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                    {eventSpeakers.length === 1 ? 'Trainer' : 'Trainers'}
                                  </p>
                                </div>
                              </div>

                              {/* Arrow */}
                              <motion.div
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`p-2 rounded-xl ${isDark ? 'bg-slate-700 group-hover:bg-orange-500' : 'bg-slate-100 group-hover:bg-orange-500'} transition-colors`}
                              >
                                <ArrowRight
                                  className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-white transition-colors`}
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
                No events scheduled for Day {selectedDay}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventTimeline;
