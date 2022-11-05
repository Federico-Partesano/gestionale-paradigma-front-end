/// <reference types="react" />
import { IMegamenu } from "@doar/shared/types";
interface IProps {
    menu: IMegamenu[];
    onClick: (e: React.MouseEvent, hasChildren: boolean) => void;
    hasChildren: boolean;
}
declare const Megamenu: ({ menu, onClick, hasChildren }: IProps) => JSX.Element;
export default Megamenu;
