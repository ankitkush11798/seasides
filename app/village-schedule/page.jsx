'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { villages as villagesData } from '@/lib/villageData';
import { getDayColor, getGradientStyle, getSessionTypeBadgeClasses } from '@/lib/villageUtils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  Grid3X3,
  LayoutList,
  MapPin,
  Mic,
  Search,
  User,
  Users,
  X,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const VillageSchedule = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [expandedVillage, setExpandedVillage] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const villages = villagesData;

  const dayInfo = [
    { id: 'all', label: 'All Days', shortLabel: 'All', date: 'Feb 19-21', color: 'from-orange-500 to-amber-500' },
    {
      id: 'day1',
      label: 'Day 1',
      shortLabel: 'D1',
      date: 'Feb 19',
      fullDate: 'February 19, 2026',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'day2',
      label: 'Day 2',
      shortLabel: 'D2',
      date: 'Feb 20',
      fullDate: 'February 20, 2026',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'day3',
      label: 'Day 3',
      shortLabel: 'D3',
      date: 'Feb 21',
      fullDate: 'February 21, 2026',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const filteredVillages = useMemo(() => {
    let result = villages;

    if (selectedDay !== 'all') {
      result = result.filter(village => village.days[selectedDay]);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        village =>
          village.name.toLowerCase().includes(query) ||
          village.description.toLowerCase().includes(query) ||
          village.topics?.some(t => t.toLowerCase().includes(query))
      );
    }

    if (activeFilter && activeFilter !== 'All Levels') {
      result = result.filter(village => village.difficulty === activeFilter);
    }

    return result;
  }, [selectedDay, searchQuery, activeFilter]);

  const stats = useMemo(
    () => ({
      total: villages.length,
      day1: villages.filter(v => v.days.day1).length,
      day2: villages.filter(v => v.days.day2).length,
      day3: villages.filter(v => v.days.day3).length
    }),
    []
  );

  const isExternalUrl = url => url?.startsWith('http');

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0a0a1a]' : 'bg-gradient-to-b from-slate-50 to-white'}`}
    >
      <Navbar />

      {/* Immersive Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
          </div>

          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -50, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 to-purple-500/30 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-[100px]"
          />

          {/* Grid Pattern */}
          <div
            className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}
            style={{
              backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl ${
                isDark
                  ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20'
                  : 'bg-white/80 border border-orange-200 shadow-xl shadow-orange-500/10'
              }`}
            >
              <div className="relative">
                <Zap className="w-5 h-5 text-orange-500" />
                <div className="absolute inset-0 animate-ping">
                  <Zap className="w-5 h-5 text-orange-500 opacity-50" />
                </div>
              </div>
              <span className={`text-sm font-bold tracking-wide ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>
                SEASIDES 2026 • SECURITY VILLAGES
              </span>
              <div className={`w-2 h-2 rounded-full bg-green-500 animate-pulse`} />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              <span className="block">Explore</span>
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Security Villages
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Dive into <span className="font-bold text-orange-500">{villages.length}</span> specialized security
              domains featuring hands-on labs, expert-led workshops, CTF challenges, and immersive hacking experiences
            </p>
          </motion.div>

          {/* Day Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {dayInfo.map(day => (
              <motion.button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedDay === day.id
                    ? `bg-gradient-to-r ${day.color} text-white shadow-lg shadow-orange-500/30`
                    : isDark
                      ? 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <span className="relative z-10">
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">{day.shortLabel}</span>
                  <span
                    className={`ml-2 text-xs ${selectedDay === day.id ? 'text-white/80' : isDark ? 'text-slate-500' : 'text-slate-400'}`}
                  >
                    {day.date}
                  </span>
                </span>
                {selectedDay === day.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 text-center"
          >
            {[
              { label: 'Villages', value: stats.total, icon: '🏠' },
              { label: 'Day 1', value: stats.day1, icon: '📅' },
              { label: 'Day 2', value: stats.day2, icon: '📅' },
              { label: 'Day 3', value: stats.day3, icon: '📅' }
            ].map((stat, idx) => (
              <div key={idx} className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="text-2xl md:text-3xl font-black text-orange-500">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Control Bar */}
      <section
        className={`sticky top-16 z-40 py-4 backdrop-blur-2xl border-y transition-colors ${
          isDark ? 'bg-[#0a0a1a]/80 border-white/5' : 'bg-white/80 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-[400px]">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
              />
              <input
                type="text"
                placeholder="Search villages, topics, sessions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 transition-all focus:outline-none ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-orange-500/50 focus:bg-white/10'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/10'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Results Badge */}
              <div
                className={`px-5 py-2.5 rounded-xl font-medium ${isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'}`}
              >
                <span className="font-bold text-orange-500">{filteredVillages.length}</span>
                <span className="ml-1.5">of {villages.length} villages</span>
              </div>

              {/* View Toggle */}
              <div className={`flex items-center rounded-xl p-1.5 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/10'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/10'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <LayoutList className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Content */}
      <section className={`py-16 ${isDark ? 'bg-transparent' : 'bg-slate-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredVillages.map((village, index) => {
                  const isExpanded = expandedVillage === village.id;
                  const hasSessions = village.sessions && Object.keys(village.sessions).length > 0;
                  const hasTeam = village.team && village.team.length > 0;
                  const showDetails = hasSessions || hasTeam;
                  const activeDays = [village.days.day1, village.days.day2, village.days.day3].filter(Boolean).length;
                  const isExternal = isExternalUrl(village.url);

                  return (
                    <motion.div
                      key={village.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group"
                    >
                      <div
                        className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                          isDark
                            ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20'
                            : 'bg-white/80 backdrop-blur-xl border border-slate-200 hover:border-slate-300'
                        } hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2`}
                      >
                        {/* Gradient Top Bar */}
                        <div className="h-2 w-full" style={village.branding ? getGradientStyle(village.branding) : {}}>
                          <div
                            className={`h-full w-full bg-gradient-to-r ${village.gradient || 'from-orange-500 to-amber-500'}`}
                          />
                        </div>

                        {/* Glow Effect on Hover */}
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${village.gradient} opacity-5`} />
                        </div>

                        {/* Content */}
                        <div className="relative p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-5">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: 'spring', stiffness: 400 }}
                              className={`p-4 rounded-2xl shadow-lg bg-gradient-to-br ${village.gradient}`}
                              style={village.branding?.primaryColor ? getGradientStyle(village.branding) : {}}
                            >
                              {village.branding?.logo ? (
                                <img
                                  src={village.branding.logo}
                                  alt={`${village.name} logo`}
                                  className="w-7 h-7 object-contain"
                                  onError={e => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling?.style && (e.target.nextSibling.style.display = 'block');
                                  }}
                                />
                              ) : null}
                              <village.icon
                                className={`w-7 h-7 text-white ${village.branding?.logo ? 'hidden' : ''}`}
                              />
                            </motion.div>

                            {/* Day Indicators */}
                            <div className="flex gap-1.5">
                              {['day1', 'day2', 'day3'].map((day, idx) => {
                                const isActive = village.days[day];
                                const dayColors = [
                                  'bg-gradient-to-br from-orange-500 to-red-500',
                                  'bg-gradient-to-br from-cyan-500 to-blue-500',
                                  'bg-gradient-to-br from-purple-500 to-violet-500'
                                ];
                                return (
                                  <div
                                    key={day}
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                                      isActive
                                        ? `${dayColors[idx]} text-white shadow-lg`
                                        : isDark
                                          ? 'bg-white/5 text-white/20'
                                          : 'bg-slate-100 text-slate-300'
                                    }`}
                                  >
                                    D{idx + 1}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Title & Description */}
                          <h3
                            className={`text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                          >
                            {village.name}
                          </h3>
                          <p
                            className={`text-sm mb-4 line-clamp-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                          >
                            {village.description}
                          </p>

                          {/* Meta Info */}
                          <div
                            className={`flex flex-wrap gap-3 mb-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                          >
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {village.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {activeDays} day{activeDays > 1 ? 's' : ''}
                            </span>
                            {isExternal && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 font-medium">
                                <ExternalLink className="w-3 h-3" />
                                Website
                              </span>
                            )}
                          </div>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {village.topics.slice(0, 4).map((topic, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                                  isDark
                                    ? 'bg-white/5 text-slate-300 group-hover:bg-white/10'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                                }`}
                              >
                                {topic}
                              </span>
                            ))}
                            {village.topics.length > 4 && (
                              <span
                                className={`px-3 py-1.5 rounded-full text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                              >
                                +{village.topics.length - 4}
                              </span>
                            )}
                          </div>

                          {/* Schedule */}
                          <div className={`pt-4 border-t space-y-2 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                            {['day1', 'day2', 'day3'].map((day, idx) => {
                              const schedule = village.schedule[day];
                              const dayLabel = dayInfo[idx + 1];
                              if (!schedule) return null;
                              return (
                                <div key={day} className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${getDayColor(idx)}`} />
                                    <span
                                      className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                    >
                                      {dayLabel.date}
                                    </span>
                                  </div>
                                  <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                    {schedule.start} - {schedule.end}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-5">
                            {showDetails && (
                              <button
                                onClick={() => setExpandedVillage(isExpanded ? null : village.id)}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                                  isExpanded
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30'
                                    : isDark
                                      ? 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                              >
                                <Mic className="w-4 h-4" />
                                {isExpanded ? 'Hide Details' : 'View Sessions'}
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                />
                              </button>
                            )}
                            {village.url && (
                              <Link
                                href={village.url}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                className={`p-3 rounded-xl transition-all ${
                                  isDark
                                    ? 'bg-white/5 text-slate-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white border border-white/10 hover:border-transparent'
                                    : 'bg-slate-100 text-slate-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white'
                                }`}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                          </div>

                          {/* Expanded Details */}
                          <AnimatePresence>
                            {isExpanded && showDetails && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                {/* Sessions */}
                                {hasSessions && (
                                  <div
                                    className={`mt-5 pt-5 border-t space-y-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                  >
                                    <h4
                                      className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                    >
                                      <Calendar className="w-4 h-4 text-orange-500" />
                                      Session Schedule
                                    </h4>
                                    {Object.entries(village.sessions).map(([day, sessions]) => (
                                      <div key={day}>
                                        <p
                                          className={`text-xs font-bold mb-2 px-2.5 py-1 rounded-lg inline-block ${
                                            isDark
                                              ? 'bg-orange-500/20 text-orange-400'
                                              : 'bg-orange-100 text-orange-600'
                                          }`}
                                        >
                                          {day === 'day1' ? 'Feb 19' : day === 'day2' ? 'Feb 20' : 'Feb 21'}
                                        </p>
                                        <div className="space-y-2">
                                          {sessions.map((session, sIdx) => (
                                            <div
                                              key={sIdx}
                                              className={`p-4 rounded-xl border ${
                                                isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'
                                              }`}
                                            >
                                              <div className="flex items-start justify-between gap-2 mb-2">
                                                <span
                                                  className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                                                    isDark
                                                      ? 'bg-cyan-500/20 text-cyan-400'
                                                      : 'bg-orange-100 text-orange-600'
                                                  }`}
                                                >
                                                  {session.time}
                                                </span>
                                                <span
                                                  className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${getSessionTypeBadgeClasses(session.type)}`}
                                                >
                                                  {session.type}
                                                </span>
                                              </div>
                                              <p
                                                className={`text-sm font-semibold leading-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                              >
                                                {session.title}
                                              </p>
                                              <div
                                                className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                                              >
                                                <User className="w-3.5 h-3.5" />
                                                <span>{session.presenter}</span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Team Section */}
                                {hasTeam && (
                                  <div
                                    className={`mt-5 pt-5 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                  >
                                    <h4
                                      className={`text-sm font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                    >
                                      <Users className="w-4 h-4 text-orange-500" />
                                      Village Team
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                      {village.team.map((member, idx) => (
                                        <div
                                          key={idx}
                                          className={`p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-slate-50'}`}
                                        >
                                          <p
                                            className={`text-xs font-bold leading-tight mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                          >
                                            {member.name}
                                          </p>
                                          <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {member.role}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredVillages.map((village, index) => {
                  const isExternal = isExternalUrl(village.url);
                  return (
                    <motion.div
                      key={village.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20'
                          : 'bg-white/80 backdrop-blur-xl border border-slate-200 hover:border-slate-300'
                      } hover:shadow-xl hover:shadow-orange-500/5`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${village.gradient}`}
                        style={village.branding?.primaryColor ? getGradientStyle(village.branding) : {}}
                      />

                      <div className="flex items-center p-5 pl-6">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${village.gradient} mr-5 shadow-lg`}
                          style={village.branding?.primaryColor ? getGradientStyle(village.branding) : {}}
                        >
                          {village.branding?.logo ? (
                            <img
                              src={village.branding.logo}
                              alt={`${village.name} logo`}
                              className="w-6 h-6 object-contain"
                              onError={e => {
                                e.target.style.display = 'none';
                                e.target.nextSibling?.style && (e.target.nextSibling.style.display = 'block');
                              }}
                            />
                          ) : null}
                          <village.icon className={`w-6 h-6 text-white ${village.branding?.logo ? 'hidden' : ''}`} />
                        </div>

                        {/* Info */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className={`text-lg font-bold truncate group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                            >
                              {village.name}
                            </h3>
                            {isExternal && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                                <ExternalLink className="w-3 h-3" />
                                Website
                              </span>
                            )}
                          </div>
                          <p className={`text-sm truncate mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {village.description}
                          </p>
                          <div
                            className={`flex items-center gap-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                          >
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {village.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {[village.days.day1, village.days.day2, village.days.day3].filter(Boolean).length} days
                            </span>
                          </div>
                        </div>

                        {/* Day Badges */}
                        <div className="hidden lg:flex items-center gap-2 ml-4">
                          {['day1', 'day2', 'day3'].map((day, idx) => {
                            const isActive = village.days[day];
                            const dayColors = [
                              'bg-gradient-to-br from-orange-500 to-red-500',
                              'bg-gradient-to-br from-cyan-500 to-blue-500',
                              'bg-gradient-to-br from-purple-500 to-violet-500'
                            ];
                            return (
                              <div
                                key={day}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                                  isActive
                                    ? `${dayColors[idx]} text-white shadow-lg`
                                    : isDark
                                      ? 'bg-white/5 text-white/20'
                                      : 'bg-slate-100 text-slate-300'
                                }`}
                              >
                                D{idx + 1}
                              </div>
                            );
                          })}
                        </div>

                        {/* Link Button */}
                        <Link
                          href={village.url || '#'}
                          target={isExternal ? '_blank' : '_self'}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className={`ml-4 p-3 rounded-xl transition-all ${
                            isDark
                              ? 'bg-white/5 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-slate-400 hover:text-white border border-white/10 hover:border-transparent'
                              : 'bg-slate-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-slate-500 hover:text-white'
                          }`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

          {/* Empty State */}
          {filteredVillages.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
              <div
                className={`w-28 h-28 rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-100'} flex items-center justify-center mx-auto mb-8`}
              >
                <Search className={`w-14 h-14 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              </div>
              <p className={`text-2xl font-bold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                No villages found
              </p>
              <p className={`mb-8 max-w-md mx-auto ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Try adjusting your search or day filter to discover more security villages
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter(null);
                  setSelectedDay('all');
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillageSchedule;
