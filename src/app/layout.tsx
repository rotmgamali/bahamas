import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SITE_URL = "https://www.firmconnectus.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SerenitySpaces Bahamas | Corporate Event Venue Near Florida — Freeport, Grand Bahama",
    template: "%s | SerenitySpaces Bahamas",
  },
  description:
    "Private 4-villa corporate event venue in Freeport, Grand Bahama — just 35 minutes by direct flight from Fort Lauderdale (FLL) and Miami (MIA). Closer than driving to the Florida Keys. Book individual villas from $150/night or the entire complex from $650/night. Ideal for Florida-based companies hosting retreats, offsites, and client entertainment in the Caribbean.",
  keywords: [
    // Florida-focused
    "corporate event venue near Florida",
    "corporate retreat near Miami",
    "corporate retreat near Fort Lauderdale",
    "team offsite venue Florida",
    "Florida company retreat Bahamas",
    "alternative to Florida Keys corporate retreat",
    "close to Miami corporate venue",
    "quick corporate getaway from Florida",
    // Destination
    "corporate events Bahamas",
    "Freeport Grand Bahama event venue",
    "Grand Bahama Island corporate retreat",
    "Bahamas villa rental corporate",
    "private villa corporate retreat Caribbean",
    // Use-case
    "executive offsite Caribbean",
    "team building retreat Bahamas",
    "client entertainment Caribbean villa",
    "annual company conference Bahamas",
    "board retreat Caribbean",
    // Property
    "SerenitySpaces Bahamas",
    "Agave Coconut Lime Pina villa Freeport",
    "4 villa complex Freeport Bahamas",
    "beachside villa complex corporate rental",
  ],
  authors: [{ name: "SerenitySpaces Bahamas" }],
  category: "Corporate Event Venue",
  openGraph: {
    title:
      "SerenitySpaces Bahamas | Corporate Event Venue 35 Minutes from Florida",
    description:
      "Private 4-villa event complex in Freeport, Grand Bahama. Direct 35-min flights from Fort Lauderdale and Miami. Book individual villas or the whole compound for up to 14 guests. Corporate group pricing and long-stay discounts available.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "SerenitySpaces Bahamas",
    images: [
      {
        url: `${SITE_URL}/images/firmconnect/Aeerial__from_East_IMG-20240225-WA0023-CU5chfyA.jpg`,
        width: 1200,
        height: 630,
        alt: "Aerial view of the SerenitySpaces villa complex in Freeport, Grand Bahama Island",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SerenitySpaces Bahamas | Corporate Venue 35 Min from Florida",
    description:
      "Private 4-villa event complex in Freeport, Grand Bahama. Direct flights from FLL and MIA. Book for corporate retreats, team offsites, and client entertainment.",
    images: [
      `${SITE_URL}/images/firmconnect/Aeerial__from_East_IMG-20240225-WA0023-CU5chfyA.jpg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  other: {
    // Geo targeting meta tags — help search engines associate the page with
    // both the physical venue location and the service area (Florida).
    "geo.region": "BS-GB",
    "geo.placename": "Freeport, Grand Bahama Island, Bahamas",
    "geo.position": "26.5072;-78.64857",
    ICBM: "26.5072, -78.64857",
    // Target audience geo
    "target-audience-region": "US-FL",
    "target-audience-description":
      "Florida-based corporate event planners and executives",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
