import Image from "next/image";
import React from "react";
const Teams = () => {
  return (
    <div className="flex justify-center md:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4 gap-5">
          <div className="text-xl font-semibold text-gray-800">
            Recent profile visitors
            <p className="text-sm text-gray-500 font-light">
              See who has viewed your profile recently
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
            Invite member
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            TEAM MEMBER
          </h2>

          {/* Visitor List */}
          {[1, 2, 3, 4].map((item) => (
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

              <div className="flex gap-4 items-center">
                <button className="text-sm py-2 px-2 bg-[#F3F4F6] rounded-md">
                  Admin
                </button>
                <Image
                  src="/icons/Setting/Payment/share.svg"
                  width={16}
                  height={16}
                  alt="share"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
