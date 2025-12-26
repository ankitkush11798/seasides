'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, User, Calendar } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { speakers } from '@/lib/data';

const SessionDetailModal = ({ session, isOpen, onClose }) => {
  const { isDark } = useTheme();

  if (!isOpen || !session) return null;

  const speaker = speakers.find(s => s.id === session.speakerId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
            isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white'
          }`}
        >
          {/* Header Image / Pattern */}
          <div className="h-32 bg-gradient-to-r from-orange-500 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-500 text-white">
                {session.track}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-purple-500 text-white">
                {session.type}
              </span>
            </div>

            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{session.title}</h2>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{session.time}</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{session.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Abstract</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {session.fullDescription || session.description}
              </p>
            </div>

            {/* Speaker */}
            {speaker && (
              <div className={`border-t pt-6 ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Presented By
                </h3>
                <Link href={`/speakers/${speaker.id}`} className="flex items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/50 group-hover:border-orange-500 transition-colors">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold group-hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      {speaker.name}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {speaker.role} @ {speaker.company}
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SessionDetailModal;
