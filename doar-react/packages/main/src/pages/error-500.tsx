import Layout from "../layouts";
import Content from "../layouts/content";
import ErrorContainer from "../containers/error-500";
import SEO from "../components/seo";

const Error500 = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </Layout>
    );
};

export default Error500;
