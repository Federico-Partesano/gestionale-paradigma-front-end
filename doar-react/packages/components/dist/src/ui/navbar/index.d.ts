/// <reference types="react" />
import { IMenu } from "@doar/shared/types";
interface IProps {
    menus: IMenu[];
}
declare const Navbar: {
    ({ menus }: IProps): JSX.Element;
    defaultProps: {
        menus: never[];
    };
};
export default Navbar;
