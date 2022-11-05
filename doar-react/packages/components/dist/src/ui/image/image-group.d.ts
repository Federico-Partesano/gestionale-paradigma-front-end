/// <reference types="react" />
import { SpaceProps, FlexboxProps } from "@doar/shared/styled";
interface IGroupProps extends FlexboxProps, SpaceProps {
    children: React.ReactNode;
    className?: string;
    size?: "sm";
}
declare const ImageGroup: ({ children, className, size, ...restProps }: IGroupProps) => JSX.Element;
export default ImageGroup;
