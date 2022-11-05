import { ElementType } from "react";
import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    children: React.ReactNode;
    as?: ElementType;
    className?: string;
}
declare const Text: ({ as, className, children, ...restProps }: IProps) => JSX.Element;
export default Text;
