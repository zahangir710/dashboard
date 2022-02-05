import React from "react";
import "./DoughnutChartCom.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChartCom({ summary }) {
  let result = summary.map((data) => data.num_taps);
  let labels = summary.map((data) => data.device);
  console.log(result);
  const data = {
    labels: labels,
    datasets: [
      {
        data: result,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "steelblue",
          "tomato",
          "gray",
        ],
      },
    ],
  };
  return (
    <div className="doughnut-chart">
      <h4 className="doughnut-title">Number of taps on each devices</h4>
      <Doughnut data={data} />
    </div>
  );
}
