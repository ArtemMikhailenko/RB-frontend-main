"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Label function – only for orange slice (index 0)
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, percent, index } = props;
  if (index !== 0) return null;

  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <circle
        cx={cx + 10 * Math.cos(-midAngle * RADIAN)}
        cy={cy + 10 * Math.sin(-midAngle * RADIAN)}
        r={5}
        fill="#1A1A3D"
      />
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
          <strong>{`${(percent * 100).toFixed(0)}%`}</strong>
        </div>
      </foreignObject>
    </g>
  );
};

const ListingFlowDonutChart = () => {
  const value = 7; // ✅ Just one value for the chart
  const safeValue = Math.min(100, Math.max(0, value));
  const data = [
    { name: "Given", value: safeValue },
    { name: "Remaining", value: 100 - safeValue },
  ];

  const COLORS = ["#F39C12", "#E0E0E0"];

  return (
    <div className="text-[#1A1A3D] w-[300px]">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={60}
            dataKey="value"
            labelLine={true}
            label={renderCustomizedLabel}
            isAnimationActive={false}
          >
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ListingFlowDonutChart;
