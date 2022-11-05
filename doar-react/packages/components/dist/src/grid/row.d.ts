/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
import { RowProps } from "./types";
interface IRowProps extends SpaceProps, RowProps {
    children: React.ReactNode;
    className?: string;
    gutters?: number;
    noGutter?: boolean;
}
declare const Row: ({ className, gutters, noGutter, ...props }: IRowProps) => JSX.Element;
export default Row;
