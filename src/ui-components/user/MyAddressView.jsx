import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import PageLayout from "../../PageLayout";
import { Link, NavLink } from "react-router-dom";
import { fetchAddressDetails, fetchAllAddresses, addUpdateAddress, deleteAddress } from "../../api/my-account-api";
import { useUser } from "../../context/UserContext";

function AddressSkeleton() {
    return (
        <div className="my-acount-content account-address">

            {/* Title: "Your Addresses (n)" */}
            <div className="skeleton" style={{ height: 20, width: 180, marginBottom: "1.5rem", borderRadius: 5 }} />

            <div className="widget-inner-address">

                {/* Add New Address button */}
                <div className="skeleton" style={{ height: 42, width: 170, borderRadius: 6, marginBottom: "1.5rem" }} />

                {/* Address cards grid */}
                <ul className="list-account-address tf-grid-layout md-col-2" style={{ listStyle: "none", padding: 0 }}>
                    {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="account-address-item">
                            <div style={{
                                border: "1px solid #ebebeb",
                                borderRadius: 8,
                                padding: "18px 16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}>
                                {/* Address type badge + address line */}
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <div className="skeleton" style={{ height: 20, width: 52, borderRadius: 4 }} />
                                    <div className="skeleton" style={{ height: 14, width: "55%", borderRadius: 4 }} />
                                </div>

                                {/* City, State, Country, Pincode line */}
                                <div className="skeleton" style={{ height: 13, width: "80%", borderRadius: 4 }} />

                                {/* Edit / Delete buttons */}
                                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                                    <div className="skeleton" style={{ height: 34, width: 72, borderRadius: 5 }} />
                                    <div className="skeleton" style={{ height: 34, width: 72, borderRadius: 5 }} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const EMPTY_FORM = {
    address_type: "",
    user_address: "",
    user_city: "",
    user_state: "",
    user_country: "",
    user_pincode: "",
    set_address_default: 0,
};

const ADDRESS_TYPES = ["Home", "Office", "Others"];

function AddressForm({ activePanel, form, onChange, onSubmit, onCancel, submitLabel, loading }) {
    return (
        <form
            onSubmit={onSubmit}
            className="wd-form-address form-default show-form-address"
            style={activePanel === "add" ? { display: "block", border: "1px solid #ebebeb" } : { display: "block", border: "0px solid #ebebeb" }}
        >

            <div className="cols">
                <fieldset>
                    <label htmlFor="address_type">Address Type <span className="text-danger">*</span></label>
                    <select
                        id="address_type"
                        name="address_type"
                        value={form.address_type}
                        onChange={onChange}
                        required
                    >
                        <option value="">-- Select --</option>
                        {ADDRESS_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </fieldset>
            </div>

            <div className="cols">
                <fieldset>
                    <label htmlFor="user_address">Address <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        id="user_address"
                        name="user_address"
                        value={form.user_address}
                        onChange={onChange}
                        minLength={5}
                        maxLength={100}
                        autoComplete="off"
                        required
                    />
                </fieldset>
            </div>

            <div className="cols">
                <fieldset>
                    <label htmlFor="user_city">City <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        id="user_city"
                        name="user_city"
                        value={form.user_city}
                        onChange={onChange}
                        minLength={3}
                        maxLength={20}
                        autoComplete="off"
                        required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="user_state">State <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        id="user_state"
                        name="user_state"
                        value={form.user_state}
                        onChange={onChange}
                        minLength={3}
                        maxLength={20}
                        autoComplete="off"
                        required
                    />
                </fieldset>
            </div>

            <div className="cols">
                <fieldset>
                    <label htmlFor="user_country">Country <span className="text-danger">*</span></label>
                    <select
                        id="user_country"
                        name="user_country"
                        value={form.user_country}
                        onChange={onChange}
                        required
                    >
                        <option value="">-- Select --</option>
                        <option value="India">India</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="user_pincode">Pincode <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        id="user_pincode"
                        name="user_pincode"
                        value={form.user_pincode}
                        onChange={onChange}
                        minLength={6}
                        maxLength={6}
                        pattern="\d{6}"
                        title="Enter a valid 6-digit pincode"
                        autoComplete="off"
                        required
                    />
                </fieldset>
            </div>
            <div className="cols">
                <div className="tf-cart-checkbox">
                    <input
                        type="checkbox"
                        id="set_address_default"
                        name="set_address_default"
                        className="tf-check"
                        onChange={onChange}
                        checked={form.set_address_default === 1}
                    />
                    <label htmlFor="set_address_default" className="label">
                        <span>Set as default address</span>
                    </label>
                </div>
            </div>

            <div className="box-btn">
                <button className="tf-btn animate-btn" type="submit" disabled={loading}>
                    {loading ? "Please wait…" : submitLabel}
                </button>
                <button type="button" className="tf-btn btn-out-line-dark" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default function MyAddressView() {

    const activeURI = window.location.pathname;

    const [addressList, setAddressList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [activePanel, setActivePanel] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);

    const { logout } = useUser();
    const [loggingOut, setLoggingOut] = useState(false);

    const hasFetched = useRef(false);

    useEffect(() => {
        document.title = "My Addresses - BMS Book Store";
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadAddresses();
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoggingOut(true);
        await logout();
        setLoggingOut(false);
    };

    // RESET PANEL
    const resetPanel = () => {
        setActivePanel(null);
        setEditingId(null);
        setForm(EMPTY_FORM);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
        }));
    };

    // OPEN ADD NEW ADDRESS PANEL
    const handleOpenAdd = () => {
        if (activePanel === "add") {
            resetPanel();
        } else {
            resetPanel();
            setActivePanel("add");
        }
    };

    // LOAD ALL ADDRESSES
    const loadAddresses = async () => {
        try {
            setLoading(true);
            const res = await fetchAllAddresses();
            setAddressList(res.data?.data ?? []);
        } catch (e) {
            if (e?.response?.status !== 404) {
                toast.error("Failed to load addresses.");
            }
            setAddressList([]);
        } finally {
            setLoading(false);
        }
    };

    // HANDLE SUBMIT FOR CREATE OR UPDATE ADDRESS
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isEditing = activePanel === "edit";

        try {
            setLoading(true);
            await addUpdateAddress(form, isEditing ? editingId : null);
            toast.success(isEditing ? "Address updated." : "Address added.");
            await loadAddresses();
            resetPanel();
        } catch (e) {
            const msg = e?.response?.data?.message;
            const errorText = msg && typeof msg === "object"
                ? Object.values(msg).flat().join(" ")
                : msg || "Something went wrong. Please try again.";
            toast.error(errorText);
        } finally {
            setLoading(false);
        }
    };

    // HANDLE EDIT
    const handleEdit = async (uaId) => {
        if (activePanel === "edit" && editingId === uaId) {
            resetPanel();
            return;
        }

        try {
            setLoading(true);
            const res = await fetchAddressDetails(uaId);
            const d = Array.isArray(res.data?.data) ? res.data.data[0] : res.data?.data;
            if (!d) { toast.error("Address not found."); return; }

            setForm({
                address_type: d.address_type ?? "",
                user_address: d.user_address ?? "",
                user_city: d.user_city ?? "",
                user_state: d.user_state ?? "",
                user_country: d.user_country ?? "",
                user_pincode: d.user_pincode ?? "",
                set_address_default: d.set_address_default === 1 ? 1 : 0,
            });
            setEditingId(uaId);
            setActivePanel("edit");
        } catch {
            toast.error("Failed to load address details.");
        } finally {
            setLoading(false);
        }
    };

    // DELETE ADDRESS
    const handleDelete = async (uaId) => {
        if (!window.confirm("Are you sure you want to delete this address ?")) return;
        try {
            setLoading(true);
            await deleteAddress(uaId);
            toast.success("Address deleted.");
            if (editingId === uaId) resetPanel();
            setAddressList((prev) => prev.filter((a) => a.user_address_id !== uaId));
        } catch {
            toast.error("Failed to delete address. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageLayout>
            {/* Page Title */}
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

            {/* Main Content */}
            <div className="flat-spacing-13">
                <div className="container-7">

                    <div className="btn-sidebar-mb d-lg-none">
                        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
                            <i className="icon icon-sidebar"></i>
                        </button>
                    </div>

                    <div className="main-content-account">

                        {/* Sidebar Nav */}
                        <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                            <ul className="my-account-nav">
                                <li>
                                    <Link to="/my-account?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to="/my-orders?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
                                        My Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/wish-list?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
                                        My Wishlist
                                    </Link>
                                </li>
                                <li>
                                    {activeURI === "/bms-book-store/my-addresses" ? (
                                        <NavLink to="/my-addresses?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
                                            Addresses
                                        </NavLink>
                                    ) : (
                                        <Link to="/my-addresses?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
                                            My Addresses
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    <Link to="/my-account-details?marketplace=Vineta" className="text-sm link fw-medium my-account-nav-item">
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

                        {/* Account Content */}
                        {loading && addressList.length === 0 ? (
                            <AddressSkeleton />
                        ) : (
                            <div className="my-acount-content account-address">
                                <h6 className="title-account">
                                    Your Addresses ({addressList.length})
                                </h6>

                                <div className="widget-inner-address">
                                    {activePanel === "add" ? (
                                        <></>
                                    ) : (
                                        <button
                                            className="tf-btn btn-add-address animate-btn"
                                            onClick={handleOpenAdd}
                                        >
                                            + Add New Address
                                        </button>
                                    )}

                                    {activePanel === "add" && (
                                        <AddressForm
                                            activePanel={activePanel}
                                            form={form}
                                            onChange={handleChange}
                                            onSubmit={handleSubmit}
                                            onCancel={resetPanel}
                                            submitLabel="Save Address"
                                            loading={loading}
                                        />
                                    )}

                                    {addressList.length === 0 && !loading && (
                                        <p className="text-md" style={{ marginTop: "1rem", color: "#888" }}>
                                            No addresses saved yet.
                                        </p>
                                    )}

                                    <ul className="list-account-address tf-grid-layout md-col-2">
                                        {addressList.map((row) => (
                                            <li
                                                className="account-address-item"
                                                key={row.user_address_id}
                                                id={`address-${row.user_address_id}`}
                                            >
                                                {activePanel === "edit" && editingId === row.user_address_id ? (
                                                    <AddressForm
                                                        activePanel={activePanel}
                                                        form={form}
                                                        onChange={handleChange}
                                                        onSubmit={handleSubmit}
                                                        onCancel={resetPanel}
                                                        submitLabel="Update Address"
                                                        loading={loading}
                                                    />
                                                ) : (
                                                    <>
                                                        <p className="title text-md fw-medium">
                                                            {row.address_type && (
                                                                <span style={{
                                                                    marginRight: "6px",
                                                                    fontSize: "0.72rem",
                                                                    background: "#e8f0fe",
                                                                    color: "#1a56db",
                                                                    padding: "2px 8px",
                                                                    borderRadius: "4px",
                                                                    fontWeight: 600,
                                                                }}>
                                                                    {row.address_type}
                                                                </span>
                                                            )}
                                                            {row.user_address}
                                                        </p>
                                                        <div className="info-detail">
                                                            <p className="text-md">
                                                                {[row.user_city, row.user_state, row.user_country, row.user_pincode]
                                                                    .filter(Boolean)
                                                                    .join(", ")}
                                                            </p>
                                                            <div className="box-btn" style={{ marginTop: "10px" }}>
                                                                <button
                                                                    className="tf-btn btn-out-line-dark btn-edit-address"
                                                                    onClick={() => handleEdit(row.user_address_id)}
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="tf-btn btn-out-line-dark btn-delete-address"
                                                                    onClick={() => handleDelete(row.user_address_id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}