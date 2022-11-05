/// <reference types="react" />
interface DropdownProps {
    children: React.ReactNode;
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    className?: string;
}
declare const Dropdown: {
    ({ children, direction, className, ...restProps }: DropdownProps): JSX.Element;
    defaultProps: {
        direction: string;
    };
};
export default Dropdown;
