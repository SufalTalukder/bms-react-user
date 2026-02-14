import { useEffect } from "react";
import { Link } from "react-router-dom";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";
import PageLayout from "../../PageLayout";

export default function ProductDefaultView() {

    useEffect(() => {
        document.title = "Product Default - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">Women</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Collections</div>
                        </div>
                        <p className="desc text-md text-main">Discover our carefully curated women`s collection, where timeless
                            elegance meets modern style.</p>
                    </div>
                </div>
            </section>
            {/* <!-- /Title Page --> */}

            {/* <!-- Section Collection --> */}
            <section className="flat-spacing-24">
                <div className="container">
                    <div className="flat-wrap-cls tf-grid-layout tf-col-2 xl-col-3">
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/men.jpg"
                                        data-src="/assets/images/cls-categories/fashion/men.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Men</Link>
                                <span className="count-item body-text-2 text-main">5 items</span>
                            </div>
                        </div>
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/bag.jpg"
                                        data-src="/assets/images/cls-categories/fashion/bag.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Bags</Link>
                                <span className="count-item body-text-2 text-main">7 items</span>
                            </div>
                        </div>
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/men-top.jpg"
                                        data-src="/assets/images/cls-categories/fashion/men-top.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Men’s Top</Link>
                                <span className="count-item body-text-2 text-main">9 items</span>
                            </div>
                        </div>
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/kid.jpg"
                                        data-src="/assets/images/cls-categories/fashion/kid.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Kids</Link>
                                <span className="count-item body-text-2 text-main">3 items</span>
                            </div>
                        </div>
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/sportwear2.jpg"
                                        data-src="/assets/images/cls-categories/fashion/sportwear2.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Sportwears</Link>
                                <span className="count-item body-text-2 text-main">12 items</span>
                            </div>
                        </div>
                        <div className="wg-cls style-abs2 style-lg hover-img">
                            <Link to="/product-default" className="image-wrap relative">
                                <div className="image img-style">
                                    <img src="/assets/images/cls-categories/fashion/dresses.jpg"
                                        data-src="/assets/images/cls-categories/fashion/dresses.jpg" alt="" className="lazyload" />
                                </div>
                                <div className="cls-btn text-center">
                                    <button className="tf-btn btn-white hover-dark">View all</button>
                                </div>
                                <span className="tf-overlay"></span>
                            </Link>
                            <div className="cls-content text-center">
                                <Link to="/product-default" className="text-type text-xl-2 fw-medium link">Dresses</Link>
                                <span className="count-item body-text-2 text-main">4 items</span>
                            </div>
                        </div>
                        <ul className="wg-pagination">
                            <li className="active">
                                <div className="pagination-item">1</div>
                            </li>
                            <li>
                                <Link to="#" className="pagination-item">2</Link>
                            </li>
                            <li>
                                <Link to="#" className="pagination-item">3</Link>
                            </li>
                            <li>
                                <Link to="#" className="pagination-item"><i className="icon-arr-right2"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- /Section Collection --> */}

            <IconBoxSwiper />
        </PageLayout>
    );
}