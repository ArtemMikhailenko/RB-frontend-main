"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allDates = [
  { day: "FRI", date: 8, month: "AUG" },
  { day: "SAT", date: 9, month: "AUG" },
  { day: "SUN", date: 10, month: "AUG" },
  { day: "MON", date: 11, month: "AUG" },
  { day: "TUE", date: 12, month: "AUG" },
  { day: "WED", date: 13, month: "AUG" },
  { day: "THU", date: 14, month: "AUG" },
];

const timeSlots = [
  { label: "MORNING", time: "9am to 12pm" },
  { label: "AFTERNOON", time: "12pm to 4pm" },
  { label: "EVENING", time: "4pm to 8pm" },
];

export default function ScheduleTour() {
  const [startIndex, setStartIndex] = useState(1); // controls the sliding window
  const [selectedDate, setSelectedDate] = useState(allDates[2]); // default SUN 10
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]); // default AFTERNOON

  const visibleDates = allDates.slice(startIndex, startIndex + 3);

  const nextDates = () => {
    if (startIndex + 3 < allDates.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevDates = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRequestTour = () => {
    alert(
      `✅ Tour requested on ${selectedDate.day}, ${selectedDate.date} ${selectedDate.month} during ${selectedSlot.label} (${selectedSlot.time})`
    );
  };

  return (
    <div className="max-w-md mx-auto border rounded-xl border-[#E5E7EB] shadow-sm p-6 bg-white">
      {/* Title */}
      <h2 className="sm:text-lg text-base font-semibold mb-1">
        Schedule a tour
      </h2>
      <p className="text-gray-500 text-[12px] sm:text-sm mb-4">
        Tour with a buyer&apos;s agent
      </p>

      {/* Date slider */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevDates}
          disabled={startIndex === 0}
          className={`p-2 rounded-full ${
            startIndex === 0
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-4">
          {visibleDates.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d)}
              className={`flex flex-col items-center px-3 py-2 rounded-lg  text-sm transition ${
                selectedDate.date === d.date
                  ? "bg-blue-50 border border-blue-500 text-blue-600 font-medium"
                  : " text-gray-700"
              }`}
            >
              <span>{d.day}</span>
              <span className="text-lg font-semibold">{d.date}</span>
              <span className="text-xs">{d.month}</span>
            </button>
          ))}
        </div>

        <button
          onClick={nextDates}
          disabled={startIndex + 3 >= allDates.length}
          className={`p-2 rounded-full ${
            startIndex + 3 >= allDates.length
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {timeSlots.map((slot) => (
          <button
            key={slot.label}
            onClick={() => setSelectedSlot(slot)}
            className={`rounded-lg border px-2 py-3 text-xs font-medium transition ${
              selectedSlot.label === slot.label
                ? "bg-blue-50 border-blue-500 text-blue-600 "
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            <div>{slot.label}</div>
            <div className="text-gray-500">{slot.time}</div>
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <button
        onClick={handleRequestTour}
        className="w-full bg-[#111827] max-sm:text-sm text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition mb-3"
      >
        Request a tour
      </button>

      <button className="w-full border max-sm:text-sm border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
        See commission
      </button>
    </div>
  );
}
