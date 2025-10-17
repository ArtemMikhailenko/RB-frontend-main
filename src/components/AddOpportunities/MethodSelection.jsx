"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function MethodSelection() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const options = [
    {
      id: "simple",
      title: "SIMPLE",
      desc: "Quick and fast method",
      img: "/icons/AddOpportunities/simple.svg",
    },
    {
      id: "advanced",
      title: "ADVANCED",
      desc: "Personalized method",
      img: "/icons/AddOpportunities/advance.svg",
    },
  ];

  const handleNext = () => {
    if (selected === "simple") {
      router.push("/add-opportunities/simple");
    } else if (selected === "advanced") {
      router.push("/add-opportunities/advance");
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative max-sm:mx-4">
      {/* Options */}
      <div className="space-y-3 sm:w-90 w-full ">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`flex items-center gap-3 p-4 rounded-sm border cursor-pointer shadow-sm transition bg-white
              ${selected === option.id ? "border-black " : "border-gray-200 "}`}
          >
            {/* Icon Placeholder */}
            <div className="w-13 h-13 rounded-sm bg-gray-200 flex items-center justify-center">
              {/* Replace with actual icon */}
              <span className="text-gray-400">
                <Image src={option.img} alt={option.id} width={24} height={24} />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm">{option.title}</h3>
              <p className="text-xs text-gray-500">{option.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`mt-6 sm:w-90 w-full max-sm:mx-3 cursor-pointer py-3 rounded bg-black text-white font-medium 
          ${selected ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
        disabled={!selected}
      >
        Next
      </button>
    </div>
  );
}
