import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Importing sample data from utils/constants


export default function SameDataComposedChart({ data }) {
  // Use the provided data if available, otherwise, use the sampleData
  const chartData = data ? data : [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  return (

    <ResponsiveContainer width="100%" height={300} >
      <ComposedChart data={chartData} >
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" barSize={20} fill="#E8AA33" />
        <Line type="monotone" dataKey="uv" stroke="#fff" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
