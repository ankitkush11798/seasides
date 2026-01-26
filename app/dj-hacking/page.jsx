'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Disc, Mic, Music, Sunset, Volume2, Zap } from 'lucide-react';

export default function DJHackingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const containerStagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <main className="min-h-screen bg-[#050510] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse delay-1000" />
          <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-sm tracking-wider mb-6 backdrop-blur-md">
              SUNSET SESSIONS • 5:00 PM – 7:00 PM
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-tight bg-gradient-to-br from-white via-purple-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              DJ HACKING
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 tracking-wide uppercase">
              @ Seaside Conference
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12"
          >
            A high-energy sunset experience curated by{' '}
            <span className="text-white font-semibold">DJ RAMA (aka Arun Mane)</span>. Blending genre-mixing, live DJ
            techniques, and crowd-driven music hacking. Raw, dirty, and fun.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Vibe</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* What is DJ Hacking Section */}
      <section className="py-24 relative bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                DJ Hacking?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              It's not just playing tracks. It's an immersive experience where music meets technical mastery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Disc,
                title: 'Genre Hacking',
                desc: 'Blending unexpected sounds and hacking genres in real-time.'
              },
              {
                icon: Zap,
                title: 'Live Remixing',
                desc: 'Creative transitions and on-the-fly reconstruction of tracks.'
              },
              {
                icon: Volume2,
                title: 'Energy Manipulation',
                desc: 'Controlling Tempo, BPM, and crowd energy with precision.'
              },
              { icon: Mic, title: 'Crowd Reading', desc: 'Adapting in real-time to the vibe of the floor.' },
              { icon: Music, title: 'Tech & Vibe', desc: 'Learning DJ techniques while losing yourself in the music.' },
              { icon: Sunset, title: 'Sunset Vibes', desc: 'The perfect unwind after a day of intense sessions.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-wise Flow */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-purple-900/10 to-[#050510]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-cyan-400">Flow</span>
            </h2>
            <p className="text-xl text-gray-400">
              Every evening from 5 PM to 7 PM. Hip Hop, Bollywood, Techno, and Psychedelic fusion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity animate-pulse" />
              <div className="relative h-full bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-9xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Day 1</h3>
                <h4 className="text-xl font-semibold text-white mb-6">Progressive to Power</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Progressive House infused with Bollywood melodies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>High-energy Bollywood Commercial tracks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Dark, driving High-Tech Minimal to close</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity animate-pulse" />
              <div className="relative h-full bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-9xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Day 2</h3>
                <h4 className="text-xl font-semibold text-white mb-6">Global Grooves</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Progressive House with Bollywood flavors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Bollywood Commercial blended with Afro rhythms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>Deep, groovy Techno session</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-red-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity animate-pulse" />
              <div className="relative h-full bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-9xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Day 3</h3>
                <h4 className="text-xl font-semibold text-white mb-6">Public Demand</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Genre selection driven by the crowd</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Live requests & surprise mixes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>High-energy, no-rules finale</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Vibe */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="absolute w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 italic tracking-tigher"
          >
            "COME FOR THE SUNSET.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              STAY FOR THE BEATS.
            </span>
            "
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Whether you’re a music lover, a DJ enthusiast, or just here to unwind. Let’s get dirty with DJ techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/schedule"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-colors transform hover:scale-105 duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Check Schedule
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
