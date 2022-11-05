/// <reference types="react" />
import { SpaceProps, LayoutProps, FlexboxProps } from "@doar/shared/styled";
interface ImageProps extends SpaceProps, LayoutProps {
    $shape?: "rounded" | "circle" | "thumbnail";
    $fluid?: boolean;
    $align?: "left" | "right";
    $fit?: "cover" | "contain";
}
export declare const StyledImage: import("styled-components").StyledComponent<({ m, mx, my, ml, mr, mt, mb, maxWidth, maxHeight, width, height, display, ...rest }: any) => JSX.Element, any, ImageProps, never>;
interface IGroup extends FlexboxProps, SpaceProps {
    $size?: "sm";
}
export declare const StyledGroup: import("styled-components").StyledComponent<({ mb, alignItems, justifyContent, ...rest }: any) => JSX.Element, any, IGroup, never>;
export {};
