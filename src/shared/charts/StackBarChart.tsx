import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption, BarSeriesOption } from "echarts";

type StackedBarChartProps = {
  title?: string;
  xAxisData: string[]; // Categories on X-axis
  series: {
    name: string;
    data: number[];
    color?: string;
  }[];
  height?: string;
  width?: string;
  theme?: string;
};

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  title = "Stacked Bar Chart",
  xAxisData,
  series,
  height = "400px",
  width = "100%",
  theme = "light",
}) => {
  // Map series to ECharts BarSeriesOption with stack enabled
  const echartsSeries: BarSeriesOption[] = series.map((s) => ({
    name: s.name,
    type: "bar",
    stack: "total", // this makes bars stack
    data: s.data,
    itemStyle: { color: s.color },
    emphasis: { focus: "series" },
  }));

  const option: EChartsOption = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: "bottom",
    },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
    },
    series: echartsSeries,
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

export default StackedBarChart;
