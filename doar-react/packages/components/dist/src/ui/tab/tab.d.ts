/// <reference types="react" />
import { Tab, TabPanel, TabList } from "react-tabs";
import type { TabsProps } from "react-tabs";
interface IProps {
    className?: string;
    children: React.ReactNode;
}
interface ITab extends TabsProps {
    justified?: boolean;
    vertical?: boolean;
    variation?: "line";
}
export declare const TabWrap: ({ className, children, justified, vertical, variation, defaultFocus, defaultIndex, disabledTabClassName, domRef, forceRenderTabPanel, onSelect, selectedIndex, selectedTabClassName, selectedTabPanelClassName, }: ITab) => JSX.Element;
export declare const TabContent: ({ className, children }: IProps) => JSX.Element;
export { Tab, TabPanel, TabList };
