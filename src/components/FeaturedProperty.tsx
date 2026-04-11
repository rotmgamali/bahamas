"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

const GALLERY = [
  { src: "/images/properties/bedroom-luxury.jpg", label: "Master Suite" },
  { src: "/images/properties/bathroom-jacuzzi.jpg", label: "Jacuzzi Bath" },
  { src: "/images/properties/bedroom-gray.jpg", label: "Guest Bedroom" },
  { src: "/images/properties/living-room-recliners.jpg", label: "Living Room" },
  { src: "/images/properties/living-room-main.jpg", label: "Lounge" },
  { src: "/images/properties/bathroom-teal.jpg", label: "En-Suite Bath" },
  { src: "/images/properties/villa-collage.jpg", label: "Overview" },
];

const FEATURES = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "5-Minute Walk to the Beach",
    desc: "Just 1/4 mile from the Atlantic Ocean — your team can be on white sand before the morning coffee gets cold",
  },
  {
    icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    title: "Salt-Water Pool Access",
    desc: "A salt-water pool right around the corner — ideal for post-session cool-downs and evening socials",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Spa-Style Jacuzzi & Full Kitchen",
    desc: "Tile-surround jacuzzi tub, granite countertops, stainless appliances — luxury finishes throughout for comfortable long-term stays",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Work-Ready Setup",
    desc: "Dedicated workspace, high-speed WiFi, washer/dryer, self check-in with keypad — everything for productive corporate stays",
  },
  {
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Entertainment & Outdoor Space",
    desc: "Reclining leather sofas, TV, outdoor yard with basketball court and palm trees — perfect for team bonding after hours",
  },
];

export default function FeaturedProperty() {
  const [activeImg, setActiveImg] = useState(0);

  const goPrev = useCallback(() => {
    setActiveImg((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  }, []);
  const goNext = useCallback(() => {
    setActiveImg((i) => (i === GALLERY.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section id="featured-property" className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-4">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
            Our Flagship Property
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Moringa Villa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy-950/60">
            Our flagship property in Freeport — a 5-minute walk from the
            Atlantic Ocean with a salt-water pool nearby. Rated 4.75 stars,
            featuring luxury finishes, spa amenities, a dedicated workspace,
            and everything your team needs for a productive long-term
            corporate stay.
          </p>
        </div>

        {/* Featured badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/30 px-5 py-2 text-sm font-semibold text-gold-500">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Most Requested by Corporate Groups
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <div>
            <div className="relative h-80 sm:h-[28rem] rounded-3xl overflow-hidden group">
              <Image
                src={GALLERY[activeImg].src}
                alt={`Moringa Villa — ${GALLERY[activeImg].label}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent pointer-events-none" />
              {/* Label */}
              <div className="absolute top-4 left-4 bg-navy-950/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
                {GALLERY[activeImg].label}
              </div>
              {/* Counter */}
              <div className="absolute top-4 right-4 bg-navy-950/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {activeImg + 1} / {GALLERY.length}
              </div>
              {/* Arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Previous photo"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Next photo"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {GALLERY.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImg
                      ? "border-gold-400 scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Quick stats */}
            <div className="flex gap-6 mb-8 text-sm text-navy-950/70">
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                3 Bedrooms
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2 Bathrooms
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Sleeps 8
              </div>
            </div>

            {/* Feature cards */}
            <div className="space-y-5 mb-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="rounded-xl bg-ocean-500/10 p-3 shrink-0">
                    <svg className="h-6 w-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-0.5">{f.title}</h4>
                    <p className="text-sm text-navy-950/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-navy-950 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold-400/10 p-3 shrink-0">
                  <svg className="h-6 w-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Corporate Rate Available
                  </h4>
                  <p className="text-white/60 text-sm mb-4">
                    Contact us for exclusive corporate pricing. Multi-night and
                    multi-villa bookings receive additional discounts.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-500 transition-colors"
                  >
                    Request a Quote
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
