import { Link, NavLink } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect, useRef, useState } from "react";
import { fetchUser, updateUser } from "../../api/my-account-api";
import toast from "react-hot-toast";

export default function MyAccountDetails() {

    const activeURI = window.location.pathname;

    // STATE VARIABLES
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDOB] = useState("");
    const [userReferralCode, setUserReferralCode] = useState("");

    const [loading, setLoading] = useState(false);
    const hasFetched = useRef(false);

    useEffect(() => {
        document.title = "My Account Details - BMS Book Store";
        if (hasFetched.current) return;
        hasFetched.current = true;
        fetchUserDetails();
    }, []);

    // FETCH DETAILS
    const fetchUserDetails = async () => {
        try {
            setLoading(true);
            const res = await fetchUser();
            setFullName(res.data?.data?.full_name);
            setEmailAddress(res.data?.data?.email_address);
            setPhoneNumber(res.data?.data?.phone_number);
            setDOB(res.data?.data?.dob);
            setUserReferralCode(res.data?.data?.user_referral_code);
            setLoading(false);
        } catch (e) {
            console.error("Error! while fetching user => ", e);
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName.trim()) {
            toast.error("Name is required.");
            return;
        }
        if (!emailAddress.trim()) {
            toast.error("Email is required.");
            return;
        }
        if (!phoneNumber.trim()) {
            toast.error("Phone number is required.");
            return;
        }
        if (!dob.trim()) {
            toast.error("Date of Birth is required.");
            return;
        }

        const form = new FormData();
        form.append('full_name', fullName);
        form.append('email_address', emailAddress);
        form.append('phone_number', phoneNumber);
        form.append('dob', dob);

        try {
            const res = await updateUser(form);
            if (res.data?.status === 'Success') {
                toast.success("Details updated." || res.data?.message);
            } else {
                toast.error("Failed to update." || res.data?.message);
            }
        } catch (e) {
            console.error("Error! while updating user => ", e);
        }
    };

    return (
        <PageLayout>
            {/* <!-- Loading Overlay --> */}
            {loading && (
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
                        Loading...
                    </p>
                </div>
            )}

            {/* <!-- Title Page --> */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">My Account</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" href="index.html">Home</Link>
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
                                <li>
                                    <Link to="/my-account"
                                        className="text-sm link fw-medium my-account-nav-item">Dashboard</Link>
                                </li>
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
                                {activeURI === "/bms-book-store/my-account-details" ?
                                    <li>
                                        <NavLink to="/my-account-details"
                                            className="text-sm link fw-medium my-account-nav-item">Account Details</NavLink>
                                    </li> : <li>
                                        <Link to="/my-account-details"
                                            className="text-sm link fw-medium my-account-nav-item">Account Details</Link>
                                    </li>
                                }
                                <li>
                                    <Link to="#" className="text-sm link fw-medium my-account-nav-item">Log
                                        Out</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="my-acount-content account-dashboard">
                            <form className="form-edit-account" onSubmit={handleSubmit}>
                                <h6 className="display-xs title-form">Account Details</h6>
                                <div className="form-name">
                                    <div className="tf-field style-2 style-3">
                                        <input className="tf-field-input tf-input" id="fullName" placeholder="Full name*" type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="none" />
                                        <label className="tf-field-label" htmlFor="fullName">First name</label>
                                    </div>
                                    <div className="tf-field style-2 style-3">
                                        <input className="tf-field-input tf-input" id="email" placeholder=" " type="email"
                                            name="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} autoComplete="new-email-address" />
                                        <label className="tf-field-label" htmlFor="email">Email</label>
                                    </div>
                                    <div className="tf-field style-2 style-3">
                                        <input className="tf-field-input tf-input" id="phone" placeholder=" " type="tel"
                                            name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="new-phone" disabled />
                                        <label className="tf-field-label" htmlFor="phone">Phone number</label>
                                    </div>
                                    <div className="tf-field style-2 style-3">
                                        <input className="tf-field-input tf-input" id="dob" placeholder=" " type="date"
                                            name="dob" value={dob} onChange={(e) => setDOB(e.target.value)} />
                                        <label className="tf-field-label" htmlFor="dob">Date of Birth</label>
                                    </div>
                                    <div className="tf-field style-2 style-3">
                                        <input className="tf-field-input tf-input" id="referralCode" placeholder=" " type="text"
                                            name="referralCode" value={userReferralCode} onChange={(e) => setUserReferralCode(e.target.value)} disabled />
                                        <label className="tf-field-label" htmlFor="referralCode">Referral Code</label>
                                    </div>
                                </div>
                                <button type="submit" className="tf-btn animate-btn">Save Changes</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- /Account --> */}
                </div>
            </div>
            {/* <!-- /Main Content --> */}
        </PageLayout>
    );
}