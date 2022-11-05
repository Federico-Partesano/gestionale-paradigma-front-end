import { MoreVertical } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea = () => {
    return (
        <StyledWelcomeArea>
            <StyledWelcomeLeft>
                <Breadcrumb
                    prev={[{ text: "Dashboard", link: "/" }]}
                    title="Cryptocurrency"
                    wcText="Welcome To Dashboard"
                />
            </StyledWelcomeLeft>
            <StyledWelcomeRight></StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
