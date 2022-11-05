/// <reference types="react" />
import { IMenu } from "@doar/shared/types";
interface IProps {
    menus: IMenu[];
}
declare const NavbarAside: {
    ({ menus }: IProps): JSX.Element;
    defaultProps: {
        menus: never[];
    };
};
export default NavbarAside;
