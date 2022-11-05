/// <reference types="react" />
import { FlexboxProps, SpaceProps, TypographyProps } from "@doar/shared/styled";
export interface IProps {
    children: React.ReactNode;
    /**
     * Pass extra classes
     */
    className?: string;
}
declare type CustomStyle = "classic" | "icon" | "line" | "sidebar" | "aside" | "social" | "with-icon";
interface INav extends IProps, FlexboxProps, SpaceProps, TypographyProps {
    pills?: boolean;
    align?: "left" | "right" | "center";
    vertical?: boolean;
    fill?: boolean;
    customStyle?: CustomStyle;
}
declare const Nav: ({ children, className, pills, align, vertical, fill, customStyle, ...rest }: INav) => JSX.Element;
export default Nav;
