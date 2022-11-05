/// <reference types="react" />
import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $variant?: "link1" | "link2" | "link3";
}
export declare const StyledLink: import("styled-components").StyledComponent<({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, width, height, display, ...rest }: any) => JSX.Element, any, IProps, never>;
export declare const StyledAnchor: import("styled-components").StyledComponent<({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, width, height, display, ...rest }: any) => JSX.Element, any, IProps, never>;
export {};
