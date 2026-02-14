import { useEffect } from "react";
import PageLayout from "../../PageLayout";
import { Link, NavLink } from "react-router-dom";

export default function MyAddressView() {

    const activeURI = window.location.pathname;

    useEffect(() => {
        document.title = "My Addresses - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">Addresses</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Addresses</div>
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
                    {/* <!-- Account --> */}
                    <div className="main-content-account">
                        <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                            <ul className="my-account-nav">
                                <li>
                                    <Link to="/my-account"
                                        className="text-sm link fw-medium my-account-nav-item">Dashboard</Link>
                                </li>
                                <li>
                                    <NavLink to="/my-orders" className="text-sm link fw-medium my-account-nav-item">My
                                        Orders</NavLink>
                                </li>
                                <li>
                                    <Link to="/wish-list" className="text-sm link fw-medium my-account-nav-item">My
                                        Wishlist</Link>
                                </li>
                                {activeURI === "/bms-book-store/my-addresses" ?
                                    <li>
                                        <NavLink to="/my-addresses"
                                            className="text-sm link fw-medium my-account-nav-item">Addresses</NavLink>
                                    </li> : <li>
                                        <Link to="/my-addresses" className="text-sm link fw-medium my-account-nav-item">My
                                            Addresses</Link>
                                    </li>
                                }
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
                        <div className="my-acount-content account-address">
                            <h6 className="title-account">
                                Your addresses (2)
                            </h6>
                            <div className="widget-inner-address ">
                                <button className="tf-btn btn-add-address animate-btn">
                                    Add new address
                                </button>
                                <form action="#" className="wd-form-address form-default show-form-address">
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="first-name">First Name</label>
                                            <input type="text" id="first-name" required />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="last-name">Last Name</label>
                                            <input type="text" id="last-name" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="company">Company</label>
                                            <input type="text" id="company" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="address-1">Address 1</label>
                                            <input type="text" id="address-1" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="region">Country/region</label>
                                            <input type="text" id="region" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="provice">Province</label>
                                            <input type="text" id="provice" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="zip-code">Postal/ZIP code</label>
                                            <input type="text" id="zip-code" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" required />
                                        </fieldset>
                                    </div>
                                    <div className="tf-cart-checkbox">
                                        <input type="checkbox" name="availability" className="tf-check" defaultChecked
                                            id="default-address-add" />
                                        <label htmlFor="default-address-add" className="label">
                                            <span>Set as default address</span>
                                        </label>
                                    </div>
                                    <div className="box-btn">
                                        <button className="tf-btn animate-btn" type="submit">
                                            Update
                                        </button>
                                        <Link to="#" className="tf-btn btn-out-line-dark btn-hide-address">
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                                <ul className="list-account-address tf-grid-layout md-col-2">
                                    <li className="account-address-item">
                                        <p className="title text-md fw-medium">
                                            15 Yarran st (Default address)
                                        </p>
                                        <div className="info-detail">
                                            <div className="box-infor">
                                                <p className="text-md">Vineta Pham</p>
                                                <p className="text-md">account@vince.com</p>
                                                <p className="text-md">Company</p>
                                                <p className="text-md">16 Yarran st</p>
                                                <p className="text-md">Punchbowl</p>
                                                <p className="text-md">Australia</p>
                                                <p className="text-md">2196</p>
                                                <p className="text-md">+61 1234 3435</p>
                                            </div>
                                            <div className="box-btn">
                                                <button className="tf-btn btn-out-line-dark btn-edit-address"
                                                    data-form="form-edit-1">
                                                    Edit
                                                </button>
                                                <button className="tf-btn btn-out-line-dark btn-delete-address"
                                                    data-form="form-edit-1">
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="account-address-item">
                                        <p className="title text-md fw-medium">
                                            17 Yarran st
                                        </p>
                                        <div className="info-detail">
                                            <div className="box-infor">
                                                <p className="text-md">Vineta Pham</p>
                                                <p className="text-md">account@vince.com</p>
                                                <p className="text-md">Company</p>
                                                <p className="text-md">17 Yarran st</p>
                                                <p className="text-md">Punchbowl</p>
                                                <p className="text-md">Australia</p>
                                                <p className="text-md">2196</p>
                                                <p className="text-md">+61 1234 3435</p>
                                            </div>
                                            <div className="box-btn">
                                                <button className="tf-btn btn-out-line-dark btn-edit-address"
                                                    data-form="form-edit-2">
                                                    Edit
                                                </button>
                                                <button className="tf-btn btn-out-line-dark btn-delete-address"
                                                    data-form="form-edit-2">
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                                <form action="#" className="wd-form-address form-default edit-form-address">
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="first-name">First Name</label>
                                            <input type="text" id="first-name" required />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="last-name">Last Name</label>
                                            <input type="text" id="last-name" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="company">Company</label>
                                            <input type="text" id="company" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="address-1">Address 1</label>
                                            <input type="text" id="address-1" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="region">Country/region</label>
                                            <input type="text" id="region" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="provice">Province</label>
                                            <input type="text" id="provice" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="zip-code">Postal/ZIP code</label>
                                            <input type="text" id="zip-code" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" required />
                                        </fieldset>
                                    </div>
                                    <div className="tf-cart-checkbox">
                                        <input type="checkbox" name="availability" className="tf-check" defaultChecked
                                            id="default-address-edit" />
                                        <label htmlFor="default-address-edit" className="label">
                                            <span>Set as default address</span>
                                        </label>
                                    </div>
                                    <div className="box-btn">
                                        <button className="tf-btn animate-btn" type="submit">
                                            Update
                                        </button>
                                        <Link to="#"
                                            className="tf-btn btn-out-line-dark btn-hide-edit-address">
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
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