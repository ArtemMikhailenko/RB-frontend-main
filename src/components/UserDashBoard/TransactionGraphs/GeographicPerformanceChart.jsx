"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  listings: "#F39C12", // Orange
  inquiries: "#1E90FF", // Blue
};

const GeographicPerformanceChart = ({
  title = "Geographic performance",
  subtitle = "Performance by city",
  data = [],
  chartHeight = 300,
}) => {
  const totalListings = data.reduce((sum, d) => sum + (d.Listings || 0), 0);
  const totalInquiries = data.reduce((sum, d) => sum + (d.Inquiries || 0), 0);

  return (
    <div className="bg-white rounded-xl p-4 shadow text-[#1A1A3D] relative">
      <div className="flex justify-between">
        <div>
          <h2 className="text-base font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 ">
            <span className="w-3 h-3 rounded-full bg-[#F39C12]"></span>
            <span className="font-medium text-[#1A1A3D]">Listings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1E90FF]"></span>
            <span className="font-medium text-[#1A1A3D]">Inquiries</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart
          data={data}
          barSize={30}
          margin={{ top: 40, right: 30, bottom: 20, left: 0 }} // increase top margin for space
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          {/* <Legend
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-[#1A1A3D]">{value}</span>
            )}
          /> */}
          <Bar
            dataKey="Listings"
            fill={COLORS.listings}
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="Inquiries"
            fill={COLORS.inquiries}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeographicPerformanceChart;
