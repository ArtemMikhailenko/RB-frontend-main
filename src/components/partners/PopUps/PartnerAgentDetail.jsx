import Image from "next/image";
import React from "react";

const PartnerAgentDetail = ({ user }) => {
  if (!user) return null;

  // Example mapping for icons you might receive from backend or static
  const icons = [
    { src: "/icons/Partners/popups/message.svg", alt: "msg" },
    { src: "/icons/Partners/popups/bluewhatsapp.svg", alt: "bluewhatsapp" },
    { src: "/icons/Partners/popups/whatsapp.svg", alt: "whatsapp" },
    { src: "/icons/Partners/popups/telegram.svg", alt: "telegram" },
    { src: "/icons/Partners/popups/email.svg", alt: "email" },
    { src: "/icons/Partners/popups/call.svg", alt: "call" },
  ];

  function getExperience(createdAt) {
    const createdDate = new Date(createdAt);
    const now = new Date();

    const diffYears = now.getFullYear() - createdDate.getFullYear();
    const diffMonths = now.getMonth() - createdDate.getMonth();

    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? "s" : ""}`;
    } else if (diffMonths > 0) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
    } else {
      return "Less than a month";
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md overflow-hidden md:mt-7 max-md:rounded border-l border-[#acacac]">
      {/* Profile Header */}
      <div className="p-4 flex flex-col text-center">
        <div className="flex space-x-4 bg-white max-w-full">
          <div className="sm:w-25 sm:h-25 w-20 h-20 relative">
            <Image
              src={
                user.profileImage || "/images/Partners/peoplecard/Ellipse 2.png"
              }
              alt={user.name || "Profile"}
              fill
              className="rounded-full"
            />
          </div>

          <div>
            <h2 className="text-[16px] mb-1 font-semibold text-[#343434] flex flex-start">
              {user.name}
            </h2>
            <p className="text-sm font-light text-[#5C5C5C] flex flex-start">
              {user.country || "Unknown location"}
            </p>
            <p className="text-sm font-light text-[#5C5C5C] ">
              {user.localTime || "Unknown time"} local time
            </p>
            <p className="text-[12px] text-[#343434] font-medium mt-2 flex flex-start">
              {user.onlineStatus ? "Online now" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <a href="#" className="mt-3 text-[#343434] font-semibold text-[16px]">
            View profile
          </a>
          <p className="mt-2 text-gray-700 text-sm">
            {getExperience(user.createdAt)} of experience
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            {user.designation || "Role"} <br /> at{" "}
            <span className="font-medium text-[#343434] underline">
              {user.company || "Company"}
            </span>
          </p>
          {user.forSaleCount !== undefined &&
            user.soldCount !== undefined &&
            user.recommendationCount !== undefined && (
              <p className="text-[#5C5C5C] text-[14px] mt-1 ">All Listings</p>
            )}
        </div>
        {user.forSaleCount !== undefined &&
          user.soldCount !== undefined &&
          user.recommendationCount !== undefined && (
            <div className="flex justify-between text-left w-full mt-3 text-sm text-[#222222]">
              <div className="flex flex-col-reverse ">
                <span className="font-[400] text-[20px]  ">
                  {user.forSaleCount}
                </span>
                <span className="text-[13px] font-bold">For sale</span>
              </div>
              <div className="flex flex-col-reverse ">
                <span className="font-[400] text-[20px]  ">
                  {user.soldCount}
                </span>
                <span className="text-[13px] font-bold">Sold</span>
              </div>
              <div className="flex flex-col-reverse ">
                <span className="font-[400] text-[20px] ">
                  {user.recommendationCount}
                </span>
                <span className="text-[13px] font-bold">Recommendation</span>
              </div>
            </div>
          )}
      </div>

      {/* Meet Section */}
      <div className="p-4">
        <h3 className="text-[#343434] font-medium mb-1.5">Meet {user.name}</h3>
        <div className="w-full relative h-80 overflow-hidden">
          <Image
            src={user.profileImage || "/images/Partners/peoplecard/john.png"}
            alt={`Meet ${user.name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Certifications */}
      {user.certifications && user.certifications.length > 0 && (
        <div className="p-4">
          <h3 className="text-[#343434] text-[16px] font-medium mb-2">
            Certifications and license
          </h3>

          <ul className="text-[13px] text-[#5C5C5C]">
            {user.certifications?.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Details */}
      <div className="mb-4 p-4">
        <h3 className="text-[#343434] text-[15px] font-semibold mb-2">
          Contact details
        </h3>
        <div className="flex space-x-2 text-gray-600 text-xl">
          {icons.map((icon, i) => (
            <div
              className="cursor-pointer px-3 py-2 bg-[#F0F0F0] rounded-md"
              key={i}
            >
              <Image src={icon.src} alt={icon.alt} width={20} height={20} />
            </div>
          ))}
        </div>

        {user.languages && user.languages.length > 0 && (
          <div className="mt-4">
            <h3 className="text-[#343434] text-[13px] font-semibold mb-1">
              Speak
            </h3>
            <p className="text-gray-700 text-sm">
              {user.languages?.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerAgentDetail;
