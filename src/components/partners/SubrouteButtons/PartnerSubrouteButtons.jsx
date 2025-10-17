import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const tabs = [
  {
    label: "People",
    icon: "/icons/Partners/subroutes/whitepeople.svg", // Regular icon
    activeIcon: "/icons/Partners/subroutes/people.svg", // Active icon
    path: "/partners",
  },
  {
    label: "Company",
    icon: "/icons/Partners/subroutes/building.svg",
    activeIcon: "/icons/Partners/subroutes/blackbuilding.svg",
    path: "/partners/company",
  },
  {
    label: "My network",
    icon: "/icons/Partners/subroutes/profile-2user.svg",
    activeIcon: "/icons/Partners/subroutes/profile-2userwhite.svg",
    path: "/partners/network",
  },
  {
    label: "Invitation",
    icon: "/icons/Partners/subroutes/user-add.svg",
    activeIcon: "/icons/Partners/subroutes/user-addwhite.svg",
    path: "/partners/invitation",
  },
];

const PartnerSubrouteButtons = () => {
  const pathname = usePathname();
  return (
    <div className="mx-5 my-2 overflow-auto scrollbar-hide max-[589px]:max-w-[96%] whitespace-nowrap">
      {/* Subroute tabs */}
      <div className="flex gap-2">
        {tabs.map((tab, index) => {
          const isActive =
            pathname === tab.path ||
            (tab.label === "People" && pathname === "/partners");

          return (
            <Link href={tab.path} key={index}>
              <div
                className={`flex items-center gap-2 sm:px-6 px-6 min-w-[130px] py-2.5 rounded-md text-[13px] border cursor-pointer ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={isActive ? tab.activeIcon : tab.icon}
                  alt={`${tab.label} icon`}
                  width={20}
                  height={20}
                  className="w-5 h-5" // adjust size as needed
                />
                {tab.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerSubrouteButtons;
