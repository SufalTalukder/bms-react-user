import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect, useRef, useState, useCallback } from "react";
import { manageCart, fetchCartProductsByUser } from "../../api/product-api";
import { fetchAllAddresses } from "../../api/my-account-api";
import toast from "react-hot-toast";

function CartSkeleton() {
    return (
        <div className="tf-page-cart-main">
            <table className="table-page-cart">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((i) => (
                        <tr key={i} className="tf-cart-item">
                            <td className="tf-cart-item_product">
                                <div className="skeleton" style={{ width: 80, height: 100, borderRadius: 8, flexShrink: 0 }} />
                                <div className="cart-info" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <div className="skeleton" style={{ height: 14, width: 160, marginLeft: 25 }} />
                                    <div className="skeleton" style={{ height: 12, width: 80, marginLeft: 25 }} />
                                    <div className="skeleton" style={{ height: 12, width: 60, marginLeft: 25 }} />
                                </div>
                            </td>
                            <td className="tf-cart-item_price text-center">
                                <div className="skeleton" style={{ height: 14, width: 60, margin: "0 auto" }} />
                            </td>
                            <td className="tf-cart-item_quantity">
                                <div className="skeleton" style={{ height: 38, width: 110, borderRadius: 6, margin: "0 auto" }} />
                            </td>
                            <td className="tf-cart-item_total text-center">
                                <div className="skeleton" style={{ height: 14, width: 60, margin: "0 auto" }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function AddressSkeleton() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[1].map((i) => (
                <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div className="skeleton" style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div className="skeleton" style={{ height: 13, width: "60%" }} />
                        <div className="skeleton" style={{ height: 12, width: "90%" }} />
                        <div className="skeleton" style={{ height: 12, width: "50%" }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function EmptyCart() {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <i className="icon icon-bag" style={{ fontSize: 48, opacity: 0.3 }}></i>
            <p className="text-md text-dark-4" style={{ marginTop: 16 }}>Your cart is empty.</p>
            <Link to="/" className="tf-btn btn-dark2 animate-btn" style={{ marginTop: 20, display: "inline-block" }}>
                Continue Shopping
            </Link>
        </div>
    );
}

const defaultImg = "/assets/images/products/book/book9.jpg";

export default function AddToCartView() {

    const FREE_SHIPPING_THRESHOLD = 100;
    const GIFT_WRAP_PRICE = 10;

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState({});

    const [addresses, setAddresses] = useState([]);
    const [addressLoading, setAddressLoading] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const [giftWrap, setGiftWrap] = useState(false);
    const [discountCode, setDiscountCode] = useState("");

    const hasFetched = useRef(false);

    const userId = JSON.parse(localStorage.getItem("user"))?.user_id;

    useEffect(() => {
        document.title = "Cart List - BMS Book Store";
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadCart();
        loadAddresses();
    }, []);

    const loadCart = async () => {
        try {
            setLoading(true);
            const res = await fetchCartProductsByUser(userId);
            if (res.data?.success === "Success") {
                setCartItems(res.data?.data || []);
            } else {
                setCartItems([]);
            }
        } catch (e) {
            console.error("Error fetching cart:", e);
            setCartItems([]);
        } finally {
            setLoading(false);
        }
    };

    const loadAddresses = async () => {
        try {
            setAddressLoading(true);
            const res = await fetchAllAddresses();
            const data = res.data?.data || [];
            setAddresses(data);
            const defaultAddr = data.find((a) => a?.set_address_default === 1) || data[0];
            if (defaultAddr) setSelectedAddressId(defaultAddr?.user_address_id);
        } catch (e) {
            console.error("Error fetching addresses:", e);
        } finally {
            setAddressLoading(false);
        }
    };

    const handleCartAction = useCallback(async (productId, action) => {
        setActionLoading((prev) => ({ ...prev, [productId]: action }));
        try {
            const res = await manageCart({ user_id: userId, product_id: productId, action });
            if (res.data?.status === "Success") {
                if (action === "remove") {
                    setCartItems((prev) => prev.filter((item) => item.product_id !== productId));
                    toast.success("Item removed from cart.");
                } else if (action === "increment") {
                    setCartItems((prev) =>
                        prev.map((item) =>
                            item.product_id === productId
                                ? { ...item, quantity: res.data.data.quantity, each_product_total_price: res.data.data.each_product_total_price }
                                : item
                        )
                    );
                } else if (action === "decrement") {
                    const updated = res.data.data;
                    if (!updated) {
                        setCartItems((prev) => prev.filter((item) => item.product_id !== productId));
                    } else {
                        setCartItems((prev) =>
                            prev.map((item) =>
                                item.product_id === productId
                                    ? { ...item, quantity: updated.quantity, each_product_total_price: updated.each_product_total_price }
                                    : item
                            )
                        );
                    }
                }
            } else {
                toast.error(res.data?.message || "Action failed.");
            }
        } catch (e) {
            console.error("Cart action error:", e);
            toast.error("Something went wrong.");
        } finally {
            setActionLoading((prev) => ({ ...prev, [productId]: null }));
        }
    }, [userId]);

    // Totals and Progress Calculations
    const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.each_product_total_price || 0), 0);
    const giftWrapCost = giftWrap ? GIFT_WRAP_PRICE : 0;
    const grandTotal = subtotal + giftWrapCost;
    const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

    const handleApplyDiscount = () => {
        if (!discountCode.trim()) { toast.error("Please enter a discount code."); return; }
        toast.error("Invalid or expired discount code.");
    };

    return (
        <PageLayout>
            {/* Title */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">Shopping Cart</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Cart</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shipping Progress */}
            <div className="flat-spacing-24">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-sm-8">
                            <div className="tf-cart-head text-center">
                                {remainingForFreeShipping > 0 ? (
                                    <p className="text-xl-3 title text-dark-4">
                                        Spend <span className="fw-medium">₹{remainingForFreeShipping.toFixed(2)}</span> more to get{" "}
                                        <span className="fw-medium">Free Shipping</span>
                                    </p>
                                ) : (
                                    <p className="text-xl-3 title text-dark-4">
                                        🎉 You've unlocked <span className="fw-medium">Free Shipping!</span>
                                    </p>
                                )}
                                <div className="progress-sold tf-progress-ship">
                                    <div className="value" style={{ width: `${shippingProgress}%`, transition: "width 0.4s ease" }}>
                                        <i className="icon icon-car"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Section */}
            <div className="flat-spacing-2 pt-0 mt_15">
                <div className="container">
                    <div className="row">

                        {/* ── LEFT: Cart Table ── */}
                        <div className="col-xl-8">
                            {loading ? (
                                <CartSkeleton />
                            ) : cartItems.length === 0 ? (
                                <EmptyCart />
                            ) : (
                                <div className="tf-page-cart-main">
                                    <form className="form-cart">
                                        <table className="table-page-cart">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item) => {
                                                    const isActioning = actionLoading[item.product_id];
                                                    return (
                                                        <tr key={item.add_to_cart_id} className="tf-cart-item file-delete">
                                                            <td className="tf-cart-item_product">
                                                                <Link to={`/product-details/${item?.product_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="img-box">
                                                                    <img src={item?.product_image ?? defaultImg} alt={item?.product_name} />
                                                                </Link>
                                                                <div className="cart-info">
                                                                    <Link to={`/product-details/${item?.product_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="name text-md link fw-medium">
                                                                        {item?.product_name}
                                                                    </Link>
                                                                    <div className="variants">{item?.product_brand} · {"#" + item?.product_code}</div>
                                                                    <span
                                                                        className="remove-cart link remove"
                                                                        style={{ cursor: isActioning ? "not-allowed" : "pointer", opacity: isActioning ? 0.5 : 1 }}
                                                                        onClick={() => !isActioning && handleCartAction(item.product_id, "remove")}
                                                                    >
                                                                        <i className="icon icon-trash"></i>
                                                                        {isActioning === "remove" ? "Removing..." : "Remove"}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="tf-cart-item_price text-center" data-cart-title="Price">
                                                                <span className="cart-price price-on-sale text-md fw-medium">
                                                                    ₹{parseFloat(item.product_price).toFixed(2)}
                                                                </span>
                                                            </td>
                                                            <td className="tf-cart-item_quantity" data-cart-title="Quantity">
                                                                <div className="wg-quantity">
                                                                    <span
                                                                        className="btn-quantity btn-decrease"
                                                                        style={{ cursor: isActioning ? "not-allowed" : "pointer", opacity: isActioning ? 0.5 : 1 }}
                                                                        onClick={() => !isActioning && handleCartAction(item.product_id, "decrement")}
                                                                    >
                                                                        {isActioning === "decrement" ? "·" : "-"}
                                                                    </span>
                                                                    <input className="quantity-product" type="text" name="number" value={item.quantity} readOnly />
                                                                    <span
                                                                        className="btn-quantity btn-increase"
                                                                        style={{ cursor: isActioning ? "not-allowed" : "pointer", opacity: isActioning ? 0.5 : 1 }}
                                                                        onClick={() => !isActioning && handleCartAction(item.product_id, "increment")}
                                                                    >
                                                                        {isActioning === "increment" ? "·" : "+"}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="tf-cart-item_total text-center" data-cart-title="Total">
                                                                <div className="cart-total total-price text-md fw-medium">
                                                                    ₹{parseFloat(item.each_product_total_price).toFixed(2)}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>

                                        {/* Gift Wrap */}
                                        <div className="check-gift">
                                            <input
                                                type="checkbox"
                                                className="tf-check"
                                                id="checkGift"
                                                checked={giftWrap}
                                                onChange={(e) => setGiftWrap(e.target.checked)}
                                            />
                                            <label htmlFor="checkGift" className="label text-dark-4">
                                                Add gift wrap. Only <span className="fw-medium">₹{GIFT_WRAP_PRICE}.00.</span> (You can choose or not)
                                            </label>
                                        </div>

                                        {/* Discount */}
                                        <div className="box-ip-discount">
                                            <div className="discount-ip">
                                                <input
                                                    className="value-discount"
                                                    type="text"
                                                    placeholder="Discount code"
                                                    value={discountCode}
                                                    onChange={(e) => setDiscountCode(e.target.value)}
                                                />
                                                <button type="button" className="tf-btn radius-6 btn-out-line-dark-2" onClick={handleApplyDiscount}>
                                                    Apply
                                                </button>
                                            </div>
                                        </div>

                                        {/* Cart Note */}
                                        <div className="cart-note">
                                            <label htmlFor="note" className="text-md fw-medium">Special instructions for seller</label>
                                            <textarea id="note"></textarea>
                                        </div>
                                    </form>

                                    {/* ── Icon Boxes Swiper (original HTML kept) ── */}
                                    <div className="fl-iconbox wow fadeInUp">
                                        <div dir="ltr" className="swiper tf-swiper sw-auto" data-swiper='{
                                            "slidesPerView": 1,
                                            "spaceBetween": 12,
                                            "speed": 800,
                                            "preventInteractionOnTransition": false,
                                            "touchStartPreventDefault": false,
                                            "slidesPerGroup": 1,
                                            "pagination": { "el": ".sw-pagination-iconbox", "clickable": true },
                                            "breakpoints": {
                                                "575": { "slidesPerView": 2, "spaceBetween": 12, "slidesPerGroup": 2 },
                                                "768": { "slidesPerView": 3, "spaceBetween": 24, "slidesPerGroup": 3 },
                                                "1200": { "slidesPerView": "auto", "spaceBetween": 24 }
                                            }
                                        }'>
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                        <div className="box-icon"><i className="icon icon-shipping"></i></div>
                                                        <div className="content"><div className="title text-uppercase">Free Shipping</div></div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                        <div className="box-icon"><i className="icon icon-gift"></i></div>
                                                        <div className="content"><div className="title text-uppercase">Gift Package</div></div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                        <div className="box-icon"><i className="icon icon-return"></i></div>
                                                        <div className="content"><div className="title text-uppercase">Ease Returns</div></div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                        <div className="box-icon"><i className="icon icon-support"></i></div>
                                                        <div className="content"><div className="title text-uppercase text-nowrap">ONE YEAR WARRANTY</div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── RIGHT: Sidebar ── */}
                        <div className="col-xl-4">
                            <div className="tf-page-cart-sidebar">

                                {/* ── Delivery Address Box ── */}
                                <div className="cart-box" style={{ marginBottom: 20 }}>
                                    <div className="text-lg title fw-medium" style={{ marginBottom: 16 }}>
                                        Delivery Address
                                    </div>

                                    {addressLoading ? (
                                        <AddressSkeleton />
                                    ) : addresses.length === 0 ? (
                                        <p className="text-sm text-dark-4">No saved addresses found.</p>
                                    ) : (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                            {addresses.map((addr) => (
                                                (addr?.set_address_default === 1) &&
                                                <label
                                                    key={addr?.user_address_id}
                                                    htmlFor={`addr-${addr?.user_address_id}`}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: 12,
                                                        border: `1.5px solid ${selectedAddressId === addr?.user_address_id ? "#111" : "#e5e5e5"}`,
                                                        borderRadius: 8,
                                                        padding: "14px 16px",
                                                        cursor: "pointer",
                                                        transition: "border-color 0.2s",
                                                        background: selectedAddressId === addr?.user_address_id ? "#fafafa" : "#fff",
                                                    }}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={`addr-${addr?.user_address_id}`}
                                                        name="deliveryAddress"
                                                        className="tf-check"
                                                        checked={selectedAddressId === addr?.user_address_id}
                                                        onChange={() => setSelectedAddressId(addr?.user_address_id)}
                                                        style={{ marginTop: 3, flexShrink: 0 }}
                                                    />
                                                    <div>
                                                        <div className="text-sm fw-medium" style={{ marginBottom: 4 }}>
                                                            {addr?.set_address_default === 1 && (
                                                                <span style={{
                                                                    marginLeft: 0,
                                                                    fontSize: 10,
                                                                    background: "#111",
                                                                    color: "#fff",
                                                                    padding: "2px 7px",
                                                                    borderRadius: 4,
                                                                    verticalAlign: "middle",
                                                                }}>
                                                                    {addr?.address_type}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="text-sm text-dark-4">
                                                            {addr?.user_address}
                                                        </div>
                                                        <div className="text-sm text-dark-4">
                                                            {addr?.user_city}, {addr?.user_state}, {addr?.user_country} – {addr?.user_pincode}
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    )}

                                    {/* Add New Address Toggle */}
                                    <Link
                                        to={"/my-addresses?marketplace=Vineta"}
                                        className="tf-btn radius-6 btn-out-line-dark-2 w-100"
                                        style={{ marginTop: 14 }}
                                    >
                                        + Set New Address
                                    </Link>
                                </div>

                                {/* ── Checkout Box ── */}
                                <div className="cart-box checkout-cart-box">
                                    <div className="cart-head">
                                        {giftWrap && (
                                            <div className="total-discount text-md" style={{ marginBottom: 6 }}>
                                                <span>Gift Wrap:</span>
                                                <span>₹{GIFT_WRAP_PRICE}.00</span>
                                            </div>
                                        )}
                                        <div className="total-discount text-xl fw-medium">
                                            <span>Total:</span>
                                            <span className="total">₹{grandTotal.toFixed(2)} INR</span>
                                        </div>
                                        <p className="text-sm text-dark-4">Taxes and shipping calculated at checkout</p>
                                    </div>
                                    <div className="check-agree">
                                        <input type="checkbox" className="tf-check" id="check-agree" />
                                        <label htmlFor="check-agree" className="label text-dark-4">
                                            I agree with{" "}
                                            <Link to="/terms" className="text-dark-4 fw-medium text-underline link">
                                                term and conditions
                                            </Link>
                                        </label>
                                    </div>
                                    <div className="checkout-btn">
                                        <Link
                                            to="/checkout"
                                            className={`tf-btn btn-dark2 animate-btn w-100 ${cartItems.length === 0 ? "disabled" : ""}`}
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                    <div className="cart-imgtrust">
                                        <p className="text-center text-sm text-dark-1">We accept</p>
                                        <div className="cart-list-social">
                                            {["Visa", "DinersClub", "Mastercard", "Stripe"].map((brand) => (
                                                <div key={brand} className="payment-card">
                                                    <img src={`/assets/images/payment/${brand}.png`} alt={brand} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ── /RIGHT ── */}

                    </div>
                </div>
            </div>
        </PageLayout>
    );
}