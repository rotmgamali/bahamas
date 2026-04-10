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

export const metadata: Metadata = {
  title: "SerenitySpaces Bahamas | Exclusive Corporate Event Venues in Freeport",
  description:
    "Host your next corporate event at our exclusive beachside villas in Freeport, Grand Bahama Island. Premium venues with corporate discounts, dedicated coordination, and personalized service.",
  keywords: [
    "corporate events Bahamas",
    "Bahamas venue rental",
    "beachside villa corporate retreat",
    "Freeport event venue",
    "Grand Bahama corporate events",
    "corporate retreat Bahamas",
    "team building Bahamas",
    "executive offsite Bahamas",
    "corporate event planning Caribbean",
    "private villa Bahamas",
  ],
  authors: [{ name: "SerenitySpaces Bahamas" }],
  openGraph: {
    title: "SerenitySpaces Bahamas | Exclusive Corporate Event Venues",
    description:
      "Exclusive beachside villas in Freeport, Grand Bahama Island. Host corporate retreats, team-building events, and executive offsites with premium amenities and corporate discounts.",
    type: "website",
    locale: "en_US",
    siteName: "SerenitySpaces Bahamas",
  },
  twitter: {
    card: "summary_large_image",
    title: "SerenitySpaces Bahamas | Corporate Event Venues",
    description:
      "Exclusive beachside villas for corporate events in Freeport, Grand Bahama Island. Premium venues with corporate discounts.",
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
