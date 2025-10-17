import Image from "next/image";

export default function RecentActivityCard({ activities, variant = "card" }) {
  // Conditional container style
  const containerClass =
    variant === "card"
      ? "bg-white px-4 py-2 rounded-lg shadow-sm border border-[#E4E4E4]"
      : "px-0 py-2 bg-transparent";

  return (
    <div className={containerClass}>
      <div className={variant === "card" ? "mt-3" : ""}>
        <h3 className={`font-semibold mb-3 ${variant === "plain" ? "hidden" : ""}`}>Recent Activity</h3>
        <div className={`"space-y-4 divide-y divide-gray-200 " ${variant === "plain" ? "text-[16px]" : "text-sm "}`}>
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3 pb-3 pt-2">
              <Image
                src={activity.img}
                alt={`Activity ${index + 1}`}
                width={40}
                height={40}
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p>{activity.description}</p>
                <span className="text-gray-400 mt-2 text-xs block">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
