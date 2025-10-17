import Image from "next/image";

export default function MarketUpdateCard({ title, icon, updates, variant = "card" }) {
  // Conditional container styling
  const containerClass =
    variant === "card"
      ? "bg-white p-4 rounded-lg shadow-sm border border-[#E4E4E4]"
      : "p-0 bg-transparent";

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className={` items-center gap-2 mb-4 ${variant === "plain"? "hidden" : "flex"}`}>
        <Image src={icon} alt={`${title} icon`} width={24} height={24} />
        <h3 className="font-semibold">{title}</h3>
      </div>

      {/* Updates List */}
      <ul className={`text-[14px] font-medium text-gray-600 space-y-4 ${variant === "plain"? "mt-1" : ""}`}>
        {updates.map((update, index) => (
          <li
            key={index}
            className={`leading-[24px] ${
              index !== updates.length - 1 ? "border-b-2 pb-2 border-[#E4E4E4]" : ""
            }`}
          >
            {update.text} <br />
            <span className="text-gray-400">{update.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
