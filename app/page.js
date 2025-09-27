import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Critical components loaded immediately for LCP
import RevolutionHero from '@/components/home/Slider';

// Non-critical components lazy loaded with optimized loading states
const Stats = dynamic(() => import('@/components/shared/Stats'), {
  loading: () => <div className="h-64 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg mx-6" />
});

// New homepage sections with Framer Motion animations
const About = dynamic(() => import('@/components/home/About'), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

// const NostalgiaGallery = dynamic(() => import('@/components/home/NostalgiaGallery'), {
//   loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
// });

const ReachUs = dynamic(() => import('@/components/shared/ReachUs'), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

const Faq = dynamic(() => import('@/components/shared/Faq'), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <div id="overview" className="scroll-mt-24 relative z-10">
        <RevolutionHero />
      </div>
      <div id="stats" className="scroll-mt-24 relative z-30">
        <Stats />
      </div>

      {/* New enhanced homepage sections */}
      <div id="about" className="scroll-mt-24 relative z-20">
        <About />
      </div>
      {/* <div id="nostalgia" className="scroll-mt-24">
        <NostalgiaGallery />
      </div> */}

      {/* Existing sections */}
      <div id="reach-us" className="scroll-mt-24 relative z-20">
        <ReachUs />
      </div>
      <div id="faq" className="scroll-mt-24 relative z-20">
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
