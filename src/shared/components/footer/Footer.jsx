import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 py-10 mt-10">
      <div className=" mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="text-xl font-bold">
              <Image
                src="/icons/Footer/logowhite.png"
                alt="company logo"
                width={60}
                height={28}
                className="h-[28px] w-[60px]"
              />
            </div>
          </div>
          <div className="text-sm md:w-1/3 w-1/2">
            Realtor biuro offers you new and resale listings, with information
            verified by profesionals Ensuring market-aligned prices and
            conditions
          </div>
        </div>
        <hr className="border-t border-[#464646] my-5" />
        <div className="mt-4 flex justify-between gap-2 text-black items-center">
          <div className="text-sm text-[#D9D9D9]">
            Copyright © 2024 All Right Reserved
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                name="country"
                className=" rounded-[10px] outline-none text-[16px] text-[#343434] bg-white sm:py-[12px] sm:px-[16px] py-[7px] px-[8px] relative appearance-none sm:pr-10 pr-8"
              >
                <option value="">EUR</option>
                <option value="">USD</option>
                <option value="">PKR</option>
              </select>

              {/* Custom arrow */}
              <div className="pointer-events-none absolute top-1/2 sm:right-2 right-4 -translate-y-1/2 ">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className="flex items-center border border-[#E4E4E4] rounded-[10px] sm:py-[11.5px] sm:px-[16px] py-[7px] px-[8px]
                        sm:pr-[16px] pr-[26px] gap-2.5 bg-white relative"
            >
              <Image src="/icons/Footer/globe.svg" alt="globe" width={24} height={24} />
              <select className="border-none outline-0 cursor-pointer pr-2.5 sm:text-[15px] text-[12px]">
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
