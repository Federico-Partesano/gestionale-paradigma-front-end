/// <reference types="react" />
import { ColorProps, TypographyProps } from "@doar/shared/styled";
interface IAvatarText extends ColorProps, TypographyProps {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    shape?: "circle" | "rounded" | "square";
}
declare const AvatarInitial: ({ children, size, shape, className, ...restProps }: IAvatarText) => JSX.Element;
export default AvatarInitial;
