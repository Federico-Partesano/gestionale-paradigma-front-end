/// <reference types="react" />
import { IInputProps } from "../types";
interface IProps extends IInputProps {
    rows?: number;
}
declare const Textarea: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
