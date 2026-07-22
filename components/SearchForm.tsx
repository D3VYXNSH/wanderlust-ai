"use client";

import { useState } from "react";

export default function SearchForm() {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [budget, setBudget] = useState("$1000 - $2500");
  const [style, setStyle] = useState("Adventure");

  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-purple-50 to-yellow-50 p-10 shadow-2xl">

        <h2 className="text-center text-4xl font-bold text-gray-900">
          ✨ Build Your Perfect Trip
        </h2>

        <p className="mt-3 text-center text-gray-600">
          Tell Wanderlust AI a little about your trip.
        </p>

        <div className="mt-10 space-y-6">

          {/* Destination */}

          <div>

            <label className="mb-2 block font-semibold">
              📍 Destination
            </label>

            <input
              type="text"
              placeholder="Tokyo"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-purple-500"
            />

          </div>

          {/* Dates */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-semibold">
                📅 Departure
              </label>

              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-purple-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                📅 Return
              </label>

              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-purple-500"
              />

            </div>

          </div>

          {/* Budget + Style */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-semibold">
                💰 Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-4"
              >
                <option>Under $1000</option>
                <option>$1000 - $2500</option>
                <option>$2500 - $5000</option>
                <option>Luxury ($5000+)</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                🎒 Travel Style
              </label>

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-4"
              >
                <option>Adventure</option>
                <option>Luxury</option>
                <option>Food</option>
                <option>Nature</option>
                <option>Solo</option>
                <option>Family</option>
              </select>

            </div>

          </div>

          <div className="pt-4 text-center">

            <button className="rounded-full bg-purple-600 px-10 py-4 text-lg font-bold text-white transition hover:scale-105 hover:bg-purple-700">
              ✈ Generate My Trip
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}