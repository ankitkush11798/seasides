'use client';
import { useState, useRef, useEffect } from 'react';
import { Wrench, Search, Package, Shield } from 'lucide-react';

const Villages = () => {
  const [hoveredVillage, setHoveredVillage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const villagesRef = useRef(null);

  const villages = [
    {
      id: 1,
      name: 'Hardware Village',
      icon: Wrench,
      emoji: '🔧',
      description:
        'Dive into the physical world of hardware security. Learn hardware hacking, reverse engineering, and hands-on exploitation of embedded systems.',
      topics: ['IoT Security', 'Firmware Analysis', 'Circuit Analysis', 'Side-Channel Attacks', 'Hardware Pentesting'],
      color: 'from-green-500 to-emerald-600',
      accentColor: 'green',
      url: 'https://hw101.me'
    },
    {
      id: 2,
      name: 'SAST SCA Village',
      icon: Search,
      emoji: '🔍',
      description:
        'Master static code analysis and software composition analysis. Discover vulnerabilities in source code and open-source dependencies.',
      topics: ['Code Review', 'Vulnerability Scanning', 'Dependency Analysis', 'SAST Tools', 'Security Testing'],
      color: 'from-cyan-500 to-blue-600',
      accentColor: 'cyan',
      url: 'https://village.scagoat.dev'
    },
    {
      id: 3,
      name: 'Container Security Village',
      icon: Package,
      emoji: '📦',
      description:
        'Explore the world of container and Kubernetes security. Learn about securing containerized applications and orchestration platforms.',
      topics: ['Kubernetes Security', 'Docker Security', 'Container Runtime', 'Pod Security', 'Network Policies'],
      color: 'from-indigo-500 to-purple-600',
      accentColor: 'purple',
      url: 'https://containersecurityvillage.kubernetesvillage.com'
    },
    {
      id: 4,
      name: 'Infrasec Village',
      icon: Shield,
      emoji: '🛡️',
      description:
        'A focused village on infrastructure attack and defense. A day of hands-on labs, live demos, and deep dives covering the entire stack—from network and cloud to containers and IaC. We show the real-world exploit, then teach the actionable fix—mastering the evidence-driven practices that build and secure resilient systems.',
      topics: [
        'Cloud Attack & Defense',
        'Hardened Kubernetes',
        'Zero Trust Networking',
        'Secure Infrastructure as Code',
        'Cloud Incident Response',
        'Resilient CI/CD Pipelines'
      ],
      color: 'from-red-500 to-pink-600',
      accentColor: 'red',
      url: 'https://infrasec-village.seasides.net/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (villagesRef.current) {
      observer.observe(villagesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={villagesRef}
      className="relative py-24 bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">Security Villages</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Dive deep into specialized cybersecurity domains with our expert-led villages. Each village offers hands-on
            learning, practical challenges, and real-world scenarios.
          </p>
        </div>

        {/* Villages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villages.map((village, index) => {
            const IconComponent = village.icon;
            const isHovered = hoveredVillage === village.id;

            return (
              <a
                key={village.id}
                href={village.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 relative overflow-hidden group cursor-pointer text-center block transform transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredVillage(village.id)}
                onMouseLeave={() => setHoveredVillage(null)}
              >
                {/* Icon with background */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      isHovered ? 'bg-orange-100 scale-110' : 'bg-gray-100'
                    }`}
                  >
                    <IconComponent
                      className={`w-12 h-12 transition-colors duration-300 ${
                        isHovered ? 'text-orange-600' : 'text-gray-700'
                      }`}
                    />
                  </div>
                </div>

                {/* Village Name */}
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isHovered ? 'text-orange-600' : 'text-gray-800'
                  }`}
                >
                  {village.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{village.description}</p>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wider">Key Topics</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {village.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 transition-all duration-300 hover:bg-orange-100 hover:border-orange-300 hover:text-orange-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Link */}
                <div
                  className={`flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    isHovered ? 'text-orange-600' : 'text-gray-500'
                  }`}
                >
                  <span>Visit Village</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-orange-500 transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Villages;
