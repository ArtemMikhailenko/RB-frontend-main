const HeaderSection = ({ loading, onSave }) => (
  <div className="flex justify-between items-center mb-6 max-sm:gap-4">
    <div className="sm:text-xl text-sm font-semibold text-gray-800">
      Profile Information
      <div className="sm:text-sm text-sm font-light text-[#636363]">
        Update your account settings and personal information.
      </div>
    </div>
    <button
      onClick={onSave}
      disabled={loading}
      className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 disabled:opacity-50"
    >
      {loading ? "Saving..." : "Save"}
    </button>
  </div>
);

export default HeaderSection;
