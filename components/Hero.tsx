export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-yellow-100 px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
    Plan Your Next Adventure
    </h1>

    <p className="mt-6 text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
    AI-powered travel itineraries, crafted in seconds.
    </p>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
    From hidden gems to budgets, maps and day-by-day plans —
    everything you need for your perfect trip in one place.
    </p>

      <button className="mt-10 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700">
        ✈️ Plan My Trip
      </button>

    </section>
  );
}