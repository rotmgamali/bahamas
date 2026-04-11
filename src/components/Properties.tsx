import Image from "next/image";

export default function Properties() {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-950 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
                Extra Capacity
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Even More Space? Meet Moringa &amp; Papaya
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Beyond the four main villas, SerenitySpaces has two additional
                private rooms on the north side of the property — Moringa and
                Papaya. These budget-friendly options are ideal for support
                staff, overflow guests, or attendees who want a quieter retreat
                away from the main complex.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Accommodates up to 5 additional guests",
                  "Private rooms with separate entrance",
                  "WiFi, A/C, and essential amenities included",
                  "Pool access available for an upcharge",
                  "Total property capacity: ~19 guests",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/60"
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-navy-950 hover:bg-gold-500 transition-colors"
              >
                Ask About Full-Property Booking
                <svg
                  className="h-4 w-4"
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

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/bedroom-blue.jpg"
                  alt="Moringa Villa private bedroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/bedroom-gray.jpg"
                  alt="Papaya Villa guest room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 col-span-2 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/outdoor-palms.jpg"
                  alt="Property grounds with palm trees"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
