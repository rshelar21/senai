import React, { useState } from "react";
import Chart from "react-apexcharts";

const ChartArea = () => {
  const [charts, setCharts] = useState({
    series: [
      {
        name: "series1",
        data: [20, 22, 25, 25, 26, 27, 30],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <>
      <div id="chart">
        <Chart
          options={charts?.options}
          series={charts?.series}
          type="area"
          width="100%"
          height={180}
        />
      </div>
    </>
  );
};

export default ChartArea;
