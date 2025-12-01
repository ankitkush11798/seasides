'use client';
import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const ScholarshipPage = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#0f172a' : '#ffffff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDark]);

  const benefits = [
    { title: 'INR 5,000', description: 'Financial support for travel and accommodation' },
    { title: 'Full Access', description: 'Complete conference pass included' },
    { title: 'Networking', description: 'Connect with industry professionals' },
    { title: 'Learning', description: 'Access to all talks and workshops' }
  ];

  const eligibility = [
    'Must be a student (valid ID required)',
    'Attend the full conference (minimum 2 complete days)',
    'Engage with sponsor content on social media',
    'Submit a compelling application explaining why you deserve the scholarship'
  ];

  return (
    <>
      <style jsx>{`
        .pixelated-bg {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>

      <main className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <Navbar />

        {/* Hero Section with Pixelated Image */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 pixelated-bg">
            <Image
              src="/sholarship.webp"
              alt="Seasides Scholarship"
              fill
              className="object-cover scale-105 blur-[1px]"
              style={{ imageRendering: 'pixelated' }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-600/80 via-orange-500/60 to-black/90" />

          {/* Pixel grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl">
              <div className="inline-block px-6 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 mb-8">
                <span className="text-white text-sm font-bold tracking-widest uppercase">Student Support Program</span>
              </div>
              <h1
                className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                SCHOLARSHIP
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-16 bg-white/50 rounded-full" />
                <span className="text-white text-2xl font-bold">2026</span>
                <div className="h-1 w-16 bg-white/50 rounded-full" />
              </div>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
                Unlock opportunities and take the next step towards your cybersecurity dreams
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${isDark ? 'from-slate-900' : 'from-white'} to-transparent`}
          />
        </section>

        <div className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-20">
              <p
                className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                With the incredible support of our amazing donors, we are excited to help hardworking students take that
                next big step towards their dreams.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8 mb-20">
              {/* Scholarship Details - Wider */}
              <div
                className={`lg:col-span-3 rounded-3xl p-10 ${
                  isDark
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'
                    : 'bg-gradient-to-br from-orange-50 to-white border border-orange-100'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-orange-500/20' : 'bg-orange-100'}`}
                  >
                    <svg
                      className={`w-7 h-7 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>100 Scholarships</h2>
                </div>
                <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Each scholarship provides <span className="font-black text-orange-500 text-2xl">INR 5,000</span> to
                  help cover your travel and accommodation expenses during the conference.
                </p>
                <div
                  className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/50 border border-slate-600' : 'bg-white border border-orange-200'}`}
                >
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Scholarship recipients will receive financial assistance to make attending Seasides 2026 more
                    accessible. Our goal is to ensure that financial constraints do not prevent talented students from
                    participating.
                  </p>
                </div>
              </div>

              {/* Eligibility - Narrower */}
              <div
                className={`lg:col-span-2 rounded-3xl p-8 ${
                  isDark ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Eligibility</h2>
                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                          isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 ${isDark ? 'text-orange-400' : 'text-orange-500'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl p-14 text-center relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Pixel overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '4px 4px'
                }}
              />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Ready to Apply?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Do not miss this opportunity to attend Seasides 2026 with financial support.
                </p>
                <a
                  href="https://docs.google.com/forms/d/1xaThGInO9qck66D_egSJB2SOLyGADN0XwBvsC0e--x4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 py-6 rounded-2xl font-bold text-lg bg-white text-orange-600 hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ScholarshipPage;
