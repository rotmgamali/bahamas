export default function Location() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map / Location visual */}
          <div className="relative rounded-3xl overflow-hidden h-96 bg-ocean-600/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57664.76906867046!2d-78.7!3d26.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892ab9a7f3bae9d3%3A0x4e44d29a01cb3f0f!2sFreeport%2C%20The%20Bahamas!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Freeport, Grand Bahama Island location map"
            />
          </div>

          {/* Location details */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
              Location
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
              Freeport, Grand Bahama Island
            </h2>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-8">
              Grand Bahama Island is just a short flight from Miami and Fort
              Lauderdale, making it incredibly accessible for US-based
              corporate groups. Freeport offers the perfect balance of island
              tranquility and modern convenience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-ocean-500/10 p-3 shrink-0">
                  <svg className="h-6 w-6 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950 mb-1">
                    Easy Access
                  </h4>
                  <p className="text-sm text-navy-950/60">
                    Direct flights from Miami (45 min), Fort Lauderdale, Atlanta,
                    and New York. Grand Bahama International Airport is just 15
                    minutes from our villas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-ocean-500/10 p-3 shrink-0">
                  <svg className="h-6 w-6 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950 mb-1">
                    Prime Beachside Location
                  </h4>
                  <p className="text-sm text-navy-950/60">
                    Our villas are located in a quiet residential area of Freeport,
                    just minutes from pristine beaches, restaurants, and local
                    attractions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-ocean-500/10 p-3 shrink-0">
                  <svg className="h-6 w-6 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950 mb-1">
                    Island Activities
                  </h4>
                  <p className="text-sm text-navy-950/60">
                    Snorkeling, deep-sea fishing, golf at the Lucayan course,
                    Port Lucaya Marketplace shopping, and the world-famous
                    swimming pigs excursion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
