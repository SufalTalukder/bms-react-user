import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useUser } from "../../context/UserContext";

export default function DashboardView() {

    const activeURI = window.location.pathname;
    const { logout, user } = useUser();
    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {
        document.title = "Dashboard - BMS Book Store";
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoggingOut(true);
        await logout();
        setLoggingOut(false);
    };

    return (
        <PageLayout>
            {/* <!-- Logout Loading Overlay --> */}
            {loggingOut && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.45)",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                    }}
                >
                    <div className="spinner-border text-light" role="status" style={{ width: "48px", height: "48px" }} />
                    <p style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600, margin: 0 }}>
                        Logging out...
                    </p>
                </div>
            )}

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

            {/* <!-- Main Content --> */}
            <div className="flat-spacing-13">
                <div className="container-7">
                    <div className="btn-sidebar-mb d-lg-none">
                        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
                            <i className="icon icon-sidebar"></i>
                        </button>
                    </div>

                    <div className="main-content-account">
                        <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                            <ul className="my-account-nav">
                                {activeURI === "/bms-book-store/my-account" ? (
                                    <li>
                                        <NavLink to="/my-account"
                                            className="text-sm link fw-medium my-account-nav-item">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li>
                                        <Link to="/my-account"
                                            className="text-sm link fw-medium my-account-nav-item">
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link to="/my-orders"
                                        className="text-sm link fw-medium my-account-nav-item">
                                        My Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wish-list"
                                        className="text-sm link fw-medium my-account-nav-item">
                                        My Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-addresses"
                                        className="text-sm link fw-medium my-account-nav-item">
                                        Addresses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-account-details"
                                        className="text-sm link fw-medium my-account-nav-item">
                                        Account Details
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`text-sm link fw-medium my-account-nav-item ${loggingOut ? "disabled" : ""}`}
                                        onClick={handleLogout}
                                        style={{ pointerEvents: loggingOut ? "none" : "auto", opacity: loggingOut ? 0.6 : 1 }}
                                    >
                                        {loggingOut ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Logging out...
                                            </>
                                        ) : (
                                            "Log Out"
                                        )}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="my-acount-content account-dashboard">
                            <div className="box-account-title">
                                <p className="hello-name display-sm fw-medium">
                                    Hello {user?.full_name ?? "User"}!
                                    <span>(not <span className="name">{user?.full_name ?? "User"}</span>?</span>
                                    <Link
                                        to="#"
                                        className="text-decoration-underline link"
                                        onClick={handleLogout}
                                    >
                                        {loggingOut ? "Logging out..." : "Log Out"}
                                    </Link>
                                    <span>)</span>
                                </p>
                                <p className="notice text-sm">
                                    Today is a great day to check your account page. You can check{" "}
                                    <Link to="/my-orders" className="text-primary text-decoration-underline">
                                        your last orders
                                    </Link>{" "}
                                    or have a look at{" "}
                                    <Link to="/wish-list" className="text-primary text-decoration-underline">
                                        your wishlist
                                    </Link>. Or maybe you can start to shop{" "}
                                    <Link to="/product-default" className="text-primary text-decoration-underline">
                                        our latest offers
                                    </Link>?
                                </p>
                            </div>

                            <div className="content-account">
                                <ul className="box-check-list flex-sm-nowrap">
                                    <li>
                                        <Link to="/my-orders" className="box-check text-center">
                                            <div className="icon">
                                                <i className="icon-order"></i>
                                                <span className="count-number text-sm text-white fw-medium">1</span>
                                            </div>
                                            <div className="text">
                                                <div className="link name-type text-xl fw-medium">Orders</div>
                                                <p className="sub-type text-sm">Check the history of all your orders</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wish-list" className="box-check text-center">
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
                                        <img src="/assets/images/banner/account-1.jpg"
                                            data-src="/assets/images/banner/account-1.jpg"
                                            alt="" className="lazyload" />
                                    </div>
                                    <div className="banner-content-right">
                                        <div className="banner-title">
                                            <p className="display-md fw-medium">Free Shipping</p>
                                            <p className="text-md">for all orders over $300.00</p>
                                        </div>
                                        <div className="banner-btn">
                                            <Link to="/product-default" className="tf-btn animate-btn">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner-account banner-acc-countdown bg-linear d-flex align-items-center">
                                    <div className="banner-content-left">
                                        <div className="banner-title">
                                            <p className="sub text-md fw-medium">SUMMER SALE</p>
                                            <p className="display-xl fw-medium">50% OFF</p>
                                            <p className="sub text-md fw-medium">WITH PROMOTE CODE: 12D34E</p>
                                        </div>
                                        <div className="banner-btn">
                                            <Link to="/product-default"
                                                className="tf-btn btn-white animate-btn animate-dark">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-countdown">
                                        <div className="wg-countdown-2">
                                            <span className="js-countdown" data-timer="46556"
                                                data-labels="Days,Hours,Mins,Secs" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}