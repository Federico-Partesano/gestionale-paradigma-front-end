import { Link } from "react-router-dom";
import classnames from "clsx";
import { StyledBreadcrumbItem } from "./style";

interface IBreadcrumbItem {
    children: React.ReactNode;
    path?: string;
    active?: boolean;
    className?: string;
}

const BreadcrumbItem = ({
    children,
    path,
    active,
    className,
}: IBreadcrumbItem) => (
    <StyledBreadcrumbItem
        className={classnames(className, "breadcrumb-item", active && "active")}
        $active={active}
        aria-current={active && "page"}
    >
        {active && children}
        {!active && path && <Link to={path}>{children}</Link>}
    </StyledBreadcrumbItem>
);
export default BreadcrumbItem;
