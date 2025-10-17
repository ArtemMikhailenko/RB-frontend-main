"use client";
import React from "react";

const maxBarHeightPx = 120;

const TicketSizeChart = ({ bars = [], ticketMainLabel }) => {
  if (!bars.length) return null;

  // Find the max value to normalize heights
  const maxValue = Math.max(...bars.map((b) => b.value));

  return (
    <div className="w-full max-w-[440px] bg-white p-4 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[16px] font-semibold text-black">
          {ticketMainLabel}
        </h2>
        <div className="relative">
          <select className="appearance-none text-sm border border-gray-200 rounded-md px-2 py-1 bg-white shadow-inner pr-8 focus:outline-none">
            <option>Family buyers</option>
            <option>Individual buyers</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6" />

      {/* Bars */}
      <div className="flex items-end justify-between h-[160px] px-2">
        {bars.map((bar, index) => {
          const barHeight = (bar.value / maxValue) * maxBarHeightPx;

          return (
            <div key={index} className="flex flex-col items-center w-[40px]">
              {/* Bar container */}
              <div className="relative w-full h-[140px] bg-[#F5F5F5] flex items-end overflow-visible rounded-xl">
                <div
                  className="w-full bg-[#3A27FF] relative rounded-b-xl"
                  style={{ height: `${barHeight}px` }}
                >
                  {/* Optional text inside bar */}
                  {bar.showText && bar.text && (
                    <span className="absolute text-white text-[10px] font-semibold left-1/2 -translate-x-1/2 top-1">
                      {bar.text}
                    </span>
                  )}

                  {/* Amber end line (extends outside the bar container) */}
                  <span className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-[48px] rounded-full bg-[#3A27FF] z-10 h-1" />
                </div>
              </div>

              {/* Bar label */}
              <span className="text-[11px] text-gray-800 mt-2">
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketSizeChart;
