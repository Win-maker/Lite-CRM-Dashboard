import React from "react";
import type { CommonBarChartProps } from "../types.d.ts/Chart.types";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const CommonLineChart: React.FC<CommonBarChartProps> = ({
  title = "Line Chart",
  categories = [],
  series,
  height = 350,
  chartType,
}) => {
  const options: ApexOptions = {
    chart: {
      id: "linechart",
      toolbar: { show: false },
    },
    title: {
      text: title,
      align: "left",
    },
    xaxis: {
      categories,
    },
    dataLabels: {
      enabled: true,
    },
  };
  return (
    <Chart options={options} series={series} type={chartType} height={height} />
  );
};

export default CommonLineChart;
