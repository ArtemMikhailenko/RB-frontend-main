"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
const AddEventModal = ({ onClose }) => {
  const dateInputRef = useRef(null);
  const [date, setDate] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal
  };

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.(); // Open native picker (for supported browsers)
      dateInputRef.current.focus();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#9B9B9B99] bg-opacity-20 transition-opacity duration-200"
    >
      <div
        onClick={handleModalClick}
        className="bg-white rounded-lg shadow-lg w-full max-w-[90%] md:max-w-lg relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {/* Header */}
        <div className="p-6 bg-[#FBFBFB] rounded-t-md border-b border-[#E4E4E4]">
          <h2 className="text-xl font-semibold">Add Event</h2>
        </div>

        {/* Form */}
        <form className="space-y-4 px-6 py-4">
          {/* Event Title */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Enter event name"
              className="w-full px-3 py-3 border rounded-md focus:outline-none border-[#E4E4E4] text-sm"
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700 mb-1">
              Date
            </label>
            <div className="relative w-full "onClick={openDatePicker}>
              {/* Hidden Native Date Input */}
              <input
                ref={dateInputRef}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-3 border border-[#E4E4E4] rounded-md text-sm appearance-none outline-none relative z-10
                [&::-webkit-calendar-picker-indicator]:opacity-0
                [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />

              {/* Placeholder */}
              {!date && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none z-10 bg-white px-1">
                  Select a date
                </span>
              )}

              {/* Custom Calendar Icon */}
              <button
                type="button"
                
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
              >
                <Image
                  src="/icons/News/Maincontainer/calendar.svg"
                  alt="Calendar Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full px-3 py-3 border rounded-md focus:outline-none border-[#E4E4E4] text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors duration-200"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
