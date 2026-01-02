'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Linkedin, Quote, Star } from 'lucide-react';
import Image from 'next/image';

const Reviews = () => {
  const { isDark } = useTheme();

  const reviews = [
    {
      id: 1,
      name: 'Kashish Mittal',
      role: 'Chief Information Security Officer',
      image: '/review-panel/kashish_mitta.jpg',
      review:
        "Seasides brings together an exceptional blend of cutting-edge security research and hands-on learning. As someone who's built security programs from the ground up, I deeply appreciate the conference's focus on practical, real-world challenges. The quality of talks, workshops, and networking opportunities is unparalleled in the security community.",
      linkedin: 'https://www.linkedin.com/in/kashishmittalcmu/',
      stars: 5
    },
    {
      id: 2,
      name: 'Anirudh Duggal',
      role: 'Senior Security Engineer, YouTube',
      image: '/review-panel/anirudh-duggal.jpg',
      review:
        "Seasides is where offensive security professionals, researchers, and innovators come together to share knowledge and push boundaries. The village format creates an immersive learning environment that you simply can't find elsewhere. From AI security to cloud infrastructure, the technical depth and community engagement are exceptional.",
      linkedin: 'https://www.linkedin.com/in/anirudh-duggal/',
      stars: 5
    }
  ];

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-40 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} fill="currentColor" />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}
            >
              Our Reviewers
            </span>
            <Star className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} fill="currentColor" />
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Meet the{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Reviewers
            </span>
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' : 'bg-white/80 border-gray-200 shadow-xl'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-4">
                <div
                  className={`p-4 rounded-2xl ${
                    isDark
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                      : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  } shadow-lg`}
                >
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mt-6">
                {/* Content */}
                <p className={`text-lg italic leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{review.review}"
                </p>

                {/* Divider */}
                <div className={`h-px w-full mb-6 ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`} />

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                      <Image src={review.image} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{review.name}</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{review.role}</p>
                    </div>
                  </div>

                  <a
                    href={review.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-700 hover:bg-blue-600/20 text-blue-400'
                        : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
