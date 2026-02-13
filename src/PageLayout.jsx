import PropTypes from "prop-types";
import Header from "./ui-components/inner-page-layout/Header";
import Footer from "./ui-components/inner-page-layout/Footer";
import ExtraFooter from "./ui-components/inner-page-layout/ExtraFooter";
import Preloader from "./reusable-components/Preloader";
import HeaderOfferBanner from "./reusable-components/HeaderOfferBanner";
import { useEffect, useState } from "react";

export default function PageLayout({ children }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [children]);

    return (
        <>
            {loading && <Preloader />}
            <div id="wrapper">
                <HeaderOfferBanner />
                <Header />
                {children}
                <Footer />
            </div>
            <ExtraFooter />
        </>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
