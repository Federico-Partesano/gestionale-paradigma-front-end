/// <reference types="react" />
import type { TabsProps } from "react-tabs";
interface ITab extends Omit<TabsProps, "className"> {
    $justified?: boolean;
    $vertical?: boolean;
    $variation?: "line";
}
export declare const StyledTabs: import("styled-components").StyledComponent<({ ...rest }: any) => JSX.Element, any, ITab, never>;
export declare const StyledTabContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
