/// <reference types="react" />
import { SpaceProps, BorderProps } from "@doar/shared/styled";
declare type TColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export declare const StyledTableResponsive: import("styled-components").StyledComponent<"div", any, {}, never>;
interface ITableProps extends SpaceProps, BorderProps {
    $theadColor?: TColor;
    $striped?: boolean;
    $bordered?: boolean;
    $hover?: boolean;
    $compact?: boolean;
    $color?: TColor;
    $borderless?: boolean;
}
export declare const StyledTable: import("styled-components").StyledComponent<({ border, borderBottomWidth, m, ml, mr, mt, mb, p, pl, pr, pt, pb, ...props }: any) => JSX.Element, any, ITableProps, never>;
export {};
