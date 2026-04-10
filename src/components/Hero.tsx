import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/properties/outdoor-palms.jpg"
        alt="SerenitySpaces Bahamas Villa"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-800/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-6 text-sm font-semibold tracking-[0.3em] uppercase text-gold-400">
          Freeport &middot; Grand Bahama Island
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Your Exclusive
          <br />
          <span className="text-gold-400">Corporate Retreat</span>
          <br />
          in Paradise
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
          Premium beachside villas in the Bahamas, purpose-built for corporate
          events, team retreats, and executive getaways. Exclusive rates for
          business groups.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gold-400 px-10 py-4 text-base font-semibold text-navy-950 hover:bg-gold-500 transition-all hover:scale-105 shadow-lg"
          >
            Plan Your Event
          </a>
          <a
            href="#properties"
            className="rounded-full border-2 border-white/40 px-10 py-4 text-base font-semibold text-white hover:border-gold-400 hover:text-gold-400 transition-all"
          >
            View Properties
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            3 Exclusive Villas
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Steps from the Beach
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Corporate Discounts
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
