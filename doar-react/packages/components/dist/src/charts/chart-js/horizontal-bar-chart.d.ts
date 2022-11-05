/// <reference types="react" />
export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
declare const HorizontalBarChart: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<any>>;
export default HorizontalBarChart;
