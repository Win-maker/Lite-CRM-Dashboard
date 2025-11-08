import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption, LineSeriesOption } from "echarts";

type AreaChartProps = {
  title?: string;
  xAxisData: string[]; // e.g., ['Jan', 'Feb', 'Mar']
  series: {
    name: string;
    data: number[];
    color?: string;
    smooth?: boolean;
  }[];
  height?: string;
  width?: string;
  theme?: string;
};

const AreaChart: React.FC<AreaChartProps> = ({
  title = "Area Chart",
  xAxisData,
  series,
  height = "400px",
  width = "100%",
  theme = "light",
}) => {
  // Map series to ECharts LineSeriesOption with areaStyle
  const echartsSeries: LineSeriesOption[] = series.map((s) => ({
    name: s.name,
    type: "line",
    data: s.data,
    smooth: s.smooth ?? true,
    lineStyle: { color: s.color },
    areaStyle: { color: s.color ? s.color + "66" : undefined }, // semi-transparent fill
    symbol: "circle",
    symbolSize: 6,
  }));

  const option: EChartsOption = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: series.length > 1,
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

export default AreaChart;
