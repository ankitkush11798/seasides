'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { speakers } from '@/lib/data';
import { Twitter, Linkedin, Briefcase } from 'lucide-react';
import Link from 'next/link';

const SpeakerDetailPage = () => {
  const { id } = useParams();
  const { isDark } = useTheme();

  const speaker = speakers.find(s => s.id === id);

  if (!speaker) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Speaker Not Found</h1>
          <Link href="/speakers" className="text-blue-500 hover:underline">
            Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div
            className={`rounded-3xl p-8 md:p-12 mb-8 ${isDark ? 'bg-slate-800 shadow-xl shadow-black/20' : 'bg-white shadow-xl shadow-gray-200/50'}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl flex-shrink-0"
              >
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center md:text-left flex-1"
              >
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {speaker.name}
                </h1>
                <div
                  className={`flex items-center justify-center md:justify-start gap-2 text-xl mb-6 ${isDark ? 'text-cyan-400' : 'text-orange-600'}`}
                >
                  <Briefcase size={24} />
                  <span>
                    {speaker.role} at {speaker.company}
                  </span>
                </div>

                <div className="flex gap-4 justify-center md:justify-start">
                  {speaker.social?.twitter && (
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all ${isDark ? 'bg-slate-700 hover:bg-cyan-500 text-white' : 'bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-700'}`}
                    >
                      <Twitter size={24} />
                    </a>
                  )}
                  {speaker.social?.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all ${isDark ? 'bg-slate-700 hover:bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700'}`}
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-3xl p-8 md:p-12 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{speaker.bio}</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpeakerDetailPage;
