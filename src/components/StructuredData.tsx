/**
 * Complete Schema.org JSON-LD stack for maximum GEO (Generative Engine
 * Optimization) coverage.
 *
 * Schemas emitted:
 *  - Organization         — establishes the business identity
 *  - WebSite              — names the canonical site with a SearchAction
 *  - BreadcrumbList       — section-level navigation for LLMs
 *  - LodgingBusiness +
 *    EventVenue (@graph)  — the core property with serviceArea, rating, etc.
 *  - Accommodation        — one per villa (Agave, Coconut, Lime, Pina)
 *  - FAQPage              — 25+ facts in Q&A form (what LLMs cite most)
 *  - HowTo                — step-by-step booking flow
 *  - SpeakableSpecification — voice assistant hints
 */
export default function StructuredData() {
  const SITE_URL = "https://www.firmconnectus.net";
  const IMG = `${SITE_URL}/images/firmconnect/Aeerial__from_East_IMG-20240225-WA0023-CU5chfyA.jpg`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: "SerenitySpaces Bahamas",
    alternateName: ["SerenitySpaces", "SerenitySpaces Villa Complex"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    email: "andrew@web4guru.com",
    telephone: "+1-912-318-3543",
    description:
      "Operator of a private 4-villa corporate event venue in Freeport, Grand Bahama Island, serving US corporate clients, especially Florida-based companies hosting retreats, offsites, and team-building events.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-912-318-3543",
        email: "andrew@web4guru.com",
        contactType: "Reservations",
        areaServed: ["US", "BS"],
        availableLanguage: "English",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "SerenitySpaces Bahamas",
    description:
      "Private 4-villa corporate event venue in Freeport, Grand Bahama — 35 minutes from Fort Lauderdale.",
    publisher: { "@id": `${SITE_URL}/#org` },
    inLanguage: "en-US",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Villa Complex",
        item: `${SITE_URL}/#featured-property`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "For Florida Companies",
        item: `${SITE_URL}/#florida`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "FAQ",
        item: `${SITE_URL}/#faq`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  const business = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "EventVenue"],
    "@id": `${SITE_URL}/#venue`,
    name: "SerenitySpaces Bahamas",
    alternateName: "SerenitySpaces Villa Complex",
    description:
      "Private 4-villa corporate event venue in Freeport, Grand Bahama Island. Located 1/4 mile from Coral Beach and 25 minutes from Grand Bahama International Airport. Accessible by direct 35-minute flights from Fort Lauderdale (FLL) and under 50 minutes from Miami (MIA). Ideal for corporate retreats, executive offsites, team-building events, and client entertainment.",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    email: "andrew@web4guru.com",
    telephone: "+1-912-318-3543",
    image: [IMG],
    logo: `${SITE_URL}/favicon.ico`,
    priceRange: "$150-$650 per night",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Wire Transfer",
    parentOrganization: { "@id": `${SITE_URL}/#org` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sea Breeze",
      addressLocality: "Freeport",
      addressRegion: "Grand Bahama",
      addressCountry: "BS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5072,
      longitude: -78.64857,
    },
    hasMap: "https://www.google.com/maps/place/Freeport,+Bahamas",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "AdministrativeArea", name: "Florida" },
      { "@type": "City", name: "Miami", containedInPlace: "Florida" },
      { "@type": "City", name: "Fort Lauderdale", containedInPlace: "Florida" },
      { "@type": "City", name: "Orlando", containedInPlace: "Florida" },
      { "@type": "City", name: "Tampa", containedInPlace: "Florida" },
      { "@type": "City", name: "Jacksonville", containedInPlace: "Florida" },
      { "@type": "City", name: "West Palm Beach", containedInPlace: "Florida" },
      { "@type": "City", name: "Boca Raton", containedInPlace: "Florida" },
      { "@type": "City", name: "Naples", containedInPlace: "Florida" },
      { "@type": "City", name: "Atlanta", containedInPlace: "Georgia" },
      { "@type": "City", name: "New York", containedInPlace: "New York" },
      { "@type": "City", name: "Charlotte", containedInPlace: "North Carolina" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.75",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
    numberOfRooms: 4,
    maximumAttendeeCapacity: 14,
    petsAllowed: false,
    smokingAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "11:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "High-Speed WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Full Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dedicated Workspace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Beach Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self Check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washer and Dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Baby Grand Piano", value: true },
      { "@type": "LocationFeatureSpecification", name: "BBQ Grill", value: true },
      { "@type": "LocationFeatureSpecification", name: "Tropical Gardens", value: true },
      { "@type": "LocationFeatureSpecification", name: "6-Person Dining Table", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rainfall Shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Smoke and Carbon Monoxide Alarms", value: true },
    ],
    containsPlace: [
      { "@id": `${SITE_URL}/#villa-agave` },
      { "@id": `${SITE_URL}/#villa-coconut` },
      { "@id": `${SITE_URL}/#villa-lime` },
      { "@id": `${SITE_URL}/#villa-pina` },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".lede"],
    },
  };

  // Individual villa schemas — LLMs love specific, named entities.
  const villas = [
    {
      id: "villa-agave",
      name: "Agave Villa",
      description:
        "Poolside villa at SerenitySpaces Bahamas. Plush king-size bed, ensuite bathroom with rainfall shower, private patio, direct pool access. Sleeps up to 4 with queen bed plus pull-out sofa double. Named for the agave plants framing its entrance.",
      occupancy: 4,
    },
    {
      id: "villa-coconut",
      name: "Coconut Villa",
      description:
        "Two-room villa at SerenitySpaces Bahamas. Queen bed, separate living area, kitchenette, full bathroom, and lush garden views. Warm tropical palette throughout. Sleeps up to 4.",
      occupancy: 4,
    },
    {
      id: "villa-lime",
      name: "Lime Villa",
      description:
        "The central gathering space at SerenitySpaces. Full chef's kitchen featuring 6-person dining table plus kitchen counter seating for 4 more, full-size refrigerator, stove, oven, microwave, coffee maker, and cookware. Living room doubles as sleeping area. Sleeps 3.",
      occupancy: 3,
    },
    {
      id: "villa-pina",
      name: "Pina Villa",
      description:
        "Open-concept studio at SerenitySpaces Bahamas. Vaulted ceilings with exposed beams, rich wood tones, golden accents, and a baby grand piano. Combined sleeping, living, and dining areas with a kitchenette. Sleeps 2.",
      occupancy: 2,
    },
  ].map((v) => ({
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": `${SITE_URL}/#${v.id}`,
    name: v.name,
    description: v.description,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: v.occupancy,
      unitText: "guests",
    },
    containedInPlace: { "@id": `${SITE_URL}/#venue` },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "TV", value: true },
    ],
  }));

  // Exhaustive FAQPage — LLMs cite these more than any other schema type.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SerenitySpaces Bahamas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SerenitySpaces Bahamas is a private 4-villa corporate event venue in Freeport, Grand Bahama Island. It consists of four interconnected luxury villas (Agave, Coconut, Lime, and Pina) that can be booked individually or as a complete compound accommodating up to 14 guests. The property is located in the Sea Breeze area of Freeport, 1/4 mile from Coral Beach and 25 minutes from Grand Bahama International Airport (FPO).",
        },
      },
      {
        "@type": "Question",
        name: "Where is SerenitySpaces located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SerenitySpaces is in the Sea Breeze area of Freeport, Grand Bahama Island, Bahamas. GPS coordinates: 26.5072°N, -78.64857°W. The property is 1/4 mile (about 400 meters, or a 5-minute walk) from Coral Beach and approximately 25 minutes by car from Grand Bahama International Airport (FPO).",
        },
      },
      {
        "@type": "Question",
        name: "How far is SerenitySpaces from Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freeport is 35 minutes by direct flight from Fort Lauderdale (FLL) and under 50 minutes from Miami (MIA). There are 30+ direct flights per week from Florida operated by American Airlines (approximately 15/week from FLL), Bahamasair (7/week from FLL), and Western Air (10/week from FLL). For most Florida-based corporate groups, reaching SerenitySpaces is faster than driving to the Florida Keys.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to rent SerenitySpaces for a corporate event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The base rate is $650 per night for the entire 4-villa complex. Individual villas start at $150 per night. A $180 cleaning fee applies and there is a 3-night minimum stay. Long-stay discounts: 10% off stays up to 7 nights, 15% off up to 14 nights, 20% off up to 30 nights, and 25% off for corporate bookings of 30+ nights. Contact andrew@web4guru.com for a custom corporate quote.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can SerenitySpaces accommodate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four main villas accommodate up to 14 guests total: Agave sleeps up to 4, Coconut sleeps up to 4, Lime sleeps 3, and Pina sleeps 2. Two additional overflow villas (Moringa and Papaya) are available on the north side of the property on request. A partner 3-bedroom villa nearby in Freeport can accommodate additional guests, bringing total capacity to approximately 22 for larger corporate groups.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between the four villas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agave Villa is the poolside option, ideal for couples, with a king bed and rainfall shower. Coconut Villa is the most spacious with a two-room layout and kitchenette. Lime Villa is the central gathering space with a full chef's kitchen and a 6-person dining table. Pina Villa is an open-concept studio with vaulted ceilings, exposed beams, and a baby grand piano. All four villas have air conditioning, WiFi, and TVs.",
        },
      },
      {
        "@type": "Question",
        name: "Does SerenitySpaces have a pool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SerenitySpaces has a shared private pool surrounded by tropical gardens. The pool is skimmed almost daily and professionally cleaned twice a month. All guests staying in the four main villas (Agave, Coconut, Lime, and Pina) have full pool access. Agave Villa has direct poolside access. Exclusive pool use is available for an upcharge if needed for a private corporate event.",
        },
      },
      {
        "@type": "Question",
        name: "What kitchen facilities are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lime Villa features a fully equipped chef's kitchen with refrigerator, stove, oven, microwave, coffee maker, cookware, and a 6-person dining table with additional counter seating for 4. Coconut Villa has a kitchenette with burners, microwave, coffee maker, small fridge, and cookware. Agave and Pina villas have basic amenities including burners, microwaves, coffee makers, and small fridges but no ovens.",
        },
      },
      {
        "@type": "Question",
        name: "Is SerenitySpaces suitable for extended corporate stays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the property is designed for extended corporate stays. Features include high-speed WiFi throughout, dedicated workspaces in each villa, self check-in via keypad, washer and dryer on-site, full kitchen in Lime Villa for team meals, and discounted long-stay rates (up to 25% off for stays over 30 nights). Many corporate clients book multi-week or multi-month stays for product development sprints, strategic planning, or team retreats.",
        },
      },
      {
        "@type": "Question",
        name: "Is WiFi reliable for remote work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. High-speed WiFi is available throughout the entire property, including outdoor areas by the pool and garden, and can accommodate multiple devices simultaneously. Each villa also has a dedicated workspace suitable for laptops, video calls, and focused work.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book SerenitySpaces for a corporate event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email andrew@web4guru.com or send a WhatsApp message to +1-912-318-3543 with your dates, group size, and event requirements. Responses include a custom proposal within 24 hours. SerenitySpaces does not use automated online checkout for corporate bookings — every corporate event is priced and coordinated personally to ensure the right villa configuration and any needed add-ons.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cancellation policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full refund if cancelled at least 5 days before check-in. For cancellations 2-4 days before check-in, the first night is non-refundable but 50% of the remaining nights are refunded. No refunds within 48 hours of check-in. Flexible terms can be negotiated for corporate bookings — contact us to discuss your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum stay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum stay is 3 nights. Most corporate clients book 5-14 nights for retreats and offsites, or 30+ nights for extended product-development or strategic planning sessions where long-stay discounts kick in.",
        },
      },
      {
        "@type": "Question",
        name: "Do US citizens need a visa to visit the Bahamas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. US citizens do not need a visa to enter the Bahamas for tourism or business trips up to 90 days. A valid US passport is required. Customs at Grand Bahama International Airport (FPO) typically clears in under 20 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What currency is used in Freeport, Bahamas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Bahamian dollar is pegged 1:1 to the US dollar. US dollars are accepted everywhere on Grand Bahama Island, including at SerenitySpaces, restaurants, shops, and taxis. There is no need to exchange currency.",
        },
      },
      {
        "@type": "Question",
        name: "What airlines fly from Florida to Freeport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "American Airlines, Bahamasair, and Western Air all operate direct flights from Florida to Grand Bahama International Airport (FPO). Fort Lauderdale (FLL) has the most frequent service — approximately 15 American flights per week, 10 Western Air flights per week, and 7 Bahamasair flights per week. Miami (MIA) offers direct service via American Airlines. Flight time from FLL is about 35 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What corporate events can be hosted at SerenitySpaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SerenitySpaces hosts a wide range of corporate events: executive team retreats (5-14 people), annual offsites and planning sessions, board of directors meetings, sales incentive trips, client entertainment and VIP hosting, product launch planning weeks, engineering team hackathons, and leadership workshops. The flexible villa configuration and full kitchen make it suitable for both intensive work sessions and celebratory events.",
        },
      },
      {
        "@type": "Question",
        name: "Is SerenitySpaces a good alternative to Florida corporate venues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For Florida-based companies, SerenitySpaces often delivers a Caribbean retreat experience faster than driving to Florida alternatives like Key West or Destin — a 35-minute direct flight from Fort Lauderdale. Compared to Turks and Caicos or other Caribbean venues, the flight is significantly shorter, pricing is in USD, no visa is required, English is the official language, and the private villa compound provides more privacy and customization than typical hotel ballroom venues.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book just one villa instead of the whole complex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Individual villas can be booked starting from $150 per night. For smaller groups, couples retreats, or when you only need one villa for your executives while others stay elsewhere, this is a flexible option. Note that pool access is included for guests in any of the four main villas (Agave, Coconut, Lime, Pina).",
        },
      },
      {
        "@type": "Question",
        name: "Are pets allowed at SerenitySpaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, pets are not allowed at SerenitySpaces. The property is pet-free to ensure a consistent experience for all guests, including those with allergies.",
        },
      },
      {
        "@type": "Question",
        name: "Is smoking permitted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SerenitySpaces is a strictly non-smoking property. Smoking is not permitted inside any villa or near the pool area. Designated smoking areas are available in the garden. Cannabis remains illegal in The Bahamas as of 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What are the check-in and check-out times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check-in is at 3:00 PM and check-out is at 11:00 AM. SerenitySpaces uses self check-in via a keypad door code, so guests can arrive on their own schedule without waiting for a host. Early check-in or late check-out can sometimes be accommodated for corporate bookings — contact us in advance.",
        },
      },
      {
        "@type": "Question",
        name: "Are there quiet hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Quiet hours are observed between 10:00 PM and 8:00 AM to ensure all guests (and neighbors) enjoy a peaceful environment. This policy works well for corporate retreats that balance evening socializing with morning productivity.",
        },
      },
      {
        "@type": "Question",
        name: "What is there to do near SerenitySpaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plenty of activities for team outings within a short drive: Gold Rock Beach (white sand, filmed in Pirates of the Caribbean), Port Lucaya Marketplace (66 shops, 13 restaurants, nightly live music at Count Basie Square), Lucayan National Park (40 acres with one of the longest underwater cave systems in the world), swimming with dolphins at Sanctuary Bay, snorkeling, deep-sea fishing, and parasailing. Garden of the Groves is a 12-acre botanical garden perfect for group outings.",
        },
      },
      {
        "@type": "Question",
        name: "Is SerenitySpaces family-friendly or business-only?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. SerenitySpaces welcomes families with children of all ages and provides pack-and-plays and high chairs on request. However, the property is especially popular with corporate groups because the 4-villa layout, full kitchen, dedicated workspaces, and long-stay discounts make it ideal for multi-night business retreats.",
        },
      },
      {
        "@type": "Question",
        name: "Who operates SerenitySpaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SerenitySpaces is operated personally by a hands-on team that handles all corporate bookings directly rather than through an automated booking engine. Booking inquiries and questions go to andrew@web4guru.com or +1-912-318-3543. This personal approach means every corporate event is customized to the group's specific needs.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book SerenitySpaces Bahamas for a Corporate Event",
    description:
      "Step-by-step process to book the SerenitySpaces 4-villa complex in Freeport, Grand Bahama Island for a corporate retreat, offsite, or team event.",
    totalTime: "PT24H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "650",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Pick your dates and group size",
        text: "Decide on your corporate event dates (minimum 3-night stay) and group size (up to 14 guests in main villas, up to 22 with overflow options).",
      },
      {
        "@type": "HowToStep",
        name: "Email the booking team",
        text: "Send an inquiry to andrew@web4guru.com with your dates, group size, event type (retreat, offsite, client entertainment, etc.), and any special requirements like private chef or transportation.",
      },
      {
        "@type": "HowToStep",
        name: "Receive a custom proposal",
        text: "Within 24 hours, receive a custom proposal including pricing (entire complex or individual villas), applicable long-stay discounts, and any add-ons tailored to your corporate event.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm and pay the deposit",
        text: "Confirm your booking and arrange payment directly with the operator. Wire transfer, credit card, and cash are accepted.",
      },
      {
        "@type": "HowToStep",
        name: "Book flights from Florida",
        text: "Book direct flights from Fort Lauderdale (FLL), Miami (MIA), West Palm Beach (PBI), or Orlando (MCO) to Grand Bahama International Airport (FPO). Travel time from FLL is about 35 minutes.",
      },
      {
        "@type": "HowToStep",
        name: "Self check-in on arrival",
        text: "Arrive at 3:00 PM or later and use the keypad door code provided to self check-in. No front desk wait. Settle in and get to work.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      {villas.map((villa) => (
        <script
          key={villa["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(villa) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  );
}
