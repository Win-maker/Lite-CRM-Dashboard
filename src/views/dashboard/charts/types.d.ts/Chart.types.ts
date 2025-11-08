export type ChartCategory = string | number;

export type ChartType = "bar" | "line" | "area" | "pie" | "donut";

//  For Bar Chart And Line Chart
export interface CommonBarChartProps {
  title?: string;
  categories?: ChartCategory[];

  series: {
    name: string;
    data: number[];
  }[];
  height?: number;
  chartType: ChartType;
}

// For Pie Chart
export interface CommonPieChartProps {
  title?: string;
  categories?: ChartCategory[];

  series: number[];

  height?: number;
  chartType: ChartType;
}

// For Column Chart
export type ChartDataPoint = { x: string | number; y: number };

export interface CommonColumnChartProps {
  title?: string;
  data: ChartDataPoint[];
  height?: number;
}
