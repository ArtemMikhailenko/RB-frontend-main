import Image from "next/image";
import Link from "next/link";
import React from "react";

const DropdownButton = ({ searchActive }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [secondIsOpen, setSecondIsOpen] = React.useState(false);
  const fileInputRef = React.useRef(null);

  const handleImportClick = () => {
    // Open file dialog
    fileInputRef.current.click();
    // Close dropdown
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Here you can handle uploading or processing the file
    }
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <div className=" items-center justify-between bg-black text-white px-6 py-2 rounded-md cursor-pointer lg:flex hidden text-sm">
        <Link href="/createrealestate">New real estate</Link> &nbsp;|
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Flipped Arrow */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-9 top-9 mt-1 w-fit m-auto bg-gray-200 rounded-md shadow-md">
          <div
            className="px-8 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer"
            onClick={handleImportClick}
          >
            Import
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className={`relative ${searchActive ? "max-sm:hidden" : ""}`}>
        {/* Trigger icon */}
        <Image
          src="/icons/Navbar/plus.svg"
          alt="plus"
          width={24}
          height={24}
          onClick={() => setSecondIsOpen(!secondIsOpen)}
          className="lg:hidden block cursor-pointer"
        />

        {/* Dropdown */}
        {secondIsOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-10px mt-2 bg-white rounded-md  z-50 px-4 py-2 w-[150px] divide-y divide-gray-300 space-y-2 shadow-xl">
            <div className="text-sm pb-2">Add real estate</div>
            <div
              className=" text-black hover:bg-gray-300 rounded-md cursor-pointer whitespace-nowrap text-sm"
              onClick={handleImportClick}
            >
              Import
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
