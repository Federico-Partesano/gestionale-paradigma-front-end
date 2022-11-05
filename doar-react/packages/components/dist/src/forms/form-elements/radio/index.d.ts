/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    checked?: boolean;
    label: string;
}
declare const Radio: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLInputElement>>;
export default Radio;
