import { Link } from "react-router-dom";

export default function SearchViewModalForPhone() {
    return (
        <div className="modal fade popup-search" id="search">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="header">
                        <button className="icon-close icon-close-popup" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="looking-htmlFor-wrap">
                                    <div className="heading">What are you looking htmlFor?</div>
                                    <form className="form-search">
                                        <fieldset className="text">
                                            <input type="text" placeholder="Search" name="text" tabIndex={-1} defaultValue="Jhon Doe"
                                                aria-required="true" required="" />
                                        </fieldset>
                                        <button type="submit">
                                            <i className="icon icon-search"></i>
                                        </button>
                                    </form>
                                    <div className="popular-searches justify-content-md-center">
                                        <div className="text fw-medium">Popular searches:</div>
                                        <ul>
                                            <li><Link className="link" to="#">Featured</Link></li>
                                            <li><Link className="link" to="#">Trendy</Link></li>
                                            <li><Link className="link" to="#">New</Link></li>
                                            <li><Link className="link" to="#">Sale</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="featured-product">
                                    <div className="text-xl-2 fw-medium featured-product-heading">Featured product</div>
                                    <div dir="ltr" className="swiper tf-swiper wrap-sw-over" data-swiper='{
                                    "slidesPerView": 2,
                                    "spaceBetween": 12,
                                    "speed": 800,
                                    "observer": true,
                                    "observeParents": true,
                                    "slidesPerGroup": 2,
                                    "pagination": { "el": ".sw-pagination-search", "clickable": true },
                                    "breakpoints": {
                                    "768": { "slidesPerView": 3, "spaceBetween": 12, "slidesPerGroup": 3 },
                                    "1200": { "slidesPerView": 4, "spaceBetween": 24, "slidesPerGroup": 4}
                                    }
                                }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div
                                                    className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                                    <div className="card-product-wrapper">
                                                        <Link to="/product-details" className="product-img">
                                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book1.jpg"
                                                                src="/assets/images/products/book/book1.jpg" alt="image-product" />
                                                        </Link>
                                                        <ul className="list-product-btn">
                                                            <li>
                                                                <Link to="#" className="box-icon hover-tooltip wishlist box-shadow1">
                                                                    <span className="icon icon-heart2"></span>
                                                                    <span className="tooltip">Add to Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#quickView" data-bs-toggle="modal"
                                                                    className="box-icon hover-tooltip quickview box-shadow1">
                                                                    <span className="icon icon-view"></span>
                                                                    <span className="tooltip">Quick View</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                                                    className="box-icon hover-tooltip compare box-shadow1">
                                                                    <span className="icon icon-compare"></span>
                                                                    <span className="tooltip">Add to Compare</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="on-sale-wrap"><span className="on-sale-item">20% Off</span></div>
                                                    </div>
                                                    <div className="card-product-info text-center">
                                                        <Link to="/product-details" className="name-product link fw-medium text-md">Lost Boy</Link>
                                                        <p className="price-wrap fw-medium">
                                                            <span className="price-new">$60.00</span>
                                                            <span className="price-old">$80.00</span>
                                                        </p>
                                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                                            <span className="text-md fw-medium">
                                                                Add to Cart
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                                    <div className="card-product-wrapper">
                                                        <Link to="/product-details" className="product-img">
                                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book2.jpg"
                                                                src="/assets/images/products/book/book2.jpg" alt="image-product" />
                                                        </Link>
                                                        <ul className="list-product-btn">
                                                            <li>
                                                                <Link to="#" className="box-icon hover-tooltip wishlist box-shadow1">
                                                                    <span className="icon icon-heart2"></span>
                                                                    <span className="tooltip">Add to Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#quickView" data-bs-toggle="modal"
                                                                    className="box-icon hover-tooltip quickview box-shadow1">
                                                                    <span className="icon icon-view"></span>
                                                                    <span className="tooltip">Quick View</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                                                    className="box-icon hover-tooltip compare box-shadow1">
                                                                    <span className="icon icon-compare"></span>
                                                                    <span className="tooltip">Add to Compare</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-product-info text-center">
                                                        <Link to="/product-details" className="name-product link fw-medium text-md">Let Go My Hand</Link>
                                                        <p className="price-wrap fw-medium">
                                                            <span className="price-new text-dark">$66.00</span>
                                                        </p>
                                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                                            <span className="text-md fw-medium">
                                                                Add to Cart
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                                    <div className="card-product-wrapper">
                                                        <Link to="/product-details" className="product-img">
                                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book3.jpg"
                                                                src="/assets/images/products/book/book3.jpg" alt="image-product" />
                                                        </Link>
                                                        <ul className="list-product-btn">
                                                            <li>
                                                                <Link to="#" className="box-icon hover-tooltip wishlist box-shadow1">
                                                                    <span className="icon icon-heart2"></span>
                                                                    <span className="tooltip">Add to Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#quickView" data-bs-toggle="modal"
                                                                    className="box-icon hover-tooltip quickview box-shadow1">
                                                                    <span className="icon icon-view"></span>
                                                                    <span className="tooltip">Quick View</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                                                    className="box-icon hover-tooltip compare box-shadow1">
                                                                    <span className="icon icon-compare"></span>
                                                                    <span className="tooltip">Add to Compare</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-product-info text-center">
                                                        <Link to="/product-details" className="name-product link fw-medium text-md">Secret Behind The
                                                            Jungle</Link>
                                                        <p className="price-wrap fw-medium">
                                                            <span className="price-new text-dark">$50.00</span>
                                                        </p>
                                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                                            <span className="text-md fw-medium">
                                                                Add to Cart
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                                    <div className="card-product-wrapper">
                                                        <Link to="/product-details" className="product-img">
                                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book4.jpg"
                                                                src="/assets/images/products/book/book4.jpg" alt="image-product" />
                                                        </Link>
                                                        <ul className="list-product-btn">
                                                            <li>
                                                                <Link to="#" className="box-icon hover-tooltip wishlist box-shadow1">
                                                                    <span className="icon icon-heart2"></span>
                                                                    <span className="tooltip">Add to Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#quickView" data-bs-toggle="modal"
                                                                    className="box-icon hover-tooltip quickview box-shadow1">
                                                                    <span className="icon icon-view"></span>
                                                                    <span className="tooltip">Quick View</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                                                    className="box-icon hover-tooltip compare box-shadow1">
                                                                    <span className="icon icon-compare"></span>
                                                                    <span className="tooltip">Add to Compare</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="on-sale-wrap"><span className="on-sale-item">20% Off</span></div>
                                                    </div>
                                                    <div className="card-product-info text-center">
                                                        <Link to="/product-details" className="name-product link fw-medium text-md">Lost Boy</Link>
                                                        <p className="price-wrap fw-medium">
                                                            <span className="price-new">$45.00</span>
                                                            <span className="price-old">$65.00</span>
                                                        </p>
                                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                                            <span className="text-md fw-medium">
                                                                Add to Cart
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex d-xl-none sw-dot-default sw-pagination-search justify-content-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}