/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    children: React.ReactNode;
}
declare const Select: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLSelectElement>>;
export default Select;
