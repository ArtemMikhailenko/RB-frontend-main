import React from "react";
import ByPropertyTypeCard from "./ByPriceRangeCard";
import ByPriceRangeCard from "./ByPriceRangeCard";
import MarketDonutChart from "../MarketContainer/MarketDonutChart";
import Image from "next/image";

const marketData = [
  { label: "Single/Family", percentage: 40 },
  { label: "Condo/Townhouse", percentage: 30 },
  { label: "Multi Family", percentage: 25 },
  { label: "Commercial", percentage: 10 },
];
const PriceData = [
  { label: "Under $300K", percentage: 34 },
  { label: "$300K - $500K", percentage: 24 },
  { label: "$500K - $750K", percentage: 15 },
  { label: "Over $1M", percentage: 5 },
];

const TransactionBreakdown = () => {
  const [market, setMarket] = React.useState("bars");
  const [Tshowcard, setTShowcard] = React.useState(false);
  return (
    <section className="rounded-2xl flex-1  p-6 py-4 bg-white shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">Transaction Breakdown</h2>
          <p className="text-sm mb-2 text-[#9291A5]">
            Distribution by property type and price range
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 relative">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100">
            <Image
              onClick={() => setTShowcard(!Tshowcard)}
              src="/icons/DashBoard/threedot.svg"
              width={28}
              height={28}
              alt="threedot"
              className="cursor-pointer"
            />
            {Tshowcard && (
              <div className="absolute top-11 z-10 right-0 shadow-md flex flex-col p-4 gap-2 bg-white rounded-lg w-34">
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
        <div className="flex  flex-1 gap-10">
          <ByPropertyTypeCard marketData={marketData} />
          <ByPriceRangeCard marketData={PriceData} />
        </div>
      )}
      {market === "Donent Chart" && (
        <div className="flex  flex-1 gap-10">
          <MarketDonutChart data={marketData} />
          <MarketDonutChart data={PriceData} />
        </div>
      )}
    </section>
  );
};

export default TransactionBreakdown;
