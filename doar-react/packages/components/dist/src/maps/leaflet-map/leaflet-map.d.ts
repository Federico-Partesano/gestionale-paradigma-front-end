/// <reference types="react" />
import { IProps } from "./types";
declare const LeafletMap: {
    ({ width, height, lat, lng, zoom, scrollWheelZoom, children, }: IProps): JSX.Element;
    defaultProps: {
        lat: number;
        lng: number;
        zoom: number;
        scrollWheelZoom: boolean;
        width: string;
        height: string;
    };
};
export default LeafletMap;
