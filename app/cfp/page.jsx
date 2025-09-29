'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CFP = () => {
  const { isDark } = useTheme();

  const topics = [
    'Cloud Security',
    'Network Security',
    'WLAN and Bluetooth Security',
    'Lockpicking & Physical Security',
    'IoT Security',
    'Web Application Security',
    'Malware Analysis & Reverse Engineering',
    'Bug Bounty Hunting',
    'Mobile Application Security',
    'Threat Hunting & Threat Intelligence',
    'DevSecOps',
    'Blockchain & Smart Contract Security',
    'LLM & AI Security',
    'Automotive Security',
    'Social Engineering',
    'Red, Blue & Purple Teaming'
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero / Title Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden min-h-screen w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-900 animate-[gradientMove_15s_ease-in-out_infinite] w-full" />
        <div className="absolute inset-0 bg-black/20 w-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl shadow-black/50">
            Call for Papers - Seasides 2026
          </h1>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-lg p-4">
            We're excited to announce the Call for Papers (CFP) for Seasides 2026! <br />
            Every effort will be made to offer remuneration to the trainers. As the conference is supported by
            sponsorships, the amount available will be determined by the sponsorship contributions we secure.
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section
        className={`${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'} py-16 w-full overflow-x-hidden`}
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Expected Topics</h2>
          <p className="text-center mb-8 text-lg md:text-xl">
            We are expecting conference and workshop submissions on the following topics, but not limited to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside max-w-3xl mx-auto text-base md:text-lg">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          {/* Decoy CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/1F8oFjJLsCpXaadDNMf6xita22k_w-X8FDRIc5MYLC5k/"
              target="_blank"
              className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-cyan-400 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Submit Your Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full overflow-x-hidden">
        <div
          className={`p-8 rounded-3xl shadow-lg ${
            isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-white/30'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Submission Guidelines</h2>
          <div className="space-y-4 text-center text-base md:text-lg">
            <p>
              Please note that internet access will be limited to trainers only. Attendees are expected to use their
              personal mobile hotspots for any internet connectivity needs during the conference.
            </p>
            <p>
              Still not sure or have more questions? You can reach us at{' '}
              <a href="mailto:admin@seasides.net" className="text-orange-500 underline">
                admin@seasides.net
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(45deg, #f97316, #fb923c, #06b6d4, #0891b2);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(45deg, #06b6d4, #0891b2, #f97316, #fb923c);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(45deg, #f97316, #fb923c, #06b6d4, #0891b2);
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

export default CFP;
