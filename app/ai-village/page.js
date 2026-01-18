'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Terminal, Zap } from 'lucide-react';

const AIVillage = () => {
  const { isDark } = useTheme();

  const trainingModules = [];

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

      {/* Training Content / Curriculum */}
      <section className={`py-24 w-full ${isDark ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Training Curriculum
              </span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              Deep dive into modern AI security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div
              className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-slate-800' : 'bg-gray-200'} -translate-x-1/2`}
            />

            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  index === trainingModules.length - 1 && trainingModules.length % 2 !== 0
                    ? 'md:col-span-2 md:w-1/2 md:mx-auto'
                    : ''
                }`}
              >
                {/* Connector Dot */}
                <div
                  className={`hidden md:flex absolute top-8 ${
                    index % 2 === 0 ? '-right-[17px]' : '-left-[17px]'
                  } ${index === trainingModules.length - 1 && trainingModules.length % 2 !== 0 ? 'hidden' : ''}
                w-8 h-8 rounded-full border-4 items-center justify-center z-10
                ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                <div
                  className={`p-8 rounded-3xl h-full border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/60'
                      : 'bg-white border-gray-100 hover:shadow-xl hover:border-emerald-100'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                      <module.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{module.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span className={`${isDark ? 'text-slate-300' : 'text-gray-600'} text-base leading-relaxed`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVillage;
