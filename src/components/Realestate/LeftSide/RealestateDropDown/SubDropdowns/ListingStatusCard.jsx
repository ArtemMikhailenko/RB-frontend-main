import React from "react";

const ListingStatusCard = () => {
  return (
    <div className="md:w-[400px] p-5 rounded-xl border-gray-400 bg-white shadow-md space-y-6 text-sm font-medium text-[#1F1F1F]">
      {/* Market Section */}
      <div>
        <h3 className="mb-2 text-base font-semibold">Market</h3>
        <div className="flex gap-2">
          <button className="px-4 py-1.5 rounded-full border bg-[#F6F6F6] text-[#1F1F1F] hover:bg-[#eaeaea]">
            New building
          </button>
          <button className="px-8 py-1.5 rounded-full border bg-[#F6F6F6] text-[#1F1F1F] hover:bg-[#eaeaea]">
            Resale
          </button>
          <button className="px-8 py-1.5 rounded-full border bg-[#F6F6F6] text-[#1F1F1F] hover:bg-[#eaeaea]">
            Rent
          </button>
        </div>
      </div>

      {/* New building | Second hand Switch */}
      {/* <div className="inline-flex border border-gray-300 rounded-[8px] overflow-hidden">
        <button className="px-11 py-2 text-sm font-medium bg-[#1F1F1F] text-white">
          New builfing
        </button>
        <button className="px-10 py-2 text-sm font-medium bg-white text-[#1F1F1F]">
          Second hand
        </button>
      </div> */}

      {/* Status Section */}
      <div>
        <h3 className="mb-2 text-base font-semibold">Status</h3>
        <input
          type="text"
          value="Available for show"
          readOnly
          className="w-full px-4 py-2 rounded-md border bg-[#F6F6F6] text-[#1F1F1F] cursor-default"
        />
      </div>

      {/* Apply Button */}
      <button className="w-full py-2 bg-black text-white rounded-md hover:opacity-90">
        Apply
      </button>
    </div>
  );
};

export default ListingStatusCard;
