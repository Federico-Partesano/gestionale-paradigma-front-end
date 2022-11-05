import SEO from "../components/seo";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-five/welcome-area";
import RowOne from "../containers/dashboard-five/row-one";
import RowTwo from "../containers/dashboard-five/row-two";
import RowThree from "../containers/dashboard-five/row-three";
import RowFour from "../containers/dashboard-five/row-four";

const DashboardFive = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <WelcomeArea />
                <RowOne />
                <RowTwo />
                <RowThree />
                <RowFour />
            </Content>
        </Layout>
    );
};

export default DashboardFive;
