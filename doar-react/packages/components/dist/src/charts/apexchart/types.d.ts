export interface IProps {
    options: {
        [x: string]: unknown;
    };
    series: Array<{
        name?: string;
        data: any[];
    }> | number[];
    width?: string | number;
    height?: string | number;
}
declare type TType = "bar" | "line" | "column" | "area" | "histogram" | "pie" | "donut" | "rangeBar" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "radar" | "polarArea";
export interface IMixChart extends IProps {
    type?: TType;
    series: Array<{
        name?: string;
        data: any[];
        type: TType;
    }>;
}
export {};
