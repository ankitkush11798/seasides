'use client';
import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

const SponsorsPage = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#0f172a' : '#ffffff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDark]);

  const sponsorTiers = [
    {
      tier: 'Diamond',
      color: 'from-cyan-400 to-blue-500',
      textColor: isDark ? 'text-cyan-400' : 'text-cyan-600',
      sponsors: [{ logo: '/sponsors-2025/securelayer7.png', website: 'https://securelayer7.net', isLight: true }]
    },
    {
      tier: 'Platinum',
      color: 'from-slate-300 to-slate-400',
      textColor: isDark ? 'text-slate-300' : 'text-slate-600',
      sponsors: [{ logo: '/sponsors-2025/dnif.png', website: 'https://dnif.it' }]
    },
    {
      tier: 'Gold',
      color: 'from-yellow-400 to-amber-500',
      textColor: isDark ? 'text-yellow-400' : 'text-yellow-600',
      sponsors: [
        { logo: '/sponsors-2025/nii.png', website: 'https://nii.ac.in' },
        { logo: '/sponsors-2025/altered_security.png', website: 'https://alteredsecurity.com' },
        { logo: '/sponsors-2025/levo.webp', website: 'https://levo.ai' },
        { logo: '/sponsors-2025/loginsoft.svg', website: 'https://loginsoft.com' },
        { logo: '/sponsors-2025/enciphers.webp', website: 'https://enciphers.com' },
        { logo: '/sponsors-2025/semgrep-1.png', website: 'https://semgrep.dev' }
      ]
    },
    {
      tier: 'Silver',
      color: 'from-gray-300 to-gray-400',
      textColor: isDark ? 'text-gray-300' : 'text-gray-500',
      sponsors: [
        { logo: '/sponsors-2025/domdog.svg', website: 'https://domdog.io' },
        { logo: '/sponsors-2025/sqrx-logo-white.png', website: 'https://sqrx.com' },
        { logo: '/sponsors-2025/clouddefenseai.png', website: 'https://clouddefense.ai', isLight: true },
        { logo: '/sponsors-2025/pureid.webp', website: 'https://pureid.io' },
        { logo: '/sponsors-2025/redhuntlabs.webp', website: 'https://redhuntlabs.com' },
        { logo: '/sponsors-2025/appsecuresecurity.webp', website: 'https://appsecure.security' },
        { logo: '/sponsors-2025/oligo-security.svg', website: 'https://oligo.security' },
        { logo: '/sponsors-2025/Offenso-Logo-black-02.png', website: 'https://offensoacademy.com' },
        { logo: '/sponsors-2025/delve.jpg', website: 'https://delve.co' },
        { logo: '/sponsors-2025/payatu.png', website: 'https://payatu.com' }
      ]
    },
    {
      tier: 'Bronze',
      color: 'from-orange-400 to-orange-600',
      textColor: isDark ? 'text-orange-400' : 'text-orange-600',
      sponsors: [
        { logo: '/sponsors-2025/datatheorem.webp', website: 'https://datatheorem.com' },
        { logo: '/sponsors-2025/appknoxlogo.webp', website: 'https://appknox.com' },
        { logo: '/sponsors-2025/kloudle.svg', website: 'https://kloudle.com' },
        { logo: '/sponsors-2025/endorlabs.webp', website: 'https://endorlabs.com' },
        { logo: '/sponsors-2025/corgea.png', website: 'https://corgea.com', isLight: true }
      ]
    }
  ];

  const tiersWithSponsors = sponsorTiers.filter(tier => tier.sponsors.length > 0);

  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .slider-left {
          animation: scroll-left 75s linear infinite;
        }
        .slider-right {
          animation: scroll-right 75s linear infinite;
        }
        .slider-left:hover,
        .slider-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <main className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <Navbar />

        <div className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
          {/* Page Header */}
          <div className="text-center mb-20 px-6">
            <h1
              className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Sponsors
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Grateful to these amazing organizations for making Seasides 2026 possible
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-20">
            {tiersWithSponsors.map((tier, tierIndex) => {
              const isSingleSponsor = tier.sponsors.length === 1;
              const duplicatedSponsors = [...tier.sponsors, ...tier.sponsors, ...tier.sponsors, ...tier.sponsors];
              const isEven = tierIndex % 2 === 0;

              return (
                <div key={tier.tier}>
                  {/* Tier Header */}
                  <div className="flex items-center justify-center gap-4 mb-10 px-6">
                    <div className={`h-px flex-1 max-w-32 bg-gradient-to-r ${tier.color} opacity-50`} />
                    <h3 className={`text-2xl md:text-3xl font-black ${tier.textColor} uppercase tracking-wider`}>
                      {tier.tier}
                    </h3>
                    <div className={`h-px flex-1 max-w-32 bg-gradient-to-l ${tier.color} opacity-50`} />
                  </div>

                  {isSingleSponsor ? (
                    /* Single Sponsor - Featured Display */
                    <div className="flex justify-center px-6">
                      <a href={tier.sponsors[0].website} target="_blank" rel="noopener noreferrer" className="group">
                        <div
                          className={`relative w-72 h-44 md:w-96 md:h-56 ${tier.sponsors[0].isLight ? 'bg-slate-700' : 'bg-gray-100'} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                            isDark ? 'shadow-cyan-500/10 hover:shadow-cyan-500/20' : ''
                          }`}
                        >
                          <Image
                            src={tier.sponsors[0].logo}
                            alt="Diamond Sponsor"
                            fill
                            sizes="384px"
                            className="object-contain p-4"
                            unoptimized
                          />
                        </div>
                      </a>
                    </div>
                  ) : (
                    /* Multiple Sponsors - Continuous Slider */
                    <div className="relative overflow-hidden py-4">
                      {/* Gradient Overlays */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
                          isDark
                            ? 'bg-gradient-to-r from-slate-900 to-transparent'
                            : 'bg-gradient-to-r from-gray-50 to-transparent'
                        }`}
                      />
                      <div
                        className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
                          isDark
                            ? 'bg-gradient-to-l from-slate-900 to-transparent'
                            : 'bg-gradient-to-l from-gray-50 to-transparent'
                        }`}
                      />

                      {/* Slider Track */}
                      <div
                        className={`flex items-center gap-10 w-max ${isEven ? 'slider-left' : 'slider-right'}`}
                        style={{ animationDuration: `${tier.sponsors.length * 20}s` }}
                      >
                        {duplicatedSponsors.map((sponsor, index) => (
                          <a
                            key={index}
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                          >
                            <div
                              className={`relative w-48 h-32 ${sponsor.isLight ? 'bg-slate-700' : 'bg-gray-100'} rounded-2xl shadow-md hover:shadow-xl transition-shadow`}
                            >
                              <Image
                                src={sponsor.logo}
                                alt="Sponsor"
                                fill
                                sizes="192px"
                                className="object-contain p-4"
                                unoptimized
                              />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Become a Sponsor CTA */}
          <div className="mt-28 px-6">
            <div
              className={`max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                  : 'bg-gradient-to-br from-orange-500 to-pink-600'
              }`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Partner With Us</h2>
                <p
                  className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-white/90'}`}
                >
                  Support us and give a helping hand to make cybersecurity learning free for everyone. Together,
                  let&#39;s create the next generation of security warriors and build a safer digital future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/call-for-sponsors"
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'bg-white text-orange-600 hover:bg-gray-100'
                    }`}
                  >
                    View Packages
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>

                  <a
                    href="mailto:contact@seasides.net"
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-slate-700 text-white hover:bg-slate-600'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
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
