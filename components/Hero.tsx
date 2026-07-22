"use client";

import { useEffect, useState } from "react";
import PreviewCard from "./PreviewCard";

export default function Hero() {
  const taglines = [
    "AI-powered travel itineraries, crafted in seconds.",
    "Discover hidden gems like a local.",
    "Plan every day effortlessly.",
    "Beautiful trips, personalized by AI.",
  ];

  const cards = [
    {
      city: "Tokyo",
      country: "🇯🇵",
      day: "Day 1",
      activities: [
        "⛩️ Senso-ji Temple",
        "🍣 Sushi Dai (Toyosu)",
        "🌆 Shibuya Sky",
        "🍜 Ichiran Ramen",
      ],
      budget: "$720",
      badge: "Foodie",
    },

    {
      city: "Paris",
      country: "🇫🇷",
      day: "Day 2",
      activities: [
        "🥐 Café de Flore",
        "🗼 Eiffel Tower",
        "🍷 Seine Dinner Cruise",
        "🎨 Louvre Museum",
      ],
      budget: "$960",
      badge: "Romantic",
    },

    {
      city: "Bali",
      country: "🇮🇩",
      day: "Day 1",
      activities: [
        "🌅 Seminyak Beach",
        "☕ Revolver Espresso",
        "🌾 Tegallalang Rice Terraces",
        "🍹 Potato Head Beach Club",
      ],
      budget: "$510",
      badge: "Relax",
    },

    {
      city: "Zermatt",
      country: "🇨🇭",
      day: "Day 3",
      activities: [
        "🚞 Gornergrat Railway",
        "🏔️ Matterhorn Viewpoint",
        "🫕 Chez Vrony Fondue Dinner",
        "🛶 Stellisee Lake",
      ],
      budget: "$1180",
      badge: "Scenic",
    },
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [visible, setVisible] = useState(true);
  const [frontCard, setFrontCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setFrontCard((prev) => (prev + 1) % cards.length);
        setVisible(true);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-yellow-100 px-8">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-20">

        {/* LEFT SIDE */}

        <div className="max-w-2xl">

          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            Plan Your Next Adventure
          </h1>

          <p
            className={`mt-6 text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent transition-all duration-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            {taglines[currentTagline]}
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From hidden gems to budgets, maps and day-by-day plans —
            everything you need for your perfect trip in one place.
          </p>

          <button className="mt-10 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-purple-700 hover:shadow-2xl">
            ✈️ Plan My Trip →
          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative hidden h-[600px] w-[500px] lg:block">

          {cards.map((card, index) => {
            const position =
              (index - frontCard + cards.length) % cards.length;

            const styles = [
              "z-30 scale-100 rotate-0 opacity-100 translate-y-0",
              "z-20 scale-95 rotate-6 opacity-50 translate-x-10 -translate-y-10",
              "z-10 scale-90 -rotate-6 opacity-30 -translate-x-10 -translate-y-20",
              "z-0 scale-75 opacity-0",
            ];

            return (
              <PreviewCard
                key={card.city}
                {...card}
                className={`absolute transition-all duration-700 ease-in-out ${styles[position]}`}
              />
            );
          })}

        </div>

      </div>
    </section>
  );
}