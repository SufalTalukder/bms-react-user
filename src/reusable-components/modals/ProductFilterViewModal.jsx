import { Link } from "react-router-dom";

export default function ProductFilterViewModal() {
    return (
        <div className="offcanvas offcanvas-start canvas-sidebar canvas-filter" id="filterShop">
            <div className="canvas-wrapper">
                <div className="canvas-header">
                    <span className="title">Filter</span>
                    <button className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="canvas-body">
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#collections" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="collections">
                            <span>Collections</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="collections" className="collapse show">
                            <ul className="collapse-body list-categories current-scrollbar">
                                <li className="cate-item">
                                    <Link className="text-sm link" to="/product-default">
                                        <span>Men’s top</span>
                                        <span className="count">(20)</span>
                                    </Link>
                                </li>
                                <li className="cate-item">
                                    <Link className="text-sm link" to="/product-default">
                                        <span>Men</span>
                                        <span className="count">(20)</span>
                                    </Link>
                                </li>
                                <li className="cate-item">
                                    <Link className="text-sm link" to="/product-default">
                                        <span>Women</span>
                                        <span className="count">(20)</span>
                                    </Link>
                                </li>
                                <li className="cate-item">
                                    <Link className="text-sm link" to="/product-default">
                                        <span>Kid</span>
                                        <span className="count">(20)</span>
                                    </Link>
                                </li>
                                <li className="cate-item">
                                    <Link className="text-sm link" to="/product-default">
                                        <span>T-shirt</span>
                                        <span className="count">(20)</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#availability" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="availability">
                            <span>Availability</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="availability" className="collapse show">
                            <ul className="collapse-body filter-group-check current-scrollbar">
                                <li className="list-item">
                                    <input type="radio" name="availability" className="tf-check" id="inStock" />
                                    <label htmlFor="inStock" className="label"><span>In stock</span>&nbsp;<span
                                        className="count">(20)</span></label>
                                </li>
                                <li className="list-item">
                                    <input type="radio" name="availability" className="tf-check" id="outStock" />
                                    <label htmlFor="outStock" className="label"><span>Out of stock</span>&nbsp;<span
                                        className="count">(3)</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#price" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="price">
                            <span>Price</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="price" className="collapse show">
                            <div className="collapse-body widget-price filter-price">
                                <span className="reset-price">Reset</span>
                                <div className="price-val-range" id="price-value-range" data-min="0" data-max="500"></div>
                                <div className="box-value-price">
                                    <span className="text-sm">Price:</span>
                                    <div className="price-box">
                                        <div className="price-val" id="price-min-value" data-currency="$"></div>
                                        <span>-</span>
                                        <div className="price-val" id="price-max-value" data-currency="$"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#color" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="color">
                            <span>Color</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="color" className="collapse show">
                            <div className="collapse-body filter-color-box flat-check-list">
                                <div className="check-item color-item color-check"><span className="color bg-yellow"></span><span
                                    className="color-text">Yellow</span></div>
                                <div className="check-item color-item color-check"><span className="color bg-dark"></span><span
                                    className="color-text">Black</span></div>
                                <div className="check-item color-item color-check line"><span
                                    className="color bg-white"></span><span className="color-text">White</span></div>
                                <div className="check-item color-item color-check"><span className="color bg-purple-3"></span><span
                                    className="color-text">Purple</span></div>
                                <div className="check-item color-item color-check"><span
                                    className="color bg-light-orange"></span><span className="color-text">Light Orange</span>
                                </div>
                                <div className="check-item color-item color-check"><span
                                    className="color bg-light-pink-4"></span><span className="color-text">Light Pink</span>
                                </div>
                                <div className="check-item color-item color-check"><span className="color bg-pink"></span><span
                                    className="color-text">Pink</span></div>
                                <div className="check-item color-item color-check"><span
                                    className="color bg-dark-green"></span><span className="color-text">Dark Green</span></div>
                                <div className="check-item color-item color-check"><span className="color bg-grey-4"></span><span
                                    className="color-text">Grey</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#size" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="size">
                            <span>Size</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="size" className="collapse show">
                            <div className="collapse-body filter-size-box flat-check-list">
                                <div className="check-item size-item size-check"><span className="size">XS</span>&nbsp;<span
                                    className="count">(10)</span></div>
                                <div className="check-item size-item size-check"><span className="size">S</span>&nbsp;<span
                                    className="count">(8)</span></div>
                                <div className="check-item size-item size-check"><span className="size">L</span>&nbsp;<span
                                    className="count">(20)</span></div>
                                <div className="check-item size-item size-check"><span className="size">M</span>&nbsp;<span
                                    className="count">(10)</span></div>
                                <div className="check-item size-item size-check"><span className="size">XL</span>&nbsp;<span
                                    className="count">(20)</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium" data-bs-target="#brand" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="brand">
                            <span>Brand</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="brand" className="collapse show">
                            <ul className="collapse-body filter-group-check current-scrollbar">
                                <li className="list-item">
                                    <input type="radio" name="brand" className="tf-check" id="Vineta" />
                                    <label htmlFor="Vineta" className="label"><span>Vineta</span>&nbsp;<span
                                        className="count">(11)</span></label>
                                </li>
                                <li className="list-item">
                                    <input type="radio" name="brand" className="tf-check" id="Zotac" />
                                    <label htmlFor="Zotac" className="label"><span>Zotac</span>&nbsp;<span
                                        className="count">(20)</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title text-xl fw-medium"><span>On sale</span></div>
                        <ul className="collapse-body list-recent">
                            <li>
                                <div className="recent-blog-item">
                                    <Link to="/product-details" className="img-product"><img
                                        src="/assets/images/products/recent/recent6.jpg" alt="img" /></Link>
                                    <div className="content">
                                        <Link to="/product-details" className="title text-md link fw-medium">Striped short
                                            sleeve shirt</Link>
                                        <div className="price text-md fw-medium">
                                            <span className="new-price">$80.00</span>
                                            <span className="old-price">$100.00</span>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="recent-blog-item">
                                    <Link to="/product-details" className="img-product"><img
                                        src="/assets/images/products/recent/recent7.jpg" alt="img" /></Link>
                                    <div className="content">
                                        <Link to="/product-details" className="title text-md link fw-medium">Short Sleeve
                                            Sweat</Link>
                                        <div className="price text-md fw-medium">
                                            <span className="new-price">$65.00</span>
                                            <span className="old-price">$90.00</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="widget-facet">
                        <div className="sb-banner hover-img">
                            <div className="image img-style">
                                <img src="/assets/images/blog/sb-banner.jpg" data-src=".//assets/images/blog/sb-banner.jpg" alt="banner"
                                    className="lazyload" />
                            </div>
                            <div className="banner-content">
                                <p className="title">
                                    Elevate <br /> Your Style
                                </p>
                                <Link to="#" className="tf-btn btn-white hover-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}