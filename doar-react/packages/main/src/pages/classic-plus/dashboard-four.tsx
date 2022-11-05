import { Row, Col } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import WelcomeArea from "../../containers/dashboard-four/welcome-area";
import LeftRowOne from "../../containers/dashboard-four/left-row-one";
import LeftRowTwo from "../../containers/dashboard-four/left-row-two";
import LeftRowThree from "../../containers/dashboard-four/left-row-three";
import RightRowOne from "../../containers/dashboard-four/right-row-one";
import RightRowTwo from "../../containers/dashboard-four/right-row-two";
import RightRowhree from "../../containers/dashboard-four/right-row-three";
import RightRowFour from "../../containers/dashboard-four/right-row-four";
import SEO from "../../components/seo";

const DashboardFour = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />
                    <Row gutters={10}>
                        <Col lg={12}>
                            <Row gutters={10}>
                                <LeftRowOne />
                            </Row>
                        </Col>
                    </Row>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default DashboardFour;
