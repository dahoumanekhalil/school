import Image from "next/image";
import AttendanceChart from "./AttendanceChart";
import prisma from "@/lib/prisma";

const AttendanceChartContainer = async () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  console.log(dayOfWeek);
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  console.log(`daysSinceMonday =  ${daysSinceMonday}`);
  const lastMonday = new Date(today);
  console.log(`lastMonday =  ${lastMonday}`);
  lastMonday.setDate(today.getDate() - daysSinceMonday);
  console.log(
    `lastMonday.setdate today =  ${lastMonday.setDate(
      today.getDate() - daysSinceMonday
    )}`
  );

  const resData = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday,
      },
    },
    select: {
      date: true,
      present: true,
    },
  });
  console.log(resData);

  const daysOfWeek = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"];

  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      الاحد: { present: 0, absent: 0 },
      الاثنين: { present: 0, absent: 0 },
      الثلاثاء: { present: 0, absent: 0 },
      الاربعاء: { present: 0, absent: 0 },
      الخميس: { present: 0, absent: 0 },
    };

  resData.forEach((item) => {
    const itemDate = new Date(item.date);

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const dayDame = daysOfWeek[dayOfWeek - 1];

      if (item.present) {
        attendanceMap[dayDame].present += 1;
      } else {
        attendanceMap[dayDame].absent += 1;
      }
    }
  });
  const data = daysOfWeek.map((day) => ({
    name: day,
    present: attendanceMap[day].present,
    absent: attendanceMap[day].absent,
  }));
  console.log(attendanceMap);
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image
          src="/moreDark.png"
          alt="icon"
          width={20}
          height={20}
          className="cursor-pointer hover:scale-125 transition-all"
        />
      </div>
      <AttendanceChart data={data} />
    </div>
  );
};

export default AttendanceChartContainer;
