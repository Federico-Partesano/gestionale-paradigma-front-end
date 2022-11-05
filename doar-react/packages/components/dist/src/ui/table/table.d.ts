/// <reference types="react" />
import { SpaceProps, BorderProps } from "@doar/shared/styled";
declare type TColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
interface IProps extends SpaceProps, BorderProps {
    children: React.ReactNode;
    className?: string;
    theadColor?: TColor;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    compact?: boolean;
    color?: TColor;
    borderless?: boolean;
}
declare const Table: ({ children, className, theadColor, striped, bordered, hover, compact, color, borderless, ...restProps }: IProps) => JSX.Element;
export default Table;
