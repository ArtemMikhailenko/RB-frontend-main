// components/TopNavbar.jsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DropdownButton from "./Buttons/DropdownButton";
import Image from "next/image";
import ProfileDropdown from "./ProfilePic/ProfileButton";
import NotificationDropdown from "./Notification/NotificationButton";
import { usePathname } from "next/navigation";
import { getProfile } from "@/services/userSettingService";
const TopNavbar = () => {
  const Pathname = usePathname();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const data = await getProfile();
          setProfile(data);
        } catch (err) {
          console.error("Error fetching profile:", err);
          setError(err.message || "Something went wrong");
        } finally {
          setLoading(false);
        }
      }
  
      fetchProfile();
    }, []);
  return (
    <nav className="bg-white border-b border-[#E4E4E4] z-20 px-5 sticky top-0">
      <div className=" ">
        <div
          className={`md:grid flex justify-between  md:px-0  h-16 lg:grid-cols-[0.8fr_1fr_auto] md:grid-cols-[0.5fr_1fr_auto]`}
        >
          <div className="flex items-center ">
            <Link href="/news">
              <Image
                src="/icons/navbar/logoblack.png"
                alt="company logo"
                width={75}
                height={75}
              />
            </Link>
          </div>
          <div className={`hidden md:flex space-x-8 items-center`}>
            <Link href="/userprofile">
              Profile
              <span className="absolute bottom-[-20px] left-0 right-0 h-[4px] rounded-t-full transition-all duration-300" />
            </Link>
            <Link
              href="/partners"
              className="text-gray-600 hover:text-[#ED8F03] transition-colors font-medium relative group"
            >
              Partners
              <span
                className={`absolute bottom-[-20px] left-0 right-0 h-[4px] rounded-t-full transition-all duration-300 
                 `}
              />
            </Link>
            <Link
              href="/realestate"
              className="text-gray-600 hover:text-[#ED8F03] transition-colors font-medium relative group"
            >
              Real Estate
              <span
                className={`absolute bottom-[-20px] left-0 right-0 h-[4px] rounded-t-full transition-all duration-300 `}
              />
            </Link>
            <Link
              href="/chat"
              className="text-gray-600 hover:text-[#ED8F03] transition-colors font-medium relative group"
            >
              Chat
              <span
                className={`absolute bottom-[-20px] left-0 right-0 h-[4px] rounded-t-full transition-all duration-300 `}
              />
            </Link>
          </div>
          <div className={`flex items-center gap-3 justify-end`}>
            <div className="relative">
              <Image
                src="/icons/navbar/search-normal.svg"
                alt="Search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <NotificationDropdown />
            {Pathname.toLowerCase().includes("/opportunities")|| Pathname.toLowerCase().includes("/setting") ? (
              <>
                <Link href="/add-opportunities">
                  <button className="bg-black text-white px-6 py-2 rounded-md cursor-pointer lg:flex hidden text-sm">
                    Add Opportunities
                  </button>
                  <Image
                    src="/icons/Navbar/plus.svg"
                    alt="plus"
                    width={24}
                    height={24}
                    onClick={() => setSecondIsOpen(!secondIsOpen)}
                    className="lg:hidden block cursor-pointer"
                  />
                </Link>
              </>
            ) : (
              <DropdownButton />
            )}

            <div>
              {/* Mobile: simple link */}
              <Link href="/usersettingmobile">
                <Image
                  src="/images/Navbar/profile.png"
                  alt="profile"
                  height={40}
                  width={40}
                  className=" md:hidden block"
                />
              </Link>

              {/* Desktop: Radix Dropdown */}
              <ProfileDropdown profile={profile}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
