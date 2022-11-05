/// <reference types="react" />
import { SpaceProps, LayoutProps } from "@doar/shared/styled";
export interface ImageProps extends SpaceProps, LayoutProps {
    /**
     * image's source.
     */
    src: string;
    /**
     * image's alt text.
     */
    alt?: string;
    /**
     * image's shapes
     */
    shape?: "rounded" | "circle" | "thumbnail";
    /**
     *Use the `fluid` to scale image nicely to the parent element.
     */
    fluid?: boolean;
    /**
     *Use the `align` to align image.
     */
    align?: "left" | "right";
    /**
     *Use the `fit` to resized to fit image's container.
     */
    fit?: "cover" | "contain";
    /**
     * Optional. Extra Class Name
     */
    className?: string;
}
declare const Image: ({ src, alt, size, shape, fluid, align, fit, className, ...restProps }: ImageProps) => JSX.Element;
export default Image;
