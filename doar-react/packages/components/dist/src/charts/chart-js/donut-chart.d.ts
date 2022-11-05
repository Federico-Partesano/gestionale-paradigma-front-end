/// <reference types="react" />
export interface IProps {
    data: {
        labels?: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string;
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
declare const DonutChart: {
    ({ data, options, width, height }: IProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
    };
};
export default DonutChart;
