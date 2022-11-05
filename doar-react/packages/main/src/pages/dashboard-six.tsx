import SEO from "../components/seo";
import Layout from "../layouts";
import Content from "../layouts/content";
import RowOne from "../containers/dashboard-six/row-one";
import RowTwo from "../containers/dashboard-six/row-two";

const DashboardSix = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <RowOne />
                <RowTwo />
            </Content>
        </Layout>
    );
};

export default DashboardSix;
