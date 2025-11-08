
interface ApiResponseItem {
  category: string;
  sales: number;
  revenue: number;
  target: number;
}


const apiResponse: ApiResponseItem[] = [
  { category: "Jan", sales: 30, revenue: 20, target: 25 },
  { category: "Feb", sales: 40, revenue: 30, target: 35 },
  { category: "Mar", sales: 45, revenue: 35, target: 40 },
  { category: "Apr", sales: 50, revenue: 40, target: 45 },
  { category: "May", sales: 55, revenue: 45, target: 50 },
  { category: "Jun", sales: 60, revenue: 50, target: 55 },
  { category: "Jul", sales: 65, revenue: 55, target: 60 },
  { category: "Aug", sales: 70, revenue: 60, target: 65 },
  { category: "Sep", sales: 75, revenue: 65, target: 70 },
  { category: "Oct", sales: 80, revenue: 70, target: 75 },
  { category: "Nov", sales: 85, revenue: 75, target: 80 },
  { category: "Dec", sales: 90, revenue: 80, target: 85 },
];


// --- Utility functions ---
function mapToBarSeries(data: ApiResponseItem[], valueKey: keyof ApiResponseItem, name: string) {
  return [{ name, data: data.map(item => item[valueKey] as number) }];
}

function mapToCategories(data: ApiResponseItem[], categoryKey: keyof ApiResponseItem) {
  return data.map(item => item[categoryKey] as string);
}

function mapToPieSeries(data: ApiResponseItem[], valueKey: keyof ApiResponseItem) {
  return data.map(item => item[valueKey] as number);
}

function mapToColumnWithGoals(data: ApiResponseItem[], valueKey: keyof ApiResponseItem, goalKey: keyof ApiResponseItem) {
  return data.map(item => ({
    x: item.category,
    y: item[valueKey] as number,
    goals: [
      {
        name: "Target",
        value: item[goalKey] as number,
        strokeColor: "#FF4560",
      },
    ],
  }));
}


export const categories = mapToCategories(apiResponse, "category");
export const barSeries = mapToBarSeries(apiResponse, "sales", "Sales");
export const lineSeries = mapToBarSeries(apiResponse, "revenue", "Revenue");
export const stackedColumnSeries = [
  { name: "Sales", data: apiResponse.map(item => item.sales) },
  { name: "Revenue", data: apiResponse.map(item => item.revenue) },
];
export const pieSeries = mapToPieSeries(apiResponse, "sales");
export const columnData = mapToColumnWithGoals(apiResponse, "sales", "target");
