import { ElementType } from "react";
import { SpaceProps, ColorProps, TypographyProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps {
    children: React.ReactNode;
    as?: ElementType;
    className?: string;
    tt?: string;
}
declare const Heading: import("react").ForwardRefExoticComponent<IProps & import("react").RefAttributes<HTMLHeadingElement>>;
export default Heading;
