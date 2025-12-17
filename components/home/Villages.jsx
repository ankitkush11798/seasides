'use client';
import { useState, useRef } from 'react';
import {
  Wrench,
  Search,
  Package,
  Shield,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
  Bug
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Villages = () => {
  const { isDark } = useTheme();
  const [hoveredVillage, setHoveredVillage] = useState(null);
  const sliderRef = useRef(null);

  const villages = [
    {
      id: 1,
      name: 'Hardware Village',
      icon: Wrench,
      description:
        'Dive into the physical world of hardware security. Learn hardware hacking, reverse engineering, and hands-on exploitation of embedded systems.',
      topics: ['IoT Security', 'Firmware Analysis', 'Circuit Analysis', 'Side-Channel Attacks'],
      color: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/30',
      borderColor: 'border-emerald-500',
      url: 'https://hw101.me'
    },
    {
      id: 2,
      name: 'SAST SCA Village',
      icon: Search,
      description:
        'Master static code analysis and software composition analysis. Discover vulnerabilities in source code and open-source dependencies.',
      topics: ['Code Review', 'Vulnerability Scanning', 'Dependency Analysis', 'SAST Tools'],
      color: 'from-cyan-500 to-blue-600',
      shadowColor: 'shadow-cyan-500/30',
      borderColor: 'border-cyan-500',
      url: 'https://village.scagoat.dev'
    },
    {
      id: 3,
      name: 'Container Security Village',
      icon: Package,
      description:
        'Explore the world of container and Kubernetes security. Learn about securing containerized applications and orchestration platforms.',
      topics: ['Kubernetes Security', 'Docker Security', 'Container Runtime', 'Pod Security'],
      color: 'from-purple-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/30',
      borderColor: 'border-purple-500',
      url: 'https://containersecurityvillage.kubernetesvillage.com'
    },
    {
      id: 4,
      name: 'Infrasec Village',
      icon: Shield,
      description:
        'A focused village on infrastructure attack and defense. Hands-on labs, live demos, and deep dives covering the entire stack.',
      topics: ['Cloud Attack & Defense', 'Zero Trust Networking', 'Secure IaC', 'Cloud IR'],
      color: 'from-rose-500 to-pink-600',
      shadowColor: 'shadow-rose-500/30',
      borderColor: 'border-rose-500',
      url: 'https://infrasec-village.seasides.net/'
    },
    {
      id: 5,
      name: 'Blockchain Security Village',
      icon: LinkIcon,
      description:
        'Explore the security landscape of decentralized systems. From smart contract vulnerabilities to DeFi exploits.',
      topics: ['Smart Contract Security', 'DeFi & NFT Attacks', 'Wallet Forensics', 'Cross-chain Exploits'],
      color: 'from-violet-500 to-purple-600',
      shadowColor: 'shadow-violet-500/30',
      borderColor: 'border-violet-500',
      url: '/cfp-blockchain-village'
    },
    {
      id: 6,
      name: 'Social Engineering Village',
      icon: Shield,
      description:
        'Welcome to the intersection of psychology, technology, and security. Explore the art of human manipulation, OSINT gathering, and the cognitive biases that define the human element of cybersecurity.',
      topics: ['OSINT Intelligence', 'HUMINT Operations', 'PSYOP Psychology', 'Human Element'],
      color: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/30',
      borderColor: 'border-amber-500',
      url: 'https://www.sevillage.in/'
    },
    {
      id: 7,
      name: 'Bug Bounty Village',
      icon: Bug,
      description:
        'Sharpen your hunting skills and learn from top unauthorized access experts. Workshops on finding, exploiting, and reporting bugs ethically.',
      topics: ['Web Hacking', 'Responsible Disclosure', 'Reconnaissance', 'Report Writing'],
      color: 'from-red-500 to-rose-600',
      shadowColor: 'shadow-red-500/30',
      borderColor: 'border-red-500',
      url: '#'
    }
  ];

  const scroll = direction => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-6"
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
              Specialized Learning Tracks
            </span>
            <Sparkles className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
          </motion.div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Security{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Villages
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6" />

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Dive deep into specialized cybersecurity domains with our expert-led villages.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => scroll('left')}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 shadow-lg'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Villages Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {villages.map(village => {
            const IconComponent = village.icon;
            const isHovered = hoveredVillage === village.id;

            return (
              <motion.a
                key={village.id}
                href={village.url}
                target={village.url.startsWith('/') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredVillage(village.id)}
                onMouseLeave={() => setHoveredVillage(null)}
                className={`relative flex-shrink-0 w-[350px] snap-center cursor-pointer block overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                  isHovered
                    ? `${village.borderColor} ${village.shadowColor} shadow-2xl`
                    : isDark
                      ? 'border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm'
                      : 'border-gray-200 shadow-lg bg-white'
                }`}
              >
                {/* Gradient Background Overlay */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${village.color}`}
                />

                <div className="relative p-6">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={{
                        rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${village.color} shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Village Name */}
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {village.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {village.description}
                  </p>

                  {/* Topics Pills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {village.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            isDark
                              ? 'bg-slate-700 text-gray-300 border border-slate-600'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Link */}
                  <motion.div
                    animate={{
                      x: isHovered ? 5 : 0
                    }}
                    className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${
                      isHovered
                        ? isDark
                          ? 'text-orange-400'
                          : 'text-orange-600'
                        : isDark
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    <span>Visit Village</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-8 mx-6 text-center p-8 rounded-2xl border-2 max-w-4xl lg:mx-auto ${
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
            Each village is designed to provide immersive, hands-on experiences tailored to different security domains.
            Choose your path and level up your skills!
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Villages;
