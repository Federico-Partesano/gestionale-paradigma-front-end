/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    type?: string;
}
declare const Input: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
