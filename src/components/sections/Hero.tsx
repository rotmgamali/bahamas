import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950">
      {/* Background property image */}
      <Image
        src="/images/villa-outdoor-palms.jpg"
        alt="Beachside villa with palm trees in Freeport, Grand Bahama"
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
          Freeport, Grand Bahama Island
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Where Business
          <br />
          Meets Paradise
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Exclusive beachside villas for corporate retreats, conferences, and
          team-building events. Premium venues at exceptional rates with
          personalized corporate packages.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#contact" size="lg">
            Request a Quote
          </Button>
          <Button
            href="#venues"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy-950"
          >
            Explore Venues
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
