/// <reference types="react" />
import { ICircleProps } from "./types";
declare const LeafletCircle: {
    ({ lat, lng, radius, stroke, color, weight, opacity, lineCap, lineJoin, dashArray, dashOffset, fill, fillColor, fillOpacity, fillRule, }: ICircleProps): JSX.Element;
    defaultProps: {
        radius: number;
        stroke: boolean;
        color: string;
        weight: number;
        opacity: number;
        lineCap: string;
        lineJoin: string;
        fill: boolean;
        fillColor: string;
        fillOpacity: number;
        fillRule: string;
    };
};
export default LeafletCircle;
