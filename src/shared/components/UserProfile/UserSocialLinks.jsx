import Image from "next/image";
import React from "react";

const UserSocialLinks = () => {
  return (
    <div className="w-full pt-6 space-y-3 bg-white rounded-lg shadow py-4 px-4 divide-y divide-[#E4E4E4] border border-[#E4E4E4]">
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/facebook.svg"
          text="Facebook"
          link="https://facebook.com"
        />
        <a href="https://facebook.com " target="blank">
          <Image
            src="/icons/News/Maincontainer/share2.svg"
            alt="facebook"
            width={18}
            height={18}
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/insta.svg"
          text="Instagram"
          link="https://instagram.com"
        />
        <a href="https://instagram.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/twitter.svg"
          text="Twitter"
          link="https://twitter.com"
        />
        <a href="https://twitter.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/linkdin.svg"
          text="LinkedIn"
          link="https://linkedin.com"
        />
        <a href="https://linkedin.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/tiktok.svg"
          text="TikTok"
          link="https://tiktok.com"
        />
        <a href="https://tiktok.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/whatsapp.svg"
          text="WhatsApp"
          link="https://whatsapp.com"
        />
        <a href="https://whatsapp.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between pb-2.5">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/viber.svg"
          text="Viber"
          link="https://viber.com"
        />
        <a href="https://viber.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
      <div className="flex items-center justify-between ">
        <SideLink
          imgSrc="/icons/profile/Leftsidebar/Links/telegram.svg"
          text="Telegram"
          link="https://telegram.org"
        />
        <a href="https://telegram.com " target="blank">
          <Image
            width={18}
            height={18}
            src="/icons/News/Maincontainer/share2.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
const SideLink = ({ imgSrc, text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer"
  >
    <Image width={20} height={20} src={imgSrc} alt={text} className="w-5 h-5" />
    <span>{text}</span>
  </a>
);

export default UserSocialLinks;
