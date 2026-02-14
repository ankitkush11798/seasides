import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBlog,
  FaBug,
  FaCalendarAlt,
  FaGooglePlay,
  FaMicrophone,
  FaNewspaper,
  FaShieldAlt,
  FaVideo
} from 'react-icons/fa';

export const metadata = {
  title: 'Secwiser - Stay Ahead in Information Security | Seasides 2026',
  description:
    'Secwiser is your personalized cybersecurity companion. Stay informed with curated news, blogs, bug bounty updates, and register for Seasides 2026 trainings.'
};

export default function SecwiserPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/secwiser_banner.webp"
            alt="Secwiser Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Secwiser.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              The world of cybersecurity.. Personalised!
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Stay informed, stay sharp. Secwiser is your smart feed that curates everything you need invalidating the
              noise. From the latest news to expert blogs, bug bounty programs, CFPs, and global conference updates —
              all tailored to your role and interests.
            </p>

            <div className="bg-gray-900/50 border border-green-500/30 p-6 rounded-xl mb-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-green-400 mb-2">⚡ Important for Seasides 2026</h3>
              <p className="text-gray-300">
                Please note that there will be on-the-spot registration available at the event. However, attendees can
                also register through the app in advance to speed up the check-in process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://secwiser.com/apps"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-900/50"
              >
                <FaGooglePlay size={24} />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase">Download</div>
                  <div className="text-xl">Secwiser App</div>
                </div>
              </Link>
              {/* <button disabled className="flex items-center justify-center gap-3 bg-gray-800 text-gray-400 px-8 py-4 rounded-full font-bold cursor-not-allowed border border-gray-700">
                <FaApple size={24} />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase">Download on the</div>
                  <div className="text-xl">App Store</div>
                </div>
              </button> */}
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-sm md:max-w-md perspective-1000">
            {/* App Mockup Representation */}
            <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />

              {/* Screen Content */}
              <div className="flex-1 bg-black text-white p-4 overflow-y-auto no-scrollbar">
                <div className="flex justify-between items-center mb-6 pt-8">
                  <span className="text-xl font-bold text-green-500">Sec Wiser.</span>
                  <div className="h-8 w-8 rounded-full bg-gray-700" />
                </div>

                {/* Grid Menu */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gray-800 p-3 rounded-xl flex flex-col items-center justify-center aspect-square text-center">
                    <FaCalendarAlt className="text-cyan-400 mb-2" />
                    <span className="text-[10px] text-gray-300">Conferences</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-xl flex flex-col items-center justify-center aspect-square text-center">
                    <FaMicrophone className="text-purple-400 mb-2" />
                    <span className="text-[10px] text-gray-300">CFPs</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-xl flex flex-col items-center justify-center aspect-square text-center">
                    <FaVideo className="text-yellow-400 mb-2" />
                    <span className="text-[10px] text-gray-300">Talks</span>
                  </div>
                </div>

                {/* Explore Section */}
                <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wider uppercase">Explore</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-2xl flex items-center justify-between border-l-4 border-pink-500">
                    <div>
                      <h4 className="font-bold text-sm">News</h4>
                      <p className="text-[10px] text-gray-400">Personalized updates</p>
                    </div>
                    <FaNewspaper className="text-pink-500" />
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-2xl flex items-center justify-between border-l-4 border-blue-500">
                    <div>
                      <h4 className="font-bold text-sm">Blogs</h4>
                      <p className="text-[10px] text-gray-400">Curated reads</p>
                    </div>
                    <FaBlog className="text-blue-500" />
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-2xl flex items-center justify-between border-l-4 border-yellow-500">
                    <div>
                      <h4 className="font-bold text-sm">Advisory</h4>
                      <p className="text-[10px] text-gray-400">CVE, Circulars & more</p>
                    </div>
                    <FaShieldAlt className="text-yellow-500" />
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-2xl flex items-center justify-between border-l-4 border-green-500">
                    <div>
                      <h4 className="font-bold text-sm">Bug Bounty</h4>
                      <p className="text-[10px] text-gray-400">Programs & Reports</p>
                    </div>
                    <FaBug className="text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationFlow />

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Download Secwiser?</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCalendarAlt size={30} className="text-cyan-400" />}
              title="Global Events & Conferences"
              description="Never miss a cybersecurity conference again. Get updates on upcoming events like Seasides, BlackHat, DEF CON, and local meetups."
            />
            <FeatureCard
              icon={<FaShieldAlt size={30} className="text-yellow-400" />}
              title="Real-time Advisories"
              description="Stay ahead of threats with instant notifications on new CVEs, security circulars, and critical patches."
            />
            <FeatureCard
              icon={<FaNewspaper size={30} className="text-pink-400" />}
              title="Curated News Feed"
              description="A personalized news feed that learns from your interests. Filter noise and focus on what matters to your role."
            />
            <FeatureCard
              icon={<FaBug size={30} className="text-green-400" />}
              title="Bug Bounty Updates"
              description="Track new programs, read write-ups, and stay updated on the latest bug bounty platforms and rewards."
            />
            <FeatureCard
              icon={<FaMicrophone size={30} className="text-purple-400" />}
              title="Podcasts & Talks"
              description="Listen to industry leaders and watch conference talks directly from the app. Learn on the go."
            />
            <FeatureCard
              icon={<FaVideo size={30} className="text-orange-400" />}
              title="Training Registration"
              description="Exclusive access to register for Seasides 2026 hands-on training sessions and workshops."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-900 to-black border border-green-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stay Ahead?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of security professionals who trust Secwiser for their daily intelligence. Download the app
            today and register for your Seasides training!
          </p>

          <Link
            href="https://secwiser.com/apps"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
          >
            <FaGooglePlay size={24} className="text-green-600" />
            <span>Download Now</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 hover:bg-gray-800 p-8 rounded-2xl transition-all border border-gray-700/50 hover:border-green-500/30 group">
      <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function RegistrationFlow() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Register (Free)</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400">Follow these simple steps to secure your spot at Seasides Goa 2026</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          {/* Step 1: Browse Events */}
          <div className="relative group perspective-1000">
            <div className="transform transition-transform duration-500 hover:scale-105 hover:-rotate-1 relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-black rounded-3xl p-2 border border-green-500/30 shadow-2xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-green-400/50 whitespace-nowrap z-20">
                  STEP 1: Browse Events
                </div>
                <div className="relative h-[500px] w-[240px] md:h-[600px] md:w-[280px] overflow-hidden rounded-2xl">
                  <Image
                    src="/01d93a9b-f83f-4076-a7f4-32cdfbaa0ad0.jpg"
                    alt="Step 1: Browse Events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Animated Arrow Connector (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] z-0 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                </marker>
              </defs>
              <path
                d="M 20 100 Q 200 0 380 90"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                className="animate-draw-arrow"
                filter="url(#glow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0"
                  dur="2s"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
              </path>
            </svg>
          </div>

          {/* Mobile Arrow (Vertical) */}
          <div className="md:hidden text-green-500 animate-bounce">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4L12 20M12 20L6 14M12 20L18 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 2: Register */}
          <div className="relative group perspective-1000">
            <div className="transform transition-transform duration-500 hover:scale-105 hover:rotate-1 relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-black rounded-3xl p-2 border border-green-500/30 shadow-2xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-green-400/50 whitespace-nowrap z-20">
                  STEP 2: Complete Form
                </div>
                <div className="relative h-[500px] w-[240px] md:h-[600px] md:w-[280px] overflow-hidden rounded-2xl">
                  <Image
                    src="/fb405e0a-e5c5-4a7e-9fb0-66e70198f27a.jpg"
                    alt="Step 2: Registration Form"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all group">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-bold text-green-400 mb-2">1. Browse Events</h3>
            <p className="text-gray-400 text-sm">Open the SecWiser app and navigate to the Events section.</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all group">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">👆</span>
            </div>
            <h3 className="text-lg font-bold text-green-400 mb-2">2. Click Register</h3>
            <p className="text-gray-400 text-sm">Tap &quot;Free Registration&quot; on the SeaSides Conference card.</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all group">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-bold text-green-400 mb-2">3. Fill Form</h3>
            <p className="text-gray-400 text-sm">Complete your details to secure your spot instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
