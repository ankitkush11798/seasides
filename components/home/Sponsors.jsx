'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Sponsors = () => {
  const { isDark } = useTheme();

  const sponsorTiers = [
    {
      tier: 'Diamond',
      color: 'from-cyan-400 to-blue-400',
      bgColor: isDark ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-400',
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
      color: 'from-gray-300 to-gray-400',
      bgColor: isDark
        ? 'bg-gradient-to-r from-gray-800/30 to-gray-700/30'
        : 'bg-gradient-to-r from-gray-100 to-gray-200',
      borderColor: 'border-gray-400',
      sponsors: []
    },
    {
      tier: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: isDark
        ? 'bg-gradient-to-r from-yellow-900/30 to-yellow-800/30'
        : 'bg-gradient-to-r from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-500',
      sponsors: [
        {
          name: 'Levo.ai',
          logo: '/sponsors-2025/levo.jpg',
          website: 'https://levo.ai'
        },
        {
          name: 'Encipher',
          logo: '/sponsors-2025/encipher.svg',
          website: 'https://www.enciphers.com/'
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
    }
  ];

  // Filter to show only Diamond, Platinum, and Gold tiers with sponsors
  const topTiers = sponsorTiers.filter(tier => tier.sponsors.length > 0);

  if (topTiers.length === 0) {
    return null; // Don't render anything if there are no sponsors
  }

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-orange-50 via-white to-orange-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              Powered By
            </span>
            <Sparkles className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
          </motion.div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-yellow-600 mx-auto rounded-full mb-6" />

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Thank you to our amazing sponsors who make Seasides possible and help keep cybersecurity education free for
            everyone
          </p>
        </motion.div>

        {/* Sponsors Showcase */}
        <div className="space-y-16">
          {topTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Tier Title */}
              <div className="flex items-center justify-center gap-4">
                <div className={`h-px flex-1 max-w-32 bg-gradient-to-r ${tier.color} opacity-50`} />
                <h3
                  className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent uppercase tracking-wider`}
                >
                  {tier.tier}
                </h3>
                <div className={`h-px flex-1 max-w-32 bg-gradient-to-l ${tier.color} opacity-50`} />
              </div>

              {/* Sponsors Grid */}
              <div
                className={`grid ${
                  tier.sponsors.length === 1
                    ? 'grid-cols-1 place-items-center'
                    : tier.sponsors.length === 2
                      ? 'grid-cols-1 md:grid-cols-2'
                      : tier.sponsors.length === 4
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                } gap-6 lg:gap-8`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.a
                    key={sponsorIndex}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      bg-white
                      ${tier.borderColor}
                      border-2 rounded-2xl p-6 md:p-8
                      flex flex-col items-center justify-center gap-4
                      transition-all duration-300
                      hover:shadow-2xl
                      ${tier.sponsors.length === 1 ? 'min-h-[300px] max-w-md w-full' : 'min-h-[220px]'}
                    `}
                  >
                    <div className="relative w-full h-32 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={280}
                        height={140}
                        className="object-contain max-w-full max-h-full"
                        unoptimized
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Sponsors CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/sponsors"
            className={`
              inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg
              transition-all duration-300 transform hover:scale-105
              ${
                isDark
                  ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700'
                  : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700'
              }
              shadow-lg hover:shadow-2xl
            `}
          >
            View All Sponsors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
