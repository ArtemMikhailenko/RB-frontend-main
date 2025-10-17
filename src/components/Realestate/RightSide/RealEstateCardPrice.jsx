import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScheduleTour from "../Details/AppointmentDate";
const RealEstateCardPrice = ({ property }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={`${pathname.includes("/detail") ? "" : "p-5"}`}>
        <h2 className="sm:text-2xl text-lg font-bold">
          {property.detail?.[0].price}€
        </h2>
        <p className="text-sm text-gray-600">
          <span className="text-gray-500 text-sm font-normal ml-2">
            {property?.detail?.[0]?.price &&
            property?.features?.[0]?.landArea ? (
              <>
                {(
                  property.detail[0].price / property.features[0].landArea
                ).toFixed(2)}{" "}
                €/m²
              </>
            ) : (
              "-"
            )}
          </span>{" "}
          <span className="text-blue-600"> Valuation</span>
        </p>

        <p className="mt-2 max-sm:text-sm text-gray-800 capitalize">
          {property?.propertyTypes?.[0]?.propertyType} on {property.purpose} at
          street {property.location?.[0]?.street} ,{" "}
          
        </p>
        <p className="text-sm text-blue-600  cursor-pointer">
         {property.location?.[0]?.city}
        </p>

        <p className="my-1 text-gray-700 text-sm mb-10">
          {property.detail?.[0].bedrooms && (
            <span>
              {property.detail?.[0]?.bedrooms} Bed •{" "}
              {property.detail?.[0]?.bathrooms} Bath
            </span>
          )}
          {property.features?.[0]?.landArea && (
            <span> • {property.features?.[0]?.landArea} SqFt</span>
          )}
        </p>
        {pathname.includes("/detail") ? (
          <>
            <div className="md:hidden block mb-3">
              <ScheduleTour />
            </div>
            <div className="border-b border-[#E5E7EB] pb-10">
              <h2 className="sm:text-2xl text-lg font-bold mb-3 sm:mb-5">
                About this home
              </h2>
              <p className="max-sm:text-sm">
                Wake up to picture-postcard-worthy views from this 12th-floor
                studio in the iconic Roberts House. Gaze out over the Olympic
                Mountains & Beacon Hill Park, and Juan de Fuca Strait from the
                comfort of your private porch. This bright, south-facing home
                features floor-to-ceiling windows, an open layout, and an
                updated kitchen and bathroom. Whether you're looking for a first
                home, a pied-à-terre, or an investment opportunity, this is the
                perfect spot. Roberts House is a well-managed, pet-friendly
                steel and concrete building with premium amenities: indoor pool,
                fitness centre, hot tub, sauna, two guest suites, secure
                underground parking, and a live-in caretaker. Tucked into one of
                Victoria's best-loved areas in James Bay. Steps away from the
                ocean, Beacon Hill Park, Dallas Rd., and amenities. These are
                views you truly need to see to believe.
              </p>
            </div>
          </>
        ) : (
          <>
            {property.features?.[0] && (
              <>
                <h1 className="sm:text-2xl text-lg font-bold">Short Facts</h1>

                <div className="sm:mt-4 mt-2 flex flex-wrap gap-2 max-w-lg">
                  {property.features?.[0].features.map((fact, idx) => (
                    <span
                      key={idx}
                      className="sm:px-3 px-2 py-1 text-[12px] sm:text-sm bg-gray-100 rounded-md border text-gray-700"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Agent Info */}
        {pathname.includes("/detail") && (
          <p className="text-[#6B7280] my-5">Listed by:</p>
        )}
        <div className="mt-3 flex items-center gap-3">
          <div className="w-14 h-14  overflow-hidden relative">
            <Image
              src={property?.user?.profilePic || "/placeholder.png"} // replace with actual path
              alt="Agent"
              className="object-cover"
              fill
            />
          </div>
          <div>
            <p className="font-semibold max-sm:text-sm text-gray-900">
              {property?.user?.name}
            </p>
            <p className="text-sm text-gray-600">Agent</p>
          </div>
        </div>
      </div>
      {pathname.includes("/detail") && (
        <p className="text-[#6B7280] my-4">5 years experience</p>
      )}
    </>
  );
};

export default RealEstateCardPrice;
