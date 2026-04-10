export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <svg className="mx-auto h-10 w-10 text-gold-400/50 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="font-display text-2xl sm:text-3xl font-medium text-navy-950 leading-relaxed mb-8">
          The best corporate events happen when you take your team somewhere
          truly special. A beachside villa in the Bahamas beats any hotel
          conference room — every time.
        </blockquote>
        <div>
          <div className="font-semibold text-navy-950">
            SerenitySpaces Team
          </div>
          <div className="text-sm text-navy-950/50">
            Freeport, Grand Bahama Island
          </div>
        </div>
      </div>
    </section>
  );
}
