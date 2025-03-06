"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    المشغولين: 61,
    المريحين: 51,
  },
  {
    name: "2",
    المشغولين: 73,
    المريحين: 80,
  },
  {
    name: "3",
    المشغولين: 42,
    المريحين: 83,
  },
  {
    name: "4",
    المشغولين: 71,
    المريحين: 24,
  },
  {
    name: "5",
    المشغولين: 12,
    المريحين: 32,
  },
  {
    name: "6",
    المشغولين: 83,
    المريحين: 92,
  },
  {
    name: "7",
    المشغولين: 39,
    المريحين: 57,
  },
];

const AttendanceChart = () => {
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
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "5px", paddingBottom: "20px" }}
          />
          <Bar
            dataKey="المريحين"
            fill="#002433"
            stroke="#00ff84"
            radius={[10, 10, 0, 0]}
            // activeBar={<Rectangle fill="#1087FFcc" stroke="#002433" />}
          />
          <Bar
            dataKey="المشغولين"
            fill="#00FF84"
            stroke="#002433"
            radius={[10, 10, 0, 0]}
            // activeBar={
            //   <Rectangle fill="#1087FF77" stroke="rgb(54, 162, 235)" />
            // }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
