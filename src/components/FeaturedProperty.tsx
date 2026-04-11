"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const HERO_GALLERY = [
  { src: "/images/properties/villa-collage.jpg", label: "The SerenitySpaces Complex" },
  { src: "/images/properties/outdoor-palms.jpg", label: "Tropical Grounds" },
  { src: "/images/properties/living-room-main.jpg", label: "Lime Villa - Gathering Space" },
  { src: "/images/properties/bedroom-luxury.jpg", label: "Agave Villa - Master Suite" },
  { src: "/images/properties/kitchen-dining.jpg", label: "Lime Villa - Chef's Kitchen" },
  { src: "/images/properties/bathroom-jacuzzi.jpg", label: "Agave Villa - Rainfall Bath" },
  { src: "/images/properties/living-room-recliners.jpg", label: "Pina Villa - Living Area" },
  { src: "/images/properties/bedroom-gray.jpg", label: "Coconut Villa - Bedroom" },
  { src: "/images/properties/kitchen-bar.jpg", label: "Kitchen Bar Seating" },
  { src: "/images/properties/balcony-plants.jpg", label: "Private Patio" },
  { src: "/images/properties/living-room-wide.jpg", label: "Spacious Interiors" },
  { src: "/images/properties/bathroom-teal.jpg", label: "Coconut Villa - En-Suite" },
  { src: "/images/properties/bedroom-blue.jpg", label: "Moringa Villa" },
  { src: "/images/properties/kitchen-counter.jpg", label: "Full Kitchen Counter" },
  { src: "/images/properties/kitchen-appliances.jpg", label: "Modern Appliances" },
  { src: "/images/properties/hallway-decor.jpg", label: "Interior Details" },
  { src: "/images/properties/staircase.jpg", label: "Architectural Details" },
  { src: "/images/properties/living-room-2.jpg", label: "Lounge Space" },
];

interface Villa {
  name: string;
  tagline: string;
  description: string;
  sleeps: number;
  highlights: string[];
  image: string;
  accent: string;
  badge?: string;
}

const VILLAS: Villa[] = [
  {
    name: "Agave Villa",
    tagline: "Poolside Luxury for Couples",
    description:
      "Named for the agave plants that frame its entrance, this large poolside villa offers direct pool access and a private patio. A plush king-size bed, ensuite bathroom with rainfall shower, and a pull-out sofa double make it ideal for couples or small families seeking premium comfort.",
    sleeps: 4,
    highlights: [
      "Direct pool access",
      "King bed + pull-out sofa",
      "Ensuite rainfall shower",
      "Private patio",
    ],
    image: "/images/properties/bedroom-luxury.jpg",
    accent: "ocean",
    badge: "Most Popular",
  },
  {
    name: "Coconut Villa",
    tagline: "The Most Spacious Suite",
    description:
      "The largest villa in the complex features a generous two-room layout with a separate living area, queen bed, and full bathroom. A warm tropical palette and lush garden views through every window create an atmosphere of calm. Includes a kitchenette for light meal preparation.",
    sleeps: 4,
    highlights: [
      "Two-room layout",
      "Queen bed + living area",
      "Kitchenette with essentials",
      "Lush garden views",
    ],
    image: "/images/properties/bedroom-gray.jpg",
    accent: "ocean",
  },
  {
    name: "Lime Villa",
    tagline: "The Heart of the Complex",
    description:
      "The communal gathering space that brings everyone together. A full chef's kitchen features a 6-person dining table, counter seating for 4 more, full-size refrigerator, stove, oven, microwave, and coffee maker. The open-plan living room doubles as a sleeping area for intimate groups.",
    sleeps: 3,
    highlights: [
      "Full chef's kitchen",
      "Dining for 10 (table + counter)",
      "Living room / sleeping area",
      "Central gathering hub",
    ],
    image: "/images/properties/kitchen-dining.jpg",
    accent: "ocean",
    badge: "Central Hub",
  },
  {
    name: "Pina Villa",
    tagline: "Sophisticated Studio Elegance",
    description:
      "An elegant open-concept studio with vaulted ceilings, exposed beams, and sophisticated wood tones with golden accents. Highlights include a baby grand piano, kitchenette, and a seamless blend of sleeping, living, and dining areas that exude understated luxury.",
    sleeps: 2,
    highlights: [
      "Baby grand piano",
      "Vaulted ceilings & exposed beams",
      "Open-concept studio layout",
      "Kitchenette included",
    ],
    image: "/images/properties/living-room-recliners.jpg",
    accent: "ocean",
  },
];

const BUDGET_VILLAS = [
  {
    name: "Moringa Villa",
    description:
      "A private budget-friendly room on the north side of the property. Pool access available with an upcharge. Ideal for additional guests or support staff accompanying your group.",
    image: "/images/properties/bedroom-blue.jpg",
  },
  {
    name: "Papaya Villa",
    description:
      "A comfortable budget option on the north side. Pool access available with an upcharge. Perfect for extending your group capacity beyond the main complex.",
    image: "/images/properties/living-room-2.jpg",
  },
];

