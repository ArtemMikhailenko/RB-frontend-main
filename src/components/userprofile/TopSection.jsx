import Image from "next/image";
import React, { useState } from "react";
import RequestModal from "./PopUp/RequestModal";

const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex max-sm:flex-col justify-between max-sm:gap-3 sm:p-4 md:p-6 p-2 rounded-2xl">
      {/* Left - Profile Image + Info */}
      <div className="flex items-center gap-3 md:gap-4 sm:gap-2">
        <div className="relative sm:w-30 sm:h-30 h-20 w-20">
          <Image
            src="/icons/NewProfile/profile.png"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="sm:text-4xl text-xl font-bold">David Tsen*</h2>
          <p className="sm:text-sm text-[11px] text-gray-600 sm:py-2 py-1">
            EXP REALTY OF CANADA, INC.
          </p>

          <div className="flex gap-1 items-center justify-center">
            <div className="relative sm:w-5 sm:h-5 h-3 w-3">
              <Image src="/icons/NewProfile/chat.svg" alt="chat" fill />
            </div>
            {/* FIXED: changed p → div */}
            <div className="font-semibold text-[10px] sm:text-sm text-gray-800">
              827 REQUEST
              <span
                onClick={() => setIsModalOpen(true)}
                className="pl-2 cursor-pointer text-[#ED8F03] font-semibold"
              >
                LEAVE A REQUEST
              </span>
              <RequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right - Buttons aligned to bottom */}
      <div className="flex gap-2 sm:gap-1 md:gap-3 self-end">
        <button className="sm:px-6 sm:py-2 px-3 py-1 border text-xs sm:text-base rounded-md sm:rounded-lg font-medium">
          CALL
        </button>
        <button className="sm:px-4 sm:py-2 px-2 py-1 bg-black text-white rounded-md sm:rounded-lg text-xs sm:text-base font-medium">
          MESSAGE
        </button>
      </div>
    </div>
  );
};

export default TopSection;
