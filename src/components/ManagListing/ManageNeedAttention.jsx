import React from "react";

const ManageNeedAttention = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#636363] border border-[#E4E4E4] sm:max-h-[150px] sm:p-4 p-2 rounded-lg w-full">
      <p className="font-bold text-black text-16 sm:text-[18px]">Need your attention</p>
      <div className="flex items-center max-sm:text-[13px] gap-3">
        <span className="w-2 h-2 rounded-lg bg-[#FFB903]"></span>
        <p> <span className="font-bold">4 listings </span> not very useful</p>
      </div>
      <div className="flex items-center gap-3 max-sm:text-[13px]">
        <span className="w-2 h-2 rounded-lg bg-[#FFB903]"></span>
        <p> <span className="font-bold">11 listings </span> with a higher prices </p>
      </div>
      <div className="flex items-center gap-3 max-sm:text-[13px]">
        <span className="w-2 h-2 rounded-lg bg-[#FFB903]"></span>
        <p> <span className="font-bold">3 listings</span> waiting to continue </p>
      </div>
      <div className="flex items-center gap-3 max-sm:text-[13px]">
        <span className="w-2 h-2 rounded-lg bg-[#FFB903]"></span>
        <p> <span className="font-bold">1 exclusive listings</span> expired soons </p>
      </div>
    </div>
  );
};

export default ManageNeedAttention;
