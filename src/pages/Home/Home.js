import React, { useEffect, useState } from "react";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import "./Home.css";
import { recentData } from "../../assets/recentData";
import Chart from "../../components/Chart/Chart";
import DataTable from "../../components/DataTable/DataTable";
import DonutChartCom from "../../components/DonutChartCom/DonutChartCom";

export default function Home() {
  const [summary, setSummary] = useState([]);
  //   fetching test summary data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch("https://mocki.io/v1/e1aa4778-ef28-40cf-a566-1e04b881a3e1")
      .then((res) => res.json())
      .then((data) => {
        setSummary(data);
      });
  };
  const headerKeys = summary.flatMap(Object.keys);
  const uniqueHeaderKeys = [...new Set(headerKeys)];
  return (
    <main className="home">
      <h4 className="home-title">Recent Activities</h4>

      <section className="recent-container">
        {recentData.map((data) => {
          return <RecentUpdates key={data.id} data={data} />;
        })}
      </section>
      <section className="chart-container">
        <div className="donat-chart-div">
          <DonutChartCom summary={summary} />
        </div>
        <div className="chart-div">
          <Chart summary={summary} />
        </div>
      </section>
      <section className="table-container">
        <DataTable summary={summary} uniqueHeaderKeys={uniqueHeaderKeys} />
      </section>
    </main>
  );
}
