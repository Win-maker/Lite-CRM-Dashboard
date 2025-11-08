import type { ApexOptions } from "apexcharts";
import type { CommonColumnChartProps } from "../types.d.ts/Chart.types";
import Chart from "react-apexcharts";

export const CommonColumnChart: React.FC<
  CommonColumnChartProps & { stacked?: boolean }
> = ({ title = "Column Chart", data, height = 350, stacked = false }) => {
  const options: ApexOptions = {
    chart: {
      id: "common-column",
      type: "bar",
      stacked: stacked, 
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    xaxis: {
      type: "category",
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: title,
      align: "left",
    },
  };

  const series = [
    {
      name: title,
      data: data, // expects array of { x, y, goals? }
    },
  ];

  return <Chart options={options} series={series} type="bar" height={height} />;
};
