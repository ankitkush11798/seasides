'use client';

import { Map, Users, CalendarDays, Globe, Sparkles } from 'lucide-react';
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ConferenceGlance() {
  const { isDark } = useTheme();

  const stats = [
    {
      icon: Map,
      label: 'Villages',
      value: '8+',
      description: 'Specialized security domains',
      color: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/20',
      borderColor: 'border-emerald-500'
    },
    {
      icon: Globe,
      label: 'Trainings',
      value: '10+',
      description: 'Expert-led workshops',
      color: 'from-cyan-500 to-blue-600',
      shadowColor: 'shadow-cyan-500/20',
      borderColor: 'border-cyan-500'
    },
    {
      icon: CalendarDays,
      label: 'Days of Learning',
      value: '3',
      description: 'Non-stop knowledge sharing',
      color: 'from-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/20',
      borderColor: 'border-purple-500'
    },
    {
      icon: Users,
      label: 'Expected Attendees',
      value: '1000+',
      description: 'Security professionals worldwide',
      color: 'from-orange-500 to-red-600',
      shadowColor: 'shadow-orange-500/20',
      borderColor: 'border-orange-500'
    }
  ];

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
            >
              Event Overview
            </span>
            <Sparkles className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
          </motion.div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Conference at a{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Glance</span>
          </h2>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Where brilliant minds come together to shape the future of cybersecurity
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  isDark ? 'bg-slate-800/50 backdrop-blur-sm' : 'bg-white'
                } rounded-2xl p-6 border-2 ${
                  isDark ? 'border-slate-700 shadow-lg' : 'border-gray-200 shadow-md'
                } overflow-hidden`}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className={`p-4 rounded-2xl mb-4 bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-center p-8 rounded-2xl border-2 ${
            isDark
              ? 'bg-slate-800/30 border-slate-700 backdrop-blur-sm'
              : 'bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200'
          }`}
        >
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Join us for an unforgettable experience filled with{' '}
            <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>learning</span>,{' '}
            <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>networking</span>, and{' '}
            <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>innovation</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
