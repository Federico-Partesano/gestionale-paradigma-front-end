/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    className?: string;
    children: React.ReactNode;
}
export declare const InputGroupText: ({ children, className, ...rest }: IProps) => JSX.Element;
export default InputGroupText;
