import { Link } from "react-router-dom";

export default function CompareProductViewModal() {
    return (
        <div className="modal modalCentered fade modal-compare" id="compare">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <span className="icon icon-close btn-hide-popup" data-bs-dismiss="modal"></span>
                    <div className="modal-compare-wrap list-file-delete">
                        <h6 className="title text-center">Compare Products</h6>
                        <div className="tf-compare-inner">
                            <div className="tf-compare-list">
                                <div className="tf-compare-item file-delete">
                                    <span className="icon-close remove"></span>
                                    <Link to="/product-details" className="image">
                                        <img className="lazyload" data-src="/assets/images/products/book/book1.jpg" src="/assets/images/products/book/book1.jpg"
                                            alt="" />
                                    </Link>
                                    <div className="content">
                                        <div className="text-title">
                                            <Link className="link text-line-clamp-2" to="/product-details">Lost Boy</Link>
                                        </div>
                                        <p className="price-wrap">
                                            <span className="new-price text-primary">$60.00</span>
                                            <span className="old-price text-decoration-line-through text-dark-1">$80.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="tf-compare-item file-delete">
                                    <span className="icon-close remove"></span>
                                    <Link to="/product-details" className="image">
                                        <img className="lazyload" data-src="/assets/images/products/book/book5.jpg" src="/assets/images/products/book/book5.jpg"
                                            alt="" />
                                    </Link>
                                    <div className="content">
                                        <div className="text-title">
                                            <Link className="link text-line-clamp-2" to="/product-details">The Other Side Of The Sky</Link>
                                        </div>
                                        <p className="price-wrap">
                                            <span className="new-price">$75.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="tf-compare-item file-delete">
                                    <span className="icon-close remove"></span>
                                    <Link to="/product-details" className="image">
                                        <img className="lazyload" data-src="/assets/images/products/book/book6.jpg" src="/assets/images/products/book/book6.jpg"
                                            alt="" />
                                    </Link>
                                    <div className="content">
                                        <div className="text-title">
                                            <Link className="link text-line-clamp-2" to="/product-details">Avengers Assemble</Link>
                                        </div>
                                        <p className="price-wrap">
                                            <span className="new-price text-primary">$65.00</span>
                                            <span className="old-price text-decoration-line-through text-dark-1">$75.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-compare-buttons justify-content-center">
                            <Link to="compare.html" className="tf-btn animate-btn justify-content-center">Compare</Link>
                            <div className="tf-btn btn-out-line-dark justify-content-center clear-file-delete"><span>Clear
                                All</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}