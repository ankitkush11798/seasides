'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { villages as villagesData } from '@/lib/villageData';
import {
  getDayColor,
  getDifficultyBadgeClasses,
  getGradientStyle,
  getSessionTypeBadgeClasses,
  hasSessions as hasSessionsUtil
} from '@/lib/villageUtils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Mic,
  Search,
  Sparkles,
  User,
  Users,
  X,
  Zap
} from 'lucide-react';
import { useMemo, useState } from 'react';

const VillageSchedule = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [expandedVillage, setExpandedVillage] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  // Use centralized village data
  const villages = villagesData;

  const dayInfo = [
    { id: 'all', label: 'All Days', shortLabel: 'All', date: null },
    { id: 'day1', label: 'Day 1', shortLabel: 'D1', date: 'Feb 19', fullDate: 'February 19, 2026' },
    { id: 'day2', label: 'Day 2', shortLabel: 'D2', date: 'Feb 20', fullDate: 'February 20, 2026' },
    { id: 'day3', label: 'Day 3', shortLabel: 'D3', date: 'Feb 21', fullDate: 'February 21, 2026' }
  ];

  const difficultyFilters = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

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

  const selectedDayInfo = dayInfo.find(d => d.id === selectedDay);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Immersive Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500 to-amber-500 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500 to-purple-500 blur-[120px]"
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-500/10 border border-orange-500/20'}`}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                Seasides 2026 Villages
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1
              className={`text-6xl md:text-8xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              <span className="block">Explore</span>
              <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Security Villages
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Hands-on learning experiences across {villages.length} specialized security domains
            </p>
          </motion.div>

          {/* Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: 'Villages', value: stats.total, color: 'orange' },
              { icon: Calendar, label: 'Feb 19', value: stats.day1, color: 'amber' },
              { icon: Calendar, label: 'Feb 20', value: stats.day2, color: 'cyan' },
              { icon: Calendar, label: 'Feb 21', value: stats.day3, color: 'purple' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-2xl p-4 ${isDark ? 'bg-slate-900/80 border border-slate-800' : 'bg-white/80 border border-slate-200'} backdrop-blur-xl`}
              >
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 bg-${stat.color}-500`}
                />
                <stat.icon className={`w-5 h-5 mb-2 text-${stat.color}-500`} />
                <p className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter & Controls Section */}
      <section
        className={`sticky top-0 z-40 py-4 backdrop-blur-xl border-b ${isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Day Selector */}
            <div className="flex items-center gap-2">
              {dayInfo.map(day => (
                <motion.button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    selectedDay === day.id
                      ? 'text-white'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {selectedDay === day.id && (
                    <motion.div
                      layoutId="daySelector"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex flex-col items-center">
                    <span>{day.label}</span>
                    {day.date && <span className="text-[10px] opacity-70">{day.date}</span>}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className={`relative flex items-center rounded-xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <Search className={`absolute left-3 w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`w-48 pl-10 pr-4 py-2.5 rounded-xl bg-transparent text-sm outline-none ${isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'}`}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3">
                    <X className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                  </button>
                )}
              </div>

              {/* Difficulty Filter */}
              <div className="hidden md:flex items-center gap-1">
                <Filter className={`w-4 h-4 mr-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                {difficultyFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter === activeFilter ? null : filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeFilter === filter
                        ? 'bg-orange-500 text-white'
                        : isDark
                          ? 'text-slate-400 hover:bg-slate-800'
                          : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className={`flex items-center p-1 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-orange-500 text-white' : isDark ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-orange-500 text-white' : isDark ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Content */}
      <section className={`py-12 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Showing{' '}
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{filteredVillages.length}</span>{' '}
              villages
              {selectedDay !== 'all' && ` for ${selectedDayInfo?.fullDate || selectedDayInfo?.label}`}
            </p>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredVillages.map((village, index) => {
                  const isExpanded = expandedVillage === village.id;
                  const hasSessions = village.sessions && Object.keys(village.sessions).length > 0;

                  return (
                    <motion.div
                      key={village.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div
                        className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                          isDark
                            ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50'
                            : 'bg-white hover:bg-slate-50 border border-slate-200'
                        } hover:shadow-2xl hover:-translate-y-1`}
                      >
                        {/* Gradient Top */}
                        <div
                          className={`h-2 ${village.branding?.gradient ? '' : `bg-gradient-to-r ${village.gradient || 'from-orange-500 to-amber-500'}`}`}
                          style={village.branding ? getGradientStyle(village.branding) : {}}
                        />

                        {/* Content */}
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`p-3 rounded-2xl ${!village.branding?.primaryColor ? `bg-gradient-to-br ${village.branding?.gradient || village.gradient}` : ''}`}
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
                              <village.icon
                                className={`w-6 h-6 text-white ${village.branding?.logo ? 'hidden' : ''}`}
                              />
                            </motion.div>

                            <div className="flex items-center gap-2">
                              <span
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${getDifficultyBadgeClasses(village.difficulty)}`}
                              >
                                {village.difficulty}
                              </span>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <h3
                            className={`text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                          >
                            {village.name}
                          </h3>
                          <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {village.description}
                          </p>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {village.topics.slice(0, 3).map((topic, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-0.5 rounded-md text-xs ${isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-600'}`}
                              >
                                {topic}
                              </span>
                            ))}
                            {village.topics.length > 3 && (
                              <span
                                className={`px-2 py-0.5 rounded-md text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                              >
                                +{village.topics.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Location & Capacity */}
                          <div
                            className={`flex items-center justify-between text-sm mb-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                          >
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{village.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5" />
                              <span>{village.capacity}</span>
                            </div>
                          </div>

                          {/* Schedule */}
                          <div
                            className={`pt-4 border-t space-y-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                          >
                            {['day1', 'day2', 'day3'].map((day, idx) => {
                              const schedule = village.schedule[day];
                              const dayLabel = dayInfo[idx + 1];
                              if (!schedule) return null;
                              return (
                                <div key={day} className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${getDayColor(idx)}`} />
                                    <span
                                      className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
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

                          {/* Sessions Toggle Button */}
                          {hasSessions && (
                            <button
                              onClick={() => setExpandedVillage(isExpanded ? null : village.id)}
                              className={`w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                isExpanded
                                  ? 'bg-orange-500 text-white'
                                  : isDark
                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              }`}
                            >
                              <Mic className="w-4 h-4" />
                              {isExpanded ? 'Hide Sessions' : 'View Sessions'}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              />
                            </button>
                          )}

                          {/* Expanded Sessions */}
                          <AnimatePresence>
                            {isExpanded && hasSessions && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div
                                  className={`mt-4 pt-4 border-t space-y-3 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                                >
                                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Session Schedule
                                  </h4>
                                  {Object.entries(village.sessions).map(([day, sessions]) => (
                                    <div key={day}>
                                      <p
                                        className={`text-xs font-semibold mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                                      >
                                        {day === 'day1' ? 'Feb 19' : day === 'day2' ? 'Feb 20' : 'Feb 21'}
                                      </p>
                                      <div className="space-y-2">
                                        {sessions.map((session, sIdx) => (
                                          <div
                                            key={sIdx}
                                            className={`p-3 rounded-xl ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}
                                          >
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                              <span
                                                className={`text-[10px] font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}
                                              >
                                                {session.time}
                                              </span>
                                              <span
                                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${getSessionTypeBadgeClasses(session.type)}`}
                                              >
                                                {session.type}
                                              </span>
                                            </div>
                                            <p
                                              className={`text-xs font-semibold leading-tight mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                            >
                                              {session.title}
                                            </p>
                                            <div
                                              className={`flex items-center gap-1 text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                                            >
                                              <User className="w-3 h-3" />
                                              <span>{session.presenter}</span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hover Arrow - only show when not expanded */}
                          {!hasSessions && (
                            <motion.div
                              className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            >
                              <div className="p-2 rounded-xl bg-orange-500 text-white">
                                <ChevronRight className="w-5 h-5" />
                              </div>
                            </motion.div>
                          )}
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
                {filteredVillages.map((village, index) => (
                  <motion.div
                    key={village.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50'
                        : 'bg-white hover:bg-slate-50 border border-slate-200'
                    } hover:shadow-xl`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1.5 ${!village.branding?.primaryColor ? `bg-gradient-to-b ${village.branding?.gradient || village.gradient}` : ''}`}
                      style={village.branding?.primaryColor ? getGradientStyle(village.branding) : {}}
                    />

                    <div className="flex items-center p-5 pl-6">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl ${!village.branding?.primaryColor ? `bg-gradient-to-br ${village.branding?.gradient || village.gradient}` : ''} mr-5`}
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
                          <span
                            className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-bold ${getDifficultyBadgeClasses(village.difficulty)}`}
                          >
                            {village.difficulty}
                          </span>
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

                      {/* Schedule Badges */}
                      <div className="hidden lg:flex items-center gap-2 ml-4">
                        {['day1', 'day2', 'day3'].map((day, idx) => {
                          const isActive = village.days[day];
                          const colors = ['bg-orange-500', 'bg-cyan-500', 'bg-purple-500'];
                          return (
                            <div
                              key={day}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                                isActive
                                  ? `${colors[idx]} text-white`
                                  : isDark
                                    ? 'bg-slate-700 text-slate-600'
                                    : 'bg-slate-100 text-slate-400'
                              }`}
                            >
                              D{idx + 1}
                            </div>
                          );
                        })}
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        className={`w-5 h-5 ml-4 transition-transform group-hover:translate-x-1 ${isDark ? 'text-slate-600 group-hover:text-orange-500' : 'text-slate-400 group-hover:text-orange-500'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Empty State */}
          {filteredVillages.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div
                className={`w-20 h-20 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} flex items-center justify-center mx-auto mb-6`}
              >
                <Search className={`w-10 h-10 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              </div>
              <p className={`text-xl font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                No villages found
              </p>
              <p className={`${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter(null);
                  setSelectedDay('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Schedule Overview */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              At a{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Glance
              </span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Quick overview of all village schedules
            </p>
          </motion.div>

          <div
            className={`rounded-3xl overflow-hidden ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-amber-500">
                    <th className="px-6 py-5 text-left font-bold text-white">Village</th>
                    <th className="px-6 py-5 text-center font-bold text-white">
                      <div className="flex flex-col items-center">
                        <span>Day 1</span>
                        <span className="text-xs font-normal opacity-80">Feb 19</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center font-bold text-white">
                      <div className="flex flex-col items-center">
                        <span>Day 2</span>
                        <span className="text-xs font-normal opacity-80">Feb 20</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center font-bold text-white">
                      <div className="flex flex-col items-center">
                        <span>Day 3</span>
                        <span className="text-xs font-normal opacity-80">Feb 21</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {villages.map((village, index) => (
                    <motion.tr
                      key={village.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className={`border-b transition-colors ${isDark ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl ${village.branding?.gradient ? '' : `bg-gradient-to-br ${village.gradient || 'from-orange-500 to-amber-500'}`}`}
                            style={village.branding ? getGradientStyle(village.branding) : {}}
                          >
                            {village.branding?.logo ? (
                              <img
                                src={village.branding.logo}
                                alt={`${village.name} logo`}
                                className="w-4 h-4 object-contain"
                                onError={e => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling?.style && (e.target.nextSibling.style.display = 'block');
                                }}
                              />
                            ) : null}
                            <village.icon className={`w-4 h-4 text-white ${village.branding?.logo ? 'hidden' : ''}`} />
                          </div>
                          <div>
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {village.shortName}
                            </p>
                            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                              {village.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      {['day1', 'day2', 'day3'].map(day => (
                        <td key={day} className="px-6 py-4 text-center">
                          {village.schedule[day] ? (
                            <div className="flex flex-col items-center">
                              <Zap className="w-4 h-4 text-green-500 mb-1" />
                              <span className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                {village.schedule[day].start}
                              </span>
                              <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                {village.schedule[day].end}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-lg ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>—</span>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillageSchedule;
