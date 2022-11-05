/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
export declare const StyledInputGroup: import("styled-components").StyledComponent<({ mb, ...rest }: any) => JSX.Element, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
interface IWrap extends SpaceProps {
    $dir?: "append" | "prepend";
}
export declare const StyledInputGroupWrap: import("styled-components").StyledComponent<({ mb, ...rest }: any) => JSX.Element, any, IWrap, never>;
export declare const StyledInputGroupText: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
