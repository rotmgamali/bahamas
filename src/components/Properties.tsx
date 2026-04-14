import Image from "next/image";

const NEARBY_PROPERTY_PHOTOS = [
  "/images/properties/bedroom-luxury.jpg",
  "/images/properties/bathroom-jacuzzi.jpg",
  "/images/properties/kitchen-bar.jpg",
  "/images/properties/living-room-main.jpg",
  "/images/properties/outdoor-palms.jpg",
  "/images/properties/bedroom-blue.jpg",
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
            Additional Options
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Need More Space?{" "}
            <span className="text-ocean-500">We Have Options</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy-950/60">
            Bringing a larger group, or looking for backup capacity in case
            something changes? Beyond the four main villas, we have additional
            options available on request.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Option 1: Moringa & Papaya at SerenitySpaces */}
          <div className="rounded-3xl bg-sand-50 border border-sand-200 p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-ocean-500/10 px-4 py-1.5 text-xs font-semibold text-ocean-600 mb-4">
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              On-site at SerenitySpaces
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-950 mb-3">
              Moringa &amp; Papaya Villas
            </h3>
            <p className="text-navy-950/70 leading-relaxed mb-6">
              Two additional private rooms on the north side of the
              SerenitySpaces property. These budget-friendly options keep
              overflow guests close to the main complex without crowding the
              four luxury villas.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Accommodates up to 5 additional guests",
                "Private rooms with separate entrance",
                "WiFi, A/C, and essential amenities included",
                "Pool access available for an upcharge",
                "Total on-site capacity: up to 19 guests",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-navy-950/70"
                >
                  <svg
                    className="h-4 w-4 text-ocean-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white border border-sand-200 p-4 text-sm text-navy-950/60 leading-relaxed">
              <strong className="text-navy-950">Photos on request.</strong> We
              keep this side of the property quieter for guests who value
              privacy. Contact us and we&apos;ll send current photos and
              availability.
            </div>
          </div>

          {/* Option 2: Partner Property Nearby */}
          <div className="rounded-3xl bg-navy-950 p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-600/20 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/30 px-4 py-1.5 text-xs font-semibold text-gold-400 mb-4">
                <svg
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Partner Property in Freeport
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Fully-Equipped Backup Villa
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                For larger corporate groups or if SerenitySpaces is unavailable
                for your dates, we also manage a separate 3-bedroom villa
                nearby in Freeport. Features include a king master suite with
                tufted headboard, spa-style jacuzzi tub, full granite kitchen,
                reclining leather sofas, and a private yard with palm trees.
              </p>

              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {NEARBY_PROPERTY_PHOTOS.slice(0, 6).map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Partner property photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 mb-6">
                {[
                  "3 bedrooms, 2 full bathrooms",
                  "King master suite + jacuzzi tub",
                  "Full granite kitchen with stainless appliances",
                  "Reclining leather sofas + large living area",
                  "Outdoor yard with basketball court & palm trees",
                  "A/C throughout, WiFi, fully furnished",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <svg
                      className="h-4 w-4 text-gold-400 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white/60 leading-relaxed">
                <strong className="text-white">
                  Separate booking, same team.
                </strong>{" "}
                We handle both properties personally. Ask about pairing
                SerenitySpaces with the nearby villa for events up to 22
                guests.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-4 text-base font-semibold text-white hover:bg-ocean-700 transition-all hover:scale-105"
          >
            Ask About Overflow Options
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
