/// <reference types="react" />
import { SpaceProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, TypographyProps, LayoutProps {
    children: React.ReactNode;
    htmlFor: string;
    className?: string;
}
declare const Label: ({ children, htmlFor, className, ...rest }: IProps) => JSX.Element;
export default Label;
