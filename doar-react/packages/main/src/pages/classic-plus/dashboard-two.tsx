import { Row } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import WelcomeArea from "../../containers/dashboard-two/welcome-area";
// import RowOne from "../../containers/dashboard-two/row-one";
// import RowTwo from "../../containers/dashboard-two/row-two";
// import RowThree from "../../containers/dashboard-two/row-three";
// import RowFour from "../../containers/dashboard-two/row-four";
// import RowFive from "../../containers/dashboard-two/row-five";
import SEO from "../../components/seo";
import SectionTeams from "../../containers/dashboard-two/SectionTeams/SectionTeams";

const DashboardTwo = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />
                    <Row gutters={10}>
                        <SectionTeams />
                        {/* <RowOne />
                        <RowTwo />
                        <RowThree />
                        <RowFour />
                        <RowFive /> */}
                    </Row>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default DashboardTwo;
