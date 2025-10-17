import React from "react";

const Facing = (formData) => {
    const [facing, setFacing] = React.useState("");
  const options = ["North", "South", "East", "West"];
   const [orientation, setOrientation] = React.useState(
      formData.info?.orientation || "North"
    );
  return (
    <>
      <div className="mb-3">
        <div className="w-full border border-gray-300 rounded-lg px-4 py-1 bg-white">
          <label className="text-sm text-gray-500">Facing</label>
          <input
            type="text"
            value={facing}
            onChange={(e) => setFacing(e.target.value)}
            placeholder="Search or choose"
            className=" w-full text-black font-bold placeholder:text-gray-400 outline-none text-sm"
          />
          <datalist id="facing-options">
            {options.map((opt) => (
              <option key={opt} value={opt} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="mb-4 flex gap-2">
        {["North", "East", "South"].map((item) => (
          <button
            type="button"
            key={item}
            className={`bg-[#F2F4F9] md:px-10 px-4  py-1 md:text-sm text-xs border  rounded-md cursor-pointer ${
              orientation === item ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setOrientation(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Facing;
