import React from "react";
import NewsSidebarUserDetail from "./NewsSidebarUserDetail";
import RecentActivityCard from "./RecentActivityCard";

const recentActivities = [
  {
    img: "/icons/News/Leftsidebar/plus.svg",
    description: "Emily Watson listed a new property in Malibu",
    time: "2 hours ago",
  },
  {
    img: "/icons/News/Leftsidebar/trend.svg",
    description: "Downtown penthouse price reduced by $150,000",
    time: "3 hours ago",
  },
  {
    img: "/icons/News/Leftsidebar/contact.svg",
    description: "James Wilson joined a team at Metropolitan Properties",
    time: "5 hours ago",
  },
];
const NewsSidebar = () => {
  return (
    <aside className="lg:w-[23%] w-[20%]rounded-lg md:flex flex-col gap-4 hidden">
      <NewsSidebarUserDetail />
      <RecentActivityCard activities={recentActivities} variant="card" />
    </aside>
  );
};

export default NewsSidebar;
