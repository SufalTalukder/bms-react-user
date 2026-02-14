import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PageLayout from "../../PageLayout";

export default function DashboardView() {

    const activeURI = window.location.pathname;

    useEffect(() => {
        document.title = "Dashboard - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">My Account</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Account</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Title Page --> */}

            {/* <!-- Main Content --> */}
            <div className="flat-spacing-13">
                <div className="container-7">
                    {/* <!-- sidebar-account --> */}
                    <div className="btn-sidebar-mb d-lg-none">
                        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
                            <i className="icon icon-sidebar"></i>
                        </button>
                    </div>
                    {/* <!-- /sidebar-account --> */}

                    {/* <!-- Section-acount --> */}
                    <div className="main-content-account">
                        <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                            <ul className="my-account-nav">
                                {activeURI === "/bms-book-store/my-account" ?
                                    <li>
                                        <NavLink to="/my-account"
                                            className="text-sm link fw-medium my-account-nav-item">Dashboard</NavLink>
                                    </li> : <li>
                                        <Link to="/my-account"
                                            className="text-sm link fw-medium my-account-nav-item">Dashboard</Link>
                                    </li>
                                }
                                <li>
                                    <Link to="/my-orders" className="text-sm link fw-medium my-account-nav-item">My
                                        Orders</Link>
                                </li>
                                <li>
                                    <Link to="/wish-list" className="text-sm link fw-medium my-account-nav-item">My
                                        Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/my-addresses"
                                        className="text-sm link fw-medium my-account-nav-item">Addresses</Link>
                                </li>
                                <li>
                                    <Link to="/my-account-details"
                                        className="text-sm link fw-medium my-account-nav-item">Account Details</Link>
                                </li>
                                <li>
                                    <Link to="" className="text-sm link fw-medium my-account-nav-item">Log
                                        Out</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="my-acount-content account-dashboard">
                            <div className="box-account-title">
                                <p className="hello-name display-sm fw-medium">
                                    Hello Vineta Pham!
                                    <span>(not <span className="name">Vineta Pham</span>?</span>
                                    <Link to="index.html" className="text-decoration-underline link">Log Out</Link>
                                    <span>)</span>
                                </p>
                                <p className="notice text-sm">
                                    Today is a great day to check your account page. You can check <Link
                                        to="account-orders.html" className="text-primary text-decoration-underline">your
                                        last orders</Link> or
                                    have a look to <Link to="wish-list.html"
                                        className="text-primary text-decoration-underline">your
                                        wishlist</Link> . Or maybe you can start to shop
                                    <Link to="shop-default.html" className="text-primary text-decoration-underline">our
                                        latest
                                        offers</Link> ?
                                </p>
                            </div>
                            <div className="content-account">
                                <ul className="box-check-list flex-sm-nowrap">
                                    <li>
                                        <Link to="account-orders.html" className="box-check text-center">
                                            <div className="icon">
                                                <i className="icon-order"></i>
                                                <span className="count-number text-sm text-white fw-medium">1</span>
                                            </div>
                                            <div className="text">
                                                <div className=" link name-type text-xl fw-medium">Orders</div>
                                                <p className="sub-type text-sm">Check the history of all your orders
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="wish-list.html" className="box-check text-center">
                                            <div className="icon">
                                                <i className="icon-heart"></i>
                                                <span className="count-number text-sm text-white fw-medium">1</span>
                                            </div>
                                            <div className="text">
                                                <div className="link name-type text-xl fw-medium">Wishlist</div>
                                                <p className="sub-type text-sm">Check your wishlist</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="banner-account">
                                    <div className="image">
                                        <img src="/assets/images/banner/account-1.jpg" data-src="/assets/images/banner/account-1.jpg" alt=""
                                            className="lazyload" />
                                    </div>
                                    <div className="banner-content-right">
                                        <div className="banner-title">
                                            <p className="display-md fw-medium">
                                                Free Shipping
                                            </p>
                                            <p className="text-md">
                                                for all orders over $300.00
                                            </p>
                                        </div>
                                        <div className="banner-btn">
                                            <Link to="shop-default.html" className="tf-btn animate-btn">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-account banner-acc-countdown bg-linear d-flex align-items-center">
                                    <div className="banner-content-left">
                                        <div className="banner-title">
                                            <p className="sub text-md fw-medium">
                                                SUMMER SALE
                                            </p>
                                            <p className="display-xl fw-medium">
                                                50% OFF
                                            </p>
                                            <p className="sub text-md fw-medium">
                                                WITH PROMOTE CODE: 12D34E
                                            </p>
                                        </div>
                                        <div className="banner-btn">
                                            <Link to="shop-default.html" className="tf-btn btn-white animate-btn animate-dark">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-countdown">
                                        <div className="wg-countdown-2">
                                            <span className="js-countdown" data-timer="46556"
                                                data-labels="Days,Hours,Mins,Secs"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Account --> */}
                </div>
            </div>
            {/* <!-- /Main Content --> */}
        </PageLayout>
    );
}