/// <reference types="react" />
export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            data: number[];
            backgroundColor: string;
            borderColor?: string;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
declare const PieChart: {
    ({ data, options, width, height }: IProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
    };
};
export default PieChart;
