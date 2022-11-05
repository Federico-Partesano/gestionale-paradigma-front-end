/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    className?: string;
    children: React.ReactNode;
    dir?: "append" | "prepend";
}
declare const InputGroupAddon: ({ children, dir, className, ...rest }: IProps) => JSX.Element;
export default InputGroupAddon;
