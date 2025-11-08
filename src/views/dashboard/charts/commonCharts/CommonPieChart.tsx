import type { ApexOptions } from "apexcharts";
import type {CommonPieChartProps} from "../types.d.ts/Chart.types"

import Chart from "react-apexcharts";

const CommonPieChart: React.FC<CommonPieChartProps> = ({
  title = "Pine Chart",
  categories = [],
  series,
  height = 350,
  chartType,
}) => {
  const options: ApexOptions = {
    chart: {
      id: "pinechart",
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

export default CommonPieChart;
