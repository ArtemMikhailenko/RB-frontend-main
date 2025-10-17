import React, { useState } from "react";

const RequestModal = ({ isOpen, onClose, onConfirm }) => {
  const [type, setType] = useState("rental");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-100 px-5 py-3">
          <h2 className="text-lg font-semibold text-gray-800">New request</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Custom Radio Buttons with tick */}
          <div className="flex items-center gap-6 mb-4">
            {/* Buy */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="buy"
                checked={type === "buy"}
                onChange={() => setType("buy")}
                className="sr-only peer"
              />
              <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-[#ED8F03] peer-checked:border-[#ED8F03]">
                {type === "buy" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-gray-700">Buy</span>
            </label>

            {/* Rental */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="rental"
                checked={type === "rental"}
                onChange={() => setType("rental")}
                className="sr-only peer"
              />
              <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-[#ED8F03] peer-checked:border-[#ED8F03]">
                {type === "rental" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-gray-700">Rental</span>
            </label>
          </div>

          {/* Description */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 outline-none mb-6 resize-none"
            rows={8}
          />

          {/* Full-width Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="w-full py-3 rounded-lg bg-black text-white hover:bg-gray-800 font-medium"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
