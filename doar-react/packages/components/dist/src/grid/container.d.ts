/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    children: React.ReactNode;
    className?: string;
}
declare const Container: ({ className, ...props }: IProps) => JSX.Element;
export default Container;
