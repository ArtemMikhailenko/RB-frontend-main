import React from "react";

const ListingFeaturesCard = () => {
  return (
    <div className="md:w-[390px] px-5 py-6 rounded-[10px] border border-gray-200 bg-white shadow-sm space-y-5">
      {/* Title */}
      <h3 className="text-[15px] font-semibold text-gray-800">Features</h3>

      {/* Row 1: 4 Checkboxes */}
      <div className="flex flex-wrap gap-x-3 gap-y-3 text-[14px] font-medium text-[#1F1F1F]">
        <label className="flex items-center gap-2 w-[70px]">
          <input type="checkbox" className="w-4 h-4" />
          Garden
        </label>
        <label className="flex items-center gap-2 w-[70px]">
          <input type="checkbox" className="w-4 h-4" />
          Garage
        </label>
        <label className="flex items-center gap-2 w-[70px]">
          <input type="checkbox" className="w-4 h-4" />
          Terrace
        </label>
        <label className="flex items-center gap-2 w-[60px]">
          <input type="checkbox" className="w-4 h-4" />
          Pool
        </label>
      </div>

      {/* Row 2: 3 Checkboxes */}
      <div className="flex flex-wrap gap-x-4 gap-y-3 text-[14px] font-medium text-[#1F1F1F]">
        <label className="flex items-center gap-1 w-[140px]">
          <input type="checkbox" className="w-4 h-4" />
          Community pool
        </label>
        <label className="flex items-center gap-2 w-[60px]">
          <input type="checkbox" className="w-4 h-4" />
          Lift
        </label>
        <label className="flex items-center gap-2 w-[70px]">
          <input type="checkbox" className="w-4 h-4" />
          AA/CC
        </label>
      </div>

      {/* Row 3: 2 Checkboxes */}
      <div className="flex flex-wrap gap-x-4 gap-y-3 text-[14px] font-medium text-[#1F1F1F]">
        <label className="flex items-center gap-2 w-[100px]">
          <input type="checkbox" className="w-4 h-4" />
          Sea views
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          Ready to move and life
        </label>
      </div>

      {/* Keywords Input */}
      <input
        type="text"
        placeholder="Keywords"
        className="w-full px-4 py-2 text-sm border rounded-md bg-[#f6f6f6] text-gray-800 placeholder-gray-500"
      />

      {/* Apply Button */}
      <button className="w-full py-2 text-sm font-medium bg-black text-white rounded-md hover:opacity-90">
        Apply
      </button>
    </div>
  );
};

export default ListingFeaturesCard;
