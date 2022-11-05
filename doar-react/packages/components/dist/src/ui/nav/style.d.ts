/// <reference types="react" />
import { FlexboxProps, SpaceProps, TypographyProps } from "@doar/shared/styled";
declare type CustomStyle = "classic" | "icon" | "line" | "sidebar" | "aside" | "social" | "with-icon";
interface INav extends FlexboxProps, SpaceProps, TypographyProps {
    $pills?: boolean;
    $align?: "left" | "right" | "center";
    $vertical?: boolean;
    $fill?: boolean;
    $customStyle?: CustomStyle;
}
export declare const StyledNav: import("styled-components").StyledComponent<({ fontSize, fontWeight, fontFamily, justifyContent, alignItems, flexDirection, mb, mt, mx, my, ml, mr, ...rest }: any) => JSX.Element, any, INav, never>;
interface ILink extends SpaceProps, TypographyProps {
    $active?: boolean;
    $customStyle?: CustomStyle;
    $iconPosition?: "left" | "right";
    $iconDistance?: string;
}
export declare const StyledNavLink: import("styled-components").StyledComponent<({ fontSize, fontWeight, fontFamily, mb, mt, mx, my, ml, mr, ...rest }: any) => JSX.Element, any, ILink, never>;
export declare const StyledDivider: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
