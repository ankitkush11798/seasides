'use client';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Calendar, CheckCircle, Clock, MapPin, Shield, Users } from 'lucide-react';
import Image from 'next/image';

// Custom SVG Components for beach graphics
const WaveSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="currentColor"
      fillOpacity="0.3"
      d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

const WaveSVG2 = ({ className }) => (
  <svg className={className} viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="currentColor"
      fillOpacity="0.5"
      d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,213.3C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

const PalmTree = ({ className, flip = false }) => (
  <svg className={className} viewBox="0 0 100 200" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    {/* Trunk */}
    <path d="M45 200 Q50 150 48 100 Q46 80 50 60" stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Trunk texture */}
    <path d="M42 180 Q50 178 56 180" stroke="#654321" strokeWidth="2" fill="none" />
    <path d="M43 160 Q50 158 55 160" stroke="#654321" strokeWidth="2" fill="none" />
    <path d="M44 140 Q50 138 54 140" stroke="#654321" strokeWidth="2" fill="none" />
    <path d="M45 120 Q50 118 53 120" stroke="#654321" strokeWidth="2" fill="none" />
    {/* Leaves */}
    <path d="M50 60 Q30 40 5 50" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 60 Q35 30 15 25" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 60 Q50 20 45 5" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 60 Q65 30 85 25" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 60 Q70 40 95 50" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Leaf details */}
    <path d="M50 60 Q40 45 20 45" stroke="#32CD32" strokeWidth="2" fill="none" />
    <path d="M50 60 Q60 45 80 45" stroke="#32CD32" strokeWidth="2" fill="none" />
  </svg>
);

const Mountain = ({ className }) => (
  <svg className={className} viewBox="0 0 200 100" preserveAspectRatio="none">
    <polygon points="0,100 50,30 100,100" fill="#4a5568" />
    <polygon points="60,100 120,20 180,100" fill="#2d3748" />
    <polygon points="140,100 180,50 200,100" fill="#4a5568" />
    {/* Snow caps */}
    <polygon points="50,30 45,45 55,45" fill="#e2e8f0" />
    <polygon points="120,20 112,38 128,38" fill="#e2e8f0" />
  </svg>
);

