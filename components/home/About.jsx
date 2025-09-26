import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutTheConference() {
  return (
    <section className="relative py-24 text-gray-800" style={{ backgroundColor: '#ffd9b3' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About The Conference</h2>
          <p className="text-lg text-gray-700 mb-4">
            To stay ahead in the ever-evolving security landscape, continuous learning and networking are essential. As
            attacks grow more complex, sharpening our skills is crucial. Cybersecurity conferences are a powerful way to
            keep up with this fast-changing domain.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Join us from <span className="font-semibold text-orange-600">February 19-21, 2026</span> for the Seasides
            InfoSec Conference 2026, where you'll gain valuable insights into cybersecurity. We're proud to offer
            top-notch training sessions for free, bringing a community-driven experience that mirrors major global
            events like <span className="font-semibold">Blackhat</span> and{' '}
            <span className="font-semibold">Defcon</span>—ensuring equal learning opportunities for all.
          </p>

          <a href="about" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section - Video Placeholder */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">HIGHLIGHTS 2025</h3>
          <div className="w-full aspect-video bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-600 text-lg font-medium">
            Video Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
