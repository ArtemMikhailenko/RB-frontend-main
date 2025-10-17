import Image from "next/image";

export default function UpcomingEventsCard({ title, events, variant = "card" }) {
  // Conditional container styling
  const containerClass =
    variant === "card"
      ? "bg-white p-4 rounded-lg shadow-sm border border-[#E4E4E4]"
      : "p-0 bg-transparent";

  return (
    <div className={containerClass}>
      <h3 className="font-semibold mb-3">{title}</h3>

      {/* Events List */}
      <div className="text-sm space-y-3">
        {events.map((event, index) => (
          <div key={index} className="flex gap-3 items-center">
            {/* Date Box */}
            <div className="flex flex-col items-center text-center bg-[#E4E4E4] px-2 py-1 text-sm rounded max-h-fit min-w-[50px]">
              <strong>
                <div>{event.date}</div>
                <div className="font-light">{event.month}</div>
              </strong>
            </div>

            {/* Event Details */}
            <div>
              <p>{event.title}</p>
              <div className="text-gray-400 flex items-center gap-1">
                <Image
                  src="/icons/News/Rightsidebar/location.svg"
                  alt="Location icon"
                  width={12}
                  height={15}
                  className="h-[15px] w-[12px]"
                />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
