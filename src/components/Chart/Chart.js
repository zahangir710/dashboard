import React from "react";
import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ summary }) {
  return (
    <div className="chart">
      <h3 className="chart-title">Test Analytics - Duration</h3>
      <ResponsiveContainer width="99%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={summary}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="device" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="duration"
            stroke="#194c8f"
            fill="#194c8f"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
