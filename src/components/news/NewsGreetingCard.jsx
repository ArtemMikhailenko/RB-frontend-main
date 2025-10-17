import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsGreetingCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E4E4]">
      <h2 className="text-xl font-semibold mb-3.5">Hello, John Doe!</h2>
      <p className="text-[13px]  text-gray-600">
        Welcome back to your real estate dashboard. You have{" "}
        <span className="text-orange-500">3 new messages</span> and{" "}
        <span className="text-orange-500">5 new leads</span>.
      </p>
      <div className="flex items-center justify-between mt-2 sm:flex-row flex-col sm:gap-2 xs:gap-1">
        <div className="mt-2 text-sm bg-[#ED8F0308] sm:w-[49%] w-full p-3 rounded-md">
          <div className="flex items-center justify-between  mb-2.5">
            <div className="text-[16px] font-black">Your Listing</div>
            <div className="bg-white border rounded-[30px] max-w-fit p-[3px_8px] text-[12px]">
              12 active
            </div>
          </div>
          <div>
            <p className="lg:text-[13px] text-[12px] break-words max-[350px]:text-[11px]">
              You have 12 active listings this week
            </p>
            <Link
              href="/managelisting"
              className="text-[#ED8F03] flex items-center gap-1.5 hover:underline mt-2.5 max-[350px]:text-xs"
            >
              Manage Listing{" "}
              <Image
                src="/icons/News/Maincontainer/arrow.svg"
                alt="arrow"
                width={9}
                height={9}
                className="h-[8.75px] mt-1 max-[350px]:h-[6px]"
              />
            </Link>
          </div>
        </div>
        <div className="mt-2 text-sm bg-[#ED8F0308] sm:w-[49%] w-full p-3 rounded-md max-[350px]:p-2 max-[350px]:text-xs">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[16px] font-black ">Your Leads</div>
            <div className="bg-white border rounded-[30px] max-w-fit p-[3px_8px] text-[12px] max-[350px]:text-[10px]">
              24 h
            </div>
          </div>
          <div>
            <p className="lg:text-[13px] text-[12px] break-words max-[350px]:text-[11px]">
              3 new inquiries in the last 24 hours
            </p>
            <Link
              href="/manageleads"
              className="text-[#ED8F03] flex items-center gap-1.5 hover:underline mt-2.5 max-[350px]:text-xs"
            >
              Manage Leads{" "}
              <Image
                src="/icons/News/Maincontainer/arrow.svg"
                alt="arrow"
                width={9}
                height={9}
                className="h-[8.75px] mt-0.5 max-[350px]:h-[6px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGreetingCard;
