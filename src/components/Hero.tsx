import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — aerial Bahamas turquoise water (Unsplash) */}
      <Image
        src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80"
        alt="Aerial view of turquoise waters and white sand in the Bahamas"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Gradient overlays — extra dark at top so navbar text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/30 to-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-800/20 to-transparent" />

      {/* Content — pt-24 pushes below the fixed navbar */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-24">
        <p className="mb-6 text-sm font-semibold tracking-[0.3em] uppercase text-gold-400">
          Freeport &middot; Grand Bahama Island &middot; The Bahamas
        </p>

        {/* Serves two audiences on purpose. The page title and structured data
            still lead with corporate events for the Florida search work; the
            visible hero now also speaks to a family arriving from a newspaper
            ad, who used to land on "Host Your Next Corporate Event" and leave. */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Your Private
          <br />
          <span className="text-gold-400">Villa Compound</span>
          <br />
          in the Bahamas
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
          Four villas, one pool, room for fourteen — steps from Coral Beach in
          Freeport, Grand Bahama, and just 35 minutes from Fort Lauderdale.
          A family getaway or a company retreat. Villas from $150 a night, or
          take the whole compound from $650.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="?type=vacation#contact"
            className="rounded-full bg-gold-400 px-10 py-4 text-base font-semibold text-navy-950 hover:bg-gold-500 transition-all hover:scale-105 shadow-lg"
          >
            Plan a Family Stay
          </a>
          <a
            href="?type=corporate-retreat#contact"
            className="rounded-full border-2 border-white/40 px-10 py-4 text-base font-semibold text-white hover:border-gold-400 hover:text-gold-400 transition-all"
          >
            Plan a Corporate Retreat
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
            </svg>
            35-Min Flights from Florida
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Steps from the Beach
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            Sleeps Fourteen
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
