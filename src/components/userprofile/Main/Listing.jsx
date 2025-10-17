import React from "react";
import UserFeedUploadSlider from "../UserFeedUploadSlider";
import { FaBed } from "react-icons/fa";
import Image from "next/image";
import { Images } from "lucide-react";
const Listing = () => {
  return (
    <div className="relative w-full">
      <div>
        <UserFeedUploadSlider />
      </div>
      <div className=" sm:px-4 px-[6px] py-3 bg-gray-100 rounded-[0px_0px_8px_8px]">
        <div>
          <div className="flex justify-between  sm:flex-nowrap flex-wrap">
            <div className="font-semibold sm::text-lg text-[14px]">
              Modern City Retreat
            </div>
            <div className=" font-semibold sm:text-lg text-[14px]">
              3.500.000€
            </div>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1.5 sm:flex-nowrap flex-wrap ">
            <div className="flex items-center gap-2">
              <FaBed /> 4 bed &nbsp; | &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image width={16} height={16} src="/icons/NewProfile/bath.svg" alt="bath" />3 bath &nbsp; |
              &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image width={18} height={18} src="/icons/NewProfile/square.svg" alt="square" /> 128m²
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
            <Image width={16} height={16} src="/icons/NewProfile/location.svg" alt="location" /> Los Angeles, CA
          </div>
        </div>
      </div>
      <div className="absolute top-7 right-3 flex gap-2">
        <div
          title="Download"
          className="bg-[#acacac66] border border-[#E4E4E4]  p-[7px_8px] rounded-[5px] cursor-pointer"
        >
          <Image width={16} height={16} src="/icons/NewProfile/download.svg" alt="download" />
        </div>
        <div
          title="Edit"
          className="bg-[#acacac66] border border-[#E4E4E4]  p-[7px_8px] rounded-[5px] cursor-pointer"
        >
          <Image width={16} height={16} src="/icons/NewProfile/write.svg" alt="write" />
        </div>
        <div
          title="Share"
          className="bg-[#acacac66] border border-[#E4E4E4]  p-[7px_8px] rounded-[5px] cursor-pointer"
        >
          <Image width={16} height={16} src="/icons/NewProfile/share.svg" alt="share" />
        </div>
      </div>
    </div>
  );
};

export default Listing;
