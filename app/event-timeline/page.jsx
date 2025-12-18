'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Clock, MapPin, User } from 'lucide-react';

const EventTimeline = () => {
  const { isDark } = useTheme();
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState('all');

  const eventData = {
    day1: [
      {
        time: '09:00 AM',
        title: 'Registration & Breakfast',
        type: 'registration',
        track: 'all',
        location: 'Main Lobby',
        description: 'Check-in, collect badges, and enjoy breakfast'
      },
      {
        time: '10:00 AM',
        title: 'Opening Ceremony',
        type: 'ceremony',
        track: 'all',
        location: 'Main Hall',
        description: 'Official welcome and conference kickoff',
        speaker: 'Organizing Committee'
      },
      {
        time: '10:30 AM',
        title: 'Keynote: The Future of Cybersecurity',
        type: 'keynote',
        track: 'all',
        location: 'Main Hall',
        speaker: 'Dr. Sarah Johnson',
        description: 'Exploring emerging trends in cybersecurity'
      },
      {
        time: '11:30 AM',
        title: 'Advanced Web Application Pentesting',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'John Smith',
        description: 'Hands-on workshop on modern web security techniques'
      },
      {
        time: '11:30 AM',
        title: 'Building a Security Culture in Enterprise',
        type: 'session',
        track: 'enterprise',
        location: 'Conference Room B',
        speaker: 'Emily Chen',
        description: 'Strategies for implementing security awareness'
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break',
        type: 'lunch',
        track: 'all',
        location: 'Dining Hall',
        description: 'Networking lunch with attendees'
      },
      {
        time: '02:00 PM',
        title: 'Cloud Security Deep Dive',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'Michael Rodriguez',
        description: 'Securing cloud infrastructure and services'
      },
      {
        time: '02:00 PM',
        title: 'CTF Village',
        type: 'village',
        track: 'village',
        location: 'CTF Arena',
        description: 'Capture the Flag challenges all day'
      },
      {
        time: '03:30 PM',
        title: 'Coffee Break',
        type: 'break',
        track: 'all',
        location: 'Main Lobby',
        description: 'Refreshments and networking'
      },
      {
        time: '04:00 PM',
        title: 'Mobile Security Arsenal',
        type: 'arsenal',
        track: 'technical',
        location: 'Demo Area',
        speaker: 'Alex Kumar',
        description: 'Latest mobile security tools and techniques'
      },
      {
        time: '05:30 PM',
        title: 'Day 1 Wrap-up',
        type: 'ceremony',
        track: 'all',
        location: 'Main Hall',
        description: 'Summary and announcements for Day 2'
      }
    ],
    day2: [
      {
        time: '09:00 AM',
        title: 'Breakfast & Networking',
        type: 'registration',
        track: 'all',
        location: 'Main Lobby',
        description: 'Morning refreshments'
      },
      {
        time: '10:00 AM',
        title: 'Keynote: AI-Powered Threats',
        type: 'keynote',
        track: 'all',
        location: 'Main Hall',
        speaker: 'Prof. David Lee',
        description: 'Understanding AI in modern cyber attacks'
      },
      {
        time: '11:00 AM',
        title: 'Malware Analysis Workshop',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'Jessica Williams',
        description: 'Reverse engineering and malware dissection'
      },
      {
        time: '11:00 AM',
        title: 'DevSecOps Best Practices',
        type: 'session',
        track: 'enterprise',
        location: 'Conference Room B',
        speaker: 'Robert Taylor',
        description: 'Integrating security into CI/CD pipelines'
      },
      {
        time: '12:30 PM',
        title: 'Lunch Break',
        type: 'lunch',
        track: 'all',
        location: 'Dining Hall',
        description: 'Networking lunch'
      },
      {
        time: '02:00 PM',
        title: 'IoT Security Village',
        type: 'village',
        track: 'village',
        location: 'IoT Lab',
        description: 'Hands-on IoT hacking and security'
      },
      {
        time: '02:00 PM',
        title: 'Blockchain Security Workshop',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'Priya Sharma',
        description: 'Smart contract auditing and security'
      },
      {
        time: '03:30 PM',
        title: 'Tea Break',
        type: 'break',
        track: 'all',
        location: 'Main Lobby',
        description: 'Afternoon refreshments'
      },
      {
        time: '04:00 PM',
        title: 'Red Team vs Blue Team Live Demo',
        type: 'arsenal',
        track: 'technical',
        location: 'Demo Arena',
        speaker: 'Security Team',
        description: 'Live attack and defense demonstration'
      },
      {
        time: '05:30 PM',
        title: 'Lightning Talks',
        type: 'session',
        track: 'all',
        location: 'Main Hall',
        description: '5-minute presentations from community members'
      },
      {
        time: '06:30 PM',
        title: 'Evening Networking Party',
        type: 'ceremony',
        track: 'all',
        location: 'Rooftop Terrace',
        description: 'Social event with refreshments'
      }
    ],
    day3: [
      {
        time: '09:00 AM',
        title: 'Breakfast',
        type: 'registration',
        track: 'all',
        location: 'Main Lobby',
        description: 'Morning refreshments'
      },
      {
        time: '10:00 AM',
        title: 'Keynote: Zero Trust Architecture',
        type: 'keynote',
        track: 'all',
        location: 'Main Hall',
        speaker: 'Amanda Foster',
        description: 'Implementing zero trust in modern organizations'
      },
      {
        time: '11:00 AM',
        title: 'Advanced Social Engineering',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'Chris Anderson',
        description: 'Understanding and defending against social engineering'
      },
      {
        time: '11:00 AM',
        title: 'Incident Response Strategies',
        type: 'session',
        track: 'enterprise',
        location: 'Conference Room B',
        speaker: 'Maria Garcia',
        description: 'Building effective incident response teams'
      },
      {
        time: '12:30 PM',
        title: 'Lunch Break',
        type: 'lunch',
        track: 'all',
        location: 'Dining Hall',
        description: 'Final networking lunch'
      },
      {
        time: '02:00 PM',
        title: 'Lockpicking Village',
        type: 'village',
        track: 'village',
        location: 'Physical Security Lab',
        description: 'Learn physical security and lockpicking'
      },
      {
        time: '02:00 PM',
        title: 'Bug Bounty Hunting Masterclass',
        type: 'workshop',
        track: 'technical',
        location: 'Workshop Room A',
        speaker: 'Kevin Patel',
        description: 'Finding and reporting vulnerabilities'
      },
      {
        time: '03:30 PM',
        title: 'Coffee Break',
        type: 'break',
        track: 'all',
        location: 'Main Lobby',
        description: 'Final networking break'
      },
      {
        time: '04:00 PM',
        title: 'CTF Awards Ceremony',
        type: 'ceremony',
        track: 'all',
        location: 'Main Hall',
        description: 'Announcing CTF winners and prizes'
      },
      {
        time: '05:00 PM',
        title: 'Closing Ceremony',
        type: 'ceremony',
        track: 'all',
        location: 'Main Hall',
        speaker: 'Organizing Committee',
        description: 'Conference wrap-up and thank you'
      }
    ]
  };

  const getEventsByDay = day => {
    return eventData[`day${day}`] || [];
  };

  const getFilteredEvents = () => {
    const events = getEventsByDay(selectedDay);
    if (selectedTrack === 'all') return events;
    return events.filter(event => event.track === selectedTrack || event.track === 'all');
  };

  const getTrackColor = track => {
    const colors = {
      technical: 'from-blue-400 to-blue-600',
      enterprise: 'from-gray-400 to-gray-600',
      workshop: 'from-green-400 to-green-600',
      village: 'from-cyan-400 to-cyan-600',
      all: 'from-orange-400 to-orange-600'
    };
    return colors[track] || colors.all;
  };

  const getTypeColor = type => {
    const colors = {
      registration: 'bg-purple-500',
      ceremony: 'bg-orange-500',
      keynote: 'bg-red-500',
      session: 'bg-blue-500',
      workshop: 'bg-green-500',
      village: 'bg-cyan-500',
      arsenal: 'bg-indigo-500',
      lunch: 'bg-amber-500',
      break: 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getTypeLabel = type => {
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
            Event Timeline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white font-medium drop-shadow-lg"
          >
            Seasides 2026 - Three Days of Security Excellence
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
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Day Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3].map(day => (
              <motion.button
                key={day}
                onClick={() => setSelectedDay(day)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/50'
                    : isDark
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm'
                      : 'bg-white/60 text-slate-600 hover:bg-white/80 backdrop-blur-sm'
                }`}
              >
                Day {day}
              </motion.button>
            ))}
          </div>

          {/* Track Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'technical', label: 'Technical' },
              { id: 'enterprise', label: 'Enterprise' },
              { id: 'village', label: 'Villages' }
            ].map(track => (
              <motion.button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-medium rounded-xl transition-all duration-300 ${
                  selectedTrack === track.id
                    ? isDark
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : isDark
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm'
                      : 'bg-white/60 text-slate-600 hover:bg-white/80 backdrop-blur-sm'
                }`}
              >
                {track.label}
              </motion.button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`absolute left-8 md:left-12 top-0 bottom-0 w-0.5 ${isDark ? 'bg-slate-700' : 'bg-orange-200'}`}
            />

            {/* Events */}
            <div className="space-y-6">
              {getFilteredEvents().map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-4 md:gap-8 group"
                >
                  {/* Time Indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Event Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`flex-1 rounded-2xl p-6 transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800/80 border border-slate-700/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                        : 'bg-white/80 border border-white/20 hover:shadow-2xl hover:shadow-blue-500/10'
                    } backdrop-blur-sm`}
                  >
                    <div className="space-y-3">
                      {/* Time and Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${getTypeColor(event.type)} text-white text-sm font-semibold`}
                        >
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        {event.location && (
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                              isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {event.title}
                      </h3>

                      {/* Speaker */}
                      {event.speaker && (
                        <p
                          className={`inline-flex items-center gap-2 font-semibold ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}
                        >
                          <User className="w-4 h-4" />
                          {event.speaker}
                        </p>
                      )}

                      {/* Description */}
                      <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
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

export default EventTimeline;
