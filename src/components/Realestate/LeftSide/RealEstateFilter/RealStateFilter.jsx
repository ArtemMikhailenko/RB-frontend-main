import Image from "next/image";
import React from "react";

const RealStateFilter = ({ setGridFilter, gridFilter }) => {
  return (
    <>
      <div className="flex gap-1  mt-6">
        {/* List View Button (Active) */}
        <button
          className={`"w-10 h-10 p-2 rounded-[10px]   bg-white shadow-sm flex items-center justify-center"
      ${gridFilter ? "border border-gray-300" : "border-2 border-black"}
      `}
          onClick={() => {
            setGridFilter(false);
          }}
        >
          <Image
            src="/icons/RealeState/LeftSide/list.svg"
            alt="List view"
            width={20}
            height={20}
          />
        </button>

        {/* Grid View Button (Inactive) */}
        <button
          className={`"w-10 h-10 p-2 rounded-[10px]  bg-white shadow-sm flex items-center justify-center "
      ${gridFilter ? "border-2 border-black" : "border border-gray-300"}
      `}
          onClick={() => setGridFilter(true)}
        >
          <Image
            src="/icons/RealeState/LeftSide/grid.svg"
            alt="Grid view"
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default RealStateFilter;
