import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const ProfileStudentPage = () => {
  return (
    <div className="flex p-4 flex-1 flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info card  */}
          <div className="bg-beproSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/khalil.png"
                alt="image profile"
                height={144}
                width={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Beatrice Frazier</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>2025 january</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>pi@ju.ge</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+213 (550) 597-109</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">5</h1>
                <span className="text-sm text-gray-400">grade</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">12</h1>
                <span className="text-sm text-gray-400">lessons</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">class</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom  */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-beproSky hover:bg-beproGreen transition-all hover:scale-110"
              href={`/list/lessons?classId=${2}`}
            >
              student lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-beproSky hover:bg-beproGreen transition-all hover:scale-110"
              href={`/list/teachers?classId=${2}`}
            >
              student&apos;s teacher
            </Link>
            <Link
              className="p-3 rounded-md bg-beproSky hover:bg-beproGreen transition-all hover:scale-110"
              href={`/list/results?studentId=${"student2"}`}
            >
              student results
            </Link>
            <Link
              className="p-3 rounded-md bg-beproSky hover:bg-beproGreen transition-all hover:scale-110"
              href={`/list/exams?classId=${2}`}
            >
              student exams
            </Link>
            <Link
              className="p-3 rounded-md bg-beproSky hover:bg-beproGreen transition-all hover:scale-110"
              href={`/list/assignments?classId=${2}`}
            >
              student assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default ProfileStudentPage;
