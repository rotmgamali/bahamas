import Image from "next/image";

const stats = [
  { value: "6", label: "Luxury Villas" },
  { value: "19", label: "Guest Capacity" },
  { value: "5 Min", label: "To Coral Beach" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
              Born from a Dream,{" "}
              <span className="text-ocean-500">Built for Connection</span>
            </h2>

            <p className="text-lg text-navy-950/70 leading-relaxed mb-6">
              SerenitySpaces began in 2018 when we discovered a stunning property
              just 400 meters from the pristine turquoise waters of Grand Bahama
              Island. What started as a personal vacation home quickly became
              something greater — every friend and colleague who visited fell in
              love with the peaceful energy and natural beauty of this place.
            </p>

            <p className="text-lg text-navy-950/70 leading-relaxed mb-6">
              Inspired by the tropical surroundings of Freeport&apos;s Sea Breeze
              area, we set out to create a collection of six distinct yet
              harmonious living spaces — Agave, Coconut, Lime, Pi&ntilde;a,
              Moringa, and Papaya — that blend modern comfort with authentic
              island character. Today, SerenitySpaces is a villa complex designed
              for groups who value personal service, genuine connection, and the
              kind of atmosphere no hotel can replicate.
            </p>

            <p className="text-lg text-navy-950/70 leading-relaxed mb-8">
              Just a 25-minute drive from the airport and steps from Coral Beach,
              our property offers tropical gardens, a private pool, and the
              hands-on hospitality that turns corporate retreats into
              unforgettable experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-sand-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-ocean-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-950/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2x2 Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80"
                  alt="Crystal clear turquoise waters near Freeport, Grand Bahama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/firmconnect/piano-room-CPcdKV-I.png"
                  alt="Pina Villa with baby grand piano at SerenitySpaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/firmconnect/living-space-C-RDnF3U.png"
                  alt="Lime Villa open-concept living space with kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80"
                  alt="Palm trees lining a Bahamas beach near the property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
