import { Link } from "react-router-dom";

export default function ProductQuickViewModal() {
    return (
        <div className="modal fade modalCentered modal-quick-view" id="quickView">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                    <div className="tf-product-media-wrap">
                        <div dir="ltr" className="swiper tf-single-slide">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="item">
                                        <img className="lazyload" data-src="/assets/images/products/book/book1.jpg" src="/assets/images/products/book/book1.jpg"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <img className="lazyload" data-src="/assets/images/products/book/book2.jpg" src="/assets/images/products/book/book2.jpg"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <img className="lazyload" data-src="/assets/images/products/book/book3.jpg" src="/assets/images/products/book/book3.jpg"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-prev nav-swiper arrow-1 nav-prev-cls single-slide-prev"></div>
                            <div className="swiper-button-next nav-swiper arrow-1 nav-next-cls single-slide-next"></div>
                        </div>
                    </div>
                    <div className="tf-product-info-wrap">
                        <div className="tf-product-info-inner">
                            <div className="tf-product-heading">
                                <h6 className="product-name"><Link className="link" to="/product-details">RadRunner™ Plus</Link>
                                </h6>
                                <div className="product-price">
                                    <h6 className="price-new price-on-sale text-dark">$60.00</h6>
                                    <h6 className="price-old">$80.00</h6>
                                    <span className="badge-sale">20% Off</span>
                                </div>
                                <p className="text">A captivating book crafted with a durable hardcover yet lightweight design, perfect htmlFor
                                    all-day reading. Featuring an engaging narrative and well-structured chapters with precise storytelling
                                    that guides you effortlessly through every page.
                                </p>
                            </div>
                            <div className="tf-product-total-quantity">
                                <div className="group-btn">
                                    <div className="wg-quantity">
                                        <button className="btn-quantity minus-btn">-</button>
                                        <input className="quantity-product font-4" type="text" name="number" defaultValue="Jhon Doe" />
                                        <button className="btn-quantity plus-btn">+</button>
                                    </div>
                                    <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn hover-primary">Add to
                                        cart</Link>
                                </div>
                                <Link to="checkout.html" className="tf-btn w-100 animate-btn paypal btn-primary">Buy It Now</Link>
                                <Link to="checkout.html" className="more-choose-payment link">More payment options</Link>
                            </div>
                            <Link to="/product-details" className="view-details link">View full details <i
                                className="icon icon-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}