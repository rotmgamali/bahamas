import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Gold Rock Beach",
    description:
      "Pristine white sand featured in Pirates of the Caribbean. Miles of untouched shoreline perfect for team beach events.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    title: "Port Lucaya Marketplace",
    description:
      "The Bahamas' largest open-air shopping and dining hub — 66 shops, 13 restaurants, and live music nightly at Count Basie Square.",
    image:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80",
  },
  {
    title: "Lucayan National Park",
    description:
      "40 acres of mangrove trails, towering sand dunes, and one of the world's longest underwater cave systems.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  },
  {
    title: "Ocean Adventures",
    description:
      "Swim with dolphins at Sanctuary Bay, snorkel coral reefs, deep-sea fish, or parasail over crystal-clear turquoise waters.",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80",
  },
];

export default function Destination() {
  return (
    <section id="destination" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
              Why Freeport
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
              Grand Bahama Island —
              <br />
              <span className="text-ocean-500">
                The Closest Caribbean Escape
              </span>
            </h2>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-6">
              Freeport is just a <strong>35-minute direct flight</strong> from
              Fort Lauderdale and under an hour from Miami. No long-haul travel,
              no passport hassle for US citizens with a passport card — your team
              arrives refreshed and ready.
            </p>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-8">
              With white-sand beaches, world-class dining at Port Lucaya
              Marketplace, and adventures from dolphin encounters to deep-sea
              fishing — Freeport delivers the wow factor that turns a corporate
              event into the trip everyone talks about for years.
            </p>

            {/* Flight info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-ocean-500/5 border border-ocean-500/10 p-4 text-center">
                <div className="font-display text-2xl font-bold text-ocean-600">
                  35
                </div>
                <div className="text-xs text-navy-950/50 mt-1">
                  min from Ft. Lauderdale
                </div>
              </div>
              <div className="rounded-xl bg-ocean-500/5 border border-ocean-500/10 p-4 text-center">
                <div className="font-display text-2xl font-bold text-ocean-600">
                  50
                </div>
                <div className="text-xs text-navy-950/50 mt-1">
                  min from Miami
                </div>
              </div>
              <div className="rounded-xl bg-ocean-500/5 border border-ocean-500/10 p-4 text-center">
                <div className="font-display text-2xl font-bold text-ocean-600">
                  30+
                </div>
                <div className="text-xs text-navy-950/50 mt-1">
                  direct flights / week
                </div>
              </div>
            </div>
          </div>

          {/* Destination image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80"
                  alt="Crystal clear Bahamas water"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80"
                  alt="Tropical palm trees and beach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80"
                  alt="Sunset over Bahamas ocean"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80"
                  alt="Aerial view of tropical island"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden border border-sand-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-navy-950/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
