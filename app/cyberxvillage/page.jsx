'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import {
  Activity,
  Cpu,
  Factory,
  Gift,
  Globe,
  GraduationCap,
  HeartPulse,
  Plane,
  Radio,
  Shield,
  Trophy,
  Users,
  Wifi,
  Zap
} from 'lucide-react';

export default function CyberXVillagePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const villageDomains = [
    {
      icon: Cpu,
      title: 'Hardware Hacking',
      description:
        'PCB reverse engineering, firmware extraction, debug interface discovery (JTAG/SWD), and fault injection techniques.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Factory,
      title: 'ICS Hacking',
      description:
        'Industrial protocol reversing, Modbus/PLC attacks, and real-world Operational Technology (OT) attack scenarios.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Wifi,
      title: 'IoT Hacking',
      description:
        'Exploiting smart devices (doorbells, cameras), BLE manipulation, firmware analysis, and mobile app security.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HeartPulse,
      title: 'IoMT Hacking',
      description:
        'Security analysis of connected medical devices, wireless protocol vulnerabilities, and patient-safety impact scenarios.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Plane,
      title: 'Drone Hacking',
      description:
        'UAV firmware reversing, communication link analysis, navigation manipulation, and control-system attacks.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Satellite Hacking',
      description:
        'Satellite/ground-station security, SATCOM analysis, CCSDS packet crafting, and PLC-based ground station attacks.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500 selection:text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Cyber Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-sm tracking-wide mb-8 backdrop-blur-md">
              <Shield className="w-4 h-4" />
              <span>ADVANCED RESEARCH LABS</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
              CYBER
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                X
              </span>
              VILLAGE
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
              A Multi-Domain Cybersecurity Hacking Ecosystem
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
          >
            Moving beyond traditional IT security. We explore
            <span className="text-white font-semibold"> Real Systems</span>,
            <span className="text-white font-semibold"> Real Devices</span>, and
            <span className="text-white font-semibold"> Real Attack Surfaces </span>— from Hardware & OT to Aerospace &
            Space.
          </motion.p>
        </div>
      </section>

      {/* About & Founder Section */}
      <section className="py-20 relative bg-slate-900/50 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h3 className="text-3xl font-bold mb-6 text-white">The Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                CyberXvillage is designed to promote practical cybersecurity research, skill-building, and community
                collaboration. It represents a paradigm shift where modern cyber-physical systems are explored,
                attacked, and secured responsibly.
              </p>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Founded by Mr. Arun Mane</h4>
                  <p className="text-sm text-gray-400">Founder & CEO of Amynasec Research Labs and UnoAcademy</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="flex items-center gap-2 text-sm text-cyan-400 font-mono">
                  <Zap className="w-4 h-4" />
                  LEAD by Amynasec Research Labs employees
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Tech Graphic Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl rounded-full" />
              <div className="relative border border-white/10 rounded-2xl bg-[#0B1121] p-6 overflow-hidden">
                {/* Simulated System Monitor */}
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-gray-400">SYSTEM_MONITOR_V2</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-500">SECURE_CONNECTION</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Node 1 */}
                  <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                    <Cpu className="w-6 h-6 text-blue-400 mb-3" />
                    <div className="text-sm font-bold text-white mb-1">Hardware Interface</div>
                    <div className="text-xs text-blue-300/60 font-mono">UART/JTAG ACTIVE</div>
                  </div>

                  {/* Node 2 */}
                  <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-500/20 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors" />
                    <Radio className="w-6 h-6 text-purple-400 mb-3" />
                    <div className="text-sm font-bold text-white mb-1">RF Analysis</div>
                    <div className="text-xs text-purple-300/60 font-mono">SIGNAL DETECTED</div>
                  </div>

                  {/* Node 3 */}
                  <div className="col-span-2 p-4 rounded-lg bg-cyan-900/10 border border-cyan-500/20 flex items-center justify-between relative group overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-cyan-500/20">
                        <Activity className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Live Telemetry</div>
                        <div className="text-xs text-cyan-300/60 font-mono">PACKET_LOSS: 0.0%</div>
                      </div>
                    </div>
                    <div className="h-8 w-24 bg-cyan-500/10 rounded flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-cyan-500/40 rounded-full animate-pulse" />
                        <div className="w-1 h-4 bg-cyan-500/60 rounded-full animate-pulse delay-75" />
                        <div className="w-1 h-2 bg-cyan-500/40 rounded-full animate-pulse delay-150" />
                        <div className="w-1 h-5 bg-cyan-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-center">
                  <code className="text-[10px] text-gray-500 font-mono">
                    &gt; INITIALIZING ATTACK VECTORS... <span className="animate-pulse">_</span>
                  </code>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Villages Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Domains</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Six advanced hacking domains under one unified platform.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villageDomains.map((village, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${village.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}
                />
                <div className="relative h-full p-8 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${village.color} flex items-center justify-center shadow-lg`}
                  >
                    <village.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{village.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{village.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Rewards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-xl border border-cyan-500/20 p-12 text-center"
          >
            <Gift className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Community & Rewards</h2>
            <p className="text-xl text-gray-300 mb-10">
              CyberXvillage isn't just about learning—it's about proving your skills. Participate in live hands-on
              challenges and mini-CTFs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                  <Trophy className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Win IoT Devices</h3>
                <p className="text-sm text-gray-400">
                  Outstanding researchers take home the hardware they hack for continued learning.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">UnoAcademy Access</h3>
                <p className="text-sm text-gray-400">
                  Exclusive lifetime access to premium cybersecurity courses for challenge winners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
