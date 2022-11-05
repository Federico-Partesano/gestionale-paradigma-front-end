/// <reference types="react" />
import { SpaceProps, LayoutProps, BorderProps, TypographyProps } from "@doar/shared/styled";
export interface ButtonProps extends SpaceProps, LayoutProps, BorderProps, TypographyProps {
    /**
     * Required.
     */
    children: React.ReactNode;
    /**
     * Optional. Default is `button`.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Optional. Default is `contained`.
     */
    variant?: "contained" | "outlined" | "texted";
    /**
     * Optional. Default is `primary`.
     */
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "brand2" | "facebook" | "twitter";
    /**
     * Optional. Default is `md`.
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "ellipse";
    /**
     * Pass fullwidth to make button fullwidth.
     */
    fullwidth?: boolean;
    /**
     * Pass active to enable active state.
     */
    active?: boolean;
    /**
     * Pass disabled to enable disabled state.
     */
    disabled?: boolean;
    /**
     * Pass iconButton to get Icon Button style.
     */
    iconButton?: boolean;
    /**
     * Pass hasIcon if button has icon with text
     */
    hasIcon?: boolean;
    /**
     * Optional. Pass label if button does not contain any text
     */
    label?: string;
    /**
     * Optional. onClick function
     */
    onClick?: () => void;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
    /**
     * Pass `path` to make link button
     */
    path?: string;
    /**
     * Set icon's position either left or right
     */
    iconPosition?: "left" | "right";
    /**
     * Set icon's size
     */
    iconSize?: "xs" | "sm" | "md";
    /**
     * Set distance between icon and text
     */
    iconSpace?: string;
    /**
     * Set Uppercase Button
     */
    uppercase?: boolean;
}
declare const Button: {
    ({ children, type, variant, color, size, shape, fullwidth, active, disabled, iconButton, hasIcon, label, onClick, className, path, iconPosition, iconSize, iconSpace, uppercase, ...restProps }: ButtonProps): JSX.Element;
    defaultProps: {
        type: string;
        variant: string;
        color: string;
        size: string;
        shape: string;
        fullwidth: boolean;
        active: boolean;
        disabled: boolean;
        iconButton: boolean;
        iconPosition: string;
        iconSize: string;
    };
    displayName: string;
};
export default Button;
