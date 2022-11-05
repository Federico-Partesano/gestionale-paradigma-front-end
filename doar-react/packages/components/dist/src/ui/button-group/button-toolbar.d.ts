/// <reference types="react" />
interface IToolbarProps {
    children: React.ReactNode;
    /**
     * Pass a label to make button group accessible
     */
    label?: string;
    /**
     * Pass extra class names
     */
    className?: string;
}
declare const ButtonToolbar: {
    ({ children, className, label }: IToolbarProps): JSX.Element;
    defaultProps: {
        label: string;
    };
};
export default ButtonToolbar;
