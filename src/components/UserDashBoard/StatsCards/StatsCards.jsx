// components/StatsCards.jsx
import React from "react";
import { Users } from "lucide-react";

// DonutChart Component
const DonutChart = ({ percentage = 60, size = 24, strokeWidth = 4 }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const filled = (circumference * percentage) / 100;
  const remaining = circumference - filled;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className="rotate-[-90deg]"
    >
      {/* Background (purple) */}
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="#6366F1"
        strokeWidth={strokeWidth}
      />
      {/* Foreground (orange) */}
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="#F97316"
        strokeWidth={strokeWidth}
        strokeDasharray={`${filled} ${remaining}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

// Stats Card Component
const StatsCards = () => {
  const realEstatePercentage = 60;

  return (
    <div className="flex flex-col max-w-md gap-4">
      {/* Real Estate Card */}
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <DonutChart percentage={realEstatePercentage} />
            </div>
            <span className="text-[17px] font-semibold text-[#1A1A1A]">
              Real estate
            </span>
          </div>
          <span className="text-[20px] font-bold text-[#1A1A1A]">
            {realEstatePercentage}%
          </span>
        </div>
        <p className="text-[14px] text-[#1A1A1A] leading-relaxed">
          The focus of <span className="font-medium">bussiness</span> are{" "}
          <span className="font-bold">
            residencial market of new buildings, based on luxury proposals
          </span>
        </p>
      </div>

      {/* Customer Card */}
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-[17px] font-semibold text-[#1A1A1A]">
              Customer
            </span>
          </div>
          <span className="text-[20px] font-bold text-[#1A1A1A]">357</span>
        </div>
        <p className="text-[14px] text-[#1A1A1A] leading-relaxed">
          Most customers are Spanish, seeking 2–3 bedroom residential properties
          averaging 82 m² as their primary residence.
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
