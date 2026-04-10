import { SITE } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-sand-50">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ocean-600">
            Get in Touch
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
            Plan Your Corporate Event
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-950/60">
            Ready to host an unforgettable corporate event in paradise? Contact
            us for a personalized quote tailored to your group size, dates, and
            event requirements.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-600/10">
                <svg className="h-5 w-5 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ocean-600 hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-600/10">
                <svg className="h-5 w-5 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-navy-950/60">{SITE.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
            Request a Quote
          </h3>
          <p className="mt-2 text-sm text-navy-950/60">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
          <form
            className="mt-6 space-y-4"
            action={`mailto:${SITE.email}`}
            method="GET"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Event Date(s)"
                className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
              />
              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your event..."
              className="w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
