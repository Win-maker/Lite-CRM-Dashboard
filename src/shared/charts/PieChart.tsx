import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption, PieSeriesOption } from "echarts";

// Props for reusable pie chart
type PieChartProps = {
  title?: string;
  data: { value: number; name: string }[]; // Pie chart data
  radius?: string | string[]; // Pie radius
  height?: string;
  width?: string;
  theme?: string;
};

const PieChart: React.FC<PieChartProps> = ({
  title = "Pie Chart",
  data,
  radius = "50%",
  height = "400px",
  width = "100%",
  theme = "light",
}) => {
  const series: PieSeriesOption[] = [
    {
      name: title,
      type: "pie",
      radius,
      data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        formatter: "{b}: {d}%", // show percentage
      },
    },
  ];

  const option: EChartsOption = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series,
  };

  return (
    <ReactECharts
      option={option}
      style={{ height, width }}
      notMerge={true}
      lazyUpdate={true}
      theme={theme}
    />
  );
};

export default PieChart;
