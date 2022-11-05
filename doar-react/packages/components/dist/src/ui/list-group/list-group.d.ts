/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IListGroup extends SpaceProps {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
    flush?: boolean;
    horizontal?: boolean;
}
declare const ListGroup: ({ as, className, children, flush, horizontal, ...restProps }: IListGroup) => JSX.Element;
export default ListGroup;
