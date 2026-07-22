export default function Features() {
  const features = [
    {
      emoji: "🤖",
      title: "AI Itineraries",
      desc: "Personalized travel plans generated instantly.",
    },
    {
      emoji: "🗺️",
      title: "Day-by-Day Plans",
      desc: "Morning to night activities already organized.",
    },
    {
      emoji: "💎",
      title: "Hidden Gems",
      desc: "Discover places tourists usually miss.",
    },
    {
      emoji: "📸",
      title: "Visual Inspiration",
      desc: "See beautiful previews before you travel.",
    },
    {
      emoji: "💰",
      title: "Budget Planning",
      desc: "Stay within budget with smart AI suggestions.",
    },
    {
      emoji: "🍜",
      title: "Local Food",
      desc: "Find famous restaurants and authentic cuisine.",
    },
    {
      emoji: "🚆",
      title: "Transport Guide",
      desc: "Metro, buses, taxis and travel times included.",
    },
    {
      emoji: "🌤️",
      title: "Weather Insights",
      desc: "Plan around expected weather conditions.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Everything You Need
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Wanderlust AI plans your entire journey in seconds.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
              rounded-3xl
              bg-white/90
              p-8
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
              hover:ring-2
              hover:ring-purple-400
              "
            >
              <div className="text-5xl">{feature.emoji}</div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.desc}
              </p>

              <button className="mt-6 font-semibold text-purple-600 hover:text-purple-800">
                Learn more →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}