const Ardentia2026 = () => {
  const { isDark } = useTheme();

  const whoShouldAttend = [
    'CIOs, CTOs, CDOs, Developers, Application owners responsible to implement privacy technology in their organization',
    'CISOs, Information security leaders, DPOs',
    'Privacy & compliance professionals',
    'Legal & risk teams',
    'Consultants & advisors',
    'DPDP implementation teams',
    'Faculty, Professors, students with focus on Privacy technology'
  ];

  const topics = [
    'Automating and operationalising manual privacy processes for DPDP compliance',
    'Data Bill of Material (DBoM) and discovery of personal data to make privacy rules actionable',
    'Practical use cases of AI for DPDP automation',
    'Navigating consent management for applications and platforms',
    'Protecting organisations from AI-driven threats and emerging risks',
    'Playbooks for regulatory notifications, breach communication, and board-level reporting'
  ];

  const agendaTrack1 = [
    { time: '09:00 – 09:30', session: 'Registration' },
    { time: '09:30 – 10:00', session: 'Breakfast & Networking' },
    { time: '10:00 – 11:30', session: 'Automation & Operationalisation of manual privacy processes for DPDPA' },
    {
      time: '11:30 – 13:00',
      session: 'Data Bill of Material (DBoM) & Discovery of Personal Data to make privacy rules actionable'
    },
    { time: '13:00 – 14:00', session: 'Lunch & Networking' },
    { time: '14:00 – 15:00', session: 'Use Cases of AI for DPDPA Automation' },
    { time: '15:00 – 16:00', session: 'Navigating Consent Management for Applications' },
    { time: '16:00 – 16:30', session: 'Tea Break & Peer Networking' },
    { time: '16:30 – 17:30', session: 'Protecting Organisation with AI Threats & Risks' },
    {
      time: '17:30 – 18:30',
      session: 'Playbooks for legal/regulatory notifications and communication with affected users and board'
    },
    { time: '18:30 – 18:45', session: 'Thank You Note & Closing' }
  ];

  const agendaTrack2 = [
    { time: '09:00 – 09:30', session: 'Registration' },
    { time: '09:30 – 10:00', session: 'Breakfast & Networking' },
    { time: '10:00 – 10:30', session: 'Privacy Regulations (DPDPA) & Technology Operations Overview' },
    { time: '10:30 – 11:20', session: 'Assessment Manager – to conduct DPIA' },
    {
      time: '11:20 – 13:00',
      session: 'Data Discovery and Intelligence - to have visibility over sensitive data'
    },
    { time: '13:00 – 14:00', session: 'Lunch & Networking' },
    { time: '14:00 – 14:30', session: 'Data Principal Request Management - to enable Data Principal rights' },
    { time: '14:30 – 15:30', session: 'Universal Consent Management - to have a centralized system' },
    { time: '15:30 – 16:00', session: 'Data Breach Management - to create audit ready reports' },
    { time: '16:00 – 16:30', session: 'Tea Break & Peer Networking' },
    { time: '16:30 – 17:00', session: 'Use Cases & Practical Scenarios' },
    { time: '17:00 – 17:10', session: 'Thank You Note & Closing' }
  ];

  const whyAttend = [
    'Learn how organisations are actually implementing DPDP and AI governance',
    'Gain practical frameworks, playbooks, and workflows you can apply immediately',
    'Engage directly with practitioners and decision-makers',
    'Earn an industry-relevant privacy certification',
    'Be part of a summit that combines learning with social impact'
  ];

  const csrImpact = [
    'One paid certification seat sponsors training for students and early-career professionals',
    'Enables practical, real-world learning in privacy and AI governance',
    'Supports workforce readiness for DPDP and Responsible AI implementation',
    'Contributes to a stronger, sustainable privacy ecosystem in India'
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Custom Graphics */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden w-full">
        {/* Sky gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-cyan-500" />

        {/* Sun */}
        <div className="absolute top-16 md:top-20 right-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-300 shadow-2xl opacity-90" />
        <div className="absolute top-16 md:top-20 right-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-200 blur-xl opacity-50" />

        {/* Mountains */}
        <div className="absolute bottom-32 md:bottom-40 left-0 w-full">
          <Mountain className="w-full h-20 md:h-32 text-slate-600 opacity-60" />
        </div>

        {/* Ocean gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-400 via-cyan-500 to-teal-600" />

        {/* Waves */}
        <div className="absolute bottom-24 md:bottom-32 left-0 right-0">
          <WaveSVG className="w-full h-16 md:h-24 text-cyan-400" />
        </div>
        <div className="absolute bottom-16 md:bottom-24 left-0 right-0">
          <WaveSVG2 className="w-full h-16 md:h-24 text-teal-500" />
        </div>

        {/* Beach/Sand */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-amber-200 via-amber-100 to-transparent" />

        {/* Palm Trees */}
        <div className="absolute bottom-0 left-2 md:left-8 w-20 md:w-32 h-40 md:h-64 opacity-90">
          <PalmTree className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-2 md:right-8 w-24 md:w-40 h-48 md:h-72 opacity-90">
          <PalmTree className="w-full h-full" flip />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Ardentia Logo */}
            <motion.div
              className="relative mb-8 w-48 h-48 md:w-64 md:h-64"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Image
                src="/ardentia-2026/ardentia-2026-1.png"
                alt="Ardentia 2026 Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Ardentia Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-2 tracking-wider drop-shadow-lg">
              <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                ARDENTIA
              </span>
            </h1>

            {/* Date and Location */}
            <div className="flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="text-sm md:text-base font-bold text-slate-700">FEB 21-22, 2026</span>
              <span className="text-slate-400">|</span>
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base font-bold text-slate-700">ICG GOA</span>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 tracking-widest drop-shadow-md"
            >
              IGNITING PRIVACY AND TRUST
            </motion.p>
          </motion.div>

          {/* Registration Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.ardentprivacy.ai/blog/ardentia-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg md:text-xl font-bold rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-teal-500 text-white shadow-2xl hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 border-2 border-white/30"
              >
                Registration
              </a>
              <a
                href="https://www.ardentprivacy.ai/call-for-paper-ardentia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg md:text-xl font-bold rounded-xl bg-white text-orange-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300 border-2 border-orange-100"
              >
                Call for Papers (CFP)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call for Papers Banner */}
      <section
        id="call-for-papers"
        className={`py-8 scroll-mt-28 ${isDark ? 'bg-gradient-to-r from-orange-600 to-cyan-600' : 'bg-gradient-to-r from-orange-500 to-cyan-500'}`}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">CALL for Papers</h2>
          <p className="text-lg text-white/90 mt-2">Ardentia 2026 | February 22 | Seasides Conference | ICG Goa</p>
          <p className="text-base text-white/80 mt-1">Organised by Ardent Foundation</p>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="text-orange-500">About</span> Ardentia 2026
            </h2>
            <div className={`p-8 rounded-3xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Ardentia 2026 is the first Privacy & AI Governance conference for professionals and academicians with
                focus on privacy enhancing technologies and AI security. The mission of this conference is to help
                organisations looking to move beyond policies and frameworks to practical, hands-on implementation of
                India&apos;s DPDP Act, global privacy regulations and implementing responsible AI.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                The conference will have deep technical presentations, keynote with global privacy and AI experts. The
                conference brings together privacy hackers, IT innovators, legal, security, and risk professionals to
                share real-world experiences, implementation challenges, and proven approaches to building operationally
                mature privacy and AI governance programs.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Alongside thought-leadership discussions, Ardentia features a hands-on training and product
                certification program for enterprise teams and practitioners provided by Ardent Privacy, the leading
                privacy technology company helping organizations implementing privacy regulations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Section - Stylized Graphics */}
      <section className="relative py-16 overflow-hidden">
        {/* Road/Highway background */}
        <div
          className={`absolute inset-0 ${isDark ? 'bg-slate-800' : 'bg-gradient-to-b from-amber-100 via-amber-50 to-sky-100'}`}
        />

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-600 to-slate-500" />
        <div
          className="absolute bottom-6 left-0 right-0 h-1 bg-yellow-400 opacity-80"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 30px, transparent 30px, transparent 60px)'
          }}
        />

        {/* Small palm tree on left */}
        <div className="absolute bottom-16 left-4 md:left-16 w-16 md:w-24 h-32 md:h-48 opacity-70">
          <PalmTree className="w-full h-full" />
        </div>

        {/* Van illustration */}
        <div className="absolute bottom-12 right-8 md:right-24 hidden md:block">
          <div className="relative w-32 h-24">
            {/* Van body */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-2xl rounded-b-lg" />
            {/* Windows */}
            <div className="absolute bottom-8 left-2 w-8 h-6 bg-sky-200 rounded-t-lg" />
            <div className="absolute bottom-8 right-2 w-16 h-6 bg-sky-200 rounded-t-lg" />
            {/* Wheels */}
            <div className="absolute -bottom-2 left-4 w-6 h-6 bg-slate-800 rounded-full border-2 border-slate-600" />
            <div className="absolute -bottom-2 right-4 w-6 h-6 bg-slate-800 rounded-full border-2 border-slate-600" />
            {/* Surfboard on top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 rounded-full transform -rotate-3" />
            {/* Date sign hanging */}
            <div className="absolute -top-10 right-0 bg-white px-3 py-2 rounded-lg shadow-lg border-2 border-slate-200">
              <p className="text-xs font-bold text-slate-800">FEB 21, 22</p>
              <p className="text-xs font-bold text-orange-500">2026</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Location Sign */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Sign post */}
              <div className="absolute left-8 top-full w-3 h-16 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-sm" />

              {/* Sign board */}
              <div className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 px-6 py-4 rounded-lg shadow-xl border-4 border-amber-700 transform -rotate-2">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="font-bold text-amber-900 text-sm">VENUE</span>
                </div>
                <p className="text-lg md:text-xl font-bold text-slate-800">International Center Goa</p>
                <p className="text-sm text-slate-600">Dona Paula, 403004, IN.</p>
              </div>
            </motion.div>

            {/* Date Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`px-8 py-6 rounded-2xl shadow-2xl ${isDark ? 'bg-slate-700' : 'bg-white'} border-4 ${isDark ? 'border-teal-500' : 'border-teal-400'}`}
            >
              <div className="text-center">
                <Calendar className={`w-10 h-10 mx-auto mb-2 ${isDark ? 'text-teal-400' : 'text-teal-500'}`} />
                <p className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-800'}`}>21 & 22</p>
                <p className={`text-xl font-bold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>FEBRUARY</p>
                <p className={`text-2xl font-black ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className={`py-16 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Who Should <span className="text-cyan-500">Attend</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whoShouldAttend.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-white'} shadow-md flex items-start gap-3`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics & Use Cases */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Topics & <span className="text-orange-500">Use Cases</span>
              </h2>
            </div>
            <p className="text-center text-orange-500 font-semibold mb-8">(Calls for papers open)</p>
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-xl ${isDark ? 'bg-gradient-to-r from-slate-800 to-slate-700' : 'bg-gradient-to-r from-slate-50 to-white'} border-l-4 border-orange-500 shadow-md`}
                >
                  <span className="text-base md:text-lg">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section
        id="privacy-ai-governance"
        className={`py-16 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-charcoal-gray'}`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Program <span className="text-cyan-500">Overview</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Day 1 */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-700' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Day 1 (21st Feb)</h3>
                    <p className="text-sm text-orange-500">Conference Track (Seasides 2026)</p>
                  </div>
                </div>
                <p className="text-sm md:text-base mb-3">A dedicated Privacy & AI Governance Track featuring:</p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>Keynote on DPDP Act & Responsible AI: Enterprise Expectations for 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>Ardent thought leadership session with practical, experience-driven insights</span>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-700' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Day 2 (22nd Feb)</h3>
                    <p className="text-sm text-cyan-500">
                      Full Day Training & Certification (ACPT) Ardent Certified Privacy Technologist
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base mb-3">A paid, hands-on program covering:</p>
                <ul className="space-y-1 text-sm md:text-base">
                  <li>→ Privacy Regulations (DPDPA) & Technology Operations Overview</li>
                  <li>→ Assessment Manager – Data Protection Impact Assessment (DPIA)</li>
                  <li>→ Data Discovery and Intelligence</li>
                  <li>→ Data Principal Request Management (DPRM)</li>
                  <li>→ Universal Consent Management (UCM)</li>
                  <li>→ Data Breach Management (DBM)</li>
                </ul>
                <p className="mt-3 text-sm text-orange-500 font-medium">
                  *Each participant receives official ACPT certification from Ardent Privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feb 22nd Agenda */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Feb 22nd | <span className="text-cyan-500">Full Day Agenda</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Track 1 */}
              <div>
                <h3 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  Track 1: Call for Papers / Use Cases
                </h3>
                <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-50'} shadow-xl`}>
                  <div className="grid grid-cols-1">
                    {agendaTrack1.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col p-4 ${
                          index % 2 === 0
                            ? isDark
                              ? 'bg-slate-800'
                              : 'bg-white'
                            : isDark
                              ? 'bg-slate-700/50'
                              : 'bg-slate-100'
                        } ${index !== agendaTrack1.length - 1 ? 'border-b border-slate-200 dark:border-slate-600' : ''}`}
                      >
                        <div className="mb-1">
                          <span
                            className={`font-mono font-bold text-sm ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                          >
                            {item.time}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm">{item.session}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Track 2 */}
              <div>
                <h3 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Track 2: ACPT Program
                </h3>
                <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-50'} shadow-xl`}>
                  <div className="grid grid-cols-1">
                    {agendaTrack2.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col p-4 ${
                          index % 2 === 0
                            ? isDark
                              ? 'bg-slate-800'
                              : 'bg-white'
                            : isDark
                              ? 'bg-slate-700/50'
                              : 'bg-slate-100'
                        } ${index !== agendaTrack2.length - 1 ? 'border-b border-slate-200 dark:border-slate-600' : ''}`}
                      >
                        <div className="mb-1">
                          <span className={`font-mono font-bold text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                            {item.time}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm">{item.session}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACPT Certification with CSR Impact */}
      <section
        id="privacy-tech-certification"
        className={`py-16 ${isDark ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' : 'bg-gradient-to-br from-orange-50 via-white to-cyan-50'}`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/ardentia-2026/acpt.jpg" alt="ACPT Logo" fill className="object-contain" />
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-center ${isDark ? 'text-white' : 'text-charcoal-gray'}`}
              >
                ACPT Training & <span className="text-cyan-500">Certification</span>
              </h2>
            </div>
            <h3
              className={`text-xl md:text-2xl font-semibold text-center mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Certification with Purpose – CSR Impact
            </h3>

            <div
              className={`p-8 rounded-3xl ${isDark ? 'bg-slate-700/50 border border-slate-600' : 'bg-white border border-slate-200'} shadow-xl`}
            >
              <h4 className={`text-lg md:text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                How Your Participation Makes an Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {csrImpact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl ${isDark ? 'bg-slate-600/50' : 'bg-slate-50'} flex items-start gap-3`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm md:text-base ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend */}
      <section className={`py-16 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Attend <span className="text-orange-500">Ardentia 2026</span>
            </h2>
            <div className="space-y-4">
              {whyAttend.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-slate-50'} border-l-4 ${
                    index % 2 === 0 ? 'border-orange-500' : 'border-cyan-500'
                  } shadow-md flex items-center gap-4`}
                >
                  <div
                    className={`w-10 h-10 rounded-full ${index % 2 === 0 ? 'bg-orange-500/20' : 'bg-cyan-500/20'} flex items-center justify-center`}
                  >
                    <span className={`font-bold ${index % 2 === 0 ? 'text-orange-500' : 'text-cyan-500'}`}>
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-base md:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-cyan-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join us in Goa</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">to turn regulation into execution.</p>
            <a
              href="https://www.ardentprivacy.ai/blog/ardentia-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-bold rounded-xl bg-white text-orange-600 shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
            >
              Registration
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ardentia2026;
