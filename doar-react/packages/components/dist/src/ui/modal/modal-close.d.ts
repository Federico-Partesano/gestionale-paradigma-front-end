/// <reference types="react" />
import { IClose } from "./types";
declare const ModalClose: {
    ({ className, children, onClose, ...restProps }: IClose): JSX.Element;
    displayName: string;
};
export default ModalClose;
