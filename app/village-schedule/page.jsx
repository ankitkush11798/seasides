'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { villages as villagesData } from '@/lib/villageData';
import { getDayColor, getGradientStyle, getSessionTypeBadgeClasses } from '@/lib/villageUtils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Clock, MapPin, Mic, Search, Sparkles, User } from 'lucide-react';
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
        </div>
      </section>

      {/* Villages Content */}
      <section className={`py-12 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredVillages.map((village, index) => {
                  const isExpanded = expandedVillage === village.id;
                  const hasSessions = village.sessions && Object.keys(village.sessions).length > 0;
                  const hasTeam = village.team && village.team.length > 0;
                  const showDetails = hasSessions || hasTeam;

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

                          {/* Details Toggle Button */}
                          {showDetails && (
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
                              {isExpanded ? 'Hide Details' : 'View Details'}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              />
                            </button>
                          )}

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
                                )}

                                {/* Team Section */}
                                {hasTeam && (
                                  <div
                                    className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                                  >
                                    <h4
                                      className={`text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
                                    >
                                      Meet The Team
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                      {village.team.map((member, idx) => (
                                        <div
                                          key={idx}
                                          className={`p-3 rounded-xl ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}
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

                          {/* Hover Arrow - only show when not expanded */}
                          {!showDetails && (
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
      <Footer />
    </div>
  );
};

export default VillageSchedule;
