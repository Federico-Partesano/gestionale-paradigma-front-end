/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IMediaBodyProps extends SpaceProps {
    className?: string;
    children: React.ReactNode;
}
declare const MediaBody: ({ children, className, ...restProps }: IMediaBodyProps) => JSX.Element;
export default MediaBody;
