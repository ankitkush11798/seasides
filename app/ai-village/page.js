'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Shield, Brain, Code, Zap } from 'lucide-react';

const AIVillage = () => {
  const { isDark } = useTheme();

  const focusAreas = [
    'LLM Security & Prompt Injection',
    'AI Agent Architecture',
    'Model Context Protocol (MCP)',
    'AI-Powered Attack Vectors',
    'Adversarial ML Techniques',
    'AI Supply Chain Security',
    'Offensive AI Tooling',
    'Production AI Defense'
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

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden w-full min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-900 animate-[gradientMove_15s_ease-in-out_infinite] w-full" />
        <div className="absolute inset-0 bg-black/40 w-full" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md border border-white/20"
          >
            <Terminal className="w-4 h-4" />
            Seasides 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl shadow-black/50 tracking-tight"
          >
            AI VILLAGE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white font-bold leading-relaxed backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-white/10"
          >
            <p className="mb-6">AI is already in production.</p>
            <p className="mb-6">So are the bugs.</p>
            <p className="mb-6">
              Agents, LLMs, MCPs —<br />
              same old security mindset won&apos;t work.
            </p>
            <p className="mb-6">Here we don&apos;t just talk.</p>
            <p className="mb-6">We build systems, break them, and figure out how to secure them.</p>
            <p className="text-emerald-300 text-2xl md:text-3xl">
              This is AppSec moving forward.
              <br />
              Hands-on. Offensive. Practical.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why AI Village Section */}
      <section className={`py-20 w-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600 mb-4">
              WHY AI VILLAGE @ SEASIDES 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {principle.title}
                    </h3>
                    <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section
        className={`${isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'} py-20 w-full overflow-x-hidden`}
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600 mb-12">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-700/50 border border-slate-600 hover:bg-slate-700 hover:border-emerald-500/50'
                    : 'bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-emerald-500/50'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 flex-shrink-0" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 w-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl shadow-2xl ${
              isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Village</h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Ready to dive into practical AI security? Whether you&apos;re building, breaking, or defending AI systems,
              there&apos;s a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Schedule
              </Link>
              <a
                href="mailto:admin@seasides.net"
                className={`px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-emerald-500 text-emerald-400 hover:bg-emerald-500/10'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(135deg, #059669, #0891b2, #1d4ed8, #0ea5e9);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(135deg, #0ea5e9, #1d4ed8, #059669, #0891b2);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(135deg, #059669, #0891b2, #1d4ed8, #0ea5e9);
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 200% 200%;
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AIVillage;
