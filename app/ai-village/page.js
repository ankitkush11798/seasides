'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Award, Brain, Clock, Code, Coffee, Cpu, Gift, Mic, Terminal, Wrench, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AIVillage = () => {
  const { isDark } = useTheme();

  const schedule = [
    {
      time: '30 min',
      type: 'Talk',
      title: 'OWASP Unified: Mapping the AI Stack — MCP, Agents, and LLMs',
      icon: Mic,
      color: 'emerald'
    },
    {
      time: '45 min',
      type: 'Workshop',
      title: 'Building your own Agent and attacking it',
      icon: Wrench,
      color: 'cyan'
    },
    {
      time: '30 min',
      type: 'Quiz + CTF',
      title: 'LLM Security (Swag drop)',
      icon: Gift,
      color: 'pink'
    },
    {
      time: '45 min',
      type: 'Workshop',
      title: 'Guardrails: Trying out the famous ones and building your own',
      icon: Wrench,
      color: 'cyan'
    },
    {
      time: '30 min',
      type: 'Quiz + CTF',
      title: 'Agentic AI Security (Swag drop)',
      icon: Gift,
      color: 'pink'
    },
    {
      time: '30 min',
      type: 'Talk',
      title: 'MCP Security in Practice: Threat Models, Exploits, and Mitigations',
      icon: Mic,
      color: 'emerald'
    },
    {
      time: '60 min',
      type: 'Break',
      title: 'Lunch Break',
      icon: Coffee,
      color: 'amber'
    },
    {
      time: '45 min',
      type: 'Workshop',
      title: 'Building your own MCP Server and attacking it',
      icon: Wrench,
      color: 'cyan'
    },
    {
      time: '30 min',
      type: 'Quiz + CTF',
      title: 'MCP Security (Swag drop)',
      icon: Gift,
      color: 'pink'
    },
    {
      time: '45 min',
      type: 'Workshop',
      title: 'Protection strategies along with simulation of real world attacks on Agents and MCP Servers',
      icon: Wrench,
      color: 'cyan'
    }
  ];

  const villageLeads = [
    {
      name: 'Jayesh Ahire',
      image: '/ai-village/Jayesh Ahire.jpg',
      linkedin: 'https://www.linkedin.com/in/jayesh-ahire/'
    },
    {
      name: 'Akif Asif',
      image: '/ai-village/Akif.jpg',
      linkedin: 'https://www.linkedin.com/in/akifasif/'
    },
    {
      name: 'Aman Bansal',
      image: '/ai-village/Aman Bansa.jpg',
      linkedin: 'https://www.linkedin.com/in/amanbansal29/'
    },
    {
      name: 'Dilip Sai',
      image: '/ai-village/Dilip Sai.jpg',
      linkedin: 'https://www.linkedin.com/in/dilip-sai-a0b3861b4/'
    },
    {
      name: 'Harsh Kahate',
      image: '/ai-village/Harsh Kahate.PNG',
      linkedin: 'https://www.linkedin.com/in/harsh-kahate/'
    },
    {
      name: 'Manav Talreja',
      image: '/ai-village/Manav Talreja.jpg',
      linkedin: 'https://www.linkedin.com/in/manav-talreja/'
    },
    {
      name: 'Meenakshi Ganesh',
      image: '/ai-village/Meenakshi G.jpg',
      linkedin: 'https://www.linkedin.com/in/meenakshi-ganesh-3aa2a5258/'
    },
    {
      name: 'P P Shashwath Aiyappa',
      image: '/ai-village/P P Shashwath Aiyappa.jpg',
      linkedin: 'https://www.linkedin.com/in/p-p-shashwath-aiyappa/'
    },
    {
      name: 'Smita Jha',
      image: '/ai-village/Smita Jha.jpg',
      linkedin: 'https://www.linkedin.com/in/smita-jha/'
    }
  ];

  const principles = [
    {
      icon: Terminal,
      title: 'AI is in production',
      description: 'So are the bugs'
    },
    {
      icon: Brain,
      title: 'Agents, LLMs, MCPs',
      description: "Same old security mindset won't work"
    },
    {
      icon: Code,
      title: 'We build, break, secure',
      description: 'Hands-on. Offensive. Practical.'
    },
    {
      icon: Zap,
      title: 'AppSec moving forward',
      description: 'Not just talk. Real systems.'
    }
  ];

  const getColorClasses = color => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-500',
        border: 'border-emerald-500/30',
        badge: 'bg-emerald-500/20 text-emerald-400'
      },
      cyan: {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-500',
        border: 'border-cyan-500/30',
        badge: 'bg-cyan-500/20 text-cyan-400'
      },
      pink: {
        bg: 'bg-pink-500/10',
        text: 'text-pink-500',
        border: 'border-pink-500/30',
        badge: 'bg-pink-500/20 text-pink-400'
      },
      amber: {
        bg: 'bg-amber-500/10',
        text: 'text-amber-500',
        border: 'border-amber-500/30',
        badge: 'bg-amber-500/20 text-amber-400'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className={`w-full overflow-x-hidden ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 overflow-hidden w-full min-h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black w-full" />

        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-8 border border-emerald-500/20 backdrop-blur-sm"
          >
            <Cpu className="w-4 h-4" />
            <span>Seasides 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
          >
            AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">VILLAGE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto"
          >
            <p className="mb-4">
              <span className="text-white font-semibold">AI is already in production. So are the bugs.</span>
            </p>
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Agents, LLMs, MCPs — same old security mindset won&apos;t work.
              <br className="hidden md:block" />
              We build systems, break them, and figure out how to secure them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className={`py-24 relative w-full ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/30'
                    : 'bg-white border-gray-100 hover:border-emerald-500/30 hover:shadow-lg'
                }`}
              >
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {principle.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className={`py-24 w-full ${isDark ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  Village Schedule
                </span>
              </h2>
              <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                Full day of hands-on AI security training
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => {
              const colors = getColorClasses(item.color);
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? `bg-slate-800/40 border-slate-700/50 hover:${colors.border} hover:bg-slate-800/60`
                      : `bg-white border-gray-100 hover:shadow-xl hover:${colors.border}`
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.text} flex-shrink-0 w-fit`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badge}`}
                        >
                          {item.type}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}
                        >
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </span>
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Swag indicator for CTF */}
                    {item.type === 'Quiz + CTF' && (
                      <div className="flex items-center gap-2 text-pink-500">
                        <Award className="w-5 h-5" />
                        <span className="text-sm font-semibold">Win Swag!</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Village Leads Section */}
      <section className={`py-24 w-full ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  Village Team
                </span>
              </h2>
              <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                Meet the experts behind the AI Village
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {villageLeads.map((lead, index) => (
              <motion.a
                key={index}
                href={lead.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  isDark
                    ? 'bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800'
                    : 'bg-white border-gray-100 hover:border-emerald-300 hover:shadow-xl'
                }`}
              >
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all duration-300">
                  <Image src={lead.image} alt={lead.name} fill className="object-cover" />
                </div>
                <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{lead.name}</h3>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Village Lead</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Break AI?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Join us for hands-on AI security training at Seasides 2026.
            </p>
            <Link
              href="/schedule"
              className="inline-block px-12 py-5 text-xl font-bold rounded-xl bg-white text-emerald-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
            >
              View Full Schedule
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVillage;
