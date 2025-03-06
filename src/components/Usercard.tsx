import Image from "next/image";

const Usercard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-[#002433] odd:text-[#00FF84] even:bg-[#00FF84] even:text-[#002433] p-4 w-full flex-1 min-w-[130px]">
      <div className="flex justify-between items-center ">
        <div className="text-[10px] bg-white px-2 rounded-full ">
          <span className="">2025/03</span>
        </div>
        <Image src="/more.png" alt="icon" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 odd:text-whitetext-white">
        1,234
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default Usercard;
