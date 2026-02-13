import { Link } from "react-router-dom";

export default function ProductList() {
    return (
        <section className="flat-spacing-24">
            <div className="container">
                <div className="tf-shop-control">
                    <div className="tf-group-filter">
                        <Link to="#filterShop" data-bs-toggle="offcanvas" aria-controls="filterShop"
                            className="tf-btn-filter">
                            <span className="icon icon-filter"></span><span className="text">Filter</span></Link>
                        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                            <div className="btn-select">
                                <span className="text-sort-value">Best selling</span>
                                <span className="icon icon-arr-down"></span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="select-item active" data-sort-value="best-selling">
                                    <span className="text-value-item">Best selling</span>
                                </div>
                                <div className="select-item" data-sort-value="a-z">
                                    <span className="text-value-item">Alphabetically, A-Z</span>
                                </div>
                                <div className="select-item" data-sort-value="z-a">
                                    <span className="text-value-item">Alphabetically, Z-A</span>
                                </div>
                                <div className="select-item" data-sort-value="price-low-high">
                                    <span className="text-value-item">Price, low to high</span>
                                </div>
                                <div className="select-item" data-sort-value="price-high-low">
                                    <span className="text-value-item">Price, high to low</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="tf-control-layout">
                        <li className="tf-view-layout-switch sw-layout-list list-layout" data-value-layout="list">
                            <div className="item icon-list">
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-2" data-value-layout="tf-col-2">
                            <div className="item icon-grid-2">
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-3" data-value-layout="tf-col-3">
                            <div className="item icon-grid-3">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-4 active" data-value-layout="tf-col-4">
                            <div className="item icon-grid-4">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="wrapper-control-shop">
                    <div className="meta-filter-shop">
                        <div id="product-count-grid" className="count-text"></div>
                        <div id="product-count-list" className="count-text"></div>
                        <div id="applied-filters"></div>
                        <button id="remove-all" className="remove-all-filters" style={{ display: "none" }}><i
                            className="icon icon-close"></i> Clear all filter</button>
                    </div>
                    <div className="tf-list-layout wrapper-shop" id="listLayout" style={{ display: "none" }}>
                        {/* <!-- Card Product 1 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-16.jpg"
                                        src="/assets/images/products/fashion/product-16.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-9.jpg"
                                        src="/assets/images/products/fashion/product-9.jpg" alt="image-product" />
                                </Link>
                                <div className="on-sale-wrap"><span className="on-sale-item">20% Off</span></div>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Graphic
                                        Printed Pure Cotton T-shirt</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$50.00</span>
                                        <span className="price-old">$70.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Yellow</span>
                                            <span className="swatch-value bg-light-orange-2"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-16.jpg"
                                                src="/assets/images/products/fashion/product-16.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Black</span>
                                            <span className="swatch-value bg-dark"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-9.jpg"
                                                src="/assets/images/products/fashion/product-9.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-4"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-4.jpg"
                                                src="/assets/images/products/fashion/product-7.jpg" alt="image-product" />
                                        </li>
                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add
                                        To
                                        cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Card Product 2 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                        src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                        src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Graphic
                                        Printed Drop Shoulder Sleeves</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$80.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip line active">
                                            <span className="tooltip color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                                src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Dark Green</span>
                                            <span className="swatch-value bg-dark-green"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                                src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-4"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                                src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                        </li>
                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add
                                        To
                                        cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Card Product 3 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload"
                                        data-src="/assets/images/products/fashion/women-grey-2.jpg"
                                        src="/assets/images/products/fashion/women-grey-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/women-grey-1.jpg"
                                        src="/assets/images/products/fashion/women-grey-1.jpg" alt="image-product" />
                                </Link>
                                <div className="on-sale-wrap"><span className="on-sale-item">10% Off</span></div>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Women
                                        Solid Scoop Neck Slim Fit T-shirt</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$80.00</span>
                                        <span className="price-old">$90.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-4"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/women-grey-2.jpg"
                                                src="/assets/images/products/fashion/women-grey-2.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Yellow</span>
                                            <span className="swatch-value bg-yellow"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                                src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Light Grey</span>
                                            <span className="swatch-value bg-light-blue-2"></span>
                                            <img className="lazyload"
                                                data-src="/assets/images/products/fashion/women-light-blue-1.jpg"
                                                src="/assets/images/products/fashion/women-light-blue-1.jpg"
                                                alt="image-product" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add
                                        To
                                        cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Card Product 4 --> */}
                        <div className="loadItem card-product style-list" data-availability="Out of stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-18.jpg"
                                        src="/assets/images/products/fashion/product-18.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-12.jpg"
                                        src="/assets/images/products/fashion/product-12.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Asymmetric
                                        Neck Tank Top</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$85.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Light Orange</span>
                                            <span className="swatch-value bg-light-orange"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-18.jpg"
                                                src="/assets/images/products/fashion/product-18.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Black</span>
                                            <span className="swatch-value bg-dark"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/women-black-6.jpg"
                                                src="/assets/images/products/fashion/women-black-6.jpg" alt="image-product" />
                                        </li>

                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product animate-btn add-to-cart">Add
                                        To
                                        cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Card Product 5 --> */}
                        <div className="loadItem card-product style-list" data-availability="Out of stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-15.jpg"
                                        src="/assets/images/products/fashion/product-15.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                        src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Short
                                        Sleeve Sweat</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$55.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Light Pink</span>
                                            <span className="swatch-value bg-light-pink-4"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-15.jpg"
                                                src="/assets/images/products/fashion/product-15.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip line">
                                            <span className="tooltip color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                                src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Light Grey</span>
                                            <span className="swatch-value bg-grey-4"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                                src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add
                                        To
                                        cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Card Product 6 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload"
                                        data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                        src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-28.jpg"
                                        src="/assets/images/products/fashion/product-28.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Puff
                                        Sleeve Shirred Blouse</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$57.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Yellow</span>
                                            <span className="swatch-value bg-yellow-2"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                                src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Light Orange</span>
                                            <span className="swatch-value bg-light-orange-2"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-28.jpg"
                                                src="/assets/images/products/fashion/product-28.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Beige</span>
                                            <span className="swatch-value bg-beige"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-7.jpg"
                                                src="/assets/images/products/fashion/product-7.jpg" alt="image-product" />
                                        </li>
                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add To cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Product 7 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Printed
                                        T-shirt</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$120.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch line hover-tooltip active">
                                            <span className="tooltip color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                                src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-4"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/women-grey-1.jpg"
                                                src="/assets/images/products/fashion/women-grey-1.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Black</span>
                                            <span className="swatch-value bg-dark"></span>
                                            <img className=" lazyload" data-src="/assets/images/products/fashion/women-black-6.jpg"
                                                src="/assets/images/products/fashion/women-black-6.jpg" alt="image-product" />
                                        </li>
                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add To cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Product 8 --> */}
                        <div className="loadItem card-product style-list" data-availability="In stock" data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                        src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                        src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <div className="info-list">
                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Bow-Tie
                                        T-Shirt</Link>
                                    <p className="price-wrap fw-medium text-md">
                                        <span className="price-new">$117.00</span>
                                    </p>
                                    <p className="desc text-sm text-main text-line-clamp-2">
                                        Product Specifications Care for fiber: 30% more recycled polyester. We label
                                        garments
                                        manufactured using environmentally friendly technologies and raw materials with
                                        the
                                        Join
                                        Life label.
                                    </p>
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch hover-tooltip active">
                                            <span className="tooltip color-filter">Black</span>
                                            <span className="swatch-value bg-dark"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                                src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip">
                                            <span className="tooltip color-filter">Beige</span>
                                            <span className="swatch-value bg-beige"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                                src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                        </li>
                                        <li className="list-color-item color-swatch hover-tooltip line">
                                            <span className="tooltip color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                                src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                        </li>

                                    </ul>
                                    <ul className="size-box">
                                        <li className="size-item text-xs">S</li>
                                        <li className="size-item text-xs">M</li>
                                        <li className="size-item text-xs">L</li>
                                        <li className="size-item text-xs">XL</li>
                                    </ul>
                                </div>
                                <div className="list-product-btn">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                        className="tf-btn btn-main-product add-to-cart animate-btn">Add To cart</Link>
                                    <Link to="#" className="box-icon wishlist hover-tooltip">
                                        <span className="icon icon-heart2"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                    </Link>
                                    <Link to="#quickView" data-bs-toggle="modal"
                                        className="box-icon hover-tooltip quickview">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </Link>
                                    <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                        className="box-icon compare hover-tooltip">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Load Item --> */}
                        <div className="wd-load">
                            <button id="infiniteScrollList"
                                className="tf-btn btn-dark2 tf-loading animate-btn animate-dark">
                                <div className="spinner-circle">
                                    <span className="spinner-circle1 spinner-child"></span>
                                    <span className="spinner-circle2 spinner-child"></span>
                                    <span className="spinner-circle3 spinner-child"></span>
                                    <span className="spinner-circle4 spinner-child"></span>
                                    <span className="spinner-circle5 spinner-child"></span>
                                    <span className="spinner-circle6 spinner-child"></span>
                                    <span className="spinner-circle7 spinner-child"></span>
                                    <span className="spinner-circle8 spinner-child"></span>
                                    <span className="spinner-circle9 spinner-child"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="wrapper-shop tf-grid-layout tf-col-4" id="gridLayout">
                        {/* <!-- Card Product 1 --> */}
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-19.jpg"
                                        src="/assets/images/products/fashion/product-19.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/women-grey-2.jpg"
                                        src="/assets/images/products/fashion/women-grey-2.jpg" alt="image-product" />
                                </Link>
                                <div className="on-sale-wrap"><span className="on-sale-item">20% Off</span></div>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="hover-tooltip tooltip-left box-icon quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Loose Fit
                                    Tee</Link>
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
                        <div className="loadItem card-product grid out-of-stock" data-availability="Out of stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-2.jpg"
                                        src="/assets/images/products/fashion/product-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-2.jpg"
                                        src="/assets/images/products/fashion/product-2.jpg" alt="image-product" />
                                </Link>
                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Regular Fit
                                    Pima Cotton Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$130.00</span>
                                </p>

                            </div>
                        </div>
                        {/* <!-- Card Product 3 --> */}
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-3.jpg"
                                        src="/assets/images/products/fashion/product-3.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-4.jpg"
                                        src="/assets/images/products/fashion/product-4.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="hover-tooltip tooltip-left box-icon quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="hover-tooltip tooltip-left box-icon">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="countdown-box">
                                    <div className="js-countdown" data-timer="1007500" data-labels="D  :,H  :,M  :,S"></div>
                                </div>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                </ul>
                                <div className="on-sale-wrap"><span className="on-sale-item">20% Off</span></div>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Long Regular
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                        src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                        src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Regular Fit
                                    Pima Cotton Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$80.00</span>
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-25.jpg"
                                        src="/assets/images/products/fashion/product-25.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-24.jpg"
                                        src="/assets/images/products/fashion/product-24.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Midi Knit
                                    Dress</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$40.00</span>
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-6.jpg"
                                        src="/assets/images/products/fashion/product-6.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                        src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Oversized Fit
                                    Tee</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$60.00</span>
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
                        <div className="loadItem card-product grid" data-availability="In stock" data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload"
                                        data-src="/assets/images/products/fashion/women-yellow-2.jpg"
                                        src="/assets/images/products/fashion/women-yellow-2.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-28.jpg"
                                        src="/assets/images/products/fashion/product-28.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Puff Sleeve
                                    Shirred Blouse</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$57.00</span>
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Printed
                                    T-shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$120.00</span>
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-27.jpg"
                                        src="/assets/images/products/fashion/product-27.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-23.jpg"
                                        src="/assets/images/products/fashion/product-23.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Basic Sports
                                    T-Shirt Crew Neck Ribbed</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">80.00</span>
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
                        <div className="loadItem card-product grid" data-availability="In stock" data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-10.jpg"
                                        src="/assets/images/products/fashion/product-10.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-20.jpg"
                                        src="/assets/images/products/fashion/product-20.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Regular Fit
                                    Fine Knit Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$130.00</span>
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
                        <div className="loadItem card-product grid" data-availability="In stock" data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-21.jpg"
                                        src="/assets/images/products/fashion/product-21.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/women-black-3.jpg"
                                        src="/assets/images/products/fashion/women-black-3.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Crop College
                                    T-Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$82.00</span>
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
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-22.jpg"
                                        src="/assets/images/products/fashion/product-22.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-5.jpg"
                                        src="/assets/images/products/fashion/product-5.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Bow-Tie
                                    T-Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$92.00</span>
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
                        {/* <!-- Card Product 13 --> */}
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-13.jpg"
                                        src="/assets/images/products/fashion/product-13.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-14.jpg"
                                        src="/assets/images/products/fashion/product-14.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">COOLMAX® Loose
                                    Fit Tee</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$66.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-13.jpg"
                                            src="/assets/images/products/fashion/product-13.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Purple</span>
                                        <span className="swatch-value bg-purple-3"></span>
                                        <img className="lazyload" data-src="/assets/images/products/fashion/product-14.jpg"
                                            src="/assets/images/products/fashion/product-14.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 14 --> */}
                        <div className="loadItem card-product grid card-product-size" data-availability="In stock"
                            data-brand="Vineta">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-20.jpg"
                                        src="/assets/images/products/fashion/product-20.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-9.jpg"
                                        src="/assets/images/products/fashion/product-9.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">XS</li>
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Long Sleeve
                                    T-Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$100.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Black</span>
                                        <span className="swatch-value bg-dark"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-20.jpg"
                                            src="/assets/images/products/fashion/product-20.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-16.jpg"
                                            src="/assets/images/products/fashion/product-16.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch line hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                            src="/assets/images/products/fashion/product-1.jpg" alt="image-product" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 15 --> */}
                        <div className="loadItem card-product grid card-product-size" data-availability="Out of stock"
                            data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-7.jpg"
                                        src="/assets/images/products/fashion/product-7.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-11.jpg"
                                        src="/assets/images/products/fashion/product-11.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="size-box">
                                    <li className="size-item text-xs text-white">S</li>
                                    <li className="size-item text-xs text-white">M</li>
                                    <li className="size-item text-xs text-white">L</li>
                                    <li className="size-item text-xs text-white">XL</li>
                                    <li className="size-item text-xs text-white">2XL</li>
                                </ul>

                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Muscle Fit
                                    Polo Shirt</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$111.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                                        <span className="tooltip color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-7.jpg"
                                            src="/assets/images/products/fashion/product-7.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch line hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-11.jpg"
                                            src="/assets/images/products/fashion/product-11.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-18.jpg"
                                            src="/assets/images/products/fashion/product-18.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Card Product 16 --> */}
                        <div className="loadItem card-product grid" data-availability="Out of stock" data-brand="Zotac">
                            <div className="card-product-wrapper">
                                <Link to="product-detail.html" className="product-img">
                                    <img className="img-product lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                        src="/assets/images/products/fashion/product-16.jpg" alt="image-product" />
                                    <img className="img-hover lazyload" data-src="/assets/images/products/fashion/product-26.jpg"
                                        src="/assets/images/products/fashion/product-26.jpg" alt="image-product" />
                                </Link>
                                <ul className="list-product-btn">
                                    <li>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-cart2"></span>
                                            <span className="tooltip">Add to Cart</span>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link to="#" className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-heart2"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#quickView" data-bs-toggle="modal"
                                            className="box-icon quickview hover-tooltip tooltip-left">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </li>
                                    <li className="compare">
                                        <Link to="#compare" data-bs-toggle="modal" aria-controls="compare"
                                            className="box-icon hover-tooltip tooltip-left">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-product-info">
                                <Link to="product-detail.html" className="name-product link fw-medium text-md">Graphic
                                    Printed Drop Shoulder Sleeves</Link>
                                <p className="price-wrap fw-medium">
                                    <span className="price-new">$88.00</span>
                                </p>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch hover-tooltip line tooltip-bot active">
                                        <span className="tooltip color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-17.jpg"
                                            src="/assets/images/products/fashion/product-17.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                        <span className="tooltip color-filter">Light Purple</span>
                                        <span className="swatch-value bg-light-purple-3"></span>
                                        <img className=" lazyload" data-src="/assets/images/products/fashion/product-23.jpg"
                                            src="/assets/images/products/fashion/product-23.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Load Item --> */}
                        <div className="wd-load d-flex justify-content-center">
                            <button id="infiniteScrollGrid"
                                className="tf-btn btn-dark2 tf-loading animate-btn animate-dark">
                                <div className="spinner-circle">
                                    <span className="spinner-circle1 spinner-child"></span>
                                    <span className="spinner-circle2 spinner-child"></span>
                                    <span className="spinner-circle3 spinner-child"></span>
                                    <span className="spinner-circle4 spinner-child"></span>
                                    <span className="spinner-circle5 spinner-child"></span>
                                    <span className="spinner-circle6 spinner-child"></span>
                                    <span className="spinner-circle7 spinner-child"></span>
                                    <span className="spinner-circle8 spinner-child"></span>
                                    <span className="spinner-circle9 spinner-child"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}