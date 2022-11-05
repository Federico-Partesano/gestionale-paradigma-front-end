/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    $size?: "xs" | "sm" | "md" | "lg";
    $vertical?: boolean;
}
export declare const StyledGroup: import("styled-components").StyledComponent<({ m, ml, mr, mt, mb, ...rest }: any) => JSX.Element, any, IProps, never>;
export declare const StyledButtonToolbar: import("styled-components").StyledComponent<({ m, ml, mr, mt, mb, ...rest }: any) => JSX.Element, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
export {};
