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
                            <Link to="/" className="logo-header">
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
                                                <Link className="search-result-item" to="/product-details">
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
                                                <Link className="search-result-item" to="/product-details">
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
                                                <Link className="search-result-item" to="/product-details">
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
                                                <Link className="search-result-item" to="/product-details">
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
                                    <Link to="#search" data-bs-toggle="modal" data-bs-target="#search" className="nav-icon-item">
                                        <i className="icon icon-search"></i>
                                    </Link>
                                </li>
                                <li className="nav-wishlist">
                                    <Link to="/my-account" className="nav-icon-item">
                                        <i className="icon icon-user"></i>
                                        <span className="text d-none d-xl-block">My Account</span>
                                    </Link>
                                </li>
                                <li className="nav-account">
                                    <Link to="#login" data-bs-toggle="offcanvas" data-bs-target="#login" className="nav-icon-item">
                                        <i className="icon icon-user"></i>
                                        <span className="text d-none d-xl-block">Login</span>
                                    </Link>
                                </li>
                                <li className="nav-wishlist">
                                    <Link to="/wish-list" className="nav-icon-item">
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
                                        <Link to="/product/fiction" className="cate-item">
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
                                    </li>
                                    <li className="menu-item">
                                    </li>
                                    <li className="menu-item">
                                    </li>
                                    <li className="menu-item position-relative">
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