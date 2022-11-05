/// <reference types="react" />
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
interface IListGroup extends SpaceProps {
    $horizontal?: boolean;
}
export declare const StyledListGroup: import("styled-components").StyledComponent<({ p, px, py, pl, pr, pt, pb, m, mx, my, ml, mr, mt, mb, ...rest }: any) => JSX.Element, any, IListGroup, never>;
interface IListGroupItem extends SpaceProps, FlexboxProps, LayoutProps {
    $active?: boolean;
    $disabled?: boolean;
    $action?: boolean;
    $flush?: boolean;
    $horizontal?: boolean;
}
export declare const StyledListGroupItem: import("styled-components").StyledComponent<({ display, p, px, py, pl, pr, pt, pb, ...rest }: any) => JSX.Element, any, IListGroupItem, never>;
export {};
