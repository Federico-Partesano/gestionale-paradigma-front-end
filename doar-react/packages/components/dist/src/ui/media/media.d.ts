/// <reference types="react" />
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
interface IMediaProps extends SpaceProps, FlexboxProps, LayoutProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}
declare const Media: ({ children, as, className, ...restProps }: IMediaProps) => JSX.Element;
export default Media;
