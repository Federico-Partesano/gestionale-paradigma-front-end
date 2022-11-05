/// <reference types="react" />
import { SpaceProps, BorderProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, BorderProps {
    className?: string;
}
declare const HRLine: ({ className, ...restProps }: IProps) => JSX.Element;
export default HRLine;
