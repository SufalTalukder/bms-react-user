import { useEffect } from "react";
import PageLayout from "../../PageLayout";
import { Link } from "react-router-dom";
import ProductGallery from "../../reusable-components/ProductGallery";
import RecentlyViewed from "../../reusable-components/RecentlyViewedSwiper";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";

export default function ProductDetailsView() {

    useEffect(() => {
        document.title = "Product Details - BMS Book Store";
    }, []);

    return (
        <PageLayout>
            {/* <!-- Breadcrumb --> */}
            <div className="breadcrumb-sec">
                <div className="container">
                    <div className="breadcrumb-wrap">
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Linen Blend Pants</div>
                        </div>
                        <div className="breadcrumb-prev-next">
                            <Link to="#" className="breadcrumb-prev"><i className="icon icon-arr-left"></i></Link>
                            <Link to="/product-default" className="breadcrumb-back"><i className="icon icon-shop"></i></Link>
                            <Link to="#" className="breadcrumb-next"><i className="icon icon-arr-right2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Breadcrumb --> */}

            {/* <!-- Product Main --> */}
            <section className="flat-single-product">
                <div className="tf-main-product section-image-zoom">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Product Images --> */}
                            <div className="col-md-6">
                                <div className="tf-product-media-wrap sticky-top">
                                    <ProductGallery />
                                </div>
                            </div>
                            {/* <!-- /Product Images --> */}
                            {/* <!-- Product Info --> */}
                            <div className="col-md-6">
                                <div className="tf-zoom-main"></div>
                                <div className="tf-product-info-wrap other-image-zoom">
                                    <div className="tf-product-info-list">
                                        <div className="tf-product-heading">
                                            <span className="brand-product">KOTON</span>
                                            <h5 className="product-name fw-medium">Linen Blend Pants</h5>
                                            <div className="product-rate">
                                                <div className="list-star">
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                </div>
                                                <span className="count-review">(5 reviews)</span>
                                            </div>
                                            <div className="product-price">
                                                <div className="display-sm price-new price-on-sale">$60.00</div>
                                                <div className="display-sm price-old">$80.00</div>
                                                <span className="badge-sale">20% Off</span>
                                            </div>
                                            <div className="product-stock">
                                                <span className="stock in-stock">In Stock</span>
                                                <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.2759 10.9242C15.2556 10.6149 14.9236 10.4281 14.6488 10.5714C14.4098 10.6961 13.6603 11.0196 13.0698 11.0196C12.6156 11.0196 12.3132 10.8694 12.3132 10.1362C12.3132 8.12636 15.0124 6.52078 12.6056 3.51218C12.3295 3.16719 11.773 3.41746 11.8469 3.85238C11.8484 3.86145 11.9887 4.77182 11.5632 5.27582C11.3635 5.51218 11.061 5.62711 10.6384 5.62711C9.17454 5.62711 9.27646 1.94027 11.1223 0.795793C11.5328 0.541367 11.2702 -0.0948905 10.8012 0.0119845C10.683 0.0387033 7.88684 0.701328 6.39105 3.62798C5.28035 5.80099 5.88191 7.29977 6.32116 8.39418C6.71371 9.3722 6.89283 9.81857 6.01364 10.4273C5.68251 10.6566 5.42618 10.6328 5.42618 10.6328C4.60384 10.6328 3.82489 9.42402 3.59437 8.95879C3.40712 8.57837 2.83721 8.67311 2.78314 9.09372C2.75993 9.27457 2.24057 13.5513 4.51026 16.1312C5.76076 17.5525 7.50054 18.0581 9.40742 17.9948C11.1702 17.9357 12.5768 17.3395 13.5883 16.2228C15.4639 14.152 15.2844 11.0549 15.2759 10.9242Z"
                                                        fill="#F2721C" />
                                                    <path
                                                        d="M4.44845 10.1357C4.04521 9.74669 3.72761 9.22817 3.59412 8.95877C3.40688 8.57834 2.83696 8.67309 2.78289 9.0937C2.75969 9.27454 2.24032 13.5513 4.51001 16.1312C5.2812 17.0077 6.27795 17.5784 7.48458 17.8379C4.95987 16.3506 4.24181 13.0162 4.44845 10.1357Z"
                                                        fill="#EA5513" />
                                                    <path
                                                        d="M3.73448 4.51577C3.70506 4.49735 3.66772 4.49735 3.6383 4.51577C2.64745 5.13712 2.64446 6.58633 3.6383 7.20955C3.66723 7.22769 3.70471 7.22825 3.73448 7.20955C4.72533 6.58816 4.72821 5.13898 3.73448 4.51577Z"
                                                        fill="#F2721C" />
                                                    <path
                                                        d="M4.12025 4.85809C4.01204 4.72502 3.88239 4.60855 3.73448 4.51577C3.70506 4.49735 3.66772 4.49735 3.6383 4.51577C2.64745 5.13712 2.64446 6.58633 3.6383 7.20955C3.66723 7.22769 3.70471 7.22825 3.73448 7.20955C3.88242 7.11677 4.01208 7.00026 4.12029 6.8672C3.64157 6.28237 3.64072 5.44386 4.12025 4.85809Z"
                                                        fill="#EA5513" />
                                                    <path
                                                        d="M10.8011 0.0119845C10.6829 0.0387033 7.88676 0.701328 6.39096 3.62798C4.90723 6.53083 6.48163 8.24741 6.63386 9.34639L6.63403 9.34629C6.69 9.74974 6.54569 10.0588 6.01356 10.4272C5.69392 10.6486 5.40494 10.6816 5.10034 10.5723V10.5727C5.10034 10.5727 6.17507 11.6058 7.26087 10.8972C8.33686 10.1951 8.02601 9.11809 7.85986 8.63131L7.86025 8.63103C7.46365 7.57951 7.11673 6.19027 8.09319 4.27988C8.67292 3.14557 9.44797 2.35153 10.1868 1.80263C10.426 1.38835 10.7395 1.0331 11.1223 0.795758C11.5326 0.541367 11.2701 -0.0948905 10.8011 0.0119845Z"
                                                        fill="#EA5513" />
                                                </svg>
                                                <span className="text-dark">30 sold in last 24 hours</span>
                                            </div>
                                            <div className="product-progress-sale">
                                                <div className="title-hurry-up"><span className="text-primary fw-medium">HURRY
                                                    UP!</span> Only <span className="count">4</span> items left!</div>
                                                <div className="progress-sold">
                                                    <div className="value" style={{ width: "0%" }} data-progress="70"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tf-product-variant">
                                            <div className="variant-picker-item variant-color">
                                                <div className="variant-picker-label">
                                                    Colors:<span
                                                        className="variant-picker-label-value value-currentColor">Black</span>
                                                </div>
                                                <div className="variant-picker-values">
                                                    <div className="hover-tooltip tooltip-bot color-btn active"
                                                        data-color="black">
                                                        <span className="check-color bg-dark-3"></span>
                                                        <span className="tooltip">Black</span>
                                                    </div>
                                                    <div className="hover-tooltip tooltip-bot color-btn" data-color="orange">
                                                        <span className="check-color bg-light-orange-2"></span>
                                                        <span className="tooltip">Orange</span>
                                                    </div>
                                                    <div className="hover-tooltip tooltip-bot color-btn" data-color="green">
                                                        <span className="check-color bg-light-green"></span>
                                                        <span className="tooltip">Green</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="variant-picker-item variant-size">
                                                <div className="variant-picker-label">
                                                    <div>Size:<span
                                                        className="variant-picker-label-value value-currentSize">Small</span>
                                                    </div>
                                                    <Link to="#sizeGuide" data-bs-toggle="modal" className="size-guide link">Size
                                                        Guide</Link>
                                                </div>
                                                <div className="variant-picker-values">
                                                    <span className="size-btn active" data-size="small">S</span>
                                                    <span className="size-btn" data-size="medium">M</span>
                                                    <span className="size-btn" data-size="large">L</span>
                                                    <span className="size-btn" data-size="extra large">XL</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tf-product-total-quantity">
                                            <div className="group-btn">
                                                <div className="wg-quantity">
                                                    <button className="btn-quantity btn-decrease">-</button>
                                                    <input className="quantity-product" type="text" name="number" defaultValue={1} />
                                                    <button className="btn-quantity btn-increase">+</button>
                                                </div>
                                                <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                                    className="tf-btn animate-btn btn-add-to-cart">Add to cart</Link>
                                            </div>
                                            <Link to="checkout.html" className="tf-btn btn-primary w-100 animate-btn">Buy it
                                                now</Link>
                                            <Link to="checkout.html" className="more-choose-payment link">More payment
                                                options</Link>
                                        </div>
                                        <div className="tf-product-extra-link">
                                            <Link to="#" className="product-extra-icon link btn-add-wishlist">
                                                <i className="icon add icon-heart"></i><span className="add">Add to wishlist</span>
                                                <i className="icon added icon-trash"></i><span className="added">Remove from
                                                    wishlist</span>
                                            </Link>
                                            <Link to="#compare" data-bs-toggle="modal" className="product-extra-icon link"><i
                                                className="icon icon-compare2"></i>Compare</Link>
                                            <Link to="#askQuestion" data-bs-toggle="modal" className="product-extra-icon link"><i
                                                className="icon icon-ask"></i>Ask a question</Link>
                                            <Link to="#shareSocial" data-bs-toggle="modal" className="product-extra-icon link"><i
                                                className="icon icon-share"></i>Share</Link>
                                        </div>
                                        <ul className="tf-product-cate-sku text-md">
                                            <li className="item-cate-sku">
                                                <span className="label">SKU:</span>
                                                <span className="value">AD1FSSE0YR</span>
                                            </li>
                                            <li className="item-cate-sku">
                                                <span className="label">Categories:</span>
                                                <span className="value">Clothes, Top</span>
                                            </li>
                                        </ul>
                                        <div className="tf-product-trust-seal text-center">
                                            <p className="text-md text-dark-2 text-seal fw-medium">Guarantee Safe Checkout:</p>
                                            <ul className="list-card">
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/Visa.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/DinersClub.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/Mastercard.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/Stripe.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/PayPal.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/GooglePay.png" alt="card" />
                                                </li>
                                                <li className="card-item">
                                                    <img src="/assets/images/payment/ApplePay.png" alt="card" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tf-product-delivery-return">
                                            <div className="product-delivery">
                                                <div className="icon icon-car2"></div>
                                                <p className="text-md">Estimated delivery time: <span className="fw-medium">3-5 days
                                                    international</span></p>
                                            </div>
                                            <div className="product-delivery">
                                                <div className="icon icon-shipping3"></div>
                                                <p className="text-md">Free shipping on <span className="fw-medium">all orders over
                                                    $150</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- /Product Info --> */}
                        </div>
                    </div>
                </div>
                <div className="tf-sticky-btn-atc">
                    <div className="container">
                        <div className="tf-height-observer w-100 d-flex align-items-center">
                            <div className="tf-sticky-atc-product d-flex align-items-center">
                                <div className="tf-sticky-atc-img">
                                    <img className="lazyload" data-src="/assets/images/products/fashion/thumbs/thumb-black2.jpg" alt=""
                                        src="/assets/images/products/fashion/thumbs/thumb-black2.jpg" />
                                </div>
                                <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">Long Sleeve T-Shirt</div>
                            </div>
                            <div className="tf-sticky-atc-infos">
                                <form className="">
                                    <div className="tf-sticky-atc-variant-price text-center tf-select">
                                        <select>
                                            <option>Black / Small - $60.00</option>
                                            <option>Black / M - $60.00</option>
                                            <option>Black / L - $60.00</option>
                                            <option>Blue / S - $60.00</option>
                                            <option>Blue / M - $60.00</option>
                                            <option>Blue / L - $60.00</option>
                                            <option>Blue / XL - $60.00</option>
                                            <option>White / S - $60.00</option>
                                            <option>White / M - $60.00</option>
                                            <option>White / L - $60.00</option>
                                        </select>
                                    </div>
                                    <div className="tf-sticky-atc-btns">
                                        <div className="tf-product-info-quantity">
                                            <div className="wg-quantity">
                                                <button className="btn-quantity minus-btn">-</button>
                                                <input className="quantity-product font-4" type="text" name="number" defaultValue={1} />
                                                <button className="btn-quantity plus-btn">+</button>
                                            </div>
                                        </div>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas"
                                            className="tf-btn animate-btn d-inline-flex justify-content-center">Add to cart</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Product Main --> */}

            {/* <!-- Product Description --> */}
            <section className="flat-spacing pt-0">
                <div className="container">
                    <div className="widget-accordion wd-product-descriptions">
                        <div className="accordion-title collapsed" data-bs-target="#description" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="description" role="button">
                            <span>Descriptions</span>
                            <span className="icon icon-arrow-down"></span>
                        </div>
                        <div id="description" className="collapse">
                            <div className="accordion-body widget-desc">
                                <div className="item">
                                    <p className="fw-medium title">Composition</p>
                                    <ul>
                                        <li>Viscose 55%, Linen 45%</li>
                                        <li>We exclude the weight of minor components</li>
                                    </ul>
                                </div>
                                <p className="item">Additional material information</p>
                                <div className="item">
                                    <p className="title">The total weight of this product contains:</p>
                                    <ul>
                                        <li>55% LivaEco™ viscose</li>
                                        <li>Viscose 55%</li>
                                    </ul>
                                </div>
                                <ul className="item">
                                    <li>We exclude the weight of minor components such as, but not exclusively: threads,
                                        buttons, zippers, embellishments and prints.</li>
                                    <li>The total weight of the product is calculated by adding the weight of all layers and
                                        main components together. Based on that, we calculate how much of that weight is
                                        made out by each material. For sets & multipacks all pieces are counted together as
                                        one product in calculations.</li>
                                    <li>Materials in this product explained</li>
                                    <li>LinenLinen is a natural bast fibre derived from flax plants.</li>
                                    <li>LivaEco™ viscoseLivaEco™ viscose is a branded viscose fibre, made from wood pulp.
                                    </li>
                                    <li> ViscoseViscose is a regenerated cellulose fibre commonly made from wood, but the
                                        raw material could also consist of other cellulosic materials.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="widget-accordion wd-product-descriptions">
                        <div className="accordion-title collapsed" data-bs-target="#material" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="material" role="button">
                            <span>Materials</span>
                            <span className="icon icon-arrow-down"></span>
                        </div>
                        <div id="material" className="collapse">
                            <div className="accordion-body widget-material">
                                <div className="item">
                                    <p className="fw-medium title">Materials Care</p>
                                    <ul>
                                        <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                                        <li>Care: Hand wash</li>
                                        <li>Imported</li>
                                        <li>Machine wash max. 30ºC. Short spin.</li>
                                        <li>Iron maximum 110ºC.</li>
                                        <li>Do not bleach/bleach.</li>
                                        <li>Do not dry clean.</li>
                                        <li>Tumble dry, medium hear.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-accordion wd-product-descriptions">
                        <div className="accordion-title collapsed" data-bs-target="#returnPolicies" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="returnPolicies" role="button">
                            <span>Return Policies</span>
                            <span className="icon icon-arrow-down"></span>
                        </div>
                        <div id="returnPolicies" className="collapse">
                            <div className="accordion-body">
                                <ul className="list-policies">
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M8.7 30.7h22.7c.3 0 .6-.2.7-.6l4-25.3c-.1-.4-.3-.7-.7-.8s-.7.2-.8.6L34 8.9l-3-1.1c-2.4-.9-5.1-.5-7.2 1-2.3 1.6-5.3 1.6-7.6 0-2.1-1.5-4.8-1.9-7.2-1L6 8.9l-.7-4.3c0-.4-.4-.7-.7-.6-.4.1-.6.4-.6.8l4 25.3c.1.3.3.6.7.6zm.8-21.6c2-.7 4.2-.4 6 .8 1.4 1 3 1.5 4.6 1.5s3.2-.5 4.6-1.5c1.7-1.2 4-1.6 6-.8l3.3 1.2-3 19.1H9.2l-3-19.1 3.3-1.2zM32 32H8c-.4 0-.7.3-.7.7s.3.7.7.7h24c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm0 2.7H8c-.4 0-.7.3-.7.7s.3.6.7.6h24c.4 0 .7-.3.7-.7s-.3-.6-.7-.6zm-17.9-8.9c-1 0-1.8-.3-2.4-.6l.1-2.1c.6.4 1.4.6 2 .6.8 0 1.2-.4 1.2-1.3s-.4-1.3-1.3-1.3h-1.3l.2-1.9h1.1c.6 0 1-.3 1-1.3 0-.8-.4-1.2-1.1-1.2s-1.2.2-1.9.4l-.2-1.9c.7-.4 1.5-.6 2.3-.6 2 0 3 1.3 3 2.9 0 1.2-.4 1.9-1.1 2.3 1 .4 1.3 1.4 1.3 2.5.3 1.8-.6 3.5-2.9 3.5zm4-5.5c0-3.9 1.2-5.5 3.2-5.5s3.2 1.6 3.2 5.5-1.2 5.5-3.2 5.5-3.2-1.6-3.2-5.5zm4.1 0c0-2-.1-3.5-.9-3.5s-1 1.5-1 3.5.1 3.5 1 3.5c.8 0 .9-1.5.9-3.5zm4.5-1.4c-.9 0-1.5-.8-1.5-2.1s.6-2.1 1.5-2.1 1.5.8 1.5 2.1-.5 2.1-1.5 2.1zm0-.8c.4 0 .7-.5.7-1.2s-.2-1.2-.7-1.2-.7.5-.7 1.2.3 1.2.7 1.2z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M36.7 31.1l-2.8-1.3-4.7-9.1 7.5-3.5c.4-.2.6-.6.4-1s-.6-.5-1-.4l-7.5 3.5-7.8-15c-.3-.5-1.1-.5-1.4 0l-7.8 15L4 15.9c-.4-.2-.8 0-1 .4s0 .8.4 1l7.5 3.5-4.7 9.1-2.8 1.3c-.4.2-.6.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l1-.4-1.5 2.8c-.1.2-.1.5 0 .8.1.2.4.3.7.3h31.7c.3 0 .5-.1.7-.4.1-.2.1-.5 0-.8L35.1 32l1 .4c.1 0 .2.1.3.1.3 0 .6-.2.7-.4.1-.3 0-.8-.4-1zm-5.1-2.3l-9.8-4.6 6-2.8 3.8 7.4zM20 6.4L27.1 20 20 23.3 12.9 20 20 6.4zm-7.8 15l6 2.8-9.8 4.6 3.8-7.4zm22.4 13.1H5.4L7.2 31 20 25l12.8 6 1.8 3.5z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M5.9 5.9v28.2h28.2V5.9H5.9zM19.1 20l-8.3 8.3c-2-2.2-3.2-5.1-3.2-8.3s1.2-6.1 3.2-8.3l8.3 8.3zm-7.4-9.3c2.2-2 5.1-3.2 8.3-3.2s6.1 1.2 8.3 3.2L20 19.1l-8.3-8.4zM20 20.9l8.3 8.3c-2.2 2-5.1 3.2-8.3 3.2s-6.1-1.2-8.3-3.2l8.3-8.3zm.9-.9l8.3-8.3c2 2.2 3.2 5.1 3.2 8.3s-1.2 6.1-3.2 8.3L20.9 20zm8.4-10.2c-1.2-1.1-2.6-2-4.1-2.6h6.6l-2.5 2.6zm-18.6 0L8.2 7.2h6.6c-1.5.6-2.9 1.5-4.1 2.6zm-.9.9c-1.1 1.2-2 2.6-2.6 4.1V8.2l2.6 2.5zM7.2 25.2c.6 1.5 1.5 2.9 2.6 4.1l-2.6 2.6v-6.7zm3.5 5c1.2 1.1 2.6 2 4.1 2.6H8.2l2.5-2.6zm18.6 0l2.6 2.6h-6.6c1.4-.6 2.8-1.5 4-2.6zm.9-.9c1.1-1.2 2-2.6 2.6-4.1v6.6l-2.6-2.5zm2.6-14.5c-.6-1.5-1.5-2.9-2.6-4.1l2.6-2.6v6.7z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M35.1 33.6L33.2 6.2c0-.4-.3-.7-.7-.7H13.9c-.4 0-.7.3-.7.7s.3.7.7.7h18l.7 10.5H20.8c-8.8.2-15.9 7.5-15.9 16.4 0 .4.3.7.7.7h28.9c.2 0 .4-.1.5-.2s.2-.3.2-.5v-.2h-.1zm-28.8-.5C6.7 25.3 13 19 20.8 18.9h11.9l1 14.2H6.3zm11.2-6.8c0 1.2-1 2.1-2.1 2.1s-2.1-1-2.1-2.1 1-2.1 2.1-2.1 2.1 1 2.1 2.1zm6.3 0c0 1.2-1 2.1-2.1 2.1-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M20 33.8c7.6 0 13.8-6.2 13.8-13.8S27.6 6.2 20 6.2 6.2 12.4 6.2 20 12.4 33.8 20 33.8zm0-26.3c6.9 0 12.5 5.6 12.5 12.5S26.9 32.5 20 32.5 7.5 26.9 7.5 20 13.1 7.5 20 7.5zm-.4 15h.5c1.8 0 3-1.1 3-3.7 0-2.2-1.1-3.6-3.1-3.6h-2.6v10.6h2.2v-3.3zm0-5.2h.4c.6 0 .9.5.9 1.7 0 1.1-.3 1.7-.9 1.7h-.4v-3.4z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M30.2 29.3c2.2-2.5 3.6-5.7 3.6-9.3s-1.4-6.8-3.6-9.3l3.6-3.6c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0l-3.6 3.6c-2.5-2.2-5.7-3.6-9.3-3.6s-6.8 1.4-9.3 3.6L7.1 6.2c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 .9l3.6 3.6c-2.2 2.5-3.6 5.7-3.6 9.3s1.4 6.8 3.6 9.3l-3.6 3.6c-.3.3-.3.7 0 .9.1.1.3.2.5.2s.3-.1.5-.2l3.6-3.6c2.5 2.2 5.7 3.6 9.3 3.6s6.8-1.4 9.3-3.6l3.6 3.6c.1.1.3.2.5.2s.3-.1.5-.2c.3-.3.3-.7 0-.9l-3.8-3.6z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222">
                                            <path fill="currentColor"
                                                d="M34.1 34.1H5.9V5.9h28.2v28.2zM7.2 32.8h25.6V7.2H7.2v25.6zm13.5-18.3a.68.68 0 0 0-.7-.7.68.68 0 0 0-.7.7v10.9a.68.68 0 0 0 .7.7.68.68 0 0 0 .7-.7V14.5z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                                <p className="text-center text-paragraph">LT01: 70% wool, 15% polyester, 10% polyamide, 5%
                                    acrylic 900 Grms/mt</p>
                            </div>
                        </div>
                    </div>
                    <div className="widget-accordion wd-product-descriptions">
                        <div className="accordion-title collapsed" data-bs-target="#addInformation" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="addInformation" role="button">
                            <span>Additional Information</span>
                            <span className="icon icon-arrow-down"></span>
                        </div>
                        <div id="addInformation" className="collapse">
                            <div className="accordion-body">
                                <table className="tb-info-product text-md">
                                    <tbody>
                                        <tr className="tb-attr-item">
                                            <th className="tb-attr-label">Material</th>
                                            <td className="tb-attr-value">
                                                <p>100% Cotton</p>
                                            </td>
                                        </tr>
                                        <tr className="tb-attr-item">
                                            <th className="tb-attr-label">Color</th>
                                            <td className="tb-attr-value">
                                                <p>White, Black, Brown</p>
                                            </td>
                                        </tr>
                                        <tr className="tb-attr-item">
                                            <th className="tb-attr-label">Brand</th>
                                            <td className="tb-attr-value">
                                                <p>Vineta</p>
                                            </td>
                                        </tr>
                                        <tr className="tb-attr-item">
                                            <th className="tb-attr-label">Size</th>
                                            <td className="tb-attr-value">
                                                <p>S, M, L, XL</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="widget-accordion wd-product-descriptions">
                        <div className="accordion-title collapsed" data-bs-target="#reviews" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="reviews" role="button">
                            <span>Reviews</span>
                            <span className="icon icon-arrow-down"></span>
                        </div>
                        <div id="reviews" className="collapse">
                            <div className="accordion-body wd-customer-review">
                                <div className="review-heading">
                                    <h6 className="title">Customer review</h6>
                                    <div className="box-rate-review">
                                        <div className="rating-summary">
                                            <ul className="list-star">
                                                <li><i className="icon icon-star"></i></li>
                                                <li><i className="icon icon-star"></i></li>
                                                <li><i className="icon icon-star"></i></li>
                                                <li><i className="icon icon-star"></i></li>
                                                <li><i className="icon icon-star"></i></li>
                                                <li><span className="count-star text-md">(3)</span></li>
                                            </ul>
                                            <span className="text-md rating-average">4.5/5.0</span>
                                        </div>
                                        <div className="rating-breakdown">
                                            <div className="rating-breakdown-item">
                                                <div className="rating-score">
                                                    5 <i className="icon icon-star"></i>
                                                </div>
                                                <div className="rating-bar">
                                                    <div className="value" style={{ width: "100%" }}></div>
                                                </div>
                                                <span className="rating-count">10</span>
                                            </div>
                                            <div className="rating-breakdown-item">
                                                <div className="rating-score">
                                                    4 <i className="icon icon-star"></i>
                                                </div>
                                                <div className="rating-bar">
                                                    <div className="value" style={{ width: "50%" }}></div>
                                                </div>
                                                <span className="rating-count">5</span>
                                            </div>
                                            <div className="rating-breakdown-item">
                                                <div className="rating-score">
                                                    3 <i className="icon icon-star"></i>
                                                </div>
                                                <div className="rating-bar">
                                                    <div className="value" style={{ width: "0%" }}></div>
                                                </div>
                                                <span className="rating-count">3</span>
                                            </div>
                                            <div className="rating-breakdown-item">
                                                <div className="rating-score">
                                                    2 <i className="icon icon-star"></i>
                                                </div>
                                                <div className="rating-bar">
                                                    <div className="value" style={{ width: "0%" }}></div>
                                                </div>
                                                <span className="rating-count">3</span>
                                            </div>
                                            <div className="rating-breakdown-item">
                                                <div className="rating-score">
                                                    1 <i className="icon icon-star"></i>
                                                </div>
                                                <div className="rating-bar">
                                                    <div className="value" style={{ width: "0%" }}></div>
                                                </div>
                                                <span className="rating-count">3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#form-review" className="tf-btn btn-dark2 animate-btn">Write a review</Link>
                                </div>
                                <div className="review-section">
                                    <ul className="review-list">
                                        <li className="review-item">
                                            <div className="review-avt"><img src="/assets/images/avatar/blog-author-1.jpg" alt="avt" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-info">
                                                    <div className="review-meta">
                                                        <span className="review-author fw-medium text-md">Emily R.</span>
                                                        <span className="review-date text-sm">Mar 3rd, 2025</span>
                                                    </div>
                                                    <div className="list-star star-4">
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                                <p className="text text-sm text-main-4">Absolutely stunning! I bought a gold
                                                    necklace from here, and the quality exceeded my expectations. The
                                                    craftsmanship is top-notch, and the packaging was beautiful. Will
                                                    definitely return htmlFor more!</p>
                                            </div>
                                        </li>
                                        <li className="review-item">
                                            <div className="review-avt"><img src="/assets/images/avatar/blog-author-2.jpg" alt="avt" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-info">
                                                    <div className="review-meta">
                                                        <span className="review-author fw-medium text-md">James L.</span>
                                                        <span className="review-date text-sm">Mar 3rd, 2025</span>
                                                    </div>
                                                    <div className="list-star">
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                                <p className="text text-sm text-main-4">I purchased an engagement ring, and my
                                                    fiancée loves it! The diamonds sparkle beautifully, and the staff was
                                                    incredibly helpful in guiding me through the selection process. Highly
                                                    recommend!</p>
                                            </div>
                                        </li>
                                        <li className="review-item">
                                            <div className="review-avt"><img src="/assets/images/avatar/blog-author-3.jpg" alt="avt" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-info">
                                                    <div className="review-meta">
                                                        <span className="review-author fw-medium text-md">Sophia M.</span>
                                                        <span className="review-date text-sm">Mar 3rd, 2025</span>
                                                    </div>
                                                    <div className="list-star">
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                                <p className="text text-sm text-main-4">This jewelry shop is my go-to! The
                                                    designs are elegant, and the prices are reasonable htmlFor the quality you
                                                    get. I recently got a pair of silver earrings, and they are just
                                                    perfect. Amazing service too!</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <form id="form-review" action="#" className="form-review">
                                        <h6 className="title">Write a review</h6>
                                        <p className="note text-md text-main-4">Your email address will not be
                                            published. Required fields are marked *</p>
                                        <div className="box-rating">
                                            <span className="text-md">Your rating *</span>
                                            <div className="list-rating-check">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label htmlFor="star5" title="text"></label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label htmlFor="star4" title="text"></label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label htmlFor="star3" title="text"></label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label htmlFor="star2" title="text"></label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label htmlFor="star1" title="text"></label>
                                            </div>
                                        </div>
                                        <div className="group-2-ip">
                                            <input type="text" className="" placeholder="Name *" />
                                            <input type="email" className="" placeholder="Email *" />
                                        </div>
                                        <textarea name="note" id="note" placeholder="Your review *"></textarea>
                                        <div className="check-save">
                                            <input type="checkbox" className="tf-check" id="checksave" />
                                            <label htmlFor="checksave" className="label text-md">Save my name, email, and website in
                                                this browser htmlFor the next time I comment.</label>
                                        </div>
                                        <button type="submit" className="tf-btn animate-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Product Description --> */}

            {/* <!-- Recently Viewed --> */}
            <RecentlyViewed />
            {/* <!-- /Recently Viewed --> */}

            <IconBoxSwiper />
        </PageLayout>
    );
}