import classnames from "clsx";
import { StyledFooterBetween } from "./style";
import { IProps } from "./types";

const ModalFooter = ({ className, children, ...restProps }: IProps) => {
    return (
        <StyledFooterBetween
            className={classnames(className, "modal-body")}
            {...restProps}
        >
            {children}
        </StyledFooterBetween>
    );
};

export default ModalFooter;
