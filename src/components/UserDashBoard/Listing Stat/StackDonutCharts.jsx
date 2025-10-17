"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Label function – only for orange slice (index 0)
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, percent, index } = props;
  if (index !== 0) return null; // 🔥 Only show label for first (orange) slice

  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <circle
        cx={cx + 1 * Math.cos(-midAngle * RADIAN)}
        cy={cy + 1 * Math.sin(-midAngle * RADIAN)}
        r={2}
        fill="#1A1A3D"
      />
      <foreignObject x={x - 10} y={y - 20} width={50} height={40}>
        <div
          style={{
            background: "#1A1A3D",
            borderRadius: "10px",
            color: "white",
            padding: "5px 8px",
            fontSize: "12px",
            lineHeight: "1.2",
            zIndex: "10",
          }}
        >
          <strong>{`${(percent * 100).toFixed(0)}%`}</strong>
        </div>
      </foreignObject>
    </g>
  );
};

const StackDonutCharts = ({ value }) => {
  const safeValue = Math.min(100, Math.max(0, value));
  const data = [
    { name: "Given", value: safeValue },
    { name: "Remaining", value: 100 - safeValue },
  ];

  const COLORS = ["#F39C12", "#9291A5"];
  return (
    <div className="text-[#1A1A3D]">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="48%"
            cy="50%"
            outerRadius={60}
            dataKey="value"
            labelLine={(props) => {
              if (props.index !== 0) return null;

              const { cx, cy, outerRadius, midAngle } = props;
              const RADIAN = Math.PI / 180;
              const radius = outerRadius + 20; // Same as in label
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <line
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="#F39C12"
                  strokeWidth={1}
                />
              );
            }}
            label={renderCustomizedLabel}
            isAnimationActive={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackDonutCharts;
