/// <reference types="react" />
import { LayoutProps } from "@doar/shared/styled";
export interface VectorMapLayer {
    /** Unique ID of each layer. */
    id: string;
    /** Name of the layer. */
    name: string;
    /** SVG path for the layer. */
    d: string;
}
export interface VectorMapProps {
    /** Unique ID of the SVG element. */
    id: string;
    /** Name of the map. */
    name: string;
    /** View box for the map. */
    viewBox: string;
    /** Layers that represent the regions of the map. */
    layers: VectorMapLayer[];
    /** Tab index for each layer. Set to '-1' to disable layer focusing. */
    tabIndex?: number;
    /** Props to spread onto each layer. */
    layerProps?: any;
    /** Layer IDs to 'select' with the 'aria-checked' attribute. */
    checkedLayers?: string[];
    /** Layer IDs to 'select' with the 'aria-current' attribute. */
    currentLayers?: string[];
}
interface IProps extends LayoutProps {
    /**
     * Map's Background Color. Default color is `#fff`
     */
    backgroundColor?: string;
    /**
     * Map's Border Color. Default color is `transparent`
     */
    borderColor?: string;
    /**
     * Map's Border Color. Default color is `#8392a5`
     */
    color?: string;
    /**
     * Layer IDs to 'select' with the 'aria-checked' attribute.
     */
    checkedLayers?: string[];
    /**
     * Selected Layer's Color. Default color is `rgba(56, 43, 168, 1)`
     */
    selectedColor?: string;
    /**
     * Pass `true` to enable tooltip
     */
    tooltip?: boolean;
    /**
     * Map's JSON Data. `https://react-vector-maps.netlify.app/maps` visit this link to get your desired data. Default is `World Low Res`
     */
    data: VectorMapProps;
}
declare const VectorMap: {
    ({ width, height, backgroundColor, borderColor, color, checkedLayers, selectedColor, tooltip, data, }: IProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
        borderColor: string;
        color: string;
        selectedColor: string;
        width: string;
        height: string;
        tooltip: boolean;
    };
};
export default VectorMap;
