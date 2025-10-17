"use client";
import Image from "next/image";
import React from "react";

const ProfileVisitors = () => {
  return (
    <div className=" flex justify-center sm:-mt-8 mt-3">
      <div className="w-full max-w-3xl ">
        <div className="flex justify-between items-center mb-4 gap-5">
          <div className="text-xl font-semibold text-gray-800">
            Recent profile visitors
            <p className="text-sm text-gray-500 font-light">
              See who has viewed your profile recently
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
            Save
          </button>
        </div>

        {/* Profile Visitors */}
        <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            PROFILE VISITORS
          </h2>

          {/* Visitor List */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between py-3 border-b border-[#E4E4E4] last:border-none"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/Setting/man.png"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className=" rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 max-sm:text-sm">
                    John Smith
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    ABC Corporation
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="sm:text-sm font-medium text-xs">07/22/2025</p>
                <p className="sm:text-xs text-gray-400 text-[11px]">12:30 AM</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visitors Analytics */}
        <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">
            VISITORS ANALYTICS
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Insights about your profile visitors
          </p>

          {/* Analytics Cards */}
          <div className="grid sm:grid-cols-3 gap-5 grid-cols-2">
            <div className="border border-[#E4E4E4] rounded-lg flex flex-col items-center justify-center p-3 py-4">
              <p className="text-lg font-semibold text-blue-600">52</p>
              <p className="text-xs text-gray-500">Total views</p>
            </div>
            <div className="border border-[#E4E4E4] rounded-lg flex flex-col items-center justify-center p-3 py-4">
              <p className="text-lg font-semibold text-green-600">52</p>
              <p className="text-xs text-gray-500">Unique visitors</p>
            </div>
            <div className="border border-[#E4E4E4] rounded-lg flex flex-col items-center justify-center p-3 py-4">
              <p className="text-lg font-semibold text-purple-600">52</p>
              <p className="text-xs text-gray-500">Profile conversion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVisitors;
