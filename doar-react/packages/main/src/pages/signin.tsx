import Layout from "../layouts";
import Content from "../layouts/content";
import AuthContainer from "../containers/signin";
import SEO from "../components/seo";

const SignIn = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </Layout>
    );
};

export default SignIn;
