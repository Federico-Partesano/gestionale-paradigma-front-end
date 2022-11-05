import Layout from "../layouts";
import Content from "../layouts/content";
import VerifyContainer from "../containers/verify-account";
import SEO from "../components/seo";

const VerifyAccount = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <VerifyContainer />
            </Content>
        </Layout>
    );
};

export default VerifyAccount;
