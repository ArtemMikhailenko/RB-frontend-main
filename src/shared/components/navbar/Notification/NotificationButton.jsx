import * as Popover from "@radix-ui/react-popover";
import Card from "../../UserCard/UserCard";
import Image from "next/image";
import NotificationsPopup from "@/shared/Popups/NotificationsPopup";

export default function NotificationDropdown() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button>
          <Image
            src="/icons/navbar/bell.svg"
            alt="notification"
            width={24}
            height={24}
            className="w-[24px] h-[24px] rounded-full"
          />
        </button>
      </Popover.Trigger>

      <Popover.Content
        className="min-w-[220px] bg-white shadow-lg rounded-xl  space-y-1 z-[9999]"
        align="end"
        sideOffset={8}
      >
        <NotificationsPopup/>
      </Popover.Content>
    </Popover.Root>
  );
}
