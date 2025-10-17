"use client";
import React, { useState } from "react";
import AddEventModal from "./PopUps/NewsEventUpload";
import NewRequestForm from "../news/PopUps/SimpleOpportunityUpload";
import FeedPropertyPopUp from "../news/PopUps/FeedPropertyPopUp";
import Image from "next/image";

const NewsUploadForm = ({ showButton = true }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [newRequest, setNewRequest] = React.useState(false);
  const [propertyPopup, setPropertyPopup] = React.useState(false);
  // Effect to handle body overflow when modal is open
  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full border border-[#E4E4E4]">
      {/* Input Section */}
      <div className="">
        <form className="flex items-center gap-2 mb-3 ">
          <Image
            src="/images/News/Leftsidebar/john.png"
            alt="User Avatar"
            width={52}
            height={52}
            className="min-[350px]:w-[52px] min-[350px]:h-[52px] rounded-full object-cover w-[35px]"
          />
          <div className="min-[400px]:flex-1/2 w-full flex items-center gap-2 ">
            <div className="rounded-full min-[350px]:px-[20px] min-[350px]:py-[14px] px-[10px] py-[8px] bg-[#F9F9F9] flex-1/2">
              <input
                type="text"
                placeholder="Share a property or update..."
                className=" bg-transparent outline-none min-[350px]:text-sm w-full text-xs"
                required
              />
            </div>
            <div>
              {showButton && (
                <button
                  type="submit"
                  className="px-3 py-3 bg-black rounded-md flex items-center justify-center ml-2"
                >
                  <Image
                    src="/icons/News/Maincontainer/sendicon.svg"
                    alt="Send"
                    width={16}
                    height={16}
                    className="min-[350px]:w-[16px] min-[350px]:h-[16px] cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2 justify-start flex-wrap">
        <button
          className="flex items-center gap-1 bg-[#F9F9F9] min-[400px]:text-sm px-[10px] py-[4px] rounded-[20px] cursor-pointer text-xs"
          onClick={() => setPropertyPopup(true)}
        >
          <Image
            src="/icons/News/Maincontainer/property.svg"
            alt="property"
            width={25}
            height={25}
            className="max-[400px]:w-[15px]"
          />{" "}
          Property
        </button>
        <button
          className="flex items-center gap-1 bg-[#F9F9F9] min-[400px]:text-sm px-[10px] py-[4px] rounded-[20px] cursor-pointer text-xs"
          onClick={() => setNewRequest(true)}
        >
          <Image
            src="/icons/News/Maincontainer/request.svg"
            alt="request"
            width={25}
            height={25}
            className="max-[400px]:w-[15px]"
          />{" "}
          Request
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 bg-[#F9F9F9] min-[400px]:text-sm px-[10px] py-[4px] rounded-[20px] cursor-pointer text-xs"
        >
          <Image
            src="/icons/News/Maincontainer/events.svg"
            alt="events"
            width={25}
            height={25}
            className="max-[400px]:w-[15px]"
          />
          Events
        </button>
        {propertyPopup && (
          <FeedPropertyPopUp setPropertyPopup={setPropertyPopup} />
        )}
        {showModal && <AddEventModal onClose={() => setShowModal(false)} />}
        {newRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#9B9B9B99] bg-opacity-20 transition-opacity duration-200">
            <div className="w-full">
              <NewRequestForm setNewRequest={setNewRequest} isPopup="Popup" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsUploadForm;
