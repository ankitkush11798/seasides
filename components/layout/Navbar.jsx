'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSponsorsOpen, setIsSponsorsOpen] = useState(false);
  const [isCFPOpen, setIsCFPOpen] = useState(false);
  const [isArdentiaOpen, setIsArdentiaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVillagesOpen, setIsVillagesOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center pt-6 px-4">
      <div
        className={`pointer-events-auto rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 w-full max-w-7xl flex items-center justify-between px-6 py-3 ${
          isDark
            ? 'bg-slate-900/80 border-slate-700/50 text-white shadow-cyan-900/20'
            : 'bg-white/90 border-white/50 text-slate-800 shadow-xl'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="md:flex-1">
          <Image
            src={isDark ? '/light-logo.png' : '/dark-logo.png'}
            alt="Seasides Logo"
            width={80}
            height={40}
            className="object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center space-x-10 font-medium md:flex-1 justify-center">
          <Link href="/" className={`px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105`}>
            Home
          </Link>

          {/* Ardentia Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsArdentiaOpen(true)}
            onMouseLeave={() => setIsArdentiaOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              Ardentia
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isArdentiaOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 pt-3 w-72 transition-all duration-300 z-50
                ${isArdentiaOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
              `}
            >
              <div
                className={`rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ${isDark ? 'bg-slate-800/95 border-2 border-slate-600/50' : 'bg-white/95 border-2 border-orange-100'}`}
              >
                <div
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-gray-400 bg-slate-900/50' : 'text-gray-500 bg-orange-50/50'
                  }`}
                >
                  Ardentia 2026
                </div>
                <Link
                  href="/ardentia-2026/privacy-ai-governance"
                  className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-orange-500'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 border-transparent hover:border-orange-500'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Privacy & AI Governance</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Day 1 Conference Track
                    </div>
                  </div>
                </Link>
                <Link
                  href="/ardentia-2026/certification"
                  className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-blue-500'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 border-transparent hover:border-blue-500'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">ACPT Certification</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Day 2 Training Program
                    </div>
                  </div>
                </Link>
                <Link
                  href="/ardentia-2026/cfp"
                  className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-green-500'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 border-transparent hover:border-green-500'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Call for Papers</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Deadline: Jan 21
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/schedule/ciso-panel" className="hover:text-orange-500 transition-colors whitespace-nowrap">
            CISO Panel
          </Link>

          <Link href="/schedule" className="hover:text-orange-500 transition-colors">
            Schedule
          </Link>
          <Link href="/speakers" className="hover:text-orange-500 transition-colors">
            Speakers
          </Link>
          {/* Sponsors Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSponsorsOpen(true)}
            onMouseLeave={() => setIsSponsorsOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              Sponsors
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isSponsorsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 pt-3 w-64 transition-all duration-300 z-50
                ${isSponsorsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
              `}
            >
              <div
                className={`rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ${isDark ? 'bg-slate-800/95 border-2 border-slate-600/50' : 'bg-white/95 border-2 border-orange-100'}`}
              >
                <div
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-gray-400 bg-slate-900/50' : 'text-gray-500 bg-orange-50/50'
                  }`}
                >
                  Sponsorship
                </div>
                <Link
                  href="/sponsors"
                  className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-yellow-500'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 border-transparent hover:border-yellow-500'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Our Sponsors</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Meet our partners
                    </div>
                  </div>
                </Link>
                <Link
                  href="/call-for-sponsors"
                  className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-orange-500'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 border-transparent hover:border-orange-500'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Call for Sponsors</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Partner with us
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Villages Dropdown */}
          <div
            className="relative dropdown-container"
            onMouseEnter={() => setIsVillagesOpen(true)}
            onMouseLeave={() => setIsVillagesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              Villages
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isVillagesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full right-0 pt-2 w-72 transition-all duration-200
                ${isVillagesOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
              `}
            >
              <div
                className={`rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ${isDark ? 'bg-charcoal-gray/95 border border-gray-700' : 'bg-white/95 border border-gray-200'}`}
              >
                <div className={`px-4 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    Security Villages
                  </p>
                </div>
                <Link
                  href="/village-schedule"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-orange-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-orange-500">Village Schedule</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>View Full Schedule</p>
                  </div>
                </Link>
                <a
                  href="https://hw101.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-green-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Hardware Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Hands-on hardware hacking
                    </p>
                  </div>
                </a>
                <a
                  href="https://village.scagoat.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">SAST SCA Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Static code analysis & SCA
                    </p>
                  </div>
                </a>
                <a
                  href="https://containersecurityvillage.kubernetesvillage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-indigo-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Container Security</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Kubernetes & container security
                    </p>
                  </div>
                </a>
                <a
                  href="https://infrasec-village.seasides.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-red-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Infrasec Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Infrastructure Security
                    </p>
                  </div>
                </a>
                <Link
                  href="/blockchain-village"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-purple-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Blockchain Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Smart Contracts & DeFi Security
                    </p>
                  </div>
                </Link>
                <Link
                  href="/ai-village"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-emerald-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">AI Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Practical AI Security
                    </p>
                  </div>
                </Link>
                <a
                  href="https://www.sevillage.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-amber-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Social Engineering Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Psychology & OSINT</p>
                  </div>
                </a>
                <a
                  href="https://threathuntingvillage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-lime-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-lime-50 hover:to-green-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Threat Hunting Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Threat Hunting & DFIR
                    </p>
                  </div>
                </a>

                <Link
                  href="/dj-hacking"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-pink-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">DJ Hacking</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Music & Hacking</p>
                  </div>
                </Link>
                <Link
                  href="/cyberxvillage"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">CyberX Village</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>CyberX Village</p>
                  </div>
                </Link>
                <Link
                  href="/mentor-connect"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Mentor Connect</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Career Guidance</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              About
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full right-0 pt-2 w-64 transition-all duration-200
                ${isAboutOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
              `}
            >
              <div
                className={`rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ${isDark ? 'bg-charcoal-gray/95 border border-gray-700' : 'bg-white/95 border border-gray-200'}`}
              >
                <div className={`px-4 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    Information
                  </p>
                </div>
                <Link
                  href="/about"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">About Us</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Learn about the event
                    </p>
                  </div>
                </Link>
                <Link
                  href="/faq"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-purple-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">FAQ</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Common questions</p>
                  </div>
                </Link>
                <Link
                  href="/cfp"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-green-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Call for Papers</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Submit proposal</p>
                  </div>
                </Link>
                <Link
                  href="/cfp-reviewers"
                  className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-green-500 ${
                    isDark
                      ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Reviewers</p>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}> Reviewers</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for centering */}
        <div className="hidden md:block md:flex-1" />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 font-medium ${
            isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
          }`}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`pointer-events-auto md:hidden mt-2 w-full max-w-5xl rounded-2xl px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl border transition-all duration-300 ${
            isDark ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="space-y-1">
            {/* Main Links */}
            <Link
              href="/"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">Home</span>
            </Link>

            {/* Ardentia Section */}
            <div className={`pt-4 pb-2 px-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider">Ardentia 2026</div>
            </div>

            <Link
              href="/cfp-reviewers"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-pink-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">Reviewers</span>
            </Link>

            <Link
              href="/ardentia-2026/privacy-ai-governance"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">Privacy & AI Governance</span>
            </Link>

            <Link
              href="/ardentia-2026/certification"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">ACPT Certification</span>
            </Link>

            <Link
              href="/ardentia-2026/cfp"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-green-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">Call for Papers</span>
            </Link>

            {/* Divider */}
            <div className={`my-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

            <Link
              href="/schedule/ciso-panel"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">CISO</span>
            </Link>

            <Link
              href="/schedule"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">Schedule</span>
            </Link>

            <Link
              href="/speakers"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">Speakers</span>
            </Link>

            {/* Villages Section */}
            <div className={`pt-4 pb-2 px-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider">Security Villages</div>
            </div>

            <Link
              href="/village-schedule"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm text-orange-500">Village Schedule</span>
              </div>
            </Link>

            <a
              href="https://hw101.me"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-green-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Hardware Village</span>
              </div>
            </a>

            <a
              href="https://village.scagoat.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-cyan-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">SAST SCA Village</span>
              </div>
            </a>

            <a
              href="https://containersecurityvillage.kubernetesvillage.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-indigo-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Container Security</span>
              </div>
            </a>

            <a
              href="https://infrasec-village.seasides.net/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-red-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">INFRASEC Village</span>
              </div>
            </a>

            <Link
              href="/cfp-blockchain-village"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-purple-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Blockchain Village</span>
              </div>
            </Link>

            <Link
              href="/ai-village"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-emerald-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">AI Village</span>
              </div>
            </Link>

            <a
              href="https://www.sevillage.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-amber-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Social Engineering Village</span>
              </div>
            </a>

            <a
              href="https://threathuntingvillage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-lime-50'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Threat Hunting Village</span>
              </div>
            </a>

            <Link
              href="/dj-hacking"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-pink-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">DJ Hacking</span>
              </div>
            </Link>

            <Link
              href="/cyberxvillage"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-cyan-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">CyberX Village</span>
              </div>
            </Link>

            <Link
              href="/mentor-connect"
              className={`flex items-center justify-between px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">Mentor Connect</span>
              </div>
            </Link>

            {/* Divider */}
            <div className={`my-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

            {/* Sponsors Section */}
            <div className={`pt-4 pb-2 px-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider">Sponsorship</div>
            </div>

            <Link
              href="/sponsors"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-yellow-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">Our Sponsors</span>
            </Link>

            <Link
              href="/call-for-sponsors"
              className={`flex items-center px-4 py-3 ml-4 rounded-xl transition-all duration-200 group ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-700 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium text-sm">Call for Sponsors</span>
            </Link>

            {/* Divider */}
            <div className={`my-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

            {/* Other Links */}

            <Link
              href="/about"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">About Us</span>
            </Link>

            <Link
              href="/cfp"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-green-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">Call for Papers</span>
            </Link>

            <Link
              href="/faq"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">FAQ</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
