"use client"
import React from "react";
import ExportPopup from "../PopUps/ExportPopup";
import Link from "next/link";
import Image from "next/image";

const ManageLeadsMainContainer = ({
  handleRowSelect,
  selectedRows,
  handleSelectAll,
  selectAll,
  listings
}) => {
  const [editPopup, setEditPopup] = React.useState(false);
  const [activeRow, setActiveRow] = React.useState(null); // track which row's popup is open
  const popupRef = React.useRef();

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5; // Number of rows per page
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Slice listings for current page
  const paginatedListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Close popup on click outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveRow(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePopupToggle = (index) => {
    if (activeRow === index) {
      setActiveRow(null); // close if same row clicked again
    } else {
      setActiveRow(index); // open for clicked row
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setActiveRow(null); // close popup if open
    }
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxPageButtons = 3; // Number of pages to show around current

    if (totalPages <= 5) {
      // Show all pages if few
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= maxPageButtons) {
        for (let i = 1; i <= maxPageButtons; i++) pages.push(i);
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - maxPageButtons + 1) {
        pages.push(1, "...");
        for (let i = totalPages - maxPageButtons + 1; i <= totalPages; i++)
          pages.push(i);
      } else {
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-black text-white text-left rounded-md">
            <th className="px-2 py-3 font-medium rounded-tl-md">
              <input
                type="checkbox"
                className="sm:mr-2 mr-3 appearance-none w-4 h-4 border border-white rounded-sm bg-black checked:bg-white checked:border-black relative 
                before:content-['✔'] before:absolute before:text-black before:left-[2px] before:top-[-2px] before:text-xs before:hidden 
                checked:before:block"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              Picture
            </th>
            <th className="px-2 py-3 font-medium">REF</th>
            <th className="px-2 py-3 font-medium">Date</th>
            <th className="px-2 py-3 font-medium">Beds</th>
            <th className="px-2 py-3 font-medium">Bath</th>
            <th className="px-2 py-3 font-medium">m2</th>
            <th className="px-2 py-3 font-medium">Price</th>
            <th className="px-2 py-3 font-medium">Live</th>
            <th className="px-2 py-3 font-medium rounded-tr-md">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 bg-white">
          {paginatedListings.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-2 py-3 min-w-[130px]">
                <input
                  type="checkbox"
                  className="sm:mr-2 mr-3 appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-white checked:bg-black checked:border-black relative 
                  before:content-['✔'] before:absolute before:text-white before:left-[2px] before:top-[-2px] before:text-xs before:hidden 
                  checked:before:block"
                  checked={selectedRows.includes(index) ? true : false}
                  onChange={() => handleRowSelect(index)}
                />
                <Image
                  src={item.picture}
                  alt="House"
                  height={40}
                  width={72}
                  className="inline-block sm:w-20 sm:h-12 w-18 h-10 object-cover rounded-md"
                />
              </td>
              <td className="px-2 py-3">
                <div className="font-medium max-sm:text-[13px] text-gray-900">{item.ref}</div>
                <div className="sm:text-sm text-[12px] text-gray-500">{item.type}</div>
              </td>
              <td className="px-2 py-3">
                <div>{item.date}</div>
                <div className="text-xs text-gray-500">{item.postedAgo}</div>
              </td>
              <td className="px-2 py-3">{item.beds}</td>
              <td className="px-2 py-3">{item.baths}</td>
              <td className="px-2 py-3">{item.size}</td>
              <td className="px-2 py-3">
                <div>{item.price}</div>
                <div className="text-xs text-gray-500">Appraisal</div>
              </td>
              <td className="px-2 py-3">{item.live}</td>
              <td className="px-4 py-2 relative">
                <Image
                  src={item.Action}
                  alt="three dot"
                  width={28}
                  height={28}
                  onClick={() => handlePopupToggle(index)}
                />
                {/* Popup Card */}
                {activeRow === index && (
                  <div
                    ref={popupRef}
                    className="absolute z-10 mt-2 right-2 bg-white border border-gray-200 rounded-md shadow-lg w-32"
                  >
                    <button
                      className="w-full px-4 py-2 text-left text-sm"
                      onClick={() => setEditPopup(true)}
                    >
                      Export
                    </button>
                    <Link
                      href="/managelisting/edit"
                      className="w-full px-4 py-2 text-left text-sm"
                    >
                      Edit
                    </Link>
                    <button className="w-full px-4 py-2 text-left text-sm">
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          &lt; Prev
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 text-gray-400 select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                currentPage === page
                  ? "bg-gray-800 text-white border-gray-800 font-semibold"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Next &gt;
        </button>
      </div>

      {editPopup && <ExportPopup setEditPopup={setEditPopup} />}
    </div>
  );
};

export default ManageLeadsMainContainer;
