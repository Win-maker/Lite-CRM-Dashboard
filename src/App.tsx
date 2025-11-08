import { useInView } from "react-intersection-observer";
import type { BarSeriesOption, LineSeriesOption } from "echarts";
import ReusableChart from "./shared/charts/SaleChart";
import PieChart from "./shared/charts/PieChart";
import AreaChart from "./shared/charts/AreaChart";
import StackedBarChart from "./shared/charts/StackBarChart";
import type { JSX } from "react";
import Dashboard from "./components/Dashboard";
// import { generateChartData } from "./components/data/areaData";

function LazyChart(props: { children: JSX.Element }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return <div ref={ref}>{inView ? props.children : null}</div>;
}

function App() {
  
  // --- Bar + Line Chart ---
  const xAxisData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const series: (BarSeriesOption | LineSeriesOption)[] = [
    {
      name: "Sales",
      type: "bar",
      data: [120, 200, 150, 80, 70, 110, 130],
      itemStyle: { color: "#3b82f6", borderRadius: [5, 5, 0, 0] },
    },
    {
      name: "Revenue",
      type: "line",
      data: [90, 180, 130, 60, 50, 90, 100],
      smooth: true,
      lineStyle: { color: "#f97316" },
    },
  ];

  // --- Pie Chart ---
  const data = [
    { value: 1048, name: "Search Engine" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Ads" },
    { value: 300, name: "Video" },
  ];

  // --- Area Chart ---
  const xAxisDataAreaChart = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const seriesAreaChart = [
    { name: "Visitors", data: [820, 932, 901, 934, 1290, 1330, 1320], color: "#3b82f6" },
    { name: "Sales", data: [620, 732, 701, 734, 1090, 1130, 1020], color: "#f97316" },
  ];

  // --- Stacked Bar Chart ---
  const xAxisDataBarChart = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const seriesBarChart = [
    { name: "Product A", data: [120, 200, 150, 80, 70], color: "#3b82f6" },
    { name: "Product B", data: [60, 80, 70, 50, 40], color: "#f97316" },
    { name: "Product C", data: [30, 50, 40, 30, 20], color: "#10b981" },
  ];

  return (
<div>
      <div style={{ padding: "20px" }} className="flex flex-col gap-4">
      {/* Row 1 */}
      <div className="w-full flex gap-2">
        <div className="w-[50%]">
          <h2>📊 Weekly Performance</h2>
          <LazyChart>
            <ReusableChart title="Sales vs Revenue" xAxisData={xAxisData} series={series} />
          </LazyChart>
        </div>
        <div className="w-[50%]">
          <h2>📊 Weekly Product Sales</h2>
          <LazyChart>
            <StackedBarChart
              title="Product Sales Stacked"
              xAxisData={xAxisDataBarChart}
              series={seriesBarChart}
            />
          </LazyChart>
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full flex gap-2">
        <div className="w-[50%]">
          <h2>📊 Traffic Sources</h2>
          <LazyChart>
            <PieChart title="Website Traffic Sources" data={data} radius="60%" />
          </LazyChart>
        </div>
        <div className="w-[50%]">
          <h2>📈 Website Analytics</h2>
          <LazyChart>
            <AreaChart
              title="Weekly Visitors & Sales"
              xAxisData={xAxisDataAreaChart}
              series={seriesAreaChart}
            />
          </LazyChart>
        </div>
      </div>
    </div>

 <Dashboard/>
</div>
  );
}

export default App;
