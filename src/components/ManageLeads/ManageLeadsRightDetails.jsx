"use client";
import React from "react";
import { useState } from "react";
import ManageLeadDocumentDownload from "./ManageLeadsMain/ManageLeadDocumentDownload";
import ShareWithPartner from "./ManageLeadsMain/ShareWithPartner";
import Image from "next/image";

const ManageLeadsRightDetails = ({ agent, mainToggle }) => {
  const [activePopup, setActivePopup] = useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  if (!agent) return null;
  console.log(activePopup);
  return (
    <div className="p-4 bg-white  ">
      <div className="text-sm text-[#757E95]">
        <div className="flex justify-between mb-4 items-center gap-3">
          <div className="flex mb-4 items-center gap-3 w-full max-sm:flex-col">
            <div>
              <Image
                key={agent.agentImage}
                src={agent.agentImage}
                alt="agent"
                width={72}
                height={72}
                className=" object-cover rounded-full"
              />
            </div>
            <div className="flex justify-between items-center flex-1">
              <div>
                <p className="font-semibold text-black mb-2">
                  {agent.agentName}
                </p>
                <div className="flex mb-1 gap-3">
                  <Image
                    src="/icons/ManageLeads/RightSide/msg.svg"
                    width={16}
                    height={16}
                    alt="msg"
                  />
                  <p>{agent.email}</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/icons/ManageLeads/RightSide/phone.svg"
                    width={16}
                    height={16}
                    alt="phone"
                  />
                  <p>{agent.phone}</p>
                </div>
              </div>
              <div className="cursor-pointer sm:relative absolute max-sm:top-16 max-sm:right-4">
                <div className="bg-gray-200 px-3 py-1 rounded" onClick={() => setActivePopup(!activePopup)}>
                  <Image
                    src={`/icons/ManageLeads/Main/dot.svg`}
                    alt="dot"
                    width={6}
                    height={6}
                    className="object-contain cursor-pointer"
                  />
                </div>

                {activePopup ? (
                  <div className="flex flex-col gap-3 w-[180px] rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF] p-3 absolute top-8 right-0">
                    <p
                      className="cursor-pointer"
                      onClick={() => setPopupOpen(true)}
                    >
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
        </div>

        {mainToggle === "Manage leads" ? (
          <>
            <p className="text-black text-[16px] font-bold">Information</p>
            <div className="flex sm:item-center pt-1 sm:gap-20 max-sm:flex-col gap-2 text-left">
              <p>Interes</p>
              <p>
                1.
                <span className="text-black font-bold">{agent.interests}</span>
                <span className="text-black font-bold">
                  {" "}
                  book a virtual viewing{" "}
                </span>{" "}
                of the{" "}
                <span className="text-black font-bold">
                  {" "}
                  listing REF 1550 at 15 may at 15:00{" "}
                </span>
              </p>
            </div>
            <hr className="mt-3 text-[#EAEAEF]" />
            <div className="flex item-center py-2 gap-14">
              <p>Offer price</p>
              <p>{agent.offerPrice} </p>
            </div>
            <hr className="mt-1.5 text-[#EAEAEF]" />
            <div className="flex items-center pt-1 sm:gap-22 gap-2 mt-3 max-sm:flex-col">
              <div>
                <p>Social</p>
              </div>
              <div className="flex gap-2 my-1.5">
                {[
                  "Facebook",
                  "pin",
                  "twitter",
                  "linkedin",
                  "google",
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="px-2 flex items-center py-2 border rounded-lg border-gray-200"
                  >
                    <Image
                      src={`/icons/ManageLeads/RightSide/${img}.svg`}
                      alt={img}
                      width={17}
                      height={17}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <hr className="mt-1.5 text-[#EAEAEF]" />
        <div className="mt-1.5 flex justify-between">
          <p className="text-black font-bold">Listing</p>
          <button className="text-[#ED8F03] underline">SHOW ALL</button>
        </div>
        {[
          {
            head: "House in Torrevieja Spain",
            ref: "REF 125002",
            location: "Calle Finlandia 10 3ºB Torrevieja 03183",
          },
          {
            head: "House in Torrevieja Spain",
            ref: "REF 125002",
            location: "Calle Finlandia 10 3ºB Torrevieja 03183",
          },
          {
            head: "House in Torrevieja Spain",
            ref: "REF 125002",
            location: "Calle Finlandia 10 3ºB Torrevieja 03183",
          },
        ].map((items, idx) => (
          <div key={idx} className="flex mt-1.5 flex-col gap-2">
            <p className="text-black font-bold">{items.head}</p>
            <div className="flex items-center gap-8">
              <p>{items.ref}</p>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-lg bg-[#7D869D]"></span>
                <p>{items.location}</p>
              </div>
            </div>
          </div>
        ))}
        <hr className="mt-1.5 text-[#EAEAEF]" />
        {mainToggle == "Customers" ? <ManageLeadDocumentDownload /> : <></>}
        <div className="flex mt-3 justify-between items-center flex-wrap gap-2">
          {[{ label: "Message" }, { label: "Call" }].map((btn, idx) => (
            <div key={idx} className="flex gap-2 flex-1">
              <button
                className={`flex-1 px-6 py-2 text-xs rounded-md ${
                  btn.label === "Message"
                    ? "text-white bg-black"
                    : "text-black bg-gray-200"
                }`}
              >
                {btn.label}
              </button>
            </div>
          ))}
          <div className="px-5 py-2 bg-gray-200 rounded-md">
            <Image
              src="/icons/ManageLeads/RightSide/whatsapp.svg"
              alt="WhatsApp"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLeadsRightDetails;
