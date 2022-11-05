/// <reference types="react" />
import { ColorProps, SpaceProps } from "@doar/shared/styled";
interface IProgress extends SpaceProps {
    $height?: string;
    $opacity?: number;
}
export declare const StyledProgress: import("styled-components").StyledComponent<({ m, mb, mt, ml, mr, ...rest }: any) => JSX.Element, any, IProgress, never>;
interface IProgressBar extends ColorProps {
    $width: string;
    $striped?: string;
    $animated?: boolean;
}
export declare const StyledProgressBar: import("styled-components").StyledComponent<({ bg, ...rest }: any) => JSX.Element, any, IProgressBar, never>;
export {};
