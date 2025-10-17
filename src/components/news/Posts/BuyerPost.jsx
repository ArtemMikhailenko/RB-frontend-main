import Image from "next/image";
import React from "react";
import { FaBed } from "react-icons/fa";

const BuyerPost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src="/images/News/Maincontainer/oliver.png"
            alt="oliver"
            width={52}
            height={52}
          />
        </div>
        <div>
          <h4 className="font-semibold">Harrison Oliver</h4>
          <p className="text-sm text-gray-500">Luxury Real Estate Specialist</p>
          <p className="text-[12px] text-gray-500">1 hour ago</p>
        </div>
      </div>

      <p className="mt-4 pl-0.5 sm:text-[16px] text-[14px]">
        Looking for 4 bed 3 bath penthouse near to Torrevieja up to 3.500.000$
      </p>

      <div className="sm:px-4 px-[6px] py-3 bg-gray-100 rounded-[8px]">
        <div>
          <div className="flex justify-between items-center sm:flex-nowrap flex-wrap">
            <div className="font-semibold text-lg sm::text-lg text-[14px]">
              Buyer needs
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
              <Image
                src="/icons/News/Maincontainer/bath.svg"
                alt="bath"
                width={20}
                height={20}
              />
              3 bath &nbsp; | &nbsp;
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/News/Maincontainer/square.svg" alt="square" width={20} height={20}  /> 128m²
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
            <Image src="/icons/News/Maincontainer/location.svg" alt="location" width={12} height={12} /> Los
            Angeles, CA
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerPost;
