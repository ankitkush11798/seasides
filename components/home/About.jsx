'use client';

import React from 'react';
import { ArrowRight, Users, Calendar, Award, Globe, Zap, Shield } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function AboutTheConference() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: Users,
      title: '500+ Attendees',
      description: 'Security professionals & enthusiasts'
    },
    {
      icon: Calendar,
      title: '3 Days',
      description: 'Feb 19-21, 2026'
    },
    {
      icon: Award,
      title: 'Expert Speakers',
      description: 'Industry-leading professionals'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with worldwide talent'
    },
    {
      icon: Zap,
      title: 'Hands-on Labs',
      description: 'Practical training sessions'
    },
    {
      icon: Shield,
      title: '100% Free',
      description: 'No cost, maximum value'
    }
  ];

  return (
    <section
      className={`relative py-20 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-orange-50 via-white to-orange-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About The Conference
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                : 'bg-gradient-to-r from-orange-500 to-orange-600'
            }`}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                To stay ahead in the rapidly changing world of security, continuous learning and meaningful connections
                are key. As cyber threats grow in complexity, sharpening our expertise becomes essential.
              </p>

              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  Seasides Conference
                </span>{' '}
                provides the perfect platform to keep pace with this evolution.
              </p>

              <div
                className={`p-6 rounded-2xl border-2 ${
                  isDark ? 'bg-slate-800/50 border-orange-500/30' : 'bg-white border-orange-200'
                }`}
              >
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Join us on{' '}
                  <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                    February 19–21, 2026
                  </span>{' '}
                  at the International Centre Goa, where you'll gain valuable knowledge from industry leaders. With
                  free, high-quality training sessions, we're building a community-driven experience that reflects the
                  spirit of global events such as <span className="font-semibold">Blackhat</span> and{' '}
                  <span className="font-semibold">Defcon</span>.
                </p>
              </div>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                  isDark
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/50'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/50'
                }`}
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Video Highlight */}
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl border-2 ${
                isDark ? 'border-orange-500/30' : 'border-orange-200'
              }`}
            >
              <div className={`px-4 py-3 ${isDark ? 'bg-slate-800' : 'bg-orange-100'}`}>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Conference Highlights
                </h3>
              </div>
              <div className="w-full aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/wmB01yWTaFk?autoplay=1&mute=1"
                  title="Seasides Conference Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
