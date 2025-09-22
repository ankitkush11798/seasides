'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { colors, gradients, shadows } from '@/lib/colors';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const SponsorsPage = () => {
  const { isDark } = useTheme();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  // Force body background color
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#111827' : '#ffffff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDark]);

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
  const sponsorTiers = [
    {
      title: 'Diamond Partners',
      description: 'Leading the cybersecurity revolution',
      sponsors: [
        { name: 'HackerOne', logo: '/sponsors/hackerone.png', tier: 'diamond' },
        { name: 'Bugcrowd', logo: '/sponsors/bugcrowd.png', tier: 'diamond' }
      ],
      gradient: 'from-cyan-600 to-blue-700',
      glow: 'shadow-cyan-400/40'
    },
    {
      title: 'Platinum Partners',
      description: 'Pioneering cybersecurity excellence',
      sponsors: [
        { name: 'Checkmarx', logo: '/sponsors/checkmarx.png', tier: 'platinum' },
        { name: 'DNIF', logo: '/sponsors/dnif.png', tier: 'platinum' },
        { name: 'ArmorCode', logo: '/sponsors/armorcode.png', tier: 'platinum' },
        { name: 'XBiz Ventures', logo: '/sponsors/xbiz.png', tier: 'platinum' },
        { name: 'CloudSek', logo: '/sponsors/cloudsek.png', tier: 'platinum' }
      ],
      gradient: 'from-gray-600 to-gray-800',
      glow: 'shadow-gray-400/30'
    },
    {
      title: 'Goodie Bag Sponsor',
      description: 'Making the conference memorable',
      sponsors: [{ name: 'RiskProfiler', logo: '/sponsors/riskprofiler.png', tier: 'goodie' }],
      gradient: 'from-purple-600 to-indigo-800',
      glow: 'shadow-purple-400/30'
    },
    {
      title: 'Gold Supporters',
      description: 'Powering innovation in security',
      sponsors: [
        { name: 'SecureLayer7', logo: '/sponsors/securelayer7.png', tier: 'gold' },
        { name: 'Enciphers', logo: '/sponsors/enciphers.png', tier: 'gold' },
        { name: 'ComplianceCow', logo: '/sponsors/compliancecow.png', tier: 'gold' },
        { name: 'Network Intelligence', logo: '/sponsors/networkintel.png', tier: 'gold' },
        { name: 'Altered Security', logo: '/sponsors/altered.png', tier: 'gold' },
        { name: 'HighRadius', logo: '/sponsors/highradius.png', tier: 'gold' },
        { name: 'Cobalt', logo: '/sponsors/cobalt.png', tier: 'gold' }
      ],
      gradient: 'from-yellow-600 to-amber-700',
      glow: 'shadow-yellow-400/30'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sponsorFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .sponsor-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sponsor-card:hover {
          animation: sponsorFloat 2s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .stagger-animation {
          opacity: 0;
        }

        .stagger-animation.visible {
          opacity: 1;
        }
      `}</style>

      <main
        className={`relative min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        style={{
          backgroundColor: isDark ? '#111827' : '#ffffff'
        }}
      >
        <Navbar />
        <div
          className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}
          style={{
            backgroundColor: isDark ? '#111827' : '#ffffff'
          }}
        >
          {/* Animated Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </div>

          {/* Cyber Grid Background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="container mx-auto px-8 py-20 relative z-10">
            {/* Hero Section */}
            <div
              ref={el => (sectionRefs.current[0] = el)}
              className={`text-center mb-24 ${visibleSections.has(0) ? 'fade-in-up' : 'stagger-animation'}`}
            >
              <div className="relative">
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${colors.sunsetOrange}10, ${colors.deepOceanBlue}10)`
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full shadow-2xl mb-8"
                    style={{
                      background: gradients.deepOceanDepth
                    }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>

                  <h1
                    className={`text-6xl md:text-7xl font-black mb-8 leading-tight`}
                    style={{
                      color: isDark ? colors.white : colors.deepOceanBlue
                    }}
                  >
                    <span style={{ color: colors.sunsetOrange }}>Our Amazing</span>
                    <br />
                    Sponsors
                  </h1>

                  <div
                    className="w-48 h-2 mx-auto mb-10 rounded-full shadow-lg"
                    style={{
                      background: gradients.warmSunset
                    }}
                  />

                  <p
                    className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    We are incredibly grateful to our{' '}
                    <span className="font-bold" style={{ color: colors.sunsetOrange }}>
                      valued sponsors
                    </span>{' '}
                    who make this
                    <span className={`font-bold`} style={{ color: isDark ? '#60a5fa' : colors.deepOceanBlue }}>
                      {' '}
                      free conference possible
                    </span>{' '}
                    and support the
                    <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      {' '}
                      cybersecurity community&apos;s growth
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Become a Sponsor CTA */}
            <div
              className={`relative rounded-3xl p-12 mb-24 text-center transition-all duration-500 overflow-hidden shadow-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-gray-900/95 to-gray-800/95'
                  : 'bg-gradient-to-br from-white/95 to-gray-50/95'
              } ${visibleSections.has(0) ? 'scale-in' : 'stagger-animation'} group`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sunset-orange/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-deep-ocean/15 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`p-4 rounded-full shadow-xl`}
                    style={{
                      background: isDark ? gradients.warmSunset : gradients.deepOceanDepth
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                </div>

                <h2
                  className={`text-4xl md:text-5xl font-bold mb-6`}
                  style={{
                    color: isDark ? colors.sunsetOrange : colors.deepOceanBlue
                  }}
                >
                  Become a Sponsor
                </h2>

                <p
                  className={`mb-10 max-w-4xl mx-auto text-xl leading-relaxed font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Join us in making cybersecurity education accessible to all. Partner with Seasides and be part of
                  something meaningful that impacts thousands of professionals globally.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <button
                    onClick={() =>
                      window.open(
                        'mailto:support@seasidestech.com?subject=Sponsorship Inquiry - Seasides 2026',
                        '_blank'
                      )
                    }
                    className="group relative px-10 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                    style={{
                      backgroundColor: colors.deepOceanBlue,
                      boxShadow: shadows.buttonShadow
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact Sponsorship Team
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      window.open('https://village.scagoat.dev/static/media/pdf/SeasidesSponsorship_2025.pdf', '_blank')
                    }
                    className="group relative px-10 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                    style={{
                      backgroundColor: colors.sunsetOrange,
                      boxShadow: shadows.buttonShadow
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Sponsorship Deck
                    </div>
                  </button>
                </div>

                <div
                  className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : ''}`}
                  style={{
                    backgroundColor: isDark ? undefined : `${colors.deepOceanBlue}0D`
                  }}
                >
                  <p
                    className={`text-base font-medium`}
                    style={{
                      color: isDark ? '#d1d5db' : colors.deepOceanBlue
                    }}
                  >
                    Looking for custom sponsorship packages? Let&apos;s discuss how we can create the perfect
                    partnership for your brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Sponsor Tiers */}
            {sponsorTiers.map((tier, tierIndex) => (
              <div
                key={tierIndex}
                ref={el => (sectionRefs.current[tierIndex + 1] = el)}
                className={`mb-32 ${
                  visibleSections.has(tierIndex + 1)
                    ? tierIndex % 2 === 0
                      ? 'slide-in-left'
                      : 'slide-in-right'
                    : 'stagger-animation'
                }`}
              >
                {/* Tier Header */}
                <div className="text-center mb-16 relative">
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-3 blur-sm"
                    style={{
                      background: `linear-gradient(to right, transparent, ${colors.sunsetOrange}33, transparent)`
                    }}
                  />

                  <div
                    className={`inline-block px-8 py-4 rounded-full mb-6 shadow-xl backdrop-blur-sm ${
                      tierIndex === 0
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                        : tierIndex === 1
                          ? 'bg-gradient-to-r from-gray-400/20 to-gray-600/20'
                          : tierIndex === 2
                            ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                            : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20'
                    }`}
                  >
                    <span
                      className={`font-bold text-base uppercase tracking-wider ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {tier.title}
                    </span>
                  </div>

                  <h2
                    className={`text-5xl md:text-6xl font-black mb-6 leading-tight`}
                    style={{
                      color: isDark ? colors.white : colors.charcoalGray
                    }}
                  >
                    <span className={`bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                      {tier.title}
                    </span>
                  </h2>

                  <p className={`text-xl font-medium max-w-2xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Sponsors Grid */}
                <div
                  className={`grid gap-10 ${
                    tier.sponsors.length === 1
                      ? 'grid-cols-1 max-w-md mx-auto'
                      : tier.sponsors.length === 2
                        ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}
                >
                  {tier.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`sponsor-card group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 transform-gpu ${
                        isDark
                          ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 hover:shadow-sunset-orange/20'
                          : 'bg-gradient-to-br from-white/95 to-gray-50/95 hover:shadow-sunset-orange/20'
                      } ${visibleSections.has(tierIndex + 1) ? 'scale-in' : 'stagger-animation'}`}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                        transform: visibleSections.has(tierIndex + 1) ? 'none' : 'scale(0.8)'
                      }}
                    >
                      {/* Background decorations */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sunset-orange/15 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-deep-ocean/15 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Logo container */}
                      <div className="relative h-32 mb-8 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                        />

                        {/* Tier badge */}
                        <div
                          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            tierIndex === 0
                              ? 'bg-cyan-500 text-white'
                              : tierIndex === 1
                                ? 'bg-gray-500 text-white'
                                : tierIndex === 2
                                  ? 'bg-purple-500 text-white'
                                  : 'bg-yellow-500 text-white'
                          }`}
                        >
                          {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                        </div>
                      </div>

                      {/* Sponsor name */}
                      <h3
                        className={`text-xl font-bold text-center mb-6 transition-colors duration-300`}
                        style={{
                          color: isDark ? '#e5e7eb' : colors.charcoalGray
                        }}
                      >
                        {sponsor.name}
                      </h3>

                      {/* Interaction hint */}
                      <div
                        className={`text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 px-4 py-2 rounded-lg`}
                        style={{
                          color: isDark ? colors.sunsetOrange : colors.deepOceanBlue,
                          backgroundColor: isDark ? `${colors.sunsetOrange}1A` : `${colors.deepOceanBlue}1A`
                        }}
                      >
                        Thank you for supporting Seasides
                      </div>

                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute inset-0 rounded-2xl shadow-lg ${
                            tierIndex === 0
                              ? 'shadow-cyan-400/20'
                              : tierIndex === 1
                                ? 'shadow-gray-400/20'
                                : tierIndex === 2
                                  ? 'shadow-purple-400/20'
                                  : 'shadow-yellow-400/20'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Why Sponsor Seasides */}
            <div
              ref={el => (sectionRefs.current[sponsorTiers.length + 1] = el)}
              className={`rounded-3xl p-12 text-center transition-all duration-500 hover:shadow-2xl shadow-lg mb-20 ${
                isDark ? 'bg-gray-900/95 hover:shadow-sunset-orange/20' : 'bg-white/95 hover:shadow-sunset-orange/20'
              } ${visibleSections.has(sponsorTiers.length + 1) ? 'fade-in-up' : 'stagger-animation'}`}
            >
              <h2
                className={`text-4xl md:text-5xl font-bold mb-12`}
                style={{
                  color: isDark ? colors.sunsetOrange : colors.deepOceanBlue
                }}
              >
                Why Sponsor Seasides?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    text: 'Reach 2,500+ cybersecurity professionals and enthusiasts',
                    bgColor: `${colors.deepOceanBlue}1A`
                  },
                  { text: 'Global audience with participants from 30+ countries', bgColor: `${colors.sunsetOrange}1A` },
                  {
                    text: 'Associate your brand with cutting-edge security innovation',
                    bgColor: 'rgba(147, 51, 234, 0.1)'
                  },
                  {
                    text: "Support the cybersecurity community's education and growth",
                    bgColor: 'rgba(34, 197, 94, 0.1)'
                  },
                  {
                    text: 'Generate leads and build meaningful business relationships',
                    bgColor: 'rgba(37, 99, 235, 0.1)'
                  },
                  { text: "Be part of India's most loved cybersecurity conference", bgColor: 'rgba(236, 72, 153, 0.1)' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md group ${
                      visibleSections.has(sponsorTiers.length + 1) ? 'slide-in-left' : 'stagger-animation'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      backgroundColor: item.bgColor
                    }}
                  >
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span
                      className={`text-lg font-semibold leading-relaxed relative z-10`}
                      style={{
                        color: isDark ? colors.white : colors.charcoalGray
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
