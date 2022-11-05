import { StyledWrap } from "./style";

interface IProps {
    layout?: 1 | 2;
    children: React.ReactNode;
}

const Wrapper = ({ children, layout }: IProps) => {
    return (
        <StyledWrap $layout={layout} className="wrapper">
            {children}
        </StyledWrap>
    );
};

Wrapper.defaultProps = {
    layout: 1,
};

export default Wrapper;
