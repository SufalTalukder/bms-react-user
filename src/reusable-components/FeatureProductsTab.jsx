import { Link } from "react-router-dom";

export default function FeaturedProductsTab() {
    return (
        <section>
            <div className="container">
                <div className="flat-animate-tab">
                    <div className="flat-title mb_5 style-between wow fadeInUp">
                        <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">Featured Products</h3>
                        <ul className="menu-tab-line style-md3" role="tablist">
                            <li className="nav-tab-item" role="presentation">
                                <Link to="#newArrival" className="tab-link active" data-bs-toggle="tab" aria-selected="false" role="tab"
                                    tabIndex="-1">New Arrivals</Link>
                            </li>
                            <li className="nav-tab-item" role="presentation">
                                <Link to="#seller" className="tab-link" data-bs-toggle="tab" aria-selected="false" role="tab"
                                    tabIndex="-1">Best Sellers</Link>
                            </li>
                            <li className="nav-tab-item" role="presentation">
                                <Link to="#deals" className="tab-link" data-bs-toggle="tab" aria-selected="true" role="tab">Deals</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="newArrival" role="tabpanel">
                            <div className="tf-grid-layout lg-gap-24 tf-col-2 md-col-3 xl-col-4">
                                {/* <!-- item 1 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
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
                                {/* <!-- item 2 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
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
                                {/* <!-- item 3 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
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
                                {/* <!-- item 4 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
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
                                {/* <!-- item 5 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book5.jpg"
                                                src="/assets/images/products/book/book5.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">The Other Side Of The
                                            Sky</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">$55.00</span>
                                            <span className="price-old">$75.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 6 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book6.jpg"
                                                src="/assets/images/products/book/book6.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Avengers Assemble</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$65.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 7 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book7.jpg"
                                                src="/assets/images/products/book/book7.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">The Skylight Operation</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$72.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 8 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book8.jpg"
                                                src="/assets/images/products/book/book8.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Speak With No Fear</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$75.00</span>
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
                        <div className="tab-pane" id="seller" role="tabpanel">
                            <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
                                {/* <!-- item 1 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book9.jpg"
                                                src="/assets/images/products/book/book9.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Enceladus</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">$55.00</span>
                                            <span className="price-old">$75.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 2 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book10.jpg"
                                                src="/assets/images/products/book/book10.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Het Raadsel Van De Zee</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$60.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 3 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book11.jpg"
                                                src="/assets/images/products/book/book11.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Notes From A Young
                                            Chef</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$64.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 4 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book12.jpg"
                                                src="/assets/images/products/book/book12.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">All This & More</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$70.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 5 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book13.jpg"
                                                src="/assets/images/products/book/book13.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Delivery Girl</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$68.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 6 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book14.jpg"
                                                src="/assets/images/products/book/book14.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Voice Of Ancestors</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$55.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 7 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book5.jpg"
                                                src="/assets/images/products/book/book5.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">The Other Side Of The
                                            Sky</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">$55.00</span>
                                            <span className="price-old">$75.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 8 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book6.jpg"
                                                src="/assets/images/products/book/book6.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Avengers Assemble</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$65.00</span>
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
                        <div className="tab-pane" id="deals" role="tabpanel">
                            <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
                                {/* <!-- item 1 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
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
                                {/* <!-- item 2 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book5.jpg"
                                                src="/assets/images/products/book/book5.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">The Other Side Of The
                                            Sky</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">$55.00</span>
                                            <span className="price-old">$75.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 3 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book6.jpg"
                                                src="/assets/images/products/book/book6.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">Avengers Assemble</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$65.00</span>
                                        </p>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn mt_10 fw-semibold">
                                            <span className="text-md fw-medium">
                                                Add to Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!-- item 4 --> */}
                                <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-details" className="product-img">
                                            <img className="img-product lazyload" data-src="/assets/images/products/book/book7.jpg"
                                                src="/assets/images/products/book/book7.jpg" alt="image-product" />
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
                                        <Link to="/product-details" className="name-product link fw-medium text-md">The Skylight Operation</Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new text-dark">$72.00</span>
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
                    </div>
                </div>
            </div>
        </section>
    );
}