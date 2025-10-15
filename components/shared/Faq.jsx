'use client';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Faq = () => {
  const [open, setOpen] = useState(null);
  const [, setIsVisible] = useState(false);
  const faqRef = useRef(null);
  const { isDark } = useTheme();

  const faqs = [
    {
      question: 'What is Seasides?',
      answer:
        "Seasides is India's premier FREE cybersecurity conference taking place at International Centre Goa from February 19-21, 2026. It's a community-driven event designed to bring together cybersecurity professionals, students, and enthusiasts for learning, networking, and knowledge sharing."
    },
    {
      question: 'Is it really completely free to attend?',
      answer:
        'Yes! Seasides is 100% FREE for all attendees. This includes access to all sessions, meals, and networking events. Our mission is to make high-quality cybersecurity education accessible to everyone, regardless of their financial situation.'
    },
    {
      question: 'Do I need to register in advance?',
      answer:
        'Although the conference is free and open to everyone, we’ll use this registration form to estimate interest in each session. Please note that seats for specific trainings will be allocated on a first-come, first-served basis.'
    },
    {
      question: 'Who can attend Seasides?',
      answer:
        "Everyone! Whether you're a cybersecurity professional, student, developer, IT administrator, or simply curious about cybersecurity, you're welcome. We cater to all skill levels from beginners to experts."
    },
    {
      question: 'Where exactly is the venue located?',
      answer:
        'The conference takes place at International Centre Goa, a premier conference facility located in the heart of Goa. Detailed address and directions will be provided to registered attendees.'
    },
    {
      question: 'Is food provided during the conference?',
      answer:
        "We aim to provide meals during the conference days — including lunch, tea/snacks and refreshment breaks. While we'll do our best to accommodate dietary preferences and restrictions, please note that we may not be able to support all requirements. In such cases, we encourage you to explore nearby eateries or order online through services like Swiggy or Zomato."
    },
    {
      question: 'Can I attend the conference online?',
      answer:
        'The conference is designed as an in-person experience to maximize networking and hands-on learning. However, we may live stream selected sessions - updates will be shared on our social channels.'
    },
    {
      question: 'What should I bring to the conference?',
      answer:
        "Bring your laptop, chargers, notebooks, and an eagerness to learn! We'll provide WiFi, power outlets, meals, and all conference materials. Don't forget comfortable clothes for the Goa weather!"
    }
  ];

  const toggle = index => setOpen(open === index ? null : index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (faqRef.current) observer.observe(faqRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={faqRef}
      className={`relative py-20 transition-colors duration-300 ${
        isDark ? 'bg-charcoal-gray text-white' : 'bg-light-gray text-charcoal-gray'
      }`}
    >
      <div className="relative container mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
            Frequently Asked Questions
          </h2>
          <div className="w-32 h-1 bg-sunset-orange mx-auto rounded-full mb-4" />
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Everything you need to know about Seasides
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item backdrop-blur-sm rounded-2xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80'
                  : 'bg-white/80 border-white/20 hover:bg-white/90'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 flex items-center justify-center bg-sunset-orange rounded-full text-white font-bold text-lg transform transition-transform duration-300 ${
                    open === index ? 'rotate-180' : ''
                  }`}
                >
                  {open === index ? '−' : '+'}
                </span>
              </button>

              <div
                className={`faq-answer overflow-hidden transition-max-height duration-500 ${
                  open === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
