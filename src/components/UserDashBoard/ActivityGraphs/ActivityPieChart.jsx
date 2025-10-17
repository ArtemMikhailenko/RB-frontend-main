"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
  Sector,
} from "recharts";

// Custom label component
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <circle cx={cx + 10 * Math.cos(-midAngle * RADIAN)} cy={cy + 10 * Math.sin(-midAngle * RADIAN)} r={5} fill="#1A1A3D" />
      <foreignObject x={x - 40} y={y - 20} width={100} height={40}>
        <div
          style={{
            background: "#1A1A3D",
            borderRadius: "10px",
            color: "white",
            padding: "5px 8px",
            fontSize: "12px",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          {payload.name}<br />
          <strong>{`${(percent * 100).toFixed(0)}%`}</strong>
        </div>
      </foreignObject>
    </g>
  );
};

const COLORS = ["#1E90FF", "#F39C12"]; // Blue, Orange (order matches your image)

const ActivityPieChart = ({ title = "Clasification", data = [] }) => {
  return (
    <div className="text-[#1A1A3D] bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-base mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            labelLine={true}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityPieChart;
