"use client";
// import TopNavbar from "@/shared/navbar/Header";
import React from "react";
// import Card from "@/components/UserCard/UserCard";
import PartnersPage from "@/components/partners/Filters/PartnerDropDowns";
import PartnerSubrouteButtons from "@/components/partners/SubrouteButtons/PartnerSubrouteButtons";
import {FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [filterPopUp, setFilterPopUp] = React.useState(false);
  return (
    <>
      <div className="bg-[#f5f5f5] min-h-screen">
        <PartnerSubrouteButtons />
        <div className="md:block hidden">
          <PartnersPage />
        </div>

        <div
          className="fixed bottom-0 right-0 m-4 p-[8px_16px] bg-black text-white rounded-[16px] shadow-lg flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-sm md:hidden z-40"
          onClick={() => setFilterPopUp(true)}
        >
          <Image src="/icons/Partners/filter.svg" alt="Filter" height={18} width={18}  /> Filter
        </div>
        {children}
        {filterPopUp && (
          <div className="md:hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-[500px] rounded-lg shadow-lg text-center relative max-h-[90vh] overflow-y-auto border border-[#E4E4E4] pb-4">
              <div className="flex items-center justify-between py-6 px-6 border-b border-[#E4E4E4] bg-[#FBFBFB] mb-3">
                <h2>Filters</h2> {/* Close Button */}
                <button
                  className="text-gray-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => {
                    setFilterPopUp(false);
                  }}
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Popup Content */}
              <PartnersPage />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
