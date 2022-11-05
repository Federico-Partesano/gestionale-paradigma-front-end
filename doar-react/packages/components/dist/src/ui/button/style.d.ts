/// <reference types="react" />
import { SpaceProps, LayoutProps, BorderProps, TypographyProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, LayoutProps, BorderProps, TypographyProps {
    $variant?: "contained" | "outlined" | "texted";
    $color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "brand2" | "facebook" | "twitter";
    $size?: "xs" | "sm" | "md" | "lg";
    $shape?: "rounded" | "square" | "ellipse";
    $fullwidth?: boolean;
    $active?: boolean;
    disabled?: boolean;
    $iconButton?: boolean;
    $hasIcon?: boolean;
    $iconPosition?: "left" | "right";
    $iconSize?: "xs" | "sm" | "md";
    $iconSpace?: string;
    $uppercase?: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<({ mt, mb, ml, mr, px, py, display, borderWidth, fontSize, ...props }: any) => JSX.Element, any, IProps, never>;
export declare const StyledLink: import("styled-components").StyledComponent<({ mt, mb, ml, mr, px, py, display, borderWidth, fontSize, ...props }: any) => JSX.Element, any, IProps, never>;
export declare const StyledAnchor: import("styled-components").StyledComponent<({ mt, mb, ml, mr, px, py, display, borderWidth, fontSize, ...props }: any) => JSX.Element, any, IProps, never>;
export {};
