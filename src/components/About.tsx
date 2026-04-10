import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
              Welcome to SerenitySpaces
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
              Where Business Meets{" "}
              <span className="text-ocean-500">Paradise</span>
            </h2>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-6">
              Nestled in the heart of Freeport on Grand Bahama Island,
              SerenitySpaces offers an exclusive collection of luxury villas
              designed for discerning corporate groups. Whether you&apos;re
              planning a team-building retreat, executive offsite, or client
              entertainment event, our properties provide the perfect blend of
              professional functionality and island luxury.
            </p>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-8">
              With multiple villas available for large groups, dedicated
              concierge service, and special corporate pricing, we make it
              effortless to host unforgettable events just steps from pristine
              Bahamian beaches.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">3</div>
                <div className="text-sm text-navy-950/60 mt-1">Exclusive Villas</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">30+</div>
                <div className="text-sm text-navy-950/60 mt-1">Guest Capacity</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">24/7</div>
                <div className="text-sm text-navy-950/60 mt-1">Concierge</div>
              </div>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/1000214128.jpg"
                  alt="Luxury master bedroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/1000214130.jpg"
                  alt="Spa-style jacuzzi bathroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/1000214148.jpg"
                  alt="Open-plan kitchen and bar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/1000214136.jpg"
                  alt="Spacious living area"
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
