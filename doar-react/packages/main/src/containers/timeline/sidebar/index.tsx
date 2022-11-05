import Stories from "../../../components/widgets/stories";
import PeopleViewed from "../../../components/widgets/people-viewed";
import PeopleMayKnow from "../../../components/widgets/people-may-know";
import { StyledWrap, WidgetWrap } from "./style";

const Sidebar = () => {
    return (
        <StyledWrap>
            <WidgetWrap>
                <Stories />
            </WidgetWrap>
            <WidgetWrap>
                <PeopleViewed />
            </WidgetWrap>
            <WidgetWrap>
                <PeopleMayKnow />
            </WidgetWrap>
        </StyledWrap>
    );
};

export default Sidebar;
