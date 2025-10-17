import Image from "next/image";

const PersonalInformation = ({ formData, profileImage, onChange, onImageChange }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <h2 className="text-sm font-bold text-[#15171C] mb-3">PERSONAL INFORMATION</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="text-[#343434] text-[14px] font-medium">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          type="text"
          placeholder="Enter first name"
          className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="text-[#343434] text-[14px] font-medium">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          type="text"
          placeholder="Enter last name"
          className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
        />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Image
        src={profileImage || "/images/default-profile.png"}
        alt="Profile"
        width={60}
        height={56}
        className="rounded-full object-cover"
      />
      <div>
        <label
          htmlFor="profileImageInput"
          className="px-3 py-2 text-[13px] font-medium rounded-lg bg-[#F0F0F0] text-[#343434] hover:bg-gray-100 cursor-pointer"
        >
          Change Image
        </label>
        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
        />
      </div>
    </div>
  </div>
);

export default PersonalInformation;
