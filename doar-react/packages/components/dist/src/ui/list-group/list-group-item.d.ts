/// <reference types="react" />
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
interface IListGroupItem extends SpaceProps, FlexboxProps, LayoutProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    href?: string;
    flush?: boolean;
    horizontal?: boolean;
}
declare const ListGroupItem: {
    ({ as, className, children, active, disabled, action, href, flush, horizontal, ...restProps }: IListGroupItem): JSX.Element;
    displayName: string;
};
export default ListGroupItem;
