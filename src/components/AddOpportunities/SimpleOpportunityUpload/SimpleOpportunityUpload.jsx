"use client";

import { useState } from "react";
import { createOpportunity } from "@/services/opportunityService";

export default function NewRequestForm({ isPopup, setNewRequest }) {
  const [type, setType] = useState("rental"); // rental | buy
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Map frontend values to backend enums
      const payload = {
        method: "SIMPLE",
        need: type === "buy" ? "BUYER" : "RENTAL",
        description,
      };

      await createOpportunity(payload);

      alert("Opportunity created successfully ✅");
      if (setNewRequest) setNewRequest(false); // close popup if exists
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[76vh] flex items-center justify-center max-sm:mx-4">
      <div
        className={`bg-white ${
          isPopup === "Popup" ? "" : "p-6 py-8"
        } rounded-lg shadow-md sm:w-100 w-full`}
      >
        {isPopup === "Popup" ? (
          <div className="p-4 bg-[#eceaea] flex items-center justify-between rounded-[8px_8px_0px_0px]">
            <h2 className=" sm:text-[16px] text-sm font-medium">
              NEW REQUEST
            </h2>
            <button
              className=" text-gray-500 hover:text-red-600 text-2xl font-semibold cursor-pointer"
              onClick={() => setNewRequest(false)}
            >
              &times;
            </button>
          </div>
        ) : (
          <h2 className="font-bold sm:text-[18px] text-sm mb-6">NEW REQUEST</h2>
        )}

        {/* Type Options */}
        <div className={`${isPopup === "Popup" ? "p-6" : ""}`}>
          <div className="flex gap-6 mb-4">
            {/* Buy */}
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setType("buy")}
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center
                ${
                  type === "buy"
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-400"
                }`}
              >
                {type === "buy" && (
                  <span className="text-white text-[10px] font-bold">✔</span>
                )}
              </div>
              <span className="text-sm">Buy</span>
            </label>

            {/* Rental */}
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setType("rental")}
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center
                ${
                  type === "rental"
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-400"
                }`}
              >
                {type === "rental" && (
                  <span className="text-white text-[10px] font-bold">✔</span>
                )}
              </div>
              <span className="text-sm">Rental</span>
            </label>
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
              className="w-full border-none outline-none text-sm resize-none focus:outline-none "
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4 gap-2">
            <button
              className="px-4 flex-1 py-2 rounded bg-gray-100 text-sm hover:bg-gray-200"
              onClick={() => setNewRequest && setNewRequest(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 flex-1 py-2 rounded bg-black text-white text-sm hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
