"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "total",
      count: boys + girls,
      // pv: 2400,
      fill: "#fff",
    },
    {
      name: "girls",
      count: girls,
      // pv: 4567,
      fill: "#00FF84",
    },
    {
      name: "boys",
      count: boys,
      // pv: 1398,
      fill: "#002433",
    },
  ];

  return (
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
  );
};

export default CountChart;
