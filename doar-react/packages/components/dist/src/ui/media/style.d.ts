/// <reference types="react" />
import { SpaceProps, LayoutProps, FlexboxProps } from "@doar/shared/styled";
interface IMedia extends SpaceProps, FlexboxProps, LayoutProps {
    $el: string;
}
export declare const StyledMedia: import("styled-components").StyledComponent<({ m, ml, mr, mt, mb, display, alignItems, $el, ...props }: any) => JSX.Element, any, IMedia, never>;
interface IMediaLeft extends SpaceProps, LayoutProps {
}
export declare const StyledMediaLeft: import("styled-components").StyledComponent<({ width, mr, ml, ...props }: any) => JSX.Element, any, IMediaLeft, never>;
export declare const StyledMediaBody: import("styled-components").StyledComponent<({ width, m, mr, ml, mt, mb, px, ...props }: any) => JSX.Element, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
export {};
