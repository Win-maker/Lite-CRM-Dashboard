import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption, BarSeriesOption, LineSeriesOption, PieSeriesOption } from "echarts";

type ReusableChartProps = {
  title?: string;
  xAxisData?: string[];
  series: (BarSeriesOption | LineSeriesOption | PieSeriesOption)[];
  height?: string;
  width?: string;
  tooltipTrigger?: "axis" | "item";
  theme?: string;
};

const ReusableChart: React.FC<ReusableChartProps> = ({
  title = "Chart",
  xAxisData = [],
  series,
  height = "400px",
  width = "100%",
  tooltipTrigger = "axis",
  theme = "light",
}) => {
  const option: EChartsOption = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: tooltipTrigger,
    },
    legend: { show: series.length > 1 }, // show legend if multiple series
    xAxis: xAxisData.length > 0 ? { type: "category", data: xAxisData } : undefined,
    yAxis: xAxisData.length > 0 ? { type: "value" } : undefined,
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

export default ReusableChart;
