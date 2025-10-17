"use client";
import React from "react";
import StackDonutCharts from "@/components/UserDashBoard/Listing Stat/StackDonutCharts";
import Image from "next/image";

const DashboardListing = ({ listingStats = [], heading }) => {
  const [showcard, setShowcard] = React.useState(false);
  const [showstats, setShowstats] = React.useState(true);
  const [showchart, setShowchart] = React.useState(false);
  const card = () => {
    setShowcard((prev) => !prev);
  };
  const stats = () => {
    setShowstats(true);
    setShowchart(false);
    setShowcard(false);
  };
  const chart = () => {
    setShowstats(false);
    setShowchart(true);
    setShowcard(false);
  };
  return (
    <div className="text-[#343434] w-full">
      <div className="relative flex justify-between items-center">
        <p className="font-bold">{heading}</p>
        <Image
          onClick={card}
          src="/icons/DashBoard/threedot.svg"
          alt="threedot"
          width={28}
          height={28}
          className="cursor-pointer"
        />
        {showcard && (
          <div className="absolute top-7 z-10 right-4 shadow-md flex flex-col p-4 gap-2 bg-white rounded-lg">
            <p className="cursor-pointer" onClick={chart}>
              Donut Chart
            </p>
            <p className="cursor-pointer" onClick={stats}>
              Stat Card
            </p>
          </div>
        )}
      </div>
      <div className="mt-3 flex gap-2">
        {listingStats.map((data, index) => (
          <div
            key={index}
            className="py-3 pl-3 flex flex-col gap-1 border w-full border-gray-100  bg-[#FFFFFF] rounded-lg"
          >
            <p className="text-sm">{data.heading}</p>
            {showstats && <p className="font-bold ">{data.point}</p>}
            {showchart && <StackDonutCharts value={data.point} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardListing;
