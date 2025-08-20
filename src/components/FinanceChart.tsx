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
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 2398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 2800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 2908,
  },
  {
    name: "May",
    income: 1890,
    expense: 1800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 2800,
  },
  {
    name: "July",
    income: 2490,
    expense: 3300,
  },
  {
    name: "Aug",
    income: 2690,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 2090,
    expense: 2200,
  },
  {
    name: "Oct",
    income: 2390,
    expense: 2300,
  },
  {
    name: "Nov",
    income: 3090,
    expense: 2810,
  },
  {
    name: "Dec",
    income: 3100,
    expense: 3300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
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
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#FAE27C"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
