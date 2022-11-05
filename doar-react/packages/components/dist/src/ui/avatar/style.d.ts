/// <reference types="react" />
import { LayoutProps, ColorProps, TypographyProps, SpaceProps } from "@doar/shared/styled";
interface IProps extends LayoutProps, SpaceProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    $shape?: "circle" | "rounded" | "square";
    $initialText?: boolean;
    $status?: "online" | "offline";
}
export declare const StyledAvatar: import("styled-components").StyledComponent<({ display, mr, ...rest }: any) => JSX.Element, any, IProps, never>;
interface IAvatarText extends ColorProps, TypographyProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}
export declare const StyledInitialText: import("styled-components").StyledComponent<({ color, bg, opacity, fontWeight, ...rest }: any) => JSX.Element, any, IAvatarText, never>;
export {};
