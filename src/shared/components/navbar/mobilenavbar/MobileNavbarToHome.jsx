import React from "react";
import DropdownButton from "@/shared/components/navbar/Buttons/DropdownButton";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MobileNavbarToHome = ({
  setSelectedUser,
  setSelectedCompany,
  setRealesrarePopup,
  setShowPopUp,
}) => {
  const handleBack = () => {
    console.log("Back button clicked");
    if (setSelectedUser) {
      console.log("Clearing selected user");
      setSelectedUser(null);
    }
    if (setSelectedCompany) {
      console.log("Clearing selected company");
      setSelectedCompany(null);
    }
    if (setRealesrarePopup) {
      setRealesrarePopup(false);
    }
    if (setShowPopUp) setShowPopUp(false);
  };
  const pathname = usePathname();
  const isChatRoute = pathname === "/chat";

  return (
    <div className="flex justify-between items-center sticky top-0">
      <div>
        <Image
          src="/icons/Navbar/backarrow.svg"
          alt="backarrow"
          width={10}
          height={10}
          className={`cursor-pointer ${isChatRoute ? "ml-4" : ""}`}
          onClick={() => {
            handleBack();
          }}
        />
      </div>
      <div className="flex items-center gap-3 px-4 py-2 border-gray-200">
        <div className="flex space-x-3">
          <Image
            src="/icons/Navbar/search-normal.svg"
            alt="Search"
            width={20}
            height={20}
          />
          <Image
            src="/icons/Navbar/bell.svg"
            alt="Notifications"
            width={20}
            height={20}
          />
        </div>
        <DropdownButton />
        <Image
          src="/images/Navbar/profile.png"
          alt="User"
          width={32}
          height={32}
          className=" rounded-full"
        />
      </div>
    </div>
  );
};

export default MobileNavbarToHome;
