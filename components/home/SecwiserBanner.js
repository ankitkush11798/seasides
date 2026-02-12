import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function SecwiserBanner() {
  return (
    <section className="relative w-full h-[400px] my-12 overflow-hidden group">
      <Link href="/secwiser" className="block w-full h-full relative cursor-pointer">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/secwiser_banner.webp"
            alt="Secwiser - Register for Event"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">Secwiser</span>
              <br />
              Your Personal Cyber Security Companion
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              There will be on-the-spot registration available at the event. However, attendees can also register
              through the app in advance to speed up the check-in process.
            </p>

            <div className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all transform group-hover:translate-x-2">
              <span>Register Now & Download App</span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
