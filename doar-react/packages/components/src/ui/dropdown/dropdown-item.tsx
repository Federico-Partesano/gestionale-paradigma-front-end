import classnames from "clsx";
import {MouseEvent} from "react"
import { StyledDropItem } from "./style";

interface IDropItem {
    children: React.ReactNode;
    path: string;
    className?: string;
    active?: boolean;
    onClick?: (e: MouseEvent) => void
}

const DropdownItem = ({ children, path, className, active, onClick }: IDropItem) => (
    <StyledDropItem
        active={active}
        path={path}
        onClick={onClick ? onClick : undefined}
        className={classnames(className, "dropdown-item")}
    >
        {children}
    </StyledDropItem>
);

export default DropdownItem;