const COMPLEX_STATS = [
  { value: "6", label: "Luxury & Budget Villas" },
  { value: "14-19", label: "Guest Capacity" },
  { value: "9", label: "Beds Across Complex" },
  { value: "4", label: "Full Bathrooms" },
];

const AMENITIES = [
  {
    icon: "M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z",
    label: "Pool (daily skimming)",
  },
  {
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
    label: "High-Speed WiFi",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "TV in Every Villa",
  },
  {
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    label: "A/C Throughout",
  },
  {
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    label: "Washer & Dryer",
  },
  {
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    label: "Self Check-In (Keypad)",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    label: "Free Parking",
  },
  {
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    label: "Hot Water",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeaturedProperty() {
  const [activeImg, setActiveImg] = useState(0);

  const goPrev = useCallback(() => {
    setActiveImg((i) => (i === 0 ? HERO_GALLERY.length - 1 : i - 1));
  }, []);
  const goNext = useCallback(() => {
    setActiveImg((i) => (i === HERO_GALLERY.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section id="featured-property" className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* -------------------------------------------------------- */}
        {/*  Section Header                                          */}
        {/* -------------------------------------------------------- */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
            Our Flagship Property
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-6">
            The SerenitySpaces Villa Complex
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-navy-950/70">
            Four interconnected luxury villas and two budget-friendly suites
            nestled in the Sea Breeze area of Freeport, Grand Bahama Island.
            Book individually for intimate getaways or reserve the entire
            complex for corporate retreats, family reunions, and group
            celebrations accommodating up to 19 guests.
          </p>
        </div>

        {/* Featured badge */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/30 px-5 py-2 text-sm font-semibold text-gold-500">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Preferred by Corporate Groups &amp; Event Planners
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Complex-at-a-Glance Stats                               */}
        {/* -------------------------------------------------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {COMPLEX_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white border border-sand-200/60 p-6 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-ocean-600 mb-1">
                {s.value}
              </p>
              <p className="text-sm text-navy-950/60 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Hero Gallery + Location Card                            */}
        {/* -------------------------------------------------------- */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-20">
          {/* Gallery — spans 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative h-80 sm:h-[32rem] rounded-3xl overflow-hidden group shadow-lg">
              <Image
                src={HERO_GALLERY[activeImg].src}
                alt={`SerenitySpaces Complex — ${HERO_GALLERY[activeImg].label}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-navy-950/70 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                {HERO_GALLERY[activeImg].label}
              </div>
              {/* Counter */}
              <div className="absolute top-4 right-4 bg-navy-950/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {activeImg + 1} / {HERO_GALLERY.length}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
                aria-label="Previous photo"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
                aria-label="Next photo"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
              {HERO_GALLERY.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImg
                      ? "border-gold-400 scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={img.label}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right sidebar — spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location card */}
            <div className="rounded-2xl bg-white border border-sand-200/60 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-ocean-500/10 p-2.5">
                  <svg
                    className="h-5 w-5 text-ocean-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  Location
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-navy-950/70">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 mt-0.5 text-ocean-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Sea Breeze area, Freeport, Grand Bahama Island
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 mt-0.5 text-ocean-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  5-minute walk (400m) to Coral Beach
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 mt-0.5 text-ocean-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  25-minute drive from Grand Bahama International Airport
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 mt-0.5 text-ocean-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Shared pool, skimmed daily, professionally cleaned twice
                  monthly
                </li>
              </ul>
            </div>

            {/* Pricing callout card */}
            <div className="rounded-2xl bg-navy-950 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-gold-400/15 p-2.5">
                  <svg
                    className="h-5 w-5 text-gold-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Pricing
                </h3>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-white/70 text-sm">
                    Entire Complex
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-400">
                    $650
                    <span className="text-sm font-normal text-white/50">
                      /night
                    </span>
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-baseline justify-between">
                  <span className="text-white/70 text-sm">
                    Individual Villas
                  </span>
                  <span className="text-white font-semibold">
                    from $150
                    <span className="text-sm font-normal text-white/50">
                      /night
                    </span>
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-baseline justify-between">
                  <span className="text-white/70 text-sm">Cleaning Fee</span>
                  <span className="text-white/90 font-medium text-sm">
                    $180
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-white/70 text-sm">Minimum Stay</span>
                  <span className="text-white/90 font-medium text-sm">
                    3 nights
                  </span>
                </div>
              </div>

              {/* Discount tiers */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-3">
                  Extended Stay Discounts
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-white/70">7+ nights</div>
                  <div className="text-white font-semibold text-right">
                    10% off
                  </div>
                  <div className="text-white/70">14+ nights</div>
                  <div className="text-white font-semibold text-right">
                    15% off
                  </div>
                  <div className="text-white/70">30+ nights</div>
                  <div className="text-white font-semibold text-right">
                    20% off
                  </div>
                  <div className="text-white/70">30+ nights</div>
                  <div className="text-white font-semibold text-right">
                    25% off
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-500 transition-colors shadow-lg shadow-gold-400/20"
              >
                Book the Entire Complex
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

            {/* Quick amenities */}
            <div className="rounded-2xl bg-white border border-sand-200/60 p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-navy-950 mb-4">
                Complex Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {AMENITIES.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 text-sm text-navy-950/70"
                  >
                    <svg
                      className="h-4 w-4 text-ocean-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={a.icon}
                      />
                    </svg>
                    {a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Individual Villa Cards — Luxury Villas                  */}
        {/* -------------------------------------------------------- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-3">
              The Main Complex
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
              Four Interconnected Luxury Villas
            </h3>
            <p className="mx-auto max-w-2xl text-navy-950/60">
              Each villa has its own character and can be booked independently
              or combined for larger groups. Together, the four main villas
              accommodate up to 14 guests with shared pool access.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {VILLAS.map((villa) => (
              <VillaCard key={villa.name} villa={villa} />
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Budget Villas                                           */}
        {/* -------------------------------------------------------- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-sand-300 mb-3">
              Expand Your Group
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
              Budget-Friendly Additions
            </h3>
            <p className="mx-auto max-w-2xl text-navy-950/60">
              Two additional private rooms on the north side of the property.
              Perfect for support staff, overflow guests, or budget-conscious
              travelers. Pool access available with an upcharge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BUDGET_VILLAS.map((v) => (
              <div
                key={v.name}
                className="group rounded-2xl bg-white border border-sand-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-sand-300/90 backdrop-blur-sm text-navy-950 text-xs font-semibold px-3 py-1 rounded-full">
                    Budget Option
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-bold text-navy-950 mb-2">
                    {v.name}
                  </h4>
                  <p className="text-sm text-navy-950/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Why Book the Entire Complex — Features Grid             */}
        {/* -------------------------------------------------------- */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
              The Complete Experience
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
              Why Book the Entire Complex
            </h3>
            <p className="mx-auto max-w-2xl text-navy-950/60">
              When you reserve all six villas, SerenitySpaces becomes your
              private compound. Here is what sets the full complex apart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Up to 19 Guests",
                desc: "Accommodate your entire team across six villas, each with private sleeping quarters, A/C, and dedicated space.",
              },
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Private Compound",
                desc: "The interconnected layout gives your group exclusive run of the pool, kitchen, and outdoor areas with no shared spaces.",
              },
              {
                icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546M21 15.546v-2.046a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 13.5v2.046M12 3v4m-4 0h8",
                title: "5-Min Walk to Coral Beach",
                desc: "Just 400 meters from white sand and the Atlantic Ocean. Morning beach walks and sunset gatherings become daily rituals.",
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Work-Ready Infrastructure",
                desc: "High-speed WiFi throughout, dedicated workspaces, self check-in with keypad, and washer/dryer on-site for extended stays.",
              },
              {
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                title: "Flexible Configurations",
                desc: "Book a single villa for a couple, the four main villas for a corporate retreat, or all six for a full-scale event.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Volume Discounts",
                desc: "Save up to 25% on stays over 30 nights. Extended corporate bookings and multi-villa reservations receive the best rates.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white border border-sand-200/60 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="rounded-xl bg-ocean-500/10 p-3 w-fit mb-4">
                  <svg
                    className="h-6 w-6 text-ocean-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={f.icon}
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-navy-950 mb-1.5">
                  {f.title}
                </h4>
                <p className="text-sm text-navy-950/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Bottom CTA Banner                                       */}
        {/* -------------------------------------------------------- */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-ocean-800 p-8 sm:p-12 text-center shadow-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Reserve the SerenitySpaces Complex?
          </h3>
          <p className="mx-auto max-w-2xl text-white/70 mb-8 leading-relaxed">
            Whether you need a single villa for a quiet getaway or the entire
            six-villa compound for your next corporate retreat, our team is
            ready to help you plan the perfect stay in Grand Bahama.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-bold text-navy-950 hover:bg-gold-500 transition-colors shadow-lg shadow-gold-400/20"
            >
              Request a Quote
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
            <a
              href="#villas"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Individual Villas
            </a>
          </div>
          <p className="text-white/40 text-xs mt-6">
            Entire complex from $650/night — Individual villas from $150/night
            — 3-night minimum
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Villa Card Sub-Component                                           */
/* ------------------------------------------------------------------ */

function VillaCard({ villa }: { villa: Villa }) {
  return (
    <div className="group rounded-2xl bg-white border border-sand-200/60 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={villa.image}
          alt={villa.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent pointer-events-none" />

        {/* Badge */}
        {villa.badge && (
          <div className="absolute top-3 left-3 bg-gold-400 text-navy-950 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {villa.badge}
          </div>
        )}

        {/* Sleeps badge */}
        <div className="absolute top-3 right-3 bg-navy-950/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          Sleeps {villa.sleeps}
        </div>

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="font-display text-xl font-bold text-white drop-shadow-md">
            {villa.name}
          </h4>
          <p className="text-white/80 text-sm font-medium">
            {villa.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-navy-950/65 leading-relaxed mb-4">
          {villa.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {villa.highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-1.5 text-xs text-navy-950/70"
            >
              <svg
                className="h-3.5 w-3.5 text-ocean-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
