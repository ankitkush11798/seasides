import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import dynamic from 'next/dynamic';

// Critical components loaded immediately for LCP
import CisoBanner from '@/components/home/CisoBanner';
import RevolutionHero from '@/components/home/Slider';

// Non-critical components lazy loaded with optimized loading states
const Stats = dynamic(() => import('@/components/shared/Stats'), {
  loading: () => <div className="h-[800px] bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg mx-6" />
});

// New homepage sections with Framer Motion animations
const SecwiserBanner = dynamic(() => import('@/components/home/SecwiserBanner'), {
  loading: () => <div className="h-[400px] bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

const About = dynamic(() => import('@/components/home/About'), {
  loading: () => <div className="h-[600px] bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

const Villages = dynamic(() => import('@/components/home/Villages'), {
  loading: () => <div className="h-[600px] bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

// const Reviewers = dynamic(() => import('@/components/home/Reviews'), {
//   loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
// });

const Sponsors = dynamic(() => import('@/components/home/Sponsors'), {
  loading: () => <div className="h-[800px] bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
});

// const NostalgiaGallery = dynamic(() => import('@/components/home/NostalgiaGallery'), {
//   loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg mx-6" />
// });

const ReachUs = dynamic(() => import('@/components/shared/ReachUs'), {
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

      <div id="secwiser-banner" className="relative z-20">
        <SecwiserBanner />
      </div>

      {/* New enhanced homepage sections */}
      <div id="about" className="scroll-mt-24 relative z-20">
        <About />
      </div>
      <div id="ciso-banner" className="relative z-20">
        <CisoBanner />
      </div>

      <div id="villages" className="scroll-mt-24 relative z-20">
        <Villages />
      </div>

      {/* <div id="reviewers" className="scroll-mt-24 relative z-20">
        <Reviewers />
      </div> */}

      <div id="sponsors" className="scroll-mt-24 relative z-20">
        <Sponsors />
      </div>

      {/* <div id="nostalgia" className="scroll-mt-24">
        <NostalgiaGallery />
      </div> */}

      {/* Existing sections */}
      <div id="reach-us" className="scroll-mt-24 relative z-20">
        <ReachUs />
      </div>
      <Footer />
    </main>
  );
}
