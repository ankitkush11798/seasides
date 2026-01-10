'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Anchor, BarChart3, Bot, Calendar, CheckCircle, Cloud, Drama, MapPin, Search, Wrench } from 'lucide-react';
import { useState } from 'react';

const VillageSchedule = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState('all');

  const villages = [
    {
      name: 'AI Security Village',
      description: 'Explore AI/ML security, adversarial attacks, and LLM vulnerabilities',
      location: 'Tech Hub - Room A',
      days: {
        day1: true,
        day2: true,
        day3: true
      },
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      schedule: {
        day1: '10:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 04:00 PM'
      }
    },
    {
      name: 'Cloud Security Village',
      description: 'Hands-on AWS, Azure, and GCP security testing and best practices',
      location: 'Tech Hub - Room C',
      days: {
        day1: true,
        day2: true,
        day3: true
      },
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      schedule: {
        day1: '10:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 04:00 PM'
      }
    },
    {
      name: 'Hardware Hacking Village',
      description: 'IoT security, firmware analysis, and hardware exploitation',
      location: 'Maker Space',
      days: {
        day1: true,
        day2: true,
        day3: true
      },
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      schedule: {
        day1: '11:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 03:00 PM'
      }
    },
    {
      name: 'Kubernetes Security Village',
      description: 'Container security, Container security hardening, and cloud-native security',
      location: 'Tech Hub - Room D',
      days: {
        day1: false,
        day2: true,
        day3: true
      },
      icon: Anchor,
      color: 'from-cyan-500 to-cyan-600',
      schedule: {
        day1: null,
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 04:00 PM'
      }
    },
    {
      name: 'SAST/SCA Village',
      description: 'Static analysis, software composition, and secure code review',
      location: 'Tech Hub - Room E',
      days: {
        day1: true,
        day2: true,
        day3: false
      },
      icon: BarChart3,
      color: 'from-indigo-500 to-indigo-600',
      schedule: {
        day1: '10:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: null
      }
    },
    {
      name: 'Social Engineering Village',
      description: 'Physical security, lockpicking, and human hacking techniques',
      location: 'Interactive Zone',
      days: {
        day1: true,
        day2: true,
        day3: true
      },
      icon: Drama,
      color: 'from-pink-500 to-pink-600',
      schedule: {
        day1: '10:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 04:00 PM'
      }
    },
    {
      name: 'Threat Hunting Village',
      description: 'Incident response, threat intelligence, and malware analysis',
      location: 'Tech Hub - Room F',
      days: {
        day1: true,
        day2: true,
        day3: true
      },
      icon: Search,
      color: 'from-orange-500 to-orange-600',
      schedule: {
        day1: '10:00 AM - 05:00 PM',
        day2: '10:00 AM - 05:00 PM',
        day3: '10:00 AM - 04:00 PM'
      }
    }
  ];

  const getFilteredVillages = () => {
    if (selectedDay === 'all') return villages;
    return villages.filter(village => village.days[selectedDay]);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600 w-full" />
        <div className="absolute inset-0 bg-black/20 w-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Village Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white font-medium drop-shadow-lg"
          >
            Interactive learning spaces focused on hands-on security topics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-white mx-auto rounded-full mt-6"
          />
        </div>
      </section>

      {/* Main Content */}
      <section
        className={`${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-orange-50 via-white to-orange-50'} py-16 w-full`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Day Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Days' },
              { id: 'day1', label: 'Day 1 - Feb 19' },
              { id: 'day2', label: 'Day 2 - Feb 20' },
              { id: 'day3', label: 'Day 3 - Feb 21' }
            ].map(day => (
              <motion.button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-bold rounded-2xl transition-all duration-300 shadow-lg ${
                  selectedDay === day.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/50'
                    : isDark
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm'
                      : 'bg-white/60 text-slate-600 hover:bg-white/80 backdrop-blur-sm'
                }`}
              >
                {day.label}
              </motion.button>
            ))}
          </div>

          {/* Schedule Table View */}
          <div className="mb-16 overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                isDark ? 'bg-slate-800/80 border border-slate-700/50' : 'bg-white/80 border border-white/20'
              } backdrop-blur-sm`}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}>
                      <th className={`px-6 py-4 text-left font-bold text-white`}>Village</th>
                      <th className="px-6 py-4 text-center font-bold text-white">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Day 1 - Feb 19
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold text-white">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Day 2 - Feb 20
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold text-white">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Day 3 - Feb 21
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {villages.map((village, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`border-b ${
                          isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-gray-200 hover:bg-orange-50/50'
                        } transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${village.color}`}>
                              <village.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {village.name}
                              </h3>
                              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                                {village.location}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {village.days.day1 ? (
                            <div className="flex flex-col items-center gap-1">
                              <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                              <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                                {village.schedule.day1}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-2xl ${isDark ? 'text-slate-700' : 'text-gray-300'}`}>—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {village.days.day2 ? (
                            <div className="flex flex-col items-center gap-1">
                              <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                              <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                                {village.schedule.day2}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-2xl ${isDark ? 'text-slate-700' : 'text-gray-300'}`}>—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {village.days.day3 ? (
                            <div className="flex flex-col items-center gap-1">
                              <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                              <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                                {village.schedule.day3}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-2xl ${isDark ? 'text-slate-700' : 'text-gray-300'}`}>—</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Village Cards */}
          <div className="mb-8">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Village Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredVillages().map((village, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800/80 border border-slate-700/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                      : 'bg-white/80 border border-white/20 hover:shadow-2xl hover:shadow-orange-500/10'
                  } backdrop-blur-sm`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${village.color} p-6 text-white`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <village.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold">{village.name}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <p className={`${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{village.description}</p>

                    <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{village.location}</span>
                    </div>

                    {/* Schedule for each day */}
                    <div className="space-y-2">
                      {village.days.day1 && (
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                            Day 1:
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}>
                            {village.schedule.day1}
                          </span>
                        </div>
                      )}
                      {village.days.day2 && (
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                            Day 2:
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}>
                            {village.schedule.day2}
                          </span>
                        </div>
                      )}
                      {village.days.day3 && (
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                            Day 3:
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}>
                            {village.schedule.day3}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Active Days Indicator */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-700/50">
                      <CheckCircle className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        Active on {[village.days.day1, village.days.day2, village.days.day3].filter(Boolean).length} day
                        {[village.days.day1, village.days.day2, village.days.day3].filter(Boolean).length > 1
                          ? 's'
                          : ''}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillageSchedule;
