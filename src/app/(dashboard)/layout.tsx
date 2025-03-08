import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex">
      {/* left side */}
      <div className="w-[14%] md:w-[14%] lg:w-[18] xl:w-[14] p-0 hide-scrollbar overflow-y-auto overflow-x-hidden">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-[#002433]">
            bepro
          </span>
        </Link>
        <Menu />
      </div>

      {/* rigt side */}
      <div className="w-[86%] md:w-[86%] lg:w-[82] xl:w-[86] bg-[#f7f8fa] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
