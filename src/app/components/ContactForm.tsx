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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Plan Your Corporate Event
          </h2>
          <p className="text-lg text-ocean-700 max-w-2xl mx-auto">
            Ready to host an unforgettable event in the Bahamas? Fill out the form below and our
            team will craft a custom proposal tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sand-100">Email</p>
                    <a href="mailto:andrew@web4guru.com" className="text-gold-400 hover:text-gold-500 transition-colors">
                      andrew@web4guru.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sand-100">Location</p>
                    <p className="text-sand-200">Freeport, Grand Bahama Island</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sand-100">Response Time</p>
                    <p className="text-sand-200">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-ocean-800">
                <p className="text-sand-200 text-sm leading-relaxed">
                  Exclusive corporate discounts available for multi-day bookings and repeat clients.
                  All events include personalized concierge service.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-950 mb-2">
                  Message Sent!
                </h3>
                <p className="text-ocean-700 mb-6">
                  Thank you for your interest. Our team will review your inquiry and respond within 24 hours
                  with a customized proposal.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors font-medium"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950 bg-white"
                    >
                      <option value="">Select event type</option>
                      <option value="corporate-retreat">Corporate Retreat</option>
                      <option value="team-building">Team Building</option>
                      <option value="conference">Conference / Meeting</option>
                      <option value="incentive-trip">Incentive Trip</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="executive-offsite">Executive Offsite</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-semibold text-navy-950 mb-1.5">
                      Estimated Guests
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950 bg-white"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1 - 10 guests</option>
                      <option value="11-25">11 - 25 guests</option>
                      <option value="26-50">26 - 50 guests</option>
                      <option value="50+">50+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDates" className="block text-sm font-semibold text-navy-950 mb-1.5">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    id="preferredDates"
                    name="preferredDates"
                    value={formData.preferredDates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all text-navy-950"
                    placeholder="e.g., March 15-18, 2026 (flexible)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-950 mb-1.5">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sand-200 rounded-lg focus:ring-2 focus:ring-ocean-400 focus:border-transparent outline-none transition-all resize-none text-navy-950"
                    placeholder="Describe your event goals, any special requirements, and questions you have..."
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Request a Custom Proposal"}
                </button>

                <p className="text-center text-sm text-ocean-700">
                  No online booking — our team will respond personally within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
