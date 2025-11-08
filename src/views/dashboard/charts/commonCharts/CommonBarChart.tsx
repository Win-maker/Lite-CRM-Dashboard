import React from 'react'
import type {CommonBarChartProps} from "../types.d.ts/Chart.types"
import type { ApexOptions } from 'apexcharts'
import Chart from "react-apexcharts"

const CommonBarChart: React.FC<CommonBarChartProps> = ({
    title="Bar Chart",
    categories=[],
    series,
    height = 350,
    chartType 
}) => {
    const options : ApexOptions = {
        chart : {
            id : "barchart",
            toolbar : {show : false},
        },
        title : {
            text : title,
            align : "left",
        },
        xaxis : {
            categories
        },
        dataLabels : {
            enabled : true
        }
    }
  return <Chart options={options} series={series} type={chartType} height={height}/>
}

export default CommonBarChart
