"use client";
// import Layout from "@/components/layout";
import ActivityLineChart from "@/components/UserDashBoard/ActivityGraphs/ActivityLineChart";
import ActivityPieChart from "@/components/UserDashBoard/ActivityGraphs/ActivityPieChart";
import DashboardListing from "@/components/UserDashBoard/Listing Stat/DashboardListing";
import ListingFlowCharts from "@/components/UserDashBoard/listingFlow/ListingFlowCharts";
import MarketCard from "@/components/UserDashBoard/MarketContainer/MarketCard";
import StatCard from "@/components/UserDashBoard/StatsCards/StatsCards";
import TicketSizeChart from "@/components/UserDashBoard/TicketSize/TicketSizeChart";
import TransactionBreakdown from "@/components/UserDashBoard/TransactionBreakdown/TransactionBreakdown";
import GeographicPerformanceChart from "@/components/UserDashBoard/TransactionGraphs/GeographicPerformanceChart";
import TransactionBarGraph from "@/components/UserDashBoard/TransactionGraphs/TransactionBarGraph";
import React from "react";
const listingStatsData = [
  { heading: "Active listings", point: "7" },
  { heading: "Under offer", point: "2.000" },
  { heading: "Exclusive listings", point: "7" },
  { heading: "Expired exclusives", point: "7" },
  { heading: "Illegally occupied", point: "90" },
  { heading: "Closed units", point: "2.000" },
];
const leadStatsData = [
  { heading: "Active leads", point: "67" },
  { heading: "Rent leads", point: "28" },
  { heading: "Sales leads", point: "26" },
];
const ProfileStatsData = [
  { heading: "Profile views", point: "98" },
  { heading: "Network members", point: "19" },
  { heading: "Collaboration", point: "25" },
];
const graphdata = [
  { month: "JAN", new: 45 },
  { month: "FEB", new: 60 },
  { month: "MAR", new: 70 },
  { month: "APR", new: 53 },
  { month: "MAY", new: 85 },
  { month: "JUN", new: 30 },
  { month: "JUL", new: 100 },
  { month: "AUG", new: 95 },
  { month: "SEP", new: 70 },
  { month: "OCT", new: 60 },
  { month: "NOV", new: 85 },
  { month: "DEC" },
];
const pieChartData = [
  { name: "Commercial", value: 30 },
  { name: "Residencial", value: 70 },
];
const geoData = [
  { city: "New York", Listings: 400, Inquiries: 300 },
  { city: "Houston", Listings: 450, Inquiries: 300 },
  { city: "Seattle", Listings: 600, Inquiries: 470 },
  { city: "Torrevieja", Listings: 280, Inquiries: 90 },
];
const TransactionChartData = [
  { city: "2019", UnitsSold: 400 },
  { city: "2020", UnitsSold: 450 },
  { city: "2021", UnitsSold: 600 },
  { city: "2022", UnitsSold: 280 },
];
const ticketBarData = [
  { label: '>50k', value: 40 },
  { label: '>80k', value: 60 },
  { label: '>140k', value: 100 },
  { label: '>300k', value: 35, showText: true, text: '0.5%' },
  { label: '>500k', value: 70, showText: true, text: '54%' },
];
const preferenceBarData = [
  { label: 'Min 30m2', value: 40,showText: true, text: '0.5%' },
  { label: 'Min 50m2', value: 60,showText: true, text: '0.5%' },
  { label: 'Min 70m2', value: 100,showText: true, text: '0.5%' },
  { label: 'Min 90m2', value: 35, showText: true, text: '0.5%' },
  { label: 'Min 140m2', value: 70, showText: true, text: '54%' },
];
const page = () => {
  return (
    <>
      {/* <Layout> */}
        <section className="p-6">
          <DashboardListing
            listingStats={listingStatsData}
            heading={"Listings stats"}
            data={pieChartData}
          />
          <ListingFlowCharts />
          <div className="py-4 grid grid-cols-[1.2fr_2fr] gap-5">
            <MarketCard />
            <TransactionBreakdown />
          </div>
          <ActivityLineChart data={graphdata} title={"Customer Flow"}/>
          <div className="flex gap-5">
            <DashboardListing
              listingStats={leadStatsData}
              heading={"Listings stats"}
            />
            <DashboardListing
              listingStats={ProfileStatsData}
              heading={"Profile stats"}
            />
          </div>
          <div className="grid grid-cols-[1fr_0.5fr] items-center gap-4">
            <ActivityLineChart data={graphdata} />
            <ActivityPieChart data={pieChartData} />
          </div>
          <div className="grid grid-cols-[1fr_1fr_0.8fr] gap-4">
                        <TransactionBarGraph
              title="Transaction Volume"
              data={TransactionChartData}
              dataKey="UnitsSold"
              subtitle="Number of units sold and total market value"
            />
            <GeographicPerformanceChart
              title="Geographic performance"
              subtitle="Performance by city"
              data={geoData}
              chartHeight={300}
            />

            <StatCard/>
          </div>
          <div className="flex gap-4 py-4">
            <TicketSizeChart bars={ticketBarData} ticketMainLabel="Ticket Size" />
            <TicketSizeChart bars={preferenceBarData} ticketMainLabel="Square Preference" />
          </div>
        </section>
      {/* </Layout> */}
    </>
  );
};

export default page;
