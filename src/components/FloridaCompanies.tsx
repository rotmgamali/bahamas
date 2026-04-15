import Image from "next/image";

const FLIGHT_ROUTES = [
  {
    city: "Fort Lauderdale",
    code: "FLL",
    time: "35 min",
    airlines: "American, Bahamasair, Western Air",
    perWeek: "15+",
  },
  {
    city: "Miami",
    code: "MIA",
    time: "50 min",
    airlines: "American Airlines",
    perWeek: "7+",
  },
  {
    city: "Orlando",
    code: "MCO",
    time: "1 hr 15 min",
    airlines: "Bahamasair (seasonal)",
    perWeek: "Connections",
  },
  {
    city: "West Palm Beach",
    code: "PBI",
    time: "45 min",
    airlines: "Western Air",
    perWeek: "Weekly",
  },
];

const COMPARISONS = [
  {
    destination: "Florida Keys (Key West)",
    problem:
      "3-4 hour drive from Miami, single highway with traffic, no direct flights, limited private venue options",
    serenity:
      "35-minute direct flight, private 4-villa compound, Caribbean setting",
  },
  {
    destination: "Destin / 30A",
    problem:
      "8-9 hour drive from South Florida or connecting flight, peak-season crowds, mostly hotel venues",
    serenity:
      "Faster than driving across Florida, private villa with pool, quieter off-season",
  },
  {
    destination: "Turks & Caicos",
    problem:
      "3+ hour flight from Miami, higher nightly rates, longer travel day",
    serenity:
      "35 min from FLL, USD pricing, corporate group discounts, same tropical experience",
  },
  {
    destination: "Hotel ballroom retreat",
    problem:
      "Shared spaces, noise from other guests, rigid catering contracts, no privacy",
    serenity:
      "Exclusive private compound, full kitchen for any catering, total team privacy",
  },
];

export default function FloridaCompanies() {
  return (
    <section id="florida" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-500/5 rounded-full -translate-x-1/2 -translate-y-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
            Built for Florida Companies
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Closer Than Driving to{" "}
            <span className="text-ocean-500">the Keys</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-navy-950/60">
            If you&apos;re running a corporate event from Miami, Fort Lauderdale,
            Orlando, or Tampa — SerenitySpaces is probably the fastest way to
            get your team to a genuine Caribbean private venue. A direct flight
            beats an all-day drive to the Keys or a connection to Turks.
          </p>
        </div>

        {/* Flight routes grid */}
        <div className="mb-20">
          <h3 className="font-display text-xl font-semibold text-navy-950 mb-6 text-center">
            Direct Flights from Florida &amp; Beyond
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLIGHT_ROUTES.map((route) => (
              <div
                key={route.code}
                className="rounded-2xl border border-sand-200 bg-white p-6 hover:border-ocean-500/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-navy-950/50 font-medium">
                      From
                    </div>
                    <div className="font-semibold text-navy-950">
                      {route.city}
                    </div>
                  </div>
                  <div className="rounded-lg bg-ocean-500/10 px-2.5 py-1 text-xs font-bold text-ocean-600">
                    {route.code}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-navy-950/70">
                    <svg
                      className="h-4 w-4 text-ocean-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-navy-950">
                      {route.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-navy-950/60">
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
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                    <span className="text-xs leading-tight">
                      {route.airlines}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-sand-100 text-xs text-navy-950/50">
                    {route.perWeek} flights per week
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold text-navy-950 mb-6 text-center">
            vs. The Usual Florida Alternatives
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {COMPARISONS.map((comp) => (
              <div
                key={comp.destination}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-6"
              >
                <h4 className="font-display text-lg font-bold text-navy-950 mb-4">
                  {comp.destination}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-100 p-1 mt-0.5 shrink-0">
                      <svg
                        className="h-3 w-3 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-navy-950/60 leading-relaxed">
                      {comp.problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-ocean-500/20 p-1 mt-0.5 shrink-0">
                      <svg
                        className="h-3 w-3 text-ocean-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-navy-950/70 leading-relaxed font-medium">
                      <span className="text-ocean-600">SerenitySpaces:</span>{" "}
                      {comp.serenity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USD + passport callout */}
        <div className="rounded-3xl bg-navy-950 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-600/20 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">
              Zero Friction for US-Based Teams
            </h3>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="font-display text-4xl font-bold text-gold-400 mb-2">
                  USD
                </div>
                <p className="text-sm text-white/60">
                  Bahamian dollar is pegged 1:1 to the US dollar. No currency
                  exchange, no surprise expense reports.
                </p>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold-400 mb-2">
                  No Visa
                </div>
                <p className="text-sm text-white/60">
                  US citizens only need a valid passport. Customs clears in
                  under 20 minutes at FPO.
                </p>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gold-400 mb-2">
                  English
                </div>
                <p className="text-sm text-white/60">
                  English is the official language. No language barrier for
                  client entertainment or vendor coordination.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 mt-10 text-base font-bold text-navy-950 hover:bg-gold-500 transition-all hover:scale-105 shadow-lg"
            >
              Get Your Custom Quote
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
      </div>
    </section>
  );
}
