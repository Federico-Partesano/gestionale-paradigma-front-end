/// <reference types="react" />
import { SpaceProps, BorderProps, TypographyProps } from "@doar/shared/styled";
declare type IProps = SpaceProps;
export declare const StyledContainer: import("styled-components").StyledComponent<({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }: any) => JSX.Element, any, IProps, never>;
export declare const StyledRow: import("styled-components").StyledComponent<({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }: any) => JSX.Element, any, IProps, never>;
interface ICol extends IProps, BorderProps, TypographyProps {
}
export declare const StyledCol: import("styled-components").StyledComponent<({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, textAlign, ...props }: any) => JSX.Element, any, ICol, never>;
export {};
