/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IModal {
    $show: boolean;
    $size?: "xl" | "lg" | "md" | "sm";
    $centered?: boolean;
}
interface IBackdrop {
    $show: boolean;
}
export declare const StyledBackdrop: import("styled-components").StyledComponent<"div", any, IBackdrop, never>;
export declare const StyledModal: import("styled-components").StyledComponent<"div", any, IModal, never>;
export declare const StyledHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledTitle: import("styled-components").StyledComponent<"h6", any, {}, never>;
export declare const StyledClose: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const StyledBody: import("styled-components").StyledComponent<({ px, py, p, pt, pb, pl, pr, ...rest }: any) => JSX.Element, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
export declare const StyledFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledFooterBetween: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
