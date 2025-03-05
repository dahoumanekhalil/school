"use client";

import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Page A",
    N_users: 23,
    pv: 2400,
    amt: 2400,
  },
  {
    month: "Page B",
    N_users: 34,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "Page C",
    N_users: 29,
    pv: 9800,
    amt: 2290,
  },
  {
    month: "Page D",
    N_users: 41,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "Page E",
    N_users: 37,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "Page F",
    N_users: 51,
    pv: 3800,
    amt: 2500,
  },
  {
    month: "Page G",
    N_users: 26,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Page G",
    N_users: 45,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Page G",
    N_users: 31,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Page G",
    N_users: 48,
    pv: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance chart</h1>
        <Image src="/moreDark.png" alt="icon" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tick={{ fill: "#AAA" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#AAA" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "10px" }}
          />
          {/* <Line 
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          <Line
            type="monotone"
            dataKey="N_users"
            stroke="#82ca9d"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
