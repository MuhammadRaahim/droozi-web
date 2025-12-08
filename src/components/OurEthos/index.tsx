"use client";

import { FaLock, FaUsers, FaBolt, FaUserShield } from "react-icons/fa";

const OurEthos = () => {
  const ethosCards = [
    {
      icon: <FaUserShield className="text-4xl text-primary mb-4" />,
      title: "No Tracking. Just Timing.",
      description:
        "We deliver value without persistent location surveillance.",
    },
    {
      icon: <FaLock className="text-4xl text-primary mb-4" />,
      title: "Privacy-First Architecture",
      description:
        "No GPS pings, no data resale, no dark-pattern consent flows.",
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: "Intentional Connections",
      description:
        "Turn missed connections into planned encounters.",
    },
    {
      icon: <FaBolt className="text-4xl text-primary mb-4" />,
      title: "Minimal Friction",
      description:
        "A few taps to set a future location or RSVP, then forget about it.",
    },
  ];

  return (
    <section id="ethos" className="py-20 bg-white dark:bg-[var(--color-black)]">
      <div className="container mx-auto px-4 text-center">
        {/* Title & Description */}
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
          No tracking. Just timing.
        </h2>
        <p className="mb-12 text-base text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
          Droozi proves that everyday apps can deliver value without persistent location surveillance.
        </p>

        {/* Cards */}
        <div className="-mx-4 flex flex-wrap justify-center">
          {ethosCards.map((card, index) => (
            <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/4 mb-8">
              <div className="flex flex-col items-center text-center p-6">
                {/* Icon */}
                {card.icon}
                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-body-color dark:text-body-color-dark">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Italic Quotient Line */}
        <p className="mt-12 text-sm italic text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
          "Privacy is increasingly rare, and location is a prized data point... Droozi shows you don’t have to surrender it to connect in real life."
        </p>
      </div>
    </section>
  );
};

export default OurEthos;
