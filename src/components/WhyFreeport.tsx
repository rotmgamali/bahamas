import Image from "next/image";

const ACTIVITIES = [
  {
    category: "Team Activities",
    items: [
      "Snorkeling at Deadman\u2019s Reef",
      "Deep-sea fishing charters",
      "Kayaking through Lucayan National Park mangroves",
      "Beach volleyball & bonfire on Gold Rock Beach",
      "Horseback riding on the beach",
      "Basketball at the villa (court on-site)",
    ],
  },
  {
    category: "Cultural Experiences",
    items: [
      "Port Lucaya Marketplace shopping & dining",
      "Live Bahamian Junkanoo music at Count Basie Square",
      "Garden of the Groves — 12-acre botanical garden",
      "Rum tasting at local distilleries",
      "Bahamian cooking class with a local chef",
      "Straw market crafts & souvenirs",
    ],
  },
  {
    category: "Adventure & Nature",
    items: [
      "Swim with dolphins at Sanctuary Bay",
      "Explore underwater cave system at Lucayan National Park",
      "Parasailing over crystal-clear turquoise waters",
      "Scuba diving at UNEXSO Dive Center",
      "Glass-bottom boat tours",
      "Peterson Cay National Park day trip",
    ],
  },
  {
    category: "Dining & Nightlife",
    items: [
      "Fresh Bahamian seafood at Port Lucaya waterfront",
      "Private chef service at the villa",
      "Sunset cocktails at Banana Bay",
      "Smith\u2019s Point Fish Fry (Wednesdays)",
      "Flying Fish GastroPub",
      "Count Basie Square live entertainment nightly",
    ],
  },
];

const STATS = [
  {
    value: "82\u00B0F",
    label: "Avg. Year-Round Temp",
    detail: "Perfect weather every month — no seasonal risk for event planning",
  },
  {
    value: "4th",
    label: "Largest Island in Bahamas",
    detail: "Grand Bahama: 96 miles long with 60+ miles of pristine white sand beaches",
  },
  {
    value: "$0",
    label: "US Passport Required",
    detail: "No visa needed for US citizens — just a valid passport. Clears customs in under 20 minutes",
  },
  {
    value: "USD",
    label: "Currency Accepted",
    detail: "The Bahamian dollar is pegged 1:1 to USD. No currency exchange needed",
  },
];

export default function WhyFreeport() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
            The Complete Package
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            More Than a Venue —{" "}
            <span className="text-ocean-500">An Experience</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-navy-950/60">
            Your corporate retreat doesn&apos;t end at the villa door. Freeport
            offers world-class activities that transform team outings into
            unforgettable bonding experiences. Here&apos;s what your team can do
            between sessions.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white border border-sand-200 p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-ocean-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-navy-950 mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-navy-950/50">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ACTIVITIES.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-lg font-semibold text-navy-950 mb-4 pb-3 border-b border-ocean-500/20">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-navy-950/70"
                  >
                    <svg
                      className="h-4 w-4 text-ocean-500 mt-0.5 shrink-0"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Photo banner */}
        <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">
          <div className="relative h-48 sm:h-64">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
              alt="Snorkeling in crystal clear Bahamas water"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 sm:h-64">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
              alt="White sand beach with palm trees"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 sm:h-64">
            <Image
              src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80"
              alt="Sunset over the ocean in the Bahamas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-navy-950/60 mb-4">
            Need help planning team activities? We coordinate everything —
            transportation, reservations, and group bookings for all
            attractions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-4 text-base font-semibold text-white hover:bg-ocean-700 transition-all hover:scale-105"
          >
            Tell Us About Your Event
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
