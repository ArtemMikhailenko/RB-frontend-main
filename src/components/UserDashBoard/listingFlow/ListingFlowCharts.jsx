"use client";
import React from "react";
import Image from "next/image";
import ListingFlowDonutChart from "@/components/UserDashBoard/listingFlow/ListingFlowDonutChart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "JAN", rent: 20, new: 45, total: 100 },
  { month: "FEB", rent: 35, new: 60, total: 130 },
  { month: "MAR", rent: 50, new: 70, total: 150 },
  { month: "APR", rent: 10, new: 53, total: 154 },
  { month: "MAY", rent: 45, new: 85, total: 160 },
  { month: "JUN", rent: 60, new: 30, total: 180 },
  { month: "JUL", rent: 80, new: 100, total: 210 },
  { month: "AUG", rent: 70, new: 95, total: 190 },
  { month: "SEP", rent: 40, new: 70, total: 140 },
  { month: "OCT", rent: 20, new: 60, total: 110 },
  { month: "NOV", rent: 30, new: 85, total: 135 },
  { month: "DEC" },
];

const listing = ["Rent listings", "New listings", "Total listings"];

const ListingFlowCharts = () => {
  const [showcard, setShowcard] = React.useState(false);
  const [showstats, setShowstats] = React.useState(false);
  const [showchart, setShowchart] = React.useState(true);

  const card = () => {
    setShowcard((prev) => !prev);
  };

  const graph = () => {
    setShowstats(true);
    setShowchart(false);
    setShowcard(false); // Optional: close dropdown
  };

  const line = () => {
    setShowchart(true);
    setShowstats(false);
    setShowcard(false); // Optional: close dropdown
  };

  return (
    <div className="mt-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="font-bold">Listing Flow</p>
        <div className="flex gap-2">
          {/* Month dropdown */}
          <div className="relative">
            <select className="block w-full px-3 pr-10 py-1 text-sm text-[#636363] rounded-md focus:outline-none appearance-none bg-[#F0F0F0]">
              <option>Month</option>
              <option>Jan</option>
              <option>Feb</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Three-dot menu */}
          <div className="relative">
            <Image
              onClick={card}
              src="/icons/DashBoard/threedot.svg"
              alt="threedot"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            {showcard && (
              <div className="absolute top-7 z-10 right-4 w-[130px] shadow-md flex flex-col p-4 gap-2 bg-white rounded-lg">
                <p className="cursor-pointer" onClick={graph}>
                  Donut Chart
                </p>
                <p className="cursor-pointer" onClick={line}>
                  Line Chart
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-xl mt-3 shadow-md p-6 w-full">
        <p className="text-sm font-semibold">Listings</p>
        <hr className="border-gray-200 mt-2 mb-2" />

        <div className="w-full h-[250px] mt-5">
          {/* Donut Charts */}
          {showstats && (
            <div className="flex">
              {listing.map((label, index) => (
                <div
                  key={index}
                  className="p-3 flex flex-col items-center gap-1 border-r w-full border-r-gray-100 bg-[#FFFFFF] rounded-lg"
                >
                  <p className="text-sm">{label}</p>
                  <ListingFlowDonutChart />
                </div>
              ))}
            </div>
          )}

          {/* Line Chart */}
          {showchart && (
            <div className="w-full h-full outline-none focus:outline-none">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 8, right: 10, left: -20 }}
                >
                  <CartesianGrid stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#6B7280", fontSize: 10 }}
                    axisLine={false}
                    padding={{ left: 20, right: 0 }}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={8}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E1B4B",
                      borderRadius: "8px",
                      fontSize: "10px",
                      color: "#FFFFFF",
                      padding: "8px",
                      border: "none",
                    }}
                    labelStyle={{ display: "none" }}
                    itemStyle={{ color: "#FFFFFF" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rent"
                    stroke="#F97316"
                    strokeWidth={1}
                    dot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="new"
                    stroke="#F97316"
                    strokeWidth={1}
                    dot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#000000"
                    strokeWidth={1}
                    dot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingFlowCharts;
