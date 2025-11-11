'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { colors, gradients } from '@/lib/colors';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SponsorsPage = () => {
  const { isDark } = useTheme();
  const [, setVisibleSections] = useState(new Set());
  const [selectedTier, setSelectedTier] = useState(null);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#111827' : '#ffffff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getTierIcon = tierName => {
    const icons = {
      Diamond: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      Platinum: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      Gold: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      Silver: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      Bronze: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      'Special Supporter': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      'Community Partner': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )
    };
    return icons[tierName] || icons.Gold;
  };

  const sponsorTiers = [
    {
      tier: 'Diamond',
      color: 'from-cyan-400 to-blue-400',
      bgColor: isDark ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-400',
      glowColor: 'rgba(34, 211, 238, 0.5)',
      accentColor: '#22d3ee',
      description: 'Premier partnership tier for industry leaders',
      sponsors: []
    },
    {
      tier: 'Platinum',
      color: 'from-gray-300 to-gray-400',
      bgColor: isDark
        ? 'bg-gradient-to-r from-gray-800/30 to-gray-700/30'
        : 'bg-gradient-to-r from-gray-100 to-gray-200',
      borderColor: 'border-gray-400',
      glowColor: 'rgba(156, 163, 175, 0.5)',
      accentColor: '#9ca3af',
      description: 'Elite partners driving cybersecurity innovation',
      sponsors: []
    },
    {
      tier: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: isDark
        ? 'bg-gradient-to-r from-yellow-900/30 to-yellow-800/30'
        : 'bg-gradient-to-r from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-500',
      glowColor: 'rgba(234, 179, 8, 0.5)',
      accentColor: '#eab308',
      description: 'Key contributors advancing security excellence',
      sponsors: [
        {
          name: 'Levo.ai',
          logo: '/sponsors-2025/levo.jpg',
          website: 'https://levo.ai',
          tagline: 'Enterprise API Security Platform'
        }
      ]
    },
    {
      tier: 'Silver',
      color: 'from-gray-400 to-gray-500',
      bgColor: isDark
        ? 'bg-gradient-to-r from-gray-700/30 to-gray-600/30'
        : 'bg-gradient-to-r from-gray-50 to-gray-100',
      borderColor: 'border-gray-500',
      glowColor: 'rgba(107, 114, 128, 0.5)',
      accentColor: '#6b7280',
      description: 'Valued partners strengthening our community',
      sponsors: [
        {
          name: 'SquareX',
          logo: '/sponsors-2025/squarex.jpg',
          website: 'https://sqrx.com',
          tagline: 'Advanced Browser Security Solutions'
        }
      ]
    },
    {
      tier: 'Bronze',
      color: 'from-orange-600 to-amber-700',
      bgColor: isDark
        ? 'bg-gradient-to-r from-orange-900/30 to-amber-900/30'
        : 'bg-gradient-to-r from-orange-50 to-amber-50',
      borderColor: 'border-orange-600',
      glowColor: 'rgba(234, 88, 12, 0.5)',
      accentColor: '#ea580c',
      description: 'Supporting partners fostering security education',
      sponsors: []
    },
    {
      tier: 'Special Supporter',
      color: 'from-purple-400 to-pink-400',
      bgColor: isDark
        ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30'
        : 'bg-gradient-to-r from-purple-50 to-pink-50',
      borderColor: 'border-purple-400',
      glowColor: 'rgba(192, 132, 252, 0.5)',
      accentColor: '#c084fc',
      description: 'Strategic collaborators in cybersecurity advancement',
      sponsors: []
    },
    {
      tier: 'Community Partner',
      color: 'from-green-400 to-emerald-500',
      bgColor: isDark
        ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30'
        : 'bg-gradient-to-r from-green-50 to-emerald-50',
      borderColor: 'border-green-500',
      glowColor: 'rgba(52, 211, 153, 0.5)',
      accentColor: '#34d399',
      description: 'Ecosystem partners building the future together',
      sponsors: []
    }
  ];

  const tiersWithSponsors = sponsorTiers.filter(tier => tier.sponsors.length > 0);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 15px currentColor);
          }
          50% {
            filter: drop-shadow(0 0 30px currentColor);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes scaleUp {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .glow-animation {
          animation: glow 3s ease-in-out infinite;
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .rotate-animation {
          animation: rotate 20s linear infinite;
        }

        .scale-up-animation {
          animation: scaleUp 4s ease-in-out infinite;
        }

        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .sponsor-card-hover {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sponsor-card-hover:hover {
          transform: translateY(-15px) scale(1.08);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gradient-border {
          border-width: 2px;
          border-style: solid;
          border-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-image-slice: 1;
        }
      `}</style>

      <main
        className={`relative min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        style={{
          backgroundColor: isDark ? '#0f172a' : '#ffffff'
        }}
      >
        <Navbar />
        <div
          className={`relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
          style={{
            backgroundColor: isDark ? '#0f172a' : '#ffffff'
          }}
        >
          {/* Enhanced Animated Background Effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-3/4 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-15 blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
            <div
              className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-15 blur-3xl animate-pulse scale-up-animation"
              style={{ animationDelay: '3s' }}
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Animated Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(${isDark ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.5)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDark ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.5)'} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`
            }}
          />

          <div className="container mx-auto px-6 md:px-8 py-12 relative z-10">
            {/* Hero Section with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <div className="relative">
                <div className="relative z-10">
                  {/* Animated Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="relative w-60 h-1.5 mx-auto mb-8"
                  >
                    <div
                      className="absolute inset-0 rounded-full gradient-shift"
                      style={{
                        background: `linear-gradient(90deg, ${colors.sunsetOrange}, ${colors.deepOceanBlue}, ${colors.sunsetOrange})`
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-blue-500 blur-md opacity-60" />
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    Seasides 2026 is made possible through the generous support of our sponsors who share our commitment
                    to{' '}
                    <span className="font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      advancing cybersecurity knowledge
                    </span>{' '}
                    and
                    <span
                      className={`font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}
                    >
                      {' '}
                      fostering professional development
                    </span>{' '}
                    within the security community.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Tier Filter with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-24"
            >
              <motion.button
                onClick={() => setSelectedTier(null)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                  selectedTier === null
                    ? 'text-white shadow-2xl'
                    : isDark
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm'
                      : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 backdrop-blur-sm'
                }`}
                style={
                  selectedTier === null
                    ? {
                        background: `linear-gradient(135deg, ${colors.sunsetOrange}, ${colors.deepOceanBlue})`
                      }
                    : {}
                }
              >
                {selectedTier === null && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  />
                )}
                <span className="relative z-10">All Sponsors</span>
              </motion.button>

              {tiersWithSponsors.map((tier, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTier(tier.tier)}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                  className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 overflow-hidden ${
                    selectedTier === tier.tier
                      ? 'text-white shadow-2xl'
                      : isDark
                        ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm'
                        : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 backdrop-blur-sm'
                  }`}
                  style={
                    selectedTier === tier.tier
                      ? {
                          background: `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}dd)`
                        }
                      : {}
                  }
                >
                  {selectedTier === tier.tier && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                  )}
                  <span className={`relative z-10 ${selectedTier === tier.tier ? 'text-white' : ''}`}>
                    {getTierIcon(tier.tier)}
                  </span>
                  <span className="relative z-10">{tier.tier}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Sponsor Tiers with Enhanced Cards */}
            <AnimatePresence mode="wait">
              {tiersWithSponsors
                .filter(tier => selectedTier === null || tier.tier === selectedTier)
                .map((tier, tierIndex) => (
                  <motion.div
                    key={tier.tier}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
                    className="mb-40"
                  >
                    {/* Enhanced Tier Header */}
                    <div className="text-center mb-20 relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className={`inline-block px-10 py-5 rounded-3xl mb-8 shadow-2xl backdrop-blur-md relative overflow-hidden ${tier.bgColor} border-4 ${tier.borderColor}`}
                      >
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${tier.accentColor}40, transparent)`
                          }}
                        />
                        <div className="flex items-center gap-4 relative z-10">
                          <span className="text-3xl" style={{ color: tier.accentColor }}>
                            {getTierIcon(tier.tier)}
                          </span>
                          <span
                            className={`font-black text-2xl uppercase tracking-wider ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {tier.tier}
                          </span>
                        </div>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-5xl md:text-7xl font-black mb-6 leading-tight`}
                      >
                        <span
                          className="bg-gradient-to-r bg-clip-text text-transparent gradient-shift"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}dd, ${tier.accentColor})`
                          }}
                        >
                          {tier.tier} Tier
                        </span>
                      </motion.h2>

                      <p
                        className={`text-2xl font-medium max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    {/* Enhanced Sponsors Grid */}
                    <div
                      className={`grid gap-10 ${
                        tier.sponsors.length === 1
                          ? 'grid-cols-1 max-w-2xl mx-auto'
                          : tier.sponsors.length === 2
                            ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      }`}
                    >
                      {tier.sponsors.map((sponsor, index) => (
                        <motion.a
                          key={index}
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                          onMouseEnter={() => setHoveredSponsor(`${tier.tier}-${index}`)}
                          onMouseLeave={() => setHoveredSponsor(null)}
                          className={`sponsor-card-hover group relative rounded-3xl p-10 overflow-hidden ${
                            isDark
                              ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                              : 'bg-gradient-to-br from-white to-gray-50'
                          }`}
                          style={{
                            boxShadow:
                              hoveredSponsor === `${tier.tier}-${index}`
                                ? `0 30px 60px -15px ${tier.glowColor}, 0 0 0 3px ${tier.accentColor}33`
                                : `0 10px 30px -10px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`
                          }}
                        >
                          {/* Animated Shimmer Effect */}
                          {hoveredSponsor === `${tier.tier}-${index}` && (
                            <div className="absolute inset-0 shimmer pointer-events-none" />
                          )}

                          {/* Corner Decorations */}
                          <div
                            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                              background: `radial-gradient(circle, ${tier.glowColor}, transparent)`
                            }}
                          />
                          <div
                            className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                              background: `radial-gradient(circle, ${tier.glowColor}, transparent)`
                            }}
                          />

                          {/* Animated Border */}
                          <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                              background: `linear-gradient(135deg, ${tier.accentColor}33, transparent, ${tier.accentColor}33)`,
                              border: `3px solid ${tier.accentColor}`,
                              animation:
                                hoveredSponsor === `${tier.tier}-${index}` ? 'rotate 8s linear infinite' : 'none'
                            }}
                          />

                          {/* Enhanced Logo Container */}
                          <div className="relative h-56 mb-8 flex items-center justify-center bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 p-8">
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: `radial-gradient(circle at center, ${tier.accentColor}10, white)`
                              }}
                            />
                            <div className="relative w-full h-full">
                              <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain group-hover:scale-125 transition-transform duration-700"
                                priority
                              />
                            </div>
                          </div>

                          {/* Sponsor Details */}
                          <div className="relative z-10 text-center">
                            <h3
                              className={`text-3xl font-black mb-3 transition-colors duration-300 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {sponsor.name}
                            </h3>

                            {sponsor.tagline && (
                              <p className={`text-base mb-6 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {sponsor.tagline}
                              </p>
                            )}

                            {/* Enhanced Visit Website Button */}
                            <motion.div
                              className={`mt-8 px-8 py-4 rounded-2xl font-bold text-base opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 inline-flex items-center gap-3 shadow-lg`}
                              style={{
                                background: `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}dd)`,
                                color: 'white'
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Visit Website</span>
                              <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </motion.svg>
                            </motion.div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Enhanced Become a Sponsor CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-20 text-center transition-all duration-500 overflow-hidden shadow-2xl mb-24 group ${
                isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'
              }`}
            >
              {/* Animated Background Decorations */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center mb-10"
                >
                  <div
                    className={`p-8 rounded-full shadow-2xl relative`}
                    style={{
                      background: isDark ? gradients.warmSunset : gradients.deepOceanDepth
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-blue-500 opacity-50 blur-xl animate-pulse" />
                    <svg
                      className="w-16 h-16 text-white relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </motion.div>

                <h2
                  className={`text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r ${
                    isDark ? 'from-orange-400 to-pink-500' : 'from-blue-600 to-cyan-500'
                  } bg-clip-text text-transparent`}
                >
                  Partner With Seasides
                </h2>

                <p
                  className={`mb-14 max-w-5xl mx-auto text-2xl md:text-3xl leading-relaxed font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Join leading organizations in supporting Asia&apos;s premier cybersecurity conference. Elevate your
                  brand visibility, connect with top security professionals, and contribute to the advancement of the
                  global security community.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                  <motion.a
                    href="mailto:contact@seasides.net"
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-6 text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${colors.sunsetOrange}, ${colors.deepOceanBlue})`
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                    <div className="relative flex items-center gap-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact Sponsorship Team
                    </div>
                  </motion.a>

                  <motion.a
                    href="/call-for-sponsors"
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-12 py-6 font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl border-4 ${
                      isDark
                        ? 'border-orange-500 text-orange-400 hover:bg-orange-500/20'
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600/20'
                    }`}
                  >
                    Explore Partnership Opportunities
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
