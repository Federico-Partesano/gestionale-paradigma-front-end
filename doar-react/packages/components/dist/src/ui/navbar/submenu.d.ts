/// <reference types="react" />
import { ISubmenu } from "@doar/shared/types";
interface IProps {
    menu: ISubmenu[];
}
declare const Submenu: ({ menu }: IProps) => JSX.Element;
export default Submenu;
