import React from "react";
import ReactECharts from "echarts-for-react";

interface Product {
  category: string;
  price: number;
  // other fields
}

interface Props {
  products: Product[];
}

const CategoryDistributionChart: React.FC<Props> = ({ products }) => {
  const categoryCount = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCount);
  const counts = categories.map(cat => categoryCount[cat]);

  const option = {
    tooltip: {},
    xAxis: {
      type: "category",
      data: categories,
      axisLabel: { rotate: 45 },
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: counts,
        itemStyle: { color: "#3b82f6" },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
};

export default CategoryDistributionChart;
