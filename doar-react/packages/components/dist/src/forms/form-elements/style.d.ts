import { SpaceProps, BorderProps, LayoutProps } from "@doar/shared/styled";
import { IFeedback, TCustomStyle } from "./types";
interface IInput extends IFeedback, SpaceProps, BorderProps, LayoutProps {
    $width?: string | any[];
    $height?: string | any[];
    $customStyle?: TCustomStyle;
}
export declare const InputStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<IInput, any>>;
export declare const SuccessInputStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const WarningInputStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const ErrorInputStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const allowedProps: string[];
interface IProps extends BorderProps, SpaceProps {
}
export declare const StyledBoxWrap: import("styled-components").StyledComponent<"div", any, IProps, never>;
export {};
