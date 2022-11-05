import { useAppSelector } from "../../../../redux/hooks";
import { StyledWrapper } from "./style";

interface IProps {
    layout?: 1 | 2;
    children: React.ReactNode;
}

const Wrapper = ({ children, layout }: IProps) => {
    const { sidebar, isBody } = useAppSelector((state) => state.ui);
    return (
        <StyledWrapper
            $showSidebar={sidebar}
            $showBody={isBody}
            $layout={layout}
            className="main-wrapper"
        >
            {children}
        </StyledWrapper>
    );
};

Wrapper.defaultProps = {
    layout: 1,
};

export default Wrapper;
