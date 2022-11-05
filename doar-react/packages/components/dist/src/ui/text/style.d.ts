import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $tt?: string;
}
export declare const StyledText: import("styled-components").StyledComponent<"p", any, IProps, never>;
export {};
