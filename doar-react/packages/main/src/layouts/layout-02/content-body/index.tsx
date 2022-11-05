import { Container } from "@doar/components";
import { SpaceProps } from "@doar/shared/styled";
import { StyledBody } from "./style";

interface IProps extends SpaceProps {
    children: React.ReactNode;
    container?: boolean;
    mbContainer?: boolean;
}

const ContentBody = ({
    children,
    container,
    mbContainer = true,
    ...rest
}: IProps) => {
    return (
        <StyledBody className="content-body" {...rest}>
            {container && (
                <Container
                    className="container"
                    px="0"
                    mb={mbContainer ? "25px" : "0px"}
                >
                    {children}
                </Container>
            )}
            {!container && <>{children}</>}
        </StyledBody>
    );
};

ContentBody.defaultProps = {
    container: true,
};

export default ContentBody;
