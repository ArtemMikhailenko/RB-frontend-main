import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-54 bg-white rounded-xl shadow-md p-2 space-y-1">
      {/* Dashboard */}
      <Link href="/userdashboard" passHref>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Image
            src="/icons/Navbar/Header/dashboard.svg"
            alt="dashboard"
            width={20}
            height={20}
          />
          <span className="text-gray-800">Dashboard</span>
        </div>
      </Link>

      {/* News */}
      <Link href="/news" passHref>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Image
            src="/icons/Navbar/Header/news.svg"
            alt="news"
            width={20}
            height={20}
          />
          <span className="text-gray-800">News</span>
        </div>
      </Link>

      {/* Manage listings */}
      <Link href="/managelisting" passHref>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Image
            src="/icons/Navbar/Header/manage.svg"
            alt="manage listings"
            width={20}
            height={20}
          />
          <span className="text-gray-800">Manage listings</span>
        </div>
      </Link>

      {/* Manage leads */}
      <Link href="/manageleads" passHref>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Image
            src="/icons/Navbar/Header/leads.svg"
            alt="manage leads"
            width={20}
            height={20}
          />
          <span className="text-gray-800">Manage leads</span>
        </div>
      </Link>

      {/* Opportunities */}
      <Link href="/opportunities" passHref>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Image
            src="/icons/Navbar/Header/opportunity.svg"
            alt="opportunity"
            width={20}
            height={20}
          />
          <span className="text-gray-800">Opportunities</span>
        </div>
      </Link>

      {/* Settings */}
      <Link href="/setting">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Settings className="w-5 h-5 text-gray-600" alt="setting" />
          <span className="text-gray-800">Settings</span>
        </div>
      </Link>

      {/* Logout */}
      <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
        <Image
          src="/icons/Navbar/Header/logout.svg"
          alt="logout"
          width={20}
          height={20}
        />
        <span className="text-gray-800">Log out</span>
      </div>
    </div>
  );
};

export default Card;
