/// <reference types="react" />
import { LayoutProps } from "@doar/shared/styled";
interface IProps extends LayoutProps {
    $bg?: string;
    $bdc?: string;
    $color?: string;
    $slColor?: string;
}
export declare const StyledMap: import("styled-components").StyledComponent<({ width, height, ...props }: any) => JSX.Element, any, IProps, never>;
export {};
