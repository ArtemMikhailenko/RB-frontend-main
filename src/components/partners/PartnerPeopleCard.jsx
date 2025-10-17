import React from "react";
import PartnerAgentDetail from "@/components/partners/PopUps/PartnerAgentDetail";
import MobileNavbarToHome from "@/shared/components/navbar/mobilenavbar/MobileNavbarToHome";
import Image from "next/image";
import ConnectButton from "./Buttons/ConnectButton";

const PartnerPeopleCard = ({ user, index, selectedUser, setSelectedUser }) => {
  const isActive = selectedUser === index;

  const handleClick = () => {
    if (isActive) {
      setSelectedUser(null); // toggle off if already active
    } else {
      setSelectedUser(index);
    }
  };
  console.log("User profile image:", user.profileImage);
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-3 space-y-3 border transition-all duration-300 ${
        isActive ? "border-yellow-500" : "border-transparent"
      }`}
    >
      <div onClick={handleClick}>
        <div className="flex flex-col gap-1 space-x-4">
          <div className="relative">
            <Image
              src={user.profileImage || "/images/Partners/peoplecard/Ellipse 2.png"}
              alt={user.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
           {user.onlineStatus &&(
          <span className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
           )
           } 
          </div>

          <div className="cursor-pointer">
            <h2 className="font-medium text-[16px] text-[#15171C]">
              {user.name}
            </h2>
            <p className="text-sm text-[#343434]">
              {user.company || "Role at Company"}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>
            Activity range:{" "}
            <span className="font-semibold text-black">
              {user.activityRange || "$0 - $0"}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-2 text-sm">
        <p className="text-[#343434] font-semibold">Email</p>
        <p className="text-[#636363]">{user.email}</p>
      </div>

      <div className="flex space-x-2">
       <ConnectButton receiverId={user.id} />
        <button className="bg-gray-100 max-sm:w-full text-black py-2 px-2.5 text-[13px] font-medium cursor-pointer rounded-md">
          Chat
        </button>
      </div>

      {/* Right: Profile panel */}
      {isActive && (
        <>
          <div className="hidden md:block">
            <div className="w-[350px] fixed top-8 right-0 h-screen overflow-y-auto bg-white pb-4 scrollbar-none scrollbar-hidden">
              <div className="relative">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-red-800 text-lg absolute top-8 right-2"
                >
                  ✖
                </button>
              </div>
              <PartnerAgentDetail user={user} />
            </div>
          </div>

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:hidden">
            <div className="bg-white w-full max-h-[100%] overflow-y-auto p-1.5">
              <MobileNavbarToHome
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
              <PartnerAgentDetail user={user} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default PartnerPeopleCard;
