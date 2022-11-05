/// <reference types="react" />
export interface IProps {
    children: React.ReactNode;
    /**
     * Pass extra classes
     */
    className?: string;
}
declare type CustomStyle = "classic" | "icon" | "line" | "sidebar" | "aside" | "social" | "with-icon";
interface ILink extends IProps {
    path: string;
    active?: boolean;
    onClick?: (e: HTMLAnchorElement) => void;
    customStyle?: CustomStyle;
    iconPosition?: "left" | "right";
    iconDistance?: string;
    rel?: string;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
}
export declare const NavLink: {
    ({ children, className, path, active, onClick, customStyle, iconPosition, iconDistance, rel, label, target, ...rest }: ILink): JSX.Element;
    defaultProps: {
        iconPosition: string;
        iconDistance: string;
    };
    displayName: string;
};
export default NavLink;
