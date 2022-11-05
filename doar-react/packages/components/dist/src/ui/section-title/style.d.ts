/// <reference types="react" />
import { TypographyProps } from "@doar/shared/styled";
interface ITitle extends TypographyProps {
    $hasDesc?: boolean;
}
export declare const StyledTitle: import("styled-components").StyledComponent<"h6", any, ITitle, never>;
export declare const StyledDesc: import("styled-components").StyledComponent<({ fontSize, ...rest }: any) => JSX.Element, any, TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;
export {};
