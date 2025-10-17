"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#F39C12", "#1A81E5", "#9291A5", "#4BC124", "#2ECC71"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const labelRadius = outerRadius + 30;
  const startX = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const startY = cy + outerRadius * Math.sin(-midAngle * RADIAN);
  const endX = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const endY = cy + labelRadius * Math.sin(-midAngle * RADIAN);

  const lineColor = COLORS[index % COLORS.length]; // use index to pick color

  return (
    <g>
      {/* Colored line for each segment */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={lineColor}
        strokeWidth={1}
      />

      {/* Styled label */}
      <foreignObject x={endX - 25} y={endY - 15} width={60} height={30}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background: "#1A1A3D",
            borderRadius: "10px",
            color: "white",
            padding: "5px 8px",
            fontSize: "12px",
            textAlign: "center",
            lineHeight: "1",
            width: "fit-content",
            maxWidth: "100%",
          }}
        >
          <strong>{`${(percent * 100).toFixed(0)}%`}</strong>
        </div>
      </foreignObject>
    </g>
  );
};

const MarketDonutChart = ({ data = [] }) => {
  const total = data.reduce((sum, d) => sum + d.percentage, 0);

  return (
    <div className="w-[300px] h-[300px] text-[#1A1A3D] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="percentage"
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketDonutChart;
