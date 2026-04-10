"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  eventType: string;
  guestCount: string;
  preferredDates: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  eventType: "",
  guestCount: "",
  preferredDates: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "fallback"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setMailtoUrl("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.fallback) {
        setStatus("fallback");
        setErrorMessage(data.error);
        setMailtoUrl(data.mailtoUrl);
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-sand-200 px-4 py-3 text-sm outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 text-navy-950 placeholder:text-navy-950/40";

  return (
    <section id="contact" className="py-24 bg-ocean-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-600/30 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Plan Your
            <br />
            Bahamas Event?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
            Tell us about your event and we&apos;ll put together a custom package
            with exclusive corporate pricing. We handle the details so you can
            focus on your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form card */}
          <div className="lg:col-span-3 rounded-3xl bg-white p-8 sm:p-10 shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-500/10">
                  <svg
                    className="h-8 w-8 text-ocean-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-2">
                  Message Sent!
                </h3>
                <p className="text-navy-950/60 mb-6">
                  Thank you for your interest. Our team will review your inquiry
                  and respond within 24 hours with a customized proposal.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : status === "fallback" ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10">
                  <svg
                    className="h-8 w-8 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-2">
                  Almost There!
                </h3>
                <p className="text-navy-950/60 mb-6">
                  {errorMessage}
                </p>
                <a
                  href={mailtoUrl}
                  className="inline-block rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors"
                >
                  Open Email Client
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="block mx-auto mt-3 text-sm text-navy-950/50 hover:text-navy-950/70 transition-colors"
                >
                  Go Back
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-1">
                  Request a Custom Proposal
                </h3>
                <p className="text-sm text-navy-950/60 mb-6">
                  Fill out the form and we&apos;ll respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Event Type *</option>
                      <option value="corporate-retreat">Corporate Retreat</option>
                      <option value="team-building">Team Building</option>
                      <option value="conference">Conference / Meeting</option>
                      <option value="incentive-trip">Incentive Trip</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="executive-offsite">Executive Offsite</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Estimated Guests</option>
                      <option value="1-10">1 – 10 guests</option>
                      <option value="11-25">11 – 25 guests</option>
                      <option value="26-50">26 – 50 guests</option>
                      <option value="50+">50+ guests</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="preferredDates"
                    placeholder="Preferred Dates (e.g., March 15-18, 2026)"
                    value={formData.preferredDates}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your event — goals, special requirements, questions... *"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />

                  {status === "error" && (
                    <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-ocean-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact methods sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Email card */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-1">Email Us Directly</h4>
              <p className="text-white/60 text-sm mb-4">
                Prefer email? Send us your details directly.
              </p>
              <a
                href="mailto:andrew@web4guru.com?subject=Corporate%20Event%20Inquiry%20-%20SerenitySpaces%20Bahamas"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-500 font-medium text-sm transition-colors"
              >
                andrew@web4guru.com
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* WhatsApp & Phone */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 text-white">
              <h4 className="font-semibold text-lg mb-4">Call or Message</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/19123183543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+19123183543"
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <svg className="h-5 w-5 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (912) 318-3543
                </a>
              </div>
            </div>

            {/* Note */}
            <p className="text-sm text-white/50 text-center lg:text-left">
              All bookings are handled personally — no automated checkout. We
              work directly with you to craft the perfect experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
