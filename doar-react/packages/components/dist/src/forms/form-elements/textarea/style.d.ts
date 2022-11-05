import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { IFeedback, TCustomStyle } from "../types";
interface IInput extends IFeedback, SpaceProps, BorderProps {
    $width?: string | any[];
    $height?: string | any[];
    $customStyle?: TCustomStyle;
}
export declare const StyledTextarea: import("styled-components").StyledComponent<"textarea", any, IInput, never>;
export {};
