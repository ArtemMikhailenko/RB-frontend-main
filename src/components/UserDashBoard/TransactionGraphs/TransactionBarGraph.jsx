import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import React from "react";

const TransactionBarGraph = ({
  title = "Listings",
  data = [],
  dataKey = "units",
  subtitle,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow text-[#1A1A3D]">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold ">{title}</h2>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>Units sold
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#F39C12" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionBarGraph;
