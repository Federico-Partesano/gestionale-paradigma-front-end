/// <reference types="react" />
import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    path: string;
    children: React.ReactNode;
    className?: string | undefined;
    rel?: string | undefined;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: (e: React.MouseEvent) => void;
    variant?: "link1" | "link2" | "link3";
}
declare const Anchor: {
    ({ path, children, className, rel, label, target, onClick, variant, ...rest }: IProps): JSX.Element;
    defaultProps: {
        target: string;
        rel: string;
    };
    displayName: string;
};
export default Anchor;
