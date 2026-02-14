import { Link, NavLink } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect } from "react";

export default function MyOrdersView() {

    const activeURI = window.location.pathname;

    useEffect(() => {
        document.title = "My Orders - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">My Orders</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Orders</div>
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
                                <li>
                                    <Link to="/my-account"
                                        className="text-sm link fw-medium my-account-nav-item">Dashboard</Link>
                                </li>
                                {activeURI === "/bms-book-store/my-orders" ?
                                    <li>
                                        <NavLink to="/my-orders" className="text-sm link fw-medium my-account-nav-item">My
                                            Orders</NavLink>
                                    </li> : <li>
                                        <Link to="/my-orders" className="text-sm link fw-medium my-account-nav-item">My
                                            Orders</Link>
                                    </li>
                                }
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
                        <div className="my-acount-content account-orders">
                            <div className="account-no-orders-wrap">
                                <img className="lazyload" data-src="/assets/images/section/account-no-order.png"
                                    src="/assets/images/section/account-no-order.png" alt="" />
                                <div className="display-sm fw-medium title">You haven’t placed any order yet</div>
                                <div className="text text-sm">It’s time to make your first order</div>
                                <Link to="shop-fullwidth.html"
                                    className="tf-btn animate-btn d-inline-flex bg-dark-2 justify-content-center">Shop
                                    Now</Link>
                            </div>
                            <div className="account-orders-wrap">
                                <h5 className="title">
                                    Order History
                                </h5>
                                <div className="wrap-account-order">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="text-md fw-medium">Order ID</th>
                                                <th className="text-md fw-medium">Date</th>
                                                <th className="text-md fw-medium">Status</th>
                                                <th className="text-md fw-medium">Total</th>
                                                <th className="text-md fw-medium">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="tf-order-item">
                                                <td className="text-md">
                                                    #12345
                                                </td>
                                                <td className="text-md">
                                                    15 May 2025
                                                </td>
                                                <td className="text-md text-delivered">
                                                    Delivered
                                                </td>
                                                <td className="text-md">
                                                    $690 / 3 items
                                                </td>
                                                <td>
                                                    <Link to="#order_detail" data-bs-toggle="modal"
                                                        className="view-detail">Detail</Link>
                                                </td>
                                            </tr>
                                            <tr className="tf-order-item">
                                                <td className="text-md">
                                                    #23154
                                                </td>
                                                <td className="text-md">
                                                    16 May 2025
                                                </td>
                                                <td className="text-md text-delivered">
                                                    Delivered
                                                </td>
                                                <td className="text-md">
                                                    $460 / 2 items
                                                </td>
                                                <td>
                                                    <Link to="#order_detail" data-bs-toggle="modal"
                                                        className="view-detail">Detail</Link>
                                                </td>
                                            </tr>
                                            <tr className="tf-order-item">
                                                <td className="text-md">
                                                    #12467
                                                </td>
                                                <td className="text-md">
                                                    17 May 2025
                                                </td>
                                                <td className="text-md text-on-the-way">
                                                    On the way
                                                </td>
                                                <td className="text-md">
                                                    $920 / 4 items
                                                </td>
                                                <td>
                                                    <Link to="#order_detail" data-bs-toggle="modal"
                                                        className="view-detail">Detail</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Account --> */}
                </div>
            </div>
            {/* <!-- /Main Content --> */}

            {/* <!-- order-detail --> */}
            <div className="modal fade modalCentered modal-order-detail" id="order_detail">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="header">
                            <div className="heading">Order Detail</div>
                            <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                        </div>
                        <ul className="list-infor">
                            <li>#12345</li>
                            <li>15 May 2025</li>
                            <li>6 items</li>
                            <li className="text-delivered">Delivered</li>
                        </ul>
                        <div className="tb-order-detail">
                            <div className="top">
                                <div className="title item">Product</div>
                                <div className="title item d-md-block d-none">Quantity</div>
                                <div className="title item d-md-block d-none">Price</div>
                                <div className="title item d-md-block d-none">Total</div>
                            </div>
                            <div className="tb-content">
                                <div className="order-detail-item">
                                    <div className="item">
                                        <div className="infor-content">
                                            <div className="image">
                                                <Link href="product-detail.html">
                                                    <img className="lazyload" data-src="/assets/images/products/fashion/product-1.jpg"
                                                        src="/assets/images/products/fashion/product-1.jpg" alt="img-product" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className="link" href="product-detail.html">Loose Fit Tee</Link>
                                                <div className="size">White / L</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-title="Quantity">
                                        2
                                    </div>
                                    <div className="item" data-title="Price">
                                        $130.00
                                    </div>
                                    <div className="item" data-title="Total">
                                        $260.00
                                    </div>
                                </div>
                                <div className="order-detail-item">
                                    <div className="item">
                                        <div className="infor-content">
                                            <div className="image">
                                                <Link href="product-detail.html">
                                                    <img className="lazyload" data-src="/assets/images/products/fashion/product-2.jpg"
                                                        src="/assets/images/products/fashion/product-2.jpg" alt="img-product" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className="link" href="product-detail.html">Loose Fit Tee</Link>
                                                <div className="size">White / L</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-title="Quantity">
                                        2
                                    </div>
                                    <div className="item" data-title="Price">
                                        $130.00
                                    </div>
                                    <div className="item" data-title="Total">
                                        $260.00
                                    </div>
                                </div>
                                <div className="order-detail-item">
                                    <div className="item">
                                        <div className="infor-content">
                                            <div className="image">
                                                <Link href="product-detail.html">
                                                    <img className="lazyload" data-src="/assets/images/products/fashion/product-3.jpg"
                                                        src="/assets/images/products/fashion/product-3.jpg" alt="img-product" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className="link" href="product-detail.html">Loose Fit Tee</Link>
                                                <div className="size">White / L</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-title="Quantity">
                                        2
                                    </div>
                                    <div className="item" data-title="Price">
                                        $130.00
                                    </div>
                                    <div className="item" data-title="Total">
                                        $260.00
                                    </div>
                                </div>
                                <div className="order-detail-item subtotal">
                                    <div className="item d-md-block d-none"></div>
                                    <div className="item d-md-block d-none"></div>
                                    <div className="item subtotal-text">
                                        Subtotal:
                                    </div>
                                    <div className="item subtotal-price">
                                        $720.00 USD
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom text-center">
                            Not happy with the order? You can <Link href="return-and-refund.html"
                                className="fw-medium btn-underline">Request a free return</Link> in <span className="fw-medium">14
                                    days</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /order-detail --> */}
        </PageLayout>
    );
}