import Image from "next/image";

const EVENT_TYPES = [
  {
    title: "Executive Retreats",
    description:
      "Bring your leadership team to an inspiring island setting. Private villas, strategic sessions by day, sunset networking by night.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Team Building",
    description:
      "Unite your team with beach activities, group dinners, and collaborative workshops in a relaxed tropical atmosphere.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Client Entertainment",
    description:
      "Impress your top clients with an exclusive Bahamian getaway. Premium accommodations and curated island experiences.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Annual Conferences",
    description:
      "Host intimate conferences for up to 30 attendees across our villa compound. Work hard, then unwind on island time.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function CorporateEvents() {
  return (
    <section id="events" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-600/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold-400/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
              Corporate Events
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Elevate Your Next
              <br />
              Corporate Event
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Why settle for another hotel ballroom when your team could be
              strategizing poolside in the Bahamas? Our exclusive villa
              compound in Freeport provides the privacy, space, and island
              charm that transforms ordinary corporate events into
              extraordinary experiences.
            </p>

            {/* Pricing callout */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold-400/10 p-3">
                  <svg className="h-6 w-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Exclusive Corporate Rates
                  </h4>
                  <p className="text-white/60 text-sm">
                    Special discounted pricing for corporate groups. Multi-villa
                    bookings receive additional savings. Contact us for a custom
                    quote tailored to your event size and duration.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-base font-semibold text-navy-950 hover:bg-gold-500 transition-all hover:scale-105"
            >
              Get a Custom Quote
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Event types grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {EVENT_TYPES.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-ocean-400 mb-4">{event.icon}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom image strip */}
        <div className="mt-20 grid grid-cols-4 gap-4 rounded-2xl overflow-hidden">
          {[
            "/images/properties/1000214128.jpg",
            "/images/properties/1000214148.jpg",
            "/images/properties/1000214170.jpg",
            "/images/properties/1000214160.jpg",
          ].map((src, i) => (
            <div key={src} className="relative h-32 sm:h-48">
              <Image
                src={src}
                alt={`Venue photo ${i + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ocean-800/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
