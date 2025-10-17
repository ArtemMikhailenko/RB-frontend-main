"use client";
import React from "react";
import ShareWithPartner from "./ShareWithPartner";
import Image from "next/image";

const ClientPageMainCard = ({ agentImage, agentName, location, onClick }) => {
  const [activePopup, setActivePopup] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mt-3 text-gray-500 pb-4 border-b border-b-[#EAEAEF]">
        {/* Agent Block */}
        <div className="flex items-center gap-1.5" onClick={onClick}>
          <Image
            src={agentImage}
            alt="agent"
            width={48}
            height={48}
            className="object-cover rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold text-black">{agentName}</p>
            <div className="flex items-center text-[12px] gap-2 pt-2 ">
              <p>Come from</p>
              <span className="w-2 h-2 rounded-lg bg-[#7D869D]"></span>
              <p>{location}</p>
            </div>
          </div>
        </div>

        {/* Fixed Icons Block */}
        <div className="flex gap-4 items-center relative">
          {["phone", "msg"].map((icon, index) => (
            <Image
              key={index}
              src={`/icons/ManageLeads/Main/${icon}.svg`}
              alt={icon}
              width={16}
              height={16}
              onClick={() => setActivePopup(!activePopup)}
              className="object-contain cursor-pointer"
            />
          ))}
          <Image
            src={`/icons/ManageLeads/Main/dot.svg`}
            alt="dot"
            width={6}
            height={6}
            onClick={() => setActivePopup(!activePopup)}
            className="object-contain cursor-pointer"
          />
          {activePopup ? (
            <div className="flex z-10 flex-col gap-2 w-[190px] rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF] p-3 absolute top-8 right-0 sm:text-sm text-xs">
              <p className="cursor-pointer" onClick={() => setPopupOpen(true)}>
                Share with partners
              </p>
              {popupOpen ? (
                <ShareWithPartner onClose={() => setPopupOpen(false)} />
              ) : (
                <></>
              )}
              <p className="cursor-pointer">Confirm viewing</p>
              <p className="cursor-pointer">Delete</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientPageMainCard;
