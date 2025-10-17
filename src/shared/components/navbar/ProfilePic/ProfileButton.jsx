import * as Popover from "@radix-ui/react-popover";
import Card from "../../UserCard/UserCard";
import Image from "next/image";

export default function ProfileDropdown({profile}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className=" md:block hidden">
          <Image
            src={profile?.profilePicUrl || "/default-avatar.png"}
            alt="profile"
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
        </button>
      </Popover.Trigger>

      <Popover.Content
        className="min-w-[220px] bg-white shadow-lg rounded-xl  space-y-1 z-[9999]"
        align="end"
        sideOffset={8}
      >
        <Card />
      </Popover.Content>
    </Popover.Root>
  );
}
