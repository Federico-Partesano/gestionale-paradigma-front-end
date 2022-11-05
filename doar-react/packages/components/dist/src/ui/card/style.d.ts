/// <reference types="react" />
import { PositionProps as IPositionProps, ColorProps, SpaceProps, TypographyProps, BorderProps } from "@doar/shared/styled";
export declare const StyledCard: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, p, width, height, minWidth, maxWidth, borderBottomColor, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardImage: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, ...props }: any) => JSX.Element, any, {}, never>;
interface IBodyProps extends IPositionProps, SpaceProps, TypographyProps {
}
export declare const StyledCardBody: import("styled-components").StyledComponent<({ textAlign, ml, mr, mt, mb, pl, pr, pt, pb, p, py, px, position, ...props }: any) => JSX.Element, any, IBodyProps, never>;
export declare const StyledCardHeading: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, fontSize, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, color, bg, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardText: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, fontSize, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, color, bg, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardSubtitle: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, fontSize, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, color, bg, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardLink: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, fontSize, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, color, bg, ...props }: any) => JSX.Element, any, {}, never>;
interface ICardHeaderProps extends SpaceProps, ColorProps, TypographyProps {
    $variant?: "flexbcenter";
}
export declare const StyledCardHeader: import("styled-components").StyledComponent<({ ml, mr, mt, mb, p, px, py, pl, pr, pt, pb, fontSize, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, color, bg, ...props }: any) => JSX.Element, any, ICardHeaderProps, never>;
interface IFooterProps extends BorderProps, SpaceProps {
}
export declare const StyledCardFooter: import("styled-components").StyledComponent<({ border, borderTopWidth, m, mx, my, ml, mr, mt, mb, p, px, py, pl, pr, pt, pb, ...props }: any) => JSX.Element, any, IFooterProps, never>;
export declare const StyledCardImgOverlay: import("styled-components").StyledComponent<({ m, mx, my, ml, mr, mt, mb, p, px, py, pl, pr, pt, pb, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardGroup: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, width, height, minWidth, maxWidth, minHeight, maxHeight, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardDeck: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, width, height, minWidth, maxWidth, minHeight, maxHeight, ...props }: any) => JSX.Element, any, {}, never>;
export declare const StyledCardColumns: import("styled-components").StyledComponent<({ ml, mr, mt, mb, pl, pr, pt, pb, width, height, minWidth, maxWidth, minHeight, maxHeight, ...props }: any) => JSX.Element, any, {}, never>;
export {};
