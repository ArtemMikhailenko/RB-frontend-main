"use client";
import React from "react";
import RealEstateServices from "@/components/Realestate/RightSide/RealEstateServices";
import PostDetails from "@/components/Realestate/Details/PostDetails";
import ScheduleTour from "@/components/Realestate/Details/AppointmentDate";
// import Layout from "@/components/layout";
import { Heart, HeartIcon, Share2 } from "lucide-react";
import Link from "next/link";
import { Play } from "lucide-react";
import Image from "next/image";

const page = () => {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState("overview");
  const [showHeader, setShowHeader] = React.useState(false);
  const cardConfigs = [
    {
      dropdown: ["North", "Community pool", "Garden", "Terrace", "Garage"],
      heading: ["House on Carrer d'Isaac Peral, Gavà"],
      services: [
        { icon: "/images/estatebed.png", label: "4 bed" },
        { icon: "/images/estatebath.png", label: "3 bath" },
        { icon: "/images/estatesqft.png", label: "2,944 sqft" },
        { icon: "/images/estatelevel.png", label: "One level" },
      ],
      features: ["kitchen 18m2", "terrace 5m2", "without lift"],
      button: [
        { label: "Contact" },
        { label: "Call" },
        { image: "/images/realestatewhatsapp.png" },
      ],
      media: [
        {
          images: [
            "/images/houseimage.png",
            "/images/houseimage2.png",
            "/images/houseimage3.png",
          ],
        },
      ],
      cards: [
        {
          images: [
            "/images/houseimage.png",
            "/images/houseimage2.png",
            "/images/houseimage3.png",
          ],
          ref: "Ref 12.4000.",
          downloadIcon: "/images/downloadwhite.png",
          cameraIcon: "/images/camerahouse.png",
          videoIcon: "/images/playvideo.png",
          cameraText: "1/10+",
          videoText: "Video",
          keyLabel: "Key",
        },
      ],
    },
    {
      dropdown: ["With tenants", "South", "Storage", "AA/CC"],
      heading: ["Premises on Calle Noruega 11"],
      services: [
        { icon: "/images/estatebath.png", label: "3 bath" },
        { icon: "/images/squareimage.png", label: "128m²" },
        { icon: "/images/estatelevel.png", label: "One level" },
      ],
      features: ["kitchen 18m2", "terrace 5m2", "without lift"],
      button: [
        { label: "Contact" },
        { label: "Call" },
        { image: "/images/whatsappcolordifferent.png" },
      ],
      media: [
        {
          images: [
            "/images/houseimage2.png",
            "/images/houseimage3.png",
            "/images/houseimage4.png",
          ],
        },
      ],
      cards: [
        {
          images: [
            "/images/houseimage2.png",
            "/images/houseimage3.png",
            "/images/houseimage4.png",
          ],
          ref: "Ref 12.4000.",
          downloadIcon: "/images/downloadwhite.png",
          cameraIcon: "/images/camerahouse.png",
          videoIcon: "/images/playvideo.png",
          cameraText: "1/10+",
          videoText: "Video",
          keyLabel: "Key",
          market: "Market price",
        },
      ],
    },
    {
      dropdown: [
        "South",
        "Ready to move and life",
        "Lift",
        "Garage",
        "Terrace",
      ],
      heading: ["Flat on Calle Finlandia 23 Torrevieja, Alicante"],
      services: [
        { icon: "/images/estatebed.png", label: "4 bed" },
        { icon: "/images/estatebath.png", label: "3 bath" },
        { icon: "/images/squareimage.png", label: "128m²" },
        { icon: "/images/estatelevel.png", label: "5 floor" },
      ],
      features: ["kitchen 18m2", "terrace 5m2", "without lift"],
      button: [
        { label: "Contact" },
        { label: "Call" },
        { image: "/images/realestatewhatsapp.png" },
      ],
      media: [
        {
          images: [
            "/images/houseimage3.png",
            "/images/houseimage4.png",
            "/images/houseimage.png",
          ],
        },
      ],
      cards: [
        {
          images: [
            "/images/houseimage3.png",
            "/images/houseimage4.png",
            "/images/houseimage.png",
          ],
          ref: "Ref 12.4000.",
          cameraIcon: "/images/camerahouse.png",
          videoIcon: "/images/playvideo.png",
          cameraText: "1/10+",
          videoText: "Video",
          keyLabel: "Appointment",
        },
      ],
    },
    {
      dropdown: [
        "Metal shutters",
        "AA/CC",
        "Pool",
        "Garage",
        "Aire acondicionado",
      ],
      heading: ["Finestrat Paradise Resort"],
      services: [
        { icon: "/images/estatebed.png", label: "4 bed" },
        { icon: "/images/estatebath.png", label: "3 bath" },
        { icon: "/images/squareimage.png", label: "128m²" },
        { icon: "/images/estatelevel.png", label: "5 floor" },
      ],
      button: [
        { label: "Contact" },
        { label: "Call" },
        { image: "/images/realestatewhatsapp.png" },
      ],
      cards: [
        {
          images: [
            "/images/houseimage4.png",
            "/images/houseimage3.png",
            "/images/houseimage2.png",
          ],
          ref: "IN CONSTRUCTION",
          downloadIcon: "/images/downloadwhite.png",
          cameraIcon: "/images/camerahouse.png",
          videoIcon: "/images/playvideo.png",
          cameraText: "1/10+",
          videoText: "Video",
        },
      ],
      isActive: true,
    },
  ];
  const scrollToSection = (id, offset = 140) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "details", "video"];
      const scrollPos = window.scrollY + 140; // match offset in scrollToSection
      const pageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

      if (pageBottom) {
        setActiveSection("video");
        return;
      }

      // check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // change 200 to whatever scroll offset you like
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-40 bg-white">
      <div
        className={`fixed z-20 top-0 bg-white w-full flex md:px-6 items-center justify-between transition-transform duration-300 max-sm:py-4 px-2 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex sm:gap-3 gap-2 items-center">
          <Link href="/realestate">
            <img src="/images/Goback.png" alt="" className="max-sm:w-3" />
          </Link>
          <div>
            <h1 className="sm:text-3xl sm:pl-4">$399,900</h1>
            <p className="sm:pl-4 max-sm:text-sm">
              0 bd • 1 ba • 484sf • Apt/Condo
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:hidden ">
          <HeartIcon className="w-5" />
          <Share2 className="w-5" />
        </div>
      </div>

      {/* Sticky Overview/Details nav */}
      <div className="sticky top-[60px] z-50 bg-white border-b border-[#E5E7EB]">
        <div className="flex justify-between lg:px-10 px-4 items-center gap-6 py-2">
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("overview")}
              className={`cursor-pointer  py-2 ${
                activeSection === "overview"
                  ? "border-b-2 border-[#ED8F03] text-[#ED8F03] font-semibold"
                  : ""
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("details")}
              className={`cursor-pointer py-2 ${
                activeSection === "details"
                  ? "border-b-2 border-[#ED8F03] text-[#ED8F03] font-semibold"
                  : ""
              }`}
            >
              Details
            </button>
            <button
              onClick={() => {
                scrollToSection("video");
              }}
              className={`cursor-pointer py-2 ${
                activeSection === "video"
                  ? "border-b-2 border-[#ED8F03] text-[#ED8F03] font-semibold"
                  : ""
              }`}
            >
              Video
            </button>
            <Link href="/realestate" className="py-2">
              Feed
            </Link>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <span className="flex items-center gap-2">
              <Heart />
              Favourite
            </span>
            <span className="flex items-center gap-2">
              <Share2 />
              Share
            </span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="lg:px-10 mb-4 pt-4" id="overview">
        <h1 className="text-3xl pl-4">$399,900</h1>
        <p className="text-gray-600 pl-4">0 bd • 1 ba • 484sf • Apt/Condo</p>
      </div>

      {/* Page Content */}
      <div className="lg:px-10 px-4 flex justify-between gap-10">
        <div className="flex-1">
          <RealEstateServices property={cardConfigs[selectedCardIndex]} />
          <div id="details">
            <PostDetails />
          </div>
          {/* Video Section */}
          <div className="border max-w-lg border-[#E5E7EB]">
            <h3 className="font-medium text-lg my-3 px-2" id="video">
              Video
            </h3>
            <div className="relative w-full max-w-md">
              <Image
                src="/images/RealeState/Detail/video.png"
                alt="Video thumbnail"
                width={500}
                height={300}
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-white bg-red-600 rounded-full p-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="md:block hidden w-[300px]">
          <ScheduleTour />
        </div>
      </div>
    </div>
  );
};

export default page;
