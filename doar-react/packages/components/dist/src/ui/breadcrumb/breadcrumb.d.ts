/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
interface IBreadcrumb extends SpaceProps {
    children: React.ReactNode;
    /**
     * Extra class name
     */
    className?: string;
    /**
     * Element type. Default is `nav`
     */
    as?: React.ElementType;
}
export declare const Breadcrumb: ({ children, className, as, ...restProps }: IBreadcrumb) => JSX.Element;
export default Breadcrumb;
