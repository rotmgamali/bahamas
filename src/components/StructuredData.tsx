export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "SerenitySpaces Bahamas",
    description:
      "Exclusive beachside villa venue for corporate events, retreats, and team-building in Freeport, Grand Bahama Island.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Freeport",
      addressRegion: "Grand Bahama",
      addressCountry: "BS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5285,
      longitude: -78.6967,
    },
    email: "andrew@web4guru.com",
    url: "https://serenityspacesbahamas.com",
    priceRange: "$$$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Beach Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meeting Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Catering Service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport Transfer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Water Sports", value: true },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
