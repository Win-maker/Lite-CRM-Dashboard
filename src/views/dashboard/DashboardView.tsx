import CommonBarChart from "./charts/commonCharts/CommonBarChart";
import { CommonColumnChart } from "./charts/commonCharts/CommonColumnChart";
import CommonLineChart from "./charts/commonCharts/CommonLineChart";
import CommonPieChart from "./charts/commonCharts/CommonPieChart";
import {
  categories,
  barSeries,
  lineSeries,
  columnData,
  pieSeries,
} from "../../helper/index";

const DashboardView = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center text-white p-4"
      style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)" }}
    >
      <div
        className="w-[80%] h-[80%] rounded-t-4xl py-10 px-4 flex flex-col gap-6
                border"
      >
        <div className="flex gap-6">
          <div className="flex-1 bg-white/70 backdrop-blur-lg p-4 rounded-xl">
            <CommonBarChart
              title="Sales Bar Chart"
              categories={categories}
              series={barSeries}
              chartType="bar"
            />
          </div>

          <div className="flex-1 bg-white/70 backdrop-blur-lg p-4 rounded-xl">
            <CommonColumnChart
              title="Sales vs Target"
              data={columnData}
              height={350}
              stacked={false}
            />
          </div>
        </div>

        <div className="flex  gap-6">
          <div className="flex-1 bg-white/70 backdrop-blur-lg p-4 rounded-xl">
            <CommonLineChart
              title="Revenue Line Chart"
              categories={categories}
              series={lineSeries}
              chartType="line"
            />
          </div>

          <div className="flex-1 bg-white/70 backdrop-blur-lg p-4 rounded-xl">
            <CommonPieChart
              title="Market Share Pie Chart"
              series={pieSeries}
              chartType="pie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
