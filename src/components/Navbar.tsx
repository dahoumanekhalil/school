import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();
  // const role

  return (
    <div className="flex items-center justify-between p-4 border-b-2 border-gray-300">
      {/* left Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* right */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="icon" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="icon" width={20} height={20} />
          <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#00ff84] text-[#002433] font-bold text-xs rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            dahoumane khalil
          </span>
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata.role as string}
          </span>
        </div>
        {/* <Image
          src="/avatar.png"
          alt="icon"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
