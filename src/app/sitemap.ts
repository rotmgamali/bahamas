import type { MetadataRoute } from "next";

const SITE_URL = "https://www.firmconnectus.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    "about",
    "destination",
    "featured-property",
    "properties",
    "events",
    "florida",
    "amenities",
    "faq",
    "contact",
  ];

  const mdEndpoints = [
    "/llms.txt",
    "/llms-full.txt",
    "/md/property.md",
    "/md/pricing.md",
    "/md/flights.md",
    "/md/faq.md",
    "/md/facts.md",
  ];

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...sections.map((id) => ({
      url: `${SITE_URL}/#${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: id === "featured-property" ? 0.9 : 0.7,
    })),
    // Structured text endpoints — help LLMs discover the markdown exports.
    ...mdEndpoints.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
