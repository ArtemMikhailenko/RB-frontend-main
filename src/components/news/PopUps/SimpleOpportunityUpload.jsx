"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NewRequestForm({ setNewRequest }) {
  const router = useRouter();
  const pathname = usePathname(); // <--- you were missing this

  // Treat as popup if the route contains "/news"
  const isPopup = pathname.includes("/news");

  const [type, setType] = useState("rental");
  const [description, setDescription] = useState("");

  const closePopup = () => {
    setNewRequest(false);
  };

  const handleConfirm = () => {
    console.log({ type, description });
    if (isPopup) closePopup();
  };

  const options = ["buy", "rental"];

  return (
    <div className="min-h-[76vh] flex items-center justify-center max-sm:mx-4">
      <div
        className={`bg-white ${
          isPopup ? "" : "p-6 py-8"
        } rounded-lg shadow-md sm:w-100 w-full`}
      >
        {/* Header */}
        {isPopup ? (
          <div className="p-4 bg-[#eceaea] flex items-center justify-between rounded-t-lg">
            <h2 className="sm:text-[16px] text-sm font-medium">NEW REQUEST</h2>
            <button
              className="text-gray-500 hover:text-red-600 text-2xl font-semibold cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        ) : (
          <h2 className="font-bold sm:text-[18px] text-sm mb-6">NEW REQUEST</h2>
        )}

        <div className={`${isPopup ? "p-6" : ""}`}>
          {/* Type Options */}
          <div className="flex gap-6 mb-4">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setType(option)}
              >
                <input
                  type="radio"
                  name="type"
                  value={option}
                  checked={type === option}
                  onChange={() => setType(option)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    type === option
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-400"
                  }`}
                >
                  {type === option && (
                    <span className="text-white text-[10px] font-bold">✔</span>
                  )}
                </div>
                <span className="text-sm">
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </span>
              </label>
            ))}
          </div>

          {/* Description */}
          <div className="mb-4 border border-gray-200 rounded-md p-3">
            <label className="text-xs text-gray-500 block mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description..."
              rows="6"
              className="w-full border-none outline-none text-sm resize-none focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4 gap-2">
            <button
              className="px-4 flex-1 py-2 rounded bg-gray-100 text-sm hover:bg-gray-200"
              onClick={isPopup ? closePopup : () => router.back()}
            >
              Cancel
            </button>
            <button
              className="px-4 flex-1 py-2 rounded bg-black text-white text-sm hover:bg-gray-800"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
