import { Row } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import WelcomeArea from "../../containers/dashboard-one/welcome-area";
// import RowOne from "../../containers/dashboard-one/row-one";
// import RowTwo from "../../containers/dashboard-one/row-two";
// import RowThree from "../../containers/dashboard-one/row-three";
import RowFour from "../../containers/dashboard-one/row-four";
import SEO from "../../components/seo";

const DashboardOne = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <ContentHeader />
                <ContentBody mbContainer={false}>
                    <WelcomeArea />
                    <Row gutters={10}>
                        {/* <RowOne /> */}
                        {/* <RowTwo /> */}
                        {/* <RowThree /> */}
                        <RowFour />
                    </Row>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default DashboardOne;
