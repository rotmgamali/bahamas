import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const packages = [
  {
    name: "Day Conference",
    price: "From $2,500",
    features: [
      "Full-day venue access",
      "Conference room setup",
      "Wi-Fi & A/V equipment",
      "Catering for up to 30",
      "On-site coordinator",
    ],
  },
  {
    name: "Executive Retreat",
    price: "From $8,500",
    featured: true,
    features: [
      "3-day / 2-night stay",
      "Private villa accommodation",
      "Full catering & bar service",
      "Team-building activities",
      "Airport transfers",
      "Dedicated event planner",
    ],
  },
  {
    name: "Grand Bahama Gala",
    price: "From $15,000",
    features: [
      "Full estate exclusive access",
      "Up to 80 guests",
      "Premium catering & open bar",
      "Live entertainment setup",
      "Photography package",
      "Complete event production",
    ],
  },
];

export default function Packages() {
  return (
    <SectionWrapper id="packages" dark>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
          Corporate Packages
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
          Tailored to Your Event
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
          Choose a starting package and customize it to perfectly fit your
          corporate event needs. All packages include corporate discount pricing.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-2xl p-8 ${
              pkg.featured
                ? "bg-ocean-600 ring-2 ring-gold-400"
                : "bg-white/5 ring-1 ring-white/10"
            }`}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
              {pkg.name}
            </h3>
            <p className="mt-2 text-2xl font-bold text-gold-400">{pkg.price}</p>
            <ul className="mt-6 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              variant={pkg.featured ? "outline" : "primary"}
              className={`mt-8 w-full ${
                pkg.featured
                  ? "border-white text-white hover:bg-white hover:text-ocean-700"
                  : ""
              }`}
            >
              Get a Quote
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
