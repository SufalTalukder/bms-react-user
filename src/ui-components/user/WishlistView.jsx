import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect } from "react";

export default function WishlistView() {

    useEffect(() => {
        document.title = "My Wishlist - BMS Book Store";
    }, []);

    const goToPreviousPage = () => {
        if (window.history.length > 0) {
            document.referrer ? window.history.back() : window.location.href = "/";
        } else {
            window.location.href = "/";
        }
    };

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">My Wishlist</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" onClick={goToPreviousPage}>Return Back</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Wishlist</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Title Page --> */}

            {/* <!-- Wish list --> */}
            <section className="flat-spacing-13">
                <div className="container">
                    <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                        {/* <!-- Card Product 1 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                        src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/women-grey-2.jpg"
                                        src="/assets/images/products/fashion/women-grey-2.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Loose
                                    Fit Tee</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$120.00</span>
                                    <span className="price-old">$150.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item hover-tooltip tooltip-bot color-swatch active">
                                        <span className="tooltip color-filter">Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                            src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-9.jpg"
                                            src="/assets/images/products/fashion/product-9.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot line">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-4.jpg"
                                            src="/assets/images/products/fashion/product-4.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 2 --> */}
                        <div className="card-product style-wishlist style-3 out-of-stock">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-2.jpg"
                                        src="/assets/images/products/fashion/product-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-2.jpg"
                                        src="/assets/images/products/fashion/product-2.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Regular
                                    Fit
                                    Pima Cotton Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$130.00</span>
                                </p>
                            </div>
                        </div>
                        {/* <!-- Card Product 3 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-3.jpg"
                                        src="/assets/images/products/fashion/product-3.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-4.jpg"
                                        src="/assets/images/products/fashion/product-4.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="countdown-box">
                                    <div className="js-countdown" data-timer="1007500" data-labels="D  :,H  :,M  :,S">
                                    </div>
                                </div>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Long
                                    Regular
                                    Fit Tee</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$60.00</span>
                                    <span className="price-old">$70.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Yellow</span>
                                        <span className="swatch-value bg-yellow"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-3.jpg"
                                            src="/assets/images/products/fashion/product-3.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-6.jpg"
                                            src="/assets/images/products/fashion/product-6.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot line">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-4.jpg"
                                            src="/assets/images/products/fashion/product-4.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 4 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                        src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                        src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Regular
                                    Fit
                                    Pima Cotton Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$80.00</span>
                                    <span className=" price-old">$100.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active hover-tooltip tooltip-bot line">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                            src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-16.jpg"
                                            src="/assets/images/products/fashion/product-16.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                            src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 5 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-25.jpg"
                                        src="/assets/images/products/fashion/product-25.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-24.jpg"
                                        src="/assets/images/products/fashion/product-24.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Midi
                                    Knit Dress</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$40.00</span>
                                    <span className=" price-old">$60.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-25.jpg"
                                            src="/assets/images/products/fashion/product-25.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                            src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/women-grey-2.jpg"
                                            src="/assets/images/products/fashion/women-grey-2.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 6 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-6.jpg"
                                        src="/assets/images/products/fashion/product-6.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                        src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Oversized
                                    Fit
                                    Tee</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$60.00</span>
                                    <span className="price-old">$180.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot line active">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-6.jpg"
                                            src="/assets/images/products/fashion/product-6.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Dark Green</span>
                                        <span className="swatch-value bg-dark-green"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                            src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 7 --> */}
                        <div className="card-product style-wishlist style-3">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                        src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-28.jpg"
                                        src="/assets/images/products/fashion/product-28.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Puff
                                    Sleeve Shirred Blouse</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$57.00</span>
                                    <span className=" price-old">$60.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Yellow</span>
                                        <span className="swatch-value bg-yellow-2"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                            src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Orange</span>
                                        <span className="swatch-value bg-light-orange-2"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-28.jpg"
                                            src="/assets/images/products/fashion/product-28.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-7.jpg"
                                            src="/assets/images/products/fashion/product-7.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 8 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Printed
                                    T-shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$120.00</span>
                                    <span className=" price-old">$140.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch line hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                            src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/women-grey-1.jpg"
                                            src="/assets/images/products/fashion/women-grey-1.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/women-black-6.jpg"
                                            src="/assets/images/products/fashion/women-black-6.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 9 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-27.jpg"
                                        src="/assets/images/products/fashion/product-27.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-23.jpg"
                                        src="/assets/images/products/fashion/product-23.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Basic
                                    Sports T-Shirt Crew Neck Ribbed</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">80.00</span>
                                    <span className="price-old">$100.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Light Purple</span>
                                        <span className="swatch-value bg-light-purple-3"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-27.jpg"
                                            src="/assets/images/products/fashion/product-27.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Grey</span>
                                        <span className="swatch-value bg-grey-4"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-11.jpg"
                                            src="/assets/images/products/fashion/product-11.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-12.jpg"
                                            src="/assets/images/products/fashion/product-12.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 10 --> */}
                        <div className="card-product style-wishlist style-3">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-10.jpg"
                                        src="/assets/images/products/fashion/product-10.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-20.jpg"
                                        src="/assets/images/products/fashion/product-20.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Regular
                                    Fit
                                    Fine Knit Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$130.00</span>
                                    <span className=" price-old">$130.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue-2"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-10.jpg"
                                            src="/assets/images/products/fashion/product-10.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-13.jpg"
                                            src="/assets/images/products/fashion/product-13.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Purple</span>
                                        <span className="swatch-value bg-light-purple"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-14.jpg"
                                            src="/assets/images/products/fashion/product-14.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 11 --> */}
                        <div className="card-product style-wishlist style-3">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                        src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/women-black-3.jpg"
                                        src="/assets/images/products/fashion/women-black-3.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Crop
                                    College T-Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$80.00</span>
                                    <span className=" price-old">$100.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Dark Green</span>
                                        <span className="swatch-value bg-dark-green"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                            src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/women-black-3.jpg"
                                            src="/assets/images/products/fashion/women-black-3.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Purple</span>
                                        <span className="swatch-value bg-light-purple-3"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-23.jpg"
                                            src="/assets/images/products/fashion/product-23.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 12 --> */}
                        <div className="card-product style-wishlist style-3 card-product-size">
                            <i className="icon icon-close remove"></i>
                            <div className="card-product-wrapper">
                                <Link to="/product-details" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                        src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                        src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon hover-tooltip quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip compare">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="/product-details" className="name-product link fw-medium text-md">Bow-Tie
                                    T-Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$120.00</span>
                                    <span className=" price-old">$140.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                            src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                            src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip line tooltip-bot">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                            src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <!-- Pagination --> */}
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
            {/* <!-- /Wish list--> */}
        </PageLayout>
    );
}