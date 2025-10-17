"use client";
import Image from "next/image";
import React from "react";
import { formatDistanceToNowStrict } from "date-fns";
const services = ["2 floors", "Community pool", "Solarium", "Terrace", "Sunny"];
const things = [
  { labels: "4 bed", icon: "/icons/Opportunities/bed.svg" },
  { labels: "3 bath", icon: "/icons/Opportunities/bath.svg" },
  { labels: "128m²", icon: "/icons/Opportunities/square.svg" },
];

const OpportunitiesCard = ({ opportunities }) => {
  const activeToggles = Object.keys(opportunities.toggles || {}).filter(
    (key) => opportunities.toggles[key] === true
  );

  const timeAgo = formatDistanceToNowStrict(new Date(opportunities.createdAt), {
    addSuffix: true, // adds "ago"
  });
  return (
    <div className=" bg-white text-gray-800 rounded-lg shadow-md p-4 pt-8 w-full relative">
      <div className="flex flex-col gap-4 w-full ">
        <div className="bg-[#15171C] absolute -top-3 -left-2 text-white text-sm px-5 py-2 rounded-[6px]">
          {opportunities?.need} NEED
        </div>
        {/* Services */}
       {opportunities.method === "ADVANCED" && 
       <>
               <div className="flex flex-wrap gap-1 max-sm:text-xs">
          {activeToggles.map((service, idx) => (
            <div
              key={idx}
              className="bg-white text-xs font-light px-2 py-1 rounded-md shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Title + Price */}
        <div className="flex items-center justify-between font-medium text-sm sm:text-base">
          <p className="capitalize">{opportunities?.propertyType}</p>
          <p>${opportunities?.price || "500.000"}</p>
        </div>

        {/* Info Icons (bed, bath, area) */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <div className="flex items-center gap-2 pr-4 border-r border-gray-300 last:border-r-0 last:pr-0">
            <Image
              src="/icons/Opportunities/bed.svg"
              alt="Bed-icon"
              width={16}
              height={16}
              className=" object-contain"
            />
            <span>{opportunities.bedrooms} Bed</span>
          </div>

          <div className="flex items-center gap-2 pr-4 border-r border-gray-300 last:border-r-0 last:pr-0">
            <Image
              src="/icons/Opportunities/bath.svg"
              alt="bath-icon"
              width={16}
              height={16}
              className=" object-contain"
            />
            <span>{opportunities.bathrooms} Bath</span>
          </div>
          {opportunities?.size && (
            <div className="flex items-center gap-2 pr-4 border-r border-gray-300 last:border-r-0 last:pr-0">
              <Image
                src="/icons/Opportunities/square.svg"
                alt="size-icon"
                width={16}
                height={16}
                className=" object-contain"
              />
              <span>{opportunities.size} Bath</span>
            </div>
          )}
        </div>
        {opportunities.location && (
          <div className="flex gap-2 items-center sm:text-sm text-xs">
            <Image
              src="/icons/Opportunities/location.svg"
              alt="locationimage"
              width={16}
              height={16}
            />
            <p>{opportunities.location}</p>
          </div>
        )}
       </>
       }
       {opportunities.method === "SIMPLE" &&
       <p>
        {opportunities.description}
       </p>
       }

        {/* Agent Info + Icons */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Agent Block */}
          <div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden relative">
  <Image
    src={opportunities?.user?.profilePicUrl}
    alt="agent"
    fill
    className="object-cover"
  />
</div>
            <div className="text-sm">
              <p className="font-semibold">
                {opportunities?.user?.firstName}
                {opportunities?.user?.lastName}
              </p>
              <p className="text-gray-500">{timeAgo}</p>
            </div>
          </div>

          {/* Icons Block */}
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/Opportunities/msg.svg"
              alt="message"
              height={24}
              width={24}
              className=" object-contain cursor-pointer"
            />
            <Image
              src="/icons/Opportunities/favourite.svg"
              alt="archive"
              width={24}
              height={24}
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
