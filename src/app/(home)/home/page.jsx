"use client";
import React, { use } from "react";
import Footer from "../../../shared/components/footer/Footer";
import BuyForm from "@/components/home/BuyForm";
import RentForm from "@/components/home/RentForm";
export default function Home() {
  const properties = [
    { label: "Houses", image: "/images/home/houses.png" },
    { label: "Flats", image: "/images/home/flats.png" },
    { label: "Premises", image: "/images/home/premises.png" },
    { label: "Lands", image: "/images/home/lands.png" },
    { label: "Storage room", image: "/images/home/storage.png" },
    { label: "Garage", image: "/images/home/garage.png" },
    { label: "Warehouse", image: "/images/home/warehouse.png" },
    { label: "Restaurant", image: "/images/home/restaurant.png" },
  ];
  const [activeForm, setActiveForm] = React.useState("buy");
  const [marketOptions, setMarketOptions] = React.useState([]);
  const [bedroomOptions, setBedroomOptions] = React.useState([]);
  const [typeOptions, setTypeOptions] = React.useState([]);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleTypeChange = (option) => {
    if (typeOptions.includes(option)) {
      setTypeOptions(typeOptions.filter((o) => o !== option));
    } else {
      setTypeOptions([...typeOptions, option]);
    }
  };

  const handleMarketChange = (option) => {
    if (marketOptions.includes(option)) {
      setMarketOptions(marketOptions.filter((o) => o !== option));
    } else {
      setMarketOptions([...marketOptions, option]);
    }
  };

  const handleBedroomChange = (option) => {
    if (bedroomOptions.includes(option)) {
      setBedroomOptions(bedroomOptions.filter((o) => o !== option));
    } else {
      setBedroomOptions([...bedroomOptions, option]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      market: marketOptions,
      bedrooms: bedroomOptions,
    });
  };

  return (
    <div className="">
      <section className=" mx-auto px-4">
        <section
          className="bg-cover sm:py-[45px] sm:px-[60px] px-[20px] py-3"
          style={{ backgroundImage: 'url("/images/home/hero_background.jpg")' }}
        >
          <div className="text-[calc(20px+1.5vw)] font-bold mb-2 text-white">
            For everything real estate choose RB
          </div>
          <div className=" sm:max-w-md bg-gradient-to-r from-[#282626] to-[#2A25254D] backdrop-blur-[20px] p-6 rounded-[20px] text-white">
            <div className="flex mb-1 bg-gray-700 rounded-[22px]">
              <button
                onClick={() => setActiveForm("buy")}
                className={`flex-1 py-[9px] sm:px-[43px] rounded-[22px] cursor-pointer ${
                  activeForm === "buy"
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveForm("rent")}
                className={`flex-1 py-[9px] sm:px-[43px] rounded-[22px] cursor-pointer ${
                  activeForm === "rent"
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                Rent
              </button>
            </div>
            {/* Buy Form */}
            {activeForm === "buy" && (
              <BuyForm
                marketOptions={marketOptions}
                typeOptions={typeOptions}
                bedroomOptions={bedroomOptions}
                handleMarketChange={handleMarketChange}
                handleTypeChange={handleTypeChange}
                handleBedroomChange={handleBedroomChange}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                handleSubmit={handleSubmit}
              />
            )}

            {/* Rent Form */}
            {activeForm === "rent" && (
              <RentForm
                marketOptions={marketOptions}
                typeOptions={typeOptions}
                bedroomOptions={bedroomOptions}
                handleMarketChange={handleMarketChange}
                handleTypeChange={handleTypeChange}
                handleBedroomChange={handleBedroomChange}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </section>

        <section className="  mt-10 ">
          <h2 className="text-[34px] font-semibold mb-4">
            Explore millions of real estate
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mb-4">
            {properties.map((item, i) => (
              <div
                key={i}
                className="h-48 bg-gray-300 flex items-end p-2 text-white font-medium bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={`Property type: ${item.label}`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </section>

        <section className="  mt-10 mb-15">
          <h2 className="text-[34px] font-semibold mb-4">
            Video tours & full catalog inside
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left side - video section */}
            <div
              className="bg-orange-400 p-6 flex flex-col justify-between bg-contain row-span-1 rounded 
             md:col-span-1 md:row-span-1 col-span-full"
              style={{
                backgroundImage: `url('/images/home/house-png-10955 1.png')`,
                backgroundSize: "400px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <div className="text-white md:text-[35px] text-[20px]font-semibold  md:leading-[36px] leading-[20px] mb-15">
                New video <br /> available of <br /> YouTube
              </div>
              <button className="bg-black text-white px-4 py-2 rounded w-fit cursor-pointer">
                See happy story
              </button>
            </div>

            {/* Right side - cards with images */}
            <div className="grid md:grid-cols-2 grid-cols-full gap-4 text-black">
              {[
                {
                  label: "Newbuilding",
                  full: true,
                },
                { label: "Resale" },
                { label: "Rent" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${
                    item.full ? "col-span-2 md:col-span-2" : ""
                  } bg-[#FF980080] p-4 flex flex-col justify-between bg-cover bg-center rounded`}
                >
                  <div className="text-[25px] font-bold mb-10">
                    {item.label}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded w-fit cursor-pointer">
                    Catalog
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
