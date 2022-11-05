import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { IFeedback, TCustomStyle } from "../types";
interface IInput extends IFeedback, SpaceProps, BorderProps {
    $width?: string | any[];
    $height?: string | any[];
    $customStyle?: TCustomStyle;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, IInput, never>;
export {};
