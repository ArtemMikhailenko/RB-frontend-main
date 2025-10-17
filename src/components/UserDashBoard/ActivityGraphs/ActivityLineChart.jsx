"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ActivityLineChart = ({ data, title }) => {
  return (
    <div className="my-3">
      <div className="flex justify-between items-center ">
        <p className="font-bold">{title}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className=" text-sm font-semibold">New Customers</p>
          <div className="relative">
            <select className="block w-full px-3 pr-10 py-1 text-sm text-[#636363] rounded-md focus:outline-none  appearance-none bg-[#F0F0F0]">
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
        </div>
        <hr className="border-gray-200 mt-2 mb-6" />

        {/* Chart */}
        <div className="w-full h-[330px] ">
          <div className="w-full h-full outline-none focus:outline-none">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 8, right: 10, left: -20 }}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#6B7280", fontSize: 10 }}
                  axisLine={false}
                  padding={{ left: 20, right: 0 }}
                  tickLine={false}
                  tickMargin={10} //
                />
                <YAxis
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={8}
                  // ✅ Adds spacing between numbers and chart
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
                  dataKey="new"
                  stroke="#F97316"
                  strokeWidth={1}
                  dot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLineChart;
