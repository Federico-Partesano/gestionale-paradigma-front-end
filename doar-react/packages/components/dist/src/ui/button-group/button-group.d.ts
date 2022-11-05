/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
export interface IProps extends SpaceProps {
    children: React.ReactNode;
    /**
     * Instead of applying button sizing props to every button in a group, just pass `size` to each `BtnGroup`, including each one when nesting multiple groups.
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     */
    vertical?: boolean;
    /**
     * Pass a label to make button group accessible
     */
    label?: string;
    /**
     * Pass extra class names
     */
    className?: string;
}
declare const ButtonGroup: {
    ({ children, size, vertical, label, className, ...restProps }: IProps): JSX.Element;
    defaultProps: {
        label: string;
    };
};
export default ButtonGroup;
