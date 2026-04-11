"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

interface Property {
  name: string;
  tagline: string;
  beds: number;
  baths: number;
  guests: number;
  features: string[];
  images: string[];
}

const ADDITIONAL_PROPERTIES: Property[] = [
  {
    name: "The Island House",
    tagline: "Spacious open-plan living with modern kitchen & bar",
    beds: 3,
    baths: 2,
    guests: 10,
    features: [
      "Open-concept living & kitchen",
      "Breakfast bar with seating",
      "Granite countertops & stainless appliances",
      "Spacious hardwood-floor living area",
      "Multi-level layout with staircase",
      "Air conditioning throughout",
    ],
    images: [
      "/images/properties/kitchen-bar.jpg",
      "/images/properties/kitchen-dining.jpg",
      "/images/properties/kitchen-counter.jpg",
      "/images/properties/kitchen-appliances.jpg",
      "/images/properties/staircase.jpg",
      "/images/properties/hallway-decor.jpg",
    ],
  },
  {
    name: "The Blue Lagoon Suite",
    tagline: "Bold modern interiors with expansive entertainment space",
    beds: 3,
    baths: 2,
    guests: 8,
    features: [
      "Dramatic blue accent master suite",
      "King bed with designer furnishings",
      "Spacious open entertainment area",
      "Modern tiled bathrooms",
      "Hardwood flooring throughout",
      "Tropical outdoor patio",
    ],
    images: [
      "/images/properties/bedroom-blue.jpg",
      "/images/properties/outdoor-palms.jpg",
      "/images/properties/balcony-plants.jpg",
      "/images/properties/bathroom-half.jpg",
      "/images/properties/living-room-wide.jpg",
      "/images/properties/living-room-2.jpg",
    ],
  },
];

function PropertyCard({ property }: { property: Property }) {
  const [activeImg, setActiveImg] = useState(0);

  const goPrev = useCallback(() => {
    setActiveImg((i) => (i === 0 ? property.images.length - 1 : i - 1));
  }, [property.images.length]);

  const goNext = useCallback(() => {
    setActiveImg((i) => (i === property.images.length - 1 ? 0 : i + 1));
  }, [property.images.length]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-sand-100">
      {/* Image gallery */}
      <div className="relative h-72 sm:h-80 group">
        <Image
          src={property.images[activeImg]}
          alt={`${property.name} - Photo ${activeImg + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent pointer-events-none" />
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Previous photo"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Next photo"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute top-3 right-3 z-20 bg-navy-950/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
          {activeImg + 1} / {property.images.length}
        </div>
        {/* Thumbnail nav */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-20 justify-center">
          {property.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className={`relative h-12 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeImg
                  ? "border-gold-400 scale-105"
                  : "border-white/40 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold text-navy-950 mb-1">
          {property.name}
        </h3>
        <p className="text-ocean-500 text-sm font-medium mb-4">
          {property.tagline}
        </p>

        <div className="flex gap-6 mb-6 text-sm text-navy-950/70">
          <div className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {property.beds} Bedrooms
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {property.baths} Baths
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Up to {property.guests}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-2 mb-6">
          {property.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-navy-950/70">
              <svg className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="block text-center rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors"
        >
          Inquire About This Property
        </a>
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
            Additional Villas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Need More Space?{" "}
            <span className="text-ocean-500">We&apos;ve Got You Covered</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy-950/60">
            For larger groups, book our additional villas alongside The Grand
            Villa. All properties are located near each other in Freeport —
            perfect for spreading out while staying connected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ADDITIONAL_PROPERTIES.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-gold-400/10 border border-gold-400/30 px-8 py-4">
            <svg className="h-6 w-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-navy-950">
              Book all 3 villas for an exclusive multi-property corporate
              discount
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
