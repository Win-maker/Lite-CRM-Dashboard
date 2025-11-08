// Generate labels and data for charts
export const generateChartData = (points: number = 10) => {
  const xAxisData: string[] = [];
  const data1: number[] = [];
  const data2: number[] = [];

  for (let i = 1; i <= points; i++) {
    xAxisData.push(`Item ${i}`);
    data1.push(Math.floor(Math.random() * 10)); 
    data2.push(Math.floor(Math.random() * 10)); 
  }

  return { xAxisData, data1, data2 };
};
