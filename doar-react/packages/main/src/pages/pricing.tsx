import Layout from "../layouts";
import Content from "../layouts/content";
import PricingContainer from "../containers/pricing";
import SEO from "../components/seo";

const Pricing = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <PricingContainer />
            </Content>
        </Layout>
    );
};

export default Pricing;
