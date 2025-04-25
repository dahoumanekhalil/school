"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({
  data,
}: {
  data: { name: string; المشغولين: number; المريحين: number }[];
}) => {
  return (
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
  );
};

export default AttendanceChart;
