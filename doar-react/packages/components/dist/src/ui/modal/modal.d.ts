/// <reference types="react" />
import { IModal } from "./types";
declare const Modal: {
    ({ className, show, size, centered, children, onClose, ...restProps }: IModal): JSX.Element;
    defaultProps: {
        size: string;
        centered: boolean;
    };
};
export default Modal;
