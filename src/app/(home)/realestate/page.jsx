"use client";
import RealEstateDropDown from "@/components/realestate/LeftSide/RealestateDropDown/DropDown";
import RealEstateServices from "@/components/realestate/RightSide/RealEstateServices";
import { FaTimes } from "react-icons/fa";
import React from "react";
import MobileNavbarToHome from "@/shared/components/navbar/mobilenavbar/MobileNavbarToHome";
import PropertyListSection from "@/components/realestate/LeftSide/PropertyListSection";
import { getProperties } from "@/services/realestateService";

const Page = () => {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);
  const [realesrarePopup, setRealesrarePopup] = React.useState(false);
  const [gridFilter, setGridFilter] = React.useState(false);
  const [filterPopUp, setFilterPopUp] = React.useState(false);

  const [properties, setProperties] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const fetchProperties = async (pageNumber = 1) => {
    setLoading(true);
    const data = await getProperties(pageNumber, 10); // limit = 10
    setProperties(data.items);
    setTotalPages(data.totalPages || 1);
    setSelectedCardIndex(0);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchProperties(page);

    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth animation
    });
  }, [page]);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      {properties.length > 0 ? (
        <>
          <section className="flex gap-3 px-5">
            <PropertyListSection
              data={properties}
              selectedCardIndex={selectedCardIndex}
              handleCardClick={handleCardClick}
              gridFilter={gridFilter}
              setGridFilter={setGridFilter}
              setRealesrarePopup={setRealesrarePopup}
            />
            <div className="h-[90vh] overflow-y-auto fixed w-[47vw] right-0 ml-6 scrollbar-hidden scrollbar-hide lg:block hidden">
              {properties[selectedCardIndex] && (
                <RealEstateServices property={properties[selectedCardIndex]} />
              )}
            </div>

            {realesrarePopup && (
              <div className="fixed inset-0 bg-[#E4E4E4] bg-opacity-50 lg:hidden flex items-center justify-center z-50 scrollbar-hidden overflow-auto">
                <div className="bg-white shadow-lg px-4 w-full relative h-full overflow-y-auto scrollbar-hidden">
                  <MobileNavbarToHome setRealesrarePopup={setRealesrarePopup} />
                  <RealEstateServices
                    property={properties[selectedCardIndex]}
                  />
                </div>
              </div>
            )}
          </section>

          {/* Pagination Section */}
{/* Pagination Section */}
<div className="flex justify-center items-center gap-3 my-6 lg:max-w-[51.5%] w-full">
  <button
    onClick={() => handlePageChange(page - 1)}
    disabled={page === 1}
    className="sm:px-4 sm:py-2 max-sm:text-sm px-2 py-1 rounded-md bg-gray-200 disabled:opacity-50"
  >
    Prev
  </button>

  {/* Page numbers */}
  {(() => {
    const getPageNumbers = () => {
      const maxVisible = 5; // show 5 pages max
      let start = Math.max(1, page - 2);
      let end = Math.min(totalPages, start + maxVisible - 1);

      // Adjust start if we're near the end
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return getPageNumbers().map((num) => (
      <button
        key={num}
        onClick={() => handlePageChange(num)}
        className={`sm:px-4 sm:py-2 max-sm:text-sm px-2 py-1 rounded-md ${
          page === num ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {num}
      </button>
    ));
  })()}

  <button
    onClick={() => handlePageChange(page + 1)}
    disabled={page === totalPages}
    className="sm:px-4 sm:py-2 max-sm:text-sm px-2 py-1 rounded-md bg-gray-200 disabled:opacity-50"
  >
    Next
  </button>
</div>

          {/* Mobile Filter Button */}
          <div
            className="fixed bottom-0 right-0 m-4 p-[8px_16px] bg-black text-white rounded-[16px] shadow-lg flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-sm md:hidden z-40"
            onClick={() => setFilterPopUp(true)}
          >
            <img src="/images/setting-4.png" alt="" /> Filter
          </div>

          {filterPopUp && (
            <div className="md:hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white w-[90%] max-w-[600px] rounded-lg shadow-lg text-center relative h-[90vh] max-h-[95vh] overflow-y-auto border border-[#E4E4E4] pb-4">
                <div className="flex items-center justify-between py-6 px-6 border-b border-[#E4E4E4] bg-[#FBFBFB] mb-3">
                  <h2>Filters</h2>
                  <button
                    className="text-gray-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      setFilterPopUp(false);
                    }}
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <RealEstateDropDown />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full flex justify-center items-center py-10">
          <p className="text-gray-500 text-lg">No properties found.</p>
        </div>
      )}
    </>
  );
};

export default Page;
