/// <reference types="react" />
import { LayoutProps, SpaceProps } from "@doar/shared/styled";
interface IAvatar extends LayoutProps, SpaceProps {
    children: React.ReactNode;
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     * Default size is `38x38`
     */
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Default size is `square`
     */
    shape?: "circle" | "rounded" | "square";
    /**
     * An avatar can have a status indicator to indicate users availability.
     */
    status?: "online" | "offline";
}
declare const Avatar: {
    ({ size, shape, status, className, children, ...restProps }: IAvatar): JSX.Element;
    defaultProps: {
        size: string;
        shape: string;
    };
};
export default Avatar;
