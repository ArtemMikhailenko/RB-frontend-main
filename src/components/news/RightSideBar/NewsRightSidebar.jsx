import React from "react";
import MarketUpdateCard from "@/components/news/RightSideBar/NewsMarketUpdate";
import UpcomingEventsCard from "@/components/news/RightSideBar/NewsUpcomingEvent";

const marketUpdates = [
  {
    text: "Amsterdam housing prices up 5.2%",
    meta: "1,542 professionals discussing",
  },
  {
    text: "New mortgage regulations announced",
    meta: "933 professionals discussing",
  },
  {
    text: "Commercial real estate outlook 2023",
    meta: "627 professionals discussing",
  },
];

const upcomingEvents = [
  {
    date: "15",
    month: "May",
    title: "Real Estate Summit 2025",
    location: "Convention Center",
  },
];

const NewsRightSidebar = () => {
  return (
    <aside className="w-[24%] space-y-4 lg:block hidden">
      <MarketUpdateCard
        title="Market Update"
        icon="/icons/News/Rightsidebar/trendup.svg"
        updates={marketUpdates}
        variant="card" // Use "plain" if you don't want rounded bg
      />

      <UpcomingEventsCard
        title="Upcoming Events"
        events={upcomingEvents}
        variant="card" // Use "plain" if you don't want rounded bg
      />
    </aside>
  );
};

export default NewsRightSidebar;
