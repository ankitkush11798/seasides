'use client';
import { useState } from 'react';
import { Wrench, Search, Package, Shield, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Villages = () => {
  const { isDark } = useTheme();
  const [hoveredVillage, setHoveredVillage] = useState(null);

  const villages = [
    {
      id: 1,
      name: 'Hardware Village',
      icon: Wrench,
      emoji: '🔧',
      description:
        'Dive into the physical world of hardware security. Learn hardware hacking, reverse engineering, and hands-on exploitation of embedded systems.',
      topics: ['IoT Security', 'Firmware Analysis', 'Circuit Analysis', 'Side-Channel Attacks', 'Hardware Pentesting'],
      color: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/30',
      borderColor: 'border-emerald-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      url: 'https://hw101.me'
    },
    {
      id: 2,
      name: 'SAST SCA Village',
      icon: Search,
      emoji: '🔍',
      description:
        'Master static code analysis and software composition analysis. Discover vulnerabilities in source code and open-source dependencies.',
      topics: ['Code Review', 'Vulnerability Scanning', 'Dependency Analysis', 'SAST Tools', 'Security Testing'],
      color: 'from-cyan-500 to-blue-600',
      shadowColor: 'shadow-cyan-500/30',
      borderColor: 'border-cyan-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      url: 'https://village.scagoat.dev'
    },
    {
      id: 3,
      name: 'Container Security Village',
      icon: Package,
      emoji: '📦',
      description:
        'Explore the world of container and Kubernetes security. Learn about securing containerized applications and orchestration platforms.',
      topics: ['Kubernetes Security', 'Docker Security', 'Container Runtime', 'Pod Security', 'Network Policies'],
      color: 'from-purple-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/30',
      borderColor: 'border-purple-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      url: 'https://containersecurityvillage.kubernetesvillage.com'
    },
    {
      id: 4,
      name: 'Infrasec Village',
      icon: Shield,
      emoji: '🛡️',
      description:
        'A focused village on infrastructure attack and defense. A day of hands-on labs, live demos, and deep dives covering the entire stack—from network and cloud to containers and IaC. We show the real-world exploit, then teach the actionable fix—mastering the evidence-driven practices that build and secure resilient systems.',
      topics: [
        'Cloud Attack & Defense',
        'Hardened Kubernetes',
        'Zero Trust Networking',
        'Secure Infrastructure as Code',
        'Cloud Incident Response',
        'Resilient CI/CD Pipelines'
      ],
      color: 'from-rose-500 to-pink-600',
      shadowColor: 'shadow-rose-500/30',
      borderColor: 'border-rose-500',
      bgGradient: 'from-rose-500/10 to-pink-500/10',
      url: 'https://infrasec-village.seasides.net/'
    }
  ];

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

      <div className="relative container mx-auto px-6 z-10 max-w-7xl">
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
            Dive deep into specialized cybersecurity domains with our expert-led villages. Each village offers hands-on
            learning, practical challenges, and real-world scenarios.
          </p>
        </motion.div>

        {/* Villages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {villages.map((village, index) => {
            const IconComponent = village.icon;
            const isHovered = hoveredVillage === village.id;

            return (
              <motion.a
                key={village.id}
                href={village.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredVillage(village.id)}
                onMouseLeave={() => setHoveredVillage(null)}
                className={`relative group cursor-pointer block overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
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

                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-5 ${isDark ? 'opacity-10' : ''}`}>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}
                  />
                </div>

                <div className="relative p-8">
                  {/* Icon and Emoji Header */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      animate={{
                        rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${village.color} shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.span
                      animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl"
                    >
                      {village.emoji}
                    </motion.span>
                  </div>

                  {/* Village Name */}
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {village.name}
                  </h3>

                  {/* Description */}
                  <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {village.description}
                  </p>

                  {/* Topics Pills */}
                  <div className="mb-6">
                    <h4
                      className={`text-xs font-bold mb-3 uppercase tracking-wider flex items-center gap-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                      Key Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {village.topics.map((topic, topicIndex) => (
                        <motion.span
                          key={topicIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                            isDark
                              ? 'bg-slate-700 text-gray-300 border border-slate-600 hover:border-slate-500'
                              : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 hover:border-orange-300'
                          }`}
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Link with Arrow */}
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

                {/* Decorative Corner Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${village.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 transform translate-x-16 -translate-y-16`}
                />
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
          className={`mt-16 text-center p-8 rounded-2xl border-2 ${
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
    </section>
  );
};

export default Villages;
