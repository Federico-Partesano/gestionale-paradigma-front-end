/// <reference types="react" />
interface IDropMenu {
    children: React.ReactNode;
    show?: boolean;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}
declare const DropdownMenu: {
    ({ children, show, direction, className, ...restProps }: IDropMenu): JSX.Element;
    displayName: string;
};
export default DropdownMenu;
