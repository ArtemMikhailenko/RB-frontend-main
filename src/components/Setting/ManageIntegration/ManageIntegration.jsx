import Image from "next/image";
import React from "react";

const ManageIntegration = () => {
  return (
    <div className="flex justify-center md:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-4 gap-5">
          <div className="text-xl font-semibold text-gray-800">
            Recent profile visitors
            <p className="text-sm text-gray-500 font-light">
              See who has viewed your profile recently
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Connected integrations
          </h2>
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between border-b pb-3 border-b-gray-200 items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/Setting/Integration/calender.svg"
                  alt="calender"
                  width={48}
                  height={48}
                  className=""
                />
                <div>
                  <p className="font-semibold text-gray-900 max-sm:text-sm">
                    Google Calendar
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Sync events and appointments
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Connected since Apr 15, 2023
                  </p>
                </div>
              </div>
              <div>
                <button className="py-2 px-3 text-sm bg-[#F0F0F0] rounded-md">Configure</button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
                <p className="text-[#343434] text-sm">View Permissions</p>
                <p className="text-[#FF0000] text-sm">Disconnect</p>
            </div>
          </div>
          <div className="border border-gray-200 mt-4 rounded-md p-3">
            <div className="flex justify-between border-b pb-3 border-b-gray-200 items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/Setting/Integration/slack.svg"
                  alt="slack"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-gray-900 max-sm:text-sm">
                    Slack
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Team messaging and notifications
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Connected since Apr 15, 2023
                  </p>
                </div>
              </div>
              <div>
                <button className="py-2 px-3 text-sm bg-[#F0F0F0] rounded-md">Configure</button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
                <p className="text-[#343434] text-sm">View Permissions</p>
                <p className="text-[#FF0000] text-sm">Disconnect</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Available integrations
          </h2>
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between border-b pb-3 border-b-gray-200 items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/Setting/Integration/zapier.svg"
                  alt="zapier"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-gray-900 max-sm:text-sm">
                    Zapier 
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Connect with 3000+ people
                  </p>
                </div>
              </div>
              <div>
                <button className="py-2 px-3 text-sm bg-[#F0F0F0] rounded-md">Configure</button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
                <p className="text-[#343434] text-sm">View Permissions</p>
                <p className="text-[#FF0000] text-sm">Disconnect</p>
            </div>
          </div>
          <div className="border border-gray-200 mt-4 rounded-md p-3">
            <div className="flex justify-between border-b pb-3 border-b-gray-200 items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/Setting/Integration/slack.svg"
                  width={48}
                  height={48}
                  alt="slack"
                />
                <div>
                  <p className="font-semibold text-gray-900 max-sm:text-sm">
                    Slack
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Team messaging and notifications
                  </p>
                  <p className="sm:text-sm text-gray-500 text-xs">
                    Connected since Apr 15, 2023
                  </p>
                </div>
              </div>
              <div>
                <button className="py-2 px-3 text-sm bg-[#F0F0F0] rounded-md">Configure</button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
                <p className="text-[#343434] text-sm">View Permissions</p>
                <p className="text-[#FF0000] text-sm">Disconnect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageIntegration;
