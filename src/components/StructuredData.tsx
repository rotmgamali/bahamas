/**
 * Schema.org JSON-LD for SerenitySpaces.
 *
 * Designed for three audiences:
 *  1. Google & classic search — LocalBusiness + EventVenue + aggregateRating
 *  2. Map search / local-3-pack — geo coordinates + service area with FL cities
 *  3. LLMs (ChatGPT, Claude, Perplexity) — FAQPage + explicit facts they can cite
 */
export default function StructuredData() {
  const SITE_URL = "https://www.firmconnectus.net";
  const IMG = `${SITE_URL}/images/firmconnect/Aeerial__from_East_IMG-20240225-WA0023-CU5chfyA.jpg`;

  const business = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "EventVenue"],
    "@id": `${SITE_URL}/#organization`,
    name: "SerenitySpaces Bahamas",
    alternateName: "SerenitySpaces Villa Complex",
    description:
      "Private 4-villa corporate event venue in Freeport, Grand Bahama Island. Located 1/4 mile from Coral Beach and 25 minutes from Grand Bahama International Airport. Accessible by direct 35-minute flights from Fort Lauderdale (FLL) and Miami (MIA). Ideal for corporate retreats, executive offsites, team-building events, and client entertainment.",
    url: SITE_URL,
    email: "andrew@web4guru.com",
    telephone: "+1-912-318-3543",
    image: [IMG],
    logo: `${SITE_URL}/favicon.ico`,
    priceRange: "$150-$650 per night",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Wire Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sea Breeze",
      addressLocality: "Freeport",
      addressRegion: "Grand Bahama",
      postalCode: "00000",
      addressCountry: "BS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5072,
      longitude: -78.64857,
    },
    hasMap: "https://www.google.com/maps/place/Freeport,+Bahamas",
    // Service area — this is the key GEO/SEO signal that tells search engines
    // and LLMs that this venue actively serves customers from Florida cities,
    // even though the physical venue is in the Bahamas.
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "AdministrativeArea", name: "Florida" },
      { "@type": "City", name: "Miami", containedInPlace: "Florida" },
      { "@type": "City", name: "Fort Lauderdale", containedInPlace: "Florida" },
      { "@type": "City", name: "Orlando", containedInPlace: "Florida" },
      { "@type": "City", name: "Tampa", containedInPlace: "Florida" },
      { "@type": "City", name: "Jacksonville", containedInPlace: "Florida" },
      { "@type": "City", name: "West Palm Beach", containedInPlace: "Florida" },
      { "@type": "City", name: "Atlanta", containedInPlace: "Georgia" },
      { "@type": "City", name: "New York", containedInPlace: "New York" },
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
      { "@type": "LocationFeatureSpecification", name: "Beach Access (5 min walk)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self Check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washer and Dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Baby Grand Piano", value: true },
      { "@type": "LocationFeatureSpecification", name: "BBQ Grill", value: true },
      { "@type": "LocationFeatureSpecification", name: "Tropical Gardens", value: true },
    ],
    containsPlace: [
      { "@type": "Accommodation", name: "Agave Villa", description: "Poolside villa with king bed, ensuite rainfall shower, and private patio. Sleeps up to 4." },
      { "@type": "Accommodation", name: "Coconut Villa", description: "Two-room villa with queen bed, living area, and kitchenette. Sleeps up to 4." },
      { "@type": "Accommodation", name: "Lime Villa", description: "Central villa with full chef's kitchen, 6-person dining table, and communal gathering space. Sleeps 3." },
      { "@type": "Accommodation", name: "Pina Villa", description: "Open-concept studio with vaulted ceilings and baby grand piano. Sleeps 2." },
    ],
    sameAs: [],
  };

  // FAQPage schema — LLMs love this for citations
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is SerenitySpaces from Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freeport, Grand Bahama Island is only 35 minutes by direct flight from Fort Lauderdale (FLL) and under 50 minutes from Miami (MIA). There are 30+ direct flights per week from Florida via American Airlines, Bahamasair, and Western Air. It is closer for most Florida-based corporate groups than driving to the Florida Keys.",
        },
      },
      {
        "@type": "Question",
        name: "What is the pricing for a corporate booking at SerenitySpaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The base rate is $650 per night for the entire four-villa complex, or individual villas starting from $150 per night. A $180 cleaning fee applies and the minimum stay is 3 nights. Long-stay discounts: 10% off stays up to 7 nights, 15% off up to 14 nights, 20% off up to 30 nights, and 25% off for 30+ night corporate bookings.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can the venue host?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four interconnected main villas (Agave, Coconut, Lime, and Pina) accommodate up to 14 guests total. Two additional overflow villas on the north side of the property (Moringa and Papaya) are available on request. A partner property nearby in Freeport can host additional guests, bringing total capacity to approximately 22 for large corporate groups.",
        },
      },
      {
        "@type": "Question",
        name: "What corporate amenities does SerenitySpaces offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High-speed WiFi throughout, dedicated workspaces in each villa, full chef's kitchen in Lime Villa with 6-person dining, private pool, air conditioning in all villas, washer and dryer, self check-in via keypad, free parking, beach access (5-minute walk to Coral Beach), and tropical garden grounds. The venue is purpose-built for extended corporate stays.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book SerenitySpaces for a corporate event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Corporate bookings are handled personally — email andrew@web4guru.com with your dates, group size, and event requirements for a custom proposal within 24 hours. The venue does not use automated online checkout for corporate bookings; each event is tailored and priced individually.",
        },
      },
      {
        "@type": "Question",
        name: "Is SerenitySpaces a good alternative to Florida corporate venues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For Florida-based companies, SerenitySpaces offers a Caribbean setting that is often faster to reach than driving to the Florida Keys or Destin — a 35-minute direct flight from Fort Lauderdale. The exclusive four-villa compound provides more privacy than a hotel, USD pricing (Bahamian dollar is pegged 1:1 to USD), no visa required for US citizens with a valid passport, and the novelty of an international location for team retreats and client entertainment.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
