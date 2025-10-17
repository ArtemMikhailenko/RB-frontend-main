import React from "react";
import UserProfileShare from "../../../components/userprofile/PopUps/UserProfileShare";
import UserProfileEdit from "../../../components/userprofile/PopUps/UserProfileEdit";
import Image from "next/image";

const UserProfileInfo = ({ manageleadpage }) => {
  const [isShareOpen, setIsShareOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-lg shadow py-6 px-3 border border-[#E4E4E4] mb-4">
      <div className=" flex flex-col text-center items-center">
        <div className="relative">
          <Image
            src="/images/Profile/Leftsidebar/profile.png"
            alt="Profile"
            width={66}
            height={66}
            className=" rounded-full mb-4 cover relative"
          />
          {manageleadpage === "active" ? (
            <></>
          ) : (
            <button
              onClick={() => setIsEditOpen(true)}
              className="p-1 rounded-full bg-[#ED8F03] cursor-pointer text-gray-700 absolute bottom-2.5 right-1.5"
            >
              <Image
                src="/icons/Profile/Leftsidebar/pencil.svg"
                width={12}
                height={12}
                alt="pencil"
                className=" text-white"
              />
            </button>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-2 ">John Doe</h2>
        <p className="text-gray-500 text-sm">Odessa, Ukraine</p>
        <p className="text-gray-500 text-sm">8:53 pm local time</p>
        <div></div>
      </div>

      <div className="divide-y my-4 divide-[#E4E4E4] flex flex-col gap-2 text-[14px]">
        <div className="flex justify-between w-full pb-2">
          <div className="text-gray-500 ">Events</div>
          <div className=" text-gray-500 ">629</div>
        </div>
        <div className="flex justify-between w-full py-2">
          <div className="text-gray-500">Properties</div>
          <div className=" text-gray-500">620</div>
        </div>
        <div className="flex justify-between w-full pt-2">
          <div className="text-gray-500">Followers</div>
          <div className=" text-gray-500">229</div>
        </div>
      </div>
      {manageleadpage === "active" ? (
        <></>
      ) : (
        <div className="flex gap-2 mt-0 min-[1200px]:flex-nowrap justify-between">
          <button className="p-[13px_5px] pr-[10px] bg-black text-white text-[13px] flex gap-[6px] items-center justify-center w-full max-[400px]:text-xs rounded-[8px] cursor-pointer hover:bg-gray-900">
            <Image
              src="/icons/profile/Leftsidebar/plus.svg"
              alt="plus"
              width={20}
              height={20}
              className="min-[400px]:w-[20px] w-[15px]"
            />
            Follow
          </button>
          <button className="p-[13px_5px] border text-[13px] flex gap-[6px] w-full items-center justify-center min-[1200px]:w-full max-[400px]:text-xs rounded-[8px] cursor-pointer hover:bg-gray-200">
            <Image
              src="/icons/profile/Leftsidebar/msg.svg"
              alt="msg"
              width={20}
              height={20}
              className="min-[400px]:w-[20px] w-[15px]"
            />{" "}
            Message
          </button>
          <button
            className="p-[13px_8px] border items-center justify-center rounded-[8px] cursor-pointer hover:bg-gray-200 lg:block hidden w-1/4"
            onClick={() => setIsShareOpen(true)}
          >
            <Image
              src="/icons/profile/Leftsidebar/share.svg"
              alt="share"
              width={23}
              height={23}
              className=" w-[23px]"
            />
          </button>
          {isShareOpen && (
            <UserProfileShare onClose={() => setIsShareOpen(false)} />
          )}
          {isEditOpen && (
            <UserProfileEdit onClose={() => setIsEditOpen(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfileInfo;
