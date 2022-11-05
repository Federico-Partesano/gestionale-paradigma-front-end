/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    className?: string;
    children: React.ReactNode;
}
declare const FormGroup: ({ children, className, ...rest }: IProps) => JSX.Element;
export default FormGroup;
