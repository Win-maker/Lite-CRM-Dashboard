import React from "react";
import ReactECharts from "echarts-for-react";

interface Product {
  price: number;
  // other fields
}

interface Props {
  products: Product[];
}

const PriceHistogramChart: React.FC<Props> = ({ products }) => {
  // e.g. bucket prices
  const buckets: Record<string, number> = {};
  const bucketSize = 50;
  products.forEach(p => {
    const bucket = `${Math.floor(p.price / bucketSize) * bucketSize}‑${Math.floor(p.price / bucketSize) * bucketSize + bucketSize - 1}`;
    buckets[bucket] = (buckets[bucket] || 0) + 1;
  });
  const categories = Object.keys(buckets);
  const values = categories.map(cat => buckets[cat]);

  const option = {
    tooltip: {},
    xAxis: { type: "category", data: categories },
    yAxis: { type: "value" },
    series: [
      { type: "bar", data: values, itemStyle: { color: "#f97316" } }
    ]
  };

  return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
};

export default PriceHistogramChart;
