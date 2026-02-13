import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header" className="header-default header-search header-uppercase header-style-2">
            <div className="header-top line-bt">
                <div className="container">
                    <div className="row wrapper-header align-items-center">
                        <div className="col-md-4 col-3 d-xl-none">
                            <Link to="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
                                <i className="icon icon-categories1"></i>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-md-4 col-6">
                            <Link to="/home" className="logo-header">
                                <img src="/assets/images/logo/logo.svg" alt="logo" className="logo" />
                            </Link>
                        </div>
                        <div className="col-xl-5 d-none d-xl-block text-center">
                            <div className="tf-form-search">
                                <form className="form-search">
                                    <input type="text" placeholder="Search product" tabIndex={-1} aria-required="true" required="" />
                                    <button type="submit" className="btn-search"><i className="icon icon-search"></i></button>
                                </form>
                                <div className="search-suggests-results">
                                    <div className="search-suggests-results-inner">
                                        <ul>
                                            <li>
                                                <Link className="search-result-item" to="product-detail.html">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book9.jpg"
                                                            src="/assets/images/products/book/book9.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Enceladus</p>
                                                        <div className="price">
                                                            <span className="price">$60.00</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="product-detail.html">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book10.jpg"
                                                            src="/assets/images/products/book/book10.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Het Raadsel Van De Zee</p>
                                                        <div className="price">$55.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="product-detail.html">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book11.jpg"
                                                            src="/assets/images/products/book/book11.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Notes From A Young Chef</p>
                                                        <div className="price">$65.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="product-detail.html">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book12.jpg"
                                                            src="/assets/images/products/book/book12.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">All This & More</p>
                                                        <div className="price">$70.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-3">
                            <ul className="nav-icon d-flex justify-content-end align-items-center">
                                <li className="nav-search d-xl-none d-flex">
                                    <Link to="#search" data-bs-toggle="modal" className="nav-icon-item">
                                        <i className="icon icon-search"></i>
                                    </Link>
                                </li>
                                <li className="nav-account">
                                    <Link to="#login" data-bs-toggle="offcanvas" className="nav-icon-item">
                                        <i className="icon icon-user"></i>
                                        <span className="text d-none d-xl-block">Login</span>
                                    </Link>
                                </li>
                                <li className="nav-wishlist">
                                    <Link to="wish-list.html" className="nav-icon-item">
                                        <i className="icon icon-heart"></i>
                                        <span className="text d-none d-xl-block">Wishlist</span>
                                    </Link>
                                </li>
                                <li className="nav-cart">
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item value-box">
                                        <i className="icon icon-cart"></i>
                                        <span className="text d-none d-xl-block">$0.00</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom d-none d-xl-block line-bt">
                <div className="container">
                    <div className="wrapper-header-bottom style-2">
                        <div className="inner-left">
                            <div className="tf-mega-categories">
                                <Link to="#" className="categories-title"><i className="icon icon-categories"></i>browse
                                    categories</Link>
                                <ul className="mega-categories rgb-primary">
                                    <li>
                                        <Link to="/fiction" className="cate-item">
                                            <div className="img"><img src="/assets/images/cls-categories/book/fiction.png" alt="img" />
                                            </div>
                                            <span className="name-cate">Fiction</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <nav className="box-navigation text-center">
                                <ul className="box-nav-menu">
                                    <li className="menu-item">
                                        <Link to="#" className="item-link">Language<i className="icon icon-arr-down"></i></Link>
                                        <div className="sub-menu mega-menu mega-shop">
                                            <div className="wrapper-sub-menu">
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">shop layout</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="shop-default.html" className="menu-link-text link">Default</Link></li>
                                                        <li><Link to="shop-left-sidebar.html" className="menu-link-text link">Filter Left Sidebar</Link>
                                                        </li>
                                                        <li><Link to="shop-right-sidebar.html" className="menu-link-text link">Filter Right Sidebar</Link>
                                                        </li>
                                                        <li><Link to="shop-horizontal-filter.html" className="menu-link-text link">Horizontal Filter</Link>
                                                        </li>
                                                        <li><Link to="shop-filter-drawer.html" className="menu-link-text link">Filter Drawer</Link></li>
                                                        <li><Link to="shop-collection-list.html" className="menu-link-text link">Collection List</Link></li>
                                                        <li><Link to="shop-sub-collection.html" className="menu-link-text link">Sub Collection 1</Link></li>
                                                        <li><Link to="shop-sub-collection-02.html" className="menu-link-text link">Sub Collection 2</Link>
                                                        </li>
                                                        <li><Link to="shop-grid-3-columns.html" className="menu-link-text link">Grid 3 Columns </Link></li>
                                                        <li><Link to="shop-default.html" className="menu-link-text link">Grid
                                                            4
                                                            Columns</Link></li>
                                                        <li><Link to="shop-fullwidth.html" className="menu-link-text link">Full
                                                            Width</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">shop list</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="shop-default.html" className="menu-link-text link">Pagination Links</Link></li>
                                                        <li><Link to="shop-load-more-button.html" className="menu-link-text link">Load More Button</Link>
                                                        </li>
                                                        <li><Link to="shop-infinity-scroll.html" className="menu-link-text link">Infinity Scroll <span
                                                            className="demo-label">Hot</span></Link></li>
                                                        <li><Link to="shop-filter-sidebar.html" className="menu-link-text link">Filter Sidebar</Link></li>
                                                        <li><Link to="shop-filter-hidden.html" className="menu-link-text link">Filter Hidden</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">product styles</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="product-style-01.html" className="menu-link-text link">Product Style 1</Link></li>
                                                        <li><Link to="product-style-02.html" className="menu-link-text link">Product Style 2</Link></li>
                                                        <li><Link to="product-style-03.html" className="menu-link-text link">Product Style 3</Link></li>
                                                        <li><Link to="home-fashion-02.html" className="menu-link-text link">Product Popup</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wrapper-sub-collection">
                                                <div dir="ltr" className="swiper tf-swiper hover-sw-nav wow fadeInUp" data-swiper='{
                                                          "slidesPerView": 2,
                                                          "spaceBetween": 24,
                                                          "speed": 800,
                                                          "observer": true,
                                                          "observeParents": true,
                                                          "slidesPerGroup": 2,
                                                          "navigation": {
                                                              "clickable": true,
                                                              "nextEl": ".nav-next-cls-header",
                                                              "prevEl": ".nav-prev-cls-header"
                                                          },
                                                          "pagination": { "el": ".sw-pagination-cls-header", "clickable": true }
                                                      }'>
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="wg-cls style-abs asp-1 hover-img">
                                                                <Link to="shop-default.html" className="image bg-grey-4 img-style d-block">
                                                                    <img src="/assets/images/cls-categories/book/children.png"
                                                                        data-src="/assets/images/cls-categories/book/children.png" alt="" className="lazyload" />
                                                                </Link>
                                                                <div className="cls-btn text-center">
                                                                    <Link to="shop-default.html" className="tf-btn btn-cls btn-white hover-dark hover-icon-2">
                                                                        Children’s Books
                                                                        <i className="icon icon-arrow-top-left"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- item 2 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="wg-cls style-abs asp-1 hover-img">
                                                                <Link to="shop-default.html" className="bg-grey-4 image img-style d-block">
                                                                    <img src="/assets/images/cls-categories/book/mystery.png"
                                                                        data-src="/assets/images/cls-categories/book/mystery.png" alt="" className="lazyload" />
                                                                </Link>
                                                                <div className="cls-btn text-center">
                                                                    <Link to="shop-default.html" className="tf-btn btn-cls btn-white hover-dark hover-icon-2">
                                                                        Mystery & Thriller
                                                                        <i className="icon icon-arrow-top-left"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- item 3 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="wg-cls style-abs asp-1 hover-img">
                                                                <Link to="shop-default.html" className="bg-grey-4 image img-style d-block">
                                                                    <img src="/assets/images/cls-categories/book/science.png"
                                                                        data-src="/assets/images/cls-categories/book/science.png" alt="" className="lazyload" />
                                                                </Link>
                                                                <div className="cls-btn text-center">
                                                                    <Link to="shop-default.html" className="tf-btn btn-cls btn-white hover-dark hover-icon-2">
                                                                        Science Fiction
                                                                        <i className="icon icon-arrow-top-left"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls-header justify-content-center">
                                                    </div>
                                                    <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-cls-header">
                                                    </div>
                                                    <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-cls-header">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className="item-link">Author<i className="icon icon-arr-down"></i></Link>
                                        <div className="sub-menu mega-menu mega-product">
                                            <div className="wrapper-sub-menu">
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">product layouts</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="product-detail.html" className="menu-link-text link">Product Single</Link></li>
                                                        <li><Link to="product-right-thumbnail.html" className="menu-link-text link">Product Right
                                                            Thumbnail</Link>
                                                        </li>
                                                        <li><Link to="product-detail.html" className="menu-link-text link">Product Left Thumbnail</Link>
                                                        </li>
                                                        <li><Link to="product-bottom-thumbnail.html" className="menu-link-text link">Product Bottom
                                                            Thumbnail</Link>
                                                        </li>
                                                        <li><Link to="product-grid.html" className="menu-link-text link">Product
                                                            Grid</Link></li>
                                                        <li><Link to="product-grid-02.html" className="menu-link-text link">Product Grid 2</Link></li>
                                                        <li><Link to="product-stacked.html" className="menu-link-text link">Product Stacked</Link></li>
                                                        <li><Link to="product-drawer-sidebar.html" className="menu-link-text link">Product Drawer
                                                            Sidebar</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">product details</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="product-inner-zoom.html" className="menu-link-text link">Product Inner Zoom</Link>
                                                        </li>
                                                        <li><Link to="product-inner-circle-zoom.html" className="menu-link-text link">Product Inner
                                                            Circle
                                                            Zoom</Link>
                                                        </li>
                                                        <li><Link to="product-no-zoom.html" className="menu-link-text link">Product No Zoom <span
                                                            className="demo-label">Hot</span></Link></li>
                                                        <li><Link to="product-external-zoom.html" className="menu-link-text link">Product External
                                                            Zoom</Link>
                                                        </li>
                                                        <li><Link to="product-open-lightbox.html" className="menu-link-text link">Product Open Lightbox
                                                            <span className="demo-label bg-primary">New</span></Link></li>
                                                        <li><Link to="product-video.html" className="menu-link-text link">Product
                                                            Video</Link></li>
                                                        <li><Link to="product-3d.html" className="menu-link-text link">Product
                                                            3D/AR</Link></li>
                                                        <li><Link to="product-group.html" className="menu-link-text link">Product
                                                            Group</Link></li>
                                                        <li><Link to="product-affiliate.html" className="menu-link-text link">Product
                                                            Affiliate</Link></li>
                                                        <li><Link to="product-out-of-stock.html" className="menu-link-text link">Product
                                                            Out Of Stock</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">product features</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="product-together.html" className="menu-link-text link">Buy
                                                            Together</Link></li>
                                                        <li><Link to="product-countdown-timer.html" className="menu-link-text link">Countdown Timer</Link>
                                                        </li>
                                                        <li><Link to="product-volume-discount.html" className="menu-link-text link">Volume Discount</Link>
                                                        </li>
                                                        <li><Link to="product-volume-discount-thumbnail.html" className="menu-link-text link">Volume
                                                            Discount
                                                            Thumbnail</Link>
                                                        </li>
                                                        <li><Link to="product-swatch-dropdown.html" className="menu-link-text link">Swatch Dropdown</Link>
                                                        </li>
                                                        <li><Link to="product-swatch-dropdown-color.html" className="menu-link-text link">Swatch Dropdown
                                                            Color</Link>
                                                        </li>
                                                        <li><Link to="product-swatch-image.html" className="menu-link-text link">Swatch Image</Link></li>
                                                        <li><Link to="product-swatch-image-square.html" className="menu-link-text link">Swatch Image
                                                            rectangle</Link>
                                                        </li>
                                                        <li><Link to="product-pickup-available.html" className="menu-link-text link">Pickup Available</Link>
                                                        </li>
                                                        <li><Link to="product-buyX-getY.html" className="menu-link-text link">Buy X Get Y</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-item">
                                                    <div className="menu-heading">Product description</div>
                                                    <ul className="menu-list">
                                                        <li><Link to="product-description-vertical.html" className="menu-link-text link">Product
                                                            Description
                                                            Vertical</Link>
                                                        </li>
                                                        <li><Link to="product-description-tab.html" className="menu-link-text link">Product Description
                                                            Tab</Link>
                                                        </li>
                                                        <li><Link to="product-description-accordions.html" className="menu-link-text link">Product
                                                            Description
                                                            Accordions</Link></li>
                                                        <li><Link to="product-description-side-accordions.html" className="menu-link-text link">Product
                                                            Description Side
                                                            Accordions</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wrapper-sub-product">
                                                <div dir="ltr" className="swiper tf-swiper wrap-sw-over" data-swiper='{
                                                          "slidesPerView": 2,
                                                          "spaceBetween": 24,
                                                          "speed": 800,
                                                          "observer": true,
                                                          "observeParents": true,
                                                          "slidesPerGroup": 2,
                                                          "navigation": {
                                                              "clickable": true,
                                                              "nextEl": ".nav-next-product-header",
                                                              "prevEl": ".nav-prev-product-header"
                                                          },
                                                          "pagination": { "el": ".sw-pagination-product-header", "clickable": true }
                                                      }'>
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- item 1 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="card-product style-3 style-primary none-hover-img">
                                                                <div className="card-product-wrapper asp-ratio-0">
                                                                    <Link to="product-detail.html" className="product-img">
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
                                                                <div className="card-product-info text-center pb-0">
                                                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Het Raadsel
                                                                        Van De Zee</Link>
                                                                    <p className="price-wrap fw-medium">
                                                                        <span className="price-new text-dark">$80.00</span>
                                                                    </p>
                                                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn rgb-primary mt_10">
                                                                        <span className="text-md fw-medium">
                                                                            Add to Cart
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- item 2 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="card-product style-3 style-primary none-hover-img">
                                                                <div className="card-product-wrapper asp-ratio-0">
                                                                    <Link to="product-detail.html" className="product-img">
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
                                                                <div className="card-product-info text-center pb-0">
                                                                    <Link to="product-detail.html"
                                                                        className="name-product link fw-medium text-md">Enceladus</Link>
                                                                    <p className="price-wrap fw-medium">
                                                                        <span className="price-new text-dark">$70.00</span>
                                                                    </p>
                                                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn rgb-primary mt_10">
                                                                        <span className="text-md fw-medium">
                                                                            Add to Cart
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- item 3 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="card-product style-3 style-primary none-hover-img">
                                                                <div className="card-product-wrapper asp-ratio-0">
                                                                    <Link to="product-detail.html" className="product-img">
                                                                        <img className="img-product lazyload" data-src="/assets/images/products/book/book12.jpg"
                                                                            src="/assets/images/products/book/book12.jpg" alt="image-product" />
                                                                    </Link>
                                                                    <div className="on-sale-wrap pos2"><span className="on-sale-item">10% Off</span></div>
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
                                                                <div className="card-product-info text-center pb-0">
                                                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">All This &
                                                                        More</Link>
                                                                    <p className="price-wrap fw-medium">
                                                                        <span className="price-new">$60.00</span>
                                                                        <span className="price-old">$70.00</span>
                                                                    </p>
                                                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn rgb-primary mt_10">
                                                                        <span className="text-md fw-medium">
                                                                            Add to Cart
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- item 4 --> */}
                                                        <div className="swiper-slide">
                                                            <div className="card-product style-3 style-primary none-hover-img">
                                                                <div className="card-product-wrapper asp-ratio-0">
                                                                    <Link to="product-detail.html" className="product-img">
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
                                                                <div className="card-product-info text-center pb-0">
                                                                    <Link to="product-detail.html" className="name-product link fw-medium text-md">Delivery
                                                                        Girl</Link>
                                                                    <p className="price-wrap fw-medium">
                                                                        <span className="price-new text-dark">$82.00</span>
                                                                    </p>
                                                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn rgb-primary mt_10">
                                                                        <span className="text-md fw-medium">
                                                                            Add to Cart
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sw-dot-default sw-pagination-product-header justify-content-center">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item position-relative">
                                        <Link to="#" className="item-link">All Products<i className="icon icon-arr-down"></i></Link>
                                        <div className="sub-menu sub-menu-style-3">
                                            <ul className="menu-list mt-0">
                                                <li>
                                                    <div className="menu-heading">Blogs</div>
                                                </li>
                                                <li><Link to="blog-list-01.html" className="menu-link-text link">Blog List
                                                    1</Link>
                                                </li>
                                                <li><Link to="blog-list-02.html" className="menu-link-text link">Blog List
                                                    2</Link>
                                                </li>
                                                <li><Link to="blog-grid-01.html" className="menu-link-text link">Blog Grid
                                                    1</Link>
                                                </li>
                                                <li><Link to="blog-grid-02.html" className="menu-link-text link">Blog Grid
                                                    2</Link>
                                                </li>
                                                <li><Link to="blog-single.html" className="menu-link-text link">Single Blog
                                                </Link>
                                                </li>
                                            </ul>
                                            <div className="wrapper-sub-blog">
                                                <div className="menu-heading">Recent Posts</div>
                                                <ul className="list-recent-blog">
                                                    <li className="item">
                                                        <Link to="blog-single.html" className="img-box">
                                                            <img src="/assets/images/blog/recent-1.jpg" alt="img-recent-blog" />
                                                        </Link>
                                                        <div className="content">
                                                            <Link to="blog-single.html" className="fw-medium text-sm link title">The Power of
                                                                Monochrome: Styling One Color</Link>
                                                            <span className="text-xxs text-grey date-post">Sep 19
                                                                2025</span>
                                                        </div>
                                                    </li>
                                                    <li className="item">
                                                        <Link to="blog-single.html" className="img-box">
                                                            <img src="/assets/images/blog/recent-2.jpg" alt="img-recent-blog" />
                                                        </Link>
                                                        <div className="content">
                                                            <Link to="blog-single.html" className="fw-medium text-sm link title">10 Must-Have
                                                                Accessories htmlFor Every Season</Link>
                                                            <span className="text-xxs text-grey date-post">Sep 19
                                                                2025</span>
                                                        </div>
                                                    </li>
                                                    <li className="item">
                                                        <Link to="blog-single.html" className="img-box">
                                                            <img src="/assets/images/blog/recent-3.jpg" alt="img-recent-blog" />
                                                        </Link>
                                                        <div className="content">
                                                            <Link to="blog-single.html" className="fw-medium text-sm link title">How to Elevate Your
                                                                Look with Layering</Link>
                                                            <span className="text-xxs text-grey date-post">Sep 19
                                                                2025</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="box-phone">
                            <div className="box-icon bg-light-orange-6">
                                <i className="icon icon-head-phone"></i>
                            </div>
                            <Link to="tel:123456789" className="text-xl fw-medium">+1 123 456 789</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}