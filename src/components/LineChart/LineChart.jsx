import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (historicalData.prices) {
      const formattedData = historicalData.prices.map((item) => [
        new Date(item[0]).toLocaleDateString().slice(0, -5),
        item[1],
      ]);

      const data = [["Date", "Prices"], ...formattedData];
      setChartData(data);
    }
  }, [historicalData]);

  return (
    <Chart
      className="linechart"
      chartType="LineChart"
      data={chartData}
      width="100%"
      height="400px"
      options={{
        backgroundColor: "#1f1e1e",
        legend: { position: "bottom", textStyle: { color: "#FFF" } },
        chartArea: {
          width: "80%",
          height: "70%",
        },
        hAxis: {
          textStyle: {
            color: "white",
          },
        },
        vAxis: {
          textStyle: {
            color: "white",
          },
        },
      }}
    />
  );
};

export default LineChart;
