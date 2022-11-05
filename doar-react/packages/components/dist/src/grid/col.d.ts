/// <reference types="react" />
import { SpaceProps, BorderProps, TypographyProps } from "@doar/shared/styled";
import { ColProps } from "./types";
interface IProps extends SpaceProps {
    children: React.ReactNode;
    className?: string;
}
interface IColProps extends IProps, ColProps, BorderProps, TypographyProps {
}
declare const Col: ({ className, ...props }: IColProps) => JSX.Element;
export default Col;
