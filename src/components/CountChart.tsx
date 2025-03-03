"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 100,
    // pv: 2400,
    fill: "#fff",
  },
  {
    name: "girls",
    count: 55,
    // pv: 4567,
    fill: "#FAE27C",
  },
  {
    name: "boys",
    count: 45,
    // pv: 1398,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">title chart</h1>
        <Image src="/moreDark.png" alt="icon" width={20} height={20} />
      </div>
      {/* charts  */}
      <div className="relative  w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            {/* <Lege nd iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        />
      </div>
      {/* bottom  */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-beproGreen rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300 ">boys (45%)</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-beproYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300 ">girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
