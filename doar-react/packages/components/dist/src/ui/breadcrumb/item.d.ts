/// <reference types="react" />
interface IBreadcrumbItem {
    children: React.ReactNode;
    path?: string;
    active?: boolean;
    className?: string;
}
declare const BreadcrumbItem: ({ children, path, active, className, }: IBreadcrumbItem) => JSX.Element;
export default BreadcrumbItem;
