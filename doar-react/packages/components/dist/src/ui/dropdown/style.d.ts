/// <reference types="react" />
interface IProps {
    $show?: boolean;
    $direction?: "up" | "down" | "left" | "right";
    $menuWidth?: number;
}
export declare const StyledDropdown: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledDropMenu: import("styled-components").StyledComponent<"div", any, IProps, never>;
export declare const StyledDropItem: import("styled-components").StyledComponent<({ active, ...rest }: any) => JSX.Element, any, {
    active: boolean;
}, never>;
export declare const StyledDropDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
