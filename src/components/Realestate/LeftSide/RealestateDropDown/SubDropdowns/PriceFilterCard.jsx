"use client";

import { useState } from "react";

export default function PriceFilterCard() {
  const [minPrice, setMinPrice] = useState("950€");
  const [maxPrice, setMaxPrice] = useState("2500€");

  return (
    <div className="md:w-80 bg-white rounded-xl border border-gray-200 shadow-md p-5 space-y-5">
      {/* Title */}
      <p className="text-base font-semibold text-gray-800">Price</p>

      {/* Min and Max inputs */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col w-full">
          <label className="text-xs text-gray-600 mb-1">Min</label>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <span className="text-gray-500 pb-3">-</span>

        <div className="flex flex-col w-full">
          <label className="text-xs text-gray-600 mb-1">Max</label>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="w-full py-2 text-sm font-semibold bg-black text-white rounded-md hover:opacity-90 transition"
        onClick={() => {
          alert(`Min: ${minPrice}\nMax: ${maxPrice}`);
        }}
      >
        Apply
      </button>
    </div>
  );
}
