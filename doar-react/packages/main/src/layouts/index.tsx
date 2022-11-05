import Header from "./header";
import Footer from "./footer";

interface IProps {
    children: React.ReactNode;
    hasSidebar?: boolean;
    hideFooter?: boolean;
    sidebarLayout?: 1 | 2;
    layout?: "app";
}

const Layout = ({
    children,
    hasSidebar,
    hideFooter,
    sidebarLayout,
}: IProps) => {
    return (
        <>
            <Header hasSidebar={hasSidebar} sidebarLayout={sidebarLayout} />
            {children}
            {!hideFooter && <Footer />}
        </>
    );
};

Layout.defaultProps = {
    hideFooter: false,
};

export default Layout;
