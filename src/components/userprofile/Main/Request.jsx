"use client";
import Image from "next/image";
import React from "react";
const services = ["2 floors", "Community pool", "Solarium", "Terrace", "Sunny"];
const things = [
  { labels: "4 bed", icon: "/icons/NewProfile/bed.svg" },
  { labels: "3 bath", icon: "/icons/NewProfile/bath.svg" },
  { labels: "128m²", icon: "/icons/NewProfile/square.svg" },
];

const Request = () => {
  return (
    <div className=" bg-white text-gray-800 rounded-lg shadow-md ml-2 p-4 pt-8 max-w-md relative">
      <div className="flex flex-col gap-4 w-full ">
        <div className="bg-[#15171C] absolute -top-3 -left-2 text-white text-sm px-5 py-2 rounded-[6px]">
          Rental needs
        </div>
        {/* Services */}
        <div className="flex flex-wrap gap-1 max-sm:text-xs">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-200 text-gray-900 text-xs font-medium px-2 py-1 rounded-md"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Title + Price */}
        <div className="flex items-center justify-between font-medium text-sm sm:text-base">
          <p>Townhouse</p>
        </div>

        {/* Info Icons (bed, bath, area) */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          {things.map((thing, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 pr-4 border-r border-gray-300 last:border-r-0 last:pr-0"
            >
              <Image
                width={16}
                height={16}
                src={thing.icon}
                alt={thing.labels}
                className="object-contain"
              />
              <span>{thing.labels}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center sm:text-sm text-xs">
          <Image
            src="/icons/NewProfile/location.svg"
            alt="locationimage"
            width={16}
            height={16}
          />
          <p>Torrevieja, Spain</p>
        </div>

        {/* Agent Info + Icons */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Agent Block */}
          <div className="flex items-center gap-3">
            <Image
              src="/icons/NewProfile/profile.png"
              alt="agent"
              width={40}
              height={40}
              className=" object-cover rounded-full"
            />
            <div className="text-sm">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-500">1 Year</p>
            </div>
          </div>

          {/* Icons Block */}
          <div className="flex gap-3 items-center">
            <p className="text-lg text-gray-800 font-bold">$500.000</p>
            <Image
              src="/icons/NewProfile/msg.svg"
              alt="message"
              width={26}
              height={26}
              className=" object-contain cursor-pointer"
            />
            <Image
              src="/icons/NewProfile/archive.svg"
              alt="archive"
              width={26}
              height={26}
              className=" object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
