'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { events, speakers, trainingSessions } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  Linkedin,
  MapPin,
  Sparkles,
  Target,
  Twitter,
  User,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const EventDetailPage = () => {
  const { id } = useParams();
  const { isDark } = useTheme();

  // Find the event across all days
  let event = null;
  let eventDay = null;

  for (const [day, dayEvents] of Object.entries(events)) {
    const foundEvent = dayEvents.find(e => e.id === id);
    if (foundEvent) {
      event = foundEvent;
      eventDay = day.replace('day', '');
      break;
    }
  }

  // Get training session for more details if available
  const trainingSession = trainingSessions?.find(t => t.id === id);

  if (!event) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="text-center">
          <div
            className={`w-24 h-24 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} flex items-center justify-center mx-auto mb-6`}
          >
            <Calendar className={`w-12 h-12 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            The event you are looking for does not exist.
          </p>
          <Link
            href="/event-timeline"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Schedule
          </Link>
        </div>
      </div>
    );
  }

  const eventSpeakers = event.speakerIds
    ? event.speakerIds.map(speakerId => speakers.find(s => s.id === speakerId)).filter(Boolean)
    : event.speakerId
      ? [speakers.find(s => s.id === event.speakerId)].filter(Boolean)
      : [];

  const getTypeGradient = type => {
    const gradients = {
      registration: 'from-indigo-500 to-indigo-600',
      keynote: 'from-red-500 to-rose-600',
      session: 'from-blue-600 to-blue-700',
      workshop: 'from-emerald-500 to-teal-600',
      village: 'from-orange-500 to-amber-600',
      arsenal: 'from-purple-600 to-purple-700',
      lunch: 'from-amber-500 to-amber-600',
      break: 'from-pink-500 to-pink-600'
    };
    return gradients[type] || 'from-gray-500 to-gray-600';
  };

  const dayDates = {
    1: 'February 19, 2026',
    2: 'February 20, 2026',
    3: 'February 21, 2026'
  };

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFullDescOpen, setIsFullDescOpen] = useState(false);

  const handleShare = platform => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `Check out "${event?.title}" at Seasides 2026!`;

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        '_blank'
      );
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'agenda', label: 'Agenda', icon: Target },
    { id: 'prerequisites', label: 'Prerequisites', icon: Users }
  ].filter(tab => event.details?.[tab.id]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-10 md:pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${getTypeGradient(event.type)} opacity-10`} />
          <div
            className={`absolute inset-0 opacity-[0.02]`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div
            className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${getTypeGradient(event.type)} blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2`}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 md:mb-8">
            <Link
              href="/event-timeline"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                isDark
                  ? 'text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white'
              } backdrop-blur-sm shadow-sm`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Schedule
            </Link>
          </motion.div>

          {/* Main Header */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Left - Main Info */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  <span
                    className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r ${getTypeGradient(event.type)} shadow-lg`}
                  >
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    {event.type}
                  </span>
                  {event.track !== 'all' && (
                    <span
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-white text-slate-600 border border-slate-200'}`}
                    >
                      {event.track}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1
                  className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {event.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                  <div
                    className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl text-sm md:text-base ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm shadow-lg`}
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Day {eventDay} • {dayDates[eventDay]}
                    </span>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl text-sm md:text-base ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm shadow-lg`}
                  >
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{event.time}</span>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl text-sm md:text-base ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm shadow-lg`}
                  >
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Goa, India</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base md:text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      Register Now
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right - Speaker Preview Card */}
            {eventSpeakers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`rounded-3xl overflow-hidden ${isDark ? 'bg-slate-800/80' : 'bg-white'} backdrop-blur-sm shadow-2xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <div className={`h-2 bg-gradient-to-r ${getTypeGradient(event.type)}`} />
                <div className="p-5 md:p-6">
                  <h3
                    className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {eventSpeakers.length === 1 ? 'Trainer' : 'Trainers'}
                  </h3>
                  <div className="space-y-4">
                    {eventSpeakers.slice(0, 2).map(speaker => {
                      const isPlaceholder = speaker.image?.includes('placeholder');

                      if (isPlaceholder) {
                        return (
                          <div key={speaker.id} className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border-2 border-transparent flex-shrink-0 ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}
                            >
                              <User className={`w-6 h-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`font-bold truncate text-sm md:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}
                              >
                                {speaker.name}
                              </p>
                              <p
                                className={`text-xs md:text-sm truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                {speaker.role}
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={speaker.id}
                          href={`/speakers/${speaker.id}`}
                          className="group flex items-center gap-4"
                        >
                          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-colors flex-shrink-0">
                            <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`font-bold truncate text-sm md:text-base group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                            >
                              {speaker.name}
                            </p>
                            <p
                              className={`text-xs md:text-sm truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                            >
                              {speaker.role}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'} group-hover:text-orange-500 transition-colors`}
                          />
                        </Link>
                      );
                    })}
                    {eventSpeakers.length > 2 && (
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        +{eventSpeakers.length - 2} more trainers
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-10 md:py-16 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Tabs Navigation */}
              {tabs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex overflow-x-auto md:flex-wrap gap-2 p-1.5 md:p-2 rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}
                >
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-none md:flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-4 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                            : isDark
                              ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}

              {/* Tab Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-3xl p-5 md:p-8 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <h2
                  className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {tabs.find(t => t.id === activeTab)?.label || 'About This Session'}
                </h2>

                {event.details && event.details[activeTab] ? (
                  <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                    <div
                      className={`text-base md:text-lg leading-relaxed whitespace-pre-wrap break-words ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                      {event.details[activeTab]}
                    </div>
                  </div>
                ) : (
                  <p
                    className={`text-base md:text-lg leading-relaxed whitespace-pre-wrap break-words ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                  >
                    {event.description}
                  </p>
                )}

                {/* Collapsible Full Description */}
                {(trainingSession?.fullDescription || event.fullDescription) && (
                  <div className={`mt-6 pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <button
                      onClick={() => setIsFullDescOpen(!isFullDescOpen)}
                      className={`w-full flex items-center justify-between gap-3 py-3 px-4 rounded-xl transition-all ${
                        isDark
                          ? 'bg-slate-700/50 hover:bg-slate-700 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <span className="text-sm md:text-base font-semibold">Full Description</span>
                      </div>
                      <motion.div animate={{ rotate: isFullDescOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown
                          className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                        />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isFullDescOpen ? 'auto' : 0,
                        opacity: isFullDescOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-4 mt-2`}>
                        <p
                          className={`text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                        >
                          {trainingSession?.fullDescription || event.fullDescription}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Full Speaker Cards */}
              {eventSpeakers.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Meet the {eventSpeakers.length === 1 ? 'Trainer' : 'Trainers'}
                  </h3>
                  <div className="space-y-4">
                    {eventSpeakers.map((speaker, index) => {
                      const isPlaceholder = speaker.image?.includes('placeholder');

                      if (isPlaceholder) {
                        return (
                          <motion.div
                            key={speaker.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className={`rounded-2xl p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'} flex items-center gap-4`}
                          >
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}
                            >
                              <User className={`w-6 h-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                            </div>
                            <div>
                              <h4
                                className={`font-bold text-base md:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}
                              >
                                {speaker.name}
                              </h4>
                              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                {speaker.role}
                              </p>
                            </div>
                          </motion.div>
                        );
                      }

                      return (
                        <Link key={speaker.id} href={`/speakers/${speaker.id}`} className="group block">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                          >
                            {/* Image */}
                            <div className="relative h-48 sm:h-56 md:h-48 overflow-hidden">
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <h4 className="text-white font-bold text-lg">{speaker.name}</h4>
                                <p className="text-white/80 text-sm">{speaker.role}</p>
                              </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 md:p-5">
                              {speaker.company && (
                                <p
                                  className={`text-sm font-medium mb-3 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                                >
                                  {speaker.company}
                                </p>
                              )}
                              <p className={`text-sm line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                {speaker.bio}
                              </p>
                              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex gap-2">
                                  {speaker.social?.linkedin && (
                                    <span className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                      <Linkedin className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                                    </span>
                                  )}
                                  {speaker.social?.twitter && (
                                    <span className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                      <Twitter className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                                    </span>
                                  )}
                                </div>
                                <span className="text-orange-500 text-sm font-semibold group-hover:underline">
                                  View Profile →
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`rounded-2xl p-5 md:p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-orange-50'}`}>
                      <Calendar className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Date</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {dayDates[eventDay]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-orange-50'}`}>
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Time</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-orange-50'}`}>
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Location</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Goa, India</p>
                    </div>
                  </div>
                </div>

                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
