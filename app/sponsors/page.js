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
      color: isDark ? 'text-cyan-400' : 'text-cyan-600',
      borderColor: isDark ? 'border-cyan-400/30' : 'border-cyan-300',
      hoverBorderColor: isDark ? 'hover:border-cyan-400' : 'hover:border-cyan-500',
      glowColor: isDark ? 'shadow-cyan-500/20' : 'shadow-cyan-500/30',
      sponsors: [
        {
          name: 'SecureLayer7',
          logo: '/sponsors-2025/securelayer7.jpg',
          website: 'https://securelayer7.net'
        }
      ]
    },
    {
      tier: 'Platinum',
      color: isDark ? 'text-gray-300' : 'text-gray-600',
      borderColor: isDark ? 'border-gray-400/30' : 'border-gray-300',
      hoverBorderColor: isDark ? 'hover:border-gray-400' : 'hover:border-gray-500',
      glowColor: isDark ? 'shadow-gray-500/20' : 'shadow-gray-500/30',
      sponsors: []
    },
    {
      tier: 'Gold',
      color: isDark ? 'text-yellow-400' : 'text-yellow-600',
      borderColor: isDark ? 'border-yellow-400/30' : 'border-yellow-300',
      hoverBorderColor: isDark ? 'hover:border-yellow-400' : 'hover:border-yellow-500',
      glowColor: isDark ? 'shadow-yellow-500/20' : 'shadow-yellow-500/30',
      sponsors: [
        {
          name: 'Levo.ai',
          logo: '/sponsors-2025/levo.jpg',
          website: 'https://levo.ai'
        },
        {
          name: 'Encipher',
          logo: '/sponsors-2025/encipher.jpg',
          website: 'https://encipher.co'
        },
        {
          name: 'NII',
          logo: '/sponsors-2025/nii.jpg',
          website: 'https://nii.ac.in'
        },
        {
          name: 'Altered Security',
          logo: '/sponsors-2025/alteredsecurity.jpg',
          website: 'https://alteredsecurity.com'
        }
      ]
    },
    {
      tier: 'Silver',
      color: isDark ? 'text-gray-400' : 'text-gray-500',
      borderColor: isDark ? 'border-gray-500/30' : 'border-gray-300',
      hoverBorderColor: isDark ? 'hover:border-gray-500' : 'hover:border-gray-400',
      glowColor: isDark ? 'shadow-gray-500/20' : 'shadow-gray-500/30',
      sponsors: [
        {
          name: 'SquareX',
          logo: '/sponsors-2025/squarex.jpg',
          website: 'https://sqrx.com'
        },
        {
          name: 'DomDog',
          logo: '/sponsors-2025/domdog.jpg',
          website: 'https://domdog.io'
        },
        {
          name: 'SqrX',
          logo: '/sponsors-2025/squrx.jpg',
          website: 'https://sqrx.com'
        },
        {
          name: 'PureID',
          logo: '/sponsors-2025/pureid.jpg',
          website: 'https://pureid.io'
        }
      ]
    },
    {
      tier: 'Bronze',
      color: isDark ? 'text-orange-400' : 'text-orange-600',
      borderColor: isDark ? 'border-orange-400/30' : 'border-orange-300',
      hoverBorderColor: isDark ? 'hover:border-orange-400' : 'hover:border-orange-500',
      glowColor: isDark ? 'shadow-orange-500/20' : 'shadow-orange-500/30',
      sponsors: [
        {
          name: 'Appknox',
          logo: '/sponsors-2025/appknox.jpg',
          website: 'https://appknox.com'
        },
        {
          name: 'Corgea',
          logo: '/sponsors-2025/corgea.jpg',
          website: 'https://corgea.com'
        }
      ]
    },
    {
      tier: 'Special Supporter',
      color: isDark ? 'text-purple-400' : 'text-purple-600',
      borderColor: isDark ? 'border-purple-400/30' : 'border-purple-300',
      hoverBorderColor: isDark ? 'hover:border-purple-400' : 'hover:border-purple-500',
      glowColor: isDark ? 'shadow-purple-500/20' : 'shadow-purple-500/30',
      sponsors: []
    },
    {
      tier: 'Community Partner',
      color: isDark ? 'text-green-400' : 'text-green-600',
      borderColor: isDark ? 'border-green-400/30' : 'border-green-300',
      hoverBorderColor: isDark ? 'hover:border-green-400' : 'hover:border-green-500',
      glowColor: isDark ? 'shadow-green-500/20' : 'shadow-green-500/30',
      sponsors: []
    }
  ];

  // Filter tiers that have sponsors
  const tiersWithSponsors = sponsorTiers.filter(tier => tier.sponsors.length > 0);

  return (
    <>
      <main className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <Navbar />

        <div className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-24">
              <div className="inline-block mb-6">
                <span
                  className={`text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full ${
                    isDark
                      ? 'bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30'
                      : 'bg-orange-100 text-orange-600 ring-1 ring-orange-200'
                  }`}
                >
                  Our Sponsors
                </span>
              </div>
              <h1
                className={`text-5xl md:text-7xl font-black mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                WHO HELPS US
              </h1>
              <p
                className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Thank you to our amazing sponsors who make Seasides 2026 possible. Their support drives innovation in
                the cybersecurity community.
              </p>
            </div>

            {/* Sponsor Tiers */}
            <div className="space-y-24">
              {tiersWithSponsors.map(tier => (
                <div key={tier.tier}>
                  {/* Tier Header */}
                  <div className="mb-12">
                    <div className="flex items-center gap-6 mb-3">
                      <div
                        className={`h-1 w-16 rounded-full bg-gradient-to-r ${tier.borderColor.replace('border-', 'from-')} to-transparent`}
                      />
                      <h3
                        className={`text-4xl md:text-5xl font-black ${tier.color}`}
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900 }}
                      >
                        {tier.tier} Sponsors
                      </h3>
                      <div
                        className={`h-1 flex-1 rounded-full bg-gradient-to-r ${tier.borderColor.replace('border-', 'from-')} to-transparent`}
                      />
                    </div>
                  </div>

                  {/* Sponsors Grid */}
                  <div
                    className={`grid gap-8 ${
                      tier.tier === 'Diamond'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    }`}
                  >
                    {tier.sponsors.map((sponsor, index) => (
                      <a
                        key={index}
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative block rounded-xl border-2 transition-all duration-500 ${tier.borderColor} ${tier.hoverBorderColor} ${
                          isDark ? 'bg-white shadow-lg hover:shadow-2xl' : 'bg-white shadow-md hover:shadow-2xl'
                        } hover:${tier.glowColor} hover:scale-[1.03] hover:-translate-y-2`}
                      >
                        {/* Logo Container - Always White Background for Maximum Visibility */}
                        <div
                          className={`bg-white p-10 rounded-t-xl flex items-center justify-center ${tier.tier === 'Diamond' ? 'h-56' : 'h-48'}`}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-sm"
                              unoptimized
                              priority={tier.tier === 'Diamond'}
                            />
                          </div>
                        </div>

                        {/* Sponsor Name */}
                        <div
                          className={`px-6 py-5 rounded-b-xl ${isDark ? 'bg-slate-800/50' : 'bg-gray-50/80'} border-t ${tier.borderColor}`}
                        >
                          <p
                            className={`text-center font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'} group-hover:${tier.color.replace('text-', 'text-')} transition-colors duration-300`}
                          >
                            {sponsor.name}
                          </p>
                        </div>

                        {/* External Link Icon */}
                        <div
                          className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full p-2 shadow-lg ${tier.glowColor}`}
                        >
                          <svg
                            className={`w-5 h-5 ${tier.color}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Become a Sponsor CTA */}
            <div
              className={`mt-36 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border-2 border-gray-700'
                  : 'bg-gradient-to-br from-orange-50 via-white to-blue-50 border-2 border-gray-200'
              } shadow-2xl`}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="max-w-4xl mx-auto relative z-10">
                <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Become a Sponsor
                </h2>
                <p
                  className={`text-xl md:text-2xl mb-12 leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Partner with Seasides 2026 and connect with the brightest minds in cybersecurity. Elevate your brand,
                  showcase your solutions, and contribute to the future of security.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link
                    href="/call-for-sponsors"
                    className={`group inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ${
                      isDark
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/30 hover:shadow-orange-500/50'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/40 hover:shadow-orange-500/60'
                    }`}
                  >
                    View Sponsorship Packages
                    <svg
                      className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                    className={`group inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                      isDark
                        ? 'border-gray-600 text-white hover:bg-slate-800 hover:border-gray-500'
                        : 'border-gray-300 text-gray-900 hover:bg-white hover:border-gray-400 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
