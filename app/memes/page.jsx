'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const MemePage = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  // Professional corporate color palette (opposite of current beach theme)
  const corporateTheme = {
    primary: '#2C3E50', // Corporate Navy
    secondary: '#34495E', // Steel Blue
    accent: '#7F8C8D', // Professional Gray
    background: '#ECF0F1', // Corporate White
    surface: '#FFFFFF', // Pure White
    text: '#2C3E50', // Dark Text
    textMuted: '#7F8C8D', // Muted Text
    border: '#BDC3C7', // Light Border
    shadow: 'rgba(44, 62, 80, 0.1)'
  };

  const memes = [
    {
      id: 1,
      title: 'When the conference WiFi actually works',
      imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&h=400&fit=crop&crop=center',
      category: 'Conference Life',
      votes: 1247
    },
    {
      id: 2,
      title: 'Me explaining why I need another monitor',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=center',
      category: 'Developer Life',
      votes: 892
    },
    {
      id: 3,
      title: 'When your code works on the first try',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop&crop=center',
      category: 'Programming',
      votes: 2156
    },
    {
      id: 4,
      title: 'Coffee: The real MVP of conferences',
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop&crop=center',
      category: 'Conference Life',
      votes: 1834
    },
    {
      id: 5,
      title: "When someone asks if you're a frontend or backend developer",
      imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&h=400&fit=crop&crop=center',
      category: 'Developer Life',
      votes: 1456
    },
    {
      id: 6,
      title: 'Debugging at 3 AM be like',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop&crop=center',
      category: 'Programming',
      votes: 987
    },
    {
      id: 7,
      title: "When the speaker asks 'Can everyone see my screen?'",
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=center',
      category: 'Conference Life',
      votes: 2234
    },
    {
      id: 8,
      title: "Git commit -m 'fixed bugs'",
      imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop&crop=center',
      category: 'Programming',
      votes: 1678
    }
  ];

  const categories = ['All', 'Conference Life', 'Developer Life', 'Programming'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMemes = activeCategory === 'All' ? memes : memes.filter(meme => meme.category === activeCategory);

  const handleVote = memeId => {
    // In a real app, this would update the backend
    console.log(`Voted for meme ${memeId}`);
  };

  return (
    <div style={{ backgroundColor: corporateTheme.background, minHeight: '100vh' }}>
      <Navbar />

      {/* Corporate Header Section */}
      <div
        style={{
          background: `linear-gradient(135deg, ${corporateTheme.primary} 0%, ${corporateTheme.secondary} 100%)`,
          color: 'white',
          padding: '4rem 0'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Memes Hub</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Corporate-grade humor for the discerning tech professional
          </p>
          <div
            style={{
              width: '120px',
              height: '4px',
              backgroundColor: corporateTheme.accent,
              margin: '2rem auto',
              borderRadius: '2px'
            }}
          />
        </div>
      </div>

      {/* Professional Stats Section */}
      <div
        style={{
          backgroundColor: corporateTheme.surface,
          borderTop: `1px solid ${corporateTheme.border}`,
          borderBottom: `1px solid ${corporateTheme.border}`
        }}
        className="py-12"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div style={{ color: corporateTheme.primary }} className="text-4xl font-bold mb-2">
                {memes.length}
              </div>
              <div style={{ color: corporateTheme.textMuted }}>Quality Memes</div>
            </div>
            <div>
              <div style={{ color: corporateTheme.primary }} className="text-4xl font-bold mb-2">
                {memes.reduce((sum, meme) => sum + meme.votes, 0).toLocaleString()}
              </div>
              <div style={{ color: corporateTheme.textMuted }}>Professional Votes</div>
            </div>
            <div>
              <div style={{ color: corporateTheme.primary }} className="text-4xl font-bold mb-2">
                {categories.length - 1}
              </div>
              <div style={{ color: corporateTheme.textMuted }}>Business Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Filter Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                backgroundColor: activeCategory === category ? corporateTheme.primary : corporateTheme.surface,
                color: activeCategory === category ? 'white' : corporateTheme.text,
                border: `2px solid ${activeCategory === category ? corporateTheme.primary : corporateTheme.border}`,
                boxShadow: `0 4px 8px ${corporateTheme.shadow}`
              }}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Professional Memes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMemes.map(meme => (
            <div
              key={meme.id}
              style={{
                backgroundColor: corporateTheme.surface,
                border: `1px solid ${corporateTheme.border}`,
                boxShadow: `0 8px 24px ${corporateTheme.shadow}`
              }}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedMeme(meme)}
            >
              <div className="relative h-64">
                <Image
                  src={meme.imageUrl}
                  alt={meme.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div
                  style={{ backgroundColor: corporateTheme.primary }}
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
                >
                  {meme.category}
                </div>
              </div>

              <div className="p-6">
                <h3 style={{ color: corporateTheme.text }} className="text-lg font-bold mb-3 line-clamp-2">
                  {meme.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div style={{ color: corporateTheme.primary }} className="text-2xl">
                      📊
                    </div>
                    <span style={{ color: corporateTheme.textMuted }} className="text-sm font-medium">
                      {meme.votes.toLocaleString()} votes
                    </span>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleVote(meme.id);
                    }}
                    style={{
                      backgroundColor: corporateTheme.primary,
                      color: 'white'
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Endorse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate CTA Section */}
      <div
        style={{
          backgroundColor: corporateTheme.surface,
          borderTop: `1px solid ${corporateTheme.border}`
        }}
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 style={{ color: corporateTheme.primary }} className="text-3xl md:text-4xl font-bold mb-4">
            Submit Your Professional Content
          </h2>
          <p style={{ color: corporateTheme.textMuted }} className="text-lg mb-8 max-w-2xl mx-auto">
            Share your enterprise-grade humor with our distinguished community of technology professionals.
          </p>
          <button
            style={{
              background: `linear-gradient(135deg, ${corporateTheme.primary} 0%, ${corporateTheme.secondary} 100%)`,
              color: 'white',
              boxShadow: `0 8px 24px ${corporateTheme.shadow}`
            }}
            className="px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform duration-300"
          >
            Submit Professional Meme
          </button>
        </div>
      </div>

      {/* Modal for Meme Detail */}
      {selectedMeme && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMeme(null)}
        >
          <div
            style={{
              backgroundColor: corporateTheme.surface,
              border: `1px solid ${corporateTheme.border}`
            }}
            className="max-w-2xl w-full rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image src={selectedMeme.imageUrl} alt={selectedMeme.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 style={{ color: corporateTheme.primary }} className="text-2xl font-bold mb-4">
                {selectedMeme.title}
              </h2>
              <div className="flex items-center justify-between">
                <div
                  style={{
                    backgroundColor: corporateTheme.primary,
                    color: 'white'
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                >
                  {selectedMeme.category}
                </div>
                <div style={{ color: corporateTheme.textMuted }} className="text-lg font-semibold">
                  📊 {selectedMeme.votes.toLocaleString()} Professional Endorsements
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MemePage;
