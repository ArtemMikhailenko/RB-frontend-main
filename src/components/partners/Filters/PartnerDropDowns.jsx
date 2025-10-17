"use client";
import React from "react";

const dropdownItems = [
  "Location",
  "Languages",
  "Price",
  "Listing type",
  "More",
];

const dropdownOptions = {
  Location: ["USA", "UK", "Germany", "Pakistan"],
  Languages: ["English", "Spanish", "French", "Urdu"],
  Price: ["Free", "$", "$$", "$$$"],
  "Listing type": ["Full-time", "Part-time", "Remote"],
  More: ["Verified", "Recent", "Popular"],
};

const PartnersPage = () => {
  return (
    <>
      <div className="px-5">
        {/* Main layout */}
        <div className="flex flex-col gap-4 mb-3 ">
          {/* Dropdown filter buttons */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(dropdownOptions).map(([label, options], idx) => (
              <div
                key={idx}
                className="relative flex items-center border border-gray-300 rounded-md justify-between  cursor-pointer max-sm:w-full"
              >
                <select
                  className="appearance-none rounded-md px-3 py-3 pr-10  text-sm font-bold text-gray-700 bg-white focus:outline-none cursor-pointer max-sm:w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {label}
                  </option>
                  {options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                {/* Custom PNG dropdown arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
