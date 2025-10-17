import React, { useState } from "react";
import Request from "./Main/Request";
import Post from "./Main/Post";
import Listing from "./Main/Listing";

const Main = ({ islisting, listing, isactive, request, ispost, post }) => {
  return (
    <div className="">
      <div className="flex gap-6 mb-6 border-b text-gray-500 border-gray-200">
        <button
          onClick={request}
          className={`font-semibold pb-2 cursor-pointer ${
            isactive ? "text-[#ED8F03] border-b-2 border-b-[#ED8F03]" : ""
          }`}
        >
          Requests
        </button>
        <button
          onClick={listing}
          className={`font-semibold pb-2 cursor-pointer ${
            islisting ? "text-[#ED8F03] border-b-2 border-b-[#ED8F03]" : ""
          }`}
        >
          Listings
        </button>
        <button
          onClick={post}
          className={`font-semibold pb-2 cursor-pointer ${
            ispost ? "text-[#ED8F03] border-b-2 border-b-[#ED8F03]" : ""
          }`}
        >
          All Posts
        </button>
      </div>
      <div className="lg:space-y-8 max-lg:flex items-center max-sm:flex-wrap gap-5">
        {isactive &&
          Array(2)
            .fill(null)
            .map((_, index) => <Request key={index} />)}
      </div>
      {ispost && <Post />}
      <div className="flex max-md:flex-col gap-2 w-full">
        {islisting &&
          Array(2)
            .fill(null)
            .map((_, index) => <Listing key={index} />)}
      </div>
    </div>
  );
};

export default Main;
