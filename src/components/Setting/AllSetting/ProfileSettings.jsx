"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileSettings = ({ profile }) => {
  const fullName = profile
    ? `${profile?.firstName || ""} ${profile?.lastName || ""}`.trim()
    : null;
  const profilePic = profile?.profilePicUrl || "/images/Setting/profile.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] mx-4 pt-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src={profilePic}
          alt="Profile"
          width={80}
          height={80}
          className=" rounded-full shadow-lg"
        />
        <h1 className="mt-4 text-[18px] font-semibold text-gray-800">
          {fullName || "Loading..."}
        </h1>
        <p className="text-[#636363] text-[14px]">Real estate agent</p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Card Items */}
        <Link href="/setting/account">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
            <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
              <Image
                src="/icons/Setting/user.svg"
                width={20}
                alt="user"
                height={20}
                className=" text-gray-600 mr-3"
              />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-[#15171C]">ACCOUNT</h2>
              <p className="text-xs text-gray-500">
                Profile, info, name & language
              </p>
            </div>
          </div>
        </Link>
        <Link href="/setting/company">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
            <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
              <Image
                width={20}
                height={20}
                alt="building"
                src="/icons/Setting/building.svg"
                className=" text-gray-600 mr-3"
              />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-[#15171C]">COMPANY</h2>
              <p className="text-xs text-gray-500">
                Information about your company
              </p>
            </div>
          </div>
        </Link>

        <Link href="/setting/paymentmethod">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
            <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
              <Image
                width={20}
                height={20}
                alt="card"
                src="/icons/Setting/card.svg"
                className=" text-gray-600 mr-3"
              />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-[#15171C]">
                BILLING METHODS
              </h2>
              <p className="text-xs text-gray-500">Your invoice preferences</p>
            </div>
          </div>
        </Link>

        <Link href="/setting/taxinformation">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
            <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
              <Image
                width={20}
                height={20}
                alt="tax"
                src="/icons/Setting/tax.svg"
                className=" text-gray-600 mr-3"
              />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-[#15171C]">
                TAX INFORMATION
              </h2>
              <p className="text-xs text-gray-500">Tax address information</p>
            </div>
          </div>
        </Link>

        <Link href="/setting/recentvisitors">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer">
            <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
              <Image
                width={20}
                height={20}
                alt="eye"
                src="/icons/Setting/eye.svg"
                className=" text-gray-600 mr-3"
              />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-[#15171C]">VISITORS</h2>
              <p className="text-xs text-gray-500">
                Check who has visited your site
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/setting/notification"
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer"
        >
          <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
            <Image
              width={20}
              height={20}
              alt="notification"
              src="/icons/Setting/notification.svg"
              className=" text-gray-600 mr-3"
            />
          </div>
          <div>
            <h2 className="text-[13px] font-bold text-[#15171C]">
              NOTIFICATION
            </h2>
            <p className="text-xs text-gray-500">
              Configure your notifications
            </p>
          </div>
        </Link>

        <Link
          href="/setting/teams"
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer"
        >
          <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
            <Image
              width={20}
              height={20}
              alt="people"
              src="/icons/Setting/people.svg"
              className=" text-gray-600 mr-3"
            />
          </div>
          <div>
            <h2 className="text-[13px] font-bold text-[#15171C]">TEAMS</h2>
            <p className="text-xs text-gray-500">Workspace for cooperation</p>
          </div>
        </Link>

        <Link
          href="/setting/manageintegration"
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer"
        >
          <div className="p-[15px_4px_15px_15px] bg-[#F1F1F7] rounded-sm">
            <Image
              width={20}
              height={20}
              alt="integration"
              src="/icons/Setting/integration.svg"
              className=" text-gray-600 mr-3"
            />
          </div>
          <div>
            <h2 className="text-[13px] font-bold text-[#15171C]">
              INTEGRATIONS
            </h2>
            <p className="text-xs text-gray-500">Add additional services</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSettings;
