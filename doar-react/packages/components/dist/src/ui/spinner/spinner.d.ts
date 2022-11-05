/// <reference types="react" />
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     *  Default is `border`.
     */
    variant?: "border" | "grow";
    /**
     * Default is `text`.
     */
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white";
    /**
     * Default is `md`.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}
declare const Spinner: {
    ({ className, variant, color, size, ...restProps }: IProps): JSX.Element;
    defaultProps: {
        variant: string;
        size: string;
    };
};
export default Spinner;
