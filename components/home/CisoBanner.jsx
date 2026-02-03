'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CisoBanner = () => {
  const { isDark } = useTheme();

  const speakers = [
    { name: 'Sachin Kode', role: 'Head of Cybersecurity', image: '/speakers/sachin_kode.png' },
    { name: 'Rushabh Mehta', role: 'Moderator', image: '/speakers/rushabh_mehta.png' },
    { name: 'Parag Patil', role: 'CISO', image: '/speakers/parag_patil.png' },
    { name: 'Dheeraj Yadav', role: 'CISO', image: '/speakers/dheeraj_yadav.png' }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950'
              : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900'
          }`}
        />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[150px]"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title with gradient */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-white">CISO</span>{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Panel
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-4">
                Trust as the New Digital Currency
              </p>

              {/* Description */}
              <p className="text-slate-300/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
                Leadership Accountability in an Era of AI-Driven Cyber Risks and Privacy Challenges. Join top CISOs as
                they navigate the future of trust, security, and ethical AI governance.
              </p>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/schedule/ciso-panel"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_100%] hover:bg-right rounded-2xl text-white font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-500"
                >
                  View Panel Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Speakers Card Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl scale-110" />

              {/* Main card */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-white font-bold text-xl"> Panelists</h3>
                    <p className="text-slate-400 text-sm">Top Security Leaders</p>
                  </div>
                </div>

                {/* Speakers List */}
                <div className="space-y-3">
                  {speakers.map((speaker, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-orange-500/30 transition-all cursor-pointer"
                    >
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-orange-500/50 transition-all">
                        <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold group-hover:text-orange-300 transition-colors">
                          {speaker.name}
                        </p>
                        <p className="text-slate-400 text-sm">{speaker.role}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CisoBanner;
