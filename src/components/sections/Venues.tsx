import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const venues = [
  {
    name: "Ocean Breeze Villa",
    capacity: "Up to 50 guests",
    description:
      "A stunning beachfront property with panoramic ocean views, outdoor terrace, and modern conference facilities.",
    image: "/venues/villa-1.jpg",
  },
  {
    name: "Palm Garden Estate",
    capacity: "Up to 80 guests",
    description:
      "Lush tropical gardens surround this spacious estate, perfect for large corporate gatherings and executive retreats.",
    image: "/venues/villa-2.jpg",
  },
  {
    name: "Coral Bay Retreat",
    capacity: "Up to 30 guests",
    description:
      "An intimate waterfront villa ideal for board meetings, strategy sessions, and small executive gatherings.",
    image: "/venues/villa-3.jpg",
  },
];

export default function Venues() {
  return (
    <SectionWrapper id="venues">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean-600">
          Our Properties
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
          Exclusive Villa Venues
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-950/60">
          Each property offers a unique setting for your corporate event, with
          premium amenities and breathtaking Bahamian scenery.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {venues.map((venue) => (
          <div
            key={venue.name}
            className="group overflow-hidden rounded-2xl bg-sand-50 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
                  {venue.name}
                </h3>
              </div>
              <p className="mt-1 text-sm font-medium text-ocean-600">
                {venue.capacity}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-950/60">
                {venue.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
