'use client';
import { motion } from 'framer-motion';
import { VENUE } from '@/lib/venueConfig';
import { useState } from 'react';
import { MapPin, Copy, Plane, Train, Navigation, CheckCircle2 } from 'lucide-react';

const ReachUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE.addressEN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = VENUE.addressEN;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const keyLocations = [
    { label: 'Dabolim Airport', km: 29, icon: Plane, color: 'orange' },
    { label: 'Mopa Airport', km: 41, icon: Plane, color: 'orange' },
    { label: 'Karmali Railway Station', km: 20, icon: Train, color: 'blue' }
  ];

  const nearbyPlaces = [
    { label: 'Goa University', km: 1 },
    { label: 'Manipal Hospital', km: 1.5 },
    { label: 'National Institute of Oceanography', km: 2.5 },
    { label: 'Dona Paula Jetty', km: 3 },
    { label: 'Goa Medical College', km: 5 },
    { label: 'Miramar Beach', km: 5 },
    { label: 'Panjim City', km: 7.5 }
  ];

  return (
    <section
      id="reach-us"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">How to Reach Us</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Find your way to International Centre Goa for Seasides 2026
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Venue Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{VENUE.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{VENUE.addressEN}</p>
                </div>
              </div>
              <button
                onClick={copyAddress}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 rounded-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 font-medium"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Transportation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-orange-600" />
                Transportation Hubs
              </h4>
              <div className="space-y-3">
                {keyLocations.map((location, idx) => {
                  const IconComponent = location.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-orange-100 transition-colors duration-300">
                          <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{location.label}</span>
                      </div>
                      <span className="text-orange-600 font-bold text-sm">{location.km} km</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Nearby Landmarks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nearbyPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300 text-sm"
                  >
                    <span className="text-gray-700">{place.label}</span>
                    <span className="text-orange-600 font-semibold">{place.km} km</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[500px] lg:h-[650px]">
              <div className="relative h-full">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                    <div className="text-center">
                      <div className="animate-spin w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-3" />
                      <p className="text-sm text-gray-600 font-medium">Loading map...</p>
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

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${VENUE.coords.lat},${VENUE.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${VENUE.coords.lat},${VENUE.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl transition-all duration-300 shadow-lg border border-gray-200 font-semibold"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
