import { Link } from "react-router-dom";

export default function ShoppingCartViewModal() {
    return (
        <div className="offcanvas offcanvas-end popup-style-1 popup-shopping-cart" id="shoppingCart">
            <div className="canvas-wrapper">
                <div className="popup-header">
                    <span className="title">Shopping cart</span>
                    <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas"></span>
                </div>
                <div className="wrap">
                    <div className="tf-mini-cart-threshold">
                        <div className="text">
                            Spend <span className="fw-medium">$100</span> more to get <span className="fw-medium">Free
                                Shipping</span>
                        </div>
                        <div className="tf-progress-bar tf-progress-ship">
                            <div className="value" style={{ width: "0%" }} data-progress="75">
                                <i className="icon icon-car"></i>
                            </div>
                        </div>
                    </div>
                    <div className="tf-mini-cart-wrap">
                        <div className="tf-mini-cart-main">
                            <div className="tf-mini-cart-sroll">
                                <div className="tf-mini-cart-items">
                                    <div className="tf-mini-cart-item file-delete">
                                        <div className="tf-mini-cart-image">
                                            <Link to="product-detail.html">
                                                <img className="lazyload obj-contain" data-src="/assets/images/products/book/book1.jpg"
                                                    src="/assets/images/products/book/book1.jpg" alt="img-product" />
                                            </Link>
                                        </div>
                                        <div className="tf-mini-cart-info">
                                            <div className="d-flex justify-content-between">
                                                <Link className="title link text-md fw-medium" to="product-detail.html">Lost Boy</Link>
                                                <i className="icon icon-close remove fs-12"></i>
                                            </div>
                                            <p className="price-wrap text-sm fw-medium">
                                                <span className="new-price text-primary">$80.00</span>
                                                <span className="old-price text-decoration-line-through text-dark-1">$100.00</span>
                                            </p>
                                            <div className="wg-quantity small">
                                                <button className="btn-quantity minus-btn">-</button>
                                                <input className="quantity-product font-4" type="text" name="number" defaultValue="Jhon Doe" />
                                                <button className="btn-quantity plus-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tf-mini-cart-item file-delete">
                                        <div className="tf-mini-cart-image">
                                            <Link to="product-detail.html">
                                                <img className="lazyload obj-contain" data-src="/assets/images/products/book/book2.jpg"
                                                    src="/assets/images/products/book/book2.jpg" alt="img-product" />
                                            </Link>
                                        </div>
                                        <div className="tf-mini-cart-info">
                                            <div className="d-flex justify-content-between">
                                                <Link className="title link text-md fw-medium" to="product-detail.html">Let Go My Hand</Link>
                                            </div>
                                            <p className="price-wrap text-sm fw-medium">
                                                <span className="new-price">$90.00</span>
                                            </p>
                                            <div className="wg-quantity small">
                                                <button className="btn-quantity minus-btn">-</button>
                                                <input className="quantity-product font-4" type="text" name="number" defaultValue="Jhon Doe" />
                                                <button className="btn-quantity plus-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-minicart-recommendations">
                                    <div className="tf-minicart-recommendations-heading d-flex justify-content-between align-items-end">
                                        <div className="tf-minicart-recommendations-title text-md fw-medium">You may also
                                            like</div>
                                        <div className="d-flex gap-10">
                                            <div className="swiper-button-prev nav-swiper arrow-1 size-30 nav-prev-also-product">
                                            </div>
                                            <div className="swiper-button-next nav-swiper arrow-1 size-30 nav-next-also-product">
                                            </div>
                                        </div>
                                    </div>
                                    <div dir="ltr" className="swiper tf-swiper" data-swiper='{
                                              "slidesPerView": 1,
                                              "spaceBetween": 10,
                                              "speed": 800,
                                              "observer": true,
                                              "observeParents": true,
                                              "slidesPerGroup": 1,
                                              "navigation": {
                                                  "clickable": true,
                                                  "nextEl": ".nav-next-also-product",
                                                  "prevEl": ".nav-prev-also-product"
                                              }
                                          }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="tf-mini-cart-item line radius-16">
                                                    <div className="tf-mini-cart-image">
                                                        <Link to="product-detail.html">
                                                            <img className="lazyload obj-contain" data-src="/assets/images/products/book/book9.jpg"
                                                                src="/assets/images/products/book/book9.jpg" alt="img-product" />
                                                        </Link>
                                                    </div>
                                                    <div className="tf-mini-cart-info justify-content-center">
                                                        <Link className="title link text-md fw-medium" to="product-detail.html">Enceladus</Link>
                                                        <p className="price-wrap text-sm fw-medium">
                                                            <span className="new-price text-primary">$60.00</span>
                                                            <span className="old-price text-decoration-line-through text-dark-1">$80.00</span>
                                                        </p>
                                                        <Link to="#" className="tf-btn animate-btn d-inline-flex bg-dark-2 w-max-content">Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tf-mini-cart-item line radius-16">
                                                    <div className="tf-mini-cart-image">
                                                        <Link to="product-detail.html">
                                                            <img className="lazyload obj-contain" data-src="/assets/images/products/book/book10.jpg"
                                                                src="/assets/images/products/book/book10.jpg" alt="img-product" />
                                                        </Link>
                                                    </div>
                                                    <div className="tf-mini-cart-info justify-content-center">
                                                        <Link className="title link text-md fw-medium" to="product-detail.html">Het Raadsel Van De Zee</Link>
                                                        <p className="price-wrap text-sm fw-medium">
                                                            <span className="new-price text-primary">$65.00</span>
                                                            <span className="old-price text-decoration-line-through text-dark-1">$80.00</span>
                                                        </p>
                                                        <Link to="#" className="tf-btn animate-btn d-inline-flex bg-dark-2 w-max-content">Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-mini-cart-bottom">
                            <div className="tf-mini-cart-tool">
                                <div className="tf-mini-cart-tool-btn btn-add-gift">
                                    <i className="icon icon-gift2"></i>
                                    <div className="text-xxs">Add gift wrap</div>
                                </div>
                                <div className="tf-mini-cart-tool-btn btn-add-note">
                                    <i className="icon icon-note"></i>
                                    <div className="text-xxs">Order note</div>
                                </div>
                                <div className="tf-mini-cart-tool-btn btn-coupon">
                                    <i className="icon icon-coupon"></i>
                                    <div className="text-xxs">Coupon</div>
                                </div>
                                <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                                    <i className="icon icon-car"></i>
                                    <div className="text-xxs">Shipping</div>
                                </div>
                            </div>
                            <div className="tf-mini-cart-bottom-wrap">
                                <div className="tf-cart-totals-discounts">
                                    <div className="tf-cart-total text-xl fw-medium">Total:</div>
                                    <div className="tf-totals-total-value text-xl fw-medium">$130.00 USD</div>
                                </div>
                                <div className="tf-cart-tax text-sm opacity-8">Taxes and shipping calculated at checkout
                                </div>
                                <div className="tf-cart-checkbox">
                                    <div className="tf-checkbox-wrapp">
                                        <input type="checkbox" id="CartDrawer-Form_agree" name="agree_checkbox" />
                                        <div>
                                            <i className="icon-check"></i>
                                        </div>
                                    </div>
                                    <label htmlFor="CartDrawer-Form_agree" className="text-sm">
                                        I agree with the
                                        <Link to="term-and-condition.html" title="Terms of Service" className="fw-medium">terms
                                            and conditions</Link>
                                    </label>
                                </div>
                                <div className="tf-mini-cart-view-checkout">
                                    <Link to="checkout.html"
                                        className="tf-btn animate-btn d-inline-flex bg-dark-2 w-100 justify-content-center"><span>Check
                                            out</span></Link>
                                    <Link to="view-cart.html" className="tf-btn btn-out-line-dark2 w-100 justify-content-center">View cart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="tf-mini-cart-tool-openable add-gift">
                            <div className="overplay tf-mini-cart-tool-close"></div>
                            <form action="#" className="tf-mini-cart-tool-content">
                                <div className="tf-mini-cart-tool-text text-sm fw-medium">Add gift wrap</div>
                                <div className="tf-mini-cart-tool-text1">The product will be wrapped carefully.
                                    Fee is only <span className="text fw-medium text-dark">$10.00</span>. Do you want a
                                    gift wrap?</div>
                                <div className="tf-cart-tool-btns">
                                    <button className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100" type="submit">Add a
                                        Gift Wrap</button>
                                    <div className="tf-btn btn-out-line-dark2 w-100 tf-mini-cart-tool-close">Cancel</div>
                                </div>
                            </form>
                        </div>
                        <div className="tf-mini-cart-tool-openable add-note">
                            <div className="overplay tf-mini-cart-tool-close"></div>
                            <form action="#" className="tf-mini-cart-tool-content">
                                <label htmlFor="Cart-note" className="tf-mini-cart-tool-text text-sm fw-medium">Order
                                    note</label>
                                <textarea name="note" id="Cart-note" placeholder="Instruction htmlFor seller..."></textarea>
                                <div className="tf-cart-tool-btns">
                                    <button className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                                        type="submit">Save</button>
                                    <div className="tf-btn btn-out-line-dark2 w-100 tf-mini-cart-tool-close">Close</div>
                                </div>
                            </form>
                        </div>
                        <div className="tf-mini-cart-tool-openable coupon">
                            <div className="overplay tf-mini-cart-tool-close"></div>
                            <form action="#" className="tf-mini-cart-tool-content">
                                <div className="tf-mini-cart-tool-text text-sm fw-medium">Add coupon</div>
                                <div className="tf-mini-cart-tool-text1">* Discount will be calculated and
                                    applied at checkout</div>
                                <input type="text" name="text" placeholder="" />
                                <div className="tf-cart-tool-btns">
                                    <button className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                                        type="submit">Save</button>
                                    <div className="tf-btn btn-out-line-dark2 w-100 tf-mini-cart-tool-close">Close</div>
                                </div>
                            </form>
                        </div>
                        <div className="tf-mini-cart-tool-openable estimate-shipping">
                            <div className="overplay tf-mini-cart-tool-close"></div>
                            <form id="shipping-form" className="tf-mini-cart-tool-content">
                                <div className="tf-mini-cart-tool-text text-sm fw-medium">Shipping estimates</div>
                                <div className="field">
                                    <p className="text-sm">Country</p>
                                    <div className="tf-select">
                                        <select className="w-100" id="shipping-country-form" name="address[country]" data-default="">
                                            <option value="Australia"
                                                data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'>
                                                Australia</option>
                                            <option value="Austria" data-provinces='[]'>Austria</option>
                                            <option value="Belgium" data-provinces='[]'>Belgium</option>
                                            <option value="Canada" data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'>Canada
                                            </option>
                                            <option value="Czech Republic" data-provinces='[]'>Czechia</option>
                                            <option value="Denmark" data-provinces='[]'>Denmark</option>
                                            <option value="Finland" data-provinces='[]'>Finland</option>
                                            <option value="France" data-provinces='[]'>France</option>
                                            <option value="Germany" data-provinces='[]'>Germany</option>
                                            <option value="United States"
                                                data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'>
                                                United States</option>
                                            <option value="United Kingdom"
                                                data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'>
                                                United Kingdom</option>
                                            <option value="India" data-provinces='[]'>India</option>
                                            <option value="Japan" data-provinces='[]'>Japan</option>
                                            <option value="Mexico" data-provinces='[]'>Mexico</option>
                                            <option value="South Korea" data-provinces='[]'>South Korea</option>
                                            <option value="Spain" data-provinces='[]'>Spain</option>
                                            <option value="Italy" data-provinces='[]'>Italy</option>
                                            <option value="Vietnam"
                                                data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'>
                                                Vietnam</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <p className="text-sm">State/Province</p>
                                    <div className="tf-select">
                                        <select id="shipping-province-form" name="address[province]" data-default=""></select>
                                    </div>
                                </div>
                                <div className="field">
                                    <p className="text-sm">Zipcode</p>
                                    <input type="text" data-opend-focus id="zipcode" name="address[zip]" defaultValue="Jhon Doe" />
                                </div>
                                <div id="zipcode-message" className="error" style={{ display: "none" }}>
                                    We found one shipping rate available htmlFor undefined.
                                </div>
                                <div id="zipcode-success" className="success" style={{ display: "none" }}>
                                    <p>We found one shipping rate available htmlFor your address:</p>
                                    <p className="standard">Standard at <span>$0.00</span> USD</p>
                                </div>
                                <div className="tf-cart-tool-btns">
                                    <button className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                                        type="submit">Estimate</button>
                                    <div className="tf-mini-cart-tool-primary tf-btn btn-out-line-dark2 w-100 tf-mini-cart-tool-close">
                                        Close</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}