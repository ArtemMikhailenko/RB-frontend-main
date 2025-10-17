"use client";
import React, { useState } from "react";
import TopSection from "@/components/userprofile/TopSection";
import AboutDavid from "@/components/userprofile/AboutDavid";
import FeedFilterForm from "@/components/userprofile/FeedFilterForm";
import Main from "@/components/userprofile/Main";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  const [islisting, setListing] = useState(false);
  const [isactive, setIsactive] = useState(true);
  const [ispost, setPost] = useState(false);
  const [filterPopUp, setFilterPopUp] = useState(false);
   const post = () => {
    setPost(true);
    setListing(false);
    setIsactive(false);
  };

  const listing = () => {
    setIsactive(false);
    setPost(false);
    setListing(true);
  };

  const request = () => {
    setIsactive(true);
    setPost(false);
    setListing(false);
  };
   return (
    <div className="py-2 px-5">
      <TopSection />

      <div
        className={`grid ${
          islisting
            ? "grid-cols-1 lg:grid-cols-[350px_1fr]"
            : "grid-cols-[350px_1fr]"
        }  gap-5 max-lg:grid-cols-1 max-lg:gap-12`}
      >
        {/* Sidebar */}
        <div className={`${islisting ? "hidden lg:block" : "block"} pl-6`}>
          {islisting ? <FeedFilterForm /> : <AboutDavid />}
        </div>
        {islisting && (
          <div
            className="fixed bottom-0 right-0 m-4 p-[8px_16px] z-10 bg-black text-white rounded-[16px] shadow-lg flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-sm lg:hidden"
            onClick={() => setFilterPopUp(true)}
          >
            <Image width={24} height={24} src="/icons/NewProfile/setting-4.png" alt="filter" /> Filter
          </div>
        )}

        {/* Main Content */}
        <div className="w-full">
          <Main
            ispost={ispost}
            post={post}
            isactive={isactive}
            request={request}
            islisting={islisting}
            listing={listing}
          />
        </div>
        {filterPopUp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-[500px] rounded-lg shadow-lg text-center relative max-h-[90vh] overflow-y-auto border border-[#E4E4E4]">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  setFilterPopUp(false);
                }}
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page