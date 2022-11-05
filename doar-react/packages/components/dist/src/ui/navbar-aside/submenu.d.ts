/// <reference types="react" />
import { ISubmenu } from "@doar/shared/types";
interface IProps {
    menu: ISubmenu[];
    className?: string;
}
declare const Submenu: ({ menu, className }: IProps) => JSX.Element;
export default Submenu;
