import SectionWrapper from "@/components/ui/SectionWrapper";

const highlights = [
  {
    title: "Exclusive Locations",
    description:
      "Private beachside villas steps from crystal-clear Bahamian waters, offering unmatched privacy for your corporate events.",
  },
  {
    title: "Corporate Discounts",
    description:
      "Competitive rates with special pricing for corporate groups, multi-day bookings, and recurring events.",
  },
  {
    title: "Full-Service Planning",
    description:
      "Dedicated event coordination from venue setup to catering, audio/visual, and transportation logistics.",
  },
  {
    title: "Flexible Spaces",
    description:
      "Versatile indoor and outdoor areas that adapt to conferences, retreats, team-building, and executive dinners.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-sand-50">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean-600">
          Why SerenitySpaces
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
          The Premier Corporate Event Destination
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-950/60">
          Located in Freeport, Grand Bahama Island, our exclusive villa properties
          combine world-class amenities with the natural beauty of the Bahamas.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-950/60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
