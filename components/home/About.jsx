import React from 'react';
import { BookOpen, Users, Laptop, ArrowRight } from 'lucide-react';

export default function AboutTheConference() {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Free Training',
      desc: 'Access high-quality training sessions without any cost—empowering equal opportunities for all.'
    },
    {
      icon: Users,
      title: 'Community-driven',
      desc: 'A grassroots initiative shaped by and for the InfoSec community.'
    },
    {
      icon: Laptop,
      title: 'Hands-on Learning',
      desc: 'Workshops and labs designed to sharpen practical cybersecurity skills.'
    }
  ];

  return (
    <section className="relative py-24 text-gray-800" style={{ backgroundColor: '#ffd9b3' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col">
                <Icon className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
