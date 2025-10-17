import React from "react";
import MarketDonutChart from "./MarketDonutChart";
import Image from "next/image";

const MarketCard = () => {
  // Simulated backend data
  const marketData = [
    { label: "New Building", percentage: 70 },
    { label: "Rent", percentage: 20 },
    { label: "Rent", percentage: 10 },
  ];
  const [market, setMarket] = React.useState("bars");
  const [showcard, setShowcard] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full ">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-base font-semibold text-gray-900">Market</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 relative">
            <Image
              onClick={() => setShowcard(!showcard)}
              src="/icons/DashBoard/threedot.svg"
              alt="threedot"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            {showcard && (
              <div className="absolute top-9 right-0 z-10 shadow-md flex flex-col p-4 gap-2 bg-white rounded-lg w-34">
                <p
                  className="cursor-pointer"
                  onClick={() => setMarket("Donent Chart")}
                >
                  Donut Chart
                </p>
                <p className="cursor-pointer" onClick={() => setMarket("bars")}>
                  Stat Card
                </p>
              </div>
            )}
          </div>
        </button>
      </div>

      {market === "bars" && (
        <>
          {marketData.map((item, index) => (
            <div
              key={index}
              className={index !== marketData.length - 1 ? "mb-6" : ""}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-[#6C47FF]">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-[#f6f6fd] rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    index === 0
                      ? "bg-gradient-to-r from-[#6C47FF] to-[#825CFF]"
                      : "bg-[#8F8F9F]"
                  }`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </>
      )}
      {market === "Donent Chart" && <MarketDonutChart data={marketData} />}
    </div>
  );
};

export default MarketCard;
