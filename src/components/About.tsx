import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-sand-50">
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
              SerenitySpaces offers an exclusive collection of private villas in
              Freeport, Grand Bahama Island — purpose-built for corporate groups
              who want more than another generic hotel. Our flagship property
              plus two additional villas accommodate teams of any size, with
              special rates that reward group bookings.
            </p>
            <p className="text-lg text-navy-950/70 leading-relaxed mb-8">
              We handle everything personally. No automated booking engine — you
              work directly with our team to craft the perfect event. From
              airport pickup to private chef arrangements, we make your
              corporate retreat seamless.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">
                  3
                </div>
                <div className="text-sm text-navy-950/60 mt-1">
                  Private Villas
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">
                  26+
                </div>
                <div className="text-sm text-navy-950/60 mt-1">
                  Guest Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-ocean-500">
                  1-on-1
                </div>
                <div className="text-sm text-navy-950/60 mt-1">
                  Personal Service
                </div>
              </div>
            </div>
          </div>

          {/* Image grid — Freeport scenery + property */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80"
                  alt="Bahamas crystal clear water"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/bathroom-jacuzzi.jpg"
                  alt="Spa-style jacuzzi in The Grand Villa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/properties/bedroom-luxury.jpg"
                  alt="Luxury master bedroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80"
                  alt="Palm trees on Bahamas beach"
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
