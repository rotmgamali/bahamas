"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How many guests can SerenitySpaces accommodate?",
    answer:
      "When rented as a complete property, SerenitySpaces comfortably accommodates up to 14 guests across our four main villas (Agave, Coconut, Lime, and Pi\u00f1a). With our two additional budget villas (Moringa and Papaya), total capacity extends to approximately 19 guests. Each villa has different capacity \u2014 Agave and Coconut sleep up to 4, Lime hosts 3, and Pi\u00f1a is perfect for 2.",
  },
  {
    question: "What are the rates and how does pricing work?",
    answer:
      "Our base rate is $650/night for the entire complex, or individual villas starting from $150/night. There is a $180 cleaning fee and we require a minimum 3-night stay. We offer discounts for longer stays: 10% for up to 7 nights, 15% for up to 14 nights, 20% for up to 30 nights, and 25% for longer corporate stays. Contact us for custom corporate event pricing.",
  },
  {
    question: "How do we book for a corporate event?",
    answer:
      "All corporate bookings are handled personally \u2014 email andrew@web4guru.com with your dates, group size, and event requirements. We\u2019ll respond within 24 hours with a custom proposal including exclusive corporate group pricing.",
  },
  {
    question: "How far is the property from the beach?",
    answer:
      "SerenitySpaces is located just 1/4 mile (about 400 meters) from pristine Coral Beach \u2014 a 5-minute walk. The beach offers crystal-clear turquoise waters and powdery white sand, perfect for swimming, snorkeling, and team activities.",
  },
  {
    question: "How do we get to Freeport from the US?",
    answer:
      "Freeport is incredibly accessible \u2014 just a 35-minute direct flight from Fort Lauderdale or under an hour from Miami. American Airlines, Bahamasair, and Western Air offer 30+ direct flights per week. Grand Bahama International Airport is a 25-minute drive from our property.",
  },
  {
    question: "What kitchen facilities are available?",
    answer:
      "Lime Villa features a fully equipped chef\u2019s kitchen with refrigerator, stove, oven, microwave, coffee maker, cookware, and a 6-person dining table plus counter seating for 4 more. Coconut Villa has a kitchenette, while Agave and Pi\u00f1a have basic amenities including burners, microwaves, coffee makers, and small fridges.",
  },
  {
    question: "Is the pool available to all guests?",
    answer:
      "All guests staying in the four main villas (Agave, Coconut, Lime, and Pi\u00f1a) have full pool access. The pool is surrounded by tropical gardens, skimmed almost daily, and professionally cleaned twice a month. Exclusive pool use is available for an upcharge.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Full refund if cancelled at least 5 days before check-in. For cancellations 2-4 days before check-in, the first night is non-refundable but 50% of remaining nights will be refunded. No refunds within 48 hours of check-in. Contact us about flexible terms for corporate bookings.",
  },
  {
    question: "Are events and gatherings permitted?",
    answer:
      "Small gatherings of registered guests are welcome. Larger corporate events require prior approval and may incur additional fees. Contact us in advance to discuss your specific needs \u2014 we\u2019re experienced in hosting corporate groups.",
  },
  {
    question: "What's the policy on smoking and noise?",
    answer:
      "SerenitySpaces is strictly non-smoking indoors and near the pool. Designated smoking areas are in the garden. Quiet hours are 10:00 PM to 8:00 AM. We maintain these standards to ensure a productive, professional atmosphere for corporate guests.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ocean-500 mb-4">
            Common Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy-950/60">
            Everything you need to know about hosting your corporate event at
            SerenitySpaces in Freeport, Grand Bahama Island.
          </p>
        </div>

        <div className="divide-y divide-sand-200 border-t border-b border-sand-200">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:bg-sand-200/30"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-base sm:text-lg font-semibold text-navy-950 pr-2">
                  {item.question}
                </span>
                <span className="flex-shrink-0">
                  <svg
                    className={`h-5 w-5 text-ocean-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-navy-950/70 leading-relaxed pr-10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-navy-950/60 mb-4">
            Still have questions about hosting your corporate event?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-ocean-700 transition-colors"
          >
            Contact Us Directly
            <svg
              className="h-4 w-4"
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
