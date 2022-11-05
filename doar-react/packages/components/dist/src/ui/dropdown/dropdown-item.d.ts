/// <reference types="react" />
interface IDropItem {
    children: React.ReactNode;
    path: string;
    className?: string;
    active?: boolean;
}
declare const DropdownItem: ({ children, path, className, active }: IDropItem) => JSX.Element;
export default DropdownItem;
