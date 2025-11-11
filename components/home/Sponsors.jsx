'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const { isDark } = useTheme();

  const sponsorTiers = [
    {
      tier: 'Diamond',
      color: 'from-cyan-400 to-blue-400',
      bgColor: isDark ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-400',
      sponsors: []
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
      sponsors: [
        {
          name: 'SquareX',
          logo: '/sponsors-2025/squarex.jpg',
          website: 'https://sqrx.com'
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
      sponsors: []
    },
    {
      tier: 'Special Supporter',
      color: 'from-purple-400 to-pink-400',
      bgColor: isDark
        ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30'
        : 'bg-gradient-to-r from-purple-50 to-pink-50',
      borderColor: 'border-purple-400',
      sponsors: []
    },
    {
      tier: 'Community Partner',
      color: 'from-green-400 to-emerald-500',
      bgColor: isDark
        ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30'
        : 'bg-gradient-to-r from-green-50 to-emerald-50',
      borderColor: 'border-green-500',
      sponsors: []
    }
  ];

  // Filter tiers that have sponsors
  const tiersWithSponsors = sponsorTiers.filter(tier => tier.sponsors.length > 0);

  if (tiersWithSponsors.length === 0) {
    return null; // Don't render anything if there are no sponsors
  }

  return (
    <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Sponsors
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Thank you to our amazing sponsors who make Seasides possible
          </p>
        </motion.div>

        <div className="space-y-12">
          {tiersWithSponsors.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Tier Title */}
              <div className="text-center">
                <h3
                  className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent inline-block`}
                >
                  {tier.tier}
                </h3>
              </div>

              {/* Sponsors Grid */}
              <div
                className={`grid ${
                  tier.sponsors.length === 1
                    ? 'grid-cols-1 place-items-center'
                    : tier.sponsors.length === 2
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                } gap-8`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.a
                    key={sponsorIndex}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      ${tier.bgColor}
                      ${tier.borderColor}
                      border-2 rounded-2xl p-8
                      flex flex-col items-center justify-center gap-4
                      transition-all duration-300
                      hover:shadow-2xl
                      ${isDark ? 'hover:bg-opacity-50' : 'hover:bg-opacity-70'}
                      min-h-[250px]
                    `}
                  >
                    <div className="relative w-full h-32 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={300}
                        height={150}
                        className="object-contain max-w-full max-h-full"
                        unoptimized
                      />
                    </div>
                    <h4 className={`text-xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {sponsor.name}
                    </h4>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in sponsoring Seasides 2026?
          </p>
          <a
            href="mailto:contact@seasides.net"
            className={`
              inline-block px-8 py-4 rounded-xl font-semibold text-lg
              transition-all duration-300 transform hover:scale-105
              ${
                isDark
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
              }
              shadow-lg hover:shadow-2xl
            `}
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
