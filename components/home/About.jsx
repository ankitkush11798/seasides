import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutTheConference() {
  return (
    <section
      className="relative py-24 text-gray-800 min-h-screen flex items-center"
      style={{ backgroundColor: '#f7c474' }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About The Conference</h2>
          <p class="text-lg text-gray-700 mb-4">
            To stay ahead in the rapidly changing world of security, continuous learning and meaningful connections are
            key. As cyber threats grow in complexity, sharpening our expertise becomes essential. Conferences like
            <span class="font-semibold"> Seasides Conference</span> provide the perfect platform to keep pace with this
            evolution.
          </p>

          <p class="text-lg text-gray-700 mb-8">
            Join us on <span class="font-semibold text-orange-600">February 19–21, 2026</span> at the
            <span class="font-semibold"> Seasides Conference </span> where you’ll gain valuable knowledge from industry
            leaders. With free, high-quality training sessions, we’re building a community-driven experience that
            reflects the spirit of global events such as <span class="font-semibold"> Blackhat</span> and
            <span class="font-semibold"> Defcon</span>—ensuring equal learning opportunities for all.
          </p>

          <a href="about" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section - Video Placeholder */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">HIGHLIGHTS</h3>
          <div className="w-full aspect-video bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-600 text-lg font-medium">
            Video Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
