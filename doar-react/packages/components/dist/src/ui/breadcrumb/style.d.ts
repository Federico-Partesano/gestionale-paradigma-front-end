/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
export declare const StyledNav: import("styled-components").StyledComponent<"nav", any, {}, never>;
export declare const StyledBreadcrumb: import("styled-components").StyledComponent<({ mr, ml, mb, mt, ...props }: any) => JSX.Element, any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
interface IProps {
    $active?: boolean;
}
export declare const StyledBreadcrumbItem: import("styled-components").StyledComponent<"li", any, IProps, never>;
export {};
