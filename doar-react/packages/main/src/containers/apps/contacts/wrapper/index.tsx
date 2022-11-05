import { StyledWrapper } from "./style";

interface IProps {
    layout?: 1 | 2;
    children: React.ReactNode;
}

const Wrapper = ({ children, layout }: IProps) => {
    return (
        <StyledWrapper $layout={layout} className="wrapper">
            {children}
        </StyledWrapper>
    );
};

Wrapper.defaultProps = {
    layout: 1,
};

export default Wrapper;
