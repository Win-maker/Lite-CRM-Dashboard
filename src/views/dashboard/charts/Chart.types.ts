export type ChartCategory = string | number;

export interface CommonChartProps {
    title? : string;
    categories? : ChartCategory [];

    series : {
        name : string;
        data : number [],
    }[];
    height? : number;
    chartType : "bar" | "line" | "area" | "pie" | "donut" ;
}
