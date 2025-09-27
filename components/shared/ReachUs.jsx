'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { VENUE } from '@/lib/venueConfig';
import { useState } from 'react';

const ReachUs = () => {
  const { isDark } = useTheme();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('venue'); // plain JS

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE.addressEN);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = VENUE.addressEN;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const distances = [
    { label: 'Dabolim Airport', km: 29 },
    { label: 'Karmali Railway Station', km: 20 },
    { label: 'Goa University', km: 1 },
    { label: 'National Institute of Oceanography (NIO)', km: 2.5 },
    { label: 'Goa Medical College (GMC)', km: 5 },
    { label: 'Manipal Hospital', km: 1.5 },
    { label: 'Miramar Beach', km: 5 },
    { label: 'Dona Paula Jetty', km: 3 },
    { label: 'Panjim City', km: 7.5 },
    { label: 'Mopa Airport', km: 41 }
  ];

  // Split distances into two halves for two columns
  const half = Math.ceil(distances.length / 2);
  const leftDistances = distances.slice(0, half);
  const rightDistances = distances.slice(half);

  return (
    <section
      id="reach-us"
      className={`relative py-12 overflow-hidden ${isDark ? 'bg-charcoal-gray' : 'bg-light-gray'}`}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>Reach Us</h2>
          <p className={`text-lg md:text-xl font-medium mt-2 ${isDark ? 'text-blue-200' : 'text-gray-700'}`}>
            Get Directions to the Event Hall
          </p>
          <div className={`w-24 h-1 mx-auto mt-3 rounded-full bg-sunset-orange`} />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Venue / Distances Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-5 ${
              isDark ? 'bg-black/20 border border-white/10' : 'bg-white/30 border border-blue-200/50'
            } shadow-xl h-[350px] sm:h-[400px]`} // same height as map
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('venue')}
                className={`flex-1 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                  activeTab === 'venue'
                    ? 'bg-sunset-orange text-white'
                    : isDark
                      ? 'bg-black/10 text-white'
                      : 'bg-white/50 text-gray-700'
                }`}
              >
                Venue
              </button>
              <button
                onClick={() => setActiveTab('distances')}
                className={`flex-1 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                  activeTab === 'distances'
                    ? 'bg-sunset-orange text-white'
                    : isDark
                      ? 'bg-black/10 text-white'
                      : 'bg-white/50 text-gray-700'
                }`}
              >
                Distances
              </button>
            </div>

            {/* Content */}
            {activeTab === 'venue' ? (
              <div className="h-full flex flex-col justify-start">
                <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {VENUE.name}
                </h3>
                <p
                  className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} cursor-pointer hover:text-blue-400`}
                  onClick={copyAddress}
                  title="Click to copy address"
                >
                  {VENUE.addressEN}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 mt-2 h-full overflow-y-auto">
                {[leftDistances, rightDistances].map((col, colIdx) => (
                  <ul key={colIdx} className="space-y-2">
                    {col.map((d, idx) => (
                      <li
                        key={idx}
                        className={`flex justify-between p-2 rounded-lg ${
                          isDark ? 'bg-white/5' : 'bg-white/50'
                        } border border-white/20 text-sm`}
                      >
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{d.label}</span>
                        <span className={`${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{d.km} km</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div
              className={`rounded-2xl overflow-hidden ${
                isDark ? 'bg-black/20 border border-white/10' : 'bg-white/30 border border-blue-200/50'
              } shadow-xl h-[350px] sm:h-[400px]`}
            >
              <div className="relative h-full">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="animate-spin w-6 h-6 border-3 border-blue-500 border-t-transparent rounded-full mx-auto mb-2" />
                      <p className="text-xs">Loading map...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`https://www.google.com/maps?q=${VENUE.coords.lat},${VENUE.coords.lng}&z=15&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="International Centre Goa Location Map"
                  aria-label={`Map showing location of ${VENUE.name}`}
                  onLoad={() => setMapLoaded(true)}
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
