'use client';

import React, { useState } from 'react';
import { ArrowRight, Terminal, Server, Lock, Network, Code, Database } from 'lucide-react';

function InteractiveHighlights() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: Terminal,
      title: 'sudo attendees++',
      description: '500+ security professionals',
      code: '$ whoami\nroot@seasides2026:~#'
    },
    {
      id: 2,
      icon: Server,
      title: 'uptime: 72h',
      description: 'Feb 19-21, 2026 continuous learning',
      code: '$ uptime\n72:00:00 up 3 days'
    },
    {
      id: 3,
      icon: Lock,
      title: '/etc/experts',
      description: 'Industry-leading speakers',
      code: '$ ls -la /speakers\ndrwxr-xr-x experts'
    },
    {
      id: 4,
      icon: Network,
      title: 'netstat -global',
      description: 'Worldwide security network',
      code: '$ ping global.network\n64 bytes from world'
    },
    {
      id: 5,
      icon: Code,
      title: 'git commit -m "skills"',
      description: 'Cutting-edge security techniques',
      code: '$ git log --oneline\nabc123f Add new exploits'
    },
    {
      id: 6,
      icon: Database,
      title: 'SELECT * FROM labs',
      description: 'Hands-on practical workshops',
      code: '$ mysql> SHOW TABLES\n+labs+workshops+'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 text-center">
        <div className="font-mono text-lg text-gray-800 bg-gray-100 px-4 py-2 rounded border-l-4 border-gray-600">
          <span className="text-green-600">root@seasides:</span>
          <span className="text-blue-600">~#</span> ./conference_highlights.sh
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {highlights.map(highlight => {
          const IconComponent = highlight.icon;
          const isHovered = hoveredCard === highlight.id;

          return (
            <div
              key={highlight.id}
              className={`
                relative bg-gray-900 border border-gray-700 rounded-lg overflow-hidden
                cursor-pointer transition-all duration-300 ease-out
                ${isHovered ? 'transform scale-105 border-green-400 shadow-2xl shadow-green-400/20' : 'shadow-lg'}
                hover:border-green-400
              `}
              onMouseEnter={() => setHoveredCard(highlight.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-3 py-2 border-b border-gray-700 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-2">terminal</div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`
                    p-2 rounded border border-gray-600 bg-gray-800
                    transition-all duration-300
                    ${isHovered ? 'border-green-400 bg-gray-700' : ''}
                  `}
                  >
                    <IconComponent
                      className={`
                      w-5 h-5 transition-colors duration-300
                      ${isHovered ? 'text-green-400' : 'text-gray-400'}
                    `}
                    />
                  </div>
                  <h4
                    className={`
                    font-mono text-sm font-bold transition-colors duration-300
                    ${isHovered ? 'text-green-400' : 'text-gray-300'}
                  `}
                  >
                    {highlight.title}
                  </h4>
                </div>

                <p className="text-gray-400 text-xs mb-3 leading-relaxed">{highlight.description}</p>

                {/* Terminal Code Block */}
                <div
                  className={`
                  bg-black rounded border border-gray-700 p-3 font-mono text-xs
                  transition-all duration-300 overflow-hidden
                  ${isHovered ? 'border-green-400 max-h-20' : 'max-h-8'}
                `}
                >
                  <div
                    className={`
                    text-green-400 transition-all duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-60'}
                  `}
                  >
                    {highlight.code.split('\n').map((line, idx) => (
                      <div key={idx} className="leading-4">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Matrix-like effect overlay */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent
                transition-opacity duration-300 pointer-events-none
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent"></div>
              </div>

              {/* Scanning line effect */}
              <div
                className={`
                absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent
                transition-all duration-1000 ease-out
                ${isHovered ? 'translate-y-full opacity-100' : 'translate-y-0 opacity-0'}
              `}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Terminal */}
      <div className="mt-8 w-full max-w-2xl">
        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono ml-2">seasides@conference</div>
          </div>
          <div className="p-4 font-mono">
            <div className="text-green-400 text-sm">
              <span className="text-blue-400">seasides@2026:</span>
              <span className="text-yellow-400">~$</span>
              <span className="ml-2">echo "Welcome to the future of cybersecurity"</span>
            </div>
            <div className="text-gray-300 text-sm mt-1">Welcome to the future of cybersecurity</div>
            <div className="text-green-400 text-sm mt-2 animate-pulse">
              <span className="text-blue-400">seasides@2026:</span>
              <span className="text-yellow-400">~$</span>
              <span className="ml-2">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <span class="font-semibold"> Defcon</span> ensuring equal learning opportunities for all.
          </p>

          <a href="about" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section - Interactive Highlights */}

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">HIGHLIGHTS</h3>
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Seasides Conference Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* <InteractiveHighlights /> */}
      </div>
    </section>
  );
}
