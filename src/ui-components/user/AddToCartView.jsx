import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useEffect } from "react";

export default function AddToCartView() {

    useEffect(() => {
        document.title = "Cart List - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Title Page --> */}
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
            {/* <!-- /Title Page --> */}

            <div className="flat-spacing-24">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-sm-8">
                            <div className="tf-cart-head text-center">
                                <p className="text-xl-3 title text-dark-4">Spend <span className="fw-medium">$100</span> more to get
                                    <span className="fw-medium">Free Shipping</span>
                                </p>
                                <div className="progress-sold tf-progress-ship">
                                    <div className="value" style={{ width: "0%" }} data-progress="60">
                                        <i className="icon icon-car"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Cart Section --> */}
            <div className="flat-spacing-2 pt-0 mt_15">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
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
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <Link to="product-detail.html" className="img-box">
                                                        <img src="/assets/images/products/fashion/product-1.jpg" alt="img-product" />
                                                    </Link>
                                                    <div className="cart-info">
                                                        <Link to="product-detail.html"
                                                            className="name text-md link fw-medium">Oversized Printed
                                                            T-shirt</Link>
                                                        <div className="variants">White / L</div>
                                                        <span className="remove-cart link remove">Remove</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_price text-center" data-cart-title="Price">
                                                    <span className="cart-price price-on-sale text-md fw-medium">$130.00</span>
                                                </td>
                                                <td className="tf-cart-item_quantity" data-cart-title="Quantity">
                                                    <div className="wg-quantity">
                                                        <span className="btn-quantity btn-decrease">-</span>
                                                        <input className="quantity-product" type="text" name="number" defaultValue={1} />
                                                        <span className="btn-quantity btn-increase">+</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_total text-center" data-cart-title="Total">
                                                    <div className="cart-total total-price text-md fw-medium">$130.00</div>
                                                </td>
                                            </tr>
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <Link to="product-detail.html" className="img-box">
                                                        <img src="/assets/images/products/fashion/product-34.jpg" alt="img-product" />
                                                    </Link>
                                                    <div className="cart-info">
                                                        <Link to="product-detail.html"
                                                            className="name text-md link fw-medium">Loose Fit Tee</Link>
                                                        <div className="variants">White / L</div>
                                                        <span className="remove-cart link remove">Remove</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_price text-center" data-cart-title="Price">
                                                    <span className="cart-price price-on-sale text-md fw-medium">$130.00</span>
                                                </td>
                                                <td className="tf-cart-item_quantity" data-cart-title="Quantity">
                                                    <div className="wg-quantity">
                                                        <span className="btn-quantity btn-decrease">-</span>
                                                        <input className="quantity-product" type="text" name="number" defaultValue={1} />
                                                        <span className="btn-quantity btn-increase">+</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_total text-center" data-cart-title="Total">
                                                    <div className="cart-total total-price text-md fw-medium">$130.00</div>
                                                </td>
                                            </tr>
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <Link to="product-detail.html" className="img-box">
                                                        <img src="/assets/images/products/fashion/product-35.jpg" alt="img-product" />
                                                    </Link>
                                                    <div className="cart-info">
                                                        <Link to="product-detail.html"
                                                            className="name text-md link fw-medium">Crop T-shirt</Link>
                                                        <div className="variants">White / L</div>
                                                        <span className="remove-cart link remove">Remove</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_price text-center" data-cart-title="Price">
                                                    <span className="cart-price price-on-sale text-md fw-medium">$130.00</span>
                                                </td>
                                                <td className="tf-cart-item_quantity" data-cart-title="Quantity">
                                                    <div className="wg-quantity">
                                                        <span className="btn-quantity btn-decrease">-</span>
                                                        <input className="quantity-product" type="text" name="number" defaultValue={1} />
                                                        <span className="btn-quantity btn-increase">+</span>
                                                    </div>
                                                </td>
                                                <td className="tf-cart-item_total text-center" data-cart-title="Total">
                                                    <div className="cart-total total-price text-md fw-medium">$130.00</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="check-gift">
                                        <input type="checkbox" className="tf-check" id="checkGift" />
                                        <label htmlFor="checkGift" className="label text-dark-4">Add gift wrap. Only <span
                                            className="fw-medium">$10.00.</span> (You can choose or not)</label>
                                    </div>
                                    <div className="box-ip-discount">
                                        <div className="discount-ip">
                                            <input className="value-discount" type="text" placeholder="Discount code" />
                                            <button type="button" className="tf-btn radius-6 btn-out-line-dark-2">Apply</button>
                                        </div>
                                    </div>
                                    <div className="cart-note">
                                        <label htmlFor="note" className="text-md fw-medium">Special instructions htmlFor seller</label>
                                        <textarea id="note"></textarea>
                                    </div>
                                </form>
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
                                        "575": { "slidesPerView": 2, "spaceBetween": 12, "slidesPerGroup": 2}, 
                                        "768": { "slidesPerView": 3, "spaceBetween": 24, "slidesPerGroup": 3},
                                        "1200": { "slidesPerView": "auto", "spaceBetween": 24}
                                    }
                                }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div
                                                    className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                    <div className="box-icon">
                                                        <i className="icon icon-shipping"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title text-uppercase">Free Shipping</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                    <div className="box-icon">
                                                        <i className="icon icon-gift"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title text-uppercase">Gift Package</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                    <div className="box-icon">
                                                        <i className="icon icon-return"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title text-uppercase">Ease Returns</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div
                                                    className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                                                    <div className="box-icon">
                                                        <i className="icon icon-support"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title text-uppercase text-nowrap">ONE YEAR WARRANTY
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="tf-page-cart-sidebar">
                                <form className="cart-box shipping-cart-box">
                                    <div className="text-lg title fw-medium">Shipping estimates</div>
                                    <fieldset className="field">
                                        <label htmlFor="country" className="text-sm">Country</label>
                                        <input type="text" id="country" placeholder="United State" />
                                    </fieldset>
                                    <fieldset className="field">
                                        <label htmlFor="state" className="text-sm">State/Province</label>
                                        <input type="text" id="state" placeholder="State/Province" />
                                    </fieldset>
                                    <fieldset className="field">
                                        <label htmlFor="code" className="text-sm">Zipcode</label>
                                        <input type="text" id="code" placeholder="41000" />
                                    </fieldset>
                                    <button type="button" className="tf-btn btn-dark2 animate-btn w-100">Estimate</button>
                                </form>
                                <form action="https://themesflat.co/html/vineta/checkout.html" className="cart-box checkout-cart-box">
                                    <div className="cart-head">
                                        <div className="total-discount text-xl fw-medium">
                                            <span>Total:</span>
                                            <span className="total">$130.00 USD</span>
                                        </div>
                                        <p className="text-sm text-dark-4">Taxes and shipping calculated at checkout</p>
                                    </div>
                                    <div className="check-agree">
                                        <input type="checkbox" className="tf-check" id="check-agree" />
                                        <label htmlFor="check-agree" className="label text-dark-4">I agree with <Link
                                            to="term-and-condition.html"
                                            className="text-dark-4 fw-medium text-underline link">term and
                                            conditions</Link></label>
                                    </div>
                                    <div className="checkout-btn">
                                        <button type="submit" className="tf-btn btn-dark2 animate-btn w-100">Checkout</button>
                                    </div>
                                    <div className="cart-imgtrust">
                                        <p className="text-center text-sm text-dark-1">We accept</p>
                                        <div className="cart-list-social">
                                            <div className="payment-card">
                                                <img src="/assets/images/payment/Visa.png" alt="" />
                                            </div>
                                            <div className="payment-card">
                                                <img src="/assets/images/payment/DinersClub.png" alt="" />
                                            </div>
                                            <div className="payment-card">
                                                <img src="/assets/images/payment/Mastercard.png" alt="" />
                                            </div>
                                            <div className="payment-card">
                                                <img src="/assets/images/payment/Stripe.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                <div className="cart-box testimonial-cart-box">
                                    <div dir="ltr" className="swiper tf-swiper" data-swiper='{
                                    "slidesPerView": 1,
                                    "spaceBetween": 12,
                                    "speed": 800,
                                    "preventInteractionOnTransition": false, 
                                    "touchStartPreventDefault": false,
                                    "pagination": { "el": ".sw-pagination-tes", "clickable": true },
                                    "navigation": {
                                        "clickable": true,
                                        "nextEl": ".nav-next-tes",
                                        "prevEl": ".nav-prev-tes"
                                    }
                                    }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="box-testimonial-main">
                                                    <span className="quote icon-quote5"></span>
                                                    <div className="content">
                                                        <div className="list-star-default">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>

                                                        <p className="text-review text-md text-main">Stylish, comfortable, and
                                                            perfect htmlFor any occasion! My new favorite fashion destination.
                                                        </p>
                                                        <div className="box-author">
                                                            <div className="img">
                                                                <img src="/assets/images/avatar/avt-1.png" alt="author" />
                                                            </div>
                                                            <span className="name text-sm fw-medium">Vineta P.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="box-testimonial-main">
                                                    <span className="quote icon-quote5"></span>
                                                    <div className="content">
                                                        <div className="list-star-default">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>

                                                        <p className="text-review text-md text-main">Trendy, versatile, and
                                                            fits perfectly! My go-to place htmlFor stylish outfits.</p>
                                                        <div className="box-author">
                                                            <div className="img">
                                                                <img src="/assets/images/avatar/blog-author-3.jpg" alt="author" />
                                                            </div>
                                                            <span className="name text-sm fw-medium">Themesflat</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="box-testimonial-main">
                                                    <span className="quote icon-quote5"></span>
                                                    <div className="content">
                                                        <div className="list-star-default">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>

                                                        <p className="text-review text-md text-main">Chic, affordable, and
                                                            always on point! I’m obsessed with their collections!</p>
                                                        <div className="box-author">
                                                            <div className="img">
                                                                <img src="/assets/images/avatar/blog-author-2.jpg" alt="author" />
                                                            </div>
                                                            <span className="name text-sm fw-medium">Henry P.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-nav-swiper">
                                            <div className="swiper-button-prev nav-swiper nav-prev-tes"></div>
                                            <div className="swiper-button-next nav-swiper nav-next-tes"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Cart Section --> */}
        </PageLayout>
    );
